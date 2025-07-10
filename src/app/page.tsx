"use client";
import { FlipLink } from "@/components/RevealLinks";
import { mailtoLink } from "@/lib/constants";
import Image from "next/image";
import { useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaArrowRightLong, FaXTwitter } from "react-icons/fa6";
import { MdOutlineContentCopy } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

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
            <div className="bg-tipsyDark rounded-2xl p-10">
              <div className="flex gap-3 items-center text-3xl">
                <span>Hello I'm Azeez </span>
                <span className="w-5 h-[2px] hidden bg-textPrimary md:block" />
              </div>
              <span className="text-textGrey block text-lg text pt-5 md:flex">
                Lead developer at{" "}
                <a
                  className="underline transition-all duration-300 ease-in-out hover:text-white md:hidden"
                  target="_blank"
                  href="https://ns-express.netlify.app/"
                >
                  Nsexpress,
                </a>
                {/* For mobile */}
                <span className="pl-2 md:hidden">based in Nigeria</span>
                <FlipLink
                  href="/your-link-here"
                  className="hidden md:block -translate-x-3 hover:text-white relative after:content-[''] after:absolute after:bottom-0 after:left-[15px] after:h-[2px] after:w-[89px] after:bg-textGrey after:transition-all after:duration-300"
                >
                  Nsexpress
                </FlipLink>
                {/* based in Nigeria */}
              </span>
              <span className="text-textGrey text-lg hidden md:block">
                based in Nigeria
              </span>
            </div>
            {/* Second */}
            {/* Display for md devices */}
            <div className="md:grid gap-4 md:grid-cols-[30%_68%] lg:hidden">
              <ProfileImage className="hidden md:block" />
              <About />
            </div>
            <Stack className="md:hidden lg:block" />
            {/* Third */}
            {/* Display for medium */}
            <div className="hidden md:grid lg:hidden grid-cols-[49%_49%] gap-4 ">
              <Stack />
              <Contact />
            </div>
            {/* Display for large and small */}
            <Contact className="md:hidden lg:block" />
          </div>
          {/* Parent for bottom grid ==== large screen */}
          <div className="lg:h-[250px] rounded-xl gap-4 hidden lg:grid lg:grid-cols-[24%_48%_24%]">
            {/* First */}
            <ProfileImage />
            {/* Second */}
            <About />
            {/* Third */}
            <Socials />
          </div>
        </div>
        {/* Second grid */}
        <div className="bg-tipsyDark text-textPrimary px-10 py-5 rounded-2xl">
          <div className="">
            <a href="" className="flex items-center justify-between">
              <p>Nsexpress</p>
              <FaArrowRightLong />
            </a>
            <div className="mt-5">
              <video
                src="/port.mp4"
                className="rounded-xl"
                autoPlay
                muted
                playsInline
                loop
              />
            </div>
          </div>
          {/* Turftriibe */}
          <span className="mt-5 rounded-2xl w-full h-[1px] bg-textPrimary block" />
          <div className="my-5">
            <a href="" className="flex items-center justify-between">
              <p>Turftriibe</p>
              <FaArrowRightLong />
            </a>
          </div>
          {/* Inks and pixels */}
          <span className="mt-5 rounded-2xl w-full h-[1px] bg-textPrimary block" />
          <div className="my-5">
            <a href="" className="flex items-center justify-between">
              <p>Inks and pixels</p>
              <FaArrowRightLong />
            </a>
          </div>
          {/* See more projects */}
          <div className="flex justify-center">
            <span className="rounded-3xl border-[1.5px] border-solid border-textPrimary px-4 p-3 hover:bg-textPrimary hover:text-tipsyDark duration-300 transition-all ease-in-out">
              <FlipLink href="/portfolio" className="text-base">
                See my projects
              </FlipLink>
            </span>
          </div>
        </div>
        <Socials className="lg:hidden" />
      </div>
    </section>
  );
}

interface GeneralProps {
  className?: string;
}
const Contact = ({ className }: GeneralProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("salamitopeazeez@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`${className} relative h-[150px] bg-textPrimary text-bgPrimary p-5 rounded-2xl md:h-auto`}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm block leading-[1.3]">
          Have a project <br />
          in mind ?
        </span>
        <button
          className="relative p-1 cursor-pointer rounded transition-colors"
          onClick={handleCopy}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          aria-label="Copy text"
        >
          <MdOutlineContentCopy className="text-xl" />

          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute -top-8 right-0 bg-black/60 text-white text-md px-3 py-2 rounded whitespace-nowrap">
              {copied ? "Copied!" : "Click to copy"}
            </div>
          )}
        </button>
      </div>
      <div className=" bottom-[10px] left-[5px] absolute">
        <FlipLink href={mailtoLink} className="text-4xl font-semibold md:block">
          Contact
        </FlipLink>
        {/* <a href="" className="text-3xl font-semibold md:hidden">Contact</a> */}
      </div>
    </div>
  );
};

const Socials = ({ className }: GeneralProps) => {
  const iconWrapper =
    "border-[1.5px] transition-all duration-300 ease-in-out border-solid border-textPrimary rounded-md p-3";
  return (
    <div
      className={`${className} bg-tipsyDark flex gap-5 lg:gap-0 lg:flex-col items-center justify-center rounded-2xl`}
    >
      {/* First section */}
      <div className="flex gap-5 my-2">
        <span className={`${iconWrapper} hover:bg-[#4d6afb]`}>
          <a target="_blank" href="https://x.com/tezcyber" className="">
            <FaXTwitter className="text-2xl" />
          </a>
        </span>
        <span className={`${iconWrapper} hover:bg-[#ff3131]`}>
          <a
            target="_blank"
            href="https://www.instagram.com/tez_cyber/"
            className=""
          >
            <FaInstagram className="text-2xl" />
          </a>
        </span>
      </div>
      {/* second section */}
      <div className="flex gap-5 my-2">
        <span className={`${iconWrapper} hover:bg-[#0a66c2]`}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/azeezsalami/"
            className=""
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </span>
        <span className={`${iconWrapper} hover:bg-[#0fc145]`}>
          <a target="_blank" href={mailtoLink} className="">
            <TfiEmail className="text-2xl" />
          </a>
        </span>
      </div>
    </div>
  );
};

const ProfileImage = ({ className }: GeneralProps) => {
  return (
    <div className={`${className} rounded-2xl`}>
      <Image
        src="/port.png"
        alt="Main portfolio image"
        width={1200}
        height={800}
        className="w-full h-full object-cover rounded-3xl"
        priority
      />
    </div>
  );
};

const About = ({ className }: GeneralProps) => {
  return (
    <div className={`${className} bg-tipsyDark p-10 rounded-2xl`}>
      <span className="uppercase text-textGrey tracking-widest">about</span>
      <p className="pt-5 text-lg font-semibold text-textPrimary/80 md:text-xl">
        Turning ideas into functional, beautiful systems—one line of code at a
        time.{" "}
      </p>
    </div>
  );
};

const Stack = ({ className }: GeneralProps) => {
  return (
    <div className={`${className} bg-tipsyDark p-10 rounded-2xl`}>
      stack
    </div>
  );
};


