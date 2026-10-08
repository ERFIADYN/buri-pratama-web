/**
 * DATA USAHA — satu-satunya tempat untuk mengganti identitas dan kontak.
 * Nilai yang diawali "[ISI" adalah placeholder dan WAJIB diganti sebelum website dipublikasikan.
 * Placeholder otomatis tidak dimasukkan ke metadata SEO (schema.org).
 */

export const isPlaceholder = (value: string) => value.trim().startsWith('[ISI');

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const site = {
  name: 'UD. Buri Pratama',
  shortName: 'Buri Pratama',
  tagline: 'Perdagangan Umum & Pengadaan Barang',
  description:
    'UD. Buri Pratama melayani perdagangan umum dan pengadaan barang, saat ini fokus pada kayu dan jaring. Minta penawaran dengan mudah lewat WhatsApp.',

  // Gunakan variabel environment saat deploy; fallback hanya untuk demo/local.
  url: siteUrl || 'https://example.com',

  // Nomor WhatsApp format internasional tanpa tanda + (62 menggantikan 0 di depan).
  whatsapp: '6283875472022',
  whatsappDisplay: '0838-7547-2022',

  email: 'ud.buripratama@gmail.com',
  address: 'Bogor, Jawa Barat, Indonesia',
  city: 'Bogor',
  hours: 'Senin–Sabtu, 08.00–17.00 WIB',
  mapUrl: 'https://maps.google.com/?q=UD.+Buri+Pratama',
  since: '2020',
} as const;
