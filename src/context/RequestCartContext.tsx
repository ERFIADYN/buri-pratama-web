'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { RequestItem } from '@/lib/whatsapp';

const STORAGE_KEY = 'buri-pratama-permintaan';

type CartContextValue = {
  items: RequestItem[];
  count: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  add: (item: Omit<RequestItem, 'qty'>) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function RequestCartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<RequestItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Muat dari localStorage setelah halaman tampil (menghindari mismatch hydration).
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as RequestItem[];
        if (Array.isArray(parsed)) setItems(parsed.filter((i) => i && i.id && i.qty > 0));
      }
    } catch {
      /* abaikan data rusak */
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* penyimpanan penuh atau diblokir: abaikan */
    }
  }, [items, loaded]);

  const add = useCallback((item: Omit<RequestItem, 'qty'>) => {
    setItems((prev) => {
      const found = prev.find((p) => p.id === item.id);
      if (found) return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + 1 } : p));
      return [...prev, { ...item, qty: 1 }];
    });
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    const safe = Number.isFinite(qty) ? Math.max(1, Math.min(99999, Math.floor(qty))) : 1;
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, qty: safe } : p)));
  }, []);

  const remove = useCallback((id: string) => setItems((prev) => prev.filter((p) => p.id !== id)), []);
  const clear = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      count: items.length,
      isOpen,
      openCart,
      closeCart,
      add,
      setQty,
      remove,
      clear,
    }),
    [items, isOpen, openCart, closeCart, add, setQty, remove, clear],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useRequestCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useRequestCart harus dipakai di dalam RequestCartProvider');
  return ctx;
}
