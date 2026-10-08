# Website UD. Buri Pratama

Website profil usaha + katalog dengan permintaan penawaran lewat WhatsApp.
Dibuat dengan Next.js 14 (App Router), TypeScript, dan Tailwind CSS. Hasil build berupa situs statis (tanpa server dan tanpa database), jadi bisa di-hosting gratis.

## 1. Menjalankan di komputer

Prasyarat: Node.js 18.18 atau lebih baru (disarankan Node 20/22).

```bash
npm install
npm run dev        # buka http://localhost:3000
```

Perintah lain:

```bash
npm run lint       # cek kualitas kode
npm run typecheck  # cek tipe TypeScript
npm run build      # membuat situs statis di folder out/
npm run preview    # melihat hasil build (npx serve out)
```

## 2. Mengganti data usaha (wajib sebelum publikasi)

Buka `src/data/site.ts`. Semua nilai yang diawali `[ISI` adalah placeholder dan tampil dengan sorotan kuning di website sampai diganti:

| Field | Isi |
|---|---|
| `email` | email usaha |
| `address`, `city` | alamat dan kota |
| `hours` | jam operasional |
| `mapUrl` | tautan Google Maps (tombol peta muncul otomatis setelah diisi) |
| `since` | tahun berdiri |
| `url` | alamat website asli (atau isi variabel `NEXT_PUBLIC_SITE_URL` saat deploy) |

Nomor WhatsApp sudah terisi (`whatsapp: '6283875472022'`, tanpa tanda +, 62 menggantikan 0 di depan). Untuk menggantinya, ubah `whatsapp` dan `whatsappDisplay`.

Alamat dan email yang masih placeholder otomatis tidak dimasukkan ke data terstruktur SEO (schema.org). Pastikan `url` sudah benar sebelum publikasi karena dipakai untuk sitemap dan pratinjau saat dibagikan.

## 3. Mengubah teks dan produk

- Teks beranda, layanan, cara kerja, keunggulan, dan tentang kami: `src/data/content.ts`
- Katalog produk: `src/data/products.ts`
  - Semua produk bawaan adalah **contoh** (`isSample: true`, tampil berlabel Contoh, tanpa harga). Ganti dengan produk asli dan hapus `isSample`.
  - Foto produk: taruh file di `public/products/` lalu isi `image: '/products/nama-file.jpg'`. Jika `image` kosong, dipakai ilustrasi bawaan.

## 4. Mengganti logo

- `public/logo.png`: logo horizontal di navigasi dan footer. Jika ukuran file baru berbeda, sesuaikan `width` dan `height` pada `Navbar.tsx` dan `Footer.tsx` agar rasio tepat.
- `src/app/icon.svg`: ikon B untuk favicon.
- `public/og-image.png` (1200 x 630 px): gambar pratinjau saat tautan dibagikan.
- `src/components/BrandMark.tsx`: ikon B besar di beranda.

## 5. Cara kerja permintaan penawaran

Pengunjung menekan Tambah ke Permintaan pada produk, mengatur jumlah di panel Permintaan, mengisi nama dan kota tujuan, lalu menekan Kirim ke WhatsApp. Pesan terformat (nama, daftar item dengan jumlah, kota, catatan) dibuka lewat `wa.me`. Daftar permintaan tersimpan di browser pengunjung (localStorage). Format pesan ada di `src/lib/whatsapp.ts`.

## 6. Deploy gratis

Pilih salah satu. Keduanya gratis untuk situs statis dan memberi alamat `*.vercel.app` atau `*.netlify.app`.

### Opsi A: Vercel
1. Unggah proyek ini ke repositori GitHub (jangan unggah `node_modules`, sudah ada di `.gitignore`).
2. Masuk ke vercel.com, pilih Add New, lalu Project, lalu impor repositori tersebut.
3. Framework terdeteksi otomatis sebagai Next.js. Klik Deploy.
4. Tambahkan environment variable `NEXT_PUBLIC_SITE_URL` berisi alamat final (contoh `https://namadomain.com`), lalu Redeploy.
5. Domain sendiri: Settings, lalu Domains, lalu ikuti petunjuk DNS.

### Opsi B: Netlify
1. Unggah proyek ke GitHub, lalu di netlify.com pilih Add new site, lalu Import an existing project.
2. Isi: Build command `npm run build`, Publish directory `out`.
3. Tambahkan variabel `NEXT_PUBLIC_SITE_URL` di Site configuration, lalu Environment variables, dan deploy ulang.
4. Tanpa GitHub: jalankan `npm run build`, lalu seret folder `out` ke halaman Netlify Drop.
5. Domain sendiri: Domain management, lalu Add a domain.

Setelah online, daftarkan situs di Google Search Console dan kirim `https://domain-anda/sitemap.xml`.

## 7. Struktur proyek

```
public/                 logo, og-image
src/app/                layout, halaman, sitemap, robots, font, ikon
src/components/         komponen tampilan (Navbar, Katalog, RequestCart, dst.)
src/context/            state daftar permintaan
src/data/               site.ts, content.ts, products.ts (edit di sini)
src/lib/whatsapp.ts     penyusun pesan WhatsApp
```

## 8. Catatan

- Font Plus Jakarta Sans disimpan lokal di `src/app/fonts/` (tidak memanggil server font eksternal).
- Konten di `content.ts` (misalnya poin keunggulan seperti Penawaran tertulis dan Pengiriman terkoordinasi) bersifat generik. Sesuaikan agar cocok dengan praktik usaha Anda.
- Tidak ada klaim angka, testimoni, nama klien, atau harga yang dikarang.
# buri-pratama-web
