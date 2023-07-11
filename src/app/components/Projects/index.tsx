import React from "react";

const Projects = () => {
  const ProjectItem = () => {
    return (
      <div className="border-t-white border-t-2 w-full py-2 md:py-6 border-b-white border-b">
        <p className="text-xl md:text-2xl uppercase font-light">Shop-X</p>
        <p>FRONTEND, BACKEND</p>
      </div>
    );
  };
  return (
    <div className="bg-black text-white min-h-screen flex md:justify-center md:items-center w-full">
      <div className="md:ml-[100px] py-8 md:py-16 lg:py-24 w-full">
        <div className="container mx-auto px-4">
          <p className="mb-5 uppercase text-lime">Projects</p>
          <div className="grid md:grid-cols-2 w-full md:gap-x-5">
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
