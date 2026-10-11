import React from 'react';
import { ArrowDown, MapPin, Sparkles, Clock, Compass } from 'lucide-react';
import { CAFE_DATA } from '../data/cafeData';

interface HeroProps {
  onExploreMenu: () => void;
  onFindUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onFindUs }) => {
  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 overflow-hidden bg-[#FAF7F2]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main Grid: Split column editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-7 sm:space-y-8">
            
            {/* Editorial Kicker */}
            <div className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#B85D3B]">
              <span className="w-5 h-[1.5px] bg-[#B85D3B]" />
              <span>Specialty Coffee & Artisanal Bakes</span>
            </div>

            {/* Main Headline with balanced wrapping */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.25rem] text-[#2B1E16] leading-[1.08] tracking-[-0.01em] text-balance">
              Your little corner of <span className="italic font-normal text-[#B85D3B]">coffee</span> and calm.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#5C4A3E] leading-relaxed max-w-xl font-normal">
              {CAFE_DATA.brand.subtext}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#2B1E16] hover:bg-[#B85D3B] rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Our Menu</span>
              </button>

              <button
                onClick={onFindUs}
                className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#2B1E16] hover:text-[#FAF7F2] bg-transparent hover:bg-[#2B1E16] border border-[#2B1E16]/30 hover:border-[#2B1E16] rounded-full transition-all duration-300 active:scale-[0.98] cursor-pointer"
              >
                <span>Find Your Way Here</span>
              </button>
            </div>

            {/* Quiet Quick Details Strip */}
            <div className="pt-4 border-t border-[#2B1E16]/10 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#78685E]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#B85D3B] shrink-0" />
                <span>Koregaon Park, Pune</span>
              </div>
              <span className="text-[#2B1E16]/20">·</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#B85D3B] shrink-0" />
                <span>Open Daily 9:00 AM – 10:00 PM</span>
              </div>
              <span className="text-[#2B1E16]/20">·</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B85D3B]" />
                <span>Single-Estate Beans</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Hero Image Card */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative subtle offset border frame */}
              <div className="absolute -inset-2.5 sm:-inset-3 rounded-3xl border border-[#2B1E16]/10 -rotate-1 pointer-events-none" />
              
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#EDE7DC] aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] group">
                <img
                  src="/src/assets/images/hero_monsoon_mocha_1791713515485.jpg"
                  alt="Freshly brewed specialty cappuccino on a warm wooden table next to rain-streaked café window"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Subtle gradient contrast scrim at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B1E16]/70 via-transparent to-transparent pointer-events-none" />

                {/* Caption overlay in bottom corner */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-end justify-between text-[#FAF7F2] pointer-events-none">
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-[#EAD8CE] font-medium">
                      Monsoon Sessions
                    </p>
                    <p className="font-serif text-lg sm:text-xl font-medium tracking-wide">
                      Dark Cocoa · Arabica Crema
                    </p>
                  </div>
                  <div className="bg-[#FAF7F2]/90 backdrop-blur-md text-[#2B1E16] text-[10px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full pointer-events-auto">
                    Koregaon Park
                  </div>
                </div>
              </div>

              {/* Floating aesthetic stamp / badge */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-[#FAF7F2] border border-[#2B1E16]/10 rounded-2xl p-3.5 shadow-lg hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F0ECE4] flex items-center justify-center text-[#B85D3B]">
                  <Compass className="w-5 h-5 animate-[spin_12s_linear_infinite]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-[#B85D3B]">
                    Specialty Café
                  </div>
                  <div className="text-xs font-serif font-bold text-[#2B1E16]">
                    Slow Bar & Kitchen
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
