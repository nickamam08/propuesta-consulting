import { useEffect, useRef } from 'react';
import { INVESTMENT_SUMMARY } from '../data/proposalData';
import { Receipt, Info } from 'lucide-react';

export default function InvestmentSummary() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    el.querySelectorAll('.reveal-on-scroll').forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  const recurring = INVESTMENT_SUMMARY.filter((item) => item.suffix.includes('/ mes'));
  const oneOff = INVESTMENT_SUMMARY.filter((item) => !item.suffix.includes('/ mes'));

  return (
    <div id="inversion-resumen" ref={ref} className="mb-10">
      <div className="bento-card p-6 sm:p-8 lg:p-10 border-white/[0.09]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#1ED760] font-semibold uppercase tracking-wider mb-1">
              <Receipt size={14} />
              <span>Resumen Oficial de Inversión</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
              Tabla consolidada de valores
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
              Resumen oficial de inversiones para cada alternativa y servicio presentado en la propuesta.
            </p>
          </div>
          <span className="bento-badge text-gray-300 self-start md:self-auto font-mono text-[11px]">
            Valores en COP + IVA
          </span>
        </div>

        {/* 2 Bento Columns: Recurrente vs Pago Único */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Acompañamiento Mensual */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#090a0f]/50 border border-white/[0.07] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/[0.06]">
                <span className="text-xs font-mono font-bold uppercase text-white tracking-wider">
                  Acompañamiento Mensual (Ecosistema Digital)
                </span>
                <span className="text-[10px] font-mono text-[#1ED760] bg-[#1DB954]/15 px-2 py-0.5 rounded-full border border-[#1DB954]/30">
                  Se elige una
                </span>
              </div>

              <div className="space-y-3">
                {recurring.map((item) => (
                  <div
                    key={item.label}
                    className={`p-3 sm:p-3.5 rounded-xl border transition-all flex items-center justify-between gap-2.5 sm:gap-3 ${
                      item.recommended
                        ? 'bg-[#1DB954]/10 border-[#1DB954]/40 shadow-[0_0_20px_rgba(29,185,84,0.15)]'
                        : 'bg-white/[0.02] border-white/[0.05]'
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className="text-xs font-bold text-white">{item.label}</span>
                        {item.recommended && (
                          <span className="px-1.5 py-0.5 rounded text-[9px] bg-[#1DB954] text-black font-mono font-extrabold uppercase">
                            Recomendada
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-mono text-gray-400 mt-0.5 block truncate">
                        {item.note}
                      </span>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-mono text-sm sm:text-base lg:text-lg font-bold text-white">{item.price}</span>
                      <span className="block font-mono text-[9px] sm:text-[10px] text-gray-400">{item.suffix}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[11px] text-gray-400 flex items-center gap-2">
              <Info size={14} className="text-[#1ED760] shrink-0" />
              <span>Las Fases 1, 2 y 3 no se suman entre sí. Permanencia mínima: 6 meses.</span>
            </div>
          </div>

          {/* Pagos Únicos e Independientes */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#090a0f]/50 border border-white/[0.07] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/[0.06]">
                <span className="text-xs font-mono font-bold uppercase text-white tracking-wider">
                  Etapa Inicial, Complementarios & Campaña
                </span>
                <span className="text-[10px] font-mono text-gray-400 bg-white/[0.05] px-2 py-0.5 rounded-full border border-white/[0.08]">
                  Pago Único
                </span>
              </div>

              <div className="space-y-3">
                {oneOff.map((item) => (
                  <div
                    key={item.label}
                    className="p-3 sm:p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between gap-2.5 sm:gap-3"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-white truncate">{item.label}</div>
                      <span className="text-[10px] sm:text-[11px] font-mono text-gray-400 mt-0.5 block truncate">
                        {item.note}
                      </span>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-mono text-sm sm:text-base lg:text-lg font-bold text-white">{item.price}</span>
                      <span className="block font-mono text-[9px] sm:text-[10px] text-gray-400">{item.suffix}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[11px] text-gray-400 flex items-center gap-2">
              <Info size={14} className="text-[#1ED760] shrink-0" />
              <span>La inversión publicitaria (pauta Meta / Google) es asumida directamente por el cliente.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
