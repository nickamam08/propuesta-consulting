import { useEffect, useRef } from 'react';
import { INVESTMENT_SUMMARY } from '../data/proposalData';
import { Receipt, AlertTriangle, CheckCircle2, ShieldCheck, Info } from 'lucide-react';

export default function InvestmentSummary() {
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

  const recurring = INVESTMENT_SUMMARY.filter((item) => item.suffix.includes('/ mes'));
  const oneOff = INVESTMENT_SUMMARY.filter((item) => !item.suffix.includes('/ mes'));

  return (
    <section id="inversion" ref={ref} className="py-20 md:py-28 relative">
      <div className="section-divider-obsidian mb-20" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal flex justify-center mb-3">
            <span className="obsidian-tag">
              <Receipt size={12} className="text-purple-400" />
              // Cuadro Consolidado de Inversión
            </span>
          </div>

          <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Lectura consolidada <span className="gradient-text-purple">de la inversión.</span>
          </h2>

          <p className="reveal text-slate-300 text-base sm:text-lg leading-relaxed">
            Resumen de las inversiones correspondientes a las alternativas y servicios presentados.
          </p>
        </div>

        {/* 2 Grid Columns */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Monthly Plans */}
          <div className="reveal obsidian-card rounded-3xl p-6 sm:p-8 border-purple-500/25">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
              <div>
                <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                  Propuesta 01 — Acompañamiento Mensual
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-0.5">
                  Fases Mensuales (Se elige una sola)
                </h3>
              </div>
              <span className="obsidian-tag obsidian-tag-purple text-[10px]">
                No acumulativas
              </span>
            </div>

            <div className="space-y-3.5">
              {recurring.map((item) => (
                <div
                  key={item.label}
                  className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    item.recommended
                      ? 'bg-purple-500/15 border-purple-500/40 shadow-[0_0_20px_rgba(139,92,246,0.15)]'
                      : 'bg-white/[0.02] border-white/[0.05]'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">{item.label}</span>
                      {item.recommended && (
                        <span className="px-1.5 py-0.5 rounded text-[9px] bg-purple-500/25 text-purple-200 font-mono font-bold uppercase">
                          ★ Más Elegido
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-mono text-purple-300/80 mt-0.5 block">
                      {item.note}
                    </span>
                  </div>

                  <div className="sm:text-right shrink-0">
                    <span className="font-mono text-xl font-bold text-white">{item.price}</span>
                    <span className="block font-mono text-[10px] text-slate-400">{item.suffix}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 rounded-xl bg-purple-500/[0.05] border border-purple-500/15 text-[11px] text-slate-300 leading-relaxed flex items-center gap-2">
              <Info size={14} className="text-purple-400 shrink-0" />
              <span>Las Fases 1, 2 y 3 no se suman entre sí: se elige una sola alternativa de servicio.</span>
            </div>
          </div>

          {/* One-off & Independent Implementations */}
          <div className="reveal obsidian-card rounded-3xl p-6 sm:p-8 border-cyan-500/25">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                  Pagos Únicos & Campaña Independiente
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-0.5">
                  Etapa Base, Servicios & Pymes
                </h3>
              </div>
              <span className="obsidian-tag obsidian-tag-cyan text-[10px]">
                4 conceptos
              </span>
            </div>

            <div className="space-y-3.5">
              {oneOff.map((item) => (
                <div
                  key={item.label}
                  className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    item.highlight
                      ? 'bg-amber-500/[0.08] border-amber-500/30'
                      : 'bg-white/[0.02] border-white/[0.05]'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    {item.highlight ? (
                      <AlertTriangle size={15} className="text-amber-400 shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle2 size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">{item.label}</span>
                        {item.highlight && (
                          <span className="px-1.5 py-0.5 rounded text-[8px] bg-amber-500/20 text-amber-300 font-mono font-bold uppercase">
                            Obligatoria
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 mt-0.5 block">
                        {item.note}
                      </span>
                    </div>
                  </div>

                  <div className="sm:text-right shrink-0">
                    <span className="font-mono text-xl font-bold text-white">{item.price}</span>
                    <span className="block font-mono text-[10px] text-slate-400">{item.suffix}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 rounded-xl bg-cyan-500/[0.05] border border-cyan-500/15 text-[11px] text-slate-300 leading-relaxed flex items-center gap-2">
              <Info size={14} className="text-cyan-400 shrink-0" />
              <span>Los servicios complementarios y la Campaña Pymes Financiables se adicionan solo cuando sean contratados.</span>
            </div>
          </div>

        </div>

        {/* Media Budget Clarification Notice (Section 7 of docx) */}
        <div className="reveal mt-8 obsidian-callout obsidian-callout-warning flex items-start gap-3.5">
          <ShieldCheck size={20} className="text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-200 leading-relaxed">
            <strong className="text-amber-200">Inversión en pauta publicitaria:</strong> La pauta publicitaria no está incluida en los honorarios. El presupuesto destinado a Meta Ads y Google Ads será asumido directamente por Finanzas Consulting y se definirá según la estrategia, objetivo y alcance de cada campaña.
          </div>
        </div>

      </div>
    </section>
  );
}
