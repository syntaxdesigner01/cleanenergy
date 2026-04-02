'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Filter, Globe2 } from 'lucide-react';
import Link from 'next/link';
import { portfolioData } from '../data/projects';
import Breadcrumbs from './Breadcrumbs';
import { cn } from '../lib/utils';
import { SDGMap } from './SDGMap';
import { PerformanceChart } from './PerformanceChart';

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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function PortfolioArchive() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedTextId, setExpandedTextId] = useState<string | null>(null);
  
  const filters = ['All', ...Array.from(new Set(portfolioData.map(item => item.sector)))];

  const filteredProjects = activeFilter === 'All' 
    ? portfolioData 
    : portfolioData.filter(project => project.sector === activeFilter);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Dark Hero Section */}
      <section className="relative pt-32 pb-24 bg-[var(--color-background)] overflow-hidden min-h-[50vh] flex flex-col justify-center border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2670&auto=format&fit=crop" 
            alt="Portfolio Hero" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-[var(--color-background)]/80 to-transparent" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
          <Breadcrumbs />
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.h1 variants={fadeUp} className="text-2xl sm:text-xl lg:text-2xl font-medium leading-[1.1] tracking-tight text-white mb-6">
              Our <span className="text-[var(--color-accent-light)]">Portfolio</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* About Section (Light Mode) */}
      <section className="py-24 bg-[#F4F4F6] text-[#1A1A1A] relative z-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent-green)]" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#6B80A6]">
                Investment Strategy
              </span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-[42px] font-medium leading-[1.15] tracking-tight mb-12 max-w-4xl">
              <span className="text-slate-900">We invest in high-impact clean energy solutions across Africa, </span>
              <span className="text-slate-400">focusing on scalable infrastructure that drives sustainable development and economic resilience.</span>
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-lg text-[#1A1A1A]/70 leading-relaxed max-w-3xl">
              Our portfolio represents a carefully curated selection of projects that align with our mandate to accelerate the transition to a low-carbon economy. By providing crucial local currency financing, we empower developers to build robust, sustainable energy systems without the burden of foreign exchange risk.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Performance Chart Section */}
      <PerformanceChart />

      {/* Grid Section (Light Mode) */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Header */}
            <motion.div variants={fadeUp} className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent-green)]" />
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#6B80A6]">
                  Our Projects
                </span>
              </div>
              <h2 className="text-[42px] font-medium leading-[1.15] tracking-tight">
                <span className="text-slate-900">Explore Our </span>
                <span className="text-slate-400">Portfolio</span>
              </h2>
            </motion.div>

            {/* Filters */}
            <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/40 mr-2 shrink-0">Filter by Sector:</span>
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                      activeFilter === filter
                        ? 'bg-[#1A1A1A] text-white'
                        : 'bg-transparent text-[#1A1A1A]/60 hover:bg-[#F4F4F6] border border-[#1A1A1A]/10'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Grid */}
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="group flex flex-col bg-white border border-[#1A1A1A]/10 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500"
                  >
                    {/* Image Header */}
                    <div className="aspect-[16/9] overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                      <div className="absolute top-4 left-4 z-20 flex gap-2">
                        <span 
                          className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full border shadow-sm backdrop-blur-md"
                          style={{ 
                            backgroundColor: `${project.sectorColor || '#1A1A1A'}1A`,
                            borderColor: `${project.sectorColor || '#1A1A1A'}33`,
                            color: project.sectorColor || '#1A1A1A'
                          }}
                        >
                          {project.sector}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content Body */}
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-2xl font-medium text-[#1A1A1A] mb-2 group-hover:text-[#4A5568] transition-colors">
                            {project.name}
                          </h3>
                          <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase text-[#1A1A1A]/50">
                            <span className="flex items-center gap-1"><Globe2 className="w-3 h-3" /> {project.location}</span>
                            <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#4A5568]" /> {project.status}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-[#1A1A1A]/70 text-sm leading-relaxed mb-8 flex-grow">
                        {expandedTextId === project.id || project.description.length <= 150
                          ? project.description
                          : `${project.description.substring(0, 150)}...`}
                        {project.description.length > 150 && (
                          <button 
                            onClick={(e) => { e.preventDefault(); setExpandedTextId(expandedTextId === project.id ? null : project.id); }}
                            className="ml-2 text-sm font-medium text-[#4A5568] hover:text-[#1A1A1A] transition-colors"
                          >
                            {expandedTextId === project.id ? 'Read Less' : 'Read More'}
                          </button>
                        )}
                      </p>

                      {/* Metrics Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                        {project.metrics.map((metric, idx) => {
                          const Icon = metric.icon;
                          return (
                            <div key={idx} className="bg-[#F4F4F6] p-4 rounded-xl flex flex-col items-center text-center">
                              <Icon className="w-4 h-4 text-[#4A5568] mb-2" />
                              <div className="text-lg font-light text-[#1A1A1A] mb-1">{metric.value}</div>
                              <div className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/50">{metric.label}</div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Footer / SDGs / Link */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-[#1A1A1A]/10 mt-auto">
                        <div className="flex items-center gap-4">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/40">
                            SDGs:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {project.sdgs.map((sdg) => (
                              <div 
                                key={sdg.id} 
                                className="group/sdg relative flex items-center gap-1.5 px-2 py-1 rounded-full border cursor-default"
                                style={{ backgroundColor: `${sdg.color}1A`, borderColor: `${sdg.color}33` }}
                              >
                                <div 
                                  className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold"
                                  style={{ backgroundColor: sdg.color, color: sdg.id === 7 ? 'black' : 'white' }}
                                >
                                  {sdg.id}
                                </div>
                                <span className="text-[10px] font-medium" style={{ color: sdg.color }}>SDG {sdg.id}</span>
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-[#1A1A1A]/90 backdrop-blur-md border border-white/10 text-white text-[10px] font-medium rounded-lg opacity-0 group-hover/sdg:opacity-100 transition-all duration-300 pointer-events-none w-max max-w-[200px] text-center shadow-xl scale-95 group-hover/sdg:scale-100 z-50">
                                  {sdg.label}
                                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1A1A1A]/90" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <Link 
                          href={`/portfolio/${project.id}`}
                          className="inline-flex items-center text-[11px] font-bold uppercase tracking-[0.2em] text-[#4A5568] hover:text-[#1A1A1A] transition-colors group/link"
                        >
                          View Case Study
                          <ArrowUpRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SDG Map Section */}
      <SDGMap />
    </div>
  );
}
