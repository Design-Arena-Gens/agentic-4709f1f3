 "use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stories = [
  {
    chef: "Amira Bensalem",
    role: "Chef & Owner, Dar Lalla",
    quote:
      "Otlob translates our kitchen rhythm into a living feed. Guests feel the warmth, couriers feel the timing, and my team feels in sync.",
    image: "photo-1551218808-94e220e084d2",
    badges: ["Prep sync", "Storytelling", "City trails"]
  },
  {
    chef: "Kenji Watanabe",
    role: "Head Chef, Pulse Ramen Labs",
    quote:
      "We prototype menus straight inside Otlob. The platform predicts ingredient stress, calibrates pricing, and lets us celebrate craft instantly.",
    image: "photo-1555992336-cbf5d7e9034d",
    badges: ["Menu prototyping", "Heat maps", "Courier cadence"]
  },
  {
    chef: "Luz Moreno",
    role: "Founder, Calle 23",
    quote:
      "Our district trail is now the city’s hottest tasting route. It feels cinematic, yet all the controls we need are within reach.",
    image: "photo-1525253086316-d0c936c814f8",
    badges: ["Trail curation", "Immersive UI", "Instant payments"]
  }
];

export function ChefStories() {
  return (
    <section id="partners" className="mx-auto w-full max-w-6xl px-6 md:px-8">
      <div className="rounded-3xl border border-black/5 bg-gradient-to-br from-white via-otlob-cloud/60 to-transparent p-8 md:p-12 dark:border-white/10 dark:from-white/5 dark:via-transparent dark:to-transparent">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr,1fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-otlob-emerald">Kitchen Voices</p>
            <h2 className="mt-3 font-display text-3xl text-otlob-charcoal md:text-4xl dark:text-white">
              Built with chefs, couriers, and diners in every sprint.
            </h2>
            <p className="mt-4 text-sm text-zinc-600 md:text-base dark:text-zinc-300">
              We co-create with 500+ kitchens worldwide. From Nairobi night stalls to Tokyo labs, Otlob adapts to every
              rhythm, keeps safe zones intact, and celebrates human craft.
            </p>
          </div>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            className="overflow-hidden rounded-3xl border border-black/5 bg-white/80 p-6 dark:border-white/10 dark:bg-white/5"
          >
            <div className="relative h-64 w-full overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1200&auto=format&fit=crop"
                alt="Global workshop session"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-200">
              Each release is tested live with kitchens and couriers. Our dashboards provide real-time insights into
              prep pacing, guest delight, and delivery flow — all while keeping interfaces warm and human.
            </p>
          </motion.div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stories.map((story, index) => (
            <motion.article
              key={story.chef}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.08, type: "spring", stiffness: 210, damping: 24 }}
              className="flex h-full flex-col rounded-3xl border border-black/5 bg-white/75 p-6 dark:border-white/10 dark:bg-otlob-ash/60"
            >
              <div className="flex items-center gap-4">
                <div className="relative size-14 overflow-hidden rounded-2xl">
                  <Image
                    src={`https://images.unsplash.com/${story.image}?q=80&w=256&auto=format&fit=crop`}
                    alt={story.chef}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-display text-lg text-otlob-charcoal dark:text-white">{story.chef}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">{story.role}</p>
                </div>
              </div>
              <p className="mt-4 flex-1 text-sm text-zinc-600 dark:text-zinc-300">&ldquo;{story.quote}&rdquo;</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {story.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-otlob-emerald/30 bg-otlob-emerald/10 px-3 py-1 text-xs font-semibold text-otlob-emerald"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
