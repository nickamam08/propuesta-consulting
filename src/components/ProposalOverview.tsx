import { Layers, ArrowRight, ShieldCheck, Zap, Sparkles, Check } from 'lucide-react';

export default function ProposalOverview() {
  return (
    <section id="estructura" className="py-14 px-4 sm:px-6 relative">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-[#1ED760] font-semibold uppercase tracking-wider mb-2">
            <Layers size={14} />
            <span>3. Cómo está estructurada la propuesta</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Dos rutas claras e independientes
          </h2>
          <p className="text-sm text-gray-400 mt-1 max-w-2xl">
            Finanzas Consulting puede elegir entre un acompañamiento mensual continuo o una campaña de aceleración comercial puntual.
          </p>
        </div>

        {/* 2 Bento Columns: Propuesta 01 vs Propuesta 02 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {/* Bento Card: Propuesta 01 */}
          <div className="bento-card p-6 sm:p-7 flex flex-col justify-between border-white/[0.09] hover:border-[#1DB954]/30 group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="bento-badge bento-badge-green font-mono">
                  PROPUESTA 01
                </span>
                <span className="text-xs font-semibold text-gray-400">
                  Acompañamiento Mensual
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Ecosistema Digital Continuo
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                Tres alternativas mensuales escalables (<strong className="text-white">Fase 1, 2 o 3</strong>). Se elige una sola opción. Incluye construcción de marca, producción, gestión de pauta y optimización constante.
              </p>

              {/* Bento Inner Items */}
              <div className="space-y-2.5 mb-6">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#1ED760]" />
                    <span className="text-xs font-semibold text-white">Etapa Inicial Base</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-white">$1.700.000 (Único)</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#1ED760]" />
                    <span className="text-xs font-semibold text-white">3 Alternativas (Fase 1, 2 o 3)</span>
                  </div>
                  <span className="text-xs font-mono text-gray-300">Desde $2.4M a $4.4M/mes</span>
                </div>
              </div>
            </div>

            <a
              href="#ecosistema"
              className="btn-glass w-full justify-center text-xs py-2.5 group-hover:border-[#1DB954]/40"
            >
              <span>Explorar Ecosistema Digital</span>
              <ArrowRight size={13} className="text-[#1ED760]" />
            </a>
          </div>

          {/* Bento Card: Propuesta 02 */}
          <div className="bento-card p-6 sm:p-7 flex flex-col justify-between border-white/[0.09] hover:border-[#1DB954]/30 group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="bento-badge text-white font-mono bg-white/[0.08]">
                  PROPUESTA 02
                </span>
                <span className="text-xs font-semibold text-gray-400">
                  Campaña Puntual
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Campaña Pymes Financiables
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                Campaña puntual orientada a producir, publicar y promocionar la iniciativa en Facebook e Instagram mediante Meta Ads. Puede contratarse de manera independiente.
              </p>

              {/* Bento Inner Items */}
              <div className="space-y-2.5 mb-6">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#1ED760]" />
                    <span className="text-xs font-semibold text-white">Producción & Pauta Meta</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#1ED760]">$3.800.000 + IVA</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles size={14} className="text-yellow-400" />
                    <span className="text-xs font-semibold text-white">Recomendación PD'P</span>
                  </div>
                  <span className="text-xs font-mono text-gray-300">+ Etapa Inicial ($1.7M)</span>
                </div>
              </div>
            </div>

            <a
              href="#pymes"
              className="btn-glass w-full justify-center text-xs py-2.5 group-hover:border-[#1DB954]/40"
            >
              <span>Ver Campaña Pymes</span>
              <ArrowRight size={13} className="text-[#1ED760]" />
            </a>
          </div>
        </div>

        {/* Bento Rule Callouts (2 Grid Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.07] flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-lg bg-[#1DB954]/10 border border-[#1DB954]/30 flex items-center justify-center text-[#1ED760] shrink-0 mt-0.5">
              <ShieldCheck size={16} />
            </div>
            <div>
              <span className="text-xs font-bold text-white block mb-0.5">
                Etapa Inicial Obligatoria en Propuesta 01
              </span>
              <p className="text-xs text-gray-400 leading-relaxed">
                No es una cuarta opción: es el punto de partida necesario para estructurar la base. Si se inicia en Fase 2 o 3, la Etapa Inicial igualmente se contrata.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.07] flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white shrink-0 mt-0.5">
              <Zap size={16} />
            </div>
            <div>
              <span className="text-xs font-bold text-white block mb-0.5">
                Servicios Complementarios Disponibles
              </span>
              <p className="text-xs text-gray-400 leading-relaxed">
                Google Ads y Web + IA no constituyen una cuarta fase; pueden contratarse junto con Fase 3 o de manera independiente según la necesidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
