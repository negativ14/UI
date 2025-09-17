import { cn } from "@/lib/utils";
import React from "react";

export default function Button3({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <button
      className={cn(
        'flex items-center overflow-hidden border gap-2 py-1.5 px-3 z-10 rounded-md border-zinc-500 text-zinc-50 bg-gradient-to-b from-zinc-700 to-zinc-950 whitespace-nowrap relative transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-y-[200%] before:scale-[200%] before:rounded-[100%] before:bg-white before:transition-all before:duration-300 before:content-[""] hover:text-zinc-950 hover:before:translate-y-[0%] active:scale-[90%] cursor-pointer',
        className
      )}
    >
      {children}
    </button>
  );
}
