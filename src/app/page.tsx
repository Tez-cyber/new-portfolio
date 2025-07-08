"use client";
import localFont from "next/font/local";
import Link from "next/link";
import noise from "./noise.gif"
// import { FlipLink } from "@/components/RevealLinks";

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
    <section className="bg-[#0d0d0d] text-textPrimary w-full md:w-screen min-h-screen p-5">
      <div className="noise"></div>
      <div className="grid gap-4 h-full lg:grid-cols-[70%_28.5%] border-[2px] border-solid border-textPrimary/30 p-4 rounded-3xl">
        {/* First grid */}
        <div className="rounded-xl flex gap-4 flex-col">
          {/* Parent grid for top section */}
          <div className="rounded-xl lg:h-[205px] grid gap-4 lg:grid-cols-[48%_24%_24%]">
            {/* First */}
            <div className="bg-[#191919] rounded-2xl p-10">
              <div className="flex gap-3 items-center text-3xl">
                <span>Hello I'm Azeez </span>
                <span className="w-5 h-[2px] block bg-textPrimary" />
              </div>
              <span className="text-[#676767] text-lg text pt-5 block">
                Lead developer at <a className="underline transition-all duration-300 ease-in-out hover:text-white" target="_blank" href="https://ns-express.netlify.app/">Nsexpress</a>, <br />
                based in Nigeria
              </span>
            </div>
            {/* Second */}
            {/* Display for md devices */}
            <div className="hidden md:grid gap-4 md:grid-cols-[30%_68%] lg:hidden">
              <Image className="" />
              <About />
            </div>
            <div className="bg-red-200 p-20 rounded-2xl lg:block">stack</div>
            {/* Third */}
            {/* Display for medium */}
            <div className="hidden md:grid lg:hidden grid-cols-[49%_49%] gap-4 ">
              <div className="bg-red-200 p-20 rounded-2xl">stack</div>
              <Contact />
            </div>
            {/* Display for large and small */}
            <Contact className="md:hidden lg:block" />
          </div>
          {/* Parent for bottom grid ==== large screen */}
          <div className="lg:h-[250px] rounded-xl gap-4 hidden lg:grid lg:grid-cols-[24%_48%_24%]">
            {/* First */}
            <Image />
            {/* Second */}
            <About />
            {/* Third */}
            <Socials />
          </div>
        </div>
        {/* Second grid */}
        <div className="bg-blue-200 p-20 rounded-2xl">Portfolio</div>
        <Socials className="lg:hidden" />
      </div>
    </section>
  );
}

interface GeneralProps {
  className?: string;
}
const Contact = ({ className }: GeneralProps) => {
  return (
    <div className={`${className} bg-blue-200 p-20 rounded-2xl`}>Contact</div>
  );
};

const Socials = ({ className }: GeneralProps) => {
  return (
    <div className={`${className} bg-blue-200 p-20 rounded-2xl`}>socials</div>
  );
};

const Image = ({ className }: GeneralProps) => {
  return (
    <div className={`${className} bg-blue-200 p-20 rounded-2xl`}>Image</div>
  );
};

const About = ({ className }: GeneralProps) => {
  return (
    <div className={`${className} bg-blue-200 p-20 rounded-2xl`}>Image</div>
  );
};

