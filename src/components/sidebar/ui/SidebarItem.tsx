"use client";
import { twMerge } from "tailwind-merge";
import { SidebarItemsProps } from "../types";
import { AnimatePresence, motion } from "motion/react";
import { useSidebar } from "../Sidebar";
import SidebarToolTip from "./SidebarToolTip";
import { useState } from "react";

export default function SidebarItem({
  id,
  icon: Icon,
  label,
  text,
}: SidebarItemsProps) {
  const transitionBase =
    "opacity-70 group-hover:opacity-100 group-hover:-translate-y-0.5 transition-all duration-300";
  const { activeId, isOpen, setActiveId, isMobile } = useSidebar();
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <motion.li
      onClick={() => setActiveId(id)}
      onMouseLeave={() => setHovered(false)}
      onMouseEnter={() => setHovered(true)}
      className={twMerge(
        "flex gap-4 items-center p-4 px-6 group hover:bg-muted-foreground/10 rounded-xl relative",
        activeId === id && "bg-accent-foreground/10"
      )}
    >
      <Icon className={twMerge("h-6 w-auto flex-shrink-0", transitionBase)} />
      <SidebarToolTip hovered={hovered} label={label} />

      <AnimatePresence mode="wait" initial={false}>
        {isOpen && (
          <motion.h2
            layout
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 0.7, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={twMerge(
              "overflow-hidden whitespace-nowrap font-heading",
              "opacity-70 group-hover:opacity-100 group-hover:-translate-y-0.5 transition-all duration-300"
            )}
          >
            {text}
          </motion.h2>
        )}
      </AnimatePresence>
    </motion.li>
  );
}
