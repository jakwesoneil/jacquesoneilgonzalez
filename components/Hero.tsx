import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { linkTo, socialMedia } from "@/data";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 min-h-screen relative">
    {/* Full-screen BackgroundBeams */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <BackgroundBeams className="h-full w-full" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div
          className="max-w-[89vw] md:max-w-2xl
        lg:max-w-[60vw] flex flex-col items-center justify-center"
        >
          <h3 className="text-blue-100 uppercase tracking-widest text-xs text-center max-w-80">
            Jacques Oneil Gonzalez
          </h3>

          <TextGenerateEffect
            className="text-center text-[40px] text-5xl lg:text-6xl text-blue-100 dark:text-blue-100"
            words="Driven IT Professional"
          />
          <p
            className="text-center text-blue-100 dark:text-blue-100
            md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl mt-3"
          >
            Focused on cloud infrastructure and building reliable IT systems.
          </p>         
          <a
            href={linkTo[0].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton 
              title="Let's Connect"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
