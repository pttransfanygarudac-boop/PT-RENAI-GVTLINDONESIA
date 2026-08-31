PT RENAI GVTL INDONESIA — WEBSITE

STRUKTUR UTAMA
- index.html
- company.html
- renai-gvtl.html
- news.html
- career.html
- contact.html

ARCHIVE
- archive.html sudah dihapus dari website.

NEWS
- Tambahkan berita baru di folder /news/
- Tambahkan kartu berita baru di news.html pada bagian komentar TAMBAH BERITA BARU DI SINI.
- Gambar berita disimpan di /assets/images/ dan menggunakan PNG.

FOUNDER
Nama resmi: Reno Aurora Redian Narendra Wijaya Putra Silvana
Jabatan: Founder & Owner

KONTAK RESMI
Alamat: Blok Langgeng, Desa Wanahayu, Kecamatan Maja, Kabupaten Majalengka, Jawa Barat, Indonesia
Email: renaigvtl@gmail.com
WhatsApp: +62 813-8586-9321

SEO
- Canonical memakai URL GitHub Pages aktif.
- Organization JSON-LD tersedia di setiap halaman.
- robots.txt dan sitemap.xml sudah diperbarui.
- Tidak ada halaman archive yang dicantumkan di sitemap.

KARIER
- career.html ditambahkan ke navigasi dan sitemap.


=========================================================
DASHBOARD NAVIGATION
=========================================================

Dashboard tersedia di:
dashboard/index.html

Dashboard memiliki toggle navigasi internal menuju:
- Beranda
- Perusahaan
- RENAI GVTL
- News
- Career
- Kontak
- Dashboard

Menu Dashboard juga tersedia di navigasi website utama.


NAVIGATION UPGRADE — 29 AGUSTUS 2026
- Navbar root pages diseragamkan.
- Technology: Chat GVTL, RENAI Image, RENAI Router.
- Research: Activity, Experiment, Documentation.
- Identity: Identitas, Founder.
- Mobile menu toggle dan dropdown dibuat accessible.
- Footer root/news pages memuat seluruh halaman utama yang tersedia.


UPGRADE 31 AGUSTUS 2026
- Public identity unified as PT RENAI GVTL Indonesia / RENAI GVTL.
- GitHub Pages remains the current canonical host until renaigvtl.id is active.
- Homepage received a public identity rail and accessibility layer.
- Dashboard rebuilt as a public information dashboard; it does not claim live server telemetry.
- Image paths were intentionally preserved; supplied ZIP may omit image folders for size.
- robots.txt and sitemap.xml updated for the current GitHub Pages host.


LIVE-LINK / PUBLIC HUB UPGRADE — 31 AGUSTUS 2026
==================================================
1. Dashboard publik menjadi hub informasi yang dapat diakses semua pengunjung.
2. site-map.html menjadi peta navigasi publik seluruh halaman.
3. 404.html menjadi fallback agar URL yang salah tetap membawa pengunjung kembali ke website.
4. Contact form menggunakan mailto composer karena GitHub Pages bersifat static dan tidak menyediakan backend form.
5. Semua navigasi internal diarahkan ke halaman lokal yang tersedia.
6. Fragment links Activity Center telah diberi target section yang sesuai.
7. Dashboard memakai asset dari ../assets/images/ agar konsisten dengan struktur asset utama website.
8. Domain resmi renaigvtl.id belum digunakan sebagai canonical sampai domain benar-benar aktif.

CARA MENGEMBANGKAN
------------------
- Tambah halaman baru: buat file HTML pada root/folder yang sesuai, lalu masukkan ke navbar/footer/site-map/sitemap.xml.
- Tambah technology: buat halaman proyek, masukkan ke Dashboard Portfolio, RENAI GVTL page, sitemap, dan internal related links.
- Tambah research: buat detail experiment/activity, hubungkan dari Activity/Experiment Center dan Dashboard.
- Tambah news: buat artikel pada folder news, tambahkan kartu pada news.html dan sitemap.xml.
- Tambah asset: pertahankan pola assets/images/... dan gunakan alt text deskriptif.
- Saat renaigvtl.id aktif: ganti canonical, Open Graph URL, JSON-LD @id/url, sitemap loc, dan URL internal secara konsisten.


--- DUAL DASHBOARD ARCHITECTURE (31 AGUSTUS 2026) ---
Dashboard publik tetap tersedia di dashboard/index.html. AI Command Center dikembalikan sebagai lapisan terpisah di dashboard/command-center.html. Command Center menggunakan public-safe mode: interaksi hanya memengaruhi UI browser dan tidak mengklaim akses server, GPU, CPU, data pengguna, atau sistem produksi. Pengembangan berikutnya dapat menghubungkan UI ini ke backend/API internal ketika infrastruktur siap.
