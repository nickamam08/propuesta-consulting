import { useEffect, useRef } from 'react';
import { WHATSAPP_LINK } from '../data/proposalData';
import { ArrowRight } from 'lucide-react';

const CAPABILITIES = [
  'Estrategia', 'Comunicación', 'Diseño', 'Audiovisual',
  'Contenidos', 'Publicidad', 'Desarrollo', 'Automatización',
];

export default function ValueProposition() {
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="reveal text-xs tracking-[0.2em] uppercase text-accent-cyan font-medium mb-4">Valor de la propuesta</p>

        <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-8">
          No es solo marketing.{' '}
          <span className="gradient-text">Es un equipo dentro de su ecosistema.</span>
        </h2>

        <div className="reveal flex flex-wrap justify-center gap-3 mb-10">
          {CAPABILITIES.map((cap, i) => (
            <span key={cap} className="flex items-center gap-2">
              <span className="text-sm font-medium text-accent-cyan bg-accent-cyan/10 px-4 py-2 rounded-lg border border-accent-cyan/10">
                {cap}
              </span>
              {i < CAPABILITIES.length - 1 && (
                <span className="text-accent-cyan/30 text-lg">+</span>
              )}
            </span>
          ))}
        </div>

        <p className="reveal text-text-muted text-lg leading-relaxed max-w-3xl mx-auto mb-10">
          La propuesta de PD'P es integrar estas capacidades para que Finanzas Consulting tenga un ecosistema digital más organizado, visible y conectado con sus oportunidades comerciales.
        </p>

        {/* Final phrase */}
        <div className="reveal glass-card rounded-3xl p-10 sm:p-14 max-w-3xl mx-auto glow-cyan">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold mb-6 leading-snug">
            Su ecosistema digital necesita más que publicaciones.
          </h3>
          <p className="text-text-muted leading-relaxed mb-8">
            Necesita estrategia. Necesita contenido. Necesita producción. Necesita tecnología. Necesita pauta. Y, sobre todo, necesita un equipo que conecte cada una de esas piezas.
          </p>
          <p className="text-sm text-accent-cyan font-medium mb-8">
            Eso es lo que Punto D' Partida propone construir con Finanzas Consulting.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-cyan text-bg-deep font-bold rounded-xl text-sm hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all hover:-translate-y-0.5"
          >
            Hablemos del siguiente paso
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
