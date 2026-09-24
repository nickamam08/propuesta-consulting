import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X, Sparkles, Calculator } from 'lucide-react';
import { NAV_ITEMS, WHATSAPP_LINK } from '../data/proposalData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('#inicio');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const sections = NAV_ITEMS
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0.05, 0.2, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const close = () => setMobileOpen(false);

  return (
    <>
      <header className={`nav-obsidian ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-[70px] flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#inicio"
            onClick={close}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Punto D' Partida — Inicio"
          >
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:border-purple-500/40 group-hover:text-purple-300 transition-all shadow-[0_0_20px_rgba(139,92,246,0.15)]">
              <Sparkles size={16} />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm text-white tracking-tight leading-snug group-hover:text-purple-200 transition-colors">
                Punto D' Partida
              </span>
              <span className="font-mono text-[10px] text-purple-300/70 tracking-tight">
                Finanzas Consulting
              </span>
            </div>
          </a>

          {/* Center Navigation links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full p-1.5 backdrop-blur-md">
            {NAV_ITEMS.slice(0, 8).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  active === item.href
                    ? 'bg-purple-500/20 text-purple-200 border border-purple-500/30 shadow-[0_0_12px_rgba(139,92,246,0.2)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="#calculadora"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-white/[0.03] border border-white/[0.08] hover:bg-purple-500/10 hover:border-purple-500/30 hover:text-purple-300 transition-all flex items-center gap-1.5"
            >
              <Calculator size={13} className="text-purple-400" />
              <span>Simulador</span>
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-obsidian py-2 px-4 text-xs font-semibold"
            >
              <span>Hablemos</span>
              <ArrowRight size={13} />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors focus:outline-none"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-[#0b0e14]/95 backdrop-blur-xl pt-[80px] px-6 pb-8 flex flex-col justify-between overflow-y-auto animate-fadeIn">
          <div className="space-y-1 py-4">
            <div className="text-[11px] font-mono uppercase tracking-wider text-purple-400 mb-3 px-3">
              // Mapa de navegación
            </div>
            {NAV_ITEMS.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className={`flex items-center justify-between p-3.5 rounded-xl text-sm font-medium transition-all ${
                  active === item.href
                    ? 'bg-purple-500/15 text-purple-200 border border-purple-500/30'
                    : 'text-slate-300 hover:bg-white/[0.04] hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-slate-500">0{idx + 1}</span>
                  <span>{item.label}</span>
                </div>
                <ArrowRight size={14} className="text-slate-500" />
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/[0.08] space-y-3">
            <a
              href="#calculadora"
              onClick={close}
              className="w-full py-3 rounded-xl text-center text-xs font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/25 flex items-center justify-center gap-2"
            >
              <Calculator size={15} />
              <span>Simulador de Presupuesto</span>
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="btn-primary-obsidian w-full py-3 text-xs justify-center"
            >
              <span>Conversar con el equipo</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
