import React from 'react';
import { CAFE_DATA } from '../data/cafeData';
import { MapPin, Phone, Mail, Instagram, ArrowUp, Coffee, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Our Story', id: 'our-story' },
    { label: 'Signature Menu', id: 'menu' },
    { label: 'Photo Gallery', id: 'gallery' },
    { label: 'Visit Us & Location', id: 'visit-us' },
  ];

  return (
    <footer className="bg-[#231812] text-[#EDE7DC] pt-16 sm:pt-20 pb-12 border-t border-[#2B1E16]/20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-[#FAF7F2]/10">
          
          {/* Brand & Tagline Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B85D3B]" />
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.14em] uppercase text-[#FAF7F2]">
                {CAFE_DATA.brand.name}
              </span>
            </div>

            <p className="font-serif italic text-lg sm:text-xl text-[#D8CEBF] max-w-sm">
              "{CAFE_DATA.brand.tagline}"
            </p>

            <p className="text-xs text-[#A8988B] leading-relaxed max-w-sm">
              An independent specialty coffee and slow bakehouse concept honoring small-batch craftsmanship, thoughtful roasting, and unhurried neighbourhood moments.
            </p>

            {/* Social Placeholder */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2]/8 hover:bg-[#FAF7F2]/15 text-xs text-[#D8CEBF] hover:text-[#FAF7F2] transition-colors"
                aria-label="Instagram Profile Placeholder"
              >
                <Instagram className="w-3.5 h-3.5 text-[#B85D3B]" />
                <span className="font-mono text-[11px]">{CAFE_DATA.contact.instagramHandle}</span>
              </a>
              <span className="text-[10px] text-[#A8988B] uppercase tracking-wider font-mono">
                (Placeholder Link)
              </span>
            </div>
          </div>

          {/* Quick Navigation Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#B85D3B]">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-[#D8CEBF] hover:text-[#FAF7F2] transition-colors hover:translate-x-1 inline-flex items-center gap-1.5 duration-200 cursor-pointer"
                  >
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Contact Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#B85D3B]">
              Hours & Location
            </h4>
            
            <div className="space-y-3 text-xs text-[#D8CEBF]">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#A8988B] block">
                  Daily Opening Hours
                </span>
                <p className="mt-0.5">{CAFE_DATA.contact.hours}</p>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#A8988B] block">
                  Location (Concept Demo)
                </span>
                <p className="mt-0.5">{CAFE_DATA.contact.address}</p>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#A8988B] block">
                  Direct Inquiries
                </span>
                <p className="mt-0.5 font-mono">{CAFE_DATA.contact.emailDisplay}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E7E73]">
          
          <div className="space-y-1 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} {CAFE_DATA.brand.name}. Portfolio Concept & Web Design Demonstration.
            </p>
            <p className="text-[11px] text-[#73645A]">
              Designed with care. Not an operational food establishment. All trademarks belong to their respective owners.
            </p>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF7F2]/8 hover:bg-[#FAF7F2]/15 text-[#D8CEBF] hover:text-[#FAF7F2] transition-colors cursor-pointer text-xs"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>
    </footer>
  );
};
