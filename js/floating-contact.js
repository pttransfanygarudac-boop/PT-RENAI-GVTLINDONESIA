/* =========================================================
   PT RENAI GVTL INDONESIA
   FLOATING CONTACT
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

                <a class="floating-item" href="https://wa.me/6281385869321" target="_blank" rel="noopener noreferrer">
                    <span class="floating-icon">WA</span>
                    <span class="floating-label">WhatsApp</span>
                </a>

                <a class="floating-item" href="https://www.facebook.com/share/1EijJZuAN4/" target="_blank" rel="noopener noreferrer">
                    <span class="floating-icon">FB</span>
                    <span class="floating-label">Facebook</span>
                </a>

                <a class="floating-item" href="https://www.facebook.com/share/g/1DcFZBmMp3/" target="_blank" rel="noopener noreferrer">
                    <span class="floating-icon">GR</span>
                    <span class="floating-label">Facebook Group</span>
                </a>

                <a class="floating-item" href="https://vm.tiktok.com/ZS9kDddPDJUsf-qQQHe/" target="_blank" rel="noopener noreferrer">
                    <span class="floating-icon">TT</span>
                    <span class="floating-label">TikTok</span>
                </a>

                <a class="floating-item" href="mailto:renaigvtl@gmail.com">
                    <span class="floating-icon">@</span>
                    <span class="floating-label">Email</span>
                </a>

            </div>

            <button class="floating-toggle" type="button" aria-label="Buka kontak cepat" aria-expanded="false">
                <span>+</span>
            </button>

        `;


        document.body.appendChild(wrapper);


        const toggle = wrapper.querySelector(".floating-toggle");


        toggle.addEventListener("click", function () {

            const opened = wrapper.classList.toggle("is-open");

            toggle.setAttribute("aria-expanded", opened ? "true" : "false");

        });


        document.addEventListener("click", function (event) {

            if (!wrapper.contains(event.target)) {

                wrapper.classList.remove("is-open");

                toggle.setAttribute("aria-expanded", "false");

            }

        });

    }


    document.addEventListener("DOMContentLoaded", initFloatingContact);

})();
