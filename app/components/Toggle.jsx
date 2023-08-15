"use client";
import React, { useState } from "react";
//import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Toggle = () => {
    const [toggle, setToggle] = useState(false);

  return (
    <div className="hidden md:flex justify-end ">
        {toggle 
        ? (<AiOutlineClose color="#fff" fontSize={27} className="cursor-pointer" onClick={() => setToggle(false)} />)
        : (<AiOutlineMenu color="#fff" fontSize={27} className="cursor-pointer"  onClick={() => setToggle(true)} />)}
        

        {toggle && (
             <div className='flex justify-flex-end align-flex-end flex-col text-align bg-#031B34 p-[2rem] absolute top-[40px] right-0 mt-[1rem] min-w-[210px] rounded-[5px] shadow-[0_0_5px_rgba(0,0,0,0.2)] z-[99999]'>
          
             <a href="#projects" className='text-[2rem] leading-[32px] my-[1rem] mx-0 text-[rgba(255,255,255,0.75)] transition 0.4s ease mr-4 hover:text-white'>
                  Project
             </a>
             <a href="#tech" className='text-[2rem] leading-[32px] my-[1rem] mx-0 text-[rgba(255,255,255,0.75)] transition 0.4s ease mr-4 hover:text-white'>
                 Technologies
             </a>
             <a href="#about" className='text-[2rem] leading-[32px] my-[1rem] mx-0 text-[rgba(255,255,255,0.75)] transition 0.4s ease mr-4 hover:text-white'>
                 About
             </a>
           
         </div>
        )}
    </div>
  )
}

export default Toggle