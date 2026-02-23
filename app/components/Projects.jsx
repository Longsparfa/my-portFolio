import React from "react";
import Link from "next/link";
import { projects } from "../constants/constants";
import ProjectsCard from "./ProjectsCard";
import { AiOutlineArrowsAlt } from "react-icons/ai";

const Projects = () => {
  return (
    <>
      <section id="portfolio" className="lg:hidden ">
        <div className="h-[150px]"></div>
        <div className="container flex w-auto gap-y-[0px] gap-x-[80px] mb-[80px] flex_Projects">
          <div className="portfolio w-[50%] ">
            <div className="mb-[80px]">
              <p className="flex items-center mb-[0px] gap-[15px] text-[#0dcaf0] paragraph_about">
                <span>Portfolio</span>
                <img
                  src="/images/portfolio_heading.svg"
                  alt="icon"
                  className="rotate"
                />
              </p>
              <h2 className="font-[600] text-black text-[48px] leading-[1.2em] m-[0px] about_title">
                My latest awesome{" "}
                <span className="text-[#0dcaf0] h_m">Projects</span>
              </h2>
            </div>
            <div className="h-[50px] div-t"></div>
            <div className="mb-[80px]">
              <ProjectsCard
                title="Sparkling Events"
                img="/images/P9.png"
                id={9}
                alt="Sparkling"
              />
            </div>
            <div className="h-[25px] div-b"></div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-[15px] text-[#0dcaf0] text-[24px] font-[600] view_btn mb-[80px]"
            >
              <span className="relative transition-[0.4s] before:h-[1px] before:w-[100%] before:bg-currentcolor before:absolute before:bottom-[0px] before:left-[0px] before:transition-[0.4s] text">
                View All Project
              </span>
              <span className="relative transition-[0.4s] arrow_port bg-[rgba(0,0,0,0)] h-[30px] transform-[translateY(3px)] w-[30px] cursor-pointer inline-flex items-center justify-center relative transition-[0.3s ease-in-out] overflow-hidden ">
                <AiOutlineArrowsAlt />
              </span>
            </Link>
          </div>
          <div className="w-[50%] projects">
            <div className="mb-[80px]">
              <ProjectsCard
                title="Stellaux Global"
                img="/images/P4.png"
                id={4}
                alt="Stellaux"
              />
            </div>
            <ProjectsCard
              title="Ideoshpere"
              img="/images/P2.png"
              id={2}
              alt="Ideoshpere"
            />
          </div>
        </div>
        <div></div>
      </section>
      <section className="lg:block xl:hidden container">
        <div className="h-[150px]"></div>
        <div className="portfolio w-[90%] ">
          <div className="mb-[80px]">
            <p className="flex items-center mb-[0px] gap-[15px] text-[#0dcaf0] paragraph_about">
              <span>Portfolio</span>
              <img
                src="/images/portfolio_heading.svg"
                alt="icon"
                className="rotate"
              />
            </p>
            <h2 className="font-[600] text-black text-[48px] leading-[1.2em] m-[0px] about_title">
              My latest awesome{" "}
              <span className="text-[#0dcaf0] h_m">Projects</span>
            </h2>
          </div>
          <div className="h-[50px] div-t"></div>
          <div className="mb-[80px]">
            <ProjectsCard
              title="Sparkling Events"
              img="/images/p9.png"
              id={9}
            />
          </div>
          <div className="mb-[80px]">
            <ProjectsCard title="Stellaux Global" img="/images/p4.png" id={4} />
          </div>
          <div className="mb-[40px] ">
            <ProjectsCard title="Ideoshpere" img="/images/p2.png" id={2} />
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-[15px] text-[#0dcaf0] text-[24px] font-[600] view_btn mb-[80px]"
          >
            <span className="relative transition-[0.4s] before:h-[1px] before:w-[100%] before:bg-currentcolor before:absolute before:bottom-[0px] before:left-[0px] before:transition-[0.4s] text">
              View All Project
            </span>
            <span className="relative transition-[0.4s] arrow_port bg-[rgba(0,0,0,0)] h-[30px] transform-[translateY(3px)] w-[30px] cursor-pointer inline-flex items-center justify-center relative transition-[0.3s ease-in-out] overflow-hidden ">
              <AiOutlineArrowsAlt />
            </span>
          </Link>
        </div>
        <div className="w-[90%] projects"></div>
      </section>
    </>
    // <section
    //   className="grid p-0 my-0 mx-auto max-w-[1040px] md:flex-col sm:pt-0 sm:w-[calc(100vw_-_32px)]"
    //   id="projects"
    // >
    //   <section className="grid grid-cols-2 md:grid-cols-1 xl:place-items-center gap-x-[2rem] sm:gap-x-[5rem] gap-y-[3rem] ">
    //     {projects.map((project) => {
    //       return (
    //         <div
    //           className="bg-white rounded-[10px] w-full shadow-md hover:shadow-lg transition duration-500"
    //           // className="bg-white rounded-[10px] blogCard-box text-center w-[400px]  sm:w-[300px] "
    //           key={project.id}
    //         >
    //           <img
    //             src={project.image}
    //             alt={project.title}
    //             // className="w-[400px] h-[250px] "
    //             className="w-full h-[250px] object-cover rounded-t-[10px]"
    //           />
    //           <div
    //             // className="text-center z-20 w-[100%]"
    //             className="p-6"
    //           >
    //             <Link
    //               target="_blank"
    //               href={project.visit}
    //               className="cursor-pointer"
    //             >
    //               <h3 className="font-medium tracking-[2px] text-[#000] py-[0.5rem] px-0 text-[3rem] sm:text-[2rem]">
    //                 {project.title}
    //               </h3>
    //             </Link>
    //             <hr className="w-[50px] h-[3px] my-[20px] mx-auto border-0 bg-[#B4BDFF]" />
    //           </div>
    //           <p className="h-[120px] overflow-y-hidden py-0 px-[50px] text-[#202020] leading-[24px] text-justify sm:text-center sm:p-.3rem">
    //             {project.description}
    //           </p>
    //           <div>
    //             <div className="text-center text-[#d81010] z-20 w-[100%]">
    //               Stack
    //             </div>
    //             <ul className="flex justify-around p-[2rem]">
    //               {project.tags.map((t, i) => {
    //                 return (
    //                   <li className="text-[#d82424] text-[1.5rem]" key={t.i}>
    //                     {t}
    //                   </li>
    //                 );
    //               })}
    //             </ul>
    //           </div>
    //           <ul className="pr-10 md:p-0 flex justify-around my-[2.5rem] mx-0 ">
    //             <li className="overflow-y-hidden">
    //               <a
    //                 target="_blank"
    //                 className="text-[#242424] text-[1.6rem] py-[1rem] px-[1.5rem] bg-[#B4BDFF] rounded-[15px] transition 0.5s hover:bg-[#83A2FF] overflow-y-hidden "
    //                 href={project.visit}
    //               >
    //                 SeeLive
    //               </a>
    //             </li>
    //             <li className="overflow-y-hidden">
    //               <a
    //                 target="_blank"
    //                 className="text-[#242424] text-[1.6rem] py-[1rem] px-[1.5rem] bg-[#B4BDFF] rounded-[15px] transition 0.5s hover:bg-[#83A2FF]"
    //                 href={project.source}
    //               >
    //                 SourceCode
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       );
    //     })}
    //   </section>
    // </section>
  );
};

export default Projects;
