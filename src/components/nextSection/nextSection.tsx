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
      className={`h-screen overflow-hidden bg-[#10100e] text-[#ffffe3]`}
      {...props}
    >
      {/* heading */}
      <h2
        style={{
          fontVariationSettings: '"wght" 900, "ital" 1',
          fontFamily: "var(--font-blackItalic)",
        }}
        className="text-[110px] leading-[1]"
      >
        <i>FRONTEND DEVELOPER</i>
      </h2>
      {/* Bottom section */}
      <div className="flex px-10 py-6 justify-between items-center">
        <div className="w-[50%]   ">
          <video src="/port.mp4" autoPlay muted playsInline loop />
        </div>
        <div className="pl-10 text-gray-400 leading-[1.7] text-xl w-[50%]">
          <p>
            I'm <span className="text-[#ffffe3] font-bold">Salami Azeez</span>, a passionate frontend developer specializing in
            building responsive, performant, and accessible web applications.
          </p>
        </div>
      </div>
    </section>
  );
});
