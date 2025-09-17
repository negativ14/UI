"use client";
import {
  CheckCircle,
  ClosedCaption,
  Cross,
  Plus,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Button } from "../button/Button";
import { IconType } from "react-icons";

export default function CardAUI() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: -20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            exit={{ opacity: 0, filter: "blur(10px)", y: -20 }}
            className="h-[26rem] w-72 border-[0.5px] dark:border rounded-md p-6 flex flex-col gap-3 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
"
          >
            <h2 className="font-semibold text-sm">Acternity UI</h2>

            <p className="text-xs text-foreground/60">
              This component was recreated from Acternity UI.
            </p>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex gap-1 items-center justify-between text-foreground  text-sm border dark:border-2 rounded-sm w-fit px-3 py-0.5 mx-auto shadow-sm backdrop-blur-md mb-2 mt-1 cursor-pointer"
            >
              close{" "}
              <X className="size-3.5 translate-y-[1px] text-foreground/80 self-center" />{" "}
            </button>

            <div className="bg-gray-100 border border-dashed dark:bg-accent flex-1 rounded-md relative">
              <motion.div
                initial={{ opacity: 0, scale: 1, filter: "blur(10px)" }}
                whileHover={{
                  opacity: 1,
                  scale: 1.05,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 h-full w-full bg-background rounded-md divide-y overflow-y-scroll scrollbar-hide border"
              >
                <MiniCard
                  icon={X}
                  text1="Lightweight components"
                  text2="Minimal setup, easy to use"
                />
                <MiniCard
                  icon={ClosedCaption}
                  text1="Accessible by default"
                  text2="ARIA roles baked in"
                />
                <MiniCard
                  icon={Cross}
                  text1="Customizable styles"
                  text2="Tailwind-first approach"
                />
                <MiniCard
                  icon={CheckCircle}
                  text1="Production ready"
                  text2="Well-tested and reliable"
                />
                <div className="flex items-center justify-center gap-2 py-3 cursor-pointer">
                  <div className="inline-flex text-foreground/50 border border-foreground/10 rounded-full p-0.5 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] ">
                    <Plus className="h-4 w-4 text-foreground/40" />
                  </div>
                  <span className="text-sm text-foreground/40">Add more</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen != true && (
          <motion.div
            className="absolute top-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            exit={{ opacity: 0 }}
          >
            <Button onClick={() => setIsOpen(!isOpen)}>Open</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const MiniCard = ({
  icon: Icon,
  text1,
  text2,
}: {
  icon: IconType;
  text1: string;
  text2: string;
}) => {
  return (
    <div className="flex p-4 gap-3">
      <div className="h-9 w-9 flex-shrink-0 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md flex items-center justify-center dark:border">
        <Icon className="h-4 w-4 text-foreground/60" />
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-xs">{text1}</p>
        <p className="text-[10px] text-foreground/50 leading-4">{text2}</p>
      </div>
    </div>
  );
};
