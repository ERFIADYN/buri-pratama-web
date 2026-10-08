import Image from 'next/image';

/** Ikon B (monogram) UD. Buri Pratama dari aset PNG situs. */
export default function BrandMark({ className }: { className?: string }) {
  return (
    <Image
      src="/icon.png"
      width={1264}
      height={1264}
      className={className}
      alt="Ikon B UD. Buri Pratama"
      priority
    />
  );
}
