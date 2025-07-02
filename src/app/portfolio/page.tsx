"use client";
import { Contact } from "@/components/contact";
import { PortfolioHeroSection } from "@/components/portfolio/portfolioHeroSection";
import { PortfolioOutroSection } from "@/components/portfolio/portfolioOutroSection";
import { PortfolioStickySection } from "@/components/portfolio/portfolioStickySection";
import { initLenis } from "@/lib/lenis";
import { useGSAP } from "@gsap/react";

export default function Portfolio() {

  useGSAP(() => { initLenis() });
  return (
    <section className="w-full md:h-[1100vh]">
      {/* <PortfolioHeroSection /> */}
      <PortfolioStickySection />
      <Contact />
      {/* <PortfolioOutroSection /> */}
    </section>
  );
}
