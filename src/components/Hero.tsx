import { useEffect, useRef } from 'react';
import { STRATEGY_STEPS } from '../data/proposalData';
import {
  ArrowRight,
  Sparkles,
  Layers,
  ChevronDown,
  CheckCircle2,
  Video,
  Code2,
  Megaphone,
  Calculator,
  Compass,
} from 'lucide-react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    el.querySelectorAll('.reveal').forEach((node) => obs.observe(node));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="inicio" ref={sectionRef} className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-12 left-1/4 -translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-28 right-4 w-60 sm:w-80 h-60 sm:h-80 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Core Brief & CTAs */}
          <div>
            {/* Obsidian Metadata Tag */}
            <div className="reveal flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4 sm:mb-5">
              <span className="obsidian-tag text-[10px] sm:text-xs">
                <Sparkles size={11} className="text-purple-400 shrink-0" />
                #propuesta-estrategica
              </span>
              <span className="obsidian-tag obsidian-tag-cyan text-[10px] sm:text-xs">
                Finanzas Consulting × Punto D' Partida
              </span>
            </div>

            {/* Main Title */}
            <h1 className="reveal font-display text-2xl sm:text-4xl lg:text-[3.25rem] font-extrabold leading-[1.15] sm:leading-[1.12] tracking-tight mb-4 sm:mb-6">
              De conocimiento financiero a un{' '}
              <span className="gradient-text-purple">
                ecosistema digital que conecta y convierte.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="reveal text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl font-normal">
              Estrategia, contenidos semanales, producción audiovisual presencial, publicidad digital (Meta & Google Ads), desarrollo web y automatizaciones, operados por un <strong className="text-white font-semibold">equipo multidisciplinario</strong> con una sola coordinación.
            </p>

            {/* Key Action Buttons - Fully Responsive */}
            <div className="reveal flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3.5 mb-8 sm:mb-10">
              <a href="#propuestas" className="btn-primary-obsidian w-full sm:w-auto text-xs sm:text-sm">
                <span>Ver los 2 caminos</span>
                <ArrowRight size={15} />
              </a>
              <a href="#comparar" className="btn-secondary-obsidian w-full sm:w-auto text-xs sm:text-sm">
                <Layers size={14} className="text-purple-400 shrink-0" />
                <span>Comparador de Fases</span>
              </a>
              <a href="#calculadora" className="btn-secondary-obsidian w-full sm:w-auto text-xs sm:text-sm">
                <Calculator size={14} className="text-cyan-400 shrink-0" />
                <span>Simular Inversión</span>
              </a>
            </div>

            {/* 3 Value Anchor Metrics - Fluid and small screen safe */}
            <div className="reveal grid grid-cols-3 gap-1.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] mb-6 sm:mb-8">
              <div className="text-center p-1.5 sm:p-2 rounded-xl bg-white/[0.01]">
                <div className="font-mono text-base sm:text-2xl font-bold text-white leading-tight">3 Fases</div>
                <div className="text-[9px] sm:text-xs text-slate-400 mt-0.5">Niveles escalables</div>
              </div>
              <div className="text-center p-1.5 sm:p-2 rounded-xl bg-white/[0.01] border-x border-white/[0.05]">
                <div className="font-mono text-base sm:text-2xl font-bold text-purple-300 leading-tight">1 Equipo</div>
                <div className="text-[9px] sm:text-xs text-slate-400 mt-0.5">Multidisciplinario</div>
              </div>
              <div className="text-center p-1.5 sm:p-2 rounded-xl bg-white/[0.01]">
                <div className="font-mono text-base sm:text-2xl font-bold text-emerald-400 leading-tight">360°</div>
                <div className="text-[9px] sm:text-xs text-slate-400 mt-0.5">Contenido + Pauta</div>
              </div>
            </div>

            {/* Conversion Path Visual Step Sequence */}
            <div className="reveal">
              <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-2 flex items-center gap-1.5">
                <span className="w-3.5 h-px bg-purple-500/40" />
                Ruta continua de conversión
              </div>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {STRATEGY_STEPS.map((s, idx) => (
                  <div key={s.step} className="flex items-center gap-1 sm:gap-2">
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg text-[10px] sm:text-[11px] font-mono font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-200">
                      {s.title}
                    </span>
                    {idx < STRATEGY_STEPS.length - 1 && (
                      <span className="text-slate-600 text-[10px] sm:text-xs font-mono">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Obsidian Interactive Ecosystem Canvas Node */}
          <div className="reveal">
            <div className="obsidian-card rounded-3xl p-5 sm:p-7 relative overflow-hidden border border-purple-500/25 shadow-[0_0_50px_rgba(139,92,246,0.12)]">
              {/* Obsidian Note Top Bar */}
              <div className="flex items-center justify-between pb-3 sm:pb-4 mb-4 sm:mb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-rose-500/60" />
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-500/60" />
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500/60" />
                  </div>
                  <span className="font-mono text-[11px] sm:text-xs text-slate-400 truncate ml-1">
                    ecosistema_finanzas.md
                  </span>
                </div>
                <span className="obsidian-tag obsidian-tag-purple text-[9px] sm:text-[10px] shrink-0">
                  #sistema-activo
                </span>
              </div>

              {/* Core Connected System Map */}
              <div className="space-y-2.5 sm:space-y-3.5">
                {/* Node 1: Estrategia & Base */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between hover:border-purple-500/30 transition-all gap-2">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-7 h-7 sm:w-8 h-8 rounded-lg bg-purple-500/15 flex items-center justify-center text-purple-400 shrink-0">
                      <Compass size={15} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-white truncate">Etapa Inicial Estratégica</div>
                      <div className="text-[10px] sm:text-[11px] text-slate-400 truncate">Diagnóstico + Brief + Redes</div>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-purple-300 shrink-0">$1.7M</span>
                </div>

                {/* Node 2: Producción & Contenido */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between hover:border-purple-500/30 transition-all gap-2">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-7 h-7 sm:w-8 h-8 rounded-lg bg-cyan-500/15 flex items-center justify-center text-cyan-400 shrink-0">
                      <Video size={15} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-white truncate">Producción Audiovisual</div>
                      <div className="text-[10px] sm:text-[11px] text-slate-400 truncate">Jornadas + Reels + Copy</div>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] sm:text-[11px] text-cyan-300 font-semibold shrink-0">Semanal</span>
                </div>

                {/* Node 3: Publicidad & Captación */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between hover:border-purple-500/30 transition-all gap-2">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-7 h-7 sm:w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0">
                      <Megaphone size={15} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-white truncate">Meta Ads & Google Ads</div>
                      <div className="text-[10px] sm:text-[11px] text-slate-400 truncate">Tráfico calificado hacia WhatsApp</div>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] sm:text-[11px] text-emerald-300 font-semibold shrink-0">Captación</span>
                </div>

                {/* Node 4: Web & Conversión */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between hover:border-purple-500/30 transition-all gap-2">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-7 h-7 sm:w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400 shrink-0">
                      <Code2 size={15} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-white truncate">Sitio Web + WhatsApp + IA</div>
                      <div className="text-[10px] sm:text-[11px] text-slate-400 truncate">Rutas de conversión directa</div>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] sm:text-[11px] text-amber-300 font-semibold shrink-0">Conversión</span>
                </div>
              </div>

              {/* Obsidian Callout Inside Note */}
              <div className="mt-4 sm:mt-5 obsidian-callout obsidian-callout-note flex items-start gap-2.5">
                <Sparkles size={15} className="text-purple-400 shrink-0 mt-0.5" />
                <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed m-0">
                  <strong className="text-white">Objetivo:</strong> Conectar cada publicación, video y anuncio directamente con la captación comercial.
                </p>
              </div>

              {/* Bottom Note Stamp */}
              <div className="mt-3.5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-500">
                <span>[[PD'P × Finanzas]]</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={11} /> Listo para iniciar
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Down arrow indicator */}
      <div className="flex justify-center mt-8 sm:mt-12">
        <a
          href="#propuestas"
          className="flex flex-col items-center gap-1 text-slate-500 hover:text-purple-400 transition-colors"
          aria-label="Ir a las propuestas"
        >
          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest">Explorar</span>
          <ChevronDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
