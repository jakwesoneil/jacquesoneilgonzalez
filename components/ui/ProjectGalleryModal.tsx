"use client";

import React, { useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

interface GalleryProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title?: string;
}

const ProjectGalleryModal: React.FC<GalleryProps> = ({ isOpen, onClose, images, title }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    if (isOpen) setCurrentIndex(0);
  }, [isOpen]);

  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog className="relative z-[999]" open={isOpen} onClose={onClose}>
          <div className="fixed inset-0 bg-black/80" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="relative bg-black rounded-xl overflow-hidden shadow-xl max-w-5xl w-full max-h-[90vh]"
            >
              <button
                className="absolute top-4 right-4 text-white z-50"
                onClick={onClose}
              >
                <FaTimes size={24} />
              </button>

              <div className="relative flex items-center justify-center w-full h-[80vh] bg-neutral-900">
                <button onClick={prevImage} className="absolute left-4 text-white">
                  <FaChevronLeft size={32} />
                </button>

                <img
                  src={images[currentIndex]}
                  alt={`Project ${title}`}
                  className="max-h-full max-w-full object-contain"
                />

                <button onClick={nextImage} className="absolute right-4 text-white">
                  <FaChevronRight size={32} />
                </button>
              </div>
              <p className="text-center text-white py-4 text-sm">{title}</p>
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default ProjectGalleryModal;
