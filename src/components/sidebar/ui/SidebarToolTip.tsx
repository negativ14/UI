"use client";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "motion/react";
import { useSidebar } from "../Sidebar";

export default function SidebarToolTip({
  label,
  hovered,
}: {
  label: string;
  hovered: boolean;
}) {
  const { isOpen } = useSidebar();
  return (
    <AnimatePresence>
      {hovered && !isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.3, ease: "linear" }}
          className={twMerge(
            "absolute -right-20 -top-5 bg-orange-300 text-xs rounded-xl p-2 rounded-bl-none"
          )}
        >
          <p>{label}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
