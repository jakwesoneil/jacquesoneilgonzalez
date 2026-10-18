"use client";

import React from "react";
import { motion } from "framer-motion";
import { certs } from "../data";

export function Certifications() {
  return (
    <section id="certifications" className="py-10 w-full">
      <h1 className="heading text-center mb-10">
        My <span className="text-yellow-400">Certifications</span>
      </h1>

      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {[...certs].reverse().map((cert) => (
          <motion.div
            key={cert.id}
            whileHover={{ scale: 1.02 }}
            className="flex flex-row items-stretch bg-white dark:bg-blue-950 shadow-md rounded-xl p-6"
          >
            
            <div className="flex flex-col justify-between w-2/3">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-blue-900 dark:text-yellow-400 mb-2 truncate">
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-blue-100">
                  <span className="font-semibold">Date Taken:</span> {cert.dateTaken}
                </p>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-blue-100">
                  <span className="font-semibold">Status:</span>{" "}
                  <span
                    className={
                      cert.status === "Active"
                        ? "text-green-600 dark:text-green-400 font-semibold"
                        : "text-red-600 dark:text-red-400 font-semibold"
                    }
                  >
                    {cert.status}
                  </span>
                </p>
              </div>

              <a
                href={cert.certLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-blue-950 text-yellow-400 text-xs sm:text-sm font-semibold rounded-md hover:bg-blue-900 transition w-fit"
              >
                View Certification
              </a>
            </div>

            <div className="flex items-center justify-center w-1/3">
              <img
                src={cert.certsrc}
                alt={cert.title}
                className="h-20 sm:h-24 w-auto object-contain"
              />
            </div>
          </motion.div>

        ))}
      </div>
    </section>
  );
}
