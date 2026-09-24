import { useEffect, useRef, useState } from 'react';
import { PHASES, PYMES_CAMPAIGN, PROJECT_START, getWhatsAppCustomLink } from '../data/proposalData';
import {
  Calculator,
  Send,
} from 'lucide-react';

export default function InvestmentCalculator() {
  const ref = useRef<HTMLElement>(null);

  // States
  const [includeBase, setIncludeBase] = useState(true);
  const [selectedPhaseId, setSelectedPhaseId] = useState<number | null>(2); // Default to Phase 2
  const [includeGoogleAds, setIncludeGoogleAds] = useState(false);
  const [includeWebIA, setIncludeWebIA] = useState(false);
  const [includePymes, setIncludePymes] = useState(false);

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

  // Format currency helper
  const formatCOP = (amount: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(amount).replace('COP', '').trim();
  };

  // Calculations
  const selectedPhase = PHASES.find((p) => p.id === selectedPhaseId);
  
  let oneOffTotal = 0;
  if (includeBase) oneOffTotal += PROJECT_START.priceRaw;
  if (includeGoogleAds) oneOffTotal += 2800000;
  if (includeWebIA) oneOffTotal += 2200000;
  if (includePymes) oneOffTotal += PYMES_CAMPAIGN.priceRaw;

  const monthlyTotal = selectedPhase ? selectedPhase.priceRaw : 0;

  // Build summary text for WhatsApp
  const generateWhatsAppSummary = () => {
    const lines: string[] = ['*Simulación de Presupuesto Seleccionada:*'];
    if (includeBase) lines.push(`• Etapa Base Inicial: $${formatCOP(PROJECT_START.priceRaw)} + IVA (Pago único)`);
    if (selectedPhase) lines.push(`• ${selectedPhase.tag} (${selectedPhase.name}): $${formatCOP(selectedPhase.priceRaw)} + IVA / mes`);
    if (includePymes) lines.push(`• Campaña Pymes Financiables: $${formatCOP(PYMES_CAMPAIGN.priceRaw)} + IVA (Pago único)`);
    if (includeGoogleAds) lines.push(`• Implementación Google Ads: $2.800.000 + IVA (Pago único)`);
    if (includeWebIA) lines.push(`• Rediseño Web + IA: $2.200.000 + IVA (Pago único)`);
    lines.push('');
    lines.push(`*Total Inversión Inicial (Pago Único):* $${formatCOP(oneOffTotal)} + IVA`);
    if (monthlyTotal > 0) {
      lines.push(`*Total Acompañamiento Mensual:* $${formatCOP(monthlyTotal)} + IVA / mes (6 meses)`);
    }
    return lines.join('\n');
  };

  const dynamicWhatsAppLink = getWhatsAppCustomLink(generateWhatsAppSummary());

  return (
    <section id="inversion" ref={ref} className="py-14 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-[#1ED760] font-semibold uppercase tracking-wider mb-2">
            <Calculator size={14} />
            <span>Simulador Interactivo de Presupuesto</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Personaliza tu propuesta en tiempo real
          </h2>
          <p className="text-sm text-gray-400 mt-1 max-w-2xl">
            Selecciona la fase mensual y los servicios que necesitas para conocer el desglose exacto de pago único y valor mensual.
          </p>
        </div>

        {/* Calculator Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          {/* Left Column (Selectors - Cols 7) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Step 1: Etapa Inicial */}
            <div className="bento-card p-5 border-white/[0.08]">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="calc-base"
                    checked={includeBase}
                    onChange={(e) => setIncludeBase(e.target.checked)}
                    className="w-5 h-5 rounded accent-[#1DB954] cursor-pointer"
                  />
                  <div>
                    <label htmlFor="calc-base" className="text-sm font-bold text-white cursor-pointer block">
                      Etapa Inicial — Estrategia y Configuración
                    </label>
                    <span className="text-xs text-gray-400 block">
                      Obligatoria para iniciar Fase 1, 2 o 3 (15–20 días)
                    </span>
                  </div>
                </div>
                <span className="text-sm font-mono font-bold text-white shrink-0">
                  +$1.700.000 <span className="text-[10px] text-gray-400 block sm:inline font-sans font-normal">único</span>
                </span>
              </div>
            </div>

            {/* Step 2: Fase Mensual Selector */}
            <div className="bento-card p-5 border-white/[0.08]">
              <span className="text-xs font-mono uppercase font-bold text-gray-400 block mb-3">
                Selecciona una alternativa mensual (Propuesta 01):
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {PHASES.map((p) => {
                  const isSelected = selectedPhaseId === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedPhaseId(isSelected ? null : p.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#1DB954]/15 border-[#1DB954] shadow-[0_0_20px_rgba(29,185,84,0.2)]'
                          : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.15]'
                      }`}
                    >
                      {p.isRecommended && (
                        <span className="text-[9px] font-mono font-extrabold text-[#1ED760] mb-1">
                          ★ Recomendada
                        </span>
                      )}
                      <div>
                        <div className="text-xs font-bold text-white">{p.tag}</div>
                        <div className="text-[11px] text-gray-400 leading-tight mt-0.5">{p.name}</div>
                      </div>
                      <div className="text-sm font-mono font-extrabold text-white mt-3">
                        {p.price}
                        <span className="text-[10px] text-gray-400 font-sans font-normal block">/ mes</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {selectedPhaseId === null && (
                <span className="text-[11px] text-gray-400 mt-2 block">
                  * Sin fase mensual seleccionada (solo servicios puntuales).
                </span>
              )}
            </div>

            {/* Step 3: Complementarios & Campaña */}
            <div className="bento-card p-5 border-white/[0.08] space-y-3">
              <span className="text-xs font-mono uppercase font-bold text-gray-400 block mb-1">
                Servicios complementarios y campañas adicionales:
              </span>

              {/* Campaña Pymes */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="calc-pymes"
                    checked={includePymes}
                    onChange={(e) => setIncludePymes(e.target.checked)}
                    className="w-5 h-5 rounded accent-[#1DB954] cursor-pointer"
                  />
                  <div>
                    <label htmlFor="calc-pymes" className="text-xs font-bold text-white cursor-pointer block">
                      Campaña Pymes Financiables
                    </label>
                    <span className="text-[11px] text-gray-400 block">
                      Producción audiovisual + 8 reels + Meta Ads puntual
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-white shrink-0">
                  +$3.800.000 <span className="text-[10px] text-gray-400 block sm:inline font-sans font-normal">único</span>
                </span>
              </div>

              {/* Google Ads */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="calc-google"
                    checked={includeGoogleAds}
                    onChange={(e) => setIncludeGoogleAds(e.target.checked)}
                    className="w-5 h-5 rounded accent-[#1DB954] cursor-pointer"
                  />
                  <div>
                    <label htmlFor="calc-google" className="text-xs font-bold text-white cursor-pointer block">
                      Implementación Google Ads
                    </label>
                    <span className="text-[11px] text-gray-400 block">
                      Configuración profesional + hasta 2 campañas iniciales
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-white shrink-0">
                  +$2.800.000 <span className="text-[10px] text-gray-400 block sm:inline font-sans font-normal">único</span>
                </span>
              </div>

              {/* Web + IA */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="calc-web"
                    checked={includeWebIA}
                    onChange={(e) => setIncludeWebIA(e.target.checked)}
                    className="w-5 h-5 rounded accent-[#1DB954] cursor-pointer"
                  />
                  <div>
                    <label htmlFor="calc-web" className="text-xs font-bold text-white cursor-pointer block">
                      Web + IA — Rediseño / Desarrollo
                    </label>
                    <span className="text-[11px] text-gray-400 block">
                      UX/UI responsive + WhatsApp + Chatbot IA básico
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-white shrink-0">
                  +$2.200.000 <span className="text-[10px] text-gray-400 block sm:inline font-sans font-normal">único</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (Total Summary Bento Box - Cols 5) */}
          <div className="lg:col-span-5 bento-card bento-card-green-glow p-6 sm:p-7 border-[#1DB954]/30 sticky top-24">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
              <span className="text-xs font-mono uppercase font-bold text-[#1ED760]">
                Resumen de Presupuesto
              </span>
              <span className="text-[11px] font-mono text-gray-400">
                Simulación
              </span>
            </div>

            <div className="space-y-4 mb-6">
              {/* One-off summary */}
              <div className="p-4 rounded-2xl bg-[#090a0f]/80 border border-white/[0.08]">
                <span className="text-[11px] font-mono text-gray-400 uppercase block">
                  Inversión Inicial (Pago Único):
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl sm:text-3xl font-mono font-extrabold text-white">
                    ${formatCOP(oneOffTotal)}
                  </span>
                  <span className="text-xs font-mono text-[#1ED760] font-bold">
                    + IVA
                  </span>
                </div>
              </div>

              {/* Monthly summary */}
              <div className="p-4 rounded-2xl bg-[#090a0f]/80 border border-white/[0.08]">
                <span className="text-[11px] font-mono text-gray-400 uppercase block">
                  Acompañamiento Mensual (6 meses):
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl sm:text-3xl font-mono font-extrabold text-white">
                    ${formatCOP(monthlyTotal)}
                  </span>
                  <span className="text-xs font-mono text-[#1ED760] font-bold">
                    + IVA / mes
                  </span>
                </div>
                {selectedPhase && (
                  <span className="text-[11px] text-gray-400 mt-1 block">
                    Seleccionado: {selectedPhase.tag} ({selectedPhase.name})
                  </span>
                )}
              </div>
            </div>

            {/* Export WhatsApp Button */}
            <a
              href={dynamicWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-spotify w-full justify-center text-xs py-3"
            >
              <span>Enviar esta configuración a WhatsApp</span>
              <Send size={14} />
            </a>

            <span className="text-[10px] text-gray-500 text-center block mt-3">
              * Valores en pesos colombianos (+ IVA). Pauta publicitaria no incluida.
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
