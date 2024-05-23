"use client";
import BgAnimation from "./components/BgAnimation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <>
      <div className="max-w-[1280px] mx-auto">
        <Header />
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
