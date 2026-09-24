import { Sparkles, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/[0.08] bg-[#080b10] relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Sparkles size={15} />
            </div>
            <div>
              <div className="font-display font-bold text-sm text-white">
                PUNTO D' PARTIDA
              </div>
              <div className="font-mono text-[11px] text-purple-300/70">
                Creer · Crear · Crecer
              </div>
            </div>
          </div>

          {/* Center Message */}
          <div className="text-center font-mono text-xs text-slate-400">
            Propuesta Comercial Estratégica // Finanzas Consulting © {new Date().getFullYear()}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.06] hover:border-purple-500/30 transition-all flex items-center gap-2 text-xs font-mono"
            aria-label="Volver arriba"
          >
            <span>Volver arriba</span>
            <ArrowUp size={13} />
          </button>

        </div>
      </div>
    </footer>
  );
}
