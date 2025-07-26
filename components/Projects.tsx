
"use client";
import dynamic from "next/dynamic";
import { projects } from "@/data";
import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import ProjectGalleryModal from "./ui/ProjectGalleryModal";

const PinContainer = dynamic(
  () => import("./ui/3d-pin").then((mod) => mod.PinContainer),
  { ssr: false }
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small collection of my{" "}
        <span className="text-yellow-400">projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            onClick={() => setSelectedProject(project)}
          >
            <PinContainer title={project.link} href="#projects">
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="./bg.png" alt="bg-img" />
                </div>
                <img src={project.img} alt={project.title} className="z-10 absolute inset-0 m-auto" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {project.title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {project.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {project.iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full lg:w-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${1 * index * 2}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-yellow-400">
                    View Gallery
                  </p>
                  <FaLocationArrow className="ms-3 text-yellow-400" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectGalleryModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          images={[selectedProject.img, ...(selectedProject.gallery || [])]}
          title={selectedProject.title}
        />
      )}
    </div>
  );
};

export default Projects;
