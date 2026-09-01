(function(){
"use strict";
function icon(isLight){return isLight?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M3 12h2M19 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/><circle cx="12" cy="12" r="4"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M20.5 14.7A8.5 8.5 0 0 1 9.3 3.5 8.5 8.5 0 1 0 20.5 14.7Z"/></svg>';}
function init(){
 if(document.getElementById('renai-theme-toggle')) return;
 const saved=localStorage.getItem('renai-theme'), light=saved==='light';
 document.documentElement.dataset.renaiTheme=light?'light':'dark';
 const b=document.createElement('button');b.id='renai-theme-toggle';b.type='button';
 function sync(){const isLight=document.documentElement.dataset.renaiTheme==='light';b.setAttribute('aria-label',isLight?'Gunakan mode gelap':'Gunakan mode putih');b.setAttribute('title',isLight?'Mode gelap':'Mode putih');b.innerHTML=icon(isLight);}
 sync();
 const bar=document.querySelector('.navbar'), contact=bar&&bar.querySelector('.navbar-contact'), menu=bar&&bar.querySelector('.menu-toggle');
 if(contact) contact.insertAdjacentElement('afterend',b); else if(menu) menu.insertAdjacentElement('afterend',b); else if(bar) bar.appendChild(b); else document.body.appendChild(b);
 b.addEventListener('click',()=>{const next=document.documentElement.dataset.renaiTheme!=='light';document.documentElement.dataset.renaiTheme=next?'light':'dark';localStorage.setItem('renai-theme',next?'light':'dark');sync();});
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>setTimeout(init,0)); else setTimeout(init,0);
})();
