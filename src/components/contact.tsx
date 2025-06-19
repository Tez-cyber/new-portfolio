import { FlipLink } from "./RevealLinks";

export const Contact = () => {
  return (
    <section className="relative h-screen flex items-center justify-center w-full bg-white text-black p-20">
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
      <main className="">
        {/* desc */}
        <p className="text-center uppercase italic">
          Open to both full-time employment and <br />
          freelance engagements.
        </p>
        <FlipLink
          href=""
          className="uppercase italic tracking-tighter font-extrabold"
          style={{
            fontSize: "clamp(48px, 8vw, 200px)",
          }}
        >
          Get in touch
        </FlipLink>
      </main>
    </section>
  );
};
