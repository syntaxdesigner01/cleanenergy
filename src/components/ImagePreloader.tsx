'use client';

import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const CRITICAL_IMAGES = [
  'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2672&auto=format&fit=crop', // Home Hero
  'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2574&auto=format&fit=crop', // About Hero
  "https://res.cloudinary.com/diqfojkri/video/upload/v1775236878/cleanEnergyVid_hfhmke.mp4"
];

export function ImagePreloader() {
  useEffect(() => {
    CRITICAL_IMAGES.forEach((url) => {
      // Using ReactDOM.preload for preloading images (React 19+)
      // @ts-ignore - Preload is a newer React feature
      ReactDOM.preload(url, { as: 'image' });
    });
  }, []);

  return null;
}
