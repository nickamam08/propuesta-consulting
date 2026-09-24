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
    empresa: 'Finanzas Consulting',
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
    el.querySelectorAll('.reveal-on-scroll').forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hola Punto D' Partida,\n\nSoy ${form.nombre} de ${form.empresa}${form.cargo ? ` (${form.cargo})` : ''}.\n\n*Opción de interés:* ${form.fase || 'Por definir'}\n*Comentarios / Necesidad:* ${form.necesidad || 'Coordinar inicio de propuesta'}\n*WhatsApp:* ${form.whatsapp}\n\nMe gustaría definir el siguiente paso.`
    );
    window.open(`https://wa.me/573052339865?text=${msg}`, '_blank');
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-[#090a0f]/80 border border-white/[0.08] text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#1DB954] focus:ring-1 focus:ring-[#1DB954] transition-all font-sans';

  const contactItems = [
    { Icon: Globe2, label: 'Sitio web', value: 'pdpcomunica.com' },
    { Icon: Mail, label: 'Correo', value: 'ceo@pdpcomunica.com' },
    { Icon: Phone, label: 'Teléfono', value: '305 233 9865' },
    { Icon: AtSign, label: 'Instagram', value: '@pdpcomunica' },
  ];

  return (
    <section id="contacto" ref={ref} className="py-14 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          {/* Left Column: 10. Siguiente Paso info (Cols 5) */}
          <div className="lg:col-span-5 bento-card p-6 sm:p-8 flex flex-col justify-between border-white/[0.09]">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#1ED760] font-semibold uppercase tracking-wider mb-2">
                <Compass size={14} />
                <span>10. Siguiente paso</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                Coordinemos la etapa de inicio
              </h2>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                Definir la alternativa de acompañamiento de la Propuesta 01 y/o la Campaña Pymes Financiables, validar los servicios complementarios requeridos y coordinar la etapa de inicio.
              </p>

              {/* Direct WhatsApp Action Button */}
              <div className="mb-6">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-spotify w-full justify-center text-xs py-3"
                >
                  <MessageCircle size={15} />
                  <span>Hablar directo por WhatsApp</span>
                  <ArrowRight size={14} />
                </a>
              </div>

              {/* Contact mini-bento grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {contactItems.map(({ Icon, label, value }) => (
                  <div key={label} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#1DB954]/10 border border-[#1DB954]/25 flex items-center justify-center text-[#1ED760] shrink-0 mt-0.5">
                      <Icon size={13} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-gray-400 block">{label}</span>
                      <span className="text-xs font-bold text-white">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs font-mono text-[#1ED760]">PUNTO D’ PARTIDA</span>
              <span className="text-[11px] text-gray-400">Creer · Crear · Crecer</span>
            </div>
          </div>

          {/* Right Column: Express Form (Cols 7) */}
          <div className="lg:col-span-7 bento-card bento-card-green-glow p-6 sm:p-8 border-white/[0.1]">
            <div className="pb-4 mb-5 border-b border-white/[0.08] flex items-center justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Formulario de Contacto Rápido
                </h3>
                <span className="text-xs text-gray-400">
                  Envía tus datos y te responderemos de inmediato.
                </span>
              </div>
              <span className="bento-badge bento-badge-green font-mono text-[10px]">
                Express
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-1.5">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Álvaro"
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-1.5">
                    Número de WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. +57 300 000 0000"
                    value={form.whatsapp}
                    onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-1.5">
                    Empresa
                  </label>
                  <input
                    type="text"
                    value={form.empresa}
                    onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-1.5">
                    Cargo / Rol
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Gerente / Director"
                    value={form.cargo}
                    onChange={(e) => setForm({ ...form, cargo: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-1.5">
                  Alternativa o Servicio de Interés
                </label>
                <select
                  value={form.fase}
                  onChange={(e) => setForm({ ...form, fase: e.target.value })}
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="" className="bg-[#12151c] text-gray-400">
                    Selecciona una opción...
                  </option>
                  {PHASE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#12151c] text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-1.5">
                  Mensaje o Consulta Específica (Opcional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Escribe aquí cualquier duda o requerimiento especial..."
                  value={form.necesidad}
                  onChange={(e) => setForm({ ...form, necesidad: e.target.value })}
                  className={inputClass}
                />
              </div>

              <button
                type="submit"
                className="btn-spotify w-full justify-center py-3 text-xs font-bold cursor-pointer"
              >
                <span>Enviar Solicitud a WhatsApp</span>
                <Send size={14} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
