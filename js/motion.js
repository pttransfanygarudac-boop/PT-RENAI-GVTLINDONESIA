/* =========================================================
   PT RENAI GVTL INDONESIA
   SCROLL REVEAL
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

        }, { threshold: .12 });


        elements.forEach(function (element) {

            observer.observe(element);

        });

    }


    document.addEventListener("DOMContentLoaded", initReveal);

})();
