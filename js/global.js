/*
=========================================================
PT RENAI GVTL INDONESIA
GLOBAL JAVASCRIPT — v2
=========================================================

FUNGSI:
1. Mobile navigation.
2. Menutup menu setelah link diklik.
3. Menandai halaman aktif berdasarkan aria-current.

Kalau ingin menambah fungsi global website,
tambahkan di file ini dengan komentar yang jelas.
=========================================================
*/

(function(){
  "use strict";

  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");

  if(!toggle || !menu) return;

  toggle.addEventListener("click", function(){
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  menu.querySelectorAll("a").forEach(function(link){
    link.addEventListener("click", function(){
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded","false");
    });
  });

  document.addEventListener("keydown", function(event){
    if(event.key === "Escape"){
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded","false");
    }
  });
})();
