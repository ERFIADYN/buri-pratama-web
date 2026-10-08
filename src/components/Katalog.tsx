'use client';

import { useState } from 'react';
import { categories, products, type CategoryId } from '@/data/products';
import ProductCard from './ProductCard';

export default function Katalog() {
  const [active, setActive] = useState<CategoryId | 'semua'>('semua');
  const list = active === 'semua' ? products : products.filter((p) => p.category === active);
  const tabs: { id: CategoryId | 'semua'; label: string }[] = [{ id: 'semua', label: 'Semua' }, ...categories];

  return (
    <section id="katalog" className="bg-slate-50 py-16 sm:py-20">
      <div className="container-page">
        <h2 className="section-title">Katalog</h2>
        <p className="section-lead">
          Pilih barang yang Anda butuhkan, tentukan jumlahnya, lalu kirim permintaan penawaran lewat WhatsApp. Tidak
          menemukan barang yang dicari? Hubungi kami, kami bantu carikan.
        </p>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter kategori">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              aria-pressed={active === t.id}
              onClick={() => setActive(t.id)}
              className={
                active === t.id
                  ? 'rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white'
                  : 'rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-navy-soft'
              }
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
