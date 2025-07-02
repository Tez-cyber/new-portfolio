"use client";
import { Contact } from "@/components/contact";
import { PortfolioStickySection } from "@/components/portfolio/portfolioStickySection";
import { initLenis } from "@/lib/lenis";
import { useGSAP } from "@gsap/react";

export default function Portfolio() {

  useGSAP(() => { initLenis() });
  return (
    <section className="w-full">
      {/* <PortfolioHeroSection /> */}
      <PortfolioStickySection />
      <Contact />
      {/* <PortfolioOutroSection /> */}
    </section>
  );
}
