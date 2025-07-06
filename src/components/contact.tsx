import { FlipLink } from "./RevealLinks";

export const Contact = () => {
  //  Mail
  const email = "salamitopezeez@gmail.com";
  const subject = "Interest in Collaboration - [Your Project]";
  const body = `Hello, I'm [Your Name],

        I saw your portfolio and wanted to discuss a potential project.

        Here's what I need:
        - [Brief description]
        - Timeline: [When needed]
        - Budget: [Range]

        Let me know if you're available for a chat!

        Best,
        [Your Name]
        [Your Email]
        `;

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <section className="relative h-screen flex items-center justify-center w-screen bg-white text-black p-20">
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
        <p className="text-center uppercase">
          Open to both full-time employment and <br />
          freelance engagements.
        </p>
        {/* Medium screens */}
        <FlipLink
          href={mailtoLink}
          className="uppercase italic tracking-tighter font-extrabold hidden md:block"
          style={{
            fontSize: "clamp(48px, 8vw, 200px)",
          }}
        >
          Get in touch
        </FlipLink>
        {/* small screens */}
        <a
          href={mailtoLink}
          className="uppercase italic whitespace-nowrap px-2 tracking-tighter text-center leading-[1] font-extrabold block md:hidden"
          style={{
            fontSize: "clamp(48px, 8vw, 200px)",
          }}
        >
          Get in touch
        </a>
        {/*  */}
        <div className="">
          {/*  */}
          <div className="absolute flex gap-3 bottom-[80px] left-[70px] md:left-[100px]">
            <span className="rounded-3xl border-[1.5px] border-solid border-black px-4 py-2">
              <FlipLink
                href="https://x.com/tezcyber"
                className="uppercase tracking-tighter"
                target="_blank"
              >
                twitter
              </FlipLink>
            </span>
            <span className="rounded-3xl border-[1.5px] border-solid border-black px-4 py-2">
              <FlipLink
                href="https://www.linkedin.com/in/azeezsalami"
                className="uppercase tracking-tighter"
                target="_blank"
              >
                Linkedin
              </FlipLink>
            </span>
          </div>
        </div>
      </main>
    </section>
  );
};
