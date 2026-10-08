import { strengths } from '@/data/content';
import { IconCheck } from './Icons';

export default function Keunggulan() {
  return (
    <section id="keunggulan" className="bg-navy py-16 text-white sm:py-20">
      <div className="container-page">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Mengapa UD. Buri Pratama</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white/10 p-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-wood text-white">
                <IconCheck />
              </span>
              <h3 className="mt-4 text-base font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
