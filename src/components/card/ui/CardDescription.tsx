"use client";
import { cn } from "@/lib/utils";
import * as React from "react";
import { HTMLMotionProps, motion } from "motion/react";
import { descriptionVariant } from "../constants";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      {...props}
      variants={descriptionVariant}
      className={cn(
        "text-sm text-muted-foreground leading-4.5 line-clamp-4",
        className
      )}
    />
  );
});

CardDescription.displayName = "CardDescription";

export default CardDescription;
