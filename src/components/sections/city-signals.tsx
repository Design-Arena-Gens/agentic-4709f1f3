 "use client";

import { motion } from "framer-motion";

const cities = [
  {
    name: "Dubai",
    status: "Launching Q1",
    stats: ["Desert-night delivery routes", "AI-guided prep labs", "Multi-lingual concierge"],
    accent: "from-otlob-rose via-otlob-amber to-otlob-emerald"
  },
  {
    name: "Nairobi",
    status: "Live Now",
    stats: ["24/7 market sync", "Courier co-ops", "Community kitchens"],
    accent: "from-otlob-emerald via-otlob-amber to-white"
  },
  {
    name: "Lisbon",
    status: "In Beta",
    stats: ["Coastal tasting trails", "Immersive story layers", "Dynamic pricing lattice"],
    accent: "from-white via-otlob-rose to-otlob-amber"
  }
];

export function CitySignals() {
  return (
    <section id="cities" className="mx-auto w-full max-w-6xl px-6 md:px-8">
      <div className="rounded-3xl border border-black/5 bg-white/70 p-8 md:p-12 dark:border-white/10 dark:bg-white/5">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-otlob-amber">Global Rollout</p>
            <h2 className="mt-3 font-display text-3xl text-otlob-charcoal md:text-4xl dark:text-white">
              A living network of vibrant food capitals.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-zinc-600 md:text-base dark:text-zinc-300">
            Fully responsive, mobile-first experiences go live across 180+ cities. Each launch calibrates to local
            kitchens, culture, and logistics while keeping the global system coherent.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cities.map((city, index) => (
            <motion.article
              key={city.name}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.08, type: "spring", stiffness: 210, damping: 24 }}
              className="relative overflow-hidden rounded-3xl border border-black/5 bg-white/80 p-6 dark:border-white/10 dark:bg-otlob-ash/70"
            >
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent dark:from-black/30" />
              <div className="relative flex items-center justify-between">
                <h3 className="font-display text-2xl text-otlob-charcoal dark:text-white">{city.name}</h3>
                <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-otlob-charcoal dark:border-white/10 dark:bg-white/10 dark:text-white">
                  {city.status}
                </span>
              </div>
              <ul className="relative mt-6 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                {city.stats.map((stat) => (
                  <li key={stat} className="flex items-start gap-3">
                    <span
                      className={`mt-1 size-2 rounded-full bg-gradient-to-r ${city.accent} shadow-[0_0_12px_rgba(255,179,83,0.45)]`}
                    />
                    <span>{stat}</span>
                  </li>
                ))}
              </ul>
              <div className={`relative mt-8 h-1 rounded-full bg-gradient-to-r ${city.accent}`} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
