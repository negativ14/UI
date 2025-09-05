import { sidebarItemsMockData } from "@/data/sidebarData";
import React from "react";
import { IconType } from "react-icons";

export type SidebarItemsActiveId = (typeof sidebarItemsMockData)[number]["id"];

export type SidebarShellProps = {
  children: React.ReactNode;
};

export type SidebarItemsProps = {
  id: SidebarItemsActiveId;
  icon: IconType;
  text: string;
  label: string;
};

export type SidebarContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeId: SidebarItemsActiveId;
  setActiveId: React.Dispatch<React.SetStateAction<SidebarItemsActiveId>>;
  isMobile: boolean;
};
