"use client";
import { PortfolioHeroSection } from "@/components/portfolio/portfolioHeroSection";
import { PortfolioOutroSection } from "@/components/portfolio/portfolioOutroSection";
import { PortfolioStickySection } from "@/components/portfolio/portfolioStickySection";
import { useGSAP } from "@gsap/react";

export default function Portfolio() {

  useGSAP(() => {});
  return (
    <section>
      <PortfolioHeroSection />
      <PortfolioStickySection />
      <PortfolioOutroSection />
    </section>
  );
}
