'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight, Globe2, Zap, Users, Leaf, DollarSign } from 'lucide-react';

import Link from 'next/link';
import { portfolioData, PortfolioItem } from '../data/projects';

export const Portfolio = ({ limit }: { limit?: number }) => {
  const [expandedId, setExpandedId] = useState<string | null>(portfolioData[0].id);
  const [expandedTextId, setExpandedTextId] = useState<string | null>(null);
  const [selectedSector, setSelectedSector] = useState<string | null>(null);

  const uniqueSectors = Array.from(new Set(portfolioData.map(item => item.sector)));

  const filteredData = portfolioData.filter(item => {
    const matchSector = selectedSector ? item.sector === selectedSector : true;
    return matchSector;
  });

  const displayedData = limit ? filteredData.slice(0, limit) : filteredData;

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section className="py-32 bg-gradient-to-b from-[rgb(0,133,202)]/40 via-[#050505] to-[#050505] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent-light)]" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">
                Our Portfolio
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.1 }}
              className="text-[42px] font-medium leading-[1.15] tracking-tight"
            >
              <span className="text-white">Investing in high-impact</span> <br />
              <span className="text-[var(--color-text-secondary)]">clean energy solutions.</span>
            </motion.h2>
          </div>
          {!limit && (
            <Link 
              href="/portfolio"
              className="bg-white text-black hover:bg-[var(--color-accent-green)] hover:text-white px-8 py-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              View All Projects <ArrowUpRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-12">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mr-2">Sector:</span>
            <button 
              onClick={() => setSelectedSector(null)}
              className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${!selectedSector ? 'bg-white text-black' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
            >
              All
            </button>
            {uniqueSectors.map(sector => (
              <button 
                key={sector}
                onClick={() => setSelectedSector(sector)}
                className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${selectedSector === sector ? 'bg-white text-black' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {displayedData.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
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
                        backgroundColor: `${(project as any).sectorColor || '#1A1A1A'}1A`,
                        borderColor: `${(project as any).sectorColor || '#1A1A1A'}33`,
                        color: (project as any).sectorColor || '#1A1A1A'
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
                      <h3 className="text-2xl font-medium text-[#1A1A1A] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase text-[#1A1A1A]/50">
                        <span className="flex items-center gap-1"><Globe2 className="w-3 h-3" /> {project.location}</span>
                        <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" /> {project.status}</span>
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
                        className="ml-2 text-sm font-medium text-[var(--color-accent)] hover:text-[#1A1A1A] transition-colors"
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
                        <div key={idx} className="bg-[#F4F4F6] p-4 rounded-xl flex flex-col items-center text-center group/metric transition-colors hover:bg-white hover:shadow-sm border border-transparent hover:border-[#1A1A1A]/5">
                          <Icon className="w-4 h-4 text-[var(--color-accent)] mb-2" />
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
                      className="inline-flex items-center text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] hover:text-[#1A1A1A] transition-colors group/link"
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

        {limit && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 flex justify-center"
          >
            <Link 
              href="/portfolio"
              className="group bg-white text-black hover:bg-[var(--color-accent-green)] hover:text-white px-10 py-5 rounded-lg text-sm font-bold uppercase tracking-widest transition-all flex items-center gap-3 shadow-2xl hover:scale-105"
            >
              View Full Portfolio Archive
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};
