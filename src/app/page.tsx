"use client";
import localFont from "next/font/local";
import Link from "next/link";
import { FlipLink } from "@/components/RevealLinks";


const switzer = localFont({
  src: [
    {
      path: "./fonts/switzer/fonts/Switzer-BlackItalic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-blackItalic",
});

export default function Home() {
  return (
    <section
      className={`bg-bgPrimary text-textPrimary w-screen z-30 h-screen `}
    >
      {/* heading */}
      <h2
        style={{
          fontVariationSettings: '"wght" 900, "ital" 1',
          fontFamily: `var(${switzer.variable})`,
          fontSize: "clamp(48px, 8vw, 110px)",
          lineHeight: 1,
        }}
        className="flex text-center items-baseline gap-2 pt-5 md:pt-0 md:pl-7"
      >
        <i>FRONTEND DEVELOPER</i>
        {/*  fullstop */}
        <span
          className="bg-textPrimary rounded-full"
          style={{
            width: "clamp(12px, 1.5vw, 16px)",
            height: "clamp(12px, 1.5vw, 16px)",
            display: "inline-block",
            verticalAlign: "middle",
          }}
        />
      </h2>
      {/* Bottom section */}
      <div className="flex flex-col px-10 py-6 justify-between items-center lg:flex-row">
        <div className="lg:w-[50%]">
          <video src="/port.mp4" autoPlay muted playsInline loop />
        </div>
        <div className=" text-gray-400 leading-[1.7] text-xl lg:w-[50%] md:pl-10">
          <p>
            I&apos;m <span className="text-[#ffffe3] font-bold">Salami Azeez</span>,
            a passionate frontend developer specializing in building responsive,
            performant, and accessible web applications.
          </p>
          {/* Navigation */}
          <div className="mt-5 flex items-center gap-3">
            <span className="rounded-3xl border-[1.5px] border-solid border-textPrimary px-4 p-3">
              <FlipLink
                href=""
                className="text-base text-textPrimary "
              >
                See my projects
              </FlipLink>
            </span>
            <span
              className="text-base relative inline-block before:content-[''] before:absolute before:w-0 
              before:h-[1.5px] before:bg-textPrimary before:bottom-0 before:left-0 before:mt-2 hover:before:w-full 
              before:transition-all before:duration-300"
            >
              <Link href="/about">Know me</Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
