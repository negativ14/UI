"use client";
import React from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";
import { SidebarShellProps } from "../types";
import { useSidebar } from "../Sidebar";
import { AnimatePresence, motion } from "motion/react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { PanelRight } from "lucide-react";

export default function SidebarShell({ children }: SidebarShellProps) {
  const { isOpen, setIsOpen } = useSidebar();
  const isMobile = useIsMobile();
  return (
    <>
      <AnimatePresence>
        {isMobile && !isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: "100%" }}
            exit={{ opacity: 0, scale: 0, translateX: 10 }}
            transition={
              isMobile ? { duration: 0 } : { duration: 0.3, ease: "easeInOut" }
            }
            className="absolute top-4 left-4 "
          >
            <PanelRight
              onClick={() => setIsOpen(true)}
              className="hover:opacity-100 md:hidden opacity-70 size-5 flex-shrink-0 cursor-pointer hover:scale-105 hover:-translate-y-0.5 transition-all duration-300"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.aside
        layout
        initial={{ width: 288 }}
        animate={{
          width: !isMobile && !isOpen ? 72 : 288,
          translateX: isMobile && !isOpen ? "-105%" : "0%",
        }}
        className="bg-muted h-full border-r rounded-r-sm"
      >
        <nav className="flex flex-col gap-2 h-full">
          <SidebarHeader />
          <ul className="flex flex-col flex-1 mt-2 gap-2">{children}</ul>
          <SidebarFooter />
        </nav>
      </motion.aside>
    </>
  );
}
