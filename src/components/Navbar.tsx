import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Calculator, Sun, Moon, MessageCircle, Download } from 'lucide-react';
import { WHATSAPP_LINK } from '../data/proposalData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Initialize theme: Default is 'light' unless explicitly saved as 'dark'
    const savedTheme = localStorage.getItem('pdp_theme') as 'dark' | 'light' | null;
    const initialTheme = savedTheme ?? 'light';
    setTheme(initialTheme);
    if (initialTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('pdp_theme', nextTheme);
    if (nextTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  const handleDownloadPDF = () => {
    const originalTitle = document.title;
    document.title = "Propuesta Comercial — Finanzas Consulting x Punto D' Partida";
    window.print();
    setTimeout(() => {
      document.title = originalTitle;
    }, 1000);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        scrolled
          ? 'bg-[#090a0f]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a
          href="#inicio"
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

        {/* Right Action buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Botón Descargar PDF */}
          <button
            type="button"
            onClick={handleDownloadPDF}
            className="px-3 sm:px-3.5 py-2 rounded-full text-xs font-semibold text-gray-300 bg-white/[0.04] border border-white/[0.08] hover:bg-[#1DB954]/10 hover:border-[#1DB954]/30 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
            title="Descargar propuesta completa en PDF"
            aria-label="Descargar propuesta completa en PDF"
          >
            <Download size={13} className="text-[#1ED760]" />
            <span className="hidden sm:inline">Descargar PDF</span>
            <span className="sm:hidden">PDF</span>
          </button>

          {/* Light / Dark Mode Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 sm:px-3 sm:py-2 rounded-full text-xs font-semibold text-gray-300 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
            aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {theme === 'dark' ? (
              <>
                <Sun size={15} className="text-yellow-400" />
                <span className="hidden md:inline text-[11px] font-mono">Modo Claro</span>
              </>
            ) : (
              <>
                <Moon size={15} className="text-[#1DB954]" />
                <span className="hidden md:inline text-[11px] font-mono">Modo Oscuro</span>
              </>
            )}
          </button>

          {/* Quick Calculator Shortcut */}
          <a
            href="#inversion"
            className="hidden md:flex px-3.5 py-2 rounded-full text-xs font-semibold text-gray-300 bg-white/[0.04] border border-white/[0.08] hover:bg-[#1DB954]/10 hover:border-[#1DB954]/30 hover:text-white transition-all items-center gap-1.5"
          >
            <Calculator size={13} className="text-[#1ED760]" />
            <span>Simulador</span>
          </a>

          {/* Primary CTA Button */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-spotify py-2 px-3.5 sm:px-4 text-xs font-bold"
          >
            <span className="hidden xs:inline">Hablemos</span>
            <MessageCircle size={14} className="xs:hidden" />
            <ArrowRight size={13} className="hidden xs:inline" />
          </a>
        </div>
      </div>
    </header>
  );
}
