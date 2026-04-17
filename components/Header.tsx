'use client';

import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.1, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-sage/30 bg-beige/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-sage">EST. 2026</div>
        <div className="font-serif text-lg uppercase tracking-[0.24em] sm:text-xl">dyasse shop</div>
        <a
          href="#cta"
          className="rounded-full border border-sage bg-sage px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:opacity-90"
        >
          Get the PDF
        </a>
      </div>
    </motion.header>
  );
}
