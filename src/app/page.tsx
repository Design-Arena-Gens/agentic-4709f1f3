import { Hero } from "@/components/sections/hero";
import { FlavorMosaic } from "@/components/sections/flavor-mosaic";
import { FlowShowcase } from "@/components/sections/flow-showcase";
import { ChefStories } from "@/components/sections/chef-stories";
import { Footer } from "@/components/sections/footer";
import { TopBar } from "@/components/navigation/top-bar";
import { MotionGuide } from "@/components/sections/motion-guide";
import { CitySignals } from "@/components/sections/city-signals";
import { JoinBeta } from "@/components/sections/join-beta";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <main className="flex flex-1 flex-col gap-24 pb-24 pt-16 md:pt-24">
        <Hero />
        <FlavorMosaic />
        <FlowShowcase />
        <CitySignals />
        <MotionGuide />
        <JoinBeta />
        <ChefStories />
      </main>
      <Footer />
    </div>
  );
}
