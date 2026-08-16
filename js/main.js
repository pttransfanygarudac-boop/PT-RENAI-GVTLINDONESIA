/* =========================================================
   PT RENAI GVTL INDONESIA — MAIN.JS
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /* =====================================================
           01. MOBILE MENU
           ===================================================== */

        const toggle =
            document.querySelector(".menu-toggle");

        const menu =
            document.querySelector(".nav-menu");


        if (toggle && menu) {

            toggle.addEventListener(
                "click",
                () => {

                    menu.classList.toggle("open");

                }
            );


            menu.querySelectorAll("a").forEach(
                (link) => {

                    link.addEventListener(
                        "click",
                        () => {

                            menu.classList.remove("open");

                        }
                    );

                }
            );

        }


        /* =====================================================
           02. SCROLL REVEAL
           ===================================================== */

        const revealItems =
            document.querySelectorAll(".reveal");


        if ("IntersectionObserver" in window) {

            const observer =
                new IntersectionObserver(
                    (entries) => {

                        entries.forEach(
                            (entry) => {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target.classList.add(
                                        "is-visible"
                                    );

                                    observer.unobserve(
                                        entry.target
                                    );

                                }

                            }
                        );

                    },
                    {
                        threshold: 0.12
                    }
                );


            revealItems.forEach(
                (item) => {

                    observer.observe(item);

                }
            );

        } else {

            revealItems.forEach(
                (item) => {

                    item.classList.add(
                        "is-visible"
                    );

                }
            );

        }


        /* =====================================================
           03. FLOATING CONTACT
           ===================================================== */

        document
            .querySelectorAll(".floating-contact")
            .forEach(
                (floating) => {

                    const button =
                        floating.querySelector(".floating-toggle");

                    if (!button) {
                        return;
                    }

                    button.addEventListener(
                        "click",
                        () => {

                            const isOpen =
                                floating.classList.toggle("is-open");

                            button.setAttribute(
                                "aria-expanded",
                                String(isOpen)
                            );

                        }
                    );

                }
            );


        /* =====================================================
           04. FOOTER YEAR
           ===================================================== */

        document
            .querySelectorAll("[data-year]")
            .forEach(
                (element) => {

                    element.textContent =
                        new Date().getFullYear();

                }
            );

    }
);
