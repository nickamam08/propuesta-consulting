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

        {/* Callout to Comparator */}
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-300">
          <div className="flex items-center gap-2.5">
            <HelpCircle size={16} className="text-[#1ED760] shrink-0" />
            <span>¿Deseas comparar las tres fases lado a lado en una matriz resumida?</span>
          </div>
          <a
            href="#comparar"
            className="btn-glass text-xs py-1.5 px-4 text-white hover:text-[#1ED760] shrink-0"
          >
            <span>Ver matriz comparativa</span>
            <ArrowRight size={13} />
          </a>
        </div>

      </div>
    </section>
  );
}
