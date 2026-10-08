import Image from 'next/image';
import { navLinks } from '@/data/content';
import { site } from '@/data/site';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Image src="/logo.png" alt={site.name} width={708} height={136} className="h-8 w-auto" />
          <p className="mt-3 text-sm text-slate-600">{site.tagline}</p>
        </div>
        <nav aria-label="Navigasi footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm font-semibold text-slate-600 hover:text-navy">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-slate-100 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {site.name}. Seluruh hak cipta dilindungi.
      </div>
    </footer>
  );
}
