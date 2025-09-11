'use client'
import { cn } from "@/lib/utils";
import * as React from "react";
import { HTMLMotionProps, motion } from "motion/react";
import { imageVariant } from "../constants";

const CardImage = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        {...props}
        variants={imageVariant}
        className={cn(
          "overflow-hidden border rounded-lg w-full relative flex-[0_0_50%]",
          className
        )}
      />
    );
  }
);

CardImage.displayName = "CardImage";

export default CardImage;
