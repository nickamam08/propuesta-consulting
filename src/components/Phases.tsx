import { useEffect, useRef } from 'react';
import { PHASES } from '../data/proposalData';
import PhaseCard from './PhaseCard';
import { Layers, HelpCircle, ArrowRight } from 'lucide-react';

export default function Phases() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.05 }
    );
    el.querySelectorAll('.reveal-on-scroll').forEach((node) => obs.observe(node));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="ecosistema" ref={ref} className="py-14 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-mono text-[#1ED760] font-semibold uppercase tracking-wider mb-2">
            <Layers size={14} />
            <span>Ecosistema Digital — Acompañamiento Mensual</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Tres alternativas de acompañamiento mensual
          </h2>
          <p className="text-sm text-gray-400 mt-1 max-w-2xl">
            Las Fases 1, 2 y 3 son alternativas de servicio y <strong>no se acumulan entre sí</strong>. Se elige una sola según la intensidad requerida.
          </p>
        </div>

        {/* Phase Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch mb-8">
          {PHASES.map((phase, idx) => (
            <PhaseCard key={phase.id} phase={phase} index={idx} isPopular={phase.isRecommended} />
          ))}
        </div>

        {/* Visual References Showcase */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="bento-badge bento-badge-green font-mono text-[11px] mb-1 inline-block">
                REFERENTES VISUALES DE LO QUE LES HAREMOS
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Así lucirá el ecosistema digital de Finanzas Consulting
              </h3>
            </div>
            <span className="hidden sm:inline-block text-xs font-mono text-gray-400">
              Calidad cinematográfica & diseño editorial
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Visual 1: Social Media */}
            <div className="bento-card overflow-hidden border-white/[0.09] hover:border-[#1DB954]/30 transition-all flex flex-col justify-between">
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900 group">
                <img
                  src="/images/referente-redes-sociales.jpg"
                  alt="Referente de Redes Sociales y Feed para Finanzas Consulting"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-[#1ED760] font-semibold border border-[#1DB954]/30">
                    Instagram & LinkedIn Feed
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-base font-bold text-white">
                  Línea gráfica, feed y carruseles educativos
                </h4>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                  Identidad visual coherente, plantillas modulares de marca y carruseles estratégicos sobre finanzas corporativas, liquidez y crédito para posicionar autoridad.
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-mono text-[#1ED760]">
                  <span className="px-2 py-0.5 rounded bg-[#1DB954]/10 border border-[#1DB954]/20">✓ 3–5 piezas/semana</span>
                  <span className="px-2 py-0.5 rounded bg-[#1DB954]/10 border border-[#1DB954]/20">✓ Carruseles educativos</span>
                  <span className="px-2 py-0.5 rounded bg-[#1DB954]/10 border border-[#1DB954]/20">✓ Copywriting financiero</span>
                </div>
              </div>
            </div>

            {/* Visual 2: Audiovisual Shoot */}
            <div className="bento-card overflow-hidden border-white/[0.09] hover:border-[#1DB954]/30 transition-all flex flex-col justify-between">
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900 group">
                <img
                  src="/images/referente-produccion-audiovisual.jpg"
                  alt="Referente de Producción Audiovisual y Rodaje de Reels en Medellín"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-[#1ED760] font-semibold border border-[#1DB954]/30">
                    Rodaje 4K · Medellín
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-base font-bold text-white">
                  Jornadas de rodaje audiovisual y reels dinámicos
                </h4>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                  Producción en sus oficinas o locaciones aliadas en Medellín con cámaras 4K, luces de estudio y audio pro para crear reels que humanizan y generan confianza comercial.
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-mono text-[#1ED760]">
                  <span className="px-2 py-0.5 rounded bg-[#1DB954]/10 border border-[#1DB954]/20">✓ Hasta 8 reels/mes</span>
                  <span className="px-2 py-0.5 rounded bg-[#1DB954]/10 border border-[#1DB954]/20">✓ Jornada 6h Medellín</span>
                  <span className="px-2 py-0.5 rounded bg-[#1DB954]/10 border border-[#1DB954]/20">✓ Edición con ganchos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Callout to Comparator */}
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-300">
          <div className="flex items-center gap-2.5">
            <HelpCircle size={16} className="text-[#1ED760] shrink-0" />
            <span>A continuación presentamos la segunda alternativa: <strong>Campaña Pymes Financiables</strong>. Más abajo encontrarás la <strong>Matriz Comparativa</strong>.</span>
          </div>
          <a
            href="#pymes"
            className="btn-glass text-xs py-1.5 px-4 text-white hover:text-[#1ED760] shrink-0"
          >
            <span>Ver Campaña Pymes</span>
            <ArrowRight size={13} />
          </a>
        </div>

      </div>
    </section>
  );
}
