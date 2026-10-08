import { isPlaceholder } from '@/data/site';

/** Menampilkan nilai; jika masih placeholder, diberi sorotan agar tidak terlewat sebelum publikasi. */
export default function Value({ text }: { text: string }) {
  if (isPlaceholder(text)) {
    return <span className="rounded bg-amber-100 px-1.5 py-0.5 text-amber-900">{text}</span>;
  }
  return <>{text}</>;
}
