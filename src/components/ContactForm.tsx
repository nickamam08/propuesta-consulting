import { useEffect, useRef, useState } from 'react';
import { PHASE_OPTIONS, WHATSAPP_LINK } from '../data/proposalData';
import {
  Send,
  ArrowRight,
  MessageCircle,
  Globe2,
  Mail,
  Phone,
  AtSign,
  Compass,
} from 'lucide-react';

export default function ContactForm() {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    cargo: '',
    whatsapp: '',
    fase: '',
    necesidad: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hola Punto D' Partida,\n\nSoy ${form.nombre} de ${form.empresa}${form.cargo ? ` (${form.cargo})` : ''}.\n\n*Fase de interés:* ${form.fase || 'Por definir'}\n*Necesidad / Objetivo:* ${form.necesidad || 'Conversar sobre la propuesta'}\n*WhatsApp de contacto:* ${form.whatsapp}\n\nMe gustaría coordinar una conversación para dar el siguiente paso.`
    );
    window.open(`https://wa.me/573052339865?text=${msg}`, '_blank');
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500/60 focus:bg-white/[0.05] transition-all font-sans';

  const contactItems = [
    { Icon: Globe2, label: 'Sitio web', value: 'pdpcomunica.com' },
    { Icon: Mail, label: 'Correo', value: 'ceo@pdpcomunica.com' },
    { Icon: Phone, label: 'Teléfono', value: '305 233 9865' },
    { Icon: AtSign, label: 'Instagram', value: '@pdpcomunica' },
  ];

  return (
    <section id="siguiente-paso" ref={ref} className="py-20 md:py-28 relative">
      <div className="section-divider-obsidian mb-20" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct CTA and Context */}
          <div>
            <div className="reveal flex items-center gap-2 mb-4">
              <span className="obsidian-tag">
                <Compass size={12} className="text-purple-400" />
                // Cierre y Siguiente Paso
              </span>
              <span className="obsidian-tag obsidian-tag-purple">
                #iniciar-proyecto
              </span>
            </div>

            <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5">
              Hablemos del <span className="gradient-text-purple">siguiente paso.</span>
            </h2>

            <p className="reveal text-slate-300 text-base leading-relaxed mb-8">
              Definir el nivel de acompañamiento inicial, validar los servicios requeridos y coordinar el arranque de la etapa estratégica.
            </p>

            {/* Quick Action Button */}
            <div className="reveal mb-8">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-obsidian w-full sm:w-auto text-xs py-3.5 px-6"
              >
                <MessageCircle size={15} />
                <span>Agendar conversación directa</span>
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Direct Contact Cards */}
            <div className="reveal grid sm:grid-cols-2 gap-3">
              {contactItems.map(({ Icon, label, value }) => (
                <div key={label} className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                    <Icon size={13} className="text-purple-400" />
                    <span>{label}</span>
                  </div>
                  <div className="text-xs font-semibold text-white font-mono">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Obsidian Form */}
          <div className="reveal obsidian-card rounded-3xl p-6 sm:p-8 border-purple-500/25">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <MessageCircle size={17} className="text-purple-400" />
                <h3 className="font-display font-bold text-base text-white">
                  Formulario de Contacto Rápido
                </h3>
              </div>
              <span className="obsidian-tag obsidian-tag-emerald text-[10px]">
                #directo-whatsapp
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Nombre y Apellidos *"
                  required
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Empresa *"
                  required
                  value={form.empresa}
                  onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                  className={inputClass}
                />
                <input
                  type="text"
                  placeholder="Cargo (opcional)"
                  value={form.cargo}
                  onChange={(e) => setForm({ ...form, cargo: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Número de WhatsApp *"
                  required
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <select
                  value={form.fase}
                  onChange={(e) => setForm({ ...form, fase: e.target.value })}
                  className={`${inputClass} text-slate-300 cursor-pointer`}
                  required
                >
                  <option value="" disabled className="bg-[#0b0e14] text-slate-500">
                    Seleccione la fase o servicio de interés *
                  </option>
                  {PHASE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#121622] text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <textarea
                  placeholder="¿Qué objetivo o necesidad principal desea potenciar?"
                  rows={3}
                  value={form.necesidad}
                  onChange={(e) => setForm({ ...form, necesidad: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="btn-primary-obsidian w-full py-3.5 text-xs justify-center font-bold"
              >
                <Send size={14} />
                <span>Enviar datos y abrir WhatsApp</span>
              </button>

              <p className="text-[10px] font-mono text-slate-500 text-center leading-relaxed">
                Al hacer clic, se abrirá un chat de WhatsApp con los datos completados para iniciar la coordinación.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
