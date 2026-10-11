import React from 'react';
import { Coffee, Croissant, Sparkles, HeartHandshake } from 'lucide-react';
import { CAFE_DATA } from '../data/cafeData';

export const WhyVisitUs: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    'feat-1': <Coffee className="w-6 h-6 stroke-[1.5]" />,
    'feat-2': <Croissant className="w-6 h-6 stroke-[1.5]" />,
    'feat-3': <Sparkles className="w-6 h-6 stroke-[1.5]" />,
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F5EFE6] border-y border-[#2B1E16]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#B85D3B]">
            <span className="w-4 h-[1px] bg-[#B85D3B]" />
            <span>The Café Philosophy</span>
            <span className="w-4 h-[1px] bg-[#B85D3B]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2B1E16] leading-tight text-balance">
            Crafted with intention, served with gentleness.
          </h2>
          <p className="text-sm sm:text-base text-[#5C4A3E] leading-relaxed">
            Every cup poured and every pastry pulled from our oven honors the quiet art of doing few things exceptionally well.
          </p>
        </div>

        {/* Three Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {CAFE_DATA.features.map((feature, idx) => (
            <div
              key={feature.id}
              className="group relative bg-[#FAF7F2] rounded-2xl p-8 sm:p-9 border border-[#2B1E16]/6 shadow-[0_4px_24px_-10px_rgba(43,30,22,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_-10px_rgba(43,30,22,0.1)] flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Index & Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#EDE7DC] text-[#B85D3B] flex items-center justify-center transition-colors group-hover:bg-[#B85D3B] group-hover:text-[#FAF7F2]">
                    {iconMap[feature.id]}
                  </div>
                  <span className="font-serif text-sm font-semibold text-[#78685E]/50 tracking-widest">
                    0{idx + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl text-[#2B1E16] font-medium tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#5C4A3E] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Rule */}
              <div className="mt-8 pt-4 border-t border-[#2B1E16]/6 flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-[#78685E] group-hover:text-[#B85D3B] transition-colors">
                <span>Experience the difference</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
