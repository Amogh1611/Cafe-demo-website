import React from 'react';
import { CAFE_DATA } from '../data/cafeData';
import { Star, MessageSquareQuote, ShieldAlert } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#2B1E16]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#B85D3B]">
            <span className="w-4 h-[1px] bg-[#B85D3B]" />
            <span>Café Impressions</span>
            <span className="w-4 h-[1px] bg-[#B85D3B]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2B1E16] leading-tight text-balance">
            Notes from the Slow Bar
          </h2>
          <p className="text-sm sm:text-base text-[#5C4A3E] leading-relaxed">
            Layout concept for visitor thoughts and guest reflections.
          </p>

          {/* Transparent Portfolio Disclosure Notice */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE7DC] border border-[#2B1E16]/10 text-xs text-[#78685E] mt-2">
            <ShieldAlert className="w-3.5 h-3.5 text-[#B85D3B]" />
            <span>Illustrative placeholder reviews for portfolio presentation</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CAFE_DATA.testimonials.map((item, idx) => (
            <div
              key={item.id}
              className="bg-[#F5EFE6] rounded-2xl p-7 sm:p-8 border border-[#2B1E16]/8 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                {/* Top Quote Icon & Index */}
                <div className="flex items-center justify-between text-[#B85D3B]">
                  <MessageSquareQuote className="w-7 h-7 opacity-80" />
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-[#78685E]/60">
                    Sample Review 0{idx + 1}
                  </span>
                </div>

                {/* Highlight */}
                <h3 className="font-serif text-lg font-bold text-[#2B1E16] leading-snug">
                  "{item.highlight}"
                </h3>

                {/* Feedback Body */}
                <p className="text-sm text-[#5C4A3E] leading-relaxed italic">
                  "{item.feedback}"
                </p>
              </div>

              {/* Author Attribution */}
              <div className="mt-6 pt-4 border-t border-[#2B1E16]/10 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#2B1E16]">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-[#78685E] mt-0.5">
                    {item.role}
                  </p>
                </div>
                <span className="text-[10px] text-[#78685E] bg-[#FAF7F2] px-2 py-0.5 rounded border border-[#2B1E16]/10">
                  Concept
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
