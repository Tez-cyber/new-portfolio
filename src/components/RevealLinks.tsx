import { motion } from "motion/react";

interface FlipLinkProps {
  children: string;
  href?: string;
  className?: string;
}

const DURATION = 0.25;
const STAGGER = 0.025;

export const FlipLink = ({ children, href, className }: FlipLinkProps) => {
  // Split into individual characters (including spaces)
  const chars = [...children];

  return (
    <motion.a
      href={href}
      initial="initial"
      whileHover="hovered"
      className={`relative block overflow-hidden ${className || ""}`}
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
            className="inline-block whitespace-pre" // ← Preserves spaces!
          >
            {char}
          </motion.span>
        ))}
      </div>

      {/* Flipped text layer */}
      <div className="absolute inset-0">
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
            className="inline-block whitespace-pre" // ← Preserves spaces!
          >
            {char}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};