 "use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-br from-white via-otlob-cloud to-white px-6 py-16 shadow-ambient md:px-14 md:py-20 dark:border-white/10 dark:from-otlob-ash dark:via-otlob-charcoal dark:to-otlob-ash">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[3fr,2fr]">
        <div className="space-y-8">
          <motion.span
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 210, damping: 25 }}
            className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-otlob-amber dark:bg-white/10"
          >
            Flavor Intelligence 2026
          </motion.span>
          <motion.h1
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.05, type: "spring", stiffness: 200, damping: 26 }}
            className="font-display text-4xl leading-tight text-otlob-charcoal sm:text-5xl md:text-6xl dark:text-white"
          >
            A living food universe for every city, chef, and craving.
          </motion.h1>
          <motion.p
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 28 }}
            className="max-w-xl text-base text-zinc-600 md:text-lg dark:text-zinc-300"
          >
            Otlob 2026 orchestrates delivery, discovery, and kitchen intelligence with warmth and rhythm. From instant
            pantry-to-table reorders to immersive city tastings, we sync human cravings with chef creativity in real
            time.
          </motion.p>
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 22 }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button className="w-full sm:w-auto" size="lg">
              Explore The Platform
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto border-black/10 text-otlob-charcoal hover:text-otlob-amber dark:border-white/20 dark:text-white"
              size="lg"
            >
              Watch Rhythm Demo
            </Button>
          </motion.div>
          <motion.dl
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-2 gap-6 text-sm text-zinc-500 sm:grid-cols-3 dark:text-zinc-300"
          >
            {[
              { value: "7.2M", label: "Monthly meals guided" },
              { value: "180+", label: "Cities live in 2026" },
              { value: "42%", label: "Faster average prep time" }
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-black/5 bg-white p-4 text-otlob-charcoal dark:border-white/5 dark:bg-white/5 dark:text-white"
              >
                <dt className="text-xs uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-500">{item.label}</dt>
                <dd className="mt-2 font-display text-2xl">{item.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
        <div className="relative">
          <div className="absolute inset-0 -translate-y-16 translate-x-6 rounded-full bg-otlob-amber/20 blur-3xl md:translate-x-12" />
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 180, damping: 22 }}
            className="relative flex flex-col space-y-6 rounded-3xl border border-black/5 bg-white/70 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">Real-time kitchen</p>
                <p className="mt-2 font-display text-2xl text-otlob-charcoal dark:text-white">Saigon Night Market</p>
              </div>
              <span className="inline-flex items-center rounded-full bg-otlob-emerald/20 px-3 py-1 text-xs font-semibold text-otlob-emerald">
                3 min ETA
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {["pho", "ramen", "tacos"].map((dish) => (
                <div
                  key={dish}
                  className="space-y-2 rounded-2xl border border-black/5 bg-white/70 p-3 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="relative h-24 w-full overflow-hidden rounded-xl">
                    <Image
                      src={`https://images.unsplash.com/${getImageId(dish)}?q=80&w=400&auto=format&fit=crop`}
                      alt={`${dish} dish`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Batch {dish}</p>
                    <p className="font-semibold capitalize text-otlob-charcoal dark:text-white">{dish} surge</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-black/5 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">Kitchen Rhythm</p>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.2, duration: 1.6, ease: "easeInOut" }}
                className="mt-4 h-2 rounded-full bg-gradient-to-r from-otlob-rose via-otlob-amber to-otlob-emerald"
              />
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
                Prep pacing optimized. Auto-notify couriers & diners with rhythmic pulses at key hand-off moments.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function getImageId(key: string) {
  switch (key) {
    case "pho":
      return "photo-1525755662778-989d0524087e";
    case "ramen":
      return "photo-1540189549336-e6e99c3679fe";
    case "tacos":
      return "photo-1608039858485-a4618f3b5d81";
    default:
      return "photo-1515003197210-e0cd71810b5f";
  }
}
