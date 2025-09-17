"use client";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import * as React from "react";

export default function Card3D() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPercentage = mouseX / width - 0.5;
    const yPercentage = mouseY / height - 0.5;

    x.set(xPercentage);
    y.set(yPercentage);
  };
  return (
    <motion.div
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      onMouseMove={handleMouseMove}
      className="h-[26rem] w-72 bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400 p-4 rounded-lg relative shadow-md z-0 "
      style={{ transformStyle: "preserve-3d", rotateX, rotateY }}
      //   transform: 'rotateY(50deg)'
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-6 bg-gradient-to-bl from-orange-200 via-orange-300 to-orange-400 rounded-md shadow-lg flex justify-center items-center"
      >
        <p
          style={{
            transform: "translateZ(75px)",
          }}
          className="text-3xl font-bold text-white text-shadow-sm"
        >
          Hover on me.
        </p>
      </div>
    </motion.div>
  );
}
