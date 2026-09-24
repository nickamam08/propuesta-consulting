import { CheckCircle2, ArrowRight, Sparkles, Video, Megaphone, Globe, Bot, Layers } from 'lucide-react';
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
      className={`obsidian-card rounded-3xl overflow-hidden flex flex-col justify-between transition-all relative ${
        isPopular
          ? 'border-purple-500/50 shadow-[0_0_50px_rgba(139,92,246,0.22)] bg-gradient-to-b from-[#181d2f] to-[#121624]'
          : 'border-white/[0.08]'
      }`}
    >
      {/* Popular / Recommended Top Badge */}
      {isPopular && (
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-1.5 text-center flex items-center justify-center gap-1.5 text-[11px] font-bold tracking-wider text-white uppercase shadow-md">
          <Sparkles size={13} />
          <span>{phase.badge ?? 'Nivel Recomendado · Mayor Equilibrio'}</span>
        </div>
      )}

      {/* Card Header */}
      <div className="p-6 sm:p-8 border-b border-white/[0.06]">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`obsidian-tag ${isPopular ? 'obsidian-tag-purple' : ''}`}>
            {phase.code}
          </span>
          <span className="font-mono text-xs text-slate-500">
            Nivel 0{phase.id}
          </span>
        </div>

        <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
          {phase.name}
        </h3>
        
        <p className="text-xs sm:text-sm text-purple-300/90 font-medium leading-relaxed mb-6">
          {phase.concept}
        </p>

        {/* Pricing Block */}
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-3xl sm:text-4xl font-extrabold text-white">
              {phase.price}
            </span>
            <span className="font-mono text-xs text-slate-400 font-medium">
              {phase.priceSuffix}
            </span>
          </div>
          <div className="text-[11px] text-slate-500 mt-1">
            Permanencia mínima de 6 meses
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        
        {/* Core Highlights */}
        <div className="mb-6 space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 flex items-center justify-between">
            <span>Alcance Principal</span>
            <span className="text-purple-400">Entregables</span>
          </div>

          <div className="space-y-2.5">
            {phase.keyHighlights.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Quick Pillar Tags */}
          <div className="pt-3 border-t border-white/[0.05] space-y-2">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Video size={13} className="text-cyan-400 shrink-0" />
              <span className="text-[11px] text-slate-300 truncate"><strong>Producción:</strong> {phase.audiovisual}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Megaphone size={13} className="text-emerald-400 shrink-0" />
              <span className="text-[11px] text-slate-300 truncate"><strong>Pauta:</strong> {phase.metaAds}</span>
            </div>
            {phase.googleAds && (
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Globe size={13} className="text-purple-400 shrink-0" />
                <span className="text-[11px] text-purple-200 truncate"><strong>Google Ads:</strong> Incluido en plan</span>
              </div>
            )}
            {phase.automationAI && (
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Bot size={13} className="text-amber-400 shrink-0" />
                <span className="text-[11px] text-amber-200 truncate"><strong>Web + IA:</strong> Optimización y soporte</span>
              </div>
            )}
          </div>
        </div>

        {/* Novedades / What is added */}
        <div className="mb-6 p-3.5 rounded-xl bg-purple-500/[0.06] border border-purple-500/15">
          <div className="text-[10px] font-mono uppercase tracking-wider text-purple-300 mb-1.5 flex items-center gap-1.5">
            <Layers size={11} /> Novedades de este nivel:
          </div>
          <ul className="space-y-1 text-[11px] text-slate-300">
            {phase.additions.map((add, idx) => (
              <li key={idx} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>{add}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <a
          href={customWhatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold font-display tracking-wide flex items-center justify-center gap-2 transition-all ${
            isPopular
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_25px_rgba(139,92,246,0.35)]'
              : 'bg-white/[0.04] border border-white/[0.1] text-white hover:bg-purple-500/10 hover:border-purple-500/30 hover:text-purple-200'
          }`}
        >
          <span>{phase.cta}</span>
          <ArrowRight size={14} />
        </a>

      </div>
    </div>
  );
}
