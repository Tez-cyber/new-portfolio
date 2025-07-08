"use client";
import { FlipLink } from "@/components/RevealLinks";
import localFont from "next/font/local";
import Image from "next/image";

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
            <ProfileImage />
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
    <div className={`${className} relative h-[150px] bg-textPrimary text-bgPrimary p-5 rounded-2xl md:h-auto`}>
      <span className="text-sm block leading-[1.3]">
        Have a project <br />
        in mind ?
      </span>
      <div className=" bottom-[10px] left-[5px] absolute">
        <FlipLink href="" className="text-4xl font-semibold md:block">
          Contact
        </FlipLink>
        {/* <a href="" className="text-3xl font-semibold md:hidden">Contact</a> */}
      </div>
    </div>
  );
};

const Socials = ({ className }: GeneralProps) => {
  return (
    <div className={`${className} bg-blue-200 p-20 rounded-2xl`}>socials</div>
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
