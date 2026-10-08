import { site } from '@/data/site';

export type RequestItem = { id: string; name: string; unit: string; qty: number };

export const GENERIC_MESSAGE =
  'Halo UD. Buri Pratama, saya ingin meminta penawaran. Mohon informasinya.';

/** Membuat tautan wa.me dengan teks yang sudah di-encode. */
export function waLink(text: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

type RequestForm = { name: string; city: string; note: string; items: RequestItem[] };

/** Menyusun pesan permintaan penawaran: nama, daftar item, kota tujuan, catatan. */
export function buildRequestMessage({ name, city, note, items }: RequestForm): string {
  const clean = (s: string) => s.replace(/\s*\(contoh\)\s*/i, '').trim();
  const lines = [
    `Halo UD. Buri Pratama, saya ${name.trim()}.`,
    '',
    'Saya ingin meminta penawaran untuk:',
    ...items.map((it, i) => `${i + 1}. ${clean(it.name)} - ${it.qty} ${it.unit}`),
    '',
    `Kota tujuan: ${city.trim()}`,
  ];
  if (note.trim()) lines.push(`Catatan: ${note.trim()}`);
  lines.push('', 'Terima kasih.');
  return lines.join('\n');
}
