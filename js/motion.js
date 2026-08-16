/* =========================================================
   PT RENAI GVTL INDONESIA — GLOBAL SCROLL ANIMATION
   ========================================================= */

(function () {

    "use strict";

    function initMotion() {

        const elements =
            document.querySelectorAll(".reveal");

        if (!elements.length) {
            return;
        }

        if (
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches
        ) {

            elements.forEach(function (element) {

                element.classList.add("is-visible");

            });

            return;
        }

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "is-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );

        elements.forEach(function (element) {

            observer.observe(element);

        });

    }

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            initMotion
        );

    } else {

        initMotion();

    }

})();
