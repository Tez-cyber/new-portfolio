"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import styles from "./portfolio.module.css";
import { projectDesc, projectTitles } from "@/lib/constants";


gsap.registerPlugin(ScrollTrigger);

export const PortfolioStickySection = () => {
  const stickyRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const serviceImgRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const currentCountRef = useRef<HTMLSpanElement>(null);
  const serviceCopyRef = useRef<HTMLParagraphElement>(null);


  useGSAP(() => {
    if (
      !stickyRef.current ||
      !indicatorRef.current ||
      !serviceImgRef.current ||
      !progressRef.current ||
      !servicesRef.current ||
      !currentCountRef.current ||
      !serviceCopyRef.current
    )
      return;

    const stickySection = stickyRef.current;
    const indicator = indicatorRef.current;
    const serviceImg = serviceImgRef.current;
    const currentCount = currentCountRef.current;
    const serviceCopy = serviceCopyRef.current;
    const services = servicesRef.current;
    const progressBar = progressRef.current;
    const stickyHeight = window.innerHeight * 8;
    const serviceHeight = 38;
    const imgHeight = 250;

    serviceCopy.textContent = projectDesc[0][0];
    let currentSplitText = new SplitType(serviceCopy, { types: "lines" });

    const measureContainer = document.createElement("div");
    measureContainer.style.cssText = `
        position: absolute;
        visibility: hidden;
        height: auto;
        width: auto;
        white-space: nowrap;
        font-size: 60px;
        font-weight: 600;
        text-transform: uppercase;
    `;
    document.body.appendChild(measureContainer);

    // Select all service elements inside services
    const serviceElements = services.querySelectorAll(`.${styles.service}`);
    const serviceWidths = Array.from(serviceElements).map((service) => {
      measureContainer.textContent =
        service.querySelector("p")?.textContent || "";
      return measureContainer.offsetWidth + 8;
    });

    document.body.removeChild(measureContainer);

    gsap.set(indicator, {
      width: 500,
      xPercent: -50,
      left: "50%",
    });

    const scrollPerService = window.innerHeight;
    let currentIndex = 0;

    const animateTextChange = (index: number) => {
      return new Promise((resolve) => {
        gsap.to(currentSplitText.lines, {
          opacity: 0,
          y: -20,
          duration: 0.5,
          stagger: 0.03,
          ease: "power3.inOut",
          onComplete: () => {
            currentSplitText.revert();

            const newText = projectDesc[index][0];
            serviceCopy.textContent = newText;

            currentSplitText = new SplitType(serviceCopy, {
              types: "lines",
            });

            gsap.set(currentSplitText.lines, {
              opacity: 0,
              y: 20,
            });

            gsap.to(currentSplitText.lines, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.03,
              ease: "power3.inOut",
              onComplete: resolve,
            });
          },
        });
      });
    };

    ScrollTrigger.create({
      trigger: stickySection,
      start: "top top",
      end: `${stickyHeight}px`,
      pin: true,
      onUpdate: async (self) => {
        const progress = self.progress;
        gsap.set(progressBar, { scaleY: progress });

        const scrollPosition = Math.max(0, self.scroll() - window.innerHeight);
        const activeIndex = Math.floor(scrollPosition / scrollPerService);

        if (
          activeIndex >= 0 &&
          activeIndex < serviceElements.length &&
          currentIndex !== activeIndex
        ) {
          currentIndex = activeIndex;

          serviceElements.forEach((service) => service.classList.remove(styles.active));
          serviceElements[activeIndex].classList.add(styles.active);

          await Promise.all([
            gsap.to(indicator, {
              y: activeIndex * serviceHeight,
              // width: serviceWidths[activeIndex],
              duration: 0.5,
              ease: "power3.inOut",
              overwrite: true,
            }),

            gsap.to(serviceImg, {
              y: -(activeIndex * imgHeight),
              duration: 0.5,
              ease: "power3.inOut",
              overwrite: true,
            }),

            gsap.to(currentCount, {
              innerText: activeIndex + 1,
              snap: { innerText: 1 },
              duration: 0.3,
              ease: "power3.inOut",
            }),

            animateTextChange(activeIndex),
          ]);
        }
      },
    });
  });

  return (
    <section className={`${styles.sticky}`} ref={stickyRef}>
      <div className={styles.col}>
        <div className={styles.services} ref={servicesRef}>
          <div className={styles.indicator} ref={indicatorRef}></div>
          {projectTitles.map((item, i) => (
            <div
              key={item}
              className={`${styles.service} ${i === 0 ? styles.active : ""}`}
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.serviceImgWrapper}>
          <div className={styles.serviceImg} ref={serviceImgRef}>
            <div className={styles.img}>
              <img src="/assets/img1.png" alt="" />
            </div>
            <div className={styles.img}>
              <img src="/assets/img2.png" alt="" />
            </div>
            <div className={styles.img}>
              <img src="/assets/img3.png" alt="" />
            </div>
            <div className={styles.img}>
              <img src="/assets/img4.png" alt="" />
            </div>
            <div className={styles.img}>
              <img src="/assets/img5.png" alt="" />
            </div>
            {/* <div className={styles.img}>
              <img src="/assets/img6.jpeg" alt="" />
            </div>
            <div className={styles.img}>
              <img src="/assets/img7.jpeg" alt="" />
            </div> */}
          </div>
        </div>
        <div className={styles.serviceCopy}>
          <p ref={serviceCopyRef}>{projectDesc[0][0]}</p>
        </div>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progress} ref={progressRef}></div>
      </div>
      <div className={styles.index}>
        <span className={styles.currentCount} ref={currentCountRef}>
          1
        </span>
        <span className={styles.seperator}></span>
        <span className={styles.totalCount}>{projectTitles.length}</span>
      </div>
    </section>
  );
};