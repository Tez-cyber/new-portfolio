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
    <section className="bg-[#0d0d0d] text-black w-full md:w-screen min-h-screen p-5">
      <div className="grid gap-4 h-full lg:grid-cols-[70%_28.5%] border-[2px] border-solid border-textPrimary/30 p-4 rounded-3xl">
        {/* First grid */}
        <div className="rounded-xl flex gap-4 flex-col">
          {/* Parent grid for top section */}
          <div className="rounded-xl lg:h-[205px] grid gap-4 lg:grid-cols-[48%_24%_24%]">
            {/* First */}
            <div className="bg-green-200 p-20 rounded-2xl">Intro</div>
            {/* Second */}
            {/* Display for md devices */}
            <div className="grid gap-4 md:grid-cols-[30%_68%] lg:hidden">
              <div className="bg-green-200 p-20 rounded-2xl hidden md:block">Image Medium</div>
              <div className="bg-red-200 p-20 rounded-2xl">About Medium</div>
            </div>
            <div className="bg-red-200 p-20 rounded-2xl lg:block">stack</div>
            {/* Third */}
            {/* Display for medium */}
            <div className="hidden md:grid lg:hidden grid-cols-[49%_49%] gap-4 ">
              <div className="bg-red-200 p-20 rounded-2xl">stack</div>
              <div className="bg-blue-200 p-20 rounded-2xl">contact</div>
            </div>
            {/* Display for large */}
            <div className="bg-blue-200 p-20 rounded-2xl md:hidden lg:block">contact Large</div>
          </div>
          {/* Parent for bottom grid */}
          <div className="lg:h-[250px] rounded-xl gap-4 hidden lg:grid lg:grid-cols-[24%_48%_24%]">
            {/* First */}
            <div className="bg-green-200 p-20 rounded-2xl">Image Large</div>
            {/* Second */}
            <div className="bg-red-200 p-20 rounded-2xl">About</div>
            {/* Third */}
            <div className="bg-blue-200 p-20 rounded-2xl">socials large</div>
          </div>
        </div>
        {/* Second grid */}
        <div className="bg-blue-200 p-20 rounded-2xl">Portfolio</div>
        <div className="bg-blue-200 p-20 rounded-2xl lg:hidden">socials medium</div>
      </div>
    </section>
  );
}


const Contact = () => {
  return (
    <></>
  )
}
const Socials = () => {
  return (
    <></>
  )
}