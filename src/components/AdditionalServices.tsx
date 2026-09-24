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
    el.querySelectorAll('.reveal').forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="adicionales" ref={ref} className="py-20 md:py-28 relative">
      <div className="section-divider-obsidian mb-20" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal flex justify-center mb-3">
            <span className="obsidian-tag">
              <Wrench size={12} className="text-purple-400" />
              // Implementaciones Independientes
            </span>
          </div>

          <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Servicios complementarios{' '}
            <span className="gradient-text-purple">e independientes.</span>
          </h2>

          <p className="reveal text-slate-300 text-base sm:text-lg leading-relaxed">
            Módulos técnicos especializados de pago único que pueden contratarse por separado o sumarse a cualquiera de las fases del ecosistema.
          </p>
        </div>

        {/* 2 Service Cards */}
        <div className="grid md:grid-cols-2 gap-7">
          {ADDITIONAL_SERVICES.map((service, i) => {
            const Icon = ICONS[i] ?? Search;
            const waLink = getWhatsAppCustomLink(`Hola, me interesa consultar el servicio de: ${service.title} (${service.price} ${service.priceSuffix})`);

            return (
              <div
                key={service.id}
                className="reveal obsidian-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between border-purple-500/20"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center text-purple-300">
                        <Icon size={20} />
                      </div>
                      <div>
                        <span className="obsidian-tag obsidian-tag-cyan text-[10px]">
                          {service.tag}
                        </span>
                        <h3 className="font-display text-xl font-bold text-white mt-1">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Price Tag */}
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-3xl font-extrabold text-white">
                        {service.price}
                      </span>
                      <span className="font-mono text-xs text-purple-300 font-semibold">
                        {service.priceSuffix}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6 space-y-2.5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      Alcance detallado:
                    </div>
                    {service.scope.map((item, j) => (
                      <div key={j} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Disclaimer & CTA */}
                <div className="pt-4 border-t border-white/[0.06] space-y-4">
                  <div className="flex items-start gap-2 text-[11px] text-slate-400 bg-amber-500/[0.05] border border-amber-500/15 p-3 rounded-xl">
                    <Info size={14} className="text-amber-400 shrink-0 mt-0.5" />
                    <span>{service.disclaimer}</span>
                  </div>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary-obsidian w-full text-xs justify-center"
                  >
                    <span>Consultar {service.title}</span>
                    <ArrowRight size={14} />
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
