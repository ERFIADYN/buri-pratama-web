'use client';

import Image from 'next/image';
import type { Product } from '@/data/products';
import { useRequestCart } from '@/context/RequestCartContext';
import ProductArt from './ProductArt';
import { IconCheck, IconPlus } from './Icons';

export default function ProductCard({ product }: { product: Product }) {
  const { items, add } = useRequestCart();
  const inCart = items.find((i) => i.id === product.id);

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="relative aspect-[5/3] overflow-hidden bg-white">
        {product.image ? (
          <Image src={product.image} alt={product.name} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-contain p-2" />
        ) : (
          <ProductArt category={product.category} className="h-full w-full" />
        )}
        {product.isSample && (
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-wood-dark shadow-sm">
            Contoh
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold text-navy">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{product.spec}</p>
        <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Satuan: {product.unit}</p>
        <button
          type="button"
          onClick={() => add({ id: product.id, name: product.name, unit: product.unit })}
          className={inCart ? 'btn-outline mt-4' : 'btn-primary mt-4'}
        >
          {inCart ? <IconCheck /> : <IconPlus />}
          {inCart ? `Ditambahkan (${inCart.qty}) - tambah lagi` : 'Tambah ke Permintaan'}
        </button>
      </div>
    </article>
  );
}
