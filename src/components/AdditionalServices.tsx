import { useEffect, useRef } from 'react';
import { ADDITIONAL_SERVICES, getWhatsAppCustomLink } from '../data/proposalData';
import { Search, Globe, CheckCircle2, Info, ArrowRight, Wrench } from 'lucide-react';

const ICONS = [Search, Globe];

export default function AdditionalServices() {
  const ref = useRef<HTMLElement>(null);

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
    <section id="complementarios" ref={ref} className="py-14 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-[#1ED760] font-semibold uppercase tracking-wider mb-2">
            <Wrench size={14} />
            <span>Servicios complementarios</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Módulos técnicos especializados
          </h2>
          <p className="text-sm text-gray-400 mt-1 max-w-2xl">
            No constituyen una cuarta fase. Pueden contratarse junto con Fase 3 o de manera independiente según la prioridad.
          </p>
        </div>

        {/* 2 Bento Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ADDITIONAL_SERVICES.map((service, i) => {
            const Icon = ICONS[i] ?? Search;
            const waLink = getWhatsAppCustomLink(`Hola, me interesa consultar el servicio de: ${service.title} (${service.price} ${service.priceSuffix})`);

            return (
              <div
                key={service.id}
                className="bento-card p-6 sm:p-8 flex flex-col justify-between border-white/[0.09] hover:border-[#1DB954]/30"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#1DB954]/10 border border-[#1DB954]/30 flex items-center justify-center text-[#1ED760]">
                        <Icon size={20} />
                      </div>
                      <div>
                        <span className="bento-badge bento-badge-green font-mono text-[10px]">
                          {service.tag}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Price Tag */}
                  <div className="p-4 rounded-2xl bg-[#090a0f]/60 border border-white/[0.06] mb-5">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-2xl sm:text-3xl font-extrabold text-white">
                        {service.price}
                      </span>
                      <span className="font-mono text-xs text-[#1ED760] font-semibold">
                        {service.priceSuffix}
                      </span>
                    </div>
                    <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Scope List */}
                  <div className="mb-5 space-y-2">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400">
                      Alcance del módulo:
                    </div>
                    {service.scope.map((item, j) => (
                      <div key={j} className="flex items-start gap-2.5 text-xs text-gray-300 leading-relaxed">
                        <CheckCircle2 size={13} className="text-[#1ED760] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Disclaimer / Note */}
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-2 text-[11px] text-gray-400 mb-5">
                    <Info size={14} className="text-gray-400 shrink-0 mt-0.5" />
                    <span>{service.disclaimer}</span>
                  </div>

                  {/* Button */}
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass w-full justify-center text-xs py-2.5 hover:border-[#1DB954]/40"
                  >
                    <span>Cotizar {service.title}</span>
                    <ArrowRight size={14} className="text-[#1ED760]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
