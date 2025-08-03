"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/UseOutsideClick";
import { certs } from "../data";

type CertType = (typeof certs)[number];

export function Certifications() {
  const [active, setActive] = useState<CertType | null>(null);
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
              layoutId={`cert-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] rounded-[25px] h-fit max-h-[90%] flex flex-col bg-white dark:bg-blue-950 sm:rounded-3xl overflow-hidden border border-blue-50 dark:border-blue-100"
            >
              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className="h-[120px] flex justify-center items-center bg-white dark:bg-blue-950"
              >
                <div className="h-[120px] w-auto">
                  <img
                    src={active.src}
                    alt={active.title}
                    className="h-full w-auto object-contain"
                  />
                </div>
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
                  href={active.certLink}
                  target="_blank"
                  className="mt-4 block w-fit mx-auto px-4 py-2 bg-blue-950 text-yellow-400 text-sm font-bold rounded-md transition"
                >
                  {active.certText}
                </motion.a>

                <motion.div
                  className="mt-4 flex flex-wrap justify-center gap-2 max-h-40 overflow-auto"
                  layout
                >
                  {active.skills.map((skill: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs font-semibold rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </motion.div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <section className="py-1 w-full" id="certifications"></section>
      <h1 className="heading py-10">
        My <span className="text-yellow-400">certifications</span>
      </h1>
      <div className="w-full max-w-7xl mx-auto px-4">
        <ul id="certs" className="flex flex-wrap justify-center gap-6 w-full">
          {[...certs].reverse().map((cert) => (
            <motion.div
              key={cert.id}
              layoutId={`card-${cert.title}-${id}`}
              onClick={() => setActive(cert)}
              className="p-4 flex flex-col bg-transparent hover:ring-2 hover:ring-yellow-400 hover:shadow-lg rounded-md transition-all max-w-sm w-full"
            >
              <motion.div
                layoutId={`image-${cert.title}-${id}`}
                className="h-[120px] w-full flex items-center justify-center rounded-lg bg-transparent"
              >
                <div className="h-[120px] w-auto">
                  <img
                    src={cert.src}
                    alt={cert.title}
                    className="h-full w-auto object-contain"
                  />
                </div>
              </motion.div>
              <div className="text-center mt-2">
                <motion.h3
                  layoutId={`title-${cert.title}-${id}`}
                  className="text-base font-medium text-blue-50 dark:text-neutral-200"
                >
                  {cert.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${cert.description}-${id}`}
                  className="text-base text-blue-50 dark:text-neutral-400"
                >
                  {cert.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </ul>
      </div>
    </>
  );
}
