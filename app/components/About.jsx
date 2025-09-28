import React from "react";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="lg:hidden flex items-center max-h-[1050px] min-h-[100vh] overflow-hidden pt-[145px] px-[0px] pb-[110px] relative about_sec"
      >
        <div className="container flex justify-center flex_noAlign">
          <div className="w-[50%] pr-[50px] about_me">
            <p className="flex items-center mb-[0px] gap-[15px] text-[#0dcaf0] paragraph_about">
              <span>About Me</span>
              <img
                src="/images/about_heading.svg"
                alt="icon"
                className="rotate"
              />
            </p>
            <h2 className="font-[600] text-black text-[48px] leading-[1.2em] m-[0px] about_title">
              Why you <span className="text-[#0dcaf0] h_m">hire me</span> for
              your{" "}
              <span className="text-[rgb(52,46,173)] next_project">
                next project?
              </span>
            </h2>
            <div className="h-[50px] div-t"></div>
            <p className="text-black m-0">
              I'm not just a developer but a problem solver who's passionate
              about building digital experiences that make a real impact. With
              over 4 years of experience in frontend development, I've honed my
              skills in crafting responsive, user-friendly interfaces that bring
              ideas to life. I've worked on personal projects, collaborated with
              cross-functional teams, and I'm currently diving deeper into
              Next.js to stay ahead of the curve
            </p>
            <p className="text-black">
              What I'm most proud of is my ability to learn quickly, adapt to
              new challenges, and deliver results that exceeds expectations. I'm
              not afraid to ask questions, seek feedback, or try new approaches
              - and I'm always looking for ways to improve my craft.
            </p>
            <p className="text-black">
              If you're looking for someone who's dedicated, passionate, and
              eager to contribute to a project that alligns with your vision,
              I'm your guy. I'm excited to bring my skills and experience to a
              team that values innovation, creatiivity, and collaboration. Let's
              build something amazing together!
            </p>
            <div className="h-[25px] div-b"></div>
            <a
              href=""
              className="bg-[#0dcaf0] text-[#fff] font-[600] border-none rounded-[10px] outline-none overflow-hidden py-[13px] px-[37px] cursor-pointer inline-flex items-center justify-center btn"
            >
              <span className="download">Hire Me</span>
            </a>
          </div>
          <div className="w-[50%] pl-[70px] about_cards">
            <AboutCard
              role="Frontend"
              desc="Pixel Perfect implementation of designs"
              completed="20 Projects"
            />
            <AboutCard role="Backend" desc="" completed="3+ Projects" />
            <AboutCard
              role="Website Maintenance"
              desc=""
              completed="5+ Projects"
            />
            <AboutCard
              role="Domain & Hosting"
              desc=""
              completed="10+ Projects"
            />
          </div>
        </div>
      </section>
      <section id="about" className="lg:block xl:hidden container">
        <div className="w-[95%]  about_me">
          <p className="flex items-center mb-[0px] gap-[15px] text-[#0dcaf0] paragraph_about">
            <span>About Me</span>
            <img
              src="/images/about_heading.svg"
              alt="icon"
              className="rotate"
            />
          </p>
          <h2 className="font-[600] text-black text-[48px] leading-[1.2em] m-[0px] about_title">
            Why you <span className="text-[#0dcaf0] h_m">hire me</span> for your{" "}
            <span className="text-[rgb(52,46,173)] next_project">
              next project?
            </span>
          </h2>
          <div className="h-[50px] div-t"></div>
          <p className="text-black sm:text-[18px] m-0">
            I'm not just a developer but a problem solver who's passionate about
            building digital experiences that make a real impact. With over 4
            years of experience in frontend development, I've honed my skills in
            crafting responsive, user-friendly interfaces that bring ideas to
            life. I've worked on personal projects, collaborated with
            cross-functional teams, and I'm currently diving deeper into Next.js
            to stay ahead of the curve
          </p>
          <p className="text-black sm:text-[18px]">
            What I'm most proud of is my ability to learn quickly, adapt to new
            challenges, and deliver results that exceeds expectations. I'm not
            afraid to ask questions, seek feedback, or try new approaches - and
            I'm always looking for ways to improve my craft.
          </p>
          <p className="text-black sm:text-[18px]">
            If you're looking for someone who's dedicated, passionate, and eager
            to contribute to a project that alligns with your vision, I'm your
            guy. I'm excited to bring my skills and experience to a team that
            values innovation, creatiivity, and collaboration. Let's build
            something amazing together!
          </p>
          <div className="h-[25px] div-b"></div>
          <div className="w-[50] about_cards">
            <AboutCard
              role="Frontend"
              desc="Pixel Perfect implementation of designs"
              completed="20 Projects"
            />
            <AboutCard role="Backend" desc="" completed="3+ Projects" />
            <AboutCard
              role="Website Performance"
              desc=""
              completed="5+ Projects"
            />
            <AboutCard
              role="Domain & Hosting"
              desc=""
              completed="10+ Projects"
            />
          </div>
          <div className="mb-[80px]">
            <a
              href=""
              className="bg-[#0dcaf0] text-[#fff] font-[600] border-none rounded-[10px] outline-none overflow-hidden py-[13px] px-[37px] cursor-pointer inline-flex items-center justify-center btn"
            >
              <span className="download">Hire Me</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
