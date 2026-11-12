import argparse
import json
import os
from pathlib import Path
import re
import shutil
import subprocess
import sys
from urllib.parse import quote, unquote

parser = argparse.ArgumentParser()
parser.add_argument("source", type=Path)
parser.add_argument("--check", action="store_true")
parser.add_argument("--git", default="git")
args = parser.parse_args()
repo = Path(__file__).resolve().parent
source = args.source.resolve(strict=True)
published_folder = "马来西亚-数据科学硕士"
if source.name not in {published_folder, "Malaysia_Datascience"} or not source.is_dir():
    raise SystemExit("Please select the Malaysia_Datascience or 马来西亚-数据科学硕士 folder.")
dest = repo / "knowledge-base" / published_folder
group_keys = {"1023": "python", "1043": "writing", "1063": "statistics"}
pages = [repo / "index.html", repo / "knowledge-base/index.html"]
pattern = re.compile(r"(\bfiles=)(\[.*?\])(, prefix=)", re.S)
folder_pattern = re.compile(r"^( +const syncedFolders=)(\[.*\]);$", re.M)
env = dict(os.environ, GIT_TERMINAL_PROMPT="0", GCM_INTERACTIVE="never")

def git(*command):
    result = subprocess.run(
        [args.git, "-c", f"safe.directory={repo.as_posix()}",
         "-c", "http.sslBackend=openssl", *command],
        cwd=repo, env=env, stdout=subprocess.PIPE, text=True, encoding="utf-8",
        errors="replace",
    )
    if result.returncode:
        print(f"git {command[0]} exited with code {result.returncode}.", file=sys.stderr)
        raise SystemExit(result.returncode)
    return result.stdout.strip()

if not args.check:
    if git("status", "--porcelain"):
        raise SystemExit("The sync checkout has pending changes. Review them before retrying.")
    script = Path(__file__).resolve()
    running_version = script.read_bytes()
    git("pull", "--ff-only", "origin", "main")
    if script.read_bytes() != running_version:
        raise SystemExit(subprocess.call([sys.executable, *sys.argv]))

home = pages[0].read_text(encoding="utf-8")
match = pattern.search(home)
if not match:
    raise SystemExit("Cannot find the website's note index.")
previous_entries = json.loads(match[2])
by_path = {unquote(item["path"]): item for item in previous_entries}
next_id = max((item["id"] for item in previous_entries), default=0) + 1
entries = []
folders = []
expected = set()
changes = []
for path in sorted(source.rglob("*")):
    relative = path.relative_to(source)
    if any(part.startswith(".") for part in relative.parts):
        continue
    if path.is_symlink() or getattr(path, "is_junction", lambda: False)() or not path.resolve().is_relative_to(source):
        continue
    if path.is_dir():
        folders.append(relative.as_posix())
    if not path.is_file():
        continue
    group = "other"
    if len(relative.parts) > 1:
        group = group_keys.get(relative.parts[0].split(" ", 1)[0], "other")
    target = dest / relative
    expected.add(target)
    index_path = (Path(published_folder) / relative).as_posix()
    existing = by_path.get(index_path)
    note_id = existing["id"] if existing else next_id
    entries.append({"id": note_id, "group": group, "title": relative.name,
                    "path": quote(index_path, safe="/~!*'()")})
    if not existing:
        next_id += 1
    original = path.read_bytes()
    previous = target.read_bytes() if target.is_file() else None
    if previous is not None and path.suffix.lower() == ".md":
        original = original.replace(b"\r\n", b"\n")
        previous = previous.replace(b"\r\n", b"\n")
    if previous != original:
        changes.append((path, target))

# The two HTML files under knowledge-base are site infrastructure.
protected = {repo / "knowledge-base/index.html", repo / "knowledge-base/python/index.html"}
tracked = git("-c", "core.quotepath=false", "ls-files", "-z", "--", "knowledge-base", "python-chapter-2.md")
stale = sorted(repo / name for name in tracked.split("\0")
               if name and repo / name not in expected | protected)

index = json.dumps(entries, ensure_ascii=False, separators=(",", ":")).replace("<", r"\u003c")
folder_index = json.dumps(folders, ensure_ascii=False, separators=(",", ":")).replace("<", r"\u003c")
updates = {}
for page in pages:
    old = page.read_text(encoding="utf-8")
    new, count = pattern.subn(lambda m: m[1] + index + m[3], old, count=1)
    if count != 1:
        raise SystemExit(f"Cannot update the note index in {page.name}.")
    new, folder_count = folder_pattern.subn(lambda m: m[1] + folder_index + ";", new, count=1)
    if folder_count != 1:
        raise SystemExit(f"Cannot update the website's folder index in {page.name}.")
    if new != old:
        updates[page] = new

print(f"{len(changes)} content updates, {len(updates)} index updates, {len(stale)} removals.")
for _, target in changes:
    print(target.relative_to(repo))
for target in stale:
    print(f"Remove: {target.relative_to(repo)}")
if args.check:
    raise SystemExit(0)

for target in stale:
    target.unlink()
for original, target in changes:
    target.parent.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(original, target)
for page, content in updates.items():
    page.write_text(content, encoding="utf-8", newline="\n")
if changes or updates or stale:
    git("add", "-A", "--", "knowledge-base", "index.html")
    if repo / "python-chapter-2.md" in stale:
        git("add", "-u", "--", "python-chapter-2.md")
    if git("diff", "--cached", "--name-only"):
        git("commit", "-m", "Sync public course notes")
if git("rev-list", "--count", "origin/main..HEAD") != "0":
    git("push", "origin", "HEAD:main")
