"use client";

import { useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { NextSection } from "@/components/nextSection/nextSection";

export default function Home() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLSpanElement>(null);
  const toggleButtonRef = useRef<HTMLSpanElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const nextSectionRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Memoized mouse move handler for both mouse and touch
  const handlePointerMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!overlayRef.current) return;
    
    let clientX, clientY;
    
    if (e instanceof TouchEvent) {
      if (!e.touches[0]) return;
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const x = Math.round((clientX / window.innerWidth) * 100);
    const y = Math.round((clientY / window.innerHeight) * 100);

    gsap.to(overlayRef.current, {
      "--x": `${x}%`,
      "--y": `${y}%`,
      duration: 0.3,
      ease: "sine.out",
    });
  }, []);

  // Handle scroll to next section
  const handleScrollDown = useCallback(() => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({
        behavior: "smooth"
      });
      
      // Optional: Close the overlay when scrolling down
      // handleToggleClick();
    }
  }, []);

  useGSAP(
    () => {
      window.addEventListener("mousemove", handlePointerMove);
      window.addEventListener("touchmove", handlePointerMove);
      
      return () => {
        window.removeEventListener("mousemove", handlePointerMove);
        window.removeEventListener("touchmove", handlePointerMove);
      };
    },
    { scope: overlayRef, dependencies: [handlePointerMove] }
  );

  // Enhanced toggle handler with all animations
  const handleToggleClick = useCallback(() => {
    if (!overlayRef.current || !buttonRef.current || !toggleButtonRef.current || !scrollIndicatorRef.current) return;

    // Button click animation
    gsap.to([buttonRef.current, toggleButtonRef.current], {
      scale: 0.9,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    });

    if (isOpen) {
      // Closing animation
      gsap.to(overlayRef.current, {
        clipPath: "circle(50px at var(--x, 50%) var(--y, 50%))",
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => setIsOpen(false),
        onStart: () => {
          gsap.to(overlayRef.current, {
            backdropFilter: "blur(0px)",
            duration: 0.4
          });
          // Hide scroll indicator when closing
          gsap.to(scrollIndicatorRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.3
          });
        }
      });
    } else {
      // Opening animation
      setIsOpen(true);
      gsap.to(overlayRef.current, 
        {
          clipPath: "circle(200% at var(--x, 50%) var(--y, 50%))",
          backdropFilter: "blur(4px)",
          duration: 1.2,
          ease: "expo.out",
          onStart: () => {
            gsap.set(overlayRef.current, { willChange: "clip-path, backdrop-filter" });
          },
          onComplete: () => {
            // Animate in the scroll indicator after overlay is fully open
            if (scrollIndicatorRef.current) {
              gsap.fromTo(scrollIndicatorRef.current, 
                { opacity: 0, y: 20 },
                { 
                  opacity: 1, 
                  y: 0,
                  duration: 0.6,
                  ease: "power2.out"
                }
              );
              
              // Create bouncing animation
              gsap.to(scrollIndicatorRef.current.querySelector(".arrow-down"), {
                y: 10,
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
              });
            }
          }
        }
      );
    }
  }, [isOpen]);

  // Arrow icon component
  const ArrowIcon = ({ color = "white" }: { color?: "white" | "black" }) => (
    <svg
      viewBox="0 0 62 24"
      fill="none"
      style={{
        fill: color
      }}
      xmlns="http://www.w3.org/2000/svg"
      className={`m-4`}
    >
      <path d="M61.0607 13.0607C61.6465 12.4749 61.6465 11.5251 61.0607 10.9393L51.5147 1.3934C50.9289 0.807612 49.9792 0.807612 49.3934 1.3934C48.8076 1.97918 48.8076 2.92893 49.3934 3.51472L57.8787 12L49.3934 20.4853C48.8076 21.0711 48.8076 22.0208 49.3934 22.6066C49.9792 23.1924 50.9289 23.1924 51.5147 22.6066L61.0607 13.0607ZM0 13.5H60V10.5H0V13.5Z" />
    </svg>
  );

  // Down arrow icon component
  const ArrowDownIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="arrow-down w-6 h-6 mt-2"
    >
      <path
        d="M12 5V19M12 19L19 12M12 19L5 12"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section className="relative">
      {/* Background content */}
      <section className="h-screen p-[3em] bg-white text-black">
        <h1 className="text-[5rem]">EXPECT SICK SH*T FROM HERE ON OUT.</h1>
        <span 
          ref={buttonRef}
          className="hover-btn w-[60px] h-[60px] rounded-full bg-black flex cursor-pointer mt-8"
        >
          <ArrowIcon color="white" />
        </span>
      </section>

      {/* Overlay section */}
      <section
        ref={overlayRef}
        style={{
          clipPath: "circle(50px at var(--x, 50%) var(--y, 50%))",
          willChange: "clip-path, backdrop-filter"
        }}
        className="h-screen p-[3em] bg-black text-white absolute top-0 left-0 w-full backdrop-blur-sm"
      >
        <h1 className="text-[5rem]">EXPECT SICK SH*T FROM HERE ON OUT.</h1>
        <span
          ref={toggleButtonRef}
          onClick={handleToggleClick}
          className="hover-btn2 w-[60px] h-[60px] rounded-full bg-white flex cursor-pointer mt-8"
        >
          <ArrowIcon color="black" />
        </span>

        {/* Scroll down indicator */}
        <div 
          ref={scrollIndicatorRef}
          onClick={handleScrollDown}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white opacity-0 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <span className="text-sm mb-2">SCROLL DOWN</span>
          <ArrowDownIcon />
        </div>
      </section>

      {/* Next section (example) */}
      <NextSection ref={nextSectionRef} />
    </section>
  );
}