import { section } from "motion/react-client";
import { FlipLink } from "./RevealLinks";

export const Contact = () => {
  return (
    <section className="relative h-screen bg-white text-black p-20">
        {/* top left */}
      <div className="absolute top-[50px] left-[50px]">
        <div className="relative">
          <span className="block w-1 h-10 bg-black"></span>
          <span className="absolute top-0 block w-1 h-10 bg-black rotate-90"></span>
        </div>
      </div>
      {/* top right */}
      <div className="absolute top-[50px] right-[50px]">
        <div className="relative">
          <span className="block w-1 h-10 bg-black"></span>
          <span className="absolute top-0 block w-1 h-10 bg-black rotate-90"></span>
        </div>
      </div>
      {/* bottom left  */}
      <div className="absolute bottom-[50px] left-[50px]">
        <div className="relative">
          <span className="block w-1 h-10 bg-black"></span>
          <span className="absolute top-0 block w-1 h-10 bg-black rotate-90"></span>
        </div>
      </div>
      {/* bottom right */}
      <div className="absolute bottom-[50px] right-[50px]">
        <div className="relative">
          <span className="block w-1 h-10 bg-black"></span>
          <span className="absolute top-0 block w-1 h-10 bg-black rotate-90"></span>
        </div>
      </div>
      {/* Main content */}
      <main className="flex items-center justify-center">
        <FlipLink
            href=""
            className=""
        >
            Get in touch
        </FlipLink>
      </main>
    </section>
  );
};
