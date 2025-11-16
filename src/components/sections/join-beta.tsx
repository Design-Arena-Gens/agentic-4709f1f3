 "use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function JoinBeta() {
  return (
    <section
      id="join"
      className="mx-auto w-full max-w-6xl px-6 md:px-8"
    >
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 26 }}
        className="overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-br from-otlob-rose/15 via-otlob-amber/15 to-otlob-emerald/15 p-8 md:p-12 dark:border-white/10 dark:from-otlob-rose/20 dark:via-otlob-amber/20 dark:to-otlob-emerald/20"
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-otlob-emerald">Join The Beta</p>
            <h2 className="font-display text-3xl text-otlob-charcoal dark:text-white">
              Help us design the future of flavor intelligence.
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-200">
              We onboard chefs, couriers, and partners each month. Share your city and kitchen story to unlock early
              tools, design reviews, and real-time intelligence tailored to your operation.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Button size="lg" className="w-full md:w-auto">
              Request Access
            </Button>
            <Button
              variant="ghost"
              className="w-full text-otlob-charcoal hover:text-otlob-amber md:w-auto dark:text-white"
            >
              Download Rhythm Playbook
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
