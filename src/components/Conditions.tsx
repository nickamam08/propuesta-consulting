import { useEffect, useRef, useState } from 'react';
import { CONDITIONS } from '../data/proposalData';
import { ChevronDown, FileText } from 'lucide-react';

export default function Conditions() {
  const ref = useRef<HTMLElement>(null);
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([1, 2, 3, 4]));
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

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

  const categories = ['Todos', 'Etapa Inicial & Permanencia', 'Inversión & Pauta', 'Producción Audiovisual', 'Alcance, Garantías & Exclusiones'];

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
    <section id="condiciones" ref={ref} className="py-14 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Main Bento Box */}
        <div className="bento-card p-6 sm:p-8 lg:p-10 border-white/[0.09]">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#1ED760] font-semibold uppercase tracking-wider mb-1">
                <FileText size={14} />
                <span>Condiciones Contractuales & Alcance</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
                Reglas claras y transparencia total
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                Marco operativo para asegurar una relación fluida, eficiente y con resultados claros.
              </p>
            </div>

            {/* Expand / Collapse All */}
            <button
              onClick={toggleAll}
              className="text-xs font-mono text-[#1ED760] hover:underline self-start md:self-auto cursor-pointer"
            >
              {openItems.size === CONDITIONS.length ? 'Contraer todo' : 'Expandir todo'}
            </button>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap gap-1.5 mt-6 mb-5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-[#1DB954] text-black font-bold'
                    : 'bg-white/[0.03] text-gray-400 hover:text-white border border-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="divide-y divide-white/[0.06] rounded-2xl border border-white/[0.07] bg-[#090a0f]/40 overflow-hidden">
            {filteredConditions.map((item) => {
              const isOpen = openItems.has(item.id);
              return (
                <div key={item.id} className="transition-colors">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-[#1ED760]">
                        0{item.id}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white">
                        {item.title}
                      </span>
                    </div>
                    <ChevronDown
                      size={16}
                      className={`text-gray-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#1ED760]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs text-gray-300 leading-relaxed pl-11 bg-white/[0.01]">
                      {item.detail}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
