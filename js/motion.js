/* =========================================================
   PT RENAI GVTL INDONESIA
   SCROLL REVEAL (REVISED)
   ========================================================= */

(function () {
    "use strict";

    function initReveal() {
        const elements = document.querySelectorAll(".reveal");

        if (!elements.length) {
            return;
        }

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            elements.forEach(function (element) {
                element.classList.add("is-visible");
            });
            return;
        }

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { 
            // Ubah threshold menjadi sangat kecil agar langsung terpicu
            threshold: 0.02, 
            // Tambahkan rootMargin agar elemen bersiap muncul sebelum terscroll penuh
            rootMargin: "0px 0px -30px 0px" 
        });

        elements.forEach(function (element) {
            observer.observe(element);
        });
    }

    // Pengecekan agar fungsi tetap jalan jika DOMContentLoaded sudah terlewat
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initReveal);
    } else {
        initReveal();
    }
})();