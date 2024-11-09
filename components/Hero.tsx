import React from 'react'
import { BackgroundBeams } from './ui/background-beams'

const Hero = () => {
  return (
    <div className= "pb-20 pt-36">
        <div>
            <BackgroundBeams/>
        </div>
        <div className="h-screen w-full bg-white/10 dark:bg-black-900/10 bg-grid-black/[0.2] dark:bg-grid-white/[0.3] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-blue-900 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]" />
      </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl
        lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h3 className = "text-blue-200 uppercase tracking-widest text-xs text-center max-w-80">
                Created by Jacques Oneil Gonzalez
            </h3>
        </div>
      </div>
         
    </div>
  )
}

export default Hero