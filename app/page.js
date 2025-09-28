"use client";
import { useState } from "react";
import BgAnimation from "./components/BgAnimation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Timeline from "./components/Timeline";
import About from "./components/About";
import Testimonial from "./components/Testimonial";

export default function Home() {
  const [toggle, setToggle] = useState(false);

  function hideMenu() {
    setToggle(false);
  }

  return (
    <>
      <div>
        {/* className="max-w-[1280px] mx-auto relative" */}
        
        <Hero />
        {/* <BgAnimation /> */}
        <Projects />
        {/* <Technologies /> */}
        <About />
        {/* <Timeline /> */}
        <Testimonial />
        
      </div>
    </>
  );
}
