import { useEffect, useRef } from 'react';
import { STRATEGY_STEPS, PHASES } from '../data/proposalData';
import { ArrowRight, Layers, Rocket, Zap, CheckCircle2 } from 'lucide-react';

const PHASE_ICONS = [Layers, Rocket, Zap];

export default function Strategy() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')), { threshold: 0.1 });
    el.querySelectorAll('.reveal').forEach((node) => obs.observe(node));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="estrategia" ref={ref} className="py-24 relative">
      <div className="section-divider-obsidian mb-24" />
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="reveal text-xs tracking-[0.2em] uppercase text-purple-400 font-medium mb-4">La estrategia</p>
          <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-5">Una ruta. <span className="gradient-text-purple">Tres niveles de profundidad.</span></h2>
          <p className="reveal text-slate-300 text-lg leading-relaxed">La propuesta permite empezar con una base clara y sumar capacidad a medida que el ecosistema necesita más captación, tecnología y automatización.</p>
        </div>

        <div className="reveal obsidian-card rounded-3xl p-5 sm:p-7 mb-10 overflow-hidden">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-0">
            {STRATEGY_STEPS.map((s, i) => (
              <div key={s.step} className="flex items-center gap-2">
                <div className="flex items-center gap-2 rounded-xl border border-purple-500/20 bg-purple-500/10 px-3 py-2.5">
                  <span className="w-5 h-5 rounded-md grid place-items-center bg-purple-500/20 text-[9px] font-extrabold text-purple-300">{s.step}</span>
                  <span className="text-[10px] font-bold tracking-[0.09em] text-white">{s.title}</span>
                </div>
                {i < STRATEGY_STEPS.length - 1 && <ArrowRight size={14} className="hidden sm:block text-slate-500 mx-1" />}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {PHASES.map((phase, i) => {
            const Icon = PHASE_ICONS[i] ?? Layers;
            return (
              <a key={phase.id} href="#fases" className="reveal obsidian-card rounded-3xl p-7 group relative overflow-hidden" style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20"><Icon size={20} className="text-purple-400" /></div>
                  <span className="text-[9px] font-extrabold tracking-[0.17em] text-purple-400 uppercase">0{phase.id}</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{phase.concept}</h3>
                <p className="text-[13px] text-slate-300 leading-relaxed mb-5">{phase.objective}</p>
                <div className="space-y-2.5 mb-6">
                  {(phase.additions ?? []).map((item) => <div key={item} className="flex items-start gap-2 text-[11px] text-slate-300"><CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />{item}</div>)}
                </div>
                <div className="flex items-center gap-2 text-purple-400 text-[11px] font-bold tracking-wide group-hover:gap-3 transition-all">Ver detalle <ArrowRight size={14} /></div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
