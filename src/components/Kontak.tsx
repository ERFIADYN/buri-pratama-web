import { site, isPlaceholder } from '@/data/site';
import { GENERIC_MESSAGE, waLink } from '@/lib/whatsapp';
import Value from './Placeholder';
import { IconChat, IconClock, IconMail, IconPin } from './Icons';

export default function Kontak() {
  return (
    <section id="kontak" className="bg-slate-50 py-16 sm:py-20">
      <div className="container-page grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="section-title">Hubungi Kami</h2>
          <p className="section-lead">
            Sampaikan kebutuhan barang Anda. Cara tercepat adalah lewat WhatsApp.
          </p>
          <a href={waLink(GENERIC_MESSAGE)} target="_blank" rel="noopener noreferrer" className="btn-accent mt-6">
            <IconChat />
            Chat WhatsApp
          </a>
        </div>
        <ul className="space-y-5 text-sm text-slate-700">
          <li className="flex gap-3">
            <IconChat className="mt-0.5 shrink-0 text-wood" />
            <div>
              <p className="font-bold text-navy">WhatsApp</p>
              <a href={waLink(GENERIC_MESSAGE)} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {site.whatsappDisplay}
              </a>
            </div>
          </li>
          <li className="flex gap-3">
            <IconMail className="mt-0.5 shrink-0 text-wood" />
            <div>
              <p className="font-bold text-navy">Email</p>
              {isPlaceholder(site.email) ? (
                <Value text={site.email} />
              ) : (
                <a href={`mailto:${site.email}`} className="hover:underline">
                  {site.email}
                </a>
              )}
            </div>
          </li>
          <li className="flex gap-3">
            <IconPin className="mt-0.5 shrink-0 text-wood" />
            <div>
              <p className="font-bold text-navy">Alamat</p>
              <p>
                <Value text={site.address} />
              </p>
              <p>
                <Value text={site.city} />
              </p>
              {!isPlaceholder(site.mapUrl) && (
                <a
                  href={site.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-bold text-wood-dark hover:underline"
                >
                  Buka di Google Maps
                </a>
              )}
              {isPlaceholder(site.mapUrl) && (
                <p className="mt-1">
                  <Value text={site.mapUrl} />
                </p>
              )}
            </div>
          </li>
          <li className="flex gap-3">
            <IconClock className="mt-0.5 shrink-0 text-wood" />
            <div>
              <p className="font-bold text-navy">Jam operasional</p>
              <p>
                <Value text={site.hours} />
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
