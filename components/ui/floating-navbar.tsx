"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [minHeight, setMinHeight] = useState("min-h-[80px]"); // Set a default min-height

  useEffect(() => {
    // Set initial visibility to false on page load
    setVisible(false);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const scrollPosition = window.scrollY; // Get the current scroll position
      const scrollThreshold = 1000; // You can adjust this value to fit your needs (e.g., height of a mobile device)

      if (scrollPosition < scrollThreshold) {
        setVisible(false); // Hide if scrolled to the top
        setMinHeight("min-h-[80px]"); // Keep default min-height at top
      } else {
        if (scrollYProgress.getVelocity() < 0) {
          setVisible(true); // Show when scrolling down
          setMinHeight("min-h-[60px]"); // Reduce min-height when scrolling down
        } else {
          setVisible(false); // Hide when scrolling up
          setMinHeight("min-h-[80px]"); // Reset min-height when scrolling up
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0, // Start with hidden visibility
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100, // Move to visible position if scrolling down
          opacity: visible ? 1 : 0, // Set opacity to 1 when visible
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          `flex max-w-fit fixed top-4 inset-x-0 mx-auto rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-10 py-5 items-center justify-center space-x-4 border-white/0.2 bg-blue-950/[0.8] ${minHeight}`,
          className
        )}
      >
        {navItems.map((navItem, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-blue-50 dark:hover:text-yellow-400 hover:text-yellow-400"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-sm !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
