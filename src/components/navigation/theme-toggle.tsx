 "use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="size-10 rounded-full border border-white/10 bg-white/5" aria-hidden>
        &nbsp;
      </div>
    );
  }

  const isDark = theme !== "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex size-11 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-black/5 text-otlob-charcoal transition hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-otlob-amber/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:focus-visible:ring-offset-otlob-ash"
    >
      <AnimatePresence initial={false} mode="wait">
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ scale: 0.6, opacity: 0, rotate: -15 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.4, opacity: 0, rotate: 15 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className="flex items-center justify-center"
          >
            <Moon className="size-4" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ scale: 0.6, opacity: 0, rotate: 15 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.4, opacity: 0, rotate: -15 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className="flex items-center justify-center"
          >
            <Sun className="size-5" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
