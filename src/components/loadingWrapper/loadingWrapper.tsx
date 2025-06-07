"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";
import "./loading.css"; 

gsap.registerPlugin(CustomEase);

export const LoadingWrapper = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      CustomEase.create("hop", "0.9, 0, 0.1, 1");

      const tl = gsap.timeline({
        delay: 0.3,
        defaults: {
          ease: "hop",
        },
      });

      const counts = gsap.utils.toArray<HTMLElement>(".count");

      counts.forEach((count, index) => {
        const digits = count.querySelectorAll(".digit h1");
        tl.to(
          digits,
          {
            y: "0%",
            duration: 1,
            stagger: 0.075,
          },
          index * 1
        );

        if (index < counts.length) {
          tl.to(
            digits,
            {
              y: "-200%",
              duration: 1,
              stagger: 0.075,
            },
            index * 1 + 1
          );
        }
      });

      tl.to(".spinner", {
        opacity: 0,
        duration: 0.3,
      });

      tl.to(
        ".word h1",
        {
          y: "0%",
          duration: 1,
        },
        "<"
      );

      tl.to(".divider", {
        scaleY: "100%",
        duration: 1,
        onComplete: () => {
          gsap.to(".divider", {
            opacity: 0,
            duration: 0.4,
            delay: 0.3,
          });
        },
      });

      tl.to("#word-1 h1", {
        y: "100%",
        duration: 1,
        delay: 0.3,
      });

      tl.to(
        "#word-2 h1",
        {
          y: "-100%",
          duration: 1,
        },
        "<"
      );

      tl.to(".block", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        stagger: 0.1,
        delay: 0.75,
      });
    },
    { scope: containerRef }
  );
  return (
    <div ref={containerRef} className="container">
      <div className="loader">
        <div className="overlay">
          <div className="block"></div>
          <div className="block"></div>
        </div>

        <div className="intro-logo">
          <div className="word" id="word-1">
            <h1>
              <span>Salami</span>
            </h1>
          </div>
          <div className="word" id="word-2">
            <h1>
              <span>Azeez</span>
            </h1>
          </div>
        </div>
        {/* divider */}
        <div className="divider"></div>

        {/* spinner */}
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>

        {/* counter */}
        <div className="counter">
          <div className="count">
            <div className="digit">
              <h1>0</h1>
            </div>
            <div className="digit">
              <h1>0</h1>
            </div>
          </div>
          <div className="count">
            <div className="digit">
              <h1>2</h1>
            </div>
            <div className="digit">
              <h1>7</h1>
            </div>
          </div>
          <div className="count">
            <div className="digit">
              <h1>6</h1>
            </div>
            <div className="digit">
              <h1>5</h1>
            </div>
          </div>
          <div className="count">
            <div className="digit">
              <h1>9</h1>
            </div>
            <div className="digit">
              <h1>8</h1>
            </div>
          </div>
          <div className="count">
            <div className="digit">
              <h1>9</h1>
            </div>
            <div className="digit">
              <h1>9</h1>
            </div>
          </div>
        </div>
      </div>
      {/* container */}
      {children}
    </div>
  );
};
