import { useEffect, useRef } from 'react';
import { CLIENT_REQUIREMENTS } from '../data/proposalData';
import { CheckCircle2, ClipboardList, ShieldCheck } from 'lucide-react';

export default function ClientRequirements() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    el.querySelectorAll('.reveal').forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="requerimientos" ref={ref} className="py-20 md:py-28 relative">
      <div className="section-divider-obsidian mb-20" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="reveal flex justify-center mb-3">
            <span className="obsidian-tag obsidian-tag-cyan">
              <ClipboardList size={12} className="text-cyan-400" />
              // Insumos y Compromisos de Inicio
            </span>
          </div>

          <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Requerimientos para <span className="gradient-text-purple">dar inicio.</span>
          </h2>

          <p className="reveal text-slate-300 text-base sm:text-lg leading-relaxed">
            Para garantizar el cumplimiento de los tiempos de ejecución y la calidad estratégica, Finanzas Consulting facilitará los siguientes insumos clave:
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CLIENT_REQUIREMENTS.map((req, idx) => (
            <div
              key={idx}
              className="reveal obsidian-card rounded-2xl p-5 border-white/[0.06] hover:border-purple-500/30 transition-all flex flex-col justify-between"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="w-7 h-7 rounded-lg bg-purple-500/15 text-purple-300 font-mono text-xs font-bold flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <CheckCircle2 size={15} className="text-emerald-400" />
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {req}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note Below */}
        <div className="reveal mt-8 obsidian-callout obsidian-callout-note flex items-start gap-3">
          <ShieldCheck size={18} className="text-purple-400 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-white">Alineación Operativa:</strong> Todos estos puntos se coordinan en la primera reunión de recepción y arranque de la Etapa Inicial para asegurar que la producción y la pauta arranquen sin retrasos.
          </div>
        </div>

      </div>
    </section>
  );
}
