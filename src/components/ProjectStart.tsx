import { useEffect, useRef } from 'react';
import { PROJECT_START } from '../data/proposalData';
import {
  CheckCircle2,
  AlertTriangle,
  Compass,
  Clock,
  FileCode,
} from 'lucide-react';

export default function ProjectStart() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    el.querySelectorAll('.reveal').forEach((node) => obs.observe(node));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="inicio-proyecto" ref={ref} className="py-20 md:py-28 relative">
      <div className="section-divider-obsidian mb-20" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Intro */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-start mb-12">
          
          <div>
            <div className="reveal flex items-center gap-2 mb-4">
              <span className="obsidian-tag">
                <Compass size={12} className="text-purple-400" />
                // Propuesta 01 · Etapa Base
              </span>
              <span className="obsidian-tag obsidian-tag-amber">
                #obligatorio-arranque
              </span>
            </div>

            <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5">
              Primero construimos <span className="gradient-text-purple">la base.</span>
            </h2>

            <p className="reveal text-slate-300 text-base leading-relaxed mb-6 font-normal">
              Una etapa inicial obligatoria diseñada para estructurar la estrategia, afinar el tono de comunicación, optimizar perfiles y preparar los activos digitales antes de iniciar el acompañamiento mensual.
            </p>

            {/* Price & Duration Badge */}
            <div className="reveal p-5 rounded-2xl bg-white/[0.03] border border-purple-500/25 shadow-[0_0_30px_rgba(139,92,246,0.1)] mb-6">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-white">
                  {PROJECT_START.price}
                </span>
                <span className="font-mono text-xs font-semibold text-purple-300">
                  + IVA · PAGO ÚNICO
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mt-2">
                <Clock size={13} className="text-cyan-400" />
                <span>Tiempo de ejecución: 15–20 días hábiles</span>
              </div>
            </div>

            {/* Important Callout */}
            <div className="reveal obsidian-callout obsidian-callout-warning flex items-start gap-3">
              <AlertTriangle size={17} className="text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-amber-200">Condición contractual:</strong> {PROJECT_START.note}
              </div>
            </div>
          </div>

          {/* Right Column: Deliverables Card */}
          <div className="reveal obsidian-card rounded-3xl p-6 sm:p-8 border-purple-500/20">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <FileCode size={16} className="text-purple-400" />
                <h3 className="font-display text-base font-bold text-white">
                  Entregables de la Etapa Base
                </h3>
              </div>
              <span className="obsidian-tag obsidian-tag-cyan text-[10px]">
                {PROJECT_START.deliverables.length} entregables
              </span>
            </div>

            {/* Deliverables List */}
            <div className="grid sm:grid-cols-2 gap-3.5 mb-8">
              {PROJECT_START.deliverables.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-start gap-2.5 hover:border-purple-500/25 transition-colors">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-white leading-snug">{item.title}</div>
                    <div className="text-[11px] text-slate-400 leading-relaxed mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* 4-Step Timeline Flow */}
            <div className="pt-5 border-t border-white/[0.08]">
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-3 flex items-center justify-between">
                <span>Ruta de ejecución (15–20 días)</span>
                <span className="text-purple-300">Paso a paso</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {PROJECT_START.timeline.map((step) => (
                  <div key={step.step} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <span className="font-mono text-[10px] font-bold text-purple-400 block mb-1">
                      PASO {step.step}
                    </span>
                    <div className="text-xs font-semibold text-white leading-tight mb-1">{step.title}</div>
                    <div className="text-[10px] text-slate-400 leading-tight">{step.desc}</div>
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
