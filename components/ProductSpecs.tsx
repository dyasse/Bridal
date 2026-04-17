'use client';

import { motion } from 'framer-motion';

const specs = [
  {
    title: 'Architecture',
    detail:
      'A no-sagging architecture framework engineered with controlled RAW sequencing, tension checkpoints, and support columns to keep your clutch upright and iconic.',
  },
  {
    title: 'Materials',
    detail:
      'Exact materials map for pearl sizing, reinforcement thread, closure hardware, and finishing tools—curated to preserve luxury form, not just visual beauty.',
  },
  {
    title: 'Tension',
    detail:
      'Step-by-step tension calibration so each pass locks in structural integrity. You build confidence while preventing collapse, warping, and floppy corners.',
  },
];

export default function ProductSpecs() {
  return (
    <section className="border-y border-sage/30 bg-cream/40">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-sage">Technical Precision</p>
          <h2 className="font-serif text-3xl sm:text-4xl">Built on Structural Integrity</h2>
          <p className="mt-5 text-sm leading-relaxed text-champagne-muted sm:text-base">
            Most patterns teach surface beauty. This masterclass teaches load-bearing elegance. You will learn the
            Right-Angle Weave (RAW) system as an architectural method designed for a No-Floppy, No-Sagging result.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {specs.map((spec, index) => (
            <motion.article
              key={spec.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.08, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-2xl border border-sage/30 bg-white/60 p-6"
            >
              <h3 className="font-serif text-2xl">{spec.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-champagne-muted">{spec.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
