"use client";
import { Navbar } from "@/components/bottomNavbar";
import { Contact } from "@/components/contact";
import { PortfolioStickySection } from "@/components/portfolio/portfolioStickySection";
import { initLenis } from "@/lib/lenis";
import { useGSAP } from "@gsap/react";

export default function Portfolio() {
  useGSAP(() => {
    initLenis();
  });
  return (
    <>
      <Navbar />
      <section className="w-full">
        <PortfolioStickySection />
        <Contact />
      </section>
    </>
  );
}
