/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyVisitUs } from './components/WhyVisitUs';
import { OurStory } from './components/OurStory';
import { SignatureMenu } from './components/SignatureMenu';
import { PhotoGallery } from './components/PhotoGallery';
import { VisitUs } from './components/VisitUs';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2B1E16] selection:bg-[#EAD8CE] selection:text-[#2B1E16]">
      {/* Top Navigation */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreMenu={() => scrollToSection('menu')}
          onFindUs={() => scrollToSection('visit-us')}
        />

        {/* 2. Why Visit Us Section */}
        <WhyVisitUs />

        {/* 3. Our Story Section */}
        <OurStory />

        {/* 4. Signature Menu Section */}
        <SignatureMenu />

        {/* 5. Photo Gallery Section with Lightbox */}
        <PhotoGallery />

        {/* 6. Testimonials Section */}
        <Testimonials />

        {/* 7. Visit Us Section */}
        <VisitUs onOpenContactModal={() => setContactModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Interactive Contact & Inquiry Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
