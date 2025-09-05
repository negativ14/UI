"use client";
import { twMerge } from "tailwind-merge";
import { SidebarItemsProps } from "../types";
import { useSidebar } from "../Sidebar";
import SidebarToolTip from "./SidebarToolTip";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function SidebarItem({
  icon: Icon,
  text,
  label,
  id,
}: SidebarItemsProps) {
  const { activeId, setActiveId, isOpen } = useSidebar();
  const [hovered, setHovered] = useState(false);
  const transitionBase =
    "transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100";

  return (
    <motion.li
      onClick={() => setActiveId(id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={twMerge(
        "flex gap-4 cursor-pointer group hover:bg-muted-foreground/10 p-4 rounded-xl transition-all duration-300 relative",
        `${activeId === id && "opacity-100 bg-muted-foreground/10"}`
      )}
    >
      <motion.div
        layout
        animate={{
          marginLeft: !isOpen ? "auto" : 0,
          marginRight: !isOpen ? "auto" : 0,
        }}
      >
        <Icon
          className={twMerge(
            "h-6 w-auto opacity-70",
            transitionBase,
            `${activeId === id && "opacity-100"}`
          )}
        />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden whitespace-nowrap font-heading"
          >
            {text}
          </motion.span>
        )}
      </AnimatePresence>

      <SidebarToolTip hovered={hovered} label={label} />
    </motion.li>
  );
}
