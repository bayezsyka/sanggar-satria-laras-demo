# Sanggar Putra Satria Laras

Website company profile publik berbasis React + Vite untuk Sanggar Putra Satria Laras di Desa Bengle, Kecamatan Talang, Kabupaten Tegal. Versi ini disiapkan sebagai website statis yang matang untuk profil resmi, informasi pementasan, edukasi budaya, galeri, sinema wayang, wawasan budaya, dan kontak kerja sama.

## Stack

- React
- Vite
- React Router
- Tailwind CSS v4
- JavaScript JSX

## Cara install

```bash
npm install
```

## Menjalankan lokal

```bash
npm run dev
```

## Build produksi

```bash
npm run build
```

Hasil build akan tersedia di folder `dist/` dan siap diunggah ke hosting statis.

## Deploy ke hosting statis / Hostinger

1. Jalankan `npm run build`.
2. Unggah seluruh isi folder `dist/` ke `public_html` atau direktori tujuan hosting.
3. Pastikan file `.htaccess` ikut terbawa agar route React Router tetap berjalan di hosting Apache/Hostinger.
4. Jika domain final berbeda, perbarui URL kanonis di `index.html`, `public/robots.txt`, `public/sitemap.xml`, dan `src/lib/seo.js`.

## Catatan

Website ini adalah versi publik statis tanpa admin, backend, login, API, database, atau CMS. Seluruh konten yang biasanya dinamis saat ini dikelola dari file constants agar mudah dikembangkan di tahap berikutnya.

## Folder penting

- `src/Components/ui` untuk komponen reusable
- `src/Components/layout` untuk navbar, footer, dan layout publik
- `src/Components/section` untuk section beranda dan CTA
- `src/Pages` untuk seluruh halaman publik
- `src/constants` untuk data statis website
- `src/hooks` untuk hook seperti SEO/title
- `src/lib` untuk utilitas WhatsApp dan SEO
- `public` untuk favicon, manifest, sitemap, robots, dan `.htaccess`

## Mengganti data konten

Semua data inti dapat diubah langsung dari folder `src/constants`:

- `siteData.js` untuk identitas umum, kontak, sorotan, dan statistik
- `navigationData.js` untuk menu navigasi
- `profileData.js` untuk konten Tentang Sanggar, Ki Haryo, dan Wayang Santri
- `serviceData.js` untuk katalog layanan
- `eventData.js` untuk jadwal budaya
- `galleryData.js` untuk placeholder galeri
- `videoData.js` untuk daftar video
- `articleData.js` untuk daftar artikel
- `seoData.js` untuk title dan description per halaman
