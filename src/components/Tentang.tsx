import { about } from '@/data/content';
import { site } from '@/data/site';
import Value from './Placeholder';

export default function Tentang() {
  return (
    <section id="tentang" className="py-16 sm:py-20">
      <div className="container-page grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="section-title">{about.title}</h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-600">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <dl className="grid content-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm">
          <div>
            <dt className="font-bold text-navy">Nama usaha</dt>
            <dd className="mt-1 text-slate-600">{site.name}</dd>
          </div>
          <div>
            <dt className="font-bold text-navy">Bidang usaha</dt>
            <dd className="mt-1 text-slate-600">Perdagangan umum dan pengadaan barang</dd>
          </div>
          <div>
            <dt className="font-bold text-navy">Berdiri sejak</dt>
            <dd className="mt-1 text-slate-600">
              <Value text={site.since} />
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
