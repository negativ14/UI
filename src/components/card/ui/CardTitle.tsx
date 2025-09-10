"use client";
import { HTMLMotionProps, motion } from "motion/react";
import { cardVariants, DURATION, STAGGER } from "../constants";
import { cn } from "@/lib/utils";
import * as React from "react";

const CardTitle = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ className, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        {...props}
        className={cn(
          "relative text-xl font-bold tracking-tight overflow-hidden whitespace-nowrap uppercase leading-4",
          className
        )}
        variants={cardVariants}
      >
        <motion.div
          initial="normal"
          variants={{
            normal: { y: 0 },
            hover: { y: "-100%" },
          }}
        >
          {typeof children === "string" &&
            children.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={{
                  normal: { y: 0 },
                  hover: { y: "-100%" },
                }}
                transition={{
                  delay: STAGGER * index,
                  duration: DURATION,
                  ease: "easeInOut",
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
        </motion.div>

        {/* Bottom layer */}
        <motion.div
          initial="normal"
          variants={{
            normal: { y: "100%" },
            hover: { y: 0 },
          }}
          className="absolute inset-0"
        >
          {typeof children === "string" &&
            children.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={{
                  normal: { y: "100%" },
                  hover: { y: 0 },
                }}
                transition={{
                  delay: STAGGER * index,
                  duration: DURATION,
                  ease: "easeInOut",
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
        </motion.div>
      </motion.div>
    );
  }
);

CardTitle.displayName = "CardTitle";

export default CardTitle;
