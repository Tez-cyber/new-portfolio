import Image from "next/image";
import { forwardRef } from "react";

export const NextSection = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>((props, ref) => {
  return (
    <main {...props} ref={ref} className="bg-black w-screen px-10 md:p-20">
      {/* top section */}
      <section className="flex flex-col lg:flex-row">
        {/* Left section */}
        <div className="md:w-full lg:w-[60%]">
          <h1
            style={{
              fontSize: "clamp(48px, 10vw, 200px)",
            }}
            className="italic uppercase"
          >
            about
          </h1>
          {/* Desc */}
          <div className="text-gray-400 text-2xl">
            <p className="lg:w-[70%] md:pt-10">
              I&apos;m passionate about building innovative, scalable products
              that offer outstanding user experiences and solve real-world
              problems across diverse industries.
            </p>
            <p className="pt-10 md:w-[70%]">
              I&apos;m{" "}
              <span className="text-[#ffffe3] font-bold">Salami Azeez</span>, a
              full-stack developer passionate about building robust
              applications. My interests also extend to the innovative world of
              web3 development, where I&apos;m keen to explore and contribute.
            </p>
          </div>
        </div>
        {/* Right Section === img */}
        <div className="flex mt-10 lg:w-[40%] lg:justify-end">
          <div className="w-[90%] h-[90%] overflow-hidden">
            <Image
              src="/main.png"
              alt="Main portfolio image"
              width={1200} 
              height={800} 
              className="w-full h-full object-cover"
              priority
            />
          </div>
          {/* <img className="object-cover size-[90%]" src="/main.png" alt="" /> */}
        </div>
      </section>
      {/* second section */}
      <section className="mt-5">
        <h1
          style={{
            fontSize: "clamp(48px, 7vw, 200px)",
          }}
        >
          What I do
        </h1>
        <div className="flex flex-col justify-between lg:items-end lg:flex-row">
          <p className="text-gray-400 md:text-3xl md:leading-[1.5] md:mt-10 lg:w-[60%]">
            I specialize in TypeScript and JavaScript, building robust frontend
            architectures with React and Next.
            <span className="block my-3">
              My expertise also covers backend development and the rapidly
              evolving field of web3 frontend development.
            </span>
            I leverage CSS for styling and animations, and GSAP for seamless
            dynamic interactions
          </p>
          {/* My skills */}
          <div className="py-10 lg:py-0">
            <h2 className="text-sm text-gray-400">Skills</h2>
            {/*  */}
            <span className="text-sm">
              HTML, CSS, Tailwind css, Typescript, JavaScript <br />
              Reactjs, Nextjs, GSAP, motion, Express, MongoDB {""}
              <span className="text-gray-400">and more...</span>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
});

NextSection.displayName = 'NextSection';
