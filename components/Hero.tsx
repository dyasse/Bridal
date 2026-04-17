'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-14 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-4xl text-center"
      >
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-sage">Luxury DIY Patterns</p>
        <h1 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
          12 Hours of Craftsmanship. One Iconic Statement Bag.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-champagne-muted sm:text-lg">
          The Pearl Cloud Clutch Masterclass is a precision blueprint for makers who want architectural elegance,
          structural integrity, and couture-level finishing in one downloadable PDF.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, delay: 0.1, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-10"
      >
        <img
          src="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1800&q=80"
          alt="Luxury pearl clutch resting on cream silk"
          className="h-[300px] w-full rounded-3xl object-cover shadow-[0_14px_45px_rgba(132,126,92,0.22)] sm:h-[450px]"
        />
      </motion.div>
    </section>
  );
}
