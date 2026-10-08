import Image from 'next/image';
import { services, type ServiceIcon } from '@/data/content';
import { waLink } from '@/lib/whatsapp';
import { IconChat } from './Icons';

function ServiceVisual({ icon }: { icon: ServiceIcon }) {
  const photos: Record<ServiceIcon, string> = {
    kayu: '/products/layanan-kayu.png',
    jaring: '/products/layanan-jaring.png',
    tali: '/products/layanan-tali.png',
    lainnya: '/products/layanan-pengadaanbaranglainnya.png',
  };

  return (
    <div className="relative h-full w-full bg-slate-50">
      <Image
        src={photos[icon]}
        alt=""
        fill
        sizes="(min-width:1024px) 25vw, 50vw"
        className="object-contain p-2"
      />
    </div>
  );
}

export default function Layanan() {
  return (
    <section id="layanan" className="py-16 sm:py-20">
      <div className="container-page">
        <h2 className="section-title">Layanan Kami</h2>
        <p className="section-lead">
          Kami melayani pengadaan barang sesuai kebutuhan proyek dan usaha Anda.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article key={s.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="h-32 overflow-hidden">
                <ServiceVisual icon={s.icon} />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
                {s.icon === 'lainnya' && (
                  <a
                    href={waLink('Halo UD. Buri Pratama, saya butuh pengadaan barang. Mohon informasinya.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-bold text-wood-dark hover:underline"
                  >
                    Tanyakan lewat WhatsApp
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
