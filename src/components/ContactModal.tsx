import React, { useState } from 'react';
import { X, Send, Check, MessageCircle, Mail, Clock, Calendar } from 'lucide-react';
import { CAFE_DATA } from '../data/cafeData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('Table Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    // Simulate submission and offer instant WhatsApp transmission
    setSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Monsoon & Mocha!\n\nName: ${name}\nEmail: ${email || 'Not provided'}\nTopic: ${inquiryType}\nMessage: ${message}`
    );
    window.open(`https://wa.me/${CAFE_DATA.contact.whatsappNumber}?text=${text}`, '_blank');
    onClose();
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2B1E16]/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF7F2] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#2B1E16]/10 transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#2B1E16]/10 bg-[#F5EFE6]">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#B85D3B]">
              Connect With Us
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#2B1E16]">
              Café Inquiry & Table Note
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#2B1E16] hover:text-[#B85D3B] rounded-lg transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center mx-auto shadow-sm">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#2B1E16]">
                Thank you, {name}!
              </h4>
              <p className="text-sm text-[#5C4A3E] leading-relaxed max-w-sm mx-auto">
                Your message has been composed. Since this is a portfolio demonstration, you can also forward your message straight to WhatsApp:
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleSendToWhatsApp}
                  className="flex-1 py-3 px-5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#25D366] hover:bg-[#20ba59] rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
                <button
                  onClick={handleReset}
                  className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-[#2B1E16] bg-[#EDE7DC] hover:bg-[#E2DAD0] rounded-full transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3B32] mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maya Deshmukh"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#2B1E16]/20 text-sm text-[#2B1E16] focus:outline-none focus:border-[#B85D3B] focus:ring-1 focus:ring-[#B85D3B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3B32] mb-1.5">
                  Email or Phone
                </label>
                <input
                  type="text"
                  placeholder="e.g. maya@example.com or phone"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#2B1E16]/20 text-sm text-[#2B1E16] focus:outline-none focus:border-[#B85D3B] focus:ring-1 focus:ring-[#B85D3B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3B32] mb-1.5">
                  Topic of Inquiry
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#2B1E16]/20 text-sm text-[#2B1E16] focus:outline-none focus:border-[#B85D3B]"
                >
                  <option value="Table Inquiry">Table Seating & Availability</option>
                  <option value="Special Dietary">Specialty Roast & Dietary Notes</option>
                  <option value="Event Hosting">Private Gathering or Book Reading</option>
                  <option value="General Question">General Feedback or Hello</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3B32] mb-1.5">
                  Your Note *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell us what you'd like to ask or reserve..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#2B1E16]/20 text-sm text-[#2B1E16] focus:outline-none focus:border-[#B85D3B] focus:ring-1 focus:ring-[#B85D3B] resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#78685E] hover:text-[#2B1E16] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#2B1E16] hover:bg-[#B85D3B] rounded-full transition-colors flex items-center gap-2 cursor-pointer shadow-sm active:scale-[0.98]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
