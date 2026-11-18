document.addEventListener("DOMContentLoaded",()=>{const c={"title": "欢迎来到Xizh的知识库", "brand": "xizh", "email": "", "button": "ENTER", "footer": "仅用于个人学习，任何人不得随意转载", "cream": "#f6eedb", "gold": "#f0c91f", "background": "#0b1028", "panel": "#161e3c", "text": "#f7f8ff", "accent": "#ff84ad", "font": "serif", "size": 18, "hero": "", "avatar": ""};const brand=document.querySelector('.brand');
if(brand){for(const node of [...brand.childNodes])if(node.nodeType===3)node.remove();brand.append(c.brand);}
const title=document.querySelector('.hero-photo h1');if(title)title.textContent=c.title;
const button=document.getElementById('hero-browse');if(button)button.textContent=c.button;
const email=document.getElementById('top-contact');if(email){email.textContent=c.email;email.href='mailto:'+c.email;if(!c.email)email.style.display='none';}
const footer=document.querySelector('.site-footer');if(footer)footer.textContent=c.footer;
});