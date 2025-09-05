"use client";
import SidebarLogo from "@/assets/icons/SidebarLogo";
import { PanelRight, SidebarIcon } from "lucide-react";
import { useSidebar } from "../Sidebar";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

export default function SidebarHeader() {
  const { setIsOpen, isOpen } = useSidebar();
  return (
    <motion.div className="flex justify-between items-center p-4 min-h-16">
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

      <span className={twMerge("flex-shrink-0", !isOpen && "mx-auto")}>
        {isOpen ? (
          <SidebarIcon
            onClick={() => setIsOpen(false)}
            className="hover:opacity-100 opacity-70 size-5 cursor-pointer hover:scale-105 hover:-translate-y-0.5 transition-all duration-300"
          />
        ) : (
          <PanelRight
            onClick={() => setIsOpen(true)}
            className="hover:opacity-100 opacity-70 size-5 cursor-pointer hover:scale-105 hover:-translate-y-0.5 transition-all duration-300"
          />
        )}
      </span>
    </motion.div>
  );
}
