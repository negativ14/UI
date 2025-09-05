import Image from "next/image";
import avatarImg from "@/assets/images/avatar.jpg";
import { BiLogOut } from "react-icons/bi";
import { motion } from "motion/react";
import { useSidebar } from "../Sidebar";
import { twMerge } from "tailwind-merge";

export default function SidebarFooter() {
  const { isOpen } = useSidebar();
  const handleLogout = () => {
    //logout logic
  };

  return (
    <div
      className={twMerge(
        "flex items-center border-t p-4 min-h-18",
        isOpen ? "justify-between" : "justify-center"
      )}
    >
      <motion.div
        className="flex gap-2 items-center min-w-0"
        animate={{
          opacity: isOpen ? 1 : 0,
          translateX: isOpen ? 0 : -20,
          width: isOpen ? 200 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Image
          width={40}
          height={40}
          src={avatarImg}
          alt="avatar"
          className="rounded-full flex-shrink-0"
        />

        <motion.div
          className="flex flex-col leading-4 min-w-0 overflow-hidden"
          animate={{
            opacity: isOpen ? 1 : 0,
            translateX: isOpen ? 0 : -20,
            width: isOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <h1 className="text-sm tracking-tight">Negativ</h1>
          <p className="text-xs tracking-tight text-muted-foreground truncate whitespace-nowrap">
            negativdomain@gmail.com
          </p>
        </motion.div>
      </motion.div>

      <motion.span
        layout
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
        className={twMerge("flex-shrink-0", !isOpen && "mx-auto")}
      >
        <BiLogOut
          onClick={handleLogout}
          className="hover:opacity-100 opacity-70 size-6 cursor-pointer hover:scale-105 hover:-translate-y-0.5 transition-all duration-300"
        />
      </motion.span>
    </div>
  );
}
