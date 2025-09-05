"use client";
import React, { useContext, useState, createContext } from "react";
import SidebarShell from "./ui/SidebarShell";
import SidebarItem from "./ui/SidebarItem";
import { SidebarContextType, SidebarItemsActiveId } from "./types";
import { sidebarItemsMockData } from "@/data/sidebarData";
import { useIsMobile } from "@/hooks/useIsMobile";

const SidebarContext = createContext<SidebarContextType | null>(null);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context)
    throw new Error("useSidebar must be used inside SidebarProvider");
  return context;
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [activeId, setActiveId] = useState<SidebarItemsActiveId>("home");
  const isMobile = useIsMobile();

  return (
    <SidebarContext.Provider
      value={{ isOpen, setIsOpen, activeId, setActiveId, isMobile }}
    >
      <SidebarShell>
        {sidebarItemsMockData.map((item) => (
          <SidebarItem
            id={item.id}
            key={item.id}
            icon={item.icon}
            label={item.label}
            text={item.text}
          />
        ))}
      </SidebarShell>
    </SidebarContext.Provider>
  );
}
