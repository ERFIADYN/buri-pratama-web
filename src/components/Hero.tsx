import { hero } from '@/data/content';
import { site } from '@/data/site';
import { GENERIC_MESSAGE, waLink } from '@/lib/whatsapp';
import BrandMark from './BrandMark';
import { IconChat } from './Icons';

export default function Hero() {
  return (
    <section id="beranda" className="bg-gradient-to-b from-navy-soft/70 to-white">
      <div className="container-page grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-wood">{site.tagline}</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">{hero.lead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={waLink(GENERIC_MESSAGE)} target="_blank" rel="noopener noreferrer" className="btn-accent">
              <IconChat />
              Minta Penawaran
            </a>
            <a href="#katalog" className="btn-outline">
              Lihat Katalog
            </a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <BrandMark className="h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
