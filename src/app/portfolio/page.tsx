"use client";
import { PortfolioHeroSection } from "@/components/portfolio/portfolioHeroSection";
import { PortfolioOutroSection } from "@/components/portfolio/portfolioOutroSection";
import { PortfolioStickySection } from "@/components/portfolio/portfolioStickySection";
import { initLenis } from "@/lib/lenis";
import { useGSAP } from "@gsap/react";

export default function Portfolio() {

  useGSAP(() => { initLenis() });
  return (
    <section className="w-full h-[1100vh]">
      <PortfolioHeroSection />
      <PortfolioStickySection />
      <PortfolioOutroSection />
    </section>
  );
}
