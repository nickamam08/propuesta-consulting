import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const ECOSYSTEM_STEPS = [
  { label: 'Redes Sociales', emoji: '📱', color: 'from-blue-500/20 to-blue-600/10' },
  { label: 'Meta Ads', emoji: '📣', color: 'from-purple-500/20 to-purple-600/10' },
  { label: 'Google Ads', emoji: '🔍', color: 'from-red-500/20 to-orange-500/10' },
  { label: 'Sitio Web', emoji: '🌐', color: 'from-cyan-500/20 to-cyan-600/10' },
  { label: 'WhatsApp', emoji: '💬', color: 'from-green-500/20 to-green-600/10' },
  { label: 'Lead', emoji: '🎯', color: 'from-amber-500/20 to-amber-600/10' },
  { label: 'Seguimiento', emoji: '📊', color: 'from-emerald-500/20 to-emerald-600/10' },
];

export default function EcosystemMockup() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    el.querySelectorAll('.reveal').forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="reveal text-xs tracking-[0.2em] uppercase text-accent-cyan font-medium mb-4">Ecosistema digital</p>
          <h2 className="reveal font-display text-3xl sm:text-4xl font-extrabold leading-tight mb-6">
            De las redes a la{' '}
            <span className="gradient-text">oportunidad.</span>
          </h2>
          <p className="reveal text-text-muted text-lg">
            El cliente entiende en segundos cómo las diferentes piezas dejan de trabajar aisladas.
          </p>
        </div>

        {/* Ecosystem flow */}
        <div className="reveal flex flex-wrap justify-center items-center gap-3 sm:gap-4">
          {ECOSYSTEM_STEPS.map((step, i) => (
            <span key={step.label} className="flex items-center gap-3 sm:gap-4">
              <div className={`bg-gradient-to-br ${step.color} border border-white/5 rounded-2xl px-5 py-4 text-center min-w-[100px] hover:scale-105 transition-transform`}>
                <div className="text-2xl mb-1">{step.emoji}</div>
                <span className="text-xs font-medium text-text-main">{step.label}</span>
              </div>
              {i < ECOSYSTEM_STEPS.length - 1 && (
                <ArrowRight size={16} className="text-accent-cyan/50 shrink-0 hidden sm:block" />
              )}
            </span>
          ))}
        </div>

        {/* Social mockups section */}
        <div className="mt-24">
          <h3 className="reveal font-display text-2xl font-bold text-center mb-4">
            Así podría verse el sistema de contenidos.
          </h3>
          <p className="reveal text-center text-text-dim text-sm mb-10">
            * Ejemplos conceptuales de referencia, no publicaciones realizadas.
          </p>

          <div className="reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Instagram feed mockups */}
            {[
              { type: 'Educación financiera', color: 'bg-accent-cyan/10' },
              { type: 'Servicio', color: 'bg-accent-emerald/10' },
              { type: 'Testimonio', color: 'bg-accent-blue/10' },
              { type: 'Reel', color: 'bg-purple-500/10' },
              { type: 'Dato clave', color: 'bg-amber-500/10' },
              { type: 'Equipo', color: 'bg-pink-500/10' },
              { type: 'CTA', color: 'bg-red-500/10' },
              { type: 'Caso de éxito', color: 'bg-teal-500/10' },
            ].map((mock, i) => (
              <div key={i} className={`${mock.color} rounded-xl aspect-square flex items-center justify-center p-4 border border-white/5 hover:scale-[1.03] transition-transform`}>
                <div className="text-center">
                  <div className="w-8 h-8 rounded-lg bg-white/10 mx-auto mb-2" />
                  <span className="text-[10px] font-medium text-text-muted">{mock.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Web mockup */}
        <div className="mt-24">
          <h3 className="reveal font-display text-2xl font-bold text-center mb-4">
            Una web que también trabaja para el negocio.
          </h3>
          <p className="reveal text-center text-text-dim text-sm mb-10">
            * Mockup conceptual de arquitectura orientada a conversión.
          </p>

          <div className="reveal max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl overflow-hidden">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-bg-card">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/40" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                  <div className="w-3 h-3 rounded-full bg-green-500/40" />
                </div>
                <div className="flex-1 bg-bg-surface rounded-md px-3 py-1 text-xs text-text-dim ml-3">
                  finanzasconsulting.com
                </div>
              </div>

              {/* Page content mockup */}
              <div className="p-6 space-y-4">
                <div className="h-32 bg-gradient-to-r from-accent-cyan/5 to-accent-emerald/5 rounded-xl flex items-center justify-center">
                  <span className="text-sm font-medium text-text-dim">Hero · Propuesta de valor</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {['Consultoría', 'Formación', 'Mentoría'].map((s) => (
                    <div key={s} className="bg-bg-card rounded-lg p-4 text-center">
                      <div className="w-6 h-6 rounded bg-accent-cyan/10 mx-auto mb-2" />
                      <span className="text-[10px] text-text-muted">{s}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-bg-card rounded-lg p-4">
                    <span className="text-[10px] text-text-muted">Casos / Testimonios</span>
                  </div>
                  <div className="bg-accent-emerald/5 rounded-lg p-4 border border-accent-emerald/20">
                    <span className="text-[10px] text-accent-emerald font-medium">WhatsApp + Formulario</span>
                  </div>
                </div>
                <div className="bg-accent-cyan/5 rounded-lg p-3 text-center border border-accent-cyan/20">
                  <span className="text-[10px] text-accent-cyan font-medium">🤖 Asistente IA conceptual</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
