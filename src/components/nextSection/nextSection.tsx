import { forwardRef } from "react";

export const NextSection = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>((props, ref) => {
  return (
    <main {...props} ref={ref} className="bg-black md:p-20">
      {/* top section */}
      <section className="flex">
        <div className="md:w-[60%]">
          <h1
            style={{
              fontSize: "clamp(48px, 10vw, 200px)",
            }}
            className="italic uppercase"
          >
            about
          </h1>
          {/* Desc */}
          <div className="text-gray-400 text-lg">
            <p className="md:w-[70%] md:pt-10">
              I'm passionate about building innovative, scalable products that
              offer outstanding user experiences and solve real-world problems
              across diverse industries.
            </p>
            <p className="md:w-[70%] md:pt-10">
              I&apos;m{" "}
              <span className="text-[#ffffe3] font-bold">Salami Azeez</span>, a
              full-stack developer passionate about building robust
              applications. My interests also extend to the innovative world of
              web3 development, where I'm keen to explore and contribute.
            </p>
          </div>
        </div>
        <div className="w-[40%] flex justify-end md:mt-10">
          <img className="object-cover size-[90%]" src="/main.png" alt="" />
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
        <div className="flex justify-between items-end">
          <p className="text-gray-400 md:text-3xl md:w-[60%] md:leading-[1.5] md:mt-10">
            I specialize in TypeScript and JavaScript, building robust frontend
            architectures with React and Next.
            <span className="block my-3">
              My expertise also covers backend development and the rapidly
              evolving field of web3 frontend development.
            </span>
            I leverage CSS for styling and animations, and GSAP for
            seamless dynamic interactions
          </p>
          {/* My skills */}
          <div>
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
