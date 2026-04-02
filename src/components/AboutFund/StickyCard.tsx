'use client'

import React from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

interface StickyCardProps {
  item: {
    title: string;
    content: string;
    color: string;
    icon?: any;
  };
  i: number;
  isLast: boolean;
  setLastActive: (v: boolean) => void;
}

export const StickyCard = ({ item, i, isLast, setLastActive }: StickyCardProps) => {
  const outerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start 80%", "start 20%"]
  });
  const [isActive, setIsActive] = React.useState(i === 0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const active = i === 0 ? true : latest > 0;
    if (isActive !== active) {
      setIsActive(active);
      if (isLast) setLastActive(active);
    }
  });

  const Icon = item.icon;

  return (
    <div ref={outerRef} className="relative">
      <div
        className={`sticky top-32 bg-[#F8FAFC] pt-8 pb-12 min-h-[30vh] flex flex-col justify-start overflow-hidden -mx-6 px-6 sm:mx-0 sm:px-8 transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-[0.15]'}`}
        style={{ 
          zIndex: i + 10,
          borderTop: `1px solid rgba(${item.color}, 0.35)`
        }}
      >
        <div 
          className="absolute inset-0 pointer-events-none transition-colors duration-500" 
          style={{ backgroundColor: `rgba(${item.color}, 0.1)` }} 
        />

        {/* Faded Background Icon */}
        {Icon && (
          <div 
            className="absolute -bottom-12 -left-12 pointer-events-none z-0 transition-opacity duration-1000"
            style={{
              color: `rgba(${item.color}, 1)`,
              opacity: 0.25,
              maskImage: 'linear-gradient(to top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
              WebkitMaskImage: 'linear-gradient(to top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
              transform: 'rotate(-15deg)'
            }}
          >
            <Icon className="w-64 h-64" strokeWidth={2} />
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <h4 className="text-2xl font-medium text-slate-900 max-w-[220px] flex flex-wrap gap-x-[0.25em] leading-tight content-start">
            {item.title.split(" ").map((word: string, idx: number) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0.1, y: 10 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.1, y: 10 }}
                transition={{ duration: 0.5, delay: isActive ? idx * 0.08 : 0, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h4>
          <div className={`text-slate-600 font-light leading-relaxed text-lg transition-all duration-700 ${isActive ? 'opacity-100 blur-none translate-y-0' : 'opacity-0 blur-[2px] translate-y-4'}`}>
            {item.content}
          </div>
        </div>
      </div>
    </div>
  );
};
