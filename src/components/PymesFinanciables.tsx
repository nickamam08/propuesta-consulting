import { useEffect, useRef } from 'react';
import { PYMES_CAMPAIGN, getWhatsAppCustomLink } from '../data/proposalData';
import {
  Megaphone,
  ArrowRight,
  Sparkles,
  Target,
  XCircle,
  PlusCircle,
  Compass,
} from 'lucide-react';

export default function PymesFinanciables() {
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

  const pymesWhatsAppLink = getWhatsAppCustomLink('Hola Punto D\' Partida, me interesa activar la Propuesta 02 — Campaña Pymes Financiables ($3.800.000 + IVA)');
  const pymesWithBaseWhatsAppLink = getWhatsAppCustomLink('Hola Punto D\' Partida, me interesa activar la Campaña Pymes Financiables + Etapa Inicial Recomendada ($3.800.000 + $1.700.000 = $5.500.000 + IVA)');

  return (
    <section id="pymes" ref={ref} className="py-20 md:py-28 relative">
      <div className="section-divider-obsidian mb-20" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Shell */}
        <div className="obsidian-card rounded-3xl p-7 sm:p-10 lg:p-12 border-emerald-500/30 shadow-[0_0_60px_rgba(16,185,129,0.12)]">
          
          {/* Header Row */}
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start pb-8 border-b border-white/[0.08]">
            <div>
              <div className="reveal flex items-center gap-2 mb-3">
                <span className="obsidian-tag obsidian-tag-emerald">
                  <Megaphone size={12} className="text-emerald-400" />
                  // Propuesta 02 · Campaña Independiente
                </span>
                <span className="obsidian-tag obsidian-tag-cyan">
                  #pymes-financiables
                </span>
              </div>

              <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">
                Pymes Financiables:{' '}
                <span className="gradient-text-emerald">
                  Campaña de alto impacto.
                </span>
              </h2>

              <p className="reveal text-slate-300 text-sm sm:text-base leading-relaxed">
                {PYMES_CAMPAIGN.subtitle}
              </p>
            </div>

            {/* Price badge card */}
            <div className="reveal p-6 rounded-2xl bg-white/[0.02] border border-emerald-500/25 lg:text-right">
              <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider mb-1">
                Inversión de Campaña Llave en Mano
              </div>
              <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white">
                {PYMES_CAMPAIGN.price}
              </div>
              <div className="text-xs font-mono text-slate-400 mt-1">
                {PYMES_CAMPAIGN.priceSuffix}
              </div>
            </div>
          </div>

          {/* Deliverables Grid */}
          <div className="py-8">
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-300 mb-6 flex items-center gap-2">
              <Sparkles size={14} />
              Alcance y entregables incluidos:
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PYMES_CAMPAIGN.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="reveal p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-emerald-500/30 transition-all flex flex-col justify-between"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center font-mono text-xs font-bold">
                      0{idx + 1}
                    </span>
                    <h4 className="text-xs font-bold text-white leading-snug">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendation PD'P Callout (Section 8 of new docx) */}
          <div className="reveal mb-8 p-6 rounded-2xl bg-gradient-to-r from-purple-500/[0.12] to-emerald-500/[0.08] border border-purple-500/30">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <Compass size={16} className="text-purple-400" />
                  <span className="font-display font-bold text-sm text-white">
                    {PYMES_CAMPAIGN.recommendationPDP.title}
                  </span>
                  <span className="obsidian-tag obsidian-tag-purple text-[9px]">
                    #valor-agregado
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                  {PYMES_CAMPAIGN.recommendationPDP.text}
                </p>
              </div>

              <a
                href={pymesWithBaseWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-obsidian text-xs whitespace-nowrap border-purple-500/40 text-purple-200 hover:bg-purple-500/20 shrink-0"
              >
                <PlusCircle size={14} className="text-purple-400" />
                <span>Sumar Etapa Inicial (+$1.7M)</span>
              </a>
            </div>
          </div>

          {/* Not Included Grid & CTA */}
          <div className="pt-6 border-t border-white/[0.08] grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
            <div>
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-3">
                No incluye (condiciones de alcance):
              </div>
              <div className="grid sm:grid-cols-2 gap-2 text-xs text-slate-400">
                {PYMES_CAMPAIGN.notIncluded.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <XCircle size={13} className="text-rose-400/70 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <a
                href={pymesWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-obsidian w-full sm:w-auto text-xs whitespace-nowrap bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-[0_0_30px_rgba(16,185,129,0.3)] justify-center"
              >
                <Target size={14} />
                <span>{PYMES_CAMPAIGN.cta}</span>
                <ArrowRight size={14} />
              </a>
              <span className="text-[10px] font-mono text-slate-500 text-center lg:text-right">
                Inversión en pauta publicitaria gestionada de manera independiente
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
