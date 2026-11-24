'use client';

import { useEffect } from 'react';

// The kit's nav, phone bar, hover layer, hero entrance and moments are plain ES modules in public/assets.
// They change the DOM (they split the booking statement into words, mark the phone bar), so they start
// after React has hydrated the page, never before.
const modules = ['/assets/system.js', '/assets/motion/motion.js', '/assets/layout/layout.js'];

export function KitScripts() {
  useEffect(() => {
    for (const src of modules) import(/* webpackIgnore: true */ /* turbopackIgnore: true */ src);
  }, []);
  return null;
}
