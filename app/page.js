"use client";
import { useState } from "react";
import BgAnimation from "./components/BgAnimation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Timeline from "./components/Timeline";

export default function Home() {
  const [toggle, setToggle] = useState(false);

  function hideMenu() {
    setToggle(false);
  }

  return (
    <>
      <div className="max-w-[1280px] mx-auto relative">
        <Header toggle={toggle} setToggle={setToggle} />
        <div className="fixed right-0 bottom-1 top-10 z-[666] ">
          {toggle && (
            <div className=" flex justify-end items-end flex-col text-center p-[2rem] mt-[1rem] min-w-[210px] rounded-[5px] shadow-[0_0_10px_rgba(0,0,0,0.2)]">
              <a
                href="#projects"
                className="text-[2rem] leading-[32px] my-[1rem] mx-0 text-[rgba(255,255,255,0.75)] transition 0.4s ease mr-4 hover:text-white cursor-pointer"
                onClick={hideMenu}
              >
                Project
              </a>
              <a
                href="#tech"
                className="text-[2rem] leading-[32px] my-[1rem] mx-0 text-[rgba(255,255,255,0.75)] transition 0.4s ease mr-4 hover:text-white"
                onClick={hideMenu}
              >
                Technologies
              </a>
              <a
                href="#about"
                className="text-[2rem] leading-[32px] my-[1rem] mx-0 text-[rgba(255,255,255,0.75)] transition 0.4s ease mr-4 hover:text-white"
                onClick={hideMenu}
              >
                About
              </a>
            </div>
          )}
        </div>
        <section className="grid pt-[32px] px-[48px] pb-0 my-0 mx-aut max-w-[1040p] box-content relative overflow-hidden grid-cols-2">
          <Hero />
          <BgAnimation />
        </section>
        <Projects />
        <Technologies />
        <Timeline />
        <Footer />
      </div>
    </>
  );
}
