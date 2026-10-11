import React from 'react';
import { Coffee, Heart, Sparkles, Feather } from 'lucide-react';

export const OurStory: React.FC = () => {
  return (
    <section id="our-story" className="py-20 sm:py-28 lg:py-32 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Two-Column Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photograph */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Subtle architectural backdrop card */}
              <div className="absolute -inset-3 rounded-3xl bg-[#EDE7DC] transform rotate-1 pointer-events-none" />

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] sm:aspect-[4/3] bg-[#E5DFD4]">
                <img
                  src="/src/assets/images/story_barista_pour_1791713589872.jpg"
                  alt="Barista at Monsoon & Mocha mindfully preparing a manual pour-over coffee with brass kettle"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B1E16]/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Story Quote Card */}
              <div className="absolute -bottom-6 -right-3 sm:-bottom-8 sm:right-6 bg-[#FAF7F2] p-5 sm:p-6 rounded-2xl border border-[#2B1E16]/10 shadow-xl max-w-[260px] sm:max-w-xs">
                <p className="font-serif italic text-sm sm:text-base text-[#2B1E16] leading-snug">
                  "Coffee shouldn’t be a rushed commute fuel. It is an invitation to breathe."
                </p>
                <div className="mt-3 flex items-center justify-between text-[11px] font-medium tracking-wider uppercase text-[#78685E]">
                  <span>The Founders’ Note</span>
                  <span className="text-[#B85D3B]">Pune</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Story Copy */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 order-1 lg:order-2">
            
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#B85D3B]">
              <span className="w-5 h-[1.5px] bg-[#B85D3B]" />
              <span>Our Story & Roots</span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2B1E16] leading-[1.15] text-balance">
              Good coffee. Slow moments. Beautiful company.
            </h2>

            {/* Warm Original Narrative */}
            <div className="space-y-4 text-sm sm:text-base text-[#5C4A3E] leading-relaxed">
              <p>
                Monsoon & Mocha began with a simple craving: a sanctuary during Pune’s heavy rainstorms where the kettle hums, the air carries roasted nutty aromas, and nobody is looking at the clock.
              </p>
              <p>
                We believed our neighbourhood deserved more than impersonal mass-produced cups. We set out to build an artistic living room for writers, thinkers, architects, and quiet daydreamers—pairing single-origin beans roasted in small micro-batches with hand-laminated morning viennoiserie.
              </p>
              <p>
                Whether you drop in for a quick dawn espresso, settle by the window with a rainy-day novel, or gather around a wooden table to share blueberry cheesecake with old friends, this space was shaped with love, care, and a deep appreciation for the unhurried life.
              </p>
            </div>

            {/* Three Pillar Points */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#2B1E16]/10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#EDE7DC] flex items-center justify-center text-[#B85D3B] shrink-0 mt-0.5">
                  <Coffee className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#2B1E16]">
                    Ethical Single Estates
                  </h4>
                  <p className="text-xs text-[#78685E] mt-0.5">
                    Direct-trade Indian Arabica lots grown under shaded canopies.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#EDE7DC] flex items-center justify-center text-[#B85D3B] shrink-0 mt-0.5">
                  <Feather className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#2B1E16]">
                    Mindful Craftsmanship
                  </h4>
                  <p className="text-xs text-[#78685E] mt-0.5">
                    Small batch baking daily; pure European butter and zero artificial essences.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
