import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 min-h-screen">
      <div>
        <BackgroundBeams className= "h-full" />
      </div>
      <div className="h-screen w-full bg-white/10 dark:bg-black-900/10 bg-grid-black/[0.2] dark:bg-grid-black/[0.5] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-blue-950 bg-blue-950 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div
          className="max-w-[89vw] md:max-w-2xl
        lg:max-w-[60vw] flex flex-col items-center justify-center"
        >
          <h3 className="text-blue-100 uppercase tracking-widest text-xs text-center max-w-80">
            Aspiring Software Engineer
          </h3>

          <TextGenerateEffect
            className="text-center text-[40px] text-5xl lg:text-6xl text-blue-100 dark:text-blue-100"
            words="Creating Beautiful User Experiences"
          />
          <p
            className="text-center text-blue-100 dark:text-blue-100
            md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl mt-3"
          >
            I&apos;m Jacques Oneil Gonzalez, an IT Student specializing on App Development at Mapúa University.
          </p>
          <a href = '#projects'>
            <MagicButton 
              title="Show my Projects"
              icon ={<FaLocationArrow/>}
              position="right"

            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
