const $ = (id) => document.getElementById(id);
const example = {
  notes: "# Ϊʲô�����ֵҪ��Ȩ��\n\n## ����֪ʶ��\n���������ĵ�λ������ͬ������ȫ����λ��ƽ����ʱ��Ӧ��ÿ����ƽ��ֵ���Ը����ĵ�λ������ͺ�����ܵ�λ����\n\n## �������\nA ������ 20 �� 10 = 200 �룬B ������ 80 �� 20 = 1,600 �롣�ܹ� 100 ����λ�����������ֵΪ (200 + 1,600) �� 100 = 18 �롣\n\n## �״���\n15 �����������ξ�ֵ�ļ�ƽ������Ŀ�ʵ��� 100 ����λ��ƽ����ʱ��Ӧ�� 18 �롣",
  translation: "The mean across all units needs a weighted calculation.\nȫ����λ�ľ�ֵ��Ҫͨ����Ȩ����õ���\n\nEach batch mean represents a different number of units.\nÿ����ƽ��ֵ�����ĵ�λ����������ͬ��\n\nThe simple mean of the two batch means is 15 s.\n�������ξ�ֵ�ļ�ƽ��Ϊ 15 �롣\n\nThe mean across all 100 units is 18 s.\nȫ�� 100 ����λ��ƽ��ֵΪ 18 �롣"
};
let pdf, pdfModule, renderTask, config, storageKey;
let page = 1, revision = 0, tab = "notes", editing = false, opening = false;
let records = {1: {...example}};
const pending = new Set();
function status(message) { $("status").textContent = message; }
function record() { return records[page] ??= {notes: "", translation: ""}; }
function persist() {
  if (!storageKey) return true;
  try { localStorage.setItem(storageKey, JSON.stringify(records)); return true; }
  catch { status("������޷�����ʼǡ����ȵ���������ˢ�º�ʧ��"); return false; }
}
function renderText(container, text) {
  container.replaceChildren();
  for (const block of text.trim().split(/\n\s*\n/)) {
    const lines = block.split("\n");
    while (/^#{1,3} /.test(lines[0] ?? "")) {
      const match = lines.shift().match(/^(#{1,3}) (.*)$/);
      const heading = document.createElement("h" + match[1].length);
      heading.textContent = match[2];
      container.append(heading);
    }
    if (lines.join("").trim()) {
      const paragraph = document.createElement("p");
      paragraph.textContent = lines.join("\n");
      container.append(paragraph);
    }
  }
}
function refresh() {
  $("counter").textContent = page + " / " + (pdf?.numPages ?? 1);
  $("notePage").textContent = "�� " + page + " ҳ";
  $("prev").disabled = opening || page <= 1;
  $("next").disabled = opening || page >= (pdf?.numPages ?? 1);
  $("generate").disabled = opening || editing || pending.has(page);
  $("generate").textContent = pending.has(page) ? "�������ɡ�" : "���ɱ�ҳ�ʼ�";
  $("notesTab").setAttribute("aria-pressed", tab === "notes");
  $("translationTab").setAttribute("aria-pressed", tab === "translation");
  $("editor").hidden = !editing;
  $("preview").hidden = editing;
  $("mode").textContent = editing ? "Markdown �༭" : "�Ķ�Ԥ��";
  $("edit").textContent = editing ? "���" : "�༭";
  if (editing) $("editor").value = record()[tab];
  else renderText($("preview"), record()[tab] || (tab === "notes" ? "��ҳ��û�бʼǡ��ɵ���༭��������ģ�����ɡ�" : "��ҳ��û�������ա�"));
}
async function draw() {
  const currentPage = page;
  const doc = pdf;
  const marker = ++revision;
  const previous = renderTask;
  if (previous) {
    previous.cancel();
    await previous.promise.catch(() => {});
  }
  if (!doc || marker !== revision) return;
  try {
    const pdfPage = await doc.getPage(currentPage);
    if (marker !== revision) return;
    const viewport = pdfPage.getViewport({scale: 1.6});
    const canvas = $("pdfCanvas");
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    renderTask = pdfPage.render({canvasContext: canvas.getContext("2d"), viewport});
    await renderTask.promise;
    if (marker === revision) $("viewport").scrollTop = 0;
  } catch (error) {
    if (marker === revision && error.name !== "RenderingCancelledException") status("�޷���ʾ�� " + currentPage + " ҳ��");
  }
}
$("file").addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file || opening) return;
  opening = true;
  refresh();
  status("���ڴ� PDF��");
  try {
    pdfModule ??= await import("https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.min.mjs");
    pdfModule.GlobalWorkerOptions.workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs";
    const bytes = await file.arrayBuffer();
    const hash = await crypto.subtle.digest("SHA-256", bytes);
    const id = Array.from(new Uint8Array(hash), byte => byte.toString(16).padStart(2, "0")).join("");
    const loaded = await pdfModule.getDocument({data: new Uint8Array(bytes), isEvalSupported: false}).promise;
    const previous = pdf;
    pdf = loaded;
    storageKey = "course-notes:" + id;
    records = {};
    try { records = JSON.parse(localStorage.getItem(storageKey) || "{}") || {}; } catch {}
    pending.clear();
    page = 1;
    editing = false;
    tab = "notes";
    $("filename").textContent = file.name;
    $("sample").hidden = true;
    $("pdfCanvas").hidden = false;
    status("PDF �ڵ�ǰ������ж�ȡ���ʼ��Զ������ڴ��������");
    await draw();
    if (previous) await previous.destroy();
  } catch (error) {
    status(error.name === "PasswordException" ? "��� PDF �����뱣���������ý�����ĸ����򿪡�" : "�� PDF ʧ�ܡ���ȷ���ļ���Ч������� PDF �Ķ�������������ӡ�");
  } finally {
    opening = false;
    event.target.value = "";
    refresh();
  }
});
function move(offset) {
  page += offset;
  editing = false;
  refresh();
  void draw();
}
$("prev").onclick = () => move(-1);
$("next").onclick = () => move(1);
$("notesTab").onclick = () => { tab = "notes"; editing = false; refresh(); };
$("translationTab").onclick = () => { tab = "translation"; editing = false; refresh(); };
$("edit").onclick = () => { editing = !editing; refresh(); if (editing) $("editor").focus(); };
$("editor").oninput = () => { record()[tab] = $("editor").value; persist(); };
$("settings").onclick = () => {
  for (const field of ["endpoint", "model", "key"]) $(field).value = config?.[field] ?? "";
  $("config").showModal();
};
$("saveConfig").onclick = (event) => {
  const fields = Object.fromEntries(["endpoint", "model", "key"].map(field => [field, $(field).value.trim()]));
  try {
    if (new URL(fields.endpoint).protocol !== "https:" || !fields.model || !fields.key) throw new Error();
  } catch {
    event.preventDefault();
    $("endpoint").setCustomValidity("����д HTTPS �ӿڵ�ַ��ģ�����ƺ���Կ��");
    $("endpoint").reportValidity();
    $("endpoint").setCustomValidity("");
    return;
  }
  config = fields;
  $("key").value = "";
  status("ģ�������ѱ��棬�������ɵ�ǰҳ�ıʼǡ�");
};
$("generate").onclick = async () => {
  if (!pdf) { status("��ǰ������ʾ�������ȴ��Լ��� PDF��"); return; }
  if (!config) { $("settings").click(); return; }
  const doc = pdf;
  const target = page;
  const existing = {...record()};
  const settings = config;
  pending.add(target);
  refresh();
  status("���ڶ�ȡ�� " + target + " ҳ�����ɱʼǡ�");
  try {
    const pdfPage = await doc.getPage(target);
    const content = await pdfPage.getTextContent();
    const source = content.items.filter(item => "str" in item).map(item => item.str + (item.hasEOL ? "\n" : " ")).join("").trim();
    if (!source) throw new Error("��ҳû�п���ȡ�����֡�ɨ��������� OCR�����ֶ����ӱʼǡ�");
    const response = await fetch(settings.endpoint, {
      method: "POST",
      headers: {"Content-Type": "application/json", Authorization: "Bearer " + settings.key},
      signal: AbortSignal.timeout(90000),
      body: JSON.stringify({model: settings.model, messages: [
        {role: "system", content: "�������������ѧ���Ŀγ����̡����û����Ŀμ�ҳ����ԭʼ���ϣ��������е����ֻ��� JSON�����������ַ����ֶ� notes �� translation��notes �� Markdown����֪ʶ����͸����ʽ���ɴ�����ȷ�ϵı�������⣬������״��㡣translation ��ԭ��˳�������Ӣ��һ������һ�䣬ÿ��֮�������С���Դû�е���Ϣ��Ҫ���졣"},
        {role: "user", content: source}
      ]})
    });
    if (!response.ok) throw new Error("ģ�ͽӿڷ��� HTTP " + response.status + "������ӿڵ�ַ����Կ��ģ�����ơ�");
    const body = await response.json();
    const raw = body.choices?.[0]?.message?.content ?? "";
    let generated;
    try { generated = JSON.parse(raw.trim().replace(/^\x60{3}(?:json)?\s*|\s*\x60{3}$/gi, "")); }
    catch { throw new Error("ģ��û�з��ؿɶ�ȡ�ıʼǡ������ԡ�"); }
    if (typeof generated.notes !== "string" || !generated.notes.trim() || typeof generated.translation !== "string" || !generated.translation.trim()) throw new Error("ģ�ͷ��ص����ݲ������������ԡ�");
    if (doc !== pdf) return;
    const current = records[target];
    if (current.notes !== existing.notes || current.translation !== existing.translation) {
      status("�����ڼ�� " + target + " ҳ�ıʼ��ѱ��༭������������޸ġ�");
      return;
    }
    records[target] = {notes: generated.notes, translation: generated.translation};
    if (persist()) status("�� " + target + " ҳ�����ɡ������л����������ա��鿴���ġ�");
  } catch (error) {
    if (doc === pdf) status(error instanceof TypeError ? "�޷�����ģ�ͽӿڡ��������缰�ӿ��Ƿ�������������" : error.message);
  } finally {
    if (doc === pdf) { pending.delete(target); refresh(); }
  }
};
function exportLines() {
  const pages = Object.entries(records).filter(([, item]) => item.notes.trim() || item.translation.trim());
  return pages.map(([number, item]) => "## �� " + number + " ҳ\n\n" + item.notes.trim() + (item.translation.trim() ? "\n\n### ��Ӣ��������\n\n" + item.translation.trim() : "")).join("\n\n");
}
function download(blob, extension) {
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.href = url;
  link.download = $("filename").textContent.replace(/\.pdf$/i, "") + "-�ʼ�." + extension;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
  $("exportDialog").close();
}
$("export").onclick = () => {
  if (!exportLines()) { status("�������ӻ����ɱʼǡ�"); return; }
  $("exportDialog").showModal();
};
$("exportMd").onclick = () => download(new Blob(["# �μ��ʼ�\n\n", exportLines()], {type: "text/markdown;charset=utf-8"}), "md");
$("exportDocx").onclick = async () => {
  const button = $("exportDocx");
  button.disabled = true;
  const content = exportLines();
  try {
    const {Document, Paragraph, HeadingLevel, Packer} = await import("https://cdn.jsdelivr.net/npm/docx@9.5.1/dist/index.mjs");
    const children = ["# �μ��ʼ�", "", ...content.split("\n")].map(line => {
      const heading = line.match(/^(#{1,3}) (.*)$/);
      return new Paragraph(heading ? {text: heading[2], heading: HeadingLevel["HEADING_" + heading[1].length]} : {text: line});
    });
    const document = new Document({sections: [{children}]});
    download(await Packer.toBlob(document), "docx");
  } catch {
    $("exportDialog").close();
    status("Word �������δ�ܼ��أ�������������ԡ�Ҳ���Ե��� Markdown��");
  } finally { button.disabled = false; }
};
refresh();

