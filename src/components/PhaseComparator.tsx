import { useEffect, useRef, useState } from 'react';
import { PHASES, COMPARISON_MATRIX, getWhatsAppCustomLink } from '../data/proposalData';
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Table,
  LayoutGrid,
  Check,
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
          <span className="w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Check size={14} />
          </span>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <span className="text-slate-600 font-mono text-sm">—</span>
        </div>
      );
    }
    return (
      <div className={`text-xs font-medium ${isRecommended ? 'text-purple-200 font-semibold' : 'text-slate-300'}`}>
        {val}
      </div>
    );
  };

  return (
    <section id="comparar" ref={ref} className="py-20 md:py-28 relative">
      <div className="section-divider-obsidian mb-20" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="reveal flex justify-center mb-3">
            <span className="obsidian-tag">
              <Table size={12} className="text-purple-400" />
              // Matriz de decisión rápida
            </span>
          </div>

          <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Tabla comparativa <span className="gradient-text-purple">sin rodeos.</span>
          </h2>

          <p className="reveal text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
            Compare exactamente qué incluye y qué agrega cada fase para tomar la decisión correcta sin perderse en textos largos.
          </p>

          {/* View Mode Toggle Switcher */}
          <div className="reveal inline-flex p-1 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
            <button
              onClick={() => setViewMode('matrix')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                viewMode === 'matrix'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Table size={14} />
              <span>Matriz Completa</span>
            </button>
            <button
              onClick={() => setViewMode('tabs')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                viewMode === 'tabs'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid size={14} />
              <span>Ficha por Fase</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Comprehensive Comparison Matrix */}
        {viewMode === 'matrix' ? (
          <div className="reveal obsidian-card rounded-3xl overflow-hidden border-purple-500/20 shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[720px]">
                <thead>
                  <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                    <th className="p-5 text-xs font-mono uppercase tracking-wider text-slate-400 w-[34%]">
                      Capacidad / Entregable
                    </th>
                    {PHASES.map((p) => (
                      <th
                        key={p.id}
                        className={`p-5 text-center w-[22%] transition-colors ${
                          p.isRecommended
                            ? 'bg-purple-500/10 border-x border-purple-500/25 relative'
                            : ''
                        }`}
                      >
                        {p.isRecommended && (
                          <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-b-md bg-purple-600 text-[9px] font-mono font-bold text-white uppercase tracking-wider shadow">
                            ★ Más Elegido
                          </span>
                        )}
                        <div className="font-mono text-[11px] text-purple-300 font-bold mb-1">
                          {p.tag}
                        </div>
                        <div className="font-display text-sm font-bold text-white mb-2 leading-tight">
                          {p.name}
                        </div>
                        <div className="font-mono text-base font-extrabold text-white">
                          {p.price}
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono">
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
                      <td className="p-4 sm:p-5 text-xs font-medium text-slate-300">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.05]">
                            {row.category}
                          </span>
                          <span>{row.feature}</span>
                        </div>
                      </td>

                      {/* Phase 1 Cell */}
                      <td className="p-4 sm:p-5 text-center">
                        {renderCell(row.phase1)}
                      </td>

                      {/* Phase 2 Cell (Recommended) */}
                      <td className="p-4 sm:p-5 text-center bg-purple-500/[0.04] border-x border-purple-500/15">
                        {renderCell(row.phase2, true)}
                      </td>

                      {/* Phase 3 Cell */}
                      <td className="p-4 sm:p-5 text-center">
                        {renderCell(row.phase3)}
                      </td>
                    </tr>
                  ))}
                </tbody>

                {/* Table Footer with CTAs */}
                <tfoot>
                  <tr className="border-t border-white/[0.08] bg-white/[0.02]">
                    <td className="p-5 text-xs text-slate-400 font-mono">
                      // Elegir nivel de acompañamiento:
                    </td>
                    {PHASES.map((p) => (
                      <td
                        key={p.id}
                        className={`p-5 text-center ${
                          p.isRecommended ? 'bg-purple-500/10 border-x border-purple-500/25' : ''
                        }`}
                      >
                        <a
                          href={getWhatsAppCustomLink(`Me interesa elegir la ${p.tag} — ${p.name}`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold font-display flex items-center justify-center gap-1.5 transition-all ${
                            p.isRecommended
                              ? 'bg-purple-600 text-white hover:bg-purple-500 shadow-md'
                              : 'bg-white/[0.05] border border-white/[0.1] text-slate-200 hover:bg-purple-500/15 hover:text-white'
                          }`}
                        >
                          <span>Elegir</span>
                          <ArrowRight size={13} />
                        </a>
                      </td>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        ) : (
          /* View Mode 2: Interactive Tabs with deep dive on additions */
          <div className="reveal max-w-4xl mx-auto">
            {/* Tab Selector Buttons */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {PHASES.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(idx)}
                  className={`p-4 rounded-2xl text-left border transition-all ${
                    activeTab === idx
                      ? 'bg-purple-500/15 border-purple-500/50 shadow-[0_0_25px_rgba(139,92,246,0.2)]'
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-purple-300">
                      {p.tag}
                    </span>
                    {p.isRecommended && (
                      <span className="text-[9px] font-mono uppercase bg-purple-500/20 text-purple-200 px-1.5 py-0.5 rounded">
                        ★ TOP
                      </span>
                    )}
                  </div>
                  <div className="font-display font-bold text-sm text-white truncate mb-1">
                    {p.name}
                  </div>
                  <div className="font-mono text-base font-extrabold text-white">
                    {p.price} <small className="text-[10px] text-slate-400 font-normal">/ mes</small>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Phase Active Card */}
            <div className="obsidian-card rounded-3xl p-7 sm:p-9 border-purple-500/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/[0.08]">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="obsidian-tag obsidian-tag-purple">
                      Nivel 0{selectedPhase.id}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      // {selectedPhase.concept}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    {selectedPhase.name}
                  </h3>
                </div>
                <div className="sm:text-right">
                  <div className="font-mono text-3xl font-extrabold text-white">
                    {selectedPhase.price}
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    + IVA / mes · Mínimo 6 meses
                  </div>
                </div>
              </div>

              {/* What gets added compared to previous */}
              <div className="mb-8">
                <div className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-3 flex items-center gap-2">
                  <Sparkles size={14} />
                  Capacidades clave incluidas en este nivel:
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedPhase.includes.map((inc, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
                <div className="text-xs text-slate-400 font-mono">
                  Se coordina junto con la Etapa Base Inicial ($1.7M + IVA).
                </div>
                <a
                  href={getWhatsAppCustomLink(`Hola Punto D' Partida, me interesa avanzar con la ${selectedPhase.tag} — ${selectedPhase.name} (${selectedPhase.price}/mes)`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-obsidian w-full sm:w-auto text-xs"
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
