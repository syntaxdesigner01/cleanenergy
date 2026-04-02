'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Building2, Globe, ArrowUpRight, Linkedin, Youtube, Instagram, Lightbulb, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const ctaData = [
  {
    icon: TrendingUp,
    title: 'Investors',
    description: 'Access institutional climate infrastructure opportunities',
    linkText: 'Learn More',
    href: '#',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop'
  },
  {
    icon: Building2,
    title: 'Project Sponsors',
    description: 'Submit eligible projects for financing',
    linkText: 'Submit Project',
    href: '#submit-project',
    image: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?q=80&w=800&auto=format&fit=crop'
  },
  {
    icon: Globe,
    title: 'DFIs',
    description: 'Partner on blended finance and climate impact',
    linkText: 'Get in Touch',
    href: '#',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop'
  }
];

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#submit-project') {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <footer className="bg-[var(--color-background)] pt-0 pb-12 relative z-20 border-t border-[var(--color-border)]">
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Connected Boxes CTA Section */}
        <div className="mb-16 pt-10">
          <h2 className="text-[22px] lg:text-[30px] font-medium mb-10 tracking-tight leading-[1.15]">
            <span className="text-white">Partnering for impact</span>{' '}
            <span className="text-[var(--color-text-secondary)]">across all sectors</span>
          </h2>
          
          <div className="rounded-lg border border-[var(--color-border)] overflow-hidden bg-[#0A0A0A]">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {ctaData.map((cta, index) => (
                <a 
                  key={index}
                  href={cta.href}
                  onClick={(e) => handleCtaClick(e, cta.href)}
                  className={`group relative p-10 md:p-12 flex flex-col justify-between min-h-[360px] transition-colors duration-500 overflow-hidden cursor-pointer ${
                    index !== ctaData.length - 1 ? 'border-b md:border-b-0 md:border-r border-[var(--color-border)]' : ''
                  }`}
                >
                  {/* Image Background with "Why CEF" Blue Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={cta.image} 
                      alt={cta.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-40 mix-blend-luminosity"
                      referrerPolicy="no-referrer"
                    />
                    {/* The "Why CEF" Blue Overlay (rgb(0, 133, 202)) */}
                    <div className="absolute inset-0 bg-[rgb(0,133,202)]/40 mix-blend-multiply group-hover:bg-[rgb(0,133,202)]/60 transition-colors duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
                  </div>

                  <div className="relative z-10">
                    {/* Green-tinted Icon */}
                    <div className="w-12 h-12 rounded-lg bg-[var(--color-accent-green)]/10 border border-[var(--color-accent-green)]/20 flex items-center justify-center mb-10 text-[var(--color-accent-green)] group-hover:scale-110 transition-transform duration-500">
                      <cta.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-3 tracking-tight">{cta.title}</h3>
                    <p className="text-[var(--color-text-secondary)] text-base leading-relaxed max-w-sm font-light group-hover:text-white/80 transition-colors duration-300">
                      {cta.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-12 flex items-center gap-2 text-white font-medium group-hover:text-[rgb(0,133,202)] transition-colors duration-300">
                    {cta.linkText}
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </a>
              ))}
            </div>

            {/* Strategic Partners Marquee */}
            <div className="py-12 border-t border-[var(--color-border)]">
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-[var(--color-text-tertiary)] mb-8">
                  Strategic Partners & Funders
                </span>
                
                <div className="w-full overflow-hidden relative">
                  <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
                  <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
                  
                  <motion.div 
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                    className="flex items-center gap-16 md:gap-24 whitespace-nowrap w-max px-12"
                  >
                    {[
                      'NSIA', 'InfraCredit', 'Shelter Afrique', 'All On', 'Climate Bonds', 'FMDQ', 'USAID', 'UK NIAF',
                      'NSIA', 'InfraCredit', 'Shelter Afrique', 'All On', 'Climate Bonds', 'FMDQ', 'USAID', 'UK NIAF'
                    ].map((partner, i) => (
                      <span key={i} className="text-lg md:text-2xl font-serif italic tracking-tight text-[var(--color-text-secondary)]/30 hover:text-[var(--color-text-secondary)] transition-colors cursor-default">
                        {partner}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Navigation */}
        <div className="border-t border-[var(--color-border)] pt-20 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
            
            {/* Brand Column */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-6">
                 <Link href="/" className="flex items-center gap-2.5 z-50 shrink-0">
           <Image src="/logo-white.png" alt="Logo" width={150} height={150} quality={100} priority />
        </Link>
              </div>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                Financing Nigeria's energy transition through local currency climate infrastructure investment.
              </p>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-medium mb-8 text-sm">About us</h4>
              <ul className="space-y-5">
                {['Our mission', 'Our Institutional Framework', 'History', 'Leadership and governance', 'Our Impact'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-[var(--color-text-secondary)] hover:text-white text-sm transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-white font-medium mb-8 text-sm">Quick Links</h4>
              <ul className="space-y-5">
                {['Home', 'About', 'Governance', 'Investor Relations', 'Impact', 'Pipeline & Eligibility', 'Contact'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-[var(--color-text-secondary)] hover:text-white text-sm transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-white font-medium mb-8 text-sm">Contact</h4>
              <div className="space-y-5 text-sm text-[var(--color-text-secondary)]">
                <p><a href="mailto:info@cleanenergyfund.ng" className="hover:text-white transition-colors">info@cleanenergyfund.ng</a></p>
                <p className="leading-relaxed">
                  6th Floor Landmark Towers, 5B Water Corporation Way Oniru, Victoria Island, Lagos.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="flex flex-col mb-6">
                <div className="flex items-baseline mb-1">
                  <span className="text-3xl font-bold text-white tracking-tight">FundCo</span>
                </div>
                <span className="text-[10px] text-white/70 tracking-[0.2em] uppercase">Capital Managers</span>
              </div>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                FundCo Capital Managers is authorised by the Nigeria SEC to act as fund manager for CeF.
              </p>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col items-center justify-center pt-12 border-t border-[var(--color-border)]">
            <div className="flex gap-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all text-[var(--color-text-secondary)] hover:text-white">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all text-[var(--color-text-secondary)] hover:text-white">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all text-[var(--color-text-secondary)] hover:text-white">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            <div className="text-xs text-[var(--color-text-secondary)] flex items-center gap-2">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy & Terms of Service</a>
              <span className="opacity-50">•</span>
              <span>© 2026 Clean Energy Fund Facility</span>
            </div>
          </div>
        </div>

      </div>

      {/* Submit Project Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-[#0A0A0A] border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <h3 className="text-2xl font-medium text-white">Submit Project</h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-white/50 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto">
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Project Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--color-accent-green)] transition-colors"
                        placeholder="e.g. Solar Mini-Grid Phase 1"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Sector</label>
                      <select 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent-green)] transition-colors appearance-none"
                      >
                        <option value="" disabled selected className="text-black">Select a sector</option>
                        <option value="solar" className="text-black">Solar / Mini-Grid</option>
                        <option value="wind" className="text-black">Wind Energy</option>
                        <option value="hydro" className="text-black">Hydro Power</option>
                        <option value="biomass" className="text-black">Biomass</option>
                        <option value="other" className="text-black">Other Renewable</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Project Description</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--color-accent-green)] transition-colors resize-none"
                      placeholder="Briefly describe the project scope, location, and current stage..."
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Expected Impact</label>
                    <textarea 
                      required
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--color-accent-green)] transition-colors resize-none"
                      placeholder="e.g. MW capacity, jobs created, CO2 reduction..."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Contact Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--color-accent-green)] transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--color-accent-green)] transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end gap-4">
                    <button 
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-6 py-3 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="px-8 py-3 rounded-lg text-sm font-medium bg-[var(--color-accent-green)] text-white hover:bg-[var(--color-accent)] transition-colors shadow-lg"
                    >
                      Submit Project
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </footer>
  );
};
