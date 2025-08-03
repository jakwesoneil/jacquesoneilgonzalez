"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/UseOutsideClick";
import { projs } from "../data";

type ProjectType = (typeof projs)[number];

export function Projects() {
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
            <motion.div
              layoutId={`proj-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] rounded-[25px] h-fit max-h-[90%] flex flex-col bg-white dark:bg-blue-950 sm:rounded-3xl overflow-hidden border border-blue-50 dark:border-blue-100"
            >

              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 object-cover"
                />
              </motion.div>
              <div className="p-4 text-center">
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="text-base font-semibold text-blue-950 dark:text-yellow-400"
                >
                  {active.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${active.description}-${id}`}
                  className="text-sm text-blue-800 dark:text-blue-100"
                >
                  {active.description}
                </motion.p>

                <motion.a
                  layout
                  href={active.projLink}
                  target="_blank"
                   className="mt-4 block w-fit mx-auto px-4 py-2 bg-blue-950 text-yellow-400 text-sm font-bold rounded-md transition"
                >
                  {active.projText}
                </motion.a>

                <motion.div
                  className="mt-4 text-sm text-blue-800 dark:text-blue-100 max-h-40 overflow-auto"
                  layout
                >
                  {active.content}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <section className="py-1 w-full" id="projects"></section>
        <h1 className="heading py-10 ">
        My{" "}
        <span className="text-yellow-400">projects</span>
      </h1>
      <div className="w-full max-w-7xl mx-auto px-4">
        <ul
          id="projects"
          className="flex flex-wrap justify-center gap-6 w-full"
        >
          {[...projs].reverse().map((proj) => (
            <motion.div
              key={proj.id}
              layoutId={`card-${proj.title}-${id}`}
              onClick={() => setActive(proj)}
              className="p-4 flex flex-col bg-transparent dark:transparent hover:ring-2 hover:ring-yellow-400 hover:shadow-lg rounded-md transition-all max-w-sm w-full"
            >
            <motion.div
              layoutId={`image-${proj.title}-${id}`}
              className="h-30 w-full flex items-center justify-center rounded-lg bg-transparent"
            >
              <div className="h-[120px] w-auto">
                <img
                  src={proj.src}
                  alt={proj.title}
                  className="h-full w-auto object-contain"
                />
              </div>
            </motion.div>
              <div className="text-center mt-2">
                <motion.h3
                  layoutId={`title-${proj.title}-${id}`}
                  className="text-base font-medium text-blue-50 dark:text-neutral-200"
                >
                  {proj.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${proj.description}-${id}`}
                  className="text-base text-blue-50 dark:text-neutral-400"
                >
                  {proj.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </ul>
      </div>
    </>
  );
}
