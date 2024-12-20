"use client";

import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { gridItems } from '@/data';
import MagicButton from './ui/MagicButton';


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
                    className="border border-white/[0.6] rounded-xl w-12 h-12 flex justify-center items-center overflow-hidden"
                  >
                    <img src={logo} alt="Tech Logo" className="p-1 w-30 h-20 object-contain" />
                  </div>
                ))}
              </div>
            )}
            
            // Pass the skill as a string array and display each skill
            skills={item.id === 5 && item.skill && (
              <div className="flex justify-center flex-wrap gap-4 mt-4 overflow-hidden items-center">
                {item.skill.map((skillName, index) => (
                  <div
                    key={index}
                    className="border border-white/[0.6] rounded-xl px-2 py-1 flex justify-center items-center whitespace-nowrap"
                  >
                    <span className="text-white text-md ">{skillName}</span>
                  </div>
                ))}
              </div>
            )}

             // Render a clickable link to the resume PDF if there's a resumeLink
             resume={item.id === 6 && item.resumeLink ? (
              <MagicButton
                href={item.resumeLink}
                target="_blank"
                icon={""}
                title="View my Resume"
                position="left" // or "right", depending on where you want the icon
              />
            ) : null}
            
                  
            
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;