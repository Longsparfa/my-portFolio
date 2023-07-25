import React from 'react';
import Link from 'next/link';
import { projects } from '../constants/constants';

const Projects = () => {
  return (
    <section className='flex flex-col p-0 my-0 mx-auto max-w-[1040px] box-content relative overflow-hidden grid-cols-1 md:flex-col sm:pt-0 sm:w-[calc(100vw_-_32px)]' id='projects'>
        <div className='w-[64px] h-[6px] rounded-[10px] bg-white bg-secdividerCA-gradient' />
        <h2 className='font-extrabold text-[65px] leading-[72px] w-max-content max-w-[100%] bg-white-gradient mb-[16px] pt-[58px] px-0 pb-[16px] md:text-[56px] md:leading-[56px] md:mb-[12px] md:pt-[40px] md:pb-[12px] sm:text-[28px] sm:leading-[32px] md:mb-[8px] sm:pt-[16px] sm:pb-[8px]'>Projects</h2>
        <section className='grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] p-[3rem] place-items-center gap-x-[2rem] gap-y-[3rem] sm:p-[2rem] sm:pb-0 '>
            {projects.map(project => {
                return (
               <div className='rounded-[10px] blogCard-box text-center w-[400px] sm:w-[100%]' key={project.id}>
                    <img src={project.image} alt={project.title} className='w-[100%] h-[100%] object-cover overflow-hidden' />
                    <div className='text-center z-index-20 w-[100%]'>
                        <Link href={project.visit} className='cursor-pointer' >
                         <h3 className='font-medium tracking-[2px] text-[#9cc9e3] py-[0.5rem] px-0 text-[3rem]'>{project.title}</h3>
                        </Link>
                        <hr className='w-[50px] h-[3px] my-[20px] mx-auto border-0 bg-[#d0bb57]' />
                    </div>
                    <p className='w-[100%] py-0 px-[50px] text-[#e4e6e7] leading-[24px] text-justify sm:p-.3rem'>{project.description}</p>
                    <div>
                      <div className='text-center z-index-20 w-[100%]'>Stack</div>
                      <ul className='flex justify-around p-[2rem]'>
                        {project.tags.map((t, i) => {
                            return (
                                <li className='text-[#d8bfbf] text-[1.5rem]' key={t.i}>{t}</li>
                            )
                        })}
                      </ul>
                    </div>
                    <ul className='p-0 flex justify-around my-[2.5rem] mx-0'>
                        <li><a className='text-[#d4c0c0] text-[1.6rem] py-[1rem] px-[1.5rem] bg-[#6b3030] rounded-[15px] transition 0.5s hover:bg-[#801414]' href={project.visit}>SeeLive</a></li>
                        <li><a className='text-[#d4c0c0] text-[1.6rem] py-[1rem] px-[1.5rem] bg-[#6b3030] rounded-[15px] transition 0.5s hover:bg-[#801414]' href={project.source}>SourceCode</a></li>
                    </ul>
                </div>

                );
            })}
        </section>
    </section>
  )
}

export default Projects;