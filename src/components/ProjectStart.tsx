import { useEffect, useRef } from 'react';
import { PROJECT_START } from '../data/proposalData';
import {
  CheckCircle2,
  AlertTriangle,
  Compass,
  Clock,
  FileCode,
} from 'lucide-react';

export default function ProjectStart() {
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <div id="etapa-inicial" ref={ref} className="mb-14">
      {/* Bento Container */}
      <div className="bento-card bento-card-green-glow p-6 sm:p-8 lg:p-10 border-white/[0.1]">
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              <span className="bento-badge bento-badge-green font-mono">
                <Compass size={12} />
                ETAPA INICIAL
              </span>
              <span className="bento-badge text-yellow-300 bg-yellow-500/10 border-yellow-500/30 font-mono">
                Obligatoria para Fase 1, 2 o 3
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Construcción estratégica + configuración
            </h3>
            <p className="text-sm text-gray-300 mt-1 max-w-2xl">
              Punto de partida necesario para estructurar la estrategia, afinar la comunicación, optimizar perfiles y preparar los activos digitales antes de la pauta y contenidos mensuales.
            </p>
          </div>

          {/* Pricing Box */}
          <div className="p-5 rounded-2xl bg-[#090a0f]/80 border border-[#1DB954]/30 flex flex-col justify-center w-full lg:w-auto lg:min-w-[260px] shadow-[0_0_30px_rgba(29,185,84,0.12)]">
            <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">Inversión Base</span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white">
                {PROJECT_START.price}
              </span>
              <span className="text-xs font-bold text-[#1ED760] font-mono">
                + IVA
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-2">
              <Clock size={13} className="text-[#1ED760]" />
              <span>Duración: 15–20 días hábiles (Pago único)</span>
            </div>
          </div>
        </div>

        {/* Deliverables Bento Grid */}
        <div className="mt-7">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
              <FileCode size={14} className="text-[#1ED760]" />
              Entregables Principales Incluidos
            </span>
            <span className="text-xs font-semibold text-gray-400">
              {PROJECT_START.deliverables.length} entregables clave
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {PROJECT_START.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#1DB954]/40 hover:bg-white/[0.05] transition-all flex flex-col justify-between"
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
        </div>

        {/* Bottom Condition Banner */}
        <div className="mt-6 p-4 rounded-xl bg-yellow-500/[0.06] border border-yellow-500/25 flex items-start gap-3">
          <AlertTriangle size={16} className="text-yellow-400 shrink-0 mt-0.5" />
          <p className="text-xs text-yellow-200/90 leading-relaxed">
            <strong className="text-yellow-300">Regla clave:</strong> La Etapa Inicial es obligatoria para contratar Fase 1, Fase 2 o Fase 3. Si se inicia directamente en Fase 2 o Fase 3, igualmente debe contratarse. No cuenta dentro de los seis (6) meses de permanencia mínima mensual.
          </p>
        </div>
      </div>
    </div>
  );
}
