"use client";
import { useState } from "react";
import { randomWords } from "../constants";
import { motion } from "motion/react";

export default function List() {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <ul className="flex flex-col border divide-y p-2">
      {randomWords.map((word, index) => (
        <li
          onMouseEnter={() => setHovered(word)}
          onMouseLeave={() => setHovered(null)}
          key={index}
          className="py-1 px-2 relative"
        >
          <span className="relative z-10">{word}</span>
          {hovered == word && (
            <motion.div
              layoutId="hover"
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute inset-0 bg-accent"
            />
          )}
        </li>
      ))}
    </ul>
  );
}
