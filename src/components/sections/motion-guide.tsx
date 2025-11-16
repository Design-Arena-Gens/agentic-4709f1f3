 "use client";

import { motion } from "framer-motion";

const patterns = [
  {
    name: "Spring Tap",
    description: "Fast spring, light overshoot for tactile confirmation on primary CTAs.",
    values: { stiffness: 380, damping: 26, duration: "140ms" }
  },
  {
    name: "Pulse Confirm",
    description: "Brief luminance pulse to celebrate successful actions without interrupting flow.",
    values: { intensity: "1.2x", fade: "220ms", delay: "0ms" }
  },
  {
    name: "Depth Focus",
    description: "Dynamic blur with subtle elevation shift to guide focus during modals and hovers.",
    values: { blur: "6px", elevation: "+8", duration: "200ms" }
  }
];

export function MotionGuide() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 md:px-8">
      <div className="rounded-3xl border border-black/5 bg-white/70 p-8 md:p-12 dark:border-white/10 dark:bg-otlob-ash/50">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-otlob-rose">Micro-motion Language</p>
            <h2 className="mt-3 font-display text-3xl text-otlob-charcoal md:text-4xl dark:text-white">
              Motion that breathes, confirms, and stays out of the way.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-zinc-600 md:text-base dark:text-zinc-300">
            Every animation works as feedback or focus. We maintain 8–12px safe zones, fast springs, and warm depth cues
            to keep the experience rhythmic yet precise.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {patterns.map((pattern, index) => (
            <motion.div
              key={pattern.name}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.08, type: "spring", stiffness: 220, damping: 24 }}
              className="relative overflow-hidden rounded-2xl border border-black/5 bg-white/[0.82] p-6 dark:border-white/10 dark:bg-white/5"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"
                animate={{ opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative">
                <h3 className="font-display text-xl text-otlob-charcoal dark:text-white">{pattern.name}</h3>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">{pattern.description}</p>
                <dl className="mt-6 space-y-2 text-xs uppercase tracking-[0.3em] text-zinc-500">
                  {Object.entries(pattern.values).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-[11px]">
                      <dt>{key}</dt>
                      <dd className="text-zinc-600 dark:text-zinc-300">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
