import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/moving-border'

const Experience = () => {
  // Sort experiences by ID in descending order
  const sortedWorkExperience = [...workExperience].sort((a, b) => b.id - a.id);

  return (
    <section className="py-20 w-full" id="experience">
      <h1 className="heading">
        My{" "}
        <span className="text-yellow-400">work experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {sortedWorkExperience.map((card) => (
          <Button
            key={card.id}
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 10000) + 10000}
            className="bg-blue-50/[0.1] flex-1 text-blue-950 dark:border-sky-950 outline-dotted "
          >
            <div className="flex flex-col p-6 md:p-5 lg:p-10">
              {/* Top section with thumbnail, title, company name, and skills */}
              <div className="flex items-start gap-6">
                {/* Thumbnail */}
                <div className="w-16 h-16 lg:w-16 lg:h-16 bg-white rounded-lg flex items-center justify-center">
                  <img
                    src={card.thumbnail}
                    alt={card.thumbnail}
                    className="object-contain w-16 h-16 rounded-lg"
                  />
                </div>

                {/* Text Section */}
                <div className="flex flex-col justify-between flex-grow">
                  {/* Title */}
                  <h1 className="text-lg font-semibold text-blue-50 dark:text-white">
                    {card.title}
                  </h1>

                  {/* Company Name and Skills */}
                  <div className="flex justify-between items-start mt-1">
                    {/* Company Name */}
                    <h2 className="text-sm font-medium text-blue-50 dark:text-white">
                      {card.companyName}
                    </h2>

                    {/* Skills */}
                    {card.skill && (
                      <div className="flex gap-2">
                        {card.skill.map((skill, index) => (
                          <div
                            key={index}
                            className="bg-blue-950 text-yellow-400 dark:bg-blue-900 dark:text-white px-2 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-start text-white mt-4 font-medium text-sm">
                {card.desc}
              </p>

              {/* Technologies Used */}
              {card.icon && card.icon.length > 0 && (
                <div className="mt-5 flex flex-col items-center">
                  <h3 className="text-sm font-semibold text-blue-50 dark:text-white text-center">
                    Technologies Used:
                  </h3>
                  <div className="flex justify-center flex-wrap gap-2 mt-2">
                    {card.icon.map((icon, index) => (
                      <img
                        key={index}
                        src={icon}
                        className="w-10 h-10 object-contain"
                        alt="Technology icon"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;
