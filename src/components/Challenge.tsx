import { useEffect, useRef } from 'react';
import { Eye, FileText, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const CHALLENGE_CARDS: { title: string; text: string; Icon: LucideIcon }[] = [
  {
    title: 'POSICIONAMIENTO',
    text: 'Hacer visible lo que Finanzas Consulting sabe hacer.',
    Icon: Eye,
  },
  {
    title: 'CONTENIDO',
    text: 'Convertir conocimiento en contenido útil, entendible y accionable.',
    Icon: FileText,
  },
  {
    title: 'CONVERSIÓN',
    text: 'Conectar contenido, publicidad, web y WhatsApp para facilitar el siguiente paso.',
    Icon: TrendingUp,
  },
];

export default function Challenge() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    );
    el.querySelectorAll('.reveal').forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="reto" ref={ref} className="py-24 relative">
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="reveal text-xs tracking-[0.2em] uppercase text-accent-cyan font-medium mb-4">El reto</p>
          <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            El reto no es publicar más.{' '}
            <span className="gradient-text">Es hacer que todo conecte.</span>
          </h2>
          <p className="reveal text-text-muted text-lg leading-relaxed">
            Finanzas Consulting ya tiene conocimiento, experiencia, servicios, formación y soluciones. El reto es convertir todo ese valor en una presencia digital organizada, visible, atractiva y orientada a oportunidades.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {CHALLENGE_CARDS.map((card, i) => (
            <div
              key={card.title}
              className="reveal glass-card rounded-2xl p-8 hover:border-accent-cyan/30 transition-all duration-300 group hover:-translate-y-1"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center mb-5 group-hover:bg-accent-cyan/20 transition-colors">
                <card.Icon size={22} className="text-accent-cyan" />
              </div>
              <h3 className="font-display text-lg font-bold mb-3 text-text-main">{card.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
