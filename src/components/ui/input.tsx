import * as React from "react";
import { cn } from "../../utils/cn";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        const radius = 80;
        const [visible, setVisible] = React.useState(false);

        const mouseX = useMotionValue(0);
        const mouseY = useMotionValue(0);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function handleMouseMove({ currentTarget, clientX, clientY }: any) {
            const { left, top } = currentTarget.getBoundingClientRect();

            mouseX.set(clientX - left);
            mouseY.set(clientY - top);
        }
        return (
            <motion.div
                style={{
                    background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--purple-500),
          transparent 80%
        )
      `,
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
                className="p-[2px] rounded-lg transition duration-300 group/input w-full"
            >
                <input
                    type={type}
                    className={cn(
                        `flex h-10 w-full border border-violet-800/40  bg-black text-neutral-400  shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px] 
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400
           `,
                        className
                    )}
                    autoComplete="off"
                    ref={ref}
                    {...props}
                />
            </motion.div>
        );
    }
);
Input.displayName = "Input";

export { Input };
