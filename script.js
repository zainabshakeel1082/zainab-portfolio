// Loader hide
window.addEventListener('load', ()=>{
  const loader = document.getElementById('loader');
  setTimeout(()=>{ loader.style.opacity='0'; loader.style.pointerEvents='none'; },700);
});

// Typing effect
const texts = ['I\'m a Web Developer','also a Graphic Designer','I\'ve just completed my Intermediate in CS'];
let t=0, c=0, del=false;
const typed = document.getElementById('typed');
function loop(){ const cur=texts[t]; if(!del){ c++; typed.textContent=cur.substring(0,c); if(c===cur.length){ del=true; setTimeout(loop,1200); return; }} else { c--; typed.textContent=cur.substring(0,c); if(c===0){ del=false; t=(t+1)%texts.length; }} setTimeout(loop, del?40:80); }
document.addEventListener('DOMContentLoaded', ()=>{ loop(); document.getElementById('year').textContent=new Date().getFullYear(); 
  // mobile menu
  const menu = document.querySelector('.menu-btn'); const nav=document.querySelector('.nav-links');
  if(menu) menu.addEventListener('click', ()=>{ if(nav.style.display==='flex') nav.style.display='none'; else { nav.style.display='flex'; nav.style.flexDirection='column'; } });
});