import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { 
  Menu, X, Zap, Leaf, 
  TrendingUp, Users, ShieldCheck, Download,
  ArrowUpRight, CheckCircle2, Building2,
  Globe2, Sun, Wind, Battery, Droplets,
  ChevronRight, Layers, Aperture, Lightbulb
} from 'lucide-react';
import { cn } from './lib/utils';
import { AboutFund } from './components/AboutFund';
import { Portfolio } from './components/Portfolio';
import { DevelopmentImpact } from './components/DevelopmentImpact';
import { Blog } from './components/Blog';
import { EligibilityCriteria } from './components/EligibilityCriteria';
import { Link } from 'react-router-dom';
import { AboutPage } from './components/AboutPage';

// --- Animation Variants ---
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

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isArticlePage = location.pathname.startsWith('/news');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Invest', 'About Us', 'Portfolio', 'News'];

  const isSolidDark = isArticlePage;
  const useDarkText = !isSolidDark && scrolled;

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 border-b",
        isSolidDark 
          ? (scrolled ? "bg-[var(--color-background)] border-white/10 py-2 shadow-md" : "bg-[var(--color-background)] border-transparent py-3")
          : (scrolled ? "bg-white border-gray-200 py-3 shadow-sm" : "bg-transparent border-transparent py-5")
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between w-full relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 z-50 shrink-0">
          <div className={cn(
            "w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-500",
            useDarkText ? "border-[var(--color-accent-green)] bg-[var(--color-accent-green)]/10" : "border-white/20"
          )}>
            <Lightbulb className={cn(
              "w-5 h-5 transition-colors duration-500",
              useDarkText ? "text-[var(--color-accent-green)]" : "text-white"
            )} />
          </div>
          <div className="flex flex-col leading-none">
            <span className={cn(
              "font-bold tracking-widest text-lg uppercase leading-tight transition-colors duration-500",
              useDarkText ? "text-[var(--color-accent)]" : "text-white"
            )}>
              Clean Energy
            </span>
            <span className={cn(
              "text-sm tracking-wide transition-colors duration-500",
              useDarkText ? "text-[var(--color-accent-green)]" : "text-white"
            )}>
              Local Currency Fund
            </span>
          </div>
        </Link>

        {/* Desktop Nav - Center */}
        <div className="hidden md:flex items-center justify-center gap-8 flex-1">
          <a href="/#invest" className={cn("text-xs font-medium tracking-widest uppercase transition-colors flex items-center gap-1", useDarkText ? "text-gray-600 hover:text-[var(--color-accent)]" : "text-white/80 hover:text-white")}>Invest</a>
          
          {/* About Us Mega Menu */}
          <div className="group h-full flex items-center">
            <Link to="/about" className={cn("text-xs font-medium tracking-widest uppercase transition-colors flex items-center gap-1 h-full py-6", useDarkText ? "text-gray-600 hover:text-[var(--color-accent)]" : "text-white/80 hover:text-white")}>
              About Us
            </Link>
            
            {/* Mega Menu Dropdown */}
            <div className={cn(
              "fixed left-0 w-full bg-white border-t border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100]",
              isSolidDark 
                ? (scrolled ? "top-[57px]" : "top-[65px]")
                : (scrolled ? "top-[65px]" : "top-[81px]")
            )}>
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">The Fund</h4>
                  <div className="flex flex-col gap-4">
                    <Link to="/about" className="text-sm font-medium text-gray-800 hover:text-[var(--color-accent-green)] transition-colors">Overview</Link>
                    <a href="#" className="text-sm font-medium text-gray-800 hover:text-[var(--color-accent-green)] transition-colors">Investment Strategy</a>
                    <a href="#" className="text-sm font-medium text-gray-800 hover:text-[var(--color-accent-green)] transition-colors">Impact & SDGs</a>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">Leadership</h4>
                  <div className="flex flex-col gap-4">
                    <a href="#" className="text-sm font-medium text-gray-800 hover:text-[var(--color-accent-green)] transition-colors">Board of Directors</a>
                    <a href="#" className="text-sm font-medium text-gray-800 hover:text-[var(--color-accent-green)] transition-colors">Governance</a>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="text-xs font-bold tracking-widest uppercase text-[var(--color-accent-green)] mb-4">Latest Update</h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    The Clean Energy Local Currency Fund successfully closes its Series 2 capital raise, securing ₦15 Billion from domestic institutional investors.
                  </p>
                  <a href="#" className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] hover:text-[var(--color-accent-green)] transition-colors flex items-center gap-1">
                    Read Press Release <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
            </div>
          </div>

          <Link to="/portfolio" className={cn("text-xs font-medium tracking-widest uppercase transition-colors flex items-center gap-1", useDarkText ? "text-gray-600 hover:text-[var(--color-accent)]" : "text-white/80 hover:text-white")}>Portfolio</Link>
          <Link to="/news" className={cn("text-xs font-medium tracking-widest uppercase transition-colors flex items-center gap-1", useDarkText ? "text-gray-600 hover:text-[var(--color-accent)]" : "text-white/80 hover:text-white")}>News</Link>
        </div>

        {/* Desktop Nav - Right */}
        <div className="hidden md:flex items-center justify-end gap-6 shrink-0">
          <a 
            href="#login" 
            className={cn(
              "text-sm font-medium transition-colors flex items-center gap-1 whitespace-nowrap",
              useDarkText ? "text-gray-800 hover:text-[var(--color-accent)]" : "text-white hover:text-white/80"
            )}
          >
            Investor Portal <ArrowUpRight className="w-4 h-4" />
          </a>
          <button 
            className={cn(
              "px-6 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-lg whitespace-nowrap",
              useDarkText 
                ? "bg-[var(--color-accent-green)] text-white hover:bg-[var(--color-accent)]" 
                : "bg-white text-black hover:bg-[var(--color-accent-green)] hover:text-white"
            )}
          >
            Download Prospectus <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn(
            "md:hidden z-50 transition-colors",
            useDarkText ? "text-black" : "text-white"
          )} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-[var(--color-background)] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden",
        mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <a href="/#invest" className="text-2xl font-medium tracking-widest uppercase text-white" onClick={() => setMobileMenuOpen(false)}>Invest</a>
        <Link to="/about" className="text-2xl font-medium tracking-widest uppercase text-white" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
        <Link to="/portfolio" className="text-2xl font-medium tracking-widest uppercase text-white" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
        <Link to="/news" className="text-2xl font-medium tracking-widest uppercase text-white" onClick={() => setMobileMenuOpen(false)}>News</Link>
        <button className="bg-white text-black hover:bg-[var(--color-accent-green)] hover:text-white px-8 py-4 rounded-lg text-lg font-medium mt-4 transition-colors flex items-center justify-center gap-2 shadow-lg">
          Download Prospectus <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
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

  // Ensure video plays
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

  // Scroll animations for exit
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 600], [0, 100]);

  return (
    <section 
      className="relative h-screen min-h-[800px] flex flex-col justify-end pb-16 overflow-hidden"
    >
      {/* Video Background Layer */}
      <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0 z-0 bg-[var(--color-background)]">
        {/* 
          INSTRUCTIONS FOR VIDEO & POSTER:
          1. Replace the <source src="..." /> below with your compressed Pexels .mp4 file path (e.g., "/assets/videos/pexels-wind-solar.mp4")
          2. Replace the poster="..." attribute with your exported poster image path (e.g., "/assets/images/hero-poster.jpg")
          3. Replace the fallback <img> src below with the same poster image path.
        */}
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
          {/* Placeholder video - Replace with Pexels "Aerial View of Wind Turbines and Solar Panels Landscape" */}
          <source src="https://cdn.coverr.co/videos/coverr-wind-turbines-at-sunset-2645/1080p.mp4" type="video/mp4" />
        </video>

        {/* Static Fallback for Reduced Motion or Mobile */}
        <img 
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2672&auto=format&fit=crop" 
          alt="Aerial view of clean energy infrastructure with wind turbines and solar panels" 
          className="hidden motion-reduce:block absolute inset-0 w-full h-full object-cover" 
        />

        {/* Deep Green-Charcoal Overlay Layer */}
        <div className="absolute inset-0 bg-[var(--color-background)]/40 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/90 via-[var(--color-background)]/20 to-[var(--color-background)]/40 z-10" />
      </motion.div>

      <motion.div 
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-end gap-12 mb-12"
      >
        {/* Left Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-white mb-6">
            Powering a <br className="hidden md:block" />
            Resilient Future
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed font-light">
            Providing local currency funding to climate-aligned, sustainable, and inclusive clean energy infrastructure across Nigeria.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-black hover:bg-[var(--color-accent-green)] hover:text-white px-8 py-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              Explore Funding Options <ArrowUpRight className="w-4 h-4" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02, color: "rgba(255, 255, 255, 1)" }}
              whileTap={{ scale: 0.98 }}
              className="text-white/80 px-8 py-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
            >
              View Investor Relations <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Floating Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="hidden lg:block w-80 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg relative overflow-hidden h-[160px]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-medium text-xs tracking-widest uppercase text-white/60">{slides[currentSlide].label}</h3>
                </div>
                <p className={cn("text-white font-medium leading-relaxed mb-4", slides[currentSlide].isMetric ? "text-4xl font-light" : "text-sm")}>
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
          
          {/* Progress indicators */}
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

      {/* Bottom Utility Row */}
      <motion.div 
        style={{ opacity: heroOpacity }}
        className="relative z-20 w-full max-w-7xl mx-auto px-6 border-t border-white/20 pt-6 flex justify-between items-center"
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
    <section className="py-24 bg-[var(--color-surface)] relative z-20 border-y border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="mb-12 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
              Fund Impact
            </span>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={i} variants={fadeUp} className="p-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-background)] hover:border-[var(--color-border-light)] transition-colors text-center">
                <div className="text-4xl lg:text-5xl font-light text-white mb-4">{stat.value}</div>
                <p className="text-sm text-[var(--color-text-secondary)] uppercase tracking-wider">{stat.label}</p>
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
    <section className="py-24 bg-[#F4F4F6] text-[#1A1A1A] relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#1A1A1A]/60">
              About the Fund
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-light leading-tight mb-16 max-w-4xl">
            A specialized alternative asset vehicle providing long-term, Clean Energy local currency financing to sustainable infrastructure projects across Nigeria.
          </motion.h2>

          {/* Divider */}
          <motion.div variants={fadeUp} className="w-full h-[1px] bg-[#1A1A1A]/10 mb-16" />

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Column 1: Context & CTA */}
            <motion.div variants={fadeUp} className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider text-[#1A1A1A]/50 mb-6">Strategic Mandate</h3>
                <p className="text-lg text-[#1A1A1A]/80 leading-relaxed mb-8">
                  Managed by FundCo Capital Managers Limited, we utilize a blended finance approach—including guarantees from InfraCredit—to de-risk investments, allowing domestic pension funds and insurance companies to participate safely in the clean energy transition.
                </p>
              </div>
              <button className="bg-[#1A1A1A] text-white hover:bg-[var(--color-accent-light)] hover:text-white px-8 py-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-lg w-fit">
                Discover the Fund <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Column 2: Image Card */}
            <motion.div variants={fadeUp} className="bg-white rounded-3xl p-6 flex flex-col shadow-sm">
              <div className="h-48 rounded-2xl overflow-hidden mb-6 relative">
                <img 
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop" 
                  alt="Local Currency" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-xl font-medium mb-3">Local Currency</h4>
              <p className="text-[#1A1A1A]/60 leading-relaxed text-sm">
                Providing long-term Naira financing to eliminate exchange rate risks for developers and investors alike.
              </p>
            </motion.div>

            {/* Column 3: Mixed Cards */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <div className="bg-white rounded-3xl p-8 flex-1 shadow-sm flex flex-col justify-center">
                <div className="w-12 h-12 rounded-full bg-[#F4F4F6] flex items-center justify-center mb-6">
                  <ShieldCheck className="w-5 h-5 text-[#1A1A1A]" />
                </div>
                <h4 className="text-xl font-medium mb-3">Blended Finance</h4>
                <p className="text-[#1A1A1A]/60 leading-relaxed text-sm">
                  De-risking investments through strategic guarantees to mobilize institutional capital.
                </p>
              </div>
              <div className="bg-[#1A1A1A] text-white rounded-3xl p-8 flex-1 shadow-sm flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <h4 className="text-sm font-medium text-white/60 uppercase tracking-wider mb-2">Status</h4>
                <div className="text-3xl font-light mb-2">Certified Green</div>
                <p className="text-white/60 text-sm">Climate Bonds Initiative</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

import { Footer } from './components/Footer';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CaseStudy } from './components/CaseStudy';
import PortfolioArchive from './components/PortfolioArchive';

import { ArticlePage } from './components/ArticlePage';
import { NewsPage } from './pages/NewsPage';

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutFund />
      <Portfolio />
      <DevelopmentImpact />
      <Blog />
      <EligibilityCriteria />
    </main>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)] font-sans selection:bg-[var(--color-accent)] selection:text-[var(--color-background)]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioArchive />} />
          <Route path="/portfolio/:id" element={<CaseStudy />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<ArticlePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
