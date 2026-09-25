import { useEffect, useRef, useState } from 'react';
import { PHASES, COMPARISON_MATRIX, getWhatsAppCustomLink } from '../data/proposalData';
import {
  Check,
  ArrowRight,
  Table,
  LayoutGrid,
  MoveHorizontal,
} from 'lucide-react';

export default function PhaseComparator() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(1);
  const [viewMode, setViewMode] = useState<'matrix' | 'tabs'>('matrix');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setViewMode('tabs');
    }
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    el.querySelectorAll('.reveal-on-scroll').forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  const selectedPhase = PHASES[activeTab];

  const renderCell = (val: string | boolean, isRecommended?: boolean) => {
    if (typeof val === 'boolean') {
      return val ? (
        <div className="flex items-center justify-center">
          <span className="w-5 h-5 rounded-full bg-[#1DB954]/15 border border-[#1DB954]/40 flex items-center justify-center text-[#1ED760]">
            <Check size={12} />
          </span>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <span className="text-gray-600 font-mono text-xs">—</span>
        </div>
      );
    }
    return (
      <div className={`text-xs font-medium leading-snug ${isRecommended ? 'text-[#1ED760] font-semibold' : 'text-gray-300'}`}>
        {val}
      </div>
    );
  };

  return (
    <div id="comparar" ref={ref} className="mt-6 mb-16">
      <div className="bento-card p-5 sm:p-7 lg:p-8 border-white/[0.09]">
        {/* Header & Toggle */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#1ED760] font-semibold uppercase tracking-wider mb-1">
              <Table size={13} />
              <span>Matriz Comparativa de Fases</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Comparativa ágil punto por punto
            </h3>
            <p className="text-xs text-gray-400 mt-0.5">
              Visualiza con precisión los entregables y alcance de cada opción para decidir con claridad.
            </p>
          </div>

          {/* View Mode Toggle Switcher */}
          <div className="inline-flex p-1 rounded-full bg-[#090a0f]/80 border border-white/[0.08] shrink-0 self-start md:self-auto">
            <button
              onClick={() => setViewMode('matrix')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                viewMode === 'matrix'
                  ? 'bg-[#1DB954] text-black shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Table size={12} />
              <span>Tabla Matriz</span>
            </button>
            <button
              onClick={() => setViewMode('tabs')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                viewMode === 'tabs'
                  ? 'bg-[#1DB954] text-black shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <LayoutGrid size={12} />
              <span>Vista Tarjeta</span>
            </button>
          </div>
        </div>

        {/* View Mode: Matrix Table */}
        {viewMode === 'matrix' ? (
          <div className="mt-6">
            <div className="flex md:hidden items-center justify-between gap-2 px-3 py-2 mb-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[11px] text-gray-400">
              <div className="flex items-center gap-1.5">
                <MoveHorizontal size={13} className="text-[#1ED760]" />
                <span>Desliza horizontalmente para ver las 3 fases</span>
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/[0.07] bg-[#090a0f]/40">
              <table className="w-full text-left border-collapse min-w-[620px]">
                <thead>
                  <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                    <th className="p-4 text-xs font-mono font-semibold text-gray-400 w-2/5">
                      Entregable / Alcance
                    </th>
                    {PHASES.map((p) => (
                      <th
                        key={p.id}
                        className={`p-4 text-center w-1/5 ${
                          p.isRecommended
                            ? 'bg-[#1DB954]/10 border-x border-[#1DB954]/30'
                            : ''
                        }`}
                      >
                        <div className="flex flex-col items-center">
                          {p.isRecommended && (
                            <span className="text-[9px] font-extrabold font-mono uppercase text-[#1ED760] bg-[#1DB954]/20 px-2 py-0.5 rounded-full mb-1 border border-[#1DB954]/40">
                              Recomendada
                            </span>
                          )}
                          <span className="text-xs font-bold text-white">
                            {p.tag}
                          </span>
                          <span className="text-[10px] text-gray-400 leading-tight mt-0.5">
                            {p.name}
                          </span>
                          <span className="text-sm font-mono font-extrabold text-white mt-1.5">
                            {p.price}
                          </span>
                          <span className="text-[10px] font-mono text-gray-500">
                            / mes
                          </span>
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
                      <td className="p-3.5 text-xs text-gray-300 font-medium">
                        <div className="text-[10px] font-mono uppercase text-gray-500 mb-0.5">
                          {row.category}
                        </div>
                        <span className="text-white">{row.feature}</span>
                      </td>
                      <td className="p-3.5 text-center">
                        {renderCell(row.phase1)}
                      </td>
                      <td className="p-3.5 text-center bg-[#1DB954]/[0.03] border-x border-[#1DB954]/20">
                        {renderCell(row.phase2, true)}
                      </td>
                      <td className="p-3.5 text-center">
                        {renderCell(row.phase3)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* View Mode: Tabs */
          <div className="mt-6">
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 p-1 sm:p-1.5 rounded-2xl bg-[#090a0f]/80 border border-white/[0.08] mb-6">
              {PHASES.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(idx)}
                  className={`py-2 px-1.5 sm:py-3 sm:px-3 rounded-xl text-center transition-all ${
                    activeTab === idx
                      ? 'bg-[#1DB954] text-black font-bold shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="text-[11px] sm:text-xs font-bold leading-tight">{p.tag}</div>
                  <div className="text-[9px] sm:text-[11px] font-mono mt-0.5 opacity-90 truncate">{p.price}/m</div>
                </button>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-white/[0.06]">
                <div>
                  <h4 className="text-lg font-bold text-white">{selectedPhase.name}</h4>
                  <p className="text-xs text-gray-400 mt-0.5">{selectedPhase.concept}</p>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-2xl font-extrabold font-mono text-white">{selectedPhase.price}</div>
                  <div className="text-[10px] font-mono text-gray-400">{selectedPhase.priceSuffix}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                {selectedPhase.includes.map((inc, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                    <Check size={14} className="text-[#1ED760] shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>

              <a
                href={getWhatsAppCustomLink(`Me interesa la ${selectedPhase.tag} — ${selectedPhase.name}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-spotify w-full justify-center text-xs py-2.5"
              >
                <span>Seleccionar {selectedPhase.tag}</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
