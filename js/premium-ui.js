/* PT RENAI GVTL — Premium UI: theme + automatic translation */
(function(){
  'use strict';
  const KEY='renai-theme';
  const root=document.documentElement;
  const saved=localStorage.getItem(KEY);
  const system=window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches;
  root.dataset.renaiTheme=saved||(system?'light':'dark');

  function build(){
    if(document.getElementById('renai-premium-tools')) return;
    const bar=document.createElement('div');bar.id='renai-premium-tools';bar.setAttribute('aria-label','Pengaturan tampilan dan bahasa');
    const label=document.createElement('span');label.className='renai-tool-label';label.textContent='RENAI';
    const theme=document.createElement('button');theme.type='button';theme.id='renai-theme-toggle';theme.setAttribute('aria-label','Ganti mode tampilan');
    const lang=document.createElement('select');lang.id='renai-language';lang.setAttribute('aria-label','Pilih bahasa');
    [['id','Indonesia'],['en','English'],['ms','Melayu'],['ja','日本語'],['ko','한국어'],['zh-CN','中文'],['ar','العربية']].forEach(([v,t])=>{const o=document.createElement('option');o.value=v;o.textContent=t;lang.appendChild(o)});
    const hidden=document.createElement('div');hidden.id='renai-translate';
    bar.append(label,theme,lang);document.body.append(bar,hidden);
    function sync(){const light=root.dataset.renaiTheme==='light';theme.textContent=light?'☀️':'◐';theme.title=light?'Gunakan Dark Web':'Gunakan White Web';}
    theme.addEventListener('click',()=>{root.dataset.renaiTheme=root.dataset.renaiTheme==='light'?'dark':'light';localStorage.setItem(KEY,root.dataset.renaiTheme);sync();});sync();
    lang.addEventListener('change',()=>translate(lang.value));
    const gt=document.createElement('script');gt.src='https://translate.google.com/translate_a/element.js?cb=renaiGoogleTranslateInit';gt.async=true;document.head.appendChild(gt);
    window.renaiGoogleTranslateInit=function(){new google.translate.TranslateElement({pageLanguage:'id',includedLanguages:'id,en,ms,ja,ko,zh-CN,ar',autoDisplay:false},'renai-translate');};
    function translate(code){
      const select=document.querySelector('.goog-te-combo');
      if(!select){setTimeout(()=>translate(code),600);return;}
      select.value=code;select.dispatchEvent(new Event('change'));
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',build); else build();
})();
