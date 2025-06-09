import { forwardRef } from "react";


export const NextSection = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    return (
      <section
        ref={ref}
        className={`h-screen p-[3em] bg-gray-100 text-black flex items-center justify-center`}
        {...props}
      >
        <h2 className="text-4xl">NEXT SECTION CONTENT</h2>
      </section>
    );
  }
);