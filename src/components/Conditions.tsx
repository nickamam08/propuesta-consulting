import { useEffect, useRef, useState } from 'react';
import { CONDITIONS } from '../data/proposalData';
import { ChevronDown, FileText } from 'lucide-react';

export default function Conditions() {
  const ref = useRef<HTMLElement>(null);
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([1, 2, 3]));
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

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

  const categories = ['Todos', 'Tiempos & Permanencia', 'Inversión & Pauta', 'Producción & Entregables', 'Alcance & Garantías'];

  const filteredConditions = activeCategory === 'Todos'
    ? CONDITIONS
    : CONDITIONS.filter((c) => c.category === activeCategory);

  const toggleItem = (id: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    if (openItems.size === CONDITIONS.length) {
      setOpenItems(new Set());
    } else {
      setOpenItems(new Set(CONDITIONS.map((c) => c.id)));
    }
  };

  return (
    <section id="condiciones" ref={ref} className="py-20 md:py-28 relative">
      <div className="section-divider-obsidian mb-20" />

      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="reveal flex justify-center mb-3">
            <span className="obsidian-tag">
              <FileText size={12} className="text-purple-400" />
              // Marco de Trabajo y Transparencia
            </span>
          </div>

          <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Condiciones y alcance <span className="gradient-text-purple">del servicio.</span>
          </h2>

          <p className="reveal text-slate-300 text-base sm:text-lg leading-relaxed">
            Claridad total desde el primer momento sobre tiempos, responsabilidades, pauta y entregables.
          </p>
        </div>

        {/* Category Filter Pills & Toggle Button */}
        <div className="reveal flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            onClick={toggleAll}
            className="text-xs font-mono text-purple-300 hover:text-white transition-colors"
          >
            {openItems.size === CONDITIONS.length ? 'Contraer todo' : 'Expandir todo'}
          </button>
        </div>

        {/* Accordion List */}
        <div className="reveal obsidian-card rounded-3xl overflow-hidden divide-y divide-white/[0.06] border-purple-500/20">
          {filteredConditions.map((item) => {
            const isOpen = openItems.has(item.id);
            return (
              <div key={item.id} className="transition-colors">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors gap-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-purple-500/10 text-purple-400 font-mono text-xs flex items-center justify-center font-bold shrink-0">
                      0{item.id}
                    </span>
                    <div>
                      <span className="text-xs font-mono text-slate-400 mr-2 uppercase">
                        [{item.category}]
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {item.title}
                      </span>
                    </div>
                  </div>

                  <ChevronDown
                    size={16}
                    className={`text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-purple-300' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed bg-white/[0.01]">
                    <div className="pl-9 border-l-2 border-purple-500/30">
                      {item.detail}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
