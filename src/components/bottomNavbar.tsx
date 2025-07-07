"use client";
import { useState, useRef, Dispatch, SetStateAction } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [hideNav, setHideNav] = useState(false);
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const lastYRef = useRef(0);
  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setHideNav(difference > 0);
      lastYRef.current = y;
    }
  });

  // NAVBAR SLIDE IN
  const navSlideIn = {
    start: {
      y: "-100%",
      opacity: 0,
    },
    anim: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: "100%",
    },
    hidden: {
      y: "-100%",
    },
  };

  return (
    <>
      <motion.nav
        variants={navSlideIn}
        initial="start"
        animate={hideNav ? "hidden" : "anim"}
        exit="exit"
        transition={{
          duration: 0.75,
        }}
        className={`
          ${pathname === "/about" ? "z-auto" : "z-10"}
          fixed bottom-[20px] left-1/2 transform -translate-x-1/2
          h-[60px] text-darkblue flex items-center justify-center 
        `}
      >
        <div className="py-2 px-5 text-bgPrimary rounded-2xl">
          {/* Nav links */}
          <SlideTabs />
        </div>
      </motion.nav>
    </>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 
             bg-white p-1"
    >
      <Tab href="/" setPosition={setPosition}>
        Home
      </Tab>
      <Tab href="/about" setPosition={setPosition}>
        About
      </Tab>
      <Tab href="/portfolio" setPosition={setPosition}>
        Portfolio
      </Tab>
      <Cursor position={position} />
    </ul>
  );
};

type TabProps = {
  children: React.ReactNode;
  href: string;
  setPosition: Dispatch<SetStateAction<Position>>;
};
const Tab = ({ children, href, setPosition }: TabProps) => {
  const ref = useRef<null | HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-3
            py-1.5 text-xs uppercase text-white mix-blend-difference
            md:px-5 md:py-3 md:text-base
        "
    >
      <Link href={href}>{children}</Link>
    </li>
  );
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full text-textPrimary bg-bgPrimary md:h-12"
    />
  );
};
