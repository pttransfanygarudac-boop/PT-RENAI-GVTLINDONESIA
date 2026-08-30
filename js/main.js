/* =========================================================
   PT RENAI GVTL INDONESIA
   MAIN JAVASCRIPT — NAVIGATION SYSTEM v6
   ========================================================= */

(function () {
    "use strict";

    function initMenu() {
        const button = document.querySelector(".menu-toggle");
        const menu = document.querySelector(".nav-menu");

        if (!button || !menu) return;

        button.addEventListener("click", function () {
            const open = menu.classList.toggle("is-open");
            button.setAttribute("aria-expanded", String(open));
            button.setAttribute(
                "aria-label",
                open ? "Tutup menu navigasi" : "Buka menu navigasi"
            );
        });

        menu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                menu.classList.remove("is-open");
                button.setAttribute("aria-expanded", "false");
                button.setAttribute("aria-label", "Buka menu navigasi");

                menu.querySelectorAll(".nav-dropdown.is-open").forEach(function (item) {
                    item.classList.remove("is-open");
                    const toggle = item.querySelector(".nav-dropdown-toggle");
                    if (toggle) toggle.setAttribute("aria-expanded", "false");
                });
            });
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                menu.classList.remove("is-open");
                button.setAttribute("aria-expanded", "false");
                button.setAttribute("aria-label", "Buka menu navigasi");

                menu.querySelectorAll(".nav-dropdown.is-open").forEach(function (item) {
                    item.classList.remove("is-open");
                    const toggle = item.querySelector(".nav-dropdown-toggle");
                    if (toggle) toggle.setAttribute("aria-expanded", "false");
                });
            }
        });
    }

    function initDropdowns() {
        document.querySelectorAll(".nav-dropdown").forEach(function (dropdown) {
            const toggle = dropdown.querySelector(".nav-dropdown-toggle");
            if (!toggle) return;

            toggle.addEventListener("click", function (event) {
                event.preventDefault();

                const isOpen = dropdown.classList.toggle("is-open");
                toggle.setAttribute("aria-expanded", String(isOpen));

                document.querySelectorAll(".nav-dropdown.is-open").forEach(function (other) {
                    if (other !== dropdown) {
                        other.classList.remove("is-open");
                        const otherToggle = other.querySelector(".nav-dropdown-toggle");
                        if (otherToggle) otherToggle.setAttribute("aria-expanded", "false");
                    }
                });
            });
        });

        document.addEventListener("click", function (event) {
            if (!event.target.closest(".nav-dropdown")) {
                document.querySelectorAll(".nav-dropdown.is-open").forEach(function (dropdown) {
                    dropdown.classList.remove("is-open");
                    const toggle = dropdown.querySelector(".nav-dropdown-toggle");
                    if (toggle) toggle.setAttribute("aria-expanded", "false");
                });
            }
        });
    }

    function initYear() {
        document.querySelectorAll("[data-year]").forEach(function (element) {
            element.textContent = new Date().getFullYear();
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        initMenu();
        initDropdowns();
        initYear();
    });
})();
