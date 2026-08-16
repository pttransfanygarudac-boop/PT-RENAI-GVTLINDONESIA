/* =========================================================
   PT RENAI GVTL INDONESIA — DASHBOARD SITE NAVIGATION
   ========================================================= */

(function () {

    "use strict";


    function initDashboardNavigation() {

        const toggle =
            document.getElementById("siteNavToggle");

        const panel =
            document.getElementById("siteNavPanel");

        const backdrop =
            document.getElementById("siteNavBackdrop");


        if (!toggle || !panel || !backdrop) {

            return;

        }


        function setOpen(open) {

            toggle.classList.toggle(
                "is-open",
                open
            );

            panel.classList.toggle(
                "is-open",
                open
            );

            backdrop.classList.toggle(
                "is-open",
                open
            );

            toggle.setAttribute(
                "aria-expanded",
                open ? "true" : "false"
            );

        }


        toggle.addEventListener(
            "click",
            function () {

                setOpen(
                    !panel.classList.contains("is-open")
                );

            }
        );


        backdrop.addEventListener(
            "click",
            function () {

                setOpen(false);

            }
        );


        panel.querySelectorAll("a").forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        setOpen(false);

                    }
                );

            }
        );


        document.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Escape") {

                    setOpen(false);

                }

            }
        );

    }


    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            initDashboardNavigation
        );

    } else {

        initDashboardNavigation();

    }

})();
