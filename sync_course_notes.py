import argparse
import json
import os
from pathlib import Path
import re
import shutil
import subprocess
from urllib.parse import quote, unquote

parser = argparse.ArgumentParser()
parser.add_argument("source", type=Path)
parser.add_argument("--check", action="store_true")
args = parser.parse_args()
repo = Path(__file__).resolve().parent
source = args.source.resolve(strict=True)
published_folder = "马来西亚-数据科学硕士"
if source.name not in {published_folder, "Malaysia_Datascience"} or not source.is_dir():
    raise SystemExit("Please select the Malaysia_Datascience or 马来西亚-数据科学硕士 folder.")
dest = repo / "knowledge-base" / published_folder
group_keys = {"1023": "python", "1043": "writing", "1063": "statistics"}
extensions = {".md", ".png", ".jpg", ".jpeg", ".gif", ".webp", ".avif"}
pages = [repo / "index.html", repo / "knowledge-base/index.html"]
pattern = re.compile(r"(\bfiles=)(\[.*?\])(, prefix=)", re.S)
env = dict(os.environ, GIT_TERMINAL_PROMPT="0", GCM_INTERACTIVE="never")

def git(*command):
    return subprocess.check_output(
        ["git", "-c", "http.sslBackend=openssl", *command],
        cwd=repo, env=env, text=True,
    ).strip()

if not args.check:
    if git("status", "--porcelain"):
        raise SystemExit("The sync checkout has pending changes. Review them before retrying.")
    git("pull", "--ff-only", "origin", "main")

home = pages[0].read_text(encoding="utf-8")
match = pattern.search(home)
if not match:
    raise SystemExit("Cannot find the website's note index.")
entries = json.loads(match[2])
by_path = {unquote(item["path"]): item for item in entries}
next_id = max((item["id"] for item in entries), default=0) + 1
changes = []
for path in sorted(source.rglob("*")):
    relative = path.relative_to(source)
    if len(relative.parts) < 2 or any(part.startswith(".") for part in relative.parts):
        continue
    group = group_keys.get(relative.parts[0].split(" ", 1)[0])
    if not group or not path.is_file() or path.suffix.lower() not in extensions:
        continue
    if not path.resolve().is_relative_to(source):
        continue
    if path.name == "2 Python第二章_中文逐句稿与零基础讲解.md":
        relative = relative.with_name(path.name[2:])
    target = dest / relative
    index_path = (Path(published_folder) / relative).as_posix()
    if path.suffix.lower() == ".md" and index_path not in by_path:
        entries.append({"id": next_id, "group": group, "title": relative.stem,
                        "path": quote(index_path, safe="/~!*'()")})
        next_id += 1
    original = path.read_bytes()
    previous = target.read_bytes() if target.is_file() else None
    if previous is not None and path.suffix.lower() == ".md":
        original = original.replace(b"\r\n", b"\n")
        previous = previous.replace(b"\r\n", b"\n")
    if previous != original:
        changes.append((path, target))

index = json.dumps(entries, ensure_ascii=False, separators=(",", ":")).replace("<", r"\u003c")
updates = {}
for page in pages:
    old = page.read_text(encoding="utf-8")
    new, count = pattern.subn(lambda m: m[1] + index + m[3], old, count=1)
    if count != 1:
        raise SystemExit(f"Cannot update the note index in {page.name}.")
    if new != old:
        updates[page] = new

print(f"{len(changes)} content updates, {len(updates)} index updates.")
for _, target in changes:
    print(target.relative_to(repo))
if args.check:
    raise SystemExit(0)

for original, target in changes:
    target.parent.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(original, target)
for page, content in updates.items():
    page.write_text(content, encoding="utf-8", newline="\n")
if changes or updates:
    git("add", "--", "knowledge-base", "index.html")
    if git("diff", "--cached", "--name-only"):
        git("commit", "-m", "Sync public course notes")
if git("rev-list", "--count", "origin/main..HEAD") != "0":
    git("push", "origin", "HEAD:main")
