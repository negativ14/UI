"use client";
import React from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";
import { SidebarShellProps } from "../types";
import { useSidebar } from "../Sidebar";
import { motion } from "motion/react";

export default function SidebarShell({ children }: SidebarShellProps) {
  const { isOpen } = useSidebar();
  return (
   <motion.aside
  layout
  initial={{ width: 288 }}
  animate={{ width: isOpen ? 288 : 72 }}
  className="bg-muted h-full border-r rounded-r-sm overflow-hidden"
>
  <nav className="flex flex-col gap-2 h-full">
    <SidebarHeader />
    <ul className="flex flex-col flex-1 mt-2 gap-2">
      {children}
    </ul>
    <SidebarFooter />
  </nav>
</motion.aside>

  );
}
