"use client";
import { useState } from "react";
import { toggleIcons } from "../constants";
import { motion } from "motion/react";

export default function ToogleItem() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <ul className="flex border rounded-lg divide-x overflow-hidden shadow-sm">
      {toggleIcons.map(({ value, icon: Icon }, index) => (
        <li
          key={index}
          onClick={() => setSelectedTool(value)}
          onMouseEnter={() => setHovered(value)}
          onMouseLeave={() => setHovered(null)}
          className="py-3 px-6 relative"
        >
          <Icon className="h-5 w-auto relative z-10" />

          {hovered === value && (
            <motion.div
              layoutId="hover"
              className="absolute inset-0 bg-foreground/5 dark:bg-foreground/10 z-0"
            />
          )}

          {selectedTool === value && (
            <motion.div
              layoutId="select"
              className="absolute inset-0 bg-foreground/10 dark:bg-foreground/20 z-0"
            />
          )}
        </li>
      ))}
    </ul>
  );
}
