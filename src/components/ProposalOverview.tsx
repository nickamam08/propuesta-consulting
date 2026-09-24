import { useEffect, useRef } from 'react';
import { Layers, Megaphone, ArrowRight, CheckCircle2, Compass, ShieldCheck } from 'lucide-react';

export default function ProposalOverview() {
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
    <section id="propuestas" ref={ref} className="py-20 md:py-28 relative">
      <div className="section-divider-obsidian mb-20" />
      
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="reveal flex justify-center mb-3">
            <span className="obsidian-tag">
              <Compass size={12} className="text-purple-400" />
              // Estructura de la propuesta
            </span>
          </div>
          <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Dos rutas claras. <span className="gradient-text-purple">Cero confusiones.</span>
          </h2>
          <p className="reveal text-slate-300 text-base sm:text-lg leading-relaxed">
            Hemos estructurado la propuesta en dos alternativas según el alcance que requiera Finanzas Consulting: un acompañamiento integral continuo o una campaña independiente de alto impacto.
          </p>
        </div>

        {/* 2 Track Cards */}
        <div className="grid md:grid-cols-2 gap-7">
          
          {/* Track 1 Card */}
          <div className="reveal obsidian-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between border-purple-500/30 hover:border-purple-500/50">
            <div>
              <div className="flex items-center justify-between gap-2 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                  <Layers size={22} />
                </div>
                <span className="obsidian-tag obsidian-tag-purple">
                  #propuesta-01 · continuo
                </span>
              </div>

              <div className="font-mono text-xs text-purple-300 font-semibold mb-1">
                ACOMPAÑAMIENTO INTEGRAL
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                Ecosistema Digital
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Construcción estratégica inicial + acompañamiento mensual en contenidos, producción audiovisual presencial, pauta digital y web.
              </p>

              {/* Scope Breakdown */}
              <div className="space-y-2.5 mb-7 bg-white/[0.02] border border-white/[0.06] p-4 rounded-2xl">
                <div className="flex items-center justify-between text-xs py-1 border-b border-white/[0.05]">
                  <span className="text-slate-400 font-medium">1. Etapa Base Obligatoria:</span>
                  <span className="font-mono font-bold text-white">$1.700.000 <small className="text-slate-500 font-normal">pago único</small></span>
                </div>
                <div className="flex items-center justify-between text-xs py-1 border-b border-white/[0.05]">
                  <span className="text-slate-400 font-medium">2. Fase 1 (Posicionamiento):</span>
                  <span className="font-mono font-bold text-purple-300">$2.400.000 <small className="text-slate-500 font-normal">/ mes</small></span>
                </div>
                <div className="flex items-center justify-between text-xs py-1 border-b border-white/[0.05]">
                  <span className="text-slate-400 font-medium flex items-center gap-1.5">
                    3. Fase 2 (Crecimiento & Captación):
                    <span className="px-1.5 py-0.5 rounded text-[9px] bg-purple-500/20 text-purple-300 font-mono font-bold">★ TOP</span>
                  </span>
                  <span className="font-mono font-bold text-purple-300">$3.600.000 <small className="text-slate-500 font-normal">/ mes</small></span>
                </div>
                <div className="flex items-center justify-between text-xs py-1">
                  <span className="text-slate-400 font-medium">4. Fase 3 (Ecosistema + Google + IA):</span>
                  <span className="font-mono font-bold text-purple-300">$4.400.000 <small className="text-slate-500 font-normal">/ mes</small></span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a href="#inicio-proyecto" className="btn-primary-obsidian w-full sm:w-auto text-xs justify-center flex-1">
                <span>Ver Ecosistema Digital</span>
                <ArrowRight size={14} />
              </a>
              <a href="#comparar" className="btn-secondary-obsidian w-full sm:w-auto text-xs justify-center">
                <span>Comparar Fases</span>
              </a>
            </div>
          </div>

          {/* Track 2 Card */}
          <div className="reveal obsidian-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between border-emerald-500/30 hover:border-emerald-500/50">
            <div>
              <div className="flex items-center justify-between gap-2 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <Megaphone size={22} />
                </div>
                <span className="obsidian-tag obsidian-tag-emerald">
                  #propuesta-02 · puntual
                </span>
              </div>

              <div className="font-mono text-xs text-emerald-300 font-semibold mb-1">
                CAMPAÑA DE PRODUCTO ESPECÍFICO
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                Pymes Financiables
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Campaña puntual de producción audiovisual presencial, contenidos educativos y pauta digital (Meta Ads) enfocada 100% en posicionar y captar prospectos para el programa.
              </p>

              {/* Deliverable Highlights */}
              <div className="space-y-2 mb-7 bg-white/[0.02] border border-white/[0.06] p-4 rounded-2xl">
                {[
                  '1 jornada audiovisual en Medellín/AM (máx 6h)',
                  'Hasta 8 reels producidos y editados',
                  'Aprox. 6 piezas gráficas / CTA',
                  '2 carruseles educativos + 1 infografía',
                  'Gestión de Meta Ads (1 campaña con 2 segmentaciones)',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
                <div className="pt-2 mt-2 border-t border-white/[0.05] flex items-center justify-between">
                  <span className="text-xs text-slate-400">Inversión Campaña:</span>
                  <span className="font-mono text-sm font-bold text-emerald-400">$3.800.000 <small className="text-slate-500 font-normal">+ IVA</small></span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a href="#pymes" className="btn-secondary-obsidian w-full text-xs justify-center hover:border-emerald-500/40 hover:text-emerald-300">
                <span>Ver alcance completo de Pymes Financiables</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

        </div>

        {/* Micro Guarantee Note */}
        <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-400 bg-white/[0.02] border border-white/[0.05] rounded-2xl py-3 px-6 text-center">
          <span className="flex items-center gap-1.5 text-purple-300">
            <ShieldCheck size={14} /> Propuesta Formal PD'P
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span>Valores antes de IVA</span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span>Pauta en medios independiente y asumida por el cliente</span>
        </div>

      </div>
    </section>
  );
}
