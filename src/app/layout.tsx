import type { Metadata } from "next";
import "@/styles/globals.css";
import { inter, clashDisplay } from "@/fonts";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-4709f1f3.vercel.app"),
  title: {
    default: "Otlob 2026 — Flavor Intelligence",
    template: "%s · Otlob 2026"
  },
  description:
    "Otlob 2026 is a next-generation, mobile-first food experience platform blending global polish with real street food energy.",
  openGraph: {
    title: "Otlob 2026 — Flavor Intelligence",
    description:
      "Discover an intelligent, global food journey that feels modern, warm, and alive across every touchpoint.",
    type: "website",
    url: "https://agentic-4709f1f3.vercel.app",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
        width: 1600,
        height: 900,
        alt: "Modern cooks preparing vibrant street food dishes"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Otlob 2026 — Flavor Intelligence",
    description:
      "Intelligent, global, street-food inspired ordering experience built with warmth and rhythm.",
    images: ["https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop"]
  },
  keywords: [
    "food delivery",
    "street food",
    "modern ordering",
    "mobile-first platform",
    "intelligent recommendations",
    "global cuisine"
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-otlob-charcoal text-zinc-100 selection:bg-otlob-amber/80 selection:text-otlob-charcoal",
          inter.variable,
          clashDisplay.variable
        )}
      >
        <Providers>
          <div className="relative flex min-h-screen flex-col bg-radial-light">
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px] bg-gradient-to-b from-otlob-ash via-transparent to-transparent opacity-70 blur-3xl" />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
