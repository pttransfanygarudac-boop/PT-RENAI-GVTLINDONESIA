/*
=========================================================
PT RENAI GVTL INDONESIA
NEWS ENGINE — v2
=========================================================

JANGAN mengedit file ini hanya untuk menambah berita.

UNTUK MENAMBAH BERITA:
1. Edit data/news-data.js
2. Copy template artikel.
3. Buat folder berita baru.
4. Pastikan "url" pada data benar.

File ini hanya bertugas membaca database berita
dan menampilkannya ke news.html.
=========================================================
*/

(function(){
  "use strict";

  const list = document.querySelector("#newsList");
  const filters = document.querySelector("#yearFilter");

  if(!list || !filters || !Array.isArray(window.RENAI_NEWS)) return;

  const sorted = [...window.RENAI_NEWS].sort(
    (a,b) => new Date(b.isoDate) - new Date(a.isoDate)
  );

  const years = [...new Set(sorted.map(item => item.year))];

  function renderFilters(){
    filters.innerHTML = "";

    const all = document.createElement("button");
    all.type = "button";
    all.className = "year-button is-active";
    all.dataset.year = "all";
    all.textContent = "Semua";
    filters.appendChild(all);

    years.forEach(function(year){
      const button = document.createElement("button");
      button.type = "button";
      button.className = "year-button";
      button.dataset.year = String(year);
      button.textContent = year;
      filters.appendChild(button);
    });

    filters.querySelectorAll(".year-button").forEach(function(button){
      button.addEventListener("click", function(){
        filters.querySelectorAll(".year-button")
          .forEach(item => item.classList.remove("is-active"));

        button.classList.add("is-active");
        renderNews(button.dataset.year);
      });
    });
  }

  function renderNews(year){
    const items = year === "all"
      ? sorted
      : sorted.filter(item => String(item.year) === String(year));

    if(!items.length){
      list.innerHTML = '<div class="news-empty">Belum ada berita pada tahun tersebut.</div>';
      return;
    }

    list.innerHTML = items.map(function(item){
      const cover = item.image
        ? `<img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy">`
        : `<div class="news-cover-placeholder">PT RENAI GVTL INDONESIA</div>`;

      return `
        <article class="news-card">
          <a class="news-cover" href="${item.url}" aria-label="Buka ${escapeHtml(item.title)}">
            ${cover}
          </a>

          <div>
            <div class="news-meta">${escapeHtml(item.date)} · ${escapeHtml(item.category)}</div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.excerpt)}</p>
            <a class="news-read" href="${item.url}">Baca selengkapnya →</a>
          </div>
        </article>
      `;
    }).join("");
  }

  function escapeHtml(value){
    return String(value)
      .replaceAll("&","&amp;")
      .replaceAll("<","&lt;")
      .replaceAll(">","&gt;")
      .replaceAll('"',"&quot;")
      .replaceAll("'","&#039;");
  }

  renderFilters();
  renderNews("all");
})();
