import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCss3Full } from 'react-icons/di';

//first-div grid grid-cols-5 gap-2 grid-rows-1 p-1 pt-2 sm:grid-rows-5 gap-0.5 gap-0.5
// 2nd-div row-start-1 col-1 row-end-2 col-end-2 flex flex-row align-center sm:row-start-1 col-1 row-end-2 col-end-3
//3rd row-start-1 col-start-1 row-end-2 col-end-4 flex justify-around sm:row-start-2 col-2 row-end-3 col-end-5
//row-start-1 col-1 row-end-2 col-end-2 flex justify-space-around align-center sm:row-start-1 col-4 row-end-2 col-end-6


const Header = () => {
  return (
    <div className='grid grid-cols-3 gap-x-8 grid-rows-1 p-[1rem] pt-[2rem]  '>

        <div className='row-start-1 column-start-1 row-end-2 column-end-2'>
            <Link href="/" className='flex align-center text-white'>
                    <DiCss3Full size="3rem" /> <span>Parfa</span>
            </Link>
        </div>

        <div className='row-start-1 column-start-1 row-end-2 column-end-2 flex justify-around align-center'>
          
            <Link href="#projects" className='text-[2rem] leading-[32px] transition bg-[rgba(255, 255, 255, 0.75)] 0.4s ease hover:text-white'>
              Projects
            </Link>
            <Link href="#tech" className='text-[2rem] leading-[32px] transition bg-[rgba(255, 255, 255, 0.75)] 0.4s ease hover:text-white'>
               Technologies
            </Link>
            <Link href="#about" className='text-[2rem] leading-[32px] transition bg-[rgba(255, 255, 255, 0.75)] 0.4s ease hover:text-white'>
              About
            </Link>
          
        </div>

        <div className='row-start-1 column-start-5 row-end-2 column-end-6 flex justify-around align-center'>
          <Link href="https://github.com/Longsparfa" className='transition 0.3s ease text-white rounded-[50px] p-[8px] hover:bg-[#212d45] cursor-pointer'>
             <AiFillGithub size="3rem" />
          </Link>
          <Link href="https://www.linkedin.com/in/parfa-longs-661643189/" className='transition 0.3s ease text-white rounded-[50px] p-[8px] hover:bg-[#212d45] cursor-pointer'>
              <AiFillLinkedin size="3rem" />
          </Link>
          <Link href="https://www.instagram.com/longsingenious/" className='transition 0.3s ease text-white rounded-[50px] p-[8px] hover:bg-[#212d45] cursor-pointer'>
               <AiFillInstagram size="3rem"/>
          </Link>
        </div>

    </div>
  );
}

export default Header;