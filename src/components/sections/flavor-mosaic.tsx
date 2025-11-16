 "use client";

import Image from "next/image";
import { motion } from "framer-motion";

const data = [
  {
    city: "Casablanca",
    headline: "Memory-infused delivery rituals",
    description:
      "Guide every diner from craving to completion with ambient stories, mood-based playlists, and seasonal pairings tailored to micro-communities.",
    image: "photo-1528715471579-d1bcf0ba5e83",
    pillars: ["Mood-first discovery", "Chef storytelling", "Adaptive pricing"]
  },
  {
    city: "Bangkok",
    headline: "Live kitchens, zero friction",
    description:
      "Streams real prep rhythm, queue health, and courier choreography. Give diners transparency, kitchens flow-state tools, and couriers precise timing.",
    image: "photo-1534791547706-1059883266ff",
    pillars: ["Rhythm sync", "Smart batching", "Heat-tracking UI"]
  },
  {
    city: "Mexico City",
    headline: "Street culture, global polish",
    description:
      "Showcase neighborhood gems with cinematic clarity. Translate sensory beats into precise ordering flows with soul and speed intact.",
    image: "photo-1504674900247-0877df9cc836",
    pillars: ["Immersive storytelling", "Tactile feedback", "Cultural trust"]
  }
];

export function FlavorMosaic() {
  return (
    <section id="experiences" className="mx-auto w-full max-w-6xl px-6 md:px-8">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-otlob-emerald">Signature Experiences</p>
          <h2 className="mt-3 font-display text-3xl text-otlob-charcoal md:text-4xl dark:text-white">
            Precise flows with street food energy.
          </h2>
        </div>
        <p className="max-w-xl text-sm text-zinc-600 md:text-base dark:text-zinc-300">
          Modular UI kits adapt to each restaurant&apos;s rhythm while keeping global consistency. Safe zones, vivid
          imagery, and tactile interactions make mobile ordering cinematic and fast.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {data.map((item, index) => (
          <motion.article
            key={item.city}
            initial={{ y: 32, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.08, type: "spring", stiffness: 210, damping: 26 }}
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
          >
            <div className="relative h-52 overflow-hidden">
              <Image
                src={`https://images.unsplash.com/${item.image}?q=80&w=800&auto=format&fit=crop`}
                alt={item.city}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                {item.city}
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6">
              <h3 className="font-display text-2xl text-otlob-charcoal dark:text-white">{item.headline}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">{item.description}</p>
              <ul className="mt-auto space-y-3 text-sm text-zinc-500 dark:text-zinc-400">
                {item.pillars.map((pillar) => (
                  <li key={pillar} className="flex items-start gap-2">
                    <span className="mt-1 size-2 rounded-full bg-gradient-to-r from-otlob-rose via-otlob-amber to-otlob-emerald" />
                    <span>{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
