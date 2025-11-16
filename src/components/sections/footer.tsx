import Link from "next/link";

const links = [
  {
    title: "Company",
    items: ["About", "Careers", "Press", "Contact"]
  },
  {
    title: "Platform",
    items: ["Design System", "Kitchen OS", "Courier App", "Diner App"]
  },
  {
    title: "Resources",
    items: ["Rhythm Playbook", "Brand Assets", "Security", "Support"]
  }
];

export function Footer() {
  return (
    <footer className="mt-24 w-full border-t border-black/5 bg-white py-12 dark:border-white/10 dark:bg-otlob-ash/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:flex-row md:justify-between md:px-8">
        <div className="max-w-sm">
          <p className="font-display text-2xl text-otlob-charcoal dark:text-white">Otlob 2026</p>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Flavor intelligence for a global era. We blend real street food soul with modern systems to keep every
            interaction warm, clear, and fast.
          </p>
        </div>
        <div className="flex flex-1 flex-wrap gap-10 text-sm text-zinc-600 dark:text-zinc-300">
          {links.map((group) => (
            <div key={group.title} className="min-w-[140px]">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">{group.title}</p>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Link href="#" className="transition hover:text-otlob-amber dark:hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 flex w-full max-w-6xl flex-col gap-4 px-6 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between md:px-8 dark:text-zinc-500">
        <p>© {new Date().getFullYear()} Otlob Labs. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
}
