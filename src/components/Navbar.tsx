import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X, Sparkles, Calculator } from 'lucide-react';
import { NAV_ITEMS, WHATSAPP_LINK } from '../data/proposalData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('#objetivo');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25);
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
      { rootMargin: '-15% 0px -60% 0px', threshold: [0.05, 0.2, 0.5] }
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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#090a0f]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#inicio"
            onClick={close}
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Punto D' Partida — Inicio"
          >
            <div className="w-8 h-8 rounded-full bg-[#1DB954]/15 border border-[#1DB954]/40 flex items-center justify-center text-[#1ED760] group-hover:bg-[#1DB954]/25 group-hover:scale-105 transition-all shadow-[0_0_15px_rgba(29,185,84,0.3)]">
              <Sparkles size={15} />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm text-white tracking-tight leading-snug">
                Punto D' Partida
              </span>
              <span className="font-mono text-[10px] text-gray-400 tracking-tight">
                Finanzas Consulting
              </span>
            </div>
          </a>

          {/* Desktop Navigation links */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#12151c]/70 border border-white/[0.08] rounded-full px-2 py-1 backdrop-blur-md">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  active === item.href
                    ? 'bg-[#1DB954]/15 text-[#1ED760] border border-[#1DB954]/30 shadow-[0_0_12px_rgba(29,185,84,0.2)] font-semibold'
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="#inversion"
              className="px-3.5 py-2 rounded-full text-xs font-semibold text-gray-300 bg-white/[0.04] border border-white/[0.08] hover:bg-[#1DB954]/10 hover:border-[#1DB954]/30 hover:text-white transition-all flex items-center gap-1.5"
            >
              <Calculator size={13} className="text-[#1ED760]" />
              <span>Simulador</span>
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-spotify py-2 px-4 text-xs font-bold"
            >
              <span>Hablemos</span>
              <ArrowRight size={13} />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 rounded-xl text-gray-400 hover:text-white bg-white/[0.05] border border-white/[0.08] focus:outline-none"
            aria-label="Abrir menú de navegación"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xl flex flex-col justify-between pt-20 pb-8 px-6 animate-fadeIn xl:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col gap-2 overflow-y-auto max-h-[70vh] py-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500 mb-2 px-3">
              Índice de Secciones
            </span>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  active === item.href
                    ? 'bg-[#1DB954]/15 text-[#1ED760] border border-[#1DB954]/30 font-semibold'
                    : 'text-gray-300 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-4 border-t border-white/[0.08]">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="btn-spotify justify-center py-3 text-sm font-bold w-full"
            >
              <span>Hablar por WhatsApp</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
