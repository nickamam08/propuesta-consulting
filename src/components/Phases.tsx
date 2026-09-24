import { useEffect, useRef } from 'react';
import { PHASES } from '../data/proposalData';
import PhaseCard from './PhaseCard';
import { Layers, HelpCircle } from 'lucide-react';

export default function Phases() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.05 }
    );
    el.querySelectorAll('.reveal').forEach((node) => obs.observe(node));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="fases" ref={ref} className="py-20 md:py-28 relative">
      <div className="section-divider-obsidian mb-20" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal flex justify-center mb-3">
            <span className="obsidian-tag">
              <Layers size={12} className="text-purple-400" />
              // Acompañamiento Mensual Escalable
            </span>
          </div>

          <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Tres niveles de profundidad.{' '}
            <span className="gradient-text-purple">Un solo equipo.</span>
          </h2>

          <p className="reveal text-slate-300 text-base sm:text-lg leading-relaxed">
            Las fases son niveles de servicio y no se suman entre sí. Cada fase incluye la base de la anterior y escala el volumen de contenidos, la producción audiovisual, la pauta publicitaria y la tecnología web.
          </p>
        </div>

        {/* Phase Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {PHASES.map((phase, idx) => (
            <div key={phase.id} className="reveal flex" style={{ transitionDelay: `${idx * 120}ms` }}>
              <PhaseCard phase={phase} index={idx} isPopular={phase.isRecommended} />
            </div>
          ))}
        </div>

        {/* Note Below Phases */}
        <div className="reveal mt-10 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <HelpCircle size={15} className="text-purple-400 shrink-0" />
            <span>¿Desea ver una comparación detallada punto por punto entre las 3 fases?</span>
          </div>
          <a
            href="#comparar"
            className="text-purple-300 hover:text-white font-semibold underline underline-offset-4 shrink-0 transition-colors"
          >
            Ver tabla comparativa directa →
          </a>
        </div>

      </div>
    </section>
  );
}
