import { WHATSAPP_LINK } from '../data/proposalData';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.45)] hover:scale-108 transition-all focus:outline-none"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={26} />
      <span className="sr-only">Contactar por WhatsApp</span>
    </a>
  );
}
