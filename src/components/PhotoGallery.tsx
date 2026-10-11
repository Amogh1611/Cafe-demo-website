import React, { useState, useEffect, useCallback } from 'react';
import { CAFE_DATA, GalleryItem } from '../data/cafeData';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const PhotoGallery: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const galleryItems = CAFE_DATA.gallery;

  const handleNext = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! + 1) % galleryItems.length);
  }, [activeLightboxIndex, galleryItems.length]);

  const handlePrev = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! - 1 + galleryItems.length) % galleryItems.length);
  }, [activeLightboxIndex, galleryItems.length]);

  const handleClose = () => {
    setActiveLightboxIndex(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, handleNext, handlePrev]);

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    if (activeLightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeLightboxIndex]);

  const currentItem = activeLightboxIndex !== null ? galleryItems[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 sm:py-28 lg:py-32 bg-[#F5EFE6] border-t border-[#2B1E16]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#B85D3B]">
            <span className="w-4 h-[1px] bg-[#B85D3B]" />
            <span>Visual Vignettes</span>
            <span className="w-4 h-[1px] bg-[#B85D3B]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2B1E16] leading-tight text-balance">
            Atmosphere & Moments
          </h2>
          <p className="text-sm sm:text-base text-[#5C4A3E] leading-relaxed">
            Glimpses of quiet mornings, rain on cobblestones, and the warm glow of fresh coffee.
          </p>
        </div>

        {/* Editorial Gallery Grid (6 Items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(index)}
              className="group relative rounded-2xl overflow-hidden bg-[#EDE7DC] border border-[#2B1E16]/8 shadow-sm hover:shadow-xl transition-all duration-400 cursor-pointer aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={`${item.title} - ${item.category}`}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />

              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B1E16]/80 via-[#2B1E16]/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

              {/* Expand Icon Hint */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FAF7F2]/80 backdrop-blur-md text-[#2B1E16] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-[#FAF7F2] transform transition-transform duration-300">
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#EAD8CE] block mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs text-[#FAF7F2]/80 mt-1 line-clamp-1">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2B1E16]/90 backdrop-blur-md p-4 sm:p-8"
          onClick={handleClose}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 sm:top-8 sm:right-8 z-50 p-3 rounded-full bg-[#FAF7F2]/20 hover:bg-[#FAF7F2] text-[#FAF7F2] hover:text-[#2B1E16] transition-colors focus:outline-none cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#FAF7F2]/20 hover:bg-[#FAF7F2] text-[#FAF7F2] hover:text-[#2B1E16] transition-colors focus:outline-none cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#FAF7F2]/20 hover:bg-[#FAF7F2] text-[#FAF7F2] hover:text-[#2B1E16] transition-colors focus:outline-none cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black max-h-[72vh] flex items-center justify-center border border-[#FAF7F2]/10">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="max-h-[72vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Lightbox Caption */}
            <div className="mt-4 text-center text-[#FAF7F2] space-y-1 max-w-lg">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#EAD8CE] font-semibold">
                {currentItem.category} · {activeLightboxIndex! + 1} of {galleryItems.length}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-medium">
                {currentItem.title}
              </h3>
              <p className="text-xs text-[#FAF7F2]/70">
                {currentItem.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
