'use client'

import React from 'react';
import { motion } from 'framer-motion';

export const TextReveal = ({ text }: { text: string }) => {
  const words = text.split(' ');
  return (
    <div className="flex flex-wrap gap-x-[0.35em] gap-y-[0.1em]">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.1, y: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.4, delay: i * 0.015, ease: "easeOut" }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};
