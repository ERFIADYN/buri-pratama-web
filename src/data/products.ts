/**
 * KATALOG PRODUK — edit file ini untuk menambah, mengubah, atau menghapus produk.
 * Produk katalog beserta foto dan kategori yang ditampilkan di situs.
 * Untuk foto asli: taruh file di public/products/ lalu isi image: '/products/nama-file.jpg'.
 */

export type CategoryId = 'kayu' | 'jaring' | 'tali';

export type Product = {
  id: string;
  name: string;
  category: CategoryId;
  spec: string; // spesifikasi singkat
  unit: string; // satuan: batang, lembar, m², roll, set
  image?: string; // opsional; jika kosong dipakai ilustrasi bawaan
  isSample?: boolean; // true = tampil berlabel "Contoh"
};

export const categories: { id: CategoryId; label: string }[] = [
  { id: 'kayu', label: 'Kayu' },
  { id: 'jaring', label: 'Jaring' },
  { id: 'tali', label: 'Tali' },
];

export const products: Product[] = [
  {
    id: 'gelam-kupas',
    name: 'Gelam Kupas',
    category: 'kayu',
    spec: 'Kayu gelam kupas untuk kebutuhan konstruksi. Ukuran dan panjang mengikuti stok.',
    unit: 'batang',
    image: '/products/gelam%20kupas.jpg',
  },
  {
    id: 'sirap-kayu',
    name: 'Sirap Kayu',
    category: 'kayu',
    spec: 'Sirap kayu untuk kebutuhan penutup atap. Ukuran menyesuaikan permintaan.',
    unit: 'lembar',
    image: '/products/sirap%20kayu.png',
  },
  {
    id: 'papan-kayu',
    name: 'Papan Kayu',
    category: 'kayu',
    spec: 'Papan kayu untuk berbagai kebutuhan konstruksi. Ukuran menyesuaikan permintaan.',
    unit: 'lembar',
    image: '/products/papan%20kayu.png',
  },
  {
    id: 'jaring-safety-segala-jenis',
    name: 'Jaring Safety',
    category: 'jaring',
    spec: 'Jaring untuk kebutuhan keselamatan dan proyek. Ukuran dan jenis tali mengikuti permintaan.',
    unit: 'm²',
    image: '/products/jaring%20safety.jpg',
  },
  {
    id: 'jaring-futsal',
    name: 'Jaring Gawang',
    category: 'jaring',
    spec: 'Jaring gawang futsal. Ukuran dan jenis tali mengikuti permintaan.',
    unit: 'm²',
    image: '/products/jaring%20futsal.jpg',
  },
  {
    id: 'jaring-pagar-lapangan',
    name: 'Jaring Pagar Lapangan',
    category: 'jaring',
    spec: 'Jaring untuk pagar lapangan. Ukuran dan jenis tali mengikuti permintaan.',
    unit: 'm²',
    image: '/products/jaring%20pagar%20lapangan.jpg',
  },
  {
    id: 'segala-jenis-tali',
    name: 'Tali',
    category: 'tali',
    spec: 'Gulungan tali serbaguna. Ukuran, warna dan jenis tali mengikuti permintaan.',
    unit: 'roll',
    image: '/products/tali.jpg',
  },
];
