"use client";
import SidebarLogo from "@/assets/icons/SidebarLogo";
import { PanelRight, SidebarIcon } from "lucide-react";
import { useSidebar } from "../Sidebar";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

export default function SidebarHeader() {
  const { setIsOpen, isOpen, isMobile } = useSidebar();
  return (
    <div
      className={twMerge(
        "flex justify-between items-center p-4 min-h-16 overflow-hidden",
        isOpen ? "justify-between" : "justify-center"
      )}
    >
      <motion.div
        animate={{
          opacity: isOpen ? 1 : 0,
          width: isOpen ? "auto" : 0,
          translateX: isOpen ? 0 : -90,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <SidebarLogo className="h-6 -ml-14" />
      </motion.div>

      <AnimatePresence>
        {isOpen ? (
          <SidebarIcon
            onClick={() => setIsOpen(false)}
            className="hover:opacity-100 opacity-70 size-5 flex-shrink-0 cursor-pointer hover:scale-105 hover:-translate-y-0.5 transition-all duration-300"
          />
        ) : (
          <PanelRight
            onClick={() => setIsOpen(true)}
            className="hover:opacity-100 opacity-70 size-5 flex-shrink-0 cursor-pointer hover:scale-105 hover:-translate-y-0.5 transition-all duration-300"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
