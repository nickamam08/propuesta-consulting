import { Sparkles, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 border-t border-white/[0.08] bg-[#090a0f] relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Brand Info */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#1DB954]/15 border border-[#1DB954]/30 flex items-center justify-center text-[#1ED760]">
              <Sparkles size={14} />
            </div>
            <div>
              <div className="font-display font-bold text-xs sm:text-sm text-white">
                PUNTO D' PARTIDA
              </div>
              <div className="font-mono text-[10px] text-gray-400">
                Creer · Crear · Crecer
              </div>
            </div>
          </div>

          {/* Center Message */}
          <div className="text-center font-mono text-[11px] text-gray-400">
            Propuesta Comercial // Finanzas Consulting © {new Date().getFullYear()}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-gray-400 hover:text-white hover:border-[#1DB954]/40 transition-all flex items-center gap-2 text-xs font-mono cursor-pointer"
            aria-label="Volver arriba"
          >
            <span>Volver arriba</span>
            <ArrowUp size={12} className="text-[#1ED760]" />
          </button>

        </div>
      </div>
    </footer>
  );
}
