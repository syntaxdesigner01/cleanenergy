'use client'

import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, ShieldCheck, Award, TrendingUp, 
  Zap, Flame, Wheat, Wifi, Bus, ChevronLeft, ChevronRight,
  Leaf, Users, CheckCircle2, Lightbulb, Sun, Wind, Battery,
  Banknote, Rocket
} from 'lucide-react';
import Breadcrumbs from './Breadcrumbs';
import { cn } from '../lib/utils';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export const AboutPage = () => {
  return (
    <main className="bg-white">
      <HeroSection />
      <MacroProblemSection />
      <FundStructureSection />
      <PrioritySectorsSection />
      <MilestonesSection />
      <TeamSection />
      <GovernanceImpactSection />
      <ConversionCTASection />
    </main>
  );
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 600], [0, 100]);

  return (
    <section className="relative pt-32 pb-24 bg-[var(--color-background)] overflow-hidden min-h-[50vh] flex flex-col justify-center border-b border-white/5">
      {/* Video Background Layer */}
      <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2574&auto=format&fit=crop"
          className="w-full h-full object-cover motion-reduce:hidden"
        >
          <source src="https://cdn.coverr.co/videos/coverr-solar-panels-in-a-field-5244/1080p.mp4" type="video/mp4" />
        </video>
        <img 
          src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2574&auto=format&fit=crop" 
          alt="Solar panels" 
          className="hidden motion-reduce:block absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050A15]/40 via-[#050A15]/60 to-[#050A15] z-10" />
      </motion.div>

      <motion.div 
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col justify-end h-full"
      >
        <div className="mb-8">
          <Breadcrumbs />
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-[var(--color-accent-green)]" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-text-tertiary)]">
              Nigeria's First & Only Certified Green Fund
            </span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.15] tracking-tight mb-8">
            <span className="text-white">Pioneering Local Currency </span>
            <span className="text-white/50">Clean Energy Investments in Nigeria.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-3xl md:text-4xl text-white/80 max-w-2xl mb-12 leading-relaxed font-light">
            Bridging the gap between institutional capital and climate-aligned infrastructure. We deliver risk-adjusted, stable returns while completely eliminating FX volatility for domestic investors.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <Leaf className="w-6 h-6 text-[var(--color-accent-green)]" />
              <span className="text-sm font-medium text-white/80 uppercase tracking-wider">Climate Bonds Certified</span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[var(--color-accent-light)]" />
              <span className="text-sm font-medium text-white/80 uppercase tracking-wider">SEC Nigeria Registered</span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-white" />
              <span className="text-sm font-medium text-white/80 uppercase tracking-wider">Investment Grade: Stable</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const MacroProblemSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-white text-[#0A1224] relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="lg:sticky lg:top-32 h-fit"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent-green)]" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-text-tertiary)]">
                The Challenge
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.15] tracking-tight">
              <span className="text-slate-900">The ₦4 Trillion </span>
              <span className="text-slate-400">Market Gap.</span>
            </h2>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col gap-12"
          >
            <motion.div variants={fadeUp}>
              <h3 className="text-2xl font-medium mb-6">Integrated Investment & Collective Risk Management.</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Over 85 million Nigerians lack access to reliable energy. While the demand for clean energy infrastructure is unprecedented, domestic institutional investors have historically been sidelined by foreign exchange (FX) risks and fragmented project structuring.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The Clean Energy Local Currency Fund (CEF) was engineered to solve this. Managed by FundCo Capital Managers Ltd, we utilize an Integrated Investment Approach—structuring transactions around the specific risks of each asset. By providing strictly local currency (₦) funding, we insulate our investors from FX shocks while delivering verifiable, SDG-aligned impact.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-gray-200">
              <div>
                <div className="text-4xl font-light text-[#0A1224] mb-2">+85M</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Unserved Population</div>
              </div>
              <div>
                <div className="text-4xl font-light text-[#0A1224] mb-2">100%</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">FX Insulated</div>
              </div>
              <div>
                <div className="text-4xl font-light text-[#0A1224] mb-2">₦4T</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Market Opportunity</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FundStructureSection = () => {
  return (
    <section className="py-24 bg-[#F8F9FA] relative z-20 border-y border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-[var(--color-accent-green)]" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-text-tertiary)]">
              Architecture
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.15] tracking-tight">
            <span className="text-slate-900">Fund </span>
            <span className="text-slate-400">Structure</span>
          </h2>
        </motion.div>

        {/* CSS Diagram */}
        <div className="relative max-w-4xl mx-auto py-12">
          {/* Top Row */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 mb-24 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-[var(--color-accent-green)] text-white px-6 py-4 rounded-xl shadow-md text-center w-full sm:w-64"
            >
              <span className="font-medium text-sm">Development Finance Institutions, Pension Fund, & Insurance Cos</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.1 }}
              className="bg-[var(--color-accent-green)] text-white px-6 py-4 rounded-xl shadow-md text-center w-full sm:w-64 flex items-center justify-center"
            >
              <span className="font-medium text-sm">High Net Worth Individuals (HNIs)</span>
            </motion.div>
          </div>

          {/* Vertical Arrows Top to Middle */}
          <div className="absolute top-[100px] left-1/2 -translate-x-1/2 h-24 w-32 flex justify-between z-0 hidden sm:flex">
            <div className="relative h-full flex items-center">
              <div className="h-full w-0.5 bg-gray-400"></div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 border-b-2 border-r-2 border-gray-400 transform rotate-45"></div>
              <span className="absolute -left-16 text-xs font-medium text-gray-500">Interest</span>
            </div>
            <div className="relative h-full flex items-center">
              <div className="h-full w-0.5 bg-gray-400"></div>
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 border-t-2 border-l-2 border-gray-400 transform rotate-45"></div>
              <span className="absolute -right-20 text-xs font-medium text-gray-500">Dividends</span>
            </div>
          </div>

          {/* Middle Row */}
          <div className="flex justify-center mb-24 relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-white border-2 border-[var(--color-accent-green)] px-8 py-6 rounded-2xl shadow-lg text-center w-full sm:w-80 flex flex-col items-center gap-2"
            >
              <Lightbulb className="w-8 h-8 text-[var(--color-accent-green)]" />
              <div className="font-bold text-xl text-[var(--color-accent)]">CLEAN ENERGY</div>
              <div className="text-sm text-[var(--color-accent-green)] font-medium">Local Currency Fund</div>
            </motion.div>
          </div>

          {/* Vertical Arrows Middle to Bottom */}
          <div className="absolute top-[280px] left-1/2 -translate-x-1/2 h-24 w-32 flex justify-between z-0 hidden sm:flex">
            <div className="relative h-full flex items-center">
              <div className="h-full w-0.5 bg-gray-400"></div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 border-b-2 border-r-2 border-gray-400 transform rotate-45"></div>
              <span className="absolute -left-64 text-xs font-medium text-gray-500 text-right w-60">Senior Debt, Securitised Debt, Mezzanine Instruments and Convertible Debt, Equity Commercial Funding</span>
            </div>
            <div className="relative h-full flex items-center">
              <div className="h-full w-0.5 bg-gray-400"></div>
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 border-t-2 border-l-2 border-gray-400 transform rotate-45"></div>
              <span className="absolute -right-32 text-xs font-medium text-gray-500 w-28">Dividends/Interest</span>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="bg-[var(--color-accent-light)] text-white px-6 py-4 rounded-xl shadow-md text-center w-full sm:w-48"
            >
              <span className="font-medium text-sm">Investment</span>
            </motion.div>
            
            {/* Arrow Left to Center */}
            <div className="hidden sm:block w-16 h-0.5 bg-gray-400 relative">
              <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 border-gray-400 transform rotate-45"></div>
              <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-500 text-center w-48">Credit Enhancement for Senior Debt by Other Institutional Investors</span>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="bg-white border-2 border-[var(--color-accent-green)] px-6 py-6 rounded-2xl shadow-lg text-center w-full sm:w-64 flex flex-col items-center gap-4"
            >
              <div className="flex gap-2 text-[var(--color-accent-light)]">
                <Sun className="w-8 h-8" />
                <Wind className="w-8 h-8" />
                <Battery className="w-8 h-8" />
              </div>
              <span className="font-medium text-sm text-[#0A1224]">Eligible Off-grid Energy Projects</span>
            </motion.div>

            {/* Arrows Center to Right */}
            <div className="hidden sm:flex flex-col justify-center h-16 w-16 relative">
              <div className="w-full h-0.5 bg-gray-400 relative mb-4">
                <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 border-gray-400 transform rotate-45"></div>
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-500 text-center w-32">Senior Debt Commercial Funding</span>
              </div>
              <div className="w-full h-0.5 bg-gray-400 relative">
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-3 h-3 border-b-2 border-l-2 border-gray-400 transform rotate-45"></div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-500 text-center w-32">Interest</span>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
              className="bg-[var(--color-accent-light)] text-white px-6 py-4 rounded-xl shadow-md text-center w-full sm:w-48"
            >
              <span className="font-medium text-sm">Other Institutional Investors</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PrioritySectorsSection = () => {
  const sectors = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Energy Access",
      focus: "Solar Mini-grids & C&I Solar",
      ticket: "₦500M - ₦2B",
      risk: "Asset-backed, long-term off-taker agreements"
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Clean Cooking",
      focus: "LPG distribution & biomass transition",
      ticket: "₦300M - ₦1.5B",
      risk: "High gender empowerment (SDG 5) and respiratory health benefits"
    },
    {
      icon: <Wheat className="w-8 h-8" />,
      title: "Agro-Processing",
      focus: "Solar-powered milling, cold storage, and irrigation",
      ticket: "₦400M - ₦2B",
      risk: "Reducing post-harvest loss and boosting local GDP"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Telecommunications",
      focus: "Telecom tower solar hybridization (ESCO models)",
      ticket: "₦1B - ₦3B",
      risk: "Highly stable, blue-chip telecom off-takers"
    },
    {
      icon: <Bus className="w-8 h-8" />,
      title: "Transportation",
      focus: "EV mass transit and charging infrastructure",
      ticket: "₦500M - ₦2.5B",
      risk: "Massive urban carbon emission reduction"
    }
  ];

  return (
    <section className="py-24 bg-[#0A1224] relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-[var(--color-accent-green)]" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-text-tertiary)]">
              Investment Focus
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.15] tracking-tight">
            <span className="text-white">Priority </span>
            <span className="text-white/50">Sectors</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden transition-all duration-500 h-80 flex flex-col justify-end"
            >
              {/* Inner Gradient Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-green)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Default State */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center items-start transition-all duration-500 group-hover:-translate-y-4 group-hover:opacity-0">
                <div className="text-[var(--color-accent-green)] mb-6 bg-white/5 p-4 rounded-2xl border border-white/10">
                  {React.cloneElement(sector.icon as React.ReactElement<any>, { strokeWidth: 1.5 })}
                </div>
                <h3 className="text-2xl font-medium text-white">{sector.title}</h3>
              </div>

              {/* Hover State Content */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10">
                <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-3">
                  {React.cloneElement(sector.icon as React.ReactElement<any>, { strokeWidth: 1.5, className: "w-6 h-6 text-[var(--color-accent-green)]" })} {sector.title}
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-semibold text-white/90 block mb-1">Focus:</span>
                    <span className="text-white/60 leading-relaxed block">{sector.focus}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="font-semibold text-white/90 block mb-1">Ticket:</span>
                      <span className="text-white/60">{sector.ticket}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-white/90 block mb-1">Impact:</span>
                      <span className="text-white/60 line-clamp-2">{sector.risk}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MilestonesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const milestones = [
    { year: "2022", title: "Fund Conceptualization", desc: "Strategic framework developed with PIDG and InfraCredit.", active: false, icon: <Lightbulb className="w-5 h-5" /> },
    { year: "2023", title: "Series 1 Fully Subscribed", desc: "8 Tier-1 Institutional Investors onboarded.", active: false, icon: <Users className="w-5 h-5" /> },
    { year: "2024", title: "Green Certification Achieved", desc: "Officially certified by the Climate Bonds Standard Board.", active: false, icon: <Leaf className="w-5 h-5" /> },
    { year: "2024", title: "Investment Grade Rating", desc: "Awarded National Scale Fund Rating with a 'Stable' outlook.", active: false, icon: <ShieldCheck className="w-5 h-5" /> },
    { year: "Dec 2024", title: "First Dividend Paid", desc: "₦330 Million successfully distributed to investors.", active: false, icon: <Banknote className="w-5 h-5" /> },
    { year: "Sep 2025", title: "Second Dividend Paid", desc: "₦400 Million successfully distributed to investors.", active: false, icon: <TrendingUp className="w-5 h-5" /> },
    { year: "Current", title: "Series 2/3 Launch", desc: "Capital raise currently open for new institutional participants.", active: true, icon: <Rocket className="w-5 h-5" /> },
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-[rgb(0,133,202)]/40 via-[#050505] to-[#050505] text-white relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-2 h-2 rounded-full bg-[var(--color-accent-green)]" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-text-tertiary)]">
            Track Record
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.15] tracking-tight mb-4">
          <span className="text-white">The Journey </span>
          <span className="text-white/50">So Far</span>
        </h2>
        <p className="text-white/80 text-lg max-w-xl">We have established a track-record of innovation, execution, and growth.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative" ref={containerRef}>
        {/* Animated Vertical Line */}
        <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2">
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-[var(--color-accent-green)] origin-top"
            style={{ scaleY: pathLength }}
          />
        </div>

        <div className="flex flex-col gap-12 md:gap-24 relative z-10">
          {milestones.map((m, i) => (
            <div key={i} className={cn(
              "relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16",
              i % 2 === 0 ? "md:flex-row-reverse" : ""
            )}>
              {/* Icon / Node */}
              <div className="absolute left-[15px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#050505] bg-[#0A1224] text-[var(--color-accent-green)] z-10 shadow-[0_0_20px_rgba(80,184,72,0.2)]">
                {m.icon}
              </div>

              {/* Content */}
              <div className={cn(
                "w-full md:w-1/2 pl-20 md:pl-0",
                i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
              )}>
                <motion.div 
                  initial={{ opacity: 0, y: 20, x: i % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={cn(
                    "p-8 rounded-2xl border transition-all duration-300",
                    m.active 
                      ? "bg-[#0A1224] border-[var(--color-accent-green)]/30 shadow-[0_0_30px_rgba(80,184,72,0.15)]" 
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  )}
                >
                  <div className={cn(
                    "flex items-center gap-4 mb-4",
                    i % 2 === 0 ? "md:justify-end" : "md:justify-start"
                  )}>
                    <span className="text-sm font-bold tracking-widest uppercase text-[var(--color-accent-green)]">{m.year}</span>
                    {m.active && (
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent-green)] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-accent-green)]"></span>
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-3">{m.title}</h3>
                  <p className="text-white/70 leading-relaxed">{m.desc}</p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const team = [
    { name: "David Humphrey", title: "Infrastructure & Energy Finance", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
    { name: "Welela Dawit", title: "Corporate Finance & Strategy", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
    { name: "Obinna Ihedioha", title: "Project Finance & Development", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" },
    { name: "Chizoba Onoh", title: "Infrastructure Consulting", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" },
    { name: "Ade Alli", title: "ESG & Infrastructure", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white text-[#0A1224] relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent-green)]" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-text-tertiary)]">
                Leadership
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.15] tracking-tight mb-6">
              <span className="text-slate-900">Our </span>
              <span className="text-slate-400">Team</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Guided by 100+ Years of Collective Institutional Experience. Our Investment Committee and management team bring decades of rigorous underwriting, asset management, and ESG compliance from top-tier global and African institutions.
            </p>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors whitespace-nowrap"
          >
            View Full Team Profiles
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-gray-100">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-bold text-lg text-[#0A1224]">{member.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{member.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GovernanceImpactSection = () => {
  return (
    <section className="py-24 bg-[#F8F9FA] relative z-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Governance Matrix */}
        <div className="mb-32">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-col items-center text-center mb-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent-green)]" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-text-tertiary)]">
                Institutional Framework
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.15] tracking-tight">
              <span className="text-slate-900">Governance & </span>
              <span className="text-slate-400">Impact</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-sm border border-slate-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Fund Manager</span>
              <span className="font-bold text-xl text-[#0A1224]">FundCo Capital Managers Ltd</span>
              <span className="text-sm text-gray-400 mt-2">(SEC Registered)</span>
            </div>
            <div className="bg-white shadow-sm border border-slate-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Issuing House</span>
              <span className="font-bold text-xl text-[#0A1224]">Renaissance Securities</span>
            </div>
            <div className="bg-white shadow-sm border border-slate-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Strategic Partners</span>
              <span className="font-bold text-xl text-[#0A1224]">InfraCredit, All On, Shelter Afrique</span>
            </div>
            <div className="bg-white shadow-sm border border-slate-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Auditors</span>
              <span className="font-bold text-xl text-[#0A1224]">KPMG, PwC</span>
            </div>
            <div className="bg-white shadow-sm border border-slate-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Legal</span>
              <span className="font-bold text-xl text-[#0A1224]">Olaniwun Ajayi</span>
            </div>
            <div className="bg-white shadow-sm border border-slate-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Custodians/Trustees</span>
              <span className="font-bold text-xl text-[#0A1224]">Stanbic IBTC Bank, UBA</span>
            </div>
          </div>
        </div>

        {/* Impact & SDGs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.15] tracking-tight mb-6">
              <span className="text-slate-900">Beyond Financial Returns: </span>
              <span className="text-slate-400">Measurable ESG Impact.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-gray-600 leading-relaxed mb-8">
              As Nigeria's only Climate Bonds Certified fund, our investments are strictly mapped to the UN SDGs. We don't just measure megawatts; we measure human advancement.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent-green)]/10 flex items-center justify-center shrink-0">
                <Leaf className="w-6 h-6 text-[var(--color-accent-green)]" />
              </div>
              <div>
                <h4 className="font-bold text-[#0A1224] text-lg">SDG 7 & 13 (Clean Energy & Climate)</h4>
                <p className="text-gray-600">Metric tons of CO2 avoided through sustainable infrastructure.</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-white border border-[var(--color-accent)]/20 p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent-light)]/10 rounded-full blur-3xl" />
            <div className="flex items-start gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <div>
                <h4 className="font-bold text-[#0A1224] text-xl">SDG 5 & 8</h4>
                <p className="text-[var(--color-accent)] font-medium">Gender Equality & Decent Work</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed relative z-10 italic">
              "A core pillar of our deployment criteria is empowering female entrepreneurs across the clean energy value chain and creating sustainable, high-paying local jobs."
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

const ConversionCTASection = () => {
  return (
    <section className="py-32 bg-[#050A15] relative z-20 overflow-hidden text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-accent)]/20" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-6"
        >
          Ready to participate in Nigeria's energy transition?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-xl text-white/70 mb-12 font-light"
        >
          Review our current yield curves, AUM, and historical performance in our Investor Relations hub, or download the Series 2 Prospectus.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <button className="w-full sm:w-auto bg-[var(--color-accent-green)] text-white hover:bg-[var(--color-accent)] px-8 py-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-lg">
            Access Investor Relations <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto bg-white/10 text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
            Request Prospectus
          </button>
        </motion.div>
      </div>
    </section>
  );
};
