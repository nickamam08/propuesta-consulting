import { useEffect, useRef, useState } from 'react';
import { PHASES, PYMES_CAMPAIGN, PROJECT_START, getWhatsAppCustomLink } from '../data/proposalData';
import {
  Calculator,
  CheckCircle2,
  Send,
  Receipt,
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
    el.querySelectorAll('.reveal').forEach((c) => obs.observe(c));
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
    <section id="calculadora" ref={ref} className="py-20 md:py-28 relative">
      <div className="section-divider-obsidian mb-20" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="reveal flex justify-center mb-3">
            <span className="obsidian-tag obsidian-tag-purple">
              <Calculator size={12} className="text-purple-400" />
              // Herramienta Interactiva
            </span>
          </div>

          <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Simulador de inversión <span className="gradient-text-purple">personalizado.</span>
          </h2>

          <p className="reveal text-slate-300 text-base sm:text-lg leading-relaxed">
            Seleccione el plan y los módulos que necesita para visualizar el desglose exacto de su inversión inicial y mensual.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          
          {/* Left Column: Interactive Selectors */}
          <div className="reveal space-y-6">
            
            {/* Step 1: Base Stage */}
            <div className="obsidian-card rounded-3xl p-6 border-purple-500/20">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="calc-base"
                    checked={includeBase}
                    onChange={(e) => setIncludeBase(e.target.checked)}
                    className="w-5 h-5 rounded-md accent-purple-600 cursor-pointer"
                  />
                  <label htmlFor="calc-base" className="cursor-pointer">
                    <div className="text-xs font-mono uppercase tracking-wider text-purple-300">
                      Paso 01 · Etapa Base Obligatoria
                    </div>
                    <div className="font-display font-bold text-base text-white">
                      Construcción Estratégica Inicial
                    </div>
                    <div className="text-xs text-slate-400">
                      Diagnóstico, brief, optimización de perfiles y accesos (15–20 días)
                    </div>
                  </label>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-mono font-bold text-white text-base">
                    $1.700.000
                  </div>
                  <div className="text-[10px] font-mono text-slate-500">
                    pago único
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Monthly Phase Selection */}
            <div className="obsidian-card rounded-3xl p-6 border-purple-500/20">
              <div className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-4 flex items-center justify-between">
                <span>Paso 02 · Nivel de Acompañamiento Mensual</span>
                <span className="text-slate-500 text-[10px]">Permanencia 6 meses</span>
              </div>

              <div className="space-y-3">
                {PHASES.map((p) => {
                  const isSelected = selectedPhaseId === p.id;
                  return (
                    <div
                      key={p.id}
                      onClick={() => setSelectedPhaseId(isSelected ? null : p.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'bg-purple-500/15 border-purple-500/50 shadow-[0_0_20px_rgba(139,92,246,0.15)]'
                          : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          isSelected ? 'border-purple-400 bg-purple-600 text-white' : 'border-slate-600'
                        }`}>
                          {isSelected && <CheckCircle2 size={13} />}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-purple-300">{p.tag}</span>
                            <span className="text-sm font-bold text-white">{p.name}</span>
                            {p.isRecommended && (
                              <span className="px-1.5 py-0.5 rounded text-[9px] bg-purple-500/20 text-purple-200 font-mono font-bold">
                                ★ TOP
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-400 mt-0.5">
                            {p.concept}
                          </div>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="font-mono font-bold text-white text-base">
                          {p.price}
                        </div>
                        <div className="text-[10px] font-mono text-slate-500">
                          / mes
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Option to uncheck monthly plan */}
                <button
                  type="button"
                  onClick={() => setSelectedPhaseId(null)}
                  className={`w-full py-2 px-3 text-center text-xs font-mono transition-colors ${
                    selectedPhaseId === null ? 'text-purple-300 font-bold' : 'text-slate-500 hover:text-slate-400'
                  }`}
                >
                  {selectedPhaseId === null ? '✓ Sin plan mensual seleccionado' : 'Desmarcar plan mensual (solo implementaciones puntuales)'}
                </button>
              </div>
            </div>

            {/* Step 3: Add-on Implementations */}
            <div className="obsidian-card rounded-3xl p-6 border-purple-500/20">
              <div className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-4">
                Paso 03 · Campañas y Servicios Complementarios (Opcionales)
              </div>

              <div className="space-y-3">
                {/* Pymes Financiables */}
                <label className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                  includePymes ? 'bg-emerald-500/10 border-emerald-500/40' : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                }`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includePymes}
                      onChange={(e) => setIncludePymes(e.target.checked)}
                      className="w-5 h-5 rounded-md accent-emerald-500 cursor-pointer"
                    />
                    <div>
                      <div className="text-xs font-mono text-emerald-300 font-bold uppercase">Campaña Puntual</div>
                      <div className="text-sm font-bold text-white">Campaña Pymes Financiables</div>
                      <div className="text-[11px] text-slate-400">1 jornada audiovisual, 8 reels, gráficas y Meta Ads</div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-mono font-bold text-emerald-400 text-sm">$3.800.000</div>
                    <div className="text-[10px] font-mono text-slate-500">pago único</div>
                  </div>
                </label>

                {/* Google Ads */}
                <label className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                  includeGoogleAds ? 'bg-purple-500/10 border-purple-500/40' : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                }`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeGoogleAds}
                      onChange={(e) => setIncludeGoogleAds(e.target.checked)}
                      className="w-5 h-5 rounded-md accent-purple-600 cursor-pointer"
                    />
                    <div>
                      <div className="text-xs font-mono text-purple-300 font-bold uppercase">Implementación</div>
                      <div className="text-sm font-bold text-white">Google Ads — Configuración Estratégica</div>
                      <div className="text-[11px] text-slate-400">Configuración técnica, conversiones y 2 campañas iniciales</div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-mono font-bold text-purple-300 text-sm">$2.800.000</div>
                    <div className="text-[10px] font-mono text-slate-500">pago único</div>
                  </div>
                </label>

                {/* Web + IA */}
                <label className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                  includeWebIA ? 'bg-purple-500/10 border-purple-500/40' : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]'
                }`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeWebIA}
                      onChange={(e) => setIncludeWebIA(e.target.checked)}
                      className="w-5 h-5 rounded-md accent-purple-600 cursor-pointer"
                    />
                    <div>
                      <div className="text-xs font-mono text-purple-300 font-bold uppercase">Desarrollo</div>
                      <div className="text-sm font-bold text-white">Rediseño Web + Integración IA</div>
                      <div className="text-[11px] text-slate-400">Arquitectura UX/UI responsive orientada a conversión</div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-mono font-bold text-purple-300 text-sm">$2.200.000</div>
                    <div className="text-[10px] font-mono text-slate-500">pago único</div>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Right Column: Live Calculated Summary Card */}
          <div className="reveal sticky top-24">
            <div className="obsidian-card rounded-3xl p-7 border-purple-500/30 shadow-[0_0_50px_rgba(139,92,246,0.18)]">
              
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <Receipt size={18} className="text-purple-400" />
                  <h3 className="font-display font-bold text-base text-white">
                    Resumen Estimado
                  </h3>
                </div>
                <span className="obsidian-tag obsidian-tag-purple text-[10px]">
                  #cotizacion-activa
                </span>
              </div>

              {/* Breakdown List */}
              <div className="space-y-3 mb-6">
                {includeBase && (
                  <div className="flex items-center justify-between text-xs py-1 border-b border-white/[0.04]">
                    <span className="text-slate-300">Etapa Base Inicial:</span>
                    <span className="font-mono font-semibold text-white">$1.700.000</span>
                  </div>
                )}
                {selectedPhase && (
                  <div className="flex items-center justify-between text-xs py-1 border-b border-white/[0.04]">
                    <span className="text-slate-300">{selectedPhase.tag} (Mensual):</span>
                    <span className="font-mono font-semibold text-purple-300">{selectedPhase.price} / mes</span>
                  </div>
                )}
                {includePymes && (
                  <div className="flex items-center justify-between text-xs py-1 border-b border-white/[0.04]">
                    <span className="text-slate-300">Campaña Pymes Financiables:</span>
                    <span className="font-mono font-semibold text-emerald-400">$3.800.000</span>
                  </div>
                )}
                {includeGoogleAds && (
                  <div className="flex items-center justify-between text-xs py-1 border-b border-white/[0.04]">
                    <span className="text-slate-300">Implementación Google Ads:</span>
                    <span className="font-mono font-semibold text-white">$2.800.000</span>
                  </div>
                )}
                {includeWebIA && (
                  <div className="flex items-center justify-between text-xs py-1 border-b border-white/[0.04]">
                    <span className="text-slate-300">Rediseño Web + IA:</span>
                    <span className="font-mono font-semibold text-white">$2.200.000</span>
                  </div>
                )}
              </div>

              {/* Total Summary Blocks */}
              <div className="space-y-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] mb-6">
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Inversión Inicial (Pago Único)
                  </div>
                  <div className="font-mono text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
                    ${formatCOP(oneOffTotal)} <small className="text-xs font-normal text-slate-400">+ IVA</small>
                  </div>
                </div>

                {monthlyTotal > 0 && (
                  <div className="pt-3 border-t border-white/[0.06]">
                    <div className="text-[11px] font-mono text-purple-300 uppercase tracking-wider">
                      Acompañamiento Mensual (6 meses)
                    </div>
                    <div className="font-mono text-2xl sm:text-3xl font-extrabold text-purple-200 mt-0.5">
                      ${formatCOP(monthlyTotal)} <small className="text-xs font-normal text-slate-400">+ IVA / mes</small>
                    </div>
                  </div>
                )}
              </div>

              {/* Direct WhatsApp Action with prefilled configuration */}
              <a
                href={dynamicWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-obsidian w-full text-xs justify-center py-3.5 mb-3"
              >
                <Send size={14} />
                <span>Enviar mi selección por WhatsApp</span>
              </a>

              <p className="text-[10px] text-slate-500 font-mono text-center leading-relaxed">
                Al hacer clic, se abrirá WhatsApp con el resumen de su selección para coordinar el inicio con el equipo.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
