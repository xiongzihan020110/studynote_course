const repository='xiongzihan020110/studynote_course';
const prefix='knowledge-base/马来西亚-数据科学硕士/';
const $=id=>document.getElementById(id);
const enc=new TextEncoder(),dec=new TextDecoder();
let token='',head='',tree='',entries=[],folder='',editPath='',editSha=null,original='',queue={};
const encode=bytes=>{let text='';for(let i=0;i<bytes.length;i+=8192)text+=String.fromCharCode(...bytes.subarray(i,i+8192));return btoa(text);};
const decode=text=>Uint8Array.from(atob(text.replace(/\s/g,'')),c=>c.charCodeAt(0));
async function api(path,body,method){
 const response=await fetch('https://api.github.com/repos/'+repository+path,{method:method||(body?'POST':'GET'),headers:{Authorization:'Bearer '+token,Accept:'application/vnd.github+json','Content-Type':'application/json'},...(body?{body:JSON.stringify(body)}:{})});
 const result=await response.json();
 if(!response.ok)throw Error(response.status===401?'令牌无效或已过期':response.status===403?'GitHub 拒绝写入，请检查 Contents 权限或请求额度':result.message||'GitHub 请求失败');
 return result;
}
async function blob(path){const entry=entries.find(e=>e.path===path);if(!entry)return null;const data=await api('/git/blobs/'+entry.sha);return decode(data.content);}
async function read(path,fallback=''){const bytes=await blob(path);return bytes?dec.decode(bytes):fallback;}
async function refresh(){
 const branch=await api('/git/ref/heads/main');head=branch.object.sha;
 const commit=await api('/git/commits/'+head);tree=commit.tree.sha;
 const listing=await api('/git/trees/'+tree+'?recursive=1');if(listing.truncated)throw Error('目录过大，请联系维护者');
 entries=listing.tree.filter(e=>e.type==='blob');queue=JSON.parse(await read('online-changes.json','{}'));draw();
}
async function commitFiles(changes,message){
 const latest=await api('/git/ref/heads/main');if(latest.object.sha!==head)throw Error('仓库刚刚被同步或修改，请刷新后重试。编辑内容仍保留在窗口中。');
 const elements=[];
 for(const [path,data] of Object.entries(changes)){
  if(data===null){if(entries.some(e=>e.path===path))elements.push({path,mode:'100644',type:'blob',sha:null});continue;}
  const b=await api('/git/blobs',{content:encode(typeof data==='string'?enc.encode(data):data),encoding:'base64'});
  elements.push({path,mode:'100644',type:'blob',sha:b.sha});
 }
 const next=await api('/git/trees',{base_tree:tree,tree:elements});
 const c=await api('/git/commits',{message,tree:next.sha,parents:[head]});
 await api('/git/refs/heads/main',{sha:c.sha,force:false},'PATCH');
 $('status').textContent='已发布到 GitHub。等待 GitHub Pages 构建完成后刷新网站。提交 '+c.sha.slice(0,7);
 await refresh();
}
function escapeJSON(value){return JSON.stringify(value).replace(/</g,'\\u003c');}
async function contentChange(path,data,baseline){
 if(!path.startsWith(prefix)||path.split('/').some(p=>p==='..'||p.startsWith('.')))throw Error('文件路径无效');
 if((entries.find(e=>e.path===path)?.sha??null)!==baseline)throw Error('该文件已发生变化，请重新打开');
 const pending={...queue};pending[path]={base:(Object.hasOwn(pending,path)?pending[path].base:baseline),deleted:data===null};
 const pages=['index.html','knowledge-base/index.html'];const changes={[path]:data};
 const remaining=entries.filter(e=>e.path.startsWith(prefix)&&e.path!==path).map(e=>e.path);if(data!==null)remaining.push(path);
 const first=await read(pages[0]);const match=first.match(/\bfiles=(\[.*?\]), prefix=/s);if(!match)throw Error('网站目录格式不兼容');
 const previous=JSON.parse(match[1]);const old=new Map(previous.map(f=>[decodeURIComponent(f.path),f]));let id=Math.max(0,...previous.map(f=>f.id))+1;
 const files=remaining.sort().map(p=>old.get(p.slice('knowledge-base/'.length))??{id:id++,group:'other',title:p.split('/').at(-1),path:p.slice('knowledge-base/'.length).split('/').map(encodeURIComponent).join('/')});
 const folders=new Set();for(const p of remaining){let parts=p.slice(prefix.length).split('/');parts.pop();while(parts.length){folders.add(parts.join('/'));parts.pop();}}
 for(const page of pages){let html=page===pages[0]?first:await read(page);html=html.replace(/(\bfiles=)(\[.*?\])(, prefix=)/s,(_,a,b,c)=>a+escapeJSON(files)+c).replace(/^( +const syncedFolders=)(\[.*\]);$/m,(_,a)=>a+escapeJSON([...folders].sort())+';');changes[page]=html;}
 changes['online-changes.json']=JSON.stringify(pending,null,2);
 await commitFiles(changes,'Update knowledge base content from online management');
}
function draw(){
 $('path').textContent='知识库 / '+folder;const body=$('list');body.replaceChildren();const folders=new Set(),files=[];
 for(const e of entries){if(!e.path.startsWith(prefix+folder))continue;const rest=e.path.slice((prefix+folder).length);if(!rest)continue;if(rest.includes('/'))folders.add(rest.split('/')[0]);else files.push(e);}
 function row(name,action){const tr=document.createElement('tr'),td=document.createElement('td'),ops=document.createElement('td');td.append(name);tr.append(td,ops);body.append(tr);action(ops);}
 for(const name of [...folders].sort()){const b=document.createElement('button');b.className='name';b.textContent='📁 '+name;b.onclick=()=>{folder+=name+'/';draw();};row(b,()=>{});}
 for(const f of files.sort((a,b)=>a.path.localeCompare(b.path,'zh-CN',{numeric:true}))){const label=document.createElement('span');label.textContent=f.path.split('/').at(-1);row(label,ops=>{
  if(/\.md$/i.test(f.path)){const b=document.createElement('button');b.textContent='编辑';b.onclick=()=>run(async()=>{editPath=f.path;editSha=f.sha;original=await read(f.path);$('text').value=original;$('filename').value=label.textContent;$('filename').disabled=true;$('edit-status').textContent='';$('editor').showModal();});ops.append(b);}
  const del=document.createElement('button');del.textContent='删除';del.onclick=()=>run(async()=>{if(confirm('从网站删除 '+label.textContent+'？下次电脑同步也会接收此删除。'))await contentChange(f.path,null,f.sha);});ops.append(del);
 });}
}
async function run(action){const buttons=[...document.querySelectorAll('button')];buttons.forEach(b=>b.disabled=true);try{await action();}catch(e){$('status').textContent='未完成：'+e.message;if($('editor').open)$('edit-status').textContent=e.message;}finally{buttons.forEach(b=>b.disabled=false);}}
function close(){if($('text').value!==original&&!confirm('放弃未保存的内容？'))return;$('editor').close();}
$('connect').onclick=()=>run(async()=>{token=$('token').value.trim();$('token').value='';if(!token)throw Error('请输入访问令牌');await refresh();await loadStyle();$('manager').hidden=false;$('login').hidden=true;$('status').textContent='已连接，可编辑网站。';});
$('logout').onclick=()=>{token='';location.reload();};$('up').onclick=()=>{folder=folder.split('/').filter(Boolean).slice(0,-1).join('/');if(folder)folder+='/';draw();};$('root').onclick=()=>{folder='';draw();};$('reload').onclick=()=>run(refresh);
$('new').onclick=()=>{editPath='';editSha=null;original='';$('filename').value='';$('filename').disabled=false;$('text').value='';$('edit-status').textContent='';$('editor').showModal();};$('close').onclick=close;$('editor').addEventListener('cancel',e=>{e.preventDefault();close();});
$('save-note').onclick=()=>run(async()=>{let name=$('filename').value.trim();if(!name||/[\\/<>:"|?*]/.test(name))throw Error('请填写有效的文件名');if(!name.endsWith('.md'))name+='.md';await contentChange(editPath||prefix+folder+name,enc.encode($('text').value),editSha);original=$('text').value;$('editor').close();});
$('upload').onclick=()=>$('file').click();$('file').onchange=()=>run(async()=>{for(const file of $('file').files){if(file.size>15*1024*1024)throw Error('单个文件请小于 15 MB');const path=prefix+folder+file.name;const old=entries.find(e=>e.path===path);if(old&&!confirm('覆盖 '+file.name+'？'))continue;await contentChange(path,new Uint8Array(await file.arrayBuffer()),old?.sha??null);}$('file').value='';});
$('tab-style').onclick=()=>{$('styles').hidden=false;$('contents').hidden=true;};$('tab-content').onclick=()=>{$('styles').hidden=true;$('contents').hidden=false;};
let style={};async function loadStyle(){const home=await read('index.html');style={title:home.match(/const homeTitle="([^"]*)"/)?.[1]??'欢迎来到Xizh的知识库',brand:'xizh',email:'xzh210858572@163.com',button:'enter',footer:'仅用于个人学习，任何人不得随意转载',cream:'#f6eedb',gold:'#f0c91f',background:'#0b1028',panel:'#161e3c',text:'#f7f8ff',accent:'#ff84ad',font:'serif',size:18,...JSON.parse(await read('site-admin.json','{}'))};for(const [k,v]of Object.entries(style)){const field=$('style-form').elements.namedItem(k);if(field)field.value=v;}}
async function resized(id){const file=$(id).files[0];if(!file)return null;const bitmap=await createImageBitmap(file);try{if(id==='hero'&&bitmap.width<=bitmap.height)throw Error('封面请选择横版图');const scale=Math.min(1,(id==='hero'?1800:256)/Math.max(bitmap.width,bitmap.height));const canvas=document.createElement('canvas');canvas.width=Math.round(bitmap.width*scale);canvas.height=Math.round(bitmap.height*scale);canvas.getContext('2d').drawImage(bitmap,0,0,canvas.width,canvas.height);return canvas.toDataURL('image/webp',.86);}finally{bitmap.close();}}
$('style-form').onsubmit=e=>{e.preventDefault();run(async()=>{
 const c={...style,...Object.fromEntries(new FormData($('style-form')))};for(const key of ['cream','gold','background','panel','text','accent'])if(!/^#[\da-f]{6}$/i.test(c[key]))throw Error('颜色格式无效');c.size=Math.max(14,Math.min(28,Number(c.size)||18));
 const changes={};let css=`:root{--bg:\$bg;--paper:\$panel;--ink:\$text;--accent:\$accent}.home{--bg:\$cream}.home .topbar{background:\$cream}.gold-action{background:\$gold}.reader{font-size:\$sizepx;line-height:1.85}`;for(const key of ['background','panel','text','accent','cream','gold','size'])css=css.replaceAll('$'+(key==='background'?'bg':key),String(c[key]));
 const fonts={serif:'"Cormorant Garamond",SimSun,serif',sans:'Inter,"Microsoft YaHei",sans-serif',rounded:'"Bricolage Grotesque","Microsoft YaHei",sans-serif'};css+='.hero-photo h1{font-family:'+(fonts[c.font]||fonts.serif)+'}';
 for(const id of ['hero','avatar']){const data=await resized(id);if(data){c[id+'Image']=data;}if(c[id+'Image'])css+=(id==='hero'?'.hero-photo':'.brand-mark.brand-avatar')+'{background-image:'+(id==='hero'?'linear-gradient(#100d0866,#0e0b088f),':'')+'url("'+c[id+'Image']+'")}';else if(c[id])css+=(id==='hero'?'.hero-photo':'.brand-mark.brand-avatar')+'{background-image:url("admin-'+id+'.webp")}';}
 changes['admin-theme.css']=css;changes['site-admin.json']=JSON.stringify(c,null,2);
 const publicValues={title:c.title,brand:c.brand,email:c.email,button:c.button,footer:c.footer};
 changes['admin-theme.js']='document.addEventListener("DOMContentLoaded",()=>{const c='+escapeJSON(publicValues)+';const b=document.querySelector(".brand");if(b){for(const n of [...b.childNodes])if(n.nodeType===3)n.remove();b.append(c.brand);}for(const [q,k]of [[".hero-photo h1","title"],["#hero-browse","button"],[".site-footer","footer"]]){const e=document.querySelector(q);if(e)e.textContent=c[k];}const m=document.getElementById("top-contact");if(m){m.textContent=c.email;m.href="mailto:"+c.email;m.style.display=c.email?"":"none";}});';
 for(const page of ['index.html','knowledge-base/index.html']){let html=await read(page);if(!html.includes('admin-theme.css')){const p=page.startsWith('knowledge-base/')?'../':'./';html=html.replace('</head>','<link rel="stylesheet" href="'+p+'admin-theme.css"><script defer src="'+p+'admin-theme.js"></script></head>');}html=html.replace(/(const homeTitle=)"[^"\n]*";/,(_,a)=>a+escapeJSON(c.title)+';');changes[page]=html;}
 await commitFiles(changes,'Update website appearance from online management');style=c;$('hero').value='';$('avatar').value='';
 });};
