"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/UseOutsideClick";
import { projs } from "../data"; // ✅ Import from your data file

type ProjectType = (typeof projs)[number];

export function GridExpandableCard() {
  const [active, setActive] = useState<ProjectType | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    if (active) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="absolute top-2 right-2 lg:hidden bg-white rounded-full h-6 w-6 flex items-center justify-center"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`proj-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-blue-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 object-cover"
                />
              </motion.div>
              <div className="p-4">
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="text-base font-medium text-blue-800 dark:text-neutral-200"
                >
                  {active.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${active.description}-${id}`}
                  className="text-base text-neutral-600 dark:text-neutral-400"
                >
                  {active.description}
                </motion.p>

                <motion.a
                  layout
                  href={active.projLink}
                  target="_blank"
                  className="mt-4 inline-block px-4 py-2 bg-green-500 text-white text-sm font-bold rounded-full"
                >
                  {active.projText}
                </motion.a>

                <motion.div
                  className="mt-4 text-sm text-neutral-600 dark:text-neutral-400 max-h-40 overflow-auto"
                  layout
                >
                  {active.content}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ul
        className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto w-full "
        id="projects"
      >
        {projs.map((proj) => (
          <motion.div
            key={proj.id}
            layoutId={`card-${proj.title}-${id}`}
            onClick={() => setActive(proj)}
            className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <motion.div layoutId={`image-${proj.title}-${id}`}>
              <img
                src={proj.src}
                alt={proj.title}
                className="h-60 w-full object-cover rounded-lg"
              />
            </motion.div>
            <div className="text-center mt-2">
              <motion.h3
                layoutId={`title-${proj.title}-${id}`}
                className="text-base font-medium text-neutral-800 dark:text-neutral-200"
              >
                {proj.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${proj.description}-${id}`}
                className="text-base text-neutral-600 dark:text-neutral-400"
              >
                {proj.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.05 } }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-black"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </motion.svg>
);
