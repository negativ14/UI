import { BiHome, BiUser, BiCog, BiMessageSquare, BiBell } from "react-icons/bi";

export const sidebarItemsMockData = [
  { id: "home", icon: BiHome, text: "Home", label: "Home" },
  { id: "profile", icon: BiUser, text: "Profile", label: "Profile" },
  {
    id: "settings",
    icon: BiCog,
    text: "Settings",
    label: "Settings",
  },
  {
    id: "messages",
    icon: BiMessageSquare,
    text: "Messages",
    label: "Messages",
  },
  {
    id: "notifications",
    icon: BiBell,
    text: "Notifications",
    label: "Notifications",
  },
] as const;
//as const = treat everything literally & readonly and no change
//A literal is a value written exactly as it is, not a general type.


// "use client";
// import SidebarLogo from "@/assets/icons/SidebarLogo";
// import { PanelRight, SidebarIcon } from "lucide-react";
// import { useSidebar } from "../Sidebar";
// import { AnimatePresence, motion } from "motion/react";

// export default function SidebarHeader() {
//   const { setIsOpen, isOpen } = useSidebar();
//   return (
//     <motion.div layout className="flex justify-between items-center p-4">
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -20 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//           >
//             <SidebarLogo className="h-6 -ml-14" />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <motion.div
//         layout
//         exit={{}}
//         transition={{ duration: 0.3, type: "spring", stiffness: 100, damping: 15 }}
        
//       >
//         {isOpen ? (
//           <SidebarIcon
//             onClick={() => setIsOpen(false)}
//             className="hover:opacity-100 opacity-70 size-5 cursor-pointer hover:scale-105 hover:-translate-y-0.5 transition-all duration-300"
//           />
//         ) : (
//           <PanelRight
//             onClick={() => setIsOpen(true)}
//             className="hover:opacity-100 opacity-70 size-5 cursor-pointer hover:scale-105 hover:-translate-y-0.5 transition-all duration-300"
//           />
//         )}
//       </motion.div>
//     </motion.div>
//   );
// }
