import { useEffect, useRef } from 'react';
import { PYMES_CAMPAIGN, getWhatsAppCustomLink } from '../data/proposalData';
import {
  Megaphone,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  XCircle,
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
    el.querySelectorAll('.reveal-on-scroll').forEach((node) => obs.observe(node));
    return () => obs.disconnect();
  }, []);

  const pymesWhatsAppLink = getWhatsAppCustomLink('Hola Punto D\' Partida, me interesa activar la Campaña Pymes Financiables ($3.800.000 + IVA)');

  return (
    <section id="pymes" ref={ref} className="py-14 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-[#1ED760] font-semibold uppercase tracking-wider mb-2">
            <Megaphone size={14} />
            <span>Campaña Pymes Financiables</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Campaña puntual de alto impacto
          </h2>
          <p className="text-sm text-gray-400 mt-1 max-w-2xl">
            {PYMES_CAMPAIGN.subtitle}
          </p>
        </div>

        {/* Main Bento Box */}
        <div className="bento-card bento-card-green-glow p-6 sm:p-8 lg:p-10 border-white/[0.1] mb-6">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div>
              <span className="bento-badge bento-badge-green font-mono mb-2">
                CAMPAÑA INDEPENDIENTE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Pymes Financiables en Meta Ads
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-xl">
                Producción audiovisual profesional, copywriting y pauta publicitaria en Facebook e Instagram para acelerar la captación.
              </p>
            </div>

            {/* Price Box */}
            <div className="p-5 rounded-2xl bg-[#090a0f]/80 border border-[#1DB954]/30 min-w-[260px] shadow-[0_0_30px_rgba(29,185,84,0.12)]">
              <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">Inversión de Campaña</span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white">
                  {PYMES_CAMPAIGN.price}
                </span>
                <span className="text-xs font-bold text-[#1ED760] font-mono">
                  + IVA
                </span>
              </div>
              <span className="text-[11px] text-gray-400 block mt-1">
                Pago único de campaña llave en mano
              </span>
            </div>
          </div>

          {/* Deliverables Bento Grid */}
          <div className="mt-8">
            <div className="text-xs font-mono font-bold uppercase text-white tracking-wider mb-4 flex items-center gap-2">
              <Sparkles size={14} className="text-[#1ED760]" />
              <span>Qué Incluye la Campaña:</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
              {PYMES_CAMPAIGN.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#1DB954]/40 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-start gap-2.5 mb-2">
                    <CheckCircle2 size={15} className="text-[#1ED760] shrink-0 mt-0.5" />
                    <span className="text-xs font-bold text-white leading-snug">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* What's Not Included Checklist */}
            <div className="p-5 rounded-2xl bg-[#090a0f]/50 border border-white/[0.06]">
              <div className="text-xs font-mono font-bold uppercase text-gray-400 tracking-wider mb-3">
                No incluye:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {PYMES_CAMPAIGN.notIncluded.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                    <XCircle size={13} className="text-gray-500 shrink-0 mt-0.5" />
                    <span className="text-[11px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-gray-400">
              ¿Listo para activar la campaña de Pymes Financiables?
            </span>
            <a
              href={pymesWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-spotify text-xs py-2.5 px-6 w-full sm:w-auto justify-center"
            >
              <span>Activar Campaña Pymes</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
