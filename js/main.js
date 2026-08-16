/* =========================================================
   PT RENAI GVTL INDONESIA
   MAIN JAVASCRIPT
   ========================================================= */

(function () {

    "use strict";


    function initMenu() {

        const button = document.querySelector(".menu-toggle");

        const menu = document.querySelector(".nav-menu");


        if (!button || !menu) {

            return;

        }


        button.addEventListener("click", function () {

            menu.classList.toggle("is-open");

        });


        menu.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                menu.classList.remove("is-open");

            });

        });

    }


    function initYear() {

        document.querySelectorAll("[data-year]").forEach(function (element) {

            element.textContent = new Date().getFullYear();

        });

    }


    document.addEventListener("DOMContentLoaded", function () {

        initMenu();

        initYear();

    });

})();
