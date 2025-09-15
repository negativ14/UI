"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type TooltipProps = {
  children: React.ReactNode;
  content: string;
  position?: "top" | "left" | "right" | "bottom";
};

export const Tooltip = ({
  children,
  content,
  position = "top",
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const getPositionClasses = () => {
    const base =
      "absolute z-50 px-3 py-1.5 text-xs bg-foreground text-background rounded-md whitespace-nowrap font-semibold";

    switch (position) {
      case "top":
        return `${base} bottom-full left-1/2 -translate-x-1/2 mb-1`;
      case "bottom":
        return `${base} top-full left-1/2 -translate-x-1/2 mt-1`;
      case "left":
        return `${base} right-full top-1/2 -translate-y-1/2 mr-1`;
      case "right":
        return `${base} left-full top-1/2 -translate-y-1/2 ml-1`;
      default:
        return `${base} bottom-full left-1/2 -translate-x-1/2 mb-1`;
    }
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            exit={{ scale: 0, opacity: 0 }}
            layoutId="tooltip"
            className={getPositionClasses()}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
