import { Inter, Montserrat } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const clashDisplay = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-clash-display",
  weight: ["600", "700"]
});
