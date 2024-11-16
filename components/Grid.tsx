"use client";

import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { gridItems } from '@/data';


const Grid = () => {
  return (
    <section id="about" className="pt-10 pb-10">
      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem
            className={item.id === 1 ? " text-blue-950 flex items-center justify-center" : item.className}
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            titleClassName={item.titleClassName}
            imgClassName={item.imgClassName}
            img={item.img}
            onClick={
              item.id === 6
                ? () => {
                    if (typeof navigator !== "undefined") {
                      navigator.clipboard.writeText("jakwesoneilgonzalez@gmail.com");
                    }
                  }
                : undefined
            }
            // Pass the techstack as a separate component with individual logos
            techstack={item.id === 4 && item.techStack && (
              <div className="flex flex-wrap justify-start gap-4 mt-4 overflow-hidden">
                {item.techStack.map((logo, index) => (
                  <div
                    key={index}
                    className="border border-white/[0.2] rounded-full w-12 h-16 flex justify-center items-center overflow-hidden"
                  >
                    <img src={logo} alt="Tech Logo" className="p-1 w-30 h-20 object-contain" />
                  </div>
                ))}
              </div>
            )}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;