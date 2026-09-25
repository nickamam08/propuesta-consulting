import { useEffect, useRef } from 'react';
import {
  Compass,
  Palette,
  Video,
  MessageSquare,
  Megaphone,
  Code2,
  Users,
  Sparkles,
} from 'lucide-react';

const TEAM_MEMBERS = [
  { role: 'Dirección Estratégica', icon: Compass, note: 'Prioridades comerciales, ruta de conversión y visión de negocio' },
  { role: 'Diseño & Comunicación Visual', icon: Palette, note: 'Identidad, piezas gráficas, infografías y formatos de alto impacto' },
  { role: 'Producción Audiovisual', icon: Video, note: 'Jornadas de rodaje presenciales, dirección, reels y edición' },
  { role: 'Contenidos & Community', icon: MessageSquare, note: 'Copywriting persuasivo, planeación editorial y publicaciones' },
  { role: 'Publicidad Digital (Ads)', icon: Megaphone, note: 'Gestión y optimización continua de Meta Ads y Google Ads' },
  { role: 'Desarrollo Web & IA', icon: Code2, note: 'Arquitectura UX/UI responsive, optimización CRO y tecnología' },
  { role: 'Coordinación de Proyecto', icon: Users, note: 'Punto de contacto centralizado, cronograma y entregables' },
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
    el.querySelectorAll('.reveal-on-scroll').forEach((node) => obs.observe(node));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="equipo" ref={ref} className="py-14 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-[#1ED760] font-semibold uppercase tracking-wider mb-2">
            <Users size={14} />
            <span>Ecosistema de trabajo y equipo multidisciplinario</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            No está contratando una persona. Está sumando un equipo.
          </h2>
          <p className="text-sm text-gray-400 mt-1 max-w-2xl">
            PD’P integra estrategia, contenido, diseño, audiovisual, publicidad, desarrollo y coordinación para acompañar los objetivos digitales de Finanzas Consulting.
          </p>
        </div>

        {/* Bento Grid: 2 Top Context Tiles + Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
          {/* Tile 1: Relación entre Propuestas & Recomendación PD'P (Cols 5) */}
          <div className="lg:col-span-5 bento-card p-6 sm:p-7 flex flex-col justify-between border-white/[0.09] bg-gradient-to-br from-[#12151c] to-[#0a0c10]">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-yellow-400 font-bold mb-3">
                <Sparkles size={14} />
                <span>Recomendación Estratégica PD’P</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                ¿Contratando Pymes Financiables?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                Si la campaña representa una puerta de entrada a una relación de largo plazo, recomendamos contratar también la <strong className="text-white">Etapa Inicial ($1.700.000 + IVA)</strong>.
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                Esto permite organizar la base digital, perfiles, WhatsApp, lineamientos y estructura estratégica antes de escalar la pauta publicitaria.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs text-gray-400">Combo Recomendado:</span>
              <span className="text-xs font-mono font-bold text-[#1ED760]">
                $3.8M + $1.7M = $5.5M + IVA
              </span>
            </div>
          </div>

          {/* Tile 2: Team Members Bento Grid (Cols 7) */}
          <div className="lg:col-span-7 bento-card p-6 sm:p-7 border-white/[0.09]">
            <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/[0.08]">
              <span className="text-xs font-mono font-bold uppercase text-white tracking-wider">
                7 Perfiles Multidisciplinarios Integrados
              </span>
              <span className="bento-badge bento-badge-green font-mono text-[10px]">
                Coordinación Única
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {TEAM_MEMBERS.map((member, i) => {
                const Icon = member.icon;
                return (
                  <div
                    key={member.role}
                    className={`p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#1DB954]/40 transition-all flex items-start gap-3 ${
                      i === TEAM_MEMBERS.length - 1 ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#1DB954]/10 border border-[#1DB954]/30 flex items-center justify-center text-[#1ED760] shrink-0">
                      <Icon size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white leading-snug">
                        {member.role}
                      </div>
                      <div className="text-[11px] text-gray-400 leading-tight mt-0.5">
                        {member.note}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
