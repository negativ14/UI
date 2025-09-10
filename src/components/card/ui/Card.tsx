'use client'
import { HTMLMotionProps, motion } from "motion/react";
import * as React from "react";
import { cardVariants } from "../constants";
import { cn } from "@/lib/utils";

export const Card = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        {...props}
        initial="normal"
        whileHover="hover"
        variants={cardVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "border rounded-lg p-4 flex flex-col gap-4 h-96 w-72 hover:shadow-md shadow-sm group",
          className
        )}
      />
    );
  }
);

Card.displayName = "Card";

export default Card;