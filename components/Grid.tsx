"use client";

import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { gridItems } from '@/data';

const Grid = () => {
  return (
    <section id="about" className="pt-20 pb-32">
      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem
            className={item.id === 1 ? "text-blue-950" : item.className}
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            titleClassName={item.titleClassName}
            imgClassName={item.imgClassName}
            img={item.img}

            // Check for client-side execution for `navigator.clipboard`
            onClick={
              item.id === 6
                ? () => {
                    if (typeof navigator !== "undefined") {
                      navigator.clipboard.writeText("jakwesoneilgonzalez@gmail.com");
                    }
                  }
                : undefined
            }
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
