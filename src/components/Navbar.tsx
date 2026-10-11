import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Coffee, MapPin } from 'lucide-react';
import { CAFE_DATA } from '../data/cafeData';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Our Story', href: '#our-story', id: 'our-story' },
    { label: 'Menu', href: '#menu', id: 'menu' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Visit Us', href: '#visit-us', id: 'visit-us' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#2B1E16]/8 shadow-[0_4px_20px_-10px_rgba(43,30,22,0.06)] py-3.5'
            : 'bg-[#FAF7F2]/80 backdrop-blur-sm border-b border-[#2B1E16]/5 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-8">
          {/* Brand Wordmark (Zone 1) */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
            className="group flex items-center gap-2.5 text-[#2B1E16] tracking-[0.16em] uppercase font-serif text-xl sm:text-2xl font-bold whitespace-nowrap shrink-0 transition-opacity hover:opacity-85"
            aria-label="Monsoon & Mocha Home"
          >
            <span className="w-2 h-2 rounded-full bg-[#B85D3B] transition-transform group-hover:scale-125" />
            <span>{CAFE_DATA.brand.name}</span>
          </a>

          {/* Desktop Nav Links (Zone 2) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium text-[#4A3B32]"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
                className="relative py-1 tracking-wide hover:text-[#B85D3B] transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B85D3B] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary Action Button (Zone 3) */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleLinkClick('visit-us')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#2B1E16] hover:bg-[#B85D3B] rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] whitespace-nowrap shrink-0"
            >
              <span>Find Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 -mr-2 text-[#2B1E16] hover:text-[#B85D3B] rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B85D3B]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-[#2B1E16]/50 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-[84%] max-w-sm bg-[#FAF7F2] shadow-2xl flex flex-col justify-between p-6 sm:p-8 transition-transform duration-300 ease-out border-l border-[#2B1E16]/10 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            {/* Header in Drawer */}
            <div className="flex items-center justify-between pb-6 border-b border-[#2B1E16]/10">
              <span className="font-serif font-bold text-lg tracking-[0.14em] uppercase text-[#2B1E16]">
                {CAFE_DATA.brand.name}
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#2B1E16] hover:text-[#B85D3B] rounded-lg focus:outline-none"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="mt-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.id);
                  }}
                  className="px-3 py-3 text-lg font-serif tracking-wide text-[#2B1E16] hover:text-[#B85D3B] hover:bg-[#F3EFE6] rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#78685E]" />
                </a>
              ))}
            </nav>
          </div>

          {/* Drawer Footer Information */}
          <div className="pt-6 border-t border-[#2B1E16]/10 space-y-4">
            <div className="text-xs text-[#78685E] space-y-1">
              <div className="flex items-center gap-1.5 font-medium text-[#2B1E16]">
                <MapPin className="w-3.5 h-3.5 text-[#B85D3B]" />
                <span>Koregaon Park, Pune</span>
              </div>
              <p className="text-[11px] pl-5">{CAFE_DATA.contact.hoursShort}</p>
            </div>

            <button
              onClick={() => handleLinkClick('visit-us')}
              className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-center text-[#FAF7F2] bg-[#2B1E16] hover:bg-[#B85D3B] rounded-full transition-colors flex items-center justify-center gap-2"
            >
              <Coffee className="w-4 h-4" />
              <span>Find Our Café</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
