 "use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const flows = [
  {
    name: "Pulse Ordering",
    description:
      "Lightweight, rhythmic ordering that adapts to swipe speed. Haptic beats confirm key decisions — no visual clutter.",
    micro: ["Swipe-to-favorite gestures", "Adaptive step compression", "Instant reorders"],
    insight: "Avg checkout time drops by 36% on high-traffic nights."
  },
  {
    name: "Kitchen Rhythm Board",
    description:
      "Chef-first command center with real-time demand sensing, prep pacing, and auto-batching suggestions that keep teams aligned.",
    micro: ["Heat map queue view", "Prep surge alerts", "Auto-courier curation"],
    insight: "Kitchen idle time reduced by 22% across pilot locations."
  },
  {
    name: "City Discovery Trails",
    description:
      "Dynamic otlob trails guide travelers through food districts, syncing translation, payments, and story overlays.",
    micro: ["Real-time language sync", "Spatial audio cues", "Offline-friendly routes"],
    insight: "Average trail spend increases 2.4x vs. standard browsing."
  }
];

export function FlowShowcase() {
  return (
    <section id="intelligence" className="mx-auto w-full max-w-6xl px-6 md:px-8">
      <div className="overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-br from-white via-otlob-cloud/60 to-white p-8 md:p-12 dark:border-white/10 dark:from-white/10 dark:via-white/5 dark:to-transparent">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-otlob-amber">Intelligent Flow Engine</p>
            <h2 className="mt-3 font-display text-3xl text-otlob-charcoal md:text-4xl dark:text-white">
              Modular flows that scale clarity, speed, and delight.
            </h2>
          </div>
          <Button
            variant="secondary"
            className="w-full bg-black/5 text-otlob-charcoal hover:bg-black/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 md:w-auto"
          >
            Explore Design System
          </Button>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {flows.map((flow, index) => (
            <motion.div
              key={flow.name}
              initial={{ scale: 0.96, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.07, type: "spring", stiffness: 240, damping: 20 }}
              className="flex h-full flex-col rounded-2xl border border-black/5 bg-white/80 p-6 dark:border-white/10 dark:bg-otlob-ash/60"
            >
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl bg-black/5 text-otlob-amber dark:bg-white/10">
                <Sparkles className="size-6" />
              </div>
              <h3 className="font-display text-2xl text-otlob-charcoal dark:text-white">{flow.name}</h3>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">{flow.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                {flow.micro.map((micro) => (
                  <li key={micro} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-otlob-emerald" />
                    <span>{micro}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto rounded-2xl border border-black/5 bg-white/70 p-4 text-sm text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
                {flow.insight}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
