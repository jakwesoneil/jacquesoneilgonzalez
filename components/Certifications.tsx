"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/UseOutsideClick";
import { certs } from "../data";

// Types
type CertType = (typeof certs)[number];

export function Certifications() {
  const [active, setActive] = useState<CertType | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="certifications" className="py-1 w-full">
      <h1 className="heading py-20">
        My <span className="text-yellow-400">certifications</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
        {certs.map((cert, i) => (
          <motion.div
            key={cert.title}
            className="card cursor-pointer text-blue-50"
            onClick={() => setActive(cert)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <div className="w-full h-[200px]">
              <img
                src={cert.src}
                alt={cert.title}
                className="rounded-md text-blue-50 object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold">{cert.title}</h2>
              <p className="text-sm text-blue-50 line-clamp-2">
                {cert.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <ExpandCertCard cert={active} setActive={setActive} />
        )}
      </AnimatePresence>
    </section>
  );
}

function ExpandCertCard({ cert, setActive }: { cert: CertType; setActive: (v: CertType | null) => void }) {
  const id = useId();
  const ref = useRef(null);
  useOutsideClick(ref, () => setActive(null));

  return (
    <motion.div
      layoutId={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-blue-950/70 backdrop-blur-sm z-[9999] px-4 hover:ring-yellow-400 hover:shadow-lg rounded-md transition-all"
    >
      <motion.div
        ref={ref}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
        className="bg-white dark:bg-[#0d1117] rounded-lg max-w-3xl mx-auto my-24 overflow-hidden "
      >
        <img
          src={cert.src}
          alt={cert.title}
          className="w-full h-[300px] object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2 text-blue-950">{cert.title}</h2>
          <p className="text-blue-950 dark:text-neutral-300 mb-4">
            {cert.content}
          </p>
          {cert.certLink && (
            <a
              href={cert.certLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-blue-950 text-yellow-400 rounded-md hover:bg-blue-900"
            >
              {cert.certText || "View Certification"}
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}