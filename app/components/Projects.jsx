import React from "react";
import Link from "next/link";
import { projects } from "../constants/constants";

const Projects = () => {
  return (
    <section
      className="flex flex-col p-0 my-0 mx-auto max-w-[1040px] md:flex-col sm:pt-0 sm:w-[calc(100vw_-_32px)]"
      id="projects"
    >
      <section className="grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] xl:place-items-center gap-x-[2rem] sm:gap-x-[5rem] gap-y-[3rem] ">
        {projects.map((project) => {
          return (
            <div
            className="bg-white rounded-[10px] w-full shadow-md hover:shadow-lg transition duration-500"
              // className="bg-white rounded-[10px] blogCard-box text-center w-[400px]  sm:w-[300px] "
              key={project.id}
            >
              <img
                src={project.image}
                alt={project.title}
                // className="w-[400px] h-[250px] "
                className="w-full h-[250px] object-cover rounded-t-[10px]"
              />
              <div 
              // className="text-center z-20 w-[100%]"
              className="p-6"
              >
                <Link href={project.visit} className="cursor-pointer">
                  <h3 className="font-medium tracking-[2px] text-[#000] py-[0.5rem] px-0 text-[3rem] sm:text-[2rem]">
                    {project.title}
                  </h3>
                </Link>
                <hr className="w-[50px] h-[3px] my-[20px] mx-auto border-0 bg-[#B4BDFF]" />
              </div>
              <p className="h-[120px] overflow-y-hidden py-0 px-[50px] text-[#202020] leading-[24px] text-justify sm:text-center sm:p-.3rem">
                {project.description}
              </p>
              <div>
                <div className="text-center text-[#d81010] z-20 w-[100%]">
                  Stack
                </div>
                <ul className="flex justify-around p-[2rem]">
                  {project.tags.map((t, i) => {
                    return (
                      <li className="text-[#d82424] text-[1.5rem]" key={t.i}>
                        {t}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <ul className="p-0 flex justify-around my-[2.5rem] mx-0 ">
                <li className="overflow-y-hidden">
                  <a
                    className="text-[#242424] text-[1.6rem] py-[1rem] px-[1.5rem] bg-[#B4BDFF] rounded-[15px] transition 0.5s hover:bg-[#83A2FF] overflow-y-hidden "
                    href={project.visit}
                  >
                    SeeLive
                  </a>
                </li>
                <li className="overflow-y-hidden">
                  <a
                    className="text-[#242424] text-[1.6rem] py-[1rem] px-[1.5rem] bg-[#B4BDFF] rounded-[15px] transition 0.5s hover:bg-[#83A2FF]"
                    href={project.source}
                  >
                    SourceCode
                  </a>
                </li>
              </ul>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Projects;


