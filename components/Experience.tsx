import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/moving-border'

const Experience = () => {
  return (
    <div className="py-20 w-full" id="projects">
        <h1 className="heading ">
            My{" "}
            <span className="text-yellow-400"> work experience</span>
        </h1>
        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
          {workExperience.map((card) => (
            <Button
              key={card.id}
              borderRadius="1.75rem"
              duration={Math.floor(Math.random() * 10000) + 10000}
              className="bg-yellow-400/[0.4] flex-1 text-blue-950 dark:border-sky-950"
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                {/* Wrapper div for the rounded square background */}
                <div className="w-24 h-24 lg:w-32 lg:h-32 bg-yellow-400/[0.2] rounded-lg flex items-center justify-center">
                  <img
                    src={card.thumbnail}
                    alt={card.thumbnail}
                    className="object-contain w-20 h-20 rounded-lg" // Keep the image size smaller
                  />
                </div>
              </div>

              <div className="lg:ms-5 mt-3 lg:mt-0 flex flex-col justify-center pr-4">
                <h1 className="text-lg font-semibold text-blue-950 dark:text-white">{card.title}</h1>
                <p className="text-start text-white mt-2 font-medium text-sm">
                  {card.desc}
                </p>
              </div>

            </Button>
          ))}
        </div>
    </div>
  )
}

export default Experience