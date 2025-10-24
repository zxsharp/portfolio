"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const ProjectCard = ({
  imageUrl,
  children,
  display,
  displayClassName,
  imageClassName,
  className,
}: {
  imageUrl: string;
  children: React.ReactNode | string;
  display?: React.ReactNode | string;
  displayClassName?: string;
  imageClassName?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [direction, setDirection] = useState<
    "top" | "bottom" | "left" | "right" | string
  >("left");

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!ref.current) return;

    const direction = getDirection(event, ref.current);
    console.log("direction", direction);
    switch (direction) {
      case 0:
        setDirection("top");
        break;
      case 1:
        setDirection("right");
        break;
      case 2:
        setDirection("bottom");
        break;
      case 3:
        setDirection("left");
        break;
      default:
        setDirection("left");
        break;
    }
  };

  const getDirection = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    obj: HTMLElement
  ) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      ref={ref}
      className={cn(
        "md:h-110 w-64 h-92 md:w-96 bg-gradient-to-br from-zinc-500 via-slate-800 to-slate-900 rounded-lg overflow-hidden group/card relative outline-1 outline-white/20 outline-offset-3",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="relative h-full w-full flex flex-col"
          initial="initial"
          whileHover={direction}
          exit="exit"
        >
          {/* Image area */}
          <div className="relative w-full h-[40%] overflow-hidden">
            {/* dim overlay only over the image area */}
            <motion.div className="group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500" />
            <motion.img
              variants={variants}
              transition={{ duration: 0.2, ease: "easeOut" }}
              alt="image"
              className={cn(
                // fill the image area; keep scale to have extra pixels to reveal
                "h-full w-full object-cover scale-[1.1] will-change-transform",
                imageClassName
              )}
              src={imageUrl}
            />
            <motion.div
              variants={textVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={cn(
                "text-white text-3xl font-semibold text-shadow-lg/20 text-shadow-background absolute inset-0 z-40 flex top-[40%] justify-center pointer-events-none",
                displayClassName
              )}
            >
              <div>{display}</div>
            </motion.div>
          </div>

          {/* Children content below the image */}
          <div className="flex-1 w-full p-2 md:p-4">{children}</div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

const variants = {
  initial: {
    x: 0,
  },
  exit: {
    x: 0,
    y: 0,
  },
  top: {
    y: 10,
  },
  bottom: {
    y: -10,
  },
  left: {
    x: 10,
  },
  right: {
    x: -10,
  },
};

const textVariants = {
  initial: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  exit: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  top: {
    y: -10,
    opacity: 1,
  },
  bottom: {
    y: 10,
    opacity: 1,
  },
  left: {
    x: -10,
    opacity: 1,
  },
  right: {
    x: 10,
    opacity: 1,
  },
};
