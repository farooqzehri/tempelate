const C=document.getElementById('C'),C2=document.getElementById('C2');
let mx=0,my=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;C.style.left=mx+'px';C.style.top=my+'px'});
setInterval(()=>{C2.style.left=mx+'px';C2.style.top=my+'px'},80);
document.querySelectorAll('button,a,[onclick]').forEach(el=>{el.addEventListener('mouseenter',()=>C.classList.add('big'));el.addEventListener('mouseleave',()=>C.classList.remove('big'))});

window.addEventListener('scroll',()=>{document.getElementById('nav').classList.toggle('scrolled',window.scrollY>50)});

function go(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  ['home','about','services','contact'].forEach(n=>{
    const el=document.getElementById('n'+n[0]);
    if(el)el.classList.toggle('active',n===id);
  });
  window.scrollTo({top:0,behavior:'smooth'});
  setTimeout(initReveal,150);
}

function initReveal(){
  const els=document.querySelectorAll('.page.active .rev');
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach((e,i)=>{if(e.isIntersecting)setTimeout(()=>e.target.classList.add('vis'),i*80)});
  },{threshold:.08});
  els.forEach(el=>{el.classList.remove('vis');obs.observe(el)});
}

function submitForm(){
  const btn=document.querySelector('.f-sub');
  btn.textContent='Message Sent ✓';
  btn.style.background='#0a7c3e';
  setTimeout(()=>{btn.textContent='Send Message →';btn.style.background=''},3000);
}

setTimeout(initReveal,400);