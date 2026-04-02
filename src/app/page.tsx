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
import { AboutUs } from '@/components/AboutUs';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
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
        className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row justify-between items-end gap-8 mb-10"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-white mb-4">
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
        className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 border-t border-white/20 pt-5 flex justify-between items-center"
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



export default function Home() {
  return (
    <main>
      <Hero />
      {/* <ImpactStats /> */}
      {/* <About /> */}
      <AboutFund />
      <Portfolio limit={4} />
      <DevelopmentImpact />
      <Blog />
      <EligibilityCriteria />
    </main>
  );
}
