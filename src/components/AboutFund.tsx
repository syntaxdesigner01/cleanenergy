'use client'

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sun, ShieldCheck, Users, Globe2 } from 'lucide-react';
import Image from 'next/image';

// Data
import { credentials, tabs, fundRationale, fundAims, operatingModel, partners } from '@/data/aboutFund';

// Sub-components
import { FocusCard } from './AboutFund/FocusCard';
import { StickyCard } from './AboutFund/StickyCard';
import { TimelineStep } from './AboutFund/TimelineStep';
import { TextReveal } from './AboutFund/TextReveal';
import { fadeUp, staggerContainer } from './AboutFund/animations';

export const AboutFund = () => {
  const [isLastCardActive, setIsLastCardActive] = React.useState(false);
  const [isHowWorksLastActive, setIsHowWorksLastActive] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('Why CeF');
  const [credentialIndex, setCredentialIndex] = React.useState(0);


  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6 }}
      className="bg-background text-text-primary relative z-20"
    >
      {/* DARK SECTION: Mandate & Bento Grid */}
      <div className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Mandate Header */}
            <div className="max-w-4xl mb-24">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-accent-green" />
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-text-tertiary">
                  Our Mandate
                </span>
              </motion.div>
              
              <motion.h2 variants={fadeUp} className="text-[42px] font-medium leading-[1.15] tracking-tight text-text-primary mb-12">
                We provide local currency funding from domestic institutional investors to small and medium sized climate compliant energy projects.
              </motion.h2>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                <button className="bg-white text-black hover:bg-accent-green hover:text-white px-8 py-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-lg">
                  Download Fact Sheet <ArrowUpRight className="w-4 h-4" />
                </button>
                <button className="text-white/80 px-8 py-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 hover:text-white">
                  Discover Fund <ArrowUpRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>

            {/* Bento Grid (5 Boxes) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FocusCard 
                icon={Sun}
                headline="Energy Transition"
                statement="Decarbonizing the National Grid with Renewable Infrastructure."
                proof="500MW Pipeline"
                tags={["SDG 7", "ESG"]}
                image="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop"
              />
              <FocusCard 
                icon={ShieldCheck}
                headline="Financial Resilience"
                statement="Eliminating FX Risk through Local Currency Funding."
                proof="₦1.2B AUM"
                tags={["Risk Mitigated"]}
                image="https://images.unsplash.com/photo-1545459720-aac8509eb02c?q=80&w=800&auto=format&fit=crop"
              />
              <FocusCard 
                icon={Users}
                headline="Social Equity"
                statement="Bridging the Energy Gap for Underserved Communities."
                proof="2,400+ Jobs"
                tags={["Impact"]}
                image="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=800&auto=format&fit=crop"
              />
              
              {/* Box 4: Wide Image Box with Slider */}
              <FocusCard 
                icon={Globe2}
                headline="Fund Credentials"
                isWide={true}
                image="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2670&auto=format&fit=crop"
                forceHover={true}
              >
                <div className="relative h-28 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.h3 
                      key={credentialIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="text-3xl font-medium leading-tight text-white absolute inset-0"
                    >
                      {credentials[credentialIndex]}
                    </motion.h3>
                  </AnimatePresence>
                </div>
              </FocusCard>

              {/* Box 5: Strategic Spotlight */}
              <FocusCard 
                icon={Globe2}
                headline="Strategic Priority"
                statement="Gender & Impact Lens: Driving inclusive growth through targeted climate investments."
                accentColor="#EF4444"
                image="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop"
              />
            </div>

            {/* Strategic Partners Strip */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-24 pt-16 border-t border-white/5"
            >
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-text-tertiary mb-12">
                  Strategic Partners & Funders
                </span>
                
                <div className="w-full overflow-hidden relative">
                  <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                  <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
                  
                  <motion.div 
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                    className="flex items-center gap-16 md:gap-24 whitespace-nowrap w-max px-12"
                  >
                    {partners.map((partner, i) => (
                      <span key={i} className="text-lg md:text-2xl font-serif italic tracking-tight text-text-secondary/30 hover:text-text-secondary transition-colors cursor-default">
                        {partner}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* LIGHT SECTION: Approach & Rationale */}
      <div className="bg-[#F8FAFC] py-32 text-slate-900 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[42px] font-medium leading-[1.15] tracking-tight mb-12">
            <span className="text-slate-900">Our Approach & </span>
            <span className="text-slate-400">Rationale</span>
          </h2>
          
          {/* Tabs */}
          <div className="sticky top-[65px] z-40 bg-[#F8FAFC] pt-6 pb-0 mb-16 -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
            <div className="flex gap-8 md:gap-12 border-b border-slate-200 overflow-x-auto no-scrollbar">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all relative whitespace-nowrap ${
                    activeTab === tab ? "text-accent-light" : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-light"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            <AnimatePresence mode="wait">
              {activeTab === 'Why CeF' && (
                <motion.div 
                  key="why-cef"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex flex-col gap-16"
                >
                  {/* Row 1: Big Title */}
                  <div className="lg:w-3/4">
                    <span className="text-xs font-bold text-accent-light uppercase tracking-widest mb-6 block">/ Fund Rationale</span>
                    <h3 className="text-2xl md:text-3xl font-medium leading-[1.2] tracking-tight text-slate-900">
                      <TextReveal text="Commercial financing in Nigeria often does not provide long-term local currency funding for infrastructure projects due to FX risk, tenor limitations, and perceived credit risks." />
                    </h3>
                  </div>

                  {/* Row 2: Split Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Sticky Column */}
                    <div className="lg:col-span-5">
                      <div className="lg:sticky lg:top-32">
                        <p className="text-xl text-slate-600 font-light leading-relaxed max-w-md">
                          CeF addresses this gap by structuring investments that combine credit enhancement, blended finance, and institutional capital mobilisation.
                        </p>
                        
                        <AnimatePresence>
                          {isLastCardActive && (
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                              className="mt-12 flex flex-row items-center gap-6"
                            >
                              <button className="bg-slate-900 text-white hover:bg-accent-light hover:text-white px-8 py-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-lg w-fit whitespace-nowrap">
                                Download Fund Rationale <ArrowUpRight className="w-4 h-4" />
                              </button>
                              <a href="#structure" className="text-slate-600 hover:text-slate-900 px-8 py-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                                View Fund Structure <ArrowUpRight className="w-4 h-4" />
                              </a>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Scrolling Column */}
                    <div className="lg:col-span-7 pb-32 relative">
                      {fundRationale.map((item, i, arr) => (
                        <StickyCard 
                          key={i} 
                          item={item} 
                          i={i} 
                          isLast={i === arr.length - 1} 
                          setLastActive={setIsLastCardActive} 
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'Fund Aims' && (
                <motion.div 
                  key="fund-aims"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {fundAims.map((item, i) => (
                    <div key={i} className="group relative h-[320px] rounded-lg overflow-hidden bg-slate-900">
                      <Image 
                        src={item.img} 
                        alt={item.title} 
                        fill
                        className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-[rgb(0,133,202)]/40 mix-blend-multiply group-hover:bg-[rgb(0,133,202)]/60 transition-colors duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute top-6 right-6">
                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                          <span className="text-xl font-light">+</span>
                        </div>
                      </div>
                      <div className="absolute bottom-8 left-8 right-8">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2 block">Impact</span>
                        <h4 className="text-xl font-medium text-white mb-3">{item.title}</h4>
                        <p className="text-sm text-white/70 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'How CeF Works' && (
                <motion.div 
                  key="how-works"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="pt-12"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Sticky Column */}
                    <div className="lg:col-span-5">
                      <div className="lg:sticky lg:top-32">
                        <span className="text-xs font-bold text-accent-light uppercase tracking-widest mb-4 block">/ How CeF Works</span>
                        <h3 className="text-2xl font-medium leading-tight mb-8 text-slate-900">
                          Our operating model is designed to unlock scalable, local currency financing for clean energy projects through strategic partnerships and blended finance.
                        </h3>
                        
                        <AnimatePresence>
                          {isHowWorksLastActive && (
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                              className="mt-12"
                            >
                              <button className="bg-slate-900 text-white hover:bg-accent-light hover:text-white px-8 py-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-lg w-fit whitespace-nowrap">
                                View Eligibility Criteria <ArrowUpRight className="w-4 h-4" />
                              </button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Timeline Column */}
                    <div className="lg:col-span-7 pb-12">
                      {operatingModel.map((item, i, arr) => (
                        <TimelineStep 
                          key={i} 
                          item={item} 
                          i={i} 
                          isLast={i === arr.length - 1} 
                          setLastActive={setIsHowWorksLastActive}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
