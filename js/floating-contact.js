/* PT RENAI GVTL — Navbar Contact Toggle */
(function(){
"use strict";
const icons={
wa:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.5 3.5A11.3 11.3 0 0 0 2.7 17.1L2 22l5-1.3a11.3 11.3 0 1 0 13.5-17.2ZM12 20.1a8.8 8.8 0 0 1-4.5-1.2l-.3-.2-3 .8.8-2.9-.2-.3a8.8 8.8 0 1 1 7.2 3.8Zm4.9-6.6c-.3-.2-1.8-.9-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.8 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.4-3.8-3.2-.3-.5.3-.5.8-1.6.1-.2 0-.4-.1-.6l-.6-1.5c-.2-.4-.3-.4-.6-.4h-.5c-.2 0-.6.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.2 2.9 1.1 2.9.7 3.4.7.5-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.5-.1-.1-.3-.2-.6-.4Z"/></svg>',
fb:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 8h2.5V4.2c-.4-.1-1.7-.2-3.2-.2-3.2 0-5.4 1.9-5.4 5.5v3H4.4v4.2h3.5V22h4.3v-5.3h3.6l.6-4.2h-4.2V10c0-1.2.3-2 1.8-2Z"/></svg>',
tt:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M15.7 3c.3 1.8 1.4 3 3.3 3.2v3.1a7.4 7.4 0 0 1-3.3-1V15a6 6 0 1 1-6-6c.4 0 .8 0 1.2.1v3.2a3 3 0 1 0 1.8 2.7V3h3Z"/></svg>',
mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>'
};
function init(){
 if(document.querySelector('.navbar-contact')) return;
 const bar=document.querySelector('.navbar');
 if(!bar) return;
 const anchor=bar.querySelector('.menu-toggle');
 if(!anchor) return;
 const wrap=document.createElement('div');
 wrap.className='navbar-contact';
 wrap.innerHTML=`<button class="navbar-contact-toggle" type="button" aria-label="Buka kontak cepat" aria-expanded="false"><span>+</span></button>
 <div class="navbar-contact-items" hidden>
 <a href="https://wa.me/6281385869321" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">${icons.wa}<span>WhatsApp</span></a>
 <a href="https://www.facebook.com/share/1EijJZuAN4/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">${icons.fb}<span>Facebook</span></a>
 <a href="https://www.facebook.com/share/g/1DcFZBmMp3/" target="_blank" rel="noopener noreferrer" aria-label="Facebook Group">${icons.fb}<span>Facebook Group</span></a>
 <a href="https://vm.tiktok.com/ZS9kDddPDJUsf-qQQHe/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">${icons.tt}<span>TikTok</span></a>
 <a href="mailto:renaigvtl@gmail.com" aria-label="Email">${icons.mail}<span>Email</span></a>
 </div>`;
 anchor.insertAdjacentElement('afterend',wrap);
 const t=wrap.querySelector('.navbar-contact-toggle'), items=wrap.querySelector('.navbar-contact-items');
 t.addEventListener('click',e=>{e.stopPropagation();const open=items.hasAttribute('hidden'); if(open) items.removeAttribute('hidden'); else items.setAttribute('hidden',''); t.setAttribute('aria-expanded',open?'true':'false');});
 document.addEventListener('click',e=>{if(!wrap.contains(e.target)){items.setAttribute('hidden','');t.setAttribute('aria-expanded','false');}});
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
