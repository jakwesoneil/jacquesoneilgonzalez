import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { navItems } from "@/data";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 min-h-screen relative">
    {/* Full-screen BackgroundBeams */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <BackgroundBeams className="h-full w-full" />
      </div>
      
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
  <div className="bg-blue-950/[0.4] p-3 rounded-xl flex items-center justify-center space-x-4">
    <div className="flex items-center justify-center bg-white rounded-sm h-[25px] w-[25px] overflow-hidden outline outline-offset-0 outline-1 outline-white">
      <img
        src="/jakwesoneil_logo.png"
        alt="Logo"
        className="h-full w-full object-contain"
      />
    </div>
    {navItems.map((navItem, idx: number) => (
      <Link
        key={`link=${idx}`}
        href={navItem.link}
        className={cn(
          "relative dark:text-neutral-50 items-center flex space-x-1 text-blue-50 dark:hover:text-yellow-400 hover:text-yellow-400"
        )}
      >
        <span className="text-sm !cursor-pointer">{navItem.name}</span> {/* Only the icon */}
      </Link>
    ))}
    <div className="pr-1" />
  </div>
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
            words="Creating Seamless User Experiences"
          />
          <p
            className="text-center text-blue-100 dark:text-blue-100
            md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl mt-3"
          >
            I&apos;m Jacques Oneil Gonzalez, driven by a passion for creating seamless web and mobile experiences.
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
