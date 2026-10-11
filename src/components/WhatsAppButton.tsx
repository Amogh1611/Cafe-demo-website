import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CAFE_DATA } from '../data/cafeData';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWhatsAppClick = () => {
    const encodedMsg = encodeURIComponent(CAFE_DATA.contact.whatsappPrefill);
    const url = `https://wa.me/${CAFE_DATA.contact.whatsappNumber}?text=${encodedMsg}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <aside
      aria-label="WhatsApp Contact"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-30 flex items-center gap-3"
    >
      {/* Optional dismissible tooltip hint */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#FAF7F2] text-[#2B1E16] text-xs px-3.5 py-2 rounded-2xl shadow-xl border border-[#2B1E16]/10 animate-fade-in">
          <span>Chat with us on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#78685E] hover:text-[#2B1E16]"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-[#FAF7F2] shadow-[0_6px_24px_-4px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_28px_-4px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        aria-label="Contact Monsoon & Mocha on WhatsApp (Pre-filled message)"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-current stroke-[1.5]" />
        
        {/* Subtle ping indicator ring */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white border-2 border-[#25D366]" />
        </span>
      </button>
    </aside>
  );
};
