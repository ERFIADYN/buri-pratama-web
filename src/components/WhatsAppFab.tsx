import { GENERIC_MESSAGE, waLink } from '@/lib/whatsapp';
import { IconChat } from './Icons';

/** Tombol WhatsApp mengambang, hanya tampil di layar kecil. */
export default function WhatsAppFab() {
  return (
    <a
      href={waLink(GENERIC_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp UD. Buri Pratama"
      className="fixed bottom-4 right-4 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-wood text-white shadow-lg hover:bg-wood-dark md:hidden"
    >
      <IconChat className="h-7 w-7" />
    </a>
  );
}
