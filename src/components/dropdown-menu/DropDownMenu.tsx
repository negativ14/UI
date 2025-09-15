"use client";
import { motion } from "motion/react";
import { dropdownItems } from "./constants";
import { useState } from "react";

export default function DropDownMenu() {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <>
      <motion.ul className="border rounded-lg divide-y absolute bottom-0">
        {dropdownItems.map((item) => (
          <li
            key={item.value}
            onMouseEnter={() => setHovered(item.value)}
            onMouseLeave={() => setHovered(null)}
          >
            {item.label}
            {hovered === item.value && (
              <motion.div
                className="absolute inset-0 bg-foreground/10 z-0"
                layoutId="hovered"
              />
            )}
          </li>
        ))}
      </motion.ul>
    </>
  );
}
