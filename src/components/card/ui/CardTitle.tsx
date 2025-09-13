"use client";
import { HTMLMotionProps, motion } from "motion/react";
import { DURATION, STAGGER } from "../constants";
import { cn } from "@/lib/utils";
import * as React from "react";

const CardTitle = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ className, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        {...props}
        className={cn(
          "relative text-2xl font-bold tracking-tight overflow-hidden uppercase leading-5 mt-1 text-foreground/80 whitespace-nowrap",
          className
        )}
      >
        <motion.div
          className="w-full truncate"
          variants={{
            normal: {
              transition: {
                staggerChildren: 0.025,
                staggerDirection: -1,
              },
            },
            hover: {
              transition: {
                staggerChildren: STAGGER,
                when: "beforeChildren",
              },
            },
          }}
        >
          {typeof children === "string" &&
            children.split("").map((letter, index) => (
              <motion.span
                variants={{
                  normal: {
                    y: 0,
                  },
                  hover: {
                    y: "-100%",
                    transition: {
                      duration: DURATION,
                      ease: "easeInOut",
                    },
                  },
                }}
                className="inline-block"
                key={`first-${index}`}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
        </motion.div>

        <motion.div
          className="absolute inset-0 w-full truncate"
          variants={{
            normal: {
              transition: {
                staggerChildren: 0.025,
                staggerDirection: -1,
              },
            },
            hover: {
              transition: {
                staggerChildren: STAGGER,
                when: "beforeChildren",
              },
            },
          }}
        >
          {typeof children === "string" &&
            children.split("").map((letter, index) => (
              <motion.span
                variants={{
                  normal: {
                    y: "100%",
                  },
                  hover: {
                    y: 0,
                    transition: {
                      duration: DURATION,
                      ease: "easeInOut",
                    },
                  },
                }}
                className="inline-block"
                key={`second-${index}`}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
        </motion.div>
      </motion.div>
    );
  }
);

CardTitle.displayName = "CardTitle";

export default CardTitle;
