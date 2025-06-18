import { forwardRef } from "react";

export const NextSection = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
    (props, ref) => {
        return (
            <section 
                {...props}
                ref={ref}
            >
                This is th next section
            </section>
        )
    }
)