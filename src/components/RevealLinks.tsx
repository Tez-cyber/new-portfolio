import { motion } from "motion/react";
import React from "react";

interface FlipLinkProps {
  children: string;
  href?: string;
  className?: string;
  style?: React.CSSProperties;
}

const DURATION = 0.25;
const STAGGER = 0.025;

export const FlipLink = ({ children, href, className, style }: FlipLinkProps) => {
  // Split into individual characters (including spaces)
  const chars = [...children];

  return (
    <motion.a
      href={href}
      style={style}
      initial="initial"
      whileHover="hovered"
      className={`relative block overflow-hidden px-4 ${className || ""}`}
    >
      {/* Original text layer */}
      <div>
        {chars.map((char, i) => (
          <motion.span
            key={`orig-${i}`}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block whitespace-pre" 
          >
            {char}
          </motion.span>
        ))}
      </div>

      {/* Flipped text layer */}
      <div className="absolute inset-0 px-4">
        {chars.map((char, i) => (
          <motion.span
            key={`flipped-${i}`}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block whitespace-pre"
          >
            {char}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};