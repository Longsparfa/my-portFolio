//"use client"
import React from "react";
import Link from "next/link";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import Toggle from "./Toggle";

const Header = () => {
  return (
    <div className="fixed right-[2px] left-[2px] z-[1] bg-[#666] grid grid-cols-3 grid-rows-1 md:grid-cols-2 px-8 pt-5 ">
      <div className="col-start-1">
        <Link href="/" className="flex items-center text-white">
          <DiCss3Full size="3rem" /> <span>Parfa</span>
        </Link>
      </div>

      <ul className="col-start-3 flex justify-around items-center md:hidden sm:text-[16px]">
        <li>
          <Link
            href="#projects"
            className="text-[2rem] leading-[32px] text-[rgba(255,255,255,0.75)] transition 0.4s ease mr-4 hover:text-white"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="#tech"
            className="text-[2rem] leading-[32px] text-[rgba(255,255,255,0.75)] transition 0.4s ease mr-4 hover:text-white"
          >
            Technologies
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            className="text-[2rem] leading-[32px] text-[rgba(255,255,255,0.75)] transition 0.4s ease mr-4 hover:text-white"
          >
            About
          </Link>
        </li>
      </ul>

      <div className="md:hidden flex col-start-2 row-start-1 ">
        <Link
          target="_blank"
          href="https://github.com/Longsparfa"
          className="transition 0.3s ease text-white rounded-[50px] p-[8px] hover:bg-[#212d45] cursor-pointer"
        >
          <AiFillGithub size="3rem" />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/parfa-longs-661643189/"
          className="transition 0.3s ease text-white rounded-[50px] p-[8px] hover:bg-[#212d45] cursor-pointer"
        >
          <AiFillLinkedin size="3rem" />
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/longsingenious/"
          className="transition 0.3s ease text-white rounded-[50px] p-[8px] hover:bg-[#212d45] cursor-pointer"
        >
          <AiFillInstagram size="3rem" />
        </Link>
      </div>
      <Toggle />
    </div>
  );
};

export default Header;
