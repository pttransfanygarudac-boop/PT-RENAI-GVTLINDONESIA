/*
=========================================================
PT RENAI GVTL INDONESIA
NEWS DATABASE — v2
=========================================================

CARA MENAMBAH BERITA:
---------------------------------------------------------
1. COPY object berita yang sudah ada.
2. Paste DI BAWAH berita terakhir.
3. Ubah semua nilai sesuai berita baru.
4. Buat folder:
   news/TAHUN/ID-BERITA/
5. Copy:
   templates/news-article-template.html
   menjadi:
   news/TAHUN/ID-BERITA/article.html
6. Tambahkan foto ke folder artikel jika diperlukan.
7. Pastikan "url" menunjuk ke article.html.

CATATAN:
- id harus unik.
- isoDate gunakan YYYY-MM-DD.
- year harus berupa angka.
- Jangan hapus koma antar object.
=========================================================
*/

window.RENAI_NEWS = [
  {
    // ID UNIK — UBAH DI SINI untuk berita baru.
    id: "21-juli-2026-awal-gagasan-renai-gvtl",

    // TAHUN — UBAH DI SINI.
    year: 2026,

    // TANGGAL TAMPIL — UBAH DI SINI.
    date: "21 Juli 2026",

    // FORMAT SISTEM / SEO — UBAH DI SINI.
    isoDate: "2026-07-21",

    // KATEGORI — UBAH DI SINI.
    category: "Company",

    // JUDUL — UBAH DI SINI.
    title: "Awal Munculnya Gagasan RENAI GVTL",

    // RINGKASAN — UBAH DI SINI.
    excerpt:
      "Perjalanan RENAI GVTL dimulai dari gagasan awal. Pada tahap ini belum ada produk yang diluncurkan dan konsep masih berada dalam proses pembentukan.",

    // URL ARTIKEL — UBAH DI SINI.
    url: "news/2026/001-awal-gagasan-renai-gvtl/article.html",

    // COVER — UBAH DI SINI jika sudah ada foto.
    // Kosongkan string jika belum ada.
    image: ""
  }



  // ======================================================
  // TAMBAH BERITA BARU DI SINI
  // COPY OBJECT DI ATAS, PASTE DI SINI, LALU UBAH DATA.
  // ======================================================
];
