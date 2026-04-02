'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isArticlePage = pathname.startsWith('/news');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSolidDark = isArticlePage;
  const useDarkText = !isSolidDark && scrolled;

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 border-b",
        isSolidDark
          ? (scrolled ? "bg-[var(--color-background)] border-white/10 py-2 shadow-md" : "bg-[var(--color-background)] border-transparent py-3")
          : (scrolled ? "bg-white border-gray-200 py-3 shadow-sm" : "bg-transparent border-transparent py-4")
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between w-full relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 z-50 shrink-0">
           <Image src="/logo.png" alt="Logo" width={150} height={150} quality={100} priority />
        </Link>

        {/* Desktop Nav - Center */}
        <div className="hidden md:flex items-center justify-center gap-6 flex-1">
          <a href="/#invest" className={cn("text-xs font-medium tracking-widest uppercase transition-colors flex items-center gap-1", useDarkText ? "text-gray-600 hover:text-[var(--color-accent)]" : "text-white/80 hover:text-white")}>Invest</a>

          {/* About Us Mega Menu */}
          <div className="group h-full flex items-center">
            <Link href="/about" className={cn("text-xs font-medium tracking-widest uppercase transition-colors flex items-center gap-1 h-full py-5", useDarkText ? "text-gray-600 hover:text-[var(--color-accent)]" : "text-white/80 hover:text-white")}>
              About Us
            </Link>

            {/* Mega Menu Dropdown */}
            <div className={cn(
              "fixed left-0 w-full bg-white border-t border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100]",
              isSolidDark
                ? (scrolled ? "top-[49px]" : "top-[57px]")
                : (scrolled ? "top-[57px]" : "top-[73px]")
            )}>
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
                  <div>
                    <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-5">The Fund</h4>
                    <div className="flex flex-col gap-3">
                      <Link href="/about" className="text-sm font-medium text-gray-800 hover:text-[var(--color-accent-green)] transition-colors">Overview</Link>
                      <a href="#" className="text-sm font-medium text-gray-800 hover:text-[var(--color-accent-green)] transition-colors">Investment Strategy</a>
                      <a href="#" className="text-sm font-medium text-gray-800 hover:text-[var(--color-accent-green)] transition-colors">Impact & SDGs</a>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-5">Leadership</h4>
                    <div className="flex flex-col gap-3">
                      <a href="#" className="text-sm font-medium text-gray-800 hover:text-[var(--color-accent-green)] transition-colors">Board of Directors</a>
                      <a href="#" className="text-sm font-medium text-gray-800 hover:text-[var(--color-accent-green)] transition-colors">Governance</a>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <h4 className="text-xs font-bold tracking-widest uppercase text-[var(--color-accent-green)] mb-3">Latest Update</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
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

          <Link href="/portfolio" className={cn("text-xs font-medium tracking-widest uppercase transition-colors flex items-center gap-1", useDarkText ? "text-gray-600 hover:text-[var(--color-accent)]" : "text-white/80 hover:text-white")}>Portfolio</Link>
          <Link href="/news" className={cn("text-xs font-medium tracking-widest uppercase transition-colors flex items-center gap-1", useDarkText ? "text-gray-600 hover:text-[var(--color-accent)]" : "text-white/80 hover:text-white")}>News</Link>
        </div>

        {/* Desktop Nav - Right */}
        <div className="hidden md:flex items-center justify-end gap-4 shrink-0">
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
              "px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-lg whitespace-nowrap",
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
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-[var(--color-background)] z-40 flex flex-col items-center justify-center gap-6 transition-transform duration-500 md:hidden",
        mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <a href="/#invest" className="text-xl font-medium tracking-widest uppercase text-white" onClick={() => setMobileMenuOpen(false)}>Invest</a>
        <Link href="/about" className="text-xl font-medium tracking-widest uppercase text-white" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
        <Link href="/portfolio" className="text-xl font-medium tracking-widest uppercase text-white" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
        <Link href="/news" className="text-xl font-medium tracking-widest uppercase text-white" onClick={() => setMobileMenuOpen(false)}>News</Link>
        <button className="bg-white text-black hover:bg-[var(--color-accent-green)] hover:text-white px-8 py-3 rounded-lg text-base font-medium mt-4 transition-colors flex items-center justify-center gap-2 shadow-lg">
          Download Prospectus <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
