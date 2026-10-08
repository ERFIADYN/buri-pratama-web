/** Teks konten website. Edit di sini tanpa menyentuh komponen. */

export const navLinks = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Katalog', href: '#katalog' },
  { label: 'Cara Kerja', href: '#cara-kerja' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Kontak', href: '#kontak' },
];

export const hero = {
  title: 'Mitra pengadaan barang untuk proyek dan usaha Anda',
  lead: 'UD. Buri Pratama melayani perdagangan umum dan pengadaan kayu, jaring, tali, serta kebutuhan barang lainnya.',
};

export type ServiceIcon = 'kayu' | 'jaring' | 'tali' | 'lainnya';

export const services: { icon: ServiceIcon; title: string; text: string }[] = [
  {
    icon: 'kayu',
    title: 'Kayu',
    text: 'Pengadaan kayu dan papan untuk konstruksi, bekisting, dan kebutuhan proyek.',
  },
  {
    icon: 'jaring',
    title: 'Jaring',
    text: 'Jaring untuk lapangan olahraga, pengaman proyek, dan berbagai kebutuhan lain.',
  },
  {
    icon: 'tali',
    title: 'Tali',
    text: 'Beragam tali untuk kebutuhan proyek, pemasangan jaring, dan pekerjaan lapangan.',
  },
  {
    icon: 'lainnya',
    title: 'Pengadaan Barang Lainnya',
    text: 'Butuh barang di luar daftar ini? Sampaikan kebutuhan Anda, kami bantu carikan.',
  },
];

export const steps = [
  { title: 'Konsultasi', text: 'Sampaikan kebutuhan barang, jumlah, dan lokasi pengiriman.' },
  { title: 'Penawaran', text: 'Kami menyusun penawaran tertulis sesuai kebutuhan Anda.' },
  { title: 'Pemesanan', text: 'Setelah penawaran disetujui, pesanan kami proses.' },
  { title: 'Pengiriman', text: 'Barang dikirim ke lokasi tujuan beserta surat jalan.' },
  { title: 'Serah terima', text: 'Barang diterima dan diperiksa bersama, lalu pembayaran diselesaikan.' },
];

export const strengths = [
  { title: 'Satu pintu pengadaan', text: 'Beragam kebutuhan barang dapat disampaikan ke satu kontak yang sama.' },
  { title: 'Penawaran tertulis', text: 'Rincian barang, jumlah, dan harga disampaikan jelas sebelum pesanan diproses.' },
  { title: 'Pengiriman terkoordinasi', text: 'Pengiriman diatur dan didokumentasikan dengan surat jalan.' },
  { title: 'Komunikasi langsung', text: 'Tanya jawab dan permintaan penawaran mudah lewat WhatsApp.' },
];

export const about = {
  title: 'Tentang Kami',
  paragraphs: [
    'UD. Buri Pratama adalah usaha perdagangan umum yang melayani pengadaan barang untuk kontraktor, pengelola proyek, instansi, klub olahraga, dan pelaku usaha.',
    'Kami memulai dari pengadaan kayu dan jaring, dan terbuka untuk komoditas lain sesuai kebutuhan pelanggan.',
  ],
};
