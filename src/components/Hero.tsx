import { ArrowRight, Sparkles, TrendingUp, Compass } from 'lucide-react';
import { STRATEGY_STEPS } from '../data/proposalData';

export default function Hero() {
  return (
    <section id="inicio" className="pt-28 pb-8 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        {/* Top Eyebrow & Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <span className="bento-badge bento-badge-green font-mono">
            <Sparkles size={12} />
            FINANZAS CONSULTING × PUNTO D' PARTIDA
          </span>
          <span className="bento-badge text-gray-300">
            PROPUESTA COMERCIAL
          </span>
        </div>

        {/* Main Title */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.15]">
            De conocimiento financiero a{' '}
            <span className="text-[#1ED760] drop-shadow-[0_0_25px_rgba(29,185,84,0.3)]">
              ecosistema digital
            </span>
          </h1>
          <p className="text-sm sm:text-base text-gray-400 font-medium tracking-wide">
            Estrategia · Contenido · Audiovisual · Publicidad · Desarrollo · Automatización
          </p>
        </div>

        {/* Bento Grid: Contexto + Objetivo */}
        <div id="objetivo" className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          {/* Card 1: Contexto (Cols 5) */}
          <div className="lg:col-span-5 bento-card p-6 sm:p-7 flex flex-col justify-between border-white/[0.09]">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#1ED760] font-semibold uppercase tracking-wider mb-3">
                <Compass size={14} />
                <span>Contexto</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
                Transformar conocimiento en oportunidades comerciales.
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                Finanzas Consulting cuenta con conocimiento y experiencia que pueden convertirse en una presencia digital más estructurada, visible y orientada a captar clientes calificados de forma progresiva.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs text-gray-400 font-medium">Metodología de trabajo</span>
              <span className="text-xs font-semibold text-white px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.1]">
                Progresiva & Escalable
              </span>
            </div>
          </div>

          {/* Card 2: Objetivo Estratégico (Cols 7) */}
          <div className="lg:col-span-7 bento-card bento-card-green-glow p-6 sm:p-7 flex flex-col justify-between bg-gradient-to-br from-[#12151c] to-[#0d1017]">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#1ED760] font-semibold uppercase tracking-wider">
                  <TrendingUp size={14} />
                  <span>Objetivo Estratégico</span>
                </div>
                <span className="text-[11px] font-mono text-gray-400 bg-white/[0.04] px-2 py-0.5 rounded-full border border-white/[0.06]">
                  Ruta de 6 Pasos
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                Construir y escalar un ecosistema integral
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 mb-5">
                Posicionar la marca, educar a la audiencia, demostrar experiencia, conectar con potenciales clientes y apoyar la captación y conversión.
              </p>

              {/* 6 Steps Bento Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {STRATEGY_STEPS.map((s) => (
                  <div
                    key={s.step}
                    className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#1DB954]/40 transition-all flex flex-col justify-between group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono font-bold text-[#1ED760]">
                        {s.step}
                      </span>
                      <ArrowRight size={10} className="text-gray-500 group-hover:text-[#1ED760] transition-colors" />
                    </div>
                    <span className="text-xs font-bold text-white tracking-wide">
                      {s.title}
                    </span>
                    <span className="text-[10px] text-gray-400 leading-tight mt-0.5">
                      {s.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
