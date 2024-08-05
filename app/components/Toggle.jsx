"use client";
import React, { useState } from "react";
//import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Toggle = ({ toggle, setToggle }) => {
  return (
    <div className="hidden md:flex justify-end">
      {toggle ? (
        <AiOutlineClose
          color="#fff"
          fontSize={27}
          className="cursor-pointer"
          onClick={() => setToggle(false)}
        />
      ) : (
        <AiOutlineMenu
          color="#fff"
          fontSize={27}
          className="cursor-pointer"
          onClick={() => setToggle(true)}
        />
      )}
    </div>
  );
};

export default Toggle;
