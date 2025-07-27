import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from "../data";
import { BackgroundBeams } from './ui/background-beams';


const Footer = () => {
  return (
    <footer className="w-full pb-10" id="contact">
      <div className="w-full absolute left-0 min-h-96">
        <BackgroundBeams />
      </div>

      {/* grid */}
      <div className="h-screen w-full bg-white/10 dark:bg-blue-900/10 bg-grid-black/[0.2] dark:bg-grid-black/[0.5] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-blue-950 bg-blue-950 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]" />
      </div>

      <div className="flex flex-col items-center justify-center pt-10 px-4 text-center">
        <h1 className="heading lg:max-w-[45vw]">
          Let&apos;s create <span className="text-yellow-400"> meaningful</span> experiences!
        </h1>
        {socialMedia.map((info) => (
          info.id === 3 && (
            <a
              key={info.id}
              href={info.target} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="z-10 cursor-pointer"
            >
              <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          )
        ))}

        
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.target}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="social media icon" width={20} height={20} />
            </a>
          ))}
        </div>
        <p className="md:text-base text-sm md:font-normal font-light text-white">
          Copyright © 2025 Jacques Oneil Gonzalez
        </p>
      </div>
    </footer>
  );
};

export default Footer;