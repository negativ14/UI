"use client";
import { useState } from "react";
import { list } from "../constants";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function Tab() {
  const [tabItem, setTabItem] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <ul className="border rounded-full flex items-center justify-around p-1 shadow-md z-0">
      {list.map((item, index) => (
        <li
          onClick={() => setTabItem(item)}
          onMouseEnter={() => setHovered(item)}
          onMouseLeave={() => setHovered(null)}
          key={index}
          className="uppercase text-muted-foreground py-3 px-6 relative"
        >
          <span
            className={cn(
              tabItem === item &&
                "text-foreground transition-colors duration-300 relative z-10"
            )}
          >
            {item}
          </span>

          {hovered === item && (
            <motion.div
              transition={{ duration: 0.3, ease: "easeOut" }}
              layoutId="hover"
              className="absolute inset-0 bg-foreground/5 dark:bg-foreground/10 rounded-full z-0"
            />
          )}

          {tabItem === item && (
            <motion.div
              layoutId="item"
              className="absolute inset-0 bg-foreground/10 rounded-full z-0"
            />
          )}
        </li>
      ))}
    </ul>
  );
}
