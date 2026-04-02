'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const sdgs = [
  { id: 7, name: "Affordable and Clean Energy", color: "#FCC30B" },
  { id: 8, name: "Decent Work and Economic Growth", color: "#A21942" },
  { id: 9, name: "Industry, Innovation and Infrastructure", color: "#FD6925" },
  { id: 11, name: "Sustainable Cities and Communities", color: "#FD9D24" },
  { id: 13, name: "Climate Action", color: "#3F7E44" },
];

export const SDGMap = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  return (
    <section className="py-24 bg-[var(--color-background)] text-white relative z-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent-green)]" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#6B80A6]">
                Global Impact
              </span>
            </div>
            <h2 className="text-[42px] font-medium leading-[1.15] tracking-tight mt-4">
              <span className="text-white">SDG Alignment </span>
              <span className="text-[var(--color-text-secondary)]">Map</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] mt-4 max-w-2xl mx-auto">
              Click on highlighted regions (e.g., Nigeria) to explore the Sustainable Development Goals our projects contribute to.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <motion.div variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }} className="lg:col-span-2 bg-white/5 rounded-3xl p-4 border border-white/10 relative overflow-hidden">
              <ComposableMap projection="geoMercator" projectionConfig={{ scale: 120 }}>
                <ZoomableGroup center={[20, 0]} zoom={1.5}>
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => {
                        const isNigeria = geo.properties.name === "Nigeria";
                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            onClick={() => {
                              if (isNigeria) {
                                setSelectedCountry(selectedCountry === "Nigeria" ? null : "Nigeria");
                              }
                            }}
                            style={{
                              default: {
                                fill: isNigeria ? "var(--color-accent-green)" : "#2D3748",
                                outline: "none",
                                transition: "all 0.3s ease",
                                cursor: isNigeria ? "pointer" : "default",
                              },
                              hover: {
                                fill: isNigeria ? "var(--color-accent-light)" : "#2D3748",
                                outline: "none",
                                cursor: isNigeria ? "pointer" : "default",
                              },
                              pressed: {
                                fill: isNigeria ? "var(--color-accent)" : "#2D3748",
                                outline: "none",
                              },
                            }}
                          />
                        );
                      })
                    }
                  </Geographies>
                </ZoomableGroup>
              </ComposableMap>
            </motion.div>

            <div className="lg:col-span-1 flex flex-col gap-4">
              <AnimatePresence mode="wait">
                {selectedCountry === "Nigeria" ? (
                  <motion.div
                    key="nigeria-sdgs"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col gap-4"
                  >
                    <h3 className="text-xl font-medium mb-2">Nigeria Impact</h3>
                    {sdgs.map((sdg, idx) => (
                      <motion.div
                        key={sdg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm shadow-lg shrink-0"
                          style={{ backgroundColor: sdg.color, color: sdg.id === 7 ? 'black' : 'white' }}
                        >
                          {sdg.id}
                        </div>
                        <span className="text-sm font-medium text-white/80">{sdg.name}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty-state"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center p-8 border border-dashed border-white/20 rounded-3xl"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                      <span className="text-2xl">🌍</span>
                    </div>
                    <p className="text-white/50 text-sm">Select a highlighted country on the map to view its SDG alignment.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
