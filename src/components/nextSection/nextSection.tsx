import { forwardRef } from "react";
import localFont from 'next/font/local';
// import switzerBold from ''

const switzer = localFont({
  src: [
    {
      path: '../../app/fonts/switzer/fonts/Switzer-BlackItalic.woff2',
      weight: '100 900',
      style: 'italic',
    },
  ],
  variable: '--font-blackItalic',
});

export const NextSection = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    return (
      <section
        ref={ref}
        className={`h-screen bg-[#10100e] text-[#ffffe3]`}
        {...props}
      >
        <h2 
          style={{
            fontVariationSettings: '"wght" 900, "ital" 1',
            fontFamily: 'var(--font-blackItalic)',
          }}
          className="text-[110px] leading-[1]">
            <i>FRONTEND DEVELOPER</i>
          </h2>
      </section>
    );
  }
);