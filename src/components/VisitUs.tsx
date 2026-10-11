import React, { useState } from 'react';
import { CAFE_DATA } from '../data/cafeData';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Navigation,
  MessageCircle,
  ExternalLink,
  Info,
  Calendar,
  Send,
  Check,
  Compass
} from 'lucide-react';

interface VisitUsProps {
  onOpenContactModal: () => void;
}

export const VisitUs: React.FC<VisitUsProps> = ({ onOpenContactModal }) => {
  const [directionsRequested, setDirectionsRequested] = useState(false);

  const handleGetDirections = () => {
    setDirectionsRequested(true);
    window.open(CAFE_DATA.contact.mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="visit-us" className="py-20 sm:py-28 lg:py-32 bg-[#FAF7F2] border-t border-[#2B1E16]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#B85D3B]">
            <span className="w-4 h-[1px] bg-[#B85D3B]" />
            <span>Finding Our Sanctuary</span>
            <span className="w-4 h-[1px] bg-[#B85D3B]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2B1E16] leading-tight text-balance">
            Visit Monsoon & Mocha
          </h2>
          <p className="text-sm sm:text-base text-[#5C4A3E] leading-relaxed">
            Step through our doors for a quiet morning brew, an afternoon bake, or slow conversation.
          </p>
        </div>

        {/* Two-Column Grid: Left Contact Card & Right Map Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: Business Details & Action Buttons (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-[#F5EFE6] rounded-3xl p-8 sm:p-10 border border-[#2B1E16]/8 shadow-sm">
            <div className="space-y-8">
              
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#B85D3B]">
                  Specialty Café & Slow Bar
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#2B1E16] font-semibold mt-1">
                  Location & Guest Hours
                </h3>
              </div>

              {/* Labeled Information Blocks */}
              <div className="space-y-6">
                
                {/* Address Block */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EDE7DC] flex items-center justify-center text-[#B85D3B] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#2B1E16]">
                      Café Address
                    </div>
                    <p className="text-sm text-[#4A3B32] mt-1">
                      {CAFE_DATA.contact.address}
                    </p>
                    <span className="inline-block text-[10px] text-[#78685E] bg-[#EDE7DC] px-2 py-0.5 rounded mt-1.5 font-mono">
                      (Portfolio placeholder — connect actual street address)
                    </span>
                  </div>
                </div>

                {/* Hours Block */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EDE7DC] flex items-center justify-center text-[#B85D3B] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#2B1E16]">
                      Opening Hours
                    </div>
                    <p className="text-sm text-[#4A3B32] mt-1">
                      {CAFE_DATA.contact.hours}
                    </p>
                    <span className="inline-block text-[10px] text-[#78685E] bg-[#EDE7DC] px-2 py-0.5 rounded mt-1.5 font-mono">
                      (Illustrative hours — 9:00 AM to 10:00 PM)
                    </span>
                  </div>
                </div>

                {/* Phone Block */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EDE7DC] flex items-center justify-center text-[#B85D3B] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#2B1E16]">
                      Phone
                    </div>
                    <p className="text-sm font-mono text-[#4A3B32] mt-1">
                      {CAFE_DATA.contact.phoneDisplay}
                    </p>
                    <span className="inline-block text-[10px] text-[#78685E] bg-[#EDE7DC] px-2 py-0.5 rounded mt-1.5 font-mono">
                      (Replace with actual business phone)
                    </span>
                  </div>
                </div>

                {/* Email Block */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EDE7DC] flex items-center justify-center text-[#B85D3B] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#2B1E16]">
                      Email
                    </div>
                    <p className="text-sm font-mono text-[#4A3B32] mt-1">
                      {CAFE_DATA.contact.emailDisplay}
                    </p>
                    <span className="inline-block text-[10px] text-[#78685E] bg-[#EDE7DC] px-2 py-0.5 rounded mt-1.5 font-mono">
                      (Replace with actual business email)
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-8 mt-8 border-t border-[#2B1E16]/10 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={handleGetDirections}
                className="w-full sm:flex-1 py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#2B1E16] hover:bg-[#B85D3B] rounded-full transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </button>

              <button
                onClick={onOpenContactModal}
                className="w-full sm:flex-1 py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-[#2B1E16] hover:bg-[#EDE7DC] border border-[#2B1E16]/20 rounded-full transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 text-[#B85D3B]" />
                <span>Contact Us</span>
              </button>
            </div>

          </div>

          {/* Right Column: Attractive Map Placeholder (6 cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-[#EDE7DC] p-6 sm:p-8 border border-[#2B1E16]/10 flex flex-col justify-between relative overflow-hidden shadow-sm">
            
            {/* Top Bar on Map Frame */}
            <div className="flex items-center justify-between pb-4 border-b border-[#2B1E16]/10 relative z-10">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#B85D3B]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#2B1E16]">
                  Interactive Map Canvas
                </span>
              </div>
              <span className="text-[10px] font-mono uppercase text-[#78685E] bg-[#FAF7F2] px-2.5 py-1 rounded-md border border-[#2B1E16]/10">
                Demo Coordinates: 18.5362° N, 73.8940° E
              </span>
            </div>

            {/* Stylized Architectural Map Simulation */}
            <div className="relative my-6 rounded-2xl overflow-hidden bg-[#E5DFD4] border border-[#2B1E16]/10 min-h-[300px] flex items-center justify-center p-6 text-center">
              
              {/* Background Map Grid Lines */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 50% 50%, #B85D3B 1px, transparent 1px),
                    linear-gradient(to right, #2B1E16 1px, transparent 1px),
                    linear-gradient(to bottom, #2B1E16 1px, transparent 1px)
                  `,
                  backgroundSize: '24px 24px, 48px 48px, 48px 48px',
                }}
              />

              {/* Simulated streets / river */}
              <div className="absolute inset-x-0 h-6 bg-[#D8D0C3] -rotate-12 top-1/3 pointer-events-none opacity-40" />
              <div className="absolute inset-y-0 w-8 bg-[#D8D0C3] rotate-6 left-1/2 pointer-events-none opacity-40" />

              {/* Map Center Pin */}
              <div className="relative z-10 max-w-sm bg-[#FAF7F2]/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-[#2B1E16]/10 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#B85D3B] text-[#FAF7F2] flex items-center justify-center mx-auto shadow-md">
                  <MapPin className="w-6 h-6 animate-bounce" />
                </div>
                
                <h4 className="font-serif text-xl font-bold text-[#2B1E16]">
                  MONSOON & MOCHA
                </h4>
                
                <p className="text-xs text-[#5C4A3E] leading-relaxed">
                  Lane 7, Near North Main Road, Koregaon Park, Pune, Maharashtra
                </p>

                <div className="p-3 bg-[#F3EFE6] rounded-xl text-[11px] text-[#78685E] border border-[#2B1E16]/8 text-left space-y-1">
                  <div className="font-bold uppercase tracking-wider text-[#B85D3B] flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5" />
                    <span>Developer Integration Note:</span>
                  </div>
                  <p>
                    This is an illustrative placeholder. In production, connect this container with a verified Google Maps Embed or JavaScript API iframe for the café's official coordinates.
                  </p>
                </div>

                <button
                  onClick={handleGetDirections}
                  className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#2B1E16] hover:bg-[#B85D3B] rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>

            </div>

            {/* Bottom Map Note */}
            <div className="pt-2 text-center text-xs text-[#78685E] relative z-10">
              Complimentary customer valet & bicycle parking available on premises.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
