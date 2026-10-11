import React, { useState, useMemo } from 'react';
import { CAFE_DATA, MenuItem } from '../data/cafeData';
import { Sparkles, Info, X, MessageCircle, Check } from 'lucide-react';

export const SignatureMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const categories = ['All', 'Coffee', 'Cold Drinks', 'Bakery & Desserts'] as const;

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') {
      return CAFE_DATA.menu;
    }
    return CAFE_DATA.menu.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleShareToWhatsApp = (item: MenuItem) => {
    const text = encodeURIComponent(
      `Hi Monsoon & Mocha! I was looking at your menu concept and loved the ${item.name} (₹${item.price}). When are you open for visits?`
    );
    window.open(`https://wa.me/${CAFE_DATA.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="menu" className="py-20 sm:py-28 lg:py-32 bg-[#FAF7F2] border-t border-[#2B1E16]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#B85D3B]">
              <span className="w-4 h-[1px] bg-[#B85D3B]" />
              <span>Artisanal Offerings</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2B1E16] leading-tight text-balance">
              The Signature Menu
            </h2>
            <p className="text-sm sm:text-base text-[#5C4A3E] leading-relaxed">
              Curated brews, iced elixirs, and freshly baked accompaniments prepared with slow attention to detail.
            </p>
          </div>

          {/* Illustrative Demo Badge / Notice */}
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#EDE7DC] border border-[#2B1E16]/10 text-xs text-[#78685E] self-start md:self-auto shrink-0">
            <Info className="w-4 h-4 text-[#B85D3B] shrink-0" />
            <span>Illustrative demo pricing & items</span>
          </div>
        </div>

        {/* Functional Category Filters (Zero-Pill discipline: Clean Segmented / Tab Controls) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 -mx-5 px-5 sm:mx-0 sm:px-0 scrollbar-none">
          <div className="inline-flex items-center gap-1.5 p-1.5 bg-[#EDE7DC]/80 backdrop-blur-sm rounded-full border border-[#2B1E16]/10 shadow-inner">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#2B1E16] text-[#FAF7F2] shadow-sm font-semibold'
                      : 'text-[#4A3B32] hover:text-[#2B1E16] hover:bg-[#FAF7F2]/60'
                  }`}
                  aria-pressed={isActive}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#2B1E16]/8 shadow-[0_4px_20px_-8px_rgba(43,30,22,0.06)] hover:shadow-[0_12px_28px_-10px_rgba(43,30,22,0.12)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] bg-[#EAE4D9] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle top category tag */}
                <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-semibold tracking-wider uppercase text-[#2B1E16] shadow-xs">
                  {item.category}
                </div>

                {/* View Details Hover Cue */}
                <div className="absolute inset-0 bg-[#2B1E16]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="bg-[#FAF7F2] text-[#2B1E16] text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                    Quick View
                  </span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-lg font-bold text-[#2B1E16] group-hover:text-[#B85D3B] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <span className="font-mono text-sm sm:text-base font-semibold text-[#2B1E16] tabular-nums shrink-0">
                      ₹{item.price}
                    </span>
                  </div>
                  
                  <p className="text-xs text-[#5C4A3E] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer: Notes & Action */}
                <div className="pt-3 border-t border-[#2B1E16]/6 flex items-center justify-between text-xs text-[#78685E]">
                  <span className="text-[11px] truncate max-w-[170px] italic">
                    {item.tags?.[0] || 'Artisanal'}
                  </span>
                  <span className="text-[#B85D3B] font-medium text-[11px] group-hover:underline">
                    Details →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state safeguard (should not occur, but good practice) */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-[#78685E]">
            No items found in this category.
          </div>
        )}

      </div>

      {/* Item Quick View Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2B1E16]/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-[#FAF7F2] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#2B1E16]/10 transform transition-all duration-300 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative aspect-[16/10] bg-[#EAE4D9]">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-full object-cover object-center"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FAF7F2]/90 backdrop-blur-md text-[#2B1E16] hover:bg-[#B85D3B] hover:text-[#FAF7F2] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                aria-label="Close detail modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-4 bg-[#FAF7F2]/95 backdrop-blur-md px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase text-[#2B1E16]">
                {selectedItem.category}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B1E16]">
                    {selectedItem.name}
                  </h3>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-[#B85D3B] tabular-nums">
                    ₹{selectedItem.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-[#5C4A3E] leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              {/* Crafting Notes */}
              {selectedItem.notes && (
                <div className="bg-[#F3EFE6] rounded-xl p-4 border border-[#2B1E16]/8 space-y-1">
                  <div className="text-[11px] uppercase font-bold tracking-wider text-[#78685E]">
                    Brewing & Preparation Note
                  </div>
                  <p className="text-xs text-[#4A3B32] italic">
                    {selectedItem.notes}
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  onClick={() => handleShareToWhatsApp(selectedItem)}
                  className="w-full sm:flex-1 py-3 px-5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#25D366] hover:bg-[#20ba59] rounded-full transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire via WhatsApp</span>
                </button>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-full sm:w-auto py-3 px-6 text-xs font-semibold uppercase tracking-wider text-[#2B1E16] hover:bg-[#EDE7DC] border border-[#2B1E16]/20 rounded-full transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
