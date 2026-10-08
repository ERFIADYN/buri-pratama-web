'use client';

import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from 'react';
import { useRequestCart } from '@/context/RequestCartContext';
import { buildRequestMessage, waLink } from '@/lib/whatsapp';
import { IconChat, IconClose, IconMinus, IconPlus, IconTrash } from './Icons';

type Errors = { name?: string; city?: string };

export default function RequestCart() {
  const { items, isOpen, closeCart, setQty, remove, clear } = useRequestCart();
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [note, setNote] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Fokus ke tombol tutup saat dibuka, kunci scroll latar, dan kembalikan fokus saat ditutup.
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      previous?.focus?.();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      closeCart();
      return;
    }
    if (e.key !== 'Tab' || !dialogRef.current) return;
    const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
      'button:not([disabled]), input, textarea, a[href]',
    );
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!name.trim()) next.name = 'Nama wajib diisi.';
    if (!city.trim()) next.city = 'Kota tujuan wajib diisi.';
    setErrors(next);
    if (Object.keys(next).length > 0 || items.length === 0) return;
    const text = buildRequestMessage({ name, city, note, items });
    window.open(waLink(text), '_blank', 'noopener,noreferrer');
  };

  const inputCls =
    'mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400';

  return (
    <div className="fixed inset-0 z-50" onKeyDown={onKeyDown}>
      <div className="absolute inset-0 bg-navy-dark/50" onClick={closeCart} aria-hidden="true" />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="judul-permintaan"
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <h2 id="judul-permintaan" className="text-lg font-extrabold text-navy">
            Permintaan Penawaran
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={closeCart}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
            aria-label="Tutup"
          >
            <IconClose />
          </button>
        </div>

        <form onSubmit={onSubmit} className="flex min-h-0 flex-1 flex-col" noValidate>
          <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
            {items.length === 0 ? (
              <p className="rounded-lg bg-navy-soft p-4 text-sm text-slate-700">
                Belum ada item. Pilih produk di katalog lalu tekan tombol Tambah ke Permintaan.
              </p>
            ) : (
              <ul className="divide-y divide-slate-200" aria-live="polite">
                {items.map((it) => (
                  <li key={it.id} className="py-3">
                    <p className="text-sm font-semibold text-slate-800">{it.name}</p>
                    <div className="mt-2 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => setQty(it.id, it.qty - 1)}
                          className="rounded-md border border-slate-300 p-1.5 text-slate-700 hover:bg-slate-100"
                          aria-label={`Kurangi jumlah ${it.name}`}
                        >
                          <IconMinus className="h-4 w-4" />
                        </button>
                        <input
                          type="number"
                          min={1}
                          inputMode="numeric"
                          value={it.qty}
                          onChange={(e) => setQty(it.id, Number(e.target.value))}
                          className="w-16 rounded-md border border-slate-300 px-2 py-1.5 text-center text-sm"
                          aria-label={`Jumlah ${it.name}`}
                        />
                        <button
                          type="button"
                          onClick={() => setQty(it.id, it.qty + 1)}
                          className="rounded-md border border-slate-300 p-1.5 text-slate-700 hover:bg-slate-100"
                          aria-label={`Tambah jumlah ${it.name}`}
                        >
                          <IconPlus className="h-4 w-4" />
                        </button>
                        <span className="ml-2 text-sm text-slate-600">{it.unit}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(it.id)}
                        className="rounded-md p-1.5 text-slate-500 hover:bg-red-50 hover:text-red-700"
                        aria-label={`Hapus ${it.name}`}
                      >
                        <IconTrash />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-5 space-y-4">
              <div>
                <label htmlFor="pmt-nama" className="text-sm font-semibold text-slate-700">
                  Nama Anda
                </label>
                <input
                  id="pmt-nama"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputCls}
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'err-nama' : undefined}
                />
                {errors.name && (
                  <p id="err-nama" className="mt-1 text-sm text-red-700">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="pmt-kota" className="text-sm font-semibold text-slate-700">
                  Kota tujuan pengiriman
                </label>
                <input
                  id="pmt-kota"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className={inputCls}
                  autoComplete="address-level2"
                  aria-invalid={Boolean(errors.city)}
                  aria-describedby={errors.city ? 'err-kota' : undefined}
                />
                {errors.city && (
                  <p id="err-kota" className="mt-1 text-sm text-red-700">
                    {errors.city}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="pmt-catatan" className="text-sm font-semibold text-slate-700">
                  Catatan (opsional)
                </label>
                <textarea
                  id="pmt-catatan"
                  rows={3}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className={inputCls}
                  placeholder="Contoh: ukuran khusus, kebutuhan tanggal tertentu"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 px-5 py-4">
            <button type="submit" className="btn-accent w-full" disabled={items.length === 0}>
              <IconChat />
              Kirim ke WhatsApp
            </button>
            {items.length > 0 && (
              <button
                type="button"
                onClick={clear}
                className="mt-2 w-full text-center text-sm font-semibold text-slate-600 hover:text-red-700"
              >
                Kosongkan daftar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
