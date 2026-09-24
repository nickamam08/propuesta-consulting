import { CheckCircle2, ArrowRight, Sparkles, Video, Megaphone, Globe, Bot } from 'lucide-react';
import type { Phase } from '../data/proposalData';
import { getWhatsAppCustomLink } from '../data/proposalData';

interface Props {
  phase: Phase;
  index: number;
  isPopular?: boolean;
}

export default function PhaseCard({ phase, isPopular }: Props) {
  const customWhatsAppLink = getWhatsAppCustomLink(`Estoy interesado en la ${phase.tag} — ${phase.name} (${phase.price}${phase.priceSuffix})`);

  return (
    <div
      className={`bento-card flex flex-col justify-between transition-all relative w-full ${
        isPopular
          ? 'bento-card-spotlight'
          : 'border-white/[0.08] hover:border-white/[0.18]'
      }`}
    >
      {/* Recommended Tag */}
      {isPopular && (
        <div className="bg-[#1DB954] text-black px-4 py-1 text-center flex items-center justify-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider rounded-t-[23px] shadow-[0_4px_20px_rgba(29,185,84,0.3)]">
          <Sparkles size={13} className="shrink-0" />
          <span>{phase.badge ?? 'Más Elegido · Recomendado'}</span>
        </div>
      )}

      {/* Header */}
      <div className="p-6 sm:p-7 border-b border-white/[0.06]">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`bento-badge ${isPopular ? 'bento-badge-green font-mono' : 'text-gray-300 font-mono'}`}>
            {phase.tag}
          </span>
          <span className="text-[11px] font-mono text-gray-500">
            Alternativa 0{phase.id}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 leading-snug">
          {phase.name}
        </h3>
        
        <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed mb-5">
          {phase.concept}
        </p>

        {/* Pricing Block */}
        <div className="p-4 rounded-2xl bg-[#090a0f]/60 border border-white/[0.06]">
          <div className="flex flex-wrap items-baseline gap-1.5">
            <span className="font-mono text-3xl sm:text-4xl font-extrabold text-white">
              {phase.price}
            </span>
            <span className="font-mono text-xs font-semibold text-gray-400">
              {phase.priceSuffix}
            </span>
          </div>
          <div className="text-[11px] text-gray-500 mt-1 flex items-center justify-between">
            <span>Permanencia 6 meses</span>
            <span className="text-[#1ED760] font-mono text-[10px]">{phase.selectionNote}</span>
          </div>
        </div>
      </div>

      {/* Body / Highlights */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div className="space-y-4 mb-6">
          <div className="text-[10px] font-mono uppercase tracking-widest text-gray-400 flex items-center justify-between">
            <span>Entregables Clave</span>
            <span className="text-[#1ED760]">Puntuales</span>
          </div>

          <div className="space-y-2.5">
            {phase.keyHighlights.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300 leading-relaxed">
                <CheckCircle2 size={14} className="text-[#1ED760] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Pillar details */}
          <div className="pt-3.5 border-t border-white/[0.06] space-y-2 text-xs">
            <div className="flex items-start gap-2 text-gray-400">
              <Video size={13} className="text-white shrink-0 mt-0.5" />
              <span className="text-[11px]"><strong className="text-white">Audiovisual:</strong> {phase.audiovisual}</span>
            </div>
            <div className="flex items-start gap-2 text-gray-400">
              <Megaphone size={13} className="text-[#1ED760] shrink-0 mt-0.5" />
              <span className="text-[11px]"><strong className="text-white">Pauta Meta:</strong> {phase.metaAds}</span>
            </div>
            {phase.googleAds && (
              <div className="flex items-start gap-2 text-gray-400">
                <Globe size={13} className="text-[#1ED760] shrink-0 mt-0.5" />
                <span className="text-[11px] text-[#1ED760]"><strong>Google Ads:</strong> Gestión mensual incluida</span>
              </div>
            )}
            {phase.automationAI && (
              <div className="flex items-start gap-2 text-gray-400">
                <Bot size={13} className="text-white shrink-0 mt-0.5" />
                <span className="text-[11px]"><strong className="text-white">Web & IA:</strong> Mantenimiento + CRO + IA</span>
              </div>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={customWhatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full justify-center text-xs py-3 ${
            isPopular ? 'btn-spotify' : 'btn-glass'
          }`}
        >
          <span>Elegir Fase 0{phase.id}</span>
          <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}
