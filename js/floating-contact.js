/* =========================================================
   PT RENAI GVTL INDONESIA — FLOATING CONTACT
   ========================================================= */

(function () {

    "use strict";

    function initFloatingContact() {

        if (document.querySelector(".floating-contact")) {
            return;
        }

        const wrapper = document.createElement("div");

        wrapper.className = "floating-contact";

        wrapper.innerHTML = `

            <div class="floating-contact-items">

                <a
                    class="floating-item"
                    href="https://wa.me/${RENAI_CONTACT.whatsapp}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp PT RENAI GVTL Indonesia"
                >
                    <span class="floating-icon">WA</span>
                    <span class="floating-label">WhatsApp</span>
                </a>

                <a
                    class="floating-item"
                    href="${RENAI_CONTACT.facebookProfile}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Profile PT RENAI GVTL Indonesia"
                >
                    <span class="floating-icon">FB</span>
                    <span class="floating-label">Facebook Profile</span>
                </a>

                <a
                    class="floating-item"
                    href="${RENAI_CONTACT.facebookGroup}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Group PT RENAI GVTL Indonesia"
                >
                    <span class="floating-icon">GR</span>
                    <span class="floating-label">Facebook Group</span>
                </a>

                <a
                    class="floating-item"
                    href="${RENAI_CONTACT.tiktok}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok RENAI GVTL"
                >
                    <span class="floating-icon">TT</span>
                    <span class="floating-label">TikTok</span>
                </a>

                <a
                    class="floating-item"
                    href="mailto:${RENAI_CONTACT.email}"
                    aria-label="Email PT RENAI GVTL Indonesia"
                >
                    <span class="floating-icon">@</span>
                    <span class="floating-label">Email</span>
                </a>

            </div>

            <button
                class="floating-toggle"
                type="button"
                aria-label="Buka kontak"
                aria-expanded="false"
            >
                <span>+</span>
            </button>

        `;

        document.body.appendChild(wrapper);

        const toggle =
            wrapper.querySelector(".floating-toggle");

        toggle.addEventListener("click", function () {

            const opened =
                wrapper.classList.toggle("is-open");

            toggle.setAttribute(
                "aria-expanded",
                opened ? "true" : "false"
            );

        });

        document.addEventListener("click", function (event) {

            if (!wrapper.contains(event.target)) {

                wrapper.classList.remove("is-open");

                toggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            initFloatingContact
        );

    } else {

        initFloatingContact();

    }

})();
