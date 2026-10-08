'use client';

import Image from 'next/image';
import { useState } from 'react';
import { navLinks } from '@/data/content';
import { site } from '@/data/site';
import { useRequestCart } from '@/context/RequestCartContext';
import { IconClose, IconList, IconMenu } from './Icons';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { count, openCart } = useRequestCart();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav aria-label="Navigasi utama" className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#beranda" aria-label={`${site.name} - ke beranda`} className="shrink-0">
          <Image src="/logo.png" alt={site.name} width={708} height={136} priority className="h-9 w-auto" />
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-semibold text-slate-600 hover:text-navy">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openCart}
            className="btn-outline relative !px-3 !py-2"
            aria-label={`Buka daftar permintaan penawaran, ${count} item`}
          >
            <IconList />
            <span className="hidden sm:inline">Permintaan</span>
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-wood px-1 text-xs font-bold text-white">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            className="rounded-lg p-2 text-navy hover:bg-navy-soft md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="menu-mobile" className="border-t border-slate-200 bg-white md:hidden">
          <ul className="container-page flex flex-col py-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-base font-semibold text-slate-700 hover:bg-navy-soft"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
