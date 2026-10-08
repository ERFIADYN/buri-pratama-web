import { useId } from 'react';
import type { CategoryId } from '@/data/products';

/** Ilustrasi sederhana per kategori, dipakai sampai foto produk asli tersedia. */
export default function ProductArt({ category, className }: { category: CategoryId; className?: string }) {
  const uid = useId().replace(/:/g, '');

  if (category === 'kayu') {
    return (
      <svg viewBox="0 0 200 120" className={className} aria-hidden="true" focusable="false">
        <rect width="200" height="120" fill="#F6EEE6" />
        {[18, 44, 70].map((y, i) => (
          <g key={y}>
            <rect x="22" y={y} width="156" height="22" rx="3" fill={['#9C6B3E', '#B1804F', '#8A5C33'][i]} />
            <path
              d={`M34 ${y + 7} H110 M60 ${y + 14} H160 M90 ${y + 4} H150`}
              stroke="#FFFFFF"
              strokeOpacity="0.25"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>
        ))}
        <rect x="22" y="96" width="156" height="4" rx="2" fill="#173A5E" opacity="0.12" />
      </svg>
    );
  }

  if (category === 'jaring') {
    const pat = `net-${uid}`;
    return (
      <svg viewBox="0 0 200 120" className={className} aria-hidden="true" focusable="false">
        <defs>
          <pattern id={pat} width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <path d="M0 0H20M0 0V20" stroke="#173A5E" strokeWidth="2" fill="none" />
          </pattern>
        </defs>
        <rect width="200" height="120" fill="#E8EEF4" />
        <rect x="20" y="14" width="160" height="92" rx="6" fill={`url(#${pat})`} opacity="0.85" />
        <rect x="20" y="14" width="160" height="92" rx="6" fill="none" stroke="#173A5E" strokeWidth="3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 200 120" className={className} aria-hidden="true" focusable="false">
      <rect width="200" height="120" fill="#F6EEE6" />
      {[44, 34, 24, 14].map((r, i) => (
        <ellipse
          key={r}
          cx="100"
          cy="62"
          rx={r * 1.7}
          ry={r}
          fill="none"
          stroke={i % 2 ? '#B1804F' : '#9C6B3E'}
          strokeWidth="7"
          strokeDasharray="6 3"
          strokeLinecap="round"
        />
      ))}
      <path d="M170 62 C186 70 186 98 160 104" fill="none" stroke="#9C6B3E" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}
