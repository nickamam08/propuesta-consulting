import { useEffect, useRef, useState } from 'react';
import { PHASES, COMPARISON_MATRIX, getWhatsAppCustomLink } from '../data/proposalData';
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Table,
  LayoutGrid,
  Check,
  MoveHorizontal,
} from 'lucide-react';

export default function PhaseComparator() {
  const ref = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(1);
  const [viewMode, setViewMode] = useState<'matrix' | 'tabs'>('matrix');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    el.querySelectorAll('.reveal').forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  const selectedPhase = PHASES[activeTab];

  const renderCell = (val: string | boolean, isRecommended?: boolean) => {
    if (typeof val === 'boolean') {
      return val ? (
        <div className="flex items-center justify-center">
          <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Check size={13} />
          </span>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <span className="text-slate-600 font-mono text-xs sm:text-sm">—</span>
        </div>
      );
    }
    return (
      <div className={`text-[11px] sm:text-xs font-medium leading-snug ${isRecommended ? 'text-purple-200 font-semibold' : 'text-slate-300'}`}>
        {val}
      </div>
    );
  };

  return (
    <section id="comparar" ref={ref} className="py-16 sm:py-20 md:py-28 relative">
      <div className="section-divider-obsidian mb-16 sm:mb-20" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="reveal flex justify-center mb-3">
            <span className="obsidian-tag text-[10px] sm:text-xs">
              <Table size={11} className="text-purple-400 shrink-0" />
              // Matriz de decisión rápida
            </span>
          </div>

          <h2 className="reveal font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 sm:mb-4">
            Tabla comparativa <span className="gradient-text-purple">sin rodeos.</span>
          </h2>

          <p className="reveal text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
            Compare exactamente qué incluye y qué agrega cada fase para tomar la decisión correcta sin perderse en textos largos.
          </p>

          {/* View Mode Toggle Switcher */}
          <div className="reveal inline-flex p-1 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
            <button
              onClick={() => setViewMode('matrix')}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 sm:gap-2 transition-all ${
                viewMode === 'matrix'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Table size={13} />
              <span>Matriz Completa</span>
            </button>
            <button
              onClick={() => setViewMode('tabs')}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 sm:gap-2 transition-all ${
                viewMode === 'tabs'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid size={13} />
              <span>Ficha por Fase</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Comprehensive Comparison Matrix */}
        {viewMode === 'matrix' ? (
          <div>
            {/* Mobile Swipe Hint */}
            <div className="md:hidden flex items-center justify-center gap-1.5 text-[11px] font-mono text-purple-300/80 mb-3 bg-white/[0.02] border border-white/[0.05] py-1.5 px-3 rounded-xl mx-auto w-fit">
              <MoveHorizontal size={13} />
              <span>Desliza horizontalmente para ver las 3 fases</span>
            </div>

            <div className="reveal obsidian-card rounded-2xl sm:rounded-3xl overflow-hidden border-purple-500/20 shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[640px] sm:min-w-[720px]">
                  <thead>
                    <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                      <th className="p-3.5 sm:p-5 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-400 w-[34%]">
                        Capacidad / Entregable
                      </th>
                      {PHASES.map((p) => (
                        <th
                          key={p.id}
                          className={`p-3.5 sm:p-5 text-center w-[22%] transition-colors ${
                            p.isRecommended
                              ? 'bg-purple-500/10 border-x border-purple-500/25 relative'
                              : ''
                          }`}
                        >
                          {p.isRecommended && (
                            <span className="inline-block px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-mono font-bold bg-purple-600 text-white uppercase tracking-wider shadow mb-1">
                              ★ Más Elegido
                            </span>
                          )}
                          <div className="font-mono text-[10px] sm:text-[11px] text-purple-300 font-bold">
                            {p.tag}
                          </div>
                          <div className="font-display text-xs sm:text-sm font-bold text-white mb-1 leading-tight">
                            {p.name}
                          </div>
                          <div className="font-mono text-sm sm:text-base font-extrabold text-white">
                            {p.price}
                          </div>
                          <div className="text-[9px] sm:text-[10px] text-slate-400 font-mono">
                            + IVA / mes
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-white/[0.05]">
                    {COMPARISON_MATRIX.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-white/[0.02] transition-colors"
                      >
                        <td className="p-3 sm:p-4 text-xs font-medium text-slate-300">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[9px] font-mono px-1 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.05] hidden sm:inline-block">
                              {row.category}
                            </span>
                            <span className="leading-snug">{row.feature}</span>
                          </div>
                        </td>

                        {/* Phase 1 Cell */}
                        <td className="p-3 sm:p-4 text-center">
                          {renderCell(row.phase1)}
                        </td>

                        {/* Phase 2 Cell (Recommended) */}
                        <td className="p-3 sm:p-4 text-center bg-purple-500/[0.04] border-x border-purple-500/15">
                          {renderCell(row.phase2, true)}
                        </td>

                        {/* Phase 3 Cell */}
                        <td className="p-3 sm:p-4 text-center">
                          {renderCell(row.phase3)}
                        </td>
                      </tr>
                    ))}
                  </tbody>

                  {/* Table Footer with CTAs */}
                  <tfoot>
                    <tr className="border-t border-white/[0.08] bg-white/[0.02]">
                      <td className="p-3.5 sm:p-5 text-xs text-slate-400 font-mono">
                        // Elegir nivel:
                      </td>
                      {PHASES.map((p) => (
                        <td
                          key={p.id}
                          className={`p-3 sm:p-5 text-center ${
                            p.isRecommended ? 'bg-purple-500/10 border-x border-purple-500/25' : ''
                          }`}
                        >
                          <a
                            href={getWhatsAppCustomLink(`Me interesa elegir la ${p.tag} — ${p.name}`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full py-2 px-2.5 rounded-xl text-xs font-bold font-display flex items-center justify-center gap-1 transition-all min-h-[38px] ${
                              p.isRecommended
                                ? 'bg-purple-600 text-white hover:bg-purple-500 shadow-md'
                                : 'bg-white/[0.05] border border-white/[0.1] text-slate-200 hover:bg-purple-500/15 hover:text-white'
                            }`}
                          >
                            <span>Elegir</span>
                            <ArrowRight size={12} />
                          </a>
                        </td>
                      ))}
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        ) : (
          /* View Mode 2: Interactive Tabs */
          <div className="reveal max-w-4xl mx-auto">
            {/* Tab Selector Buttons */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5 sm:mb-6">
              {PHASES.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(idx)}
                  className={`p-2.5 sm:p-4 rounded-xl sm:rounded-2xl text-left border transition-all ${
                    activeTab === idx
                      ? 'bg-purple-500/15 border-purple-500/50 shadow-[0_0_25px_rgba(139,92,246,0.2)]'
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-mono text-[10px] sm:text-xs font-bold text-purple-300">
                      {p.tag}
                    </span>
                    {p.isRecommended && (
                      <span className="text-[8px] sm:text-[9px] font-mono uppercase bg-purple-500/20 text-purple-200 px-1 py-0.5 rounded">
                        ★ TOP
                      </span>
                    )}
                  </div>
                  <div className="font-display font-bold text-xs sm:text-sm text-white truncate mb-0.5">
                    {p.name}
                  </div>
                  <div className="font-mono text-xs sm:text-base font-extrabold text-white">
                    {p.price}
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Phase Active Card */}
            <div className="obsidian-card rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-9 border-purple-500/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-white/[0.08]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="obsidian-tag obsidian-tag-purple text-[10px]">
                      Nivel 0{selectedPhase.id}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 truncate">
                      // {selectedPhase.concept}
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-3xl font-bold text-white">
                    {selectedPhase.name}
                  </h3>
                </div>
                <div className="sm:text-right">
                  <div className="font-mono text-2xl sm:text-3xl font-extrabold text-white">
                    {selectedPhase.price}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    + IVA / mes · Mínimo 6 meses
                  </div>
                </div>
              </div>

              {/* What gets added compared to previous */}
              <div className="mb-6 sm:mb-8">
                <div className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-3 flex items-center gap-1.5">
                  <Sparkles size={13} />
                  Capacidades clave incluidas en este nivel:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedPhase.includes.map((inc, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-white/[0.08]">
                <div className="text-xs text-slate-400 font-mono text-center sm:text-left">
                  Se coordina junto con la Etapa Base Inicial ($1.7M + IVA).
                </div>
                <a
                  href={getWhatsAppCustomLink(`Hola Punto D' Partida, me interesa avanzar con la ${selectedPhase.tag} — ${selectedPhase.name} (${selectedPhase.price}/mes)`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-obsidian w-full sm:w-auto text-xs justify-center"
                >
                  <span>Elegir {selectedPhase.tag}</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
