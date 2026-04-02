'use client'

import React from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

interface TimelineStepProps {
  item: {
    title: string;
    content: string;
    color: string;
  };
  i: number;
  isLast: boolean;
  setLastActive?: (v: boolean) => void;
}

export const TimelineStep = ({ item, i, isLast, setLastActive }: TimelineStepProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "start 30%"]
  });
  
  const [status, setStatus] = React.useState<'upcoming' | 'active' | 'past'>(i === 0 ? 'active' : 'upcoming');

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (i === 0 && latest < 0.1) {
      setStatus('active');
    } else if (latest < 0.1) {
      setStatus('upcoming');
    } else if (latest > 0.8 && !isLast) {
      setStatus('past');
    } else {
      setStatus('active');
    }

    if (isLast && setLastActive) {
      setLastActive(latest > 0.65);
    }
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const isActiveOrPast = status === 'active' || status === 'past';

  return (
    <div ref={ref} className="relative pl-10 md:pl-16 pb-16">
      {/* Timeline Node */}
      <div 
        className={`absolute left-[7px] md:left-[11px] top-1 w-4 h-4 rounded-full border-2 z-10 transition-colors duration-700 ${isActiveOrPast ? 'bg-white' : 'bg-slate-200 border-slate-300'}`}
        style={{ borderColor: isActiveOrPast ? `rgba(${item.color}, 0.55)` : undefined }}
      >
        {isActiveOrPast && (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-1 rounded-full"
            style={{ backgroundColor: `rgba(${item.color}, 0.55)` }}
          />
        )}
      </div>

      {/* Timeline Line (Grey Background) */}
      {!isLast && (
        <div className="absolute left-[14px] md:left-[18px] top-5 bottom-[-4px] w-0.5 bg-slate-200" />
      )}

      {/* Timeline Line (Colored Fill) */}
      {!isLast && (
        <motion.div 
          className="absolute left-[14px] md:left-[18px] top-5 bottom-[-4px] w-0.5 origin-top"
          style={{ 
            scaleY: lineHeight,
            backgroundColor: `rgba(${item.color}, 0.25)`
          }} 
        />
      )}

      {/* Content */}
      <div className={`transition-all duration-1000 ${status === 'active' ? 'opacity-100 blur-none translate-y-0' : status === 'past' ? 'opacity-40 blur-none translate-y-0' : 'opacity-20 blur-sm translate-y-8'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <h4 className="text-2xl font-medium text-slate-900 max-w-[180px] flex flex-col gap-y-1 leading-tight content-start">
            {item.title.split("\n").map((line: string, idx: number) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0.1, y: 10 }}
                animate={isActiveOrPast ? { opacity: 1, y: 0 } : { opacity: 0.1, y: 10 }}
                transition={{ duration: 0.5, delay: isActiveOrPast ? idx * 0.06 : 0, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                {line}
              </motion.span>
            ))}
          </h4>
          <div className="text-slate-600 font-light leading-relaxed text-lg flex flex-wrap gap-x-[0.25em] content-start">
            {item.content.split(" ").map((word: string, idx: number) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0.1, y: 10 }}
                animate={isActiveOrPast ? { opacity: 1, y: 0 } : { opacity: 0.1, y: 10 }}
                transition={{ duration: 0.5, delay: isActiveOrPast ? idx * 0.02 : 0, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
