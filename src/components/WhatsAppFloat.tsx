import { WHATSAPP_LINK } from '../data/proposalData';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-6 right-5 md:right-6 z-40 w-12 h-12 rounded-full bg-[#1DB954] hover:bg-[#1ED760] text-black flex items-center justify-center shadow-[0_0_30px_rgba(29,185,84,0.4)] hover:scale-108 transition-all focus:outline-none"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="sr-only">Contactar por WhatsApp</span>
    </a>
  );
}
