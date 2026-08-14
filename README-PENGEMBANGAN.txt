PT RENAI GVTL INDONESIA
WEBSITE FOUNDATION v2
=========================================================

INI ADALAH FONDASI WEBSITE BARU.
HTML + CSS + JAVASCRIPT SUDAH DIBUAT ULANG.

=========================================================
STRUKTUR UTAMA
=========================================================

index.html
company.html
renai-gvtl.html
news.html
archive.html
contact.html

css/
  global.css
  news.css

js/
  global.js
  news.js

data/
  news-data.js

templates/
  news-article-template.html

news/
  2026/
    001-awal-gagasan-renai-gvtl/
      article.html

=========================================================
CARA MENAMBAH BERITA
=========================================================

1. Copy folder artikel terakhir.
2. Rename folder.
3. Buka article.html hasil copy.
4. Ganti semua bagian "EDIT DI SINI".
5. Jika perlu, masukkan gambar ke folder artikel.
6. Buka data/news-data.js.
7. Copy object berita terakhir.
8. Paste pada komentar:
   TAMBAH BERITA BARU DI SINI
9. Ubah id, tanggal, judul, ringkasan, URL, dll.
10. Selesai.

JANGAN mengedit kartu berita secara manual di news.html.

=========================================================
KETERANGAN FILE
=========================================================

global.css
  Sistem desain seluruh website.

news.css
  Style khusus News dan artikel.

global.js
  Navigasi mobile dan fungsi umum.

news.js
  Membaca database berita dan membuat filter tahun.

news-data.js
  TEMPAT UTAMA MENAMBAH BERITA.

news-article-template.html
  Template artikel baru.

archive.html
  RC Perusahaan / sejarah dan milestone.

=========================================================
DATA SAAT INI
=========================================================

Status:
Foundation Stage.

RENAI GVTL:
Masih dalam tahap kerangka akhir.

ChatGVTL:
Sedang dikerjakan.

News awal:
21 Juli 2026 — Awal Munculnya Gagasan RENAI GVTL.

Social media:
TikTok: RenAI GVTL
Facebook: RenAI GVTL
Facebook Group: PT RENAI GVTL Indonesia
Instagram: belum tersedia
YouTube: belum tersedia

Alamat:
Sementara / belum final.

Kontak:
Sementara / belum final.

=========================================================
CATATAN
=========================================================

Komentar "EDIT DI SINI", "TAMBAH BERITA BARU DI SINI",
dan petunjuk lain sengaja dipertahankan di dalam kode.

Tujuannya supaya website tetap mudah dikembangkan meskipun
file ini dibuka kembali beberapa bulan atau tahun kemudian.


=========================================================
VISUAL v3
=========================================================
Versi ini tidak lagi memakai hero yang monoton.
Hero memiliki visual abstrak teknologi, layered gradient,
glass cards, accent cyan + violet, status strip, grid,
dan responsive layout.
