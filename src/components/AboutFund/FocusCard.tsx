'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from './animations';

interface FocusCardProps {
  icon: any;
  headline: string;
  statement?: string;
  proof?: string;
  tags?: string[];
  isWide?: boolean;
  image?: string | null;
  accentColor?: string;
  tooltipText?: string;
  children?: React.ReactNode;
  forceHover?: boolean;
}

export const FocusCard = ({ 
  icon: Icon, 
  headline, 
  statement, 
  proof, 
  tags, 
  isWide = false, 
  image = null, 
  accentColor = "var(--color-accent-green)", 
  tooltipText, 
  children, 
  forceHover = false 
}: FocusCardProps) => (
  <motion.div 
    variants={fadeUp}
    whileHover={{ y: -8 }}
    className={`relative overflow-hidden group transition-all duration-500 shadow-2xl rounded-lg border bg-surface border-blue-500/20 ${isWide ? "md:col-span-2" : "col-span-1"} h-full flex flex-col p-8`}
  >
    {image && (
      <div className={`absolute inset-0 z-0 transition-opacity duration-700 ${forceHover ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
        <img 
          src={image} 
          alt={headline} 
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 opacity-40 mix-blend-luminosity ${forceHover ? 'scale-105' : 'group-hover:scale-105'}`}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[rgb(0,133,202)]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/80 to-transparent" />
      </div>
    )}
    
    <div className="relative z-10 flex flex-col h-full">
      {/* Visual Anchor */}
      <div className="relative w-max mb-8">
        <div 
          className={`w-12 h-12 rounded-lg flex items-center justify-center border transition-all duration-500 ${forceHover ? 'bg-accent-green/20 border-accent-green/30' : 'bg-accent-green/5 border-accent-green/10 group-hover:bg-accent-green/20 group-hover:border-accent-green/30'}`}
        >
          <Icon 
            className={`w-6 h-6 transition-all duration-500 text-accent-green ${forceHover ? 'scale-110' : 'group-hover:scale-110'}`}
          />
        </div>
      </div>

      {/* Headline */}
      <span className={`text-[10px] font-medium uppercase tracking-[0.4em] mb-4 block transition-colors duration-500 ${forceHover ? 'text-text-secondary' : 'text-text-tertiary group-hover:text-text-secondary'}`}>
        {headline}
      </span>

      {/* Impact Statement */}
      {children ? children : (
        <h3 className={`leading-tight mb-auto transition-colors duration-500 ${isWide ? "text-3xl font-medium max-w-md" : "text-[18px] font-light"} ${forceHover ? 'text-white' : 'group-hover:text-white'}`}>
          {statement}
        </h3>
      )}

      {/* Footer */}
      {(proof || tags) && (
        <div className="mt-12 flex items-center justify-between gap-4">
          {proof && (
            <div 
              className={`border px-5 py-2 rounded-full transition-all duration-500 bg-accent-green/10 border-accent-green/20 ${forceHover ? 'scale-105' : 'group-hover:scale-105'}`}
            >
              <span className="text-xs font-bold tracking-tight text-accent-green">
                {proof}
              </span>
            </div>
          )}
          
          {tags && (
            <div className="flex gap-3">
              {tags.map(tag => (
                <span key={tag} className={`text-[10px] font-semibold text-text-tertiary uppercase tracking-widest transition-opacity duration-500 ${forceHover ? 'opacity-80' : 'opacity-40 group-hover:opacity-80'}`}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  </motion.div>
);
