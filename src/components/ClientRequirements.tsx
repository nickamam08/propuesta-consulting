import { useEffect, useRef } from 'react';
import { CLIENT_REQUIREMENTS } from '../data/proposalData';
import { CheckCircle2, ClipboardList, ShieldCheck } from 'lucide-react';

export default function ClientRequirements() {
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

  return (
    <div id="requerimientos" ref={ref} className="mb-8">
      <div className="bento-card p-6 sm:p-8 lg:p-10 border-white/[0.09]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#1ED760] font-semibold uppercase tracking-wider mb-1">
              <ClipboardList size={14} />
              <span>Requerimientos para dar inicio</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
              Insumos requeridos para dar inicio
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
              Materiales y accesos facilitados por Finanzas Consulting para arrancar la ejecución sin retrasos.
            </p>
          </div>
          <span className="bento-badge bento-badge-green font-mono text-[11px] self-start md:self-auto">
            8 Puntos Clave
          </span>
        </div>

        {/* 8 Bento Requirement Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
          {CLIENT_REQUIREMENTS.map((req, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#1DB954]/30 hover:bg-white/[0.04] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="w-6 h-6 rounded-lg bg-[#1DB954]/15 text-[#1ED760] flex items-center justify-center">
                    <CheckCircle2 size={14} />
                  </span>
                  <span className="text-[10px] font-mono text-gray-500 uppercase">
                    Insumo
                  </span>
                </div>
                <p className="text-xs text-gray-200 leading-relaxed">
                  {req}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-6 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3 text-xs text-gray-400">
          <ShieldCheck size={16} className="text-[#1ED760] shrink-0" />
          <span>Todos estos insumos se coordinan en la primera sesión de recepción durante la Etapa Inicial.</span>
        </div>
      </div>
    </div>
  );
}
