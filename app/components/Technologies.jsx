import React from 'react';
import { DiReact, DiNodejs, DiGit, DiFirebase } from 'react-icons/di';


const Technologies = () => {
  return (
    <section className='flex flex-col pt-[32px] px-[48px] pb-0 my-0 mx-auto max-w-[1040px] box-content relative overflow-hidden grid-cols-1 md:pt-[24px] md:flex-col sm:pt-[16px] sm:px-[16px] sm:pb-[0] sm:w-[calc(100vw_-_32px)] sm:flex-col' id='tech'>
        <div className='w-[64px] h-[6px] rounded-[10px] bg-[#FFB3EE] my-[4rem] mx-0' />
        <h2 className='font-extrabold text-[56px] leading-[56px] w-max-content max-w-[100%] bg-white-gradient mb-[16px] p-0 sm:ml-2 md:text-[48px] md:leading-[48px] md:mb-[12px] md:p-0 sm:text-[32px] sm:leading-[40px] md:mb-[8px]'>Technologies</h2>
        <p className='max-w-[800px] text-[24px] sm:text-[16px] leading-[40px] sm:leading-[24px] text-[300] pb-[3.6rem] md:pb-[24px] text-[rgba(255,_255,_255,_0.5)] md:max-w-[670px] md:text-[20px] md:leading-[32px]'>I have worked with popular web development technologies like NodeJs, ReactJs, Tailwindcss, Bootstrap and so on. I'm working really hard to conquer both Back-end And Front-end</p>
        <ul className='grid grid-cols-3 gap-[40px] my-[3rem] mx-0 lg:my-[64px] lg:mx-0 md:mt-[64px] md:mb[0] md:gap-[24px] sm:my-[32px]'>
            <li className='max-w-[320px] flex flex-col md:max-w-[203px] sm:mb-[14px] sm:max-w-[320px]'>
                <picture className='m-[2rem]'>
                    <DiReact size="3rem" />
                </picture>
                <div className='flex flex-col sm:flex sm:ml-[18px]'>
                    <h4 className='font-bold text-[28px] leading-[32px] tracking-[0.02em] text-[#ffffff] mb-[8px] md:text-[24px] md:leading-[28px] sm:text-[20px] sm:mb-[4px]'>Front-End</h4>
                    <p className='text-[18px] leading-[30px] text-[rgba(255, 255, 255, 0.75)] md:text-[16px] md:leading-[28px] sm:text-[14px] sm:leading-[22px]'>
                        Exprience with 
                        <br /> 
                        React.js</p>
                </div>
            </li>
            <li className='max-w-[320px] flex flex-col md:max-w-[203px] sm:mb-[14px] sm:max-w-[320px] flex-row'>
                <picture className='m-[2rem]'>
                    <DiNodejs size="3rem" />
                </picture>
                <div className='flex flex-col sm:flex sm:ml-[18px]'>
                    <h4 className='text-bold text-[28px] leading-[32px] tracking-[0.02em] text-[#ffffff] mb-[8] md:text-[24px] md:leading-[28px] sm:text-[20px] sm:mb-[4px]'>Front-End</h4>
                    <p className='text-[18px] leading-[30px] text-[rgba(255, 255, 255, 0.75)] md:text-[16px] md:leading-[28px] sm:text-[14px] sm:leading-[22px]'>
                        Familiarity with 
                        <br /> 
                        Node.js</p>
                </div>
            </li>
            <li className='max-w-[320px] flex flex-col md:max-w-[203px] sm:mb-[14px] sm:max-w-[320px] flex-row'>
                <picture className='m-[2rem]'>
                    <DiGit size="3rem" />
                </picture>
                <div className='flex flex-col sm:flex sm:ml-[18px]'>
                    <h4 className='text-bold text-[28px] leading-[32px] tracking-[0.02em] text-[#ffffff] mb-[8] md:text-[24px] md:leading-[28px] sm:text-[20px] sm:mb-[4px]'>Version Control System</h4>
                    <p className='text-[18px] leading-[30px] text-[rgba(255, 255, 255, 0.75)] md:text-[16px] md:leading-[28px] sm:text-[14px] sm:leading-[22px]'>Exprience with <br /> Git & Github</p>
                </div>
            </li>
            <li className='max-w-[320px] flex flex-col md:max-w-[203px] sm:mb-[14px] sm:max-w-[320px] flex-row'>
                <picture className='m-[2rem]'>
                    <DiFirebase size="3rem" />
                </picture>
                <div className='flex flex-col sm:flex sm:ml-[18px]'>
                    <h4 className='text-bold text-[28px] leading-[32px] tracking-[0.02em] text-[#ffffff] mb-[8] md:text-[24px] md:leading-[28px] sm:text-[20px] sm:mb-[4px]'>Back-End</h4>
                    <p className='text-[18px] leading-[30px] text-[rgba(255, 255, 255, 0.75)] md:text-[16px] md:leading-[28px] sm:text-[14px] sm:leading-[22px]'>Exprience with <br /> Firebase</p>
                </div>
            </li>
        </ul>
        <div className='w-[64px] h-[6px] rounded-[10px] bg-[#FFB3EE]' />
    </section>
  )
}

export default Technologies;