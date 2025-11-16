import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/navigation/theme-toggle";

const navItems = [
  { label: "Experiences", href: "#experiences" },
  { label: "Intelligence", href: "#intelligence" },
  { label: "Partners", href: "#partners" },
  { label: "Cities", href: "#cities" }
];

export function TopBar() {
  return (
    <header className="sticky top-0 z-40 mx-auto w-full max-w-6xl bg-white/80 px-6 py-5 backdrop-blur-xl md:rounded-3xl md:px-8 md:py-6 dark:bg-otlob-ash/90">
      <div className="flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 text-otlob-charcoal dark:text-white">
          <span className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-otlob-rose via-otlob-amber to-otlob-emerald text-lg font-semibold uppercase tracking-tight text-otlob-charcoal">
            O
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold uppercase tracking-[0.2em] text-otlob-charcoal dark:text-white">
              OTLOB
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">2026 Global Food OS</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-600 transition hover:text-otlob-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-otlob-amber/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-zinc-300 dark:hover:text-white dark:focus-visible:ring-offset-otlob-ash"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button
            asChild
            className="bg-black/5 text-sm font-semibold text-otlob-charcoal shadow-ambient transition hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-otlob-amber/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:focus-visible:ring-offset-otlob-ash"
          >
            <Link href="#join">Join The Beta</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
