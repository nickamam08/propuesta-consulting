import { useEffect, useRef } from 'react';
import {
  Compass,
  Palette,
  Video,
  MessageSquare,
  Megaphone,
  Code2,
  Users,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';

const TEAM_MEMBERS = [
  { role: 'Dirección Estratégica', icon: Compass, note: 'Prioridades comerciales, ruta de conversión y visión de negocio', color: 'text-purple-400 bg-purple-500/10' },
  { role: 'Diseño & Comunicación Visual', icon: Palette, note: 'Identidad, piezas gráficas, infografías y formatos de alto impacto', color: 'text-cyan-400 bg-cyan-500/10' },
  { role: 'Producción Audiovisual', icon: Video, note: 'Jornadas de rodaje presenciales, dirección, reels y edición', color: 'text-rose-400 bg-rose-500/10' },
  { role: 'Contenidos & Community', icon: MessageSquare, note: 'Copywriting persuasivo, planeación editorial y publicaciones', color: 'text-emerald-400 bg-emerald-500/10' },
  { role: 'Publicidad Digital (Ads)', icon: Megaphone, note: 'Gestión y optimización continua de Meta Ads y Google Ads', color: 'text-amber-400 bg-amber-500/10' },
  { role: 'Desarrollo Web & IA', icon: Code2, note: 'Arquitectura UX/UI responsive, optimización CRO y tecnología', color: 'text-blue-400 bg-blue-500/10' },
  { role: 'Coordinación de Proyecto', icon: Users, note: 'Punto de contacto centralizado, cronograma y entregables', color: 'text-purple-300 bg-purple-500/10' },
];

export default function Team() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    el.querySelectorAll('.reveal').forEach((node) => obs.observe(node));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="equipo" ref={ref} className="py-20 md:py-28 relative">
      <div className="section-divider-obsidian mb-20" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-start mb-12">
          
          <div>
            <div className="reveal flex items-center gap-2 mb-4">
              <span className="obsidian-tag">
                <Users size={12} className="text-purple-400" />
                // Lo que nos diferencia
              </span>
              <span className="obsidian-tag obsidian-tag-purple">
                #equipo-integral
              </span>
            </div>

            <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5">
              No está contratando una persona.{' '}
              <span className="gradient-text-purple">
                Está sumando un equipo.
              </span>
            </h2>

            <p className="reveal text-slate-300 text-base leading-relaxed mb-6 font-normal">
              Punto D' Partida integra estrategia, contenido, diseño, producción audiovisual, publicidad, desarrollo web y coordinación para acompañar el crecimiento digital de Finanzas Consulting desde una visión integral.
            </p>

            <div className="reveal obsidian-callout obsidian-callout-note flex items-start gap-3">
              <ShieldCheck size={17} className="text-purple-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-white">Coordinación Unificada:</strong> Finanzas Consulting no tiene que gestionar múltiples freelancers o agencias aisladas; cuenta con un interlocutor central y un equipo especializado detrás.
              </div>
            </div>
          </div>

          {/* Right Column: Team Grid */}
          <div className="reveal grid sm:grid-cols-2 gap-3.5">
            {TEAM_MEMBERS.map((member, i) => {
              const Icon = member.icon;
              return (
                <div
                  key={member.role}
                  className={`obsidian-card rounded-2xl p-4 flex items-start gap-3.5 hover:border-purple-500/30 transition-all ${
                    i === TEAM_MEMBERS.length - 1 ? 'sm:col-span-2' : ''
                  }`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-white/[0.08] ${member.color}`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white leading-snug">
                      {member.role}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                      {member.note}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Central Communication Note Card */}
        <div className="reveal obsidian-card rounded-3xl p-6 sm:p-8 border-purple-500/25 relative overflow-hidden">
          <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <MessageCircle size={22} />
            </div>

            <div>
              <h3 className="font-display text-lg font-bold text-white mb-1">
                Un solo canal directo de trabajo
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Al dar inicio al proyecto, se crea un grupo oficial de trabajo con los perfiles necesarios de Punto D' Partida y los líderes de Finanzas Consulting para centralizar solicitudes, materiales, aprobaciones y avances semanales.
              </p>
            </div>

            <span className="obsidian-tag obsidian-tag-emerald text-xs hidden md:inline-flex shrink-0">
              #comunicacion-agil
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
