import { steps } from '@/data/content';

export default function CaraKerja() {
  return (
    <section id="cara-kerja" className="py-16 sm:py-20">
      <div className="container-page">
        <h2 className="section-title">Cara Kerja</h2>
        <p className="section-lead">Lima langkah sederhana dari kebutuhan hingga barang sampai.</p>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-slate-200 bg-white p-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-sm font-extrabold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 text-base font-bold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
