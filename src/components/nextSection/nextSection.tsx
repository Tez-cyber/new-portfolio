import { forwardRef } from "react";
import localFont from "next/font/local";
// import switzerBold from ''

const switzer = localFont({
  src: [
    {
      path: "../../app/fonts/switzer/fonts/Switzer-BlackItalic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-blackItalic",
});

export const NextSection = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>((props, ref) => {
  return (
    <section
      ref={ref}
      className={`h-full bg-bgPrimary text-textPrimary w-full`}
      {...props}
    >
      {/* heading */}
      <h2
        style={{
          fontVariationSettings: '"wght" 900, "ital" 1',
          fontFamily: "var(--font-blackItalic)",
          fontSize: "clamp(48px, 8vw, 110px)", // Responsive font size
          lineHeight: 1,
          // letterSpacing: "-0.02em", // Optional: improves readability at large sizes
        }}
        className="flex text-center items-baseline gap-2 pt-5 md:pt-0"
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
      <div className="flex flex-col px-10 py-6 justify-between items-center md:flex-row">
        <div className="lg:w-[50%]">
          <video src="/port.mp4" autoPlay muted playsInline loop />
        </div>
        <div className=" text-gray-400 leading-[1.7] text-xl lg:w-[50%] md:pl-10">
          <p>
            I'm <span className="text-[#ffffe3] font-bold">Salami Azeez</span>,
            a passionate frontend developer specializing in building responsive,
            performant, and accessible web applications.
          </p>
        </div>
      </div>
    </section>
  );
});
