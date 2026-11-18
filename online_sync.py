"""Apply reviewed online edits before the local-to-website mirror runs."""
import hashlib
import json
import os
import tempfile
from pathlib import Path, PurePosixPath


def blob_hash(data, markdown=False):
    if data is None:
        return None
    if markdown:
        data = data.replace(b'\r\n', b'\n')
    return hashlib.sha1(b'blob ' + str(len(data)).encode() + b'\0' + data).hexdigest()


def apply_online(repo, source, published_folder, check=False):
    manifest = repo / 'online-changes.json'
    if not manifest.exists():
        return False
    pending = json.loads(manifest.read_text(encoding='utf-8'))
    prefix = 'knowledge-base/' + published_folder + '/'
    plan = []
    for name, change in pending.items():
        if not name.startswith(prefix):
            raise ValueError('Invalid online change path')
        relative = PurePosixPath(name[len(prefix):])
        if relative.is_absolute() or not relative.parts or any(p.startswith('.') or ':' in p or '\\' in p for p in relative.parts):
            raise ValueError('Invalid online change filename')
        local = source.joinpath(*relative.parts)
        remote = repo.joinpath(*PurePosixPath(name).parts)
        if not local.resolve().is_relative_to(source.resolve()) or not remote.resolve().is_relative_to(repo.resolve()):
            raise ValueError('Online change escapes the knowledge base')
        for parent in [local, *local.parents]:
            if parent == source.parent:
                break
            if parent.is_symlink() or getattr(parent, 'is_junction', lambda: False)():
                raise ValueError('Online change targets a linked directory')
        current = local.read_bytes() if local.is_file() else None
        desired = None if change['deleted'] else remote.read_bytes()
        markdown = local.suffix.lower() == '.md'
        current_hash = blob_hash(current, markdown)
        if current_hash == blob_hash(desired, markdown):
            continue
        if local.is_dir() or current_hash != change.get('base'):
            raise ValueError('Online/local conflict: ' + str(relative) + '. Keep the desired version in Obsidian, then resolve this pending online edit before retrying.')
        plan.append((local, current, desired))
    if check:
        print(f'{len(plan)} online edits waiting to be received locally.')
        return bool(pending)
    # The complete set has been checked before making any local changes.
    for local, expected, desired in plan:
        current = local.read_bytes() if local.is_file() else None
        if current != expected:
            raise ValueError('Local file changed during synchronization: ' + str(local))
        if desired is None:
            local.unlink()
        else:
            local.parent.mkdir(parents=True, exist_ok=True)
            fd, name = tempfile.mkstemp(prefix='.online-', dir=local.parent)
            try:
                with os.fdopen(fd, 'wb') as stream:
                    stream.write(desired)
                if expected is None:
                    os.link(name, local)
                else:
                    os.replace(name, local)
            finally:
                Path(name).unlink(missing_ok=True)
        print('Received online edit: ' + str(local.relative_to(source)))
    if pending:
        manifest.write_text('{}\n', encoding='utf-8')
    return bool(pending)
