'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AboutFund } from '@/components/AboutFund';
import { Portfolio } from '@/components/Portfolio';
import { DevelopmentImpact } from '@/components/DevelopmentImpact';
import { Blog } from '@/components/Blog';
import { EligibilityCriteria } from '@/components/EligibilityCriteria';

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

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const slides = [
    { label: "Fund Highlight", value: "Series 2 Capital Raise Now Open for Institutional Investors", link: "Read Announcement", isMetric: false },
    { label: "Total Dividends Paid", value: "₦730M", link: "Across two distributions", isMetric: true },
    { label: "Series 1 Investors", value: "8", link: "100% Subscribed", isMetric: true },
    { label: "Fund Rating", value: "BBB(IM)", link: "Investment Grade / Stable", isMetric: true },
    { label: "Green Certification", value: "Active", link: "Climate Bonds Initiative", isMetric: true },
  ];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 600], [0, 100]);

  return (
    <section className="relative h-screen min-h-[600px] flex flex-col justify-end pb-12 overflow-hidden">
      <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0 z-0 bg-[var(--color-background)]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          preload="auto"
          poster="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2672&auto=format&fit=crop"
          className="w-full h-full object-cover motion-reduce:hidden"
        >
          <source src="https://cdn.coverr.co/videos/coverr-wind-turbines-at-sunset-2645/1080p.mp4" type="video/mp4" />
        </video>
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2672&auto=format&fit=crop"
          alt="Aerial view of clean energy infrastructure with wind turbines and solar panels"
          className="hidden motion-reduce:block absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--color-background)]/40 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/90 via-[var(--color-background)]/20 to-[var(--color-background)]/40 z-10" />
      </motion.div>

      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row justify-between items-end gap-8 mb-10"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.h1 variants={fadeUp} className="text-2xl sm:text-xl lg:text-2xl font-medium leading-[1.1] tracking-tight text-white mb-4">
            Powering a <br className="hidden md:block" />
            Resilient Future
          </motion.h1>

          <motion.p variants={fadeUp} className="text-sm md:text-base text-white/80 max-w-xl mb-8 leading-relaxed font-light">
            Providing local currency funding to climate-aligned, sustainable, and inclusive clean energy infrastructure across Nigeria.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-black hover:bg-[var(--color-accent-green)] hover:text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              Explore Funding Options <ArrowUpRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, color: "rgba(255, 255, 255, 1)" }}
              whileTap={{ scale: 0.98 }}
              className="text-white/80 px-6 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
            >
              View Investor Relations <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="hidden lg:block w-72 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg relative overflow-hidden h-[140px]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 p-5 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-medium text-xs tracking-widest uppercase text-white/60 mb-3">{slides[currentSlide].label}</h3>
                <p className={cn("text-white font-medium leading-relaxed mb-3", slides[currentSlide].isMetric ? "text-3xl font-light" : "text-sm")}>
                  {slides[currentSlide].value}
                </p>
              </div>
              {!slides[currentSlide].isMetric ? (
                <a href="#" className="text-xs font-medium text-white flex items-center gap-1 hover:opacity-80 transition-opacity">
                  {slides[currentSlide].link} <ArrowUpRight className="w-3 h-3" />
                </a>
              ) : (
                <span className="text-xs font-medium text-white/60 uppercase tracking-wider">
                  {slides[currentSlide].link}
                </span>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-0 left-0 h-[2px] bg-white/10 w-full">
            <motion.div
              key={currentSlide + "-progress"}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              className="h-full bg-white/60"
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 border-t border-white/20 pt-5 flex justify-between items-center"
      >
        <div className="text-[10px] md:text-xs font-medium tracking-widest uppercase text-white/60">
          Nigeria's First Certified Green Fund
        </div>
        <div className="text-[10px] md:text-xs font-medium tracking-widest uppercase text-white/60 flex items-center gap-2">
          Scroll to Explore
        </div>
      </motion.div>
    </section>
  );
};

const ImpactStats = () => {
  const stats = [
    { value: "5,324+", label: "New Energy Connections" },
    { value: "21,197", label: "Tonnes CO₂ Avoided" },
    { value: "226+", label: "Jobs Created" },
    { value: "217+", label: "SMEs Supported" },
  ];

  return (
    <section className="py-10 lg:py-16 bg-[var(--color-surface)] relative z-20 border-y border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="mb-8 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
              Fund Impact
            </span>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <motion.div key={i} variants={fadeUp} className="p-5 md:p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] hover:border-[var(--color-border-light)] transition-colors text-center">
                <div className="text-xl lg:text-2xl font-light text-white mb-3">{stat.value}</div>
                <p className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-10 lg:py-16 bg-[#F4F4F6] text-[#1A1A1A] relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#1A1A1A]/60">
              About the Fund
            </span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-lg md:text-xl lg:text-2xl font-light leading-tight mb-12 max-w-4xl">
            A specialized alternative asset vehicle providing long-term, Clean Energy local currency financing to sustainable infrastructure projects across Nigeria.
          </motion.h2>

          <motion.div variants={fadeUp} className="w-full h-[1px] bg-[#1A1A1A]/10 mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <motion.div variants={fadeUp} className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xs font-medium uppercase tracking-wider text-[#1A1A1A]/50 mb-4">Strategic Mandate</h3>
                <p className="text-base text-[#1A1A1A]/80 leading-relaxed mb-6">
                  Managed by FundCo Capital Managers Limited, we utilize a blended finance approach—including guarantees from InfraCredit—to de-risk investments, allowing domestic pension funds and insurance companies to participate safely in the clean energy transition.
                </p>
              </div>
              <button className="bg-[#1A1A1A] text-white hover:bg-[var(--color-accent-light)] hover:text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-lg w-fit">
                Discover the Fund <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white rounded-2xl p-5 flex flex-col shadow-sm">
              <div className="h-40 rounded-xl overflow-hidden mb-5 relative">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop"
                  alt="Local Currency"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-lg font-medium mb-2">Local Currency</h4>
              <p className="text-[#1A1A1A]/60 leading-relaxed text-sm">
                Providing long-term Naira financing to eliminate exchange rate risks for developers and investors alike.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <div className="bg-white rounded-2xl p-6 flex-1 shadow-sm flex flex-col justify-center">
                <div className="w-10 h-10 rounded-full bg-[#F4F4F6] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-4 h-4 text-[#1A1A1A]" />
                </div>
                <h4 className="text-lg font-medium mb-2">Blended Finance</h4>
                <p className="text-[#1A1A1A]/60 leading-relaxed text-sm">
                  De-risking investments through strategic guarantees to mobilize institutional capital.
                </p>
              </div>
              <div className="bg-[#1A1A1A] text-white rounded-2xl p-6 flex-1 shadow-sm flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <h4 className="text-xs font-medium text-white/60 uppercase tracking-wider mb-1">Status</h4>
                <div className="text-2xl font-light mb-1">Certified Green</div>
                <p className="text-white/60 text-sm">Climate Bonds Initiative</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ImpactStats />
      <About />
      <AboutFund />
      <Portfolio />
      <DevelopmentImpact />
      <Blog />
      <EligibilityCriteria />
    </main>
  );
}
