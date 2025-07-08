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
    <section className="bg-[#0d0d0d] text-black w-screen min-h-screen p-5">
      <div className="grid gap-4 h-full grid-cols-[70%_28.5%] border-[2px] border-solid border-textPrimary/30 p-4 rounded-3xl">
        {/* First grid */}
        <div className="rounded-xl flex gap-4 flex-col">
          {/* Parent grid for top section */}
          <div className="rounded-xl h-[205px] grid gap-4 grid-cols-[48%_24%_24%]">
            {/* First */}
            <div className="bg-green-200 p-20 rounded-2xl">Intro</div>
            {/* Second */}
            <div className="bg-red-200 p-20 rounded-2xl">stack</div>
            {/* Third */}
            <div className="bg-blue-200 p-20 rounded-2xl">contact</div>
          </div>
          {/* Parent for bottom grid */}
          <div className="h-[250px] rounded-xl gap-4 grid grid-cols-[24%_48%_24%]">
            {/* First */}
            <div className="bg-green-200 p-20 rounded-2xl">Image</div>
            {/* Second */}
            <div className="bg-red-200 p-20 rounded-2xl">About</div>
            {/* Third */}
            <div className="bg-blue-200 p-20 rounded-2xl">socials</div>
          </div>
        </div>
        {/* Second grid */}
        <div className="bg-blue-200 p-20 rounded-2xl">Portfolio</div>
      </div>
    </section>
  );
}
