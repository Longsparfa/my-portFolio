import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="flex flex-row p-0 my-0 mx-auto box-content relative overflow-hidden grid-cols-1 md:flex-col sm:pt-[0] sm:flex-col">
      <div className="w-[100%] md:flex md:flex-col md:m-auto sm:w-[80%]">
        <h2 className="font-extrabold text-[65px] leading-[72px] w-max-content max-w-[100%] bg-white-gradient mb-[16px] pt-[58px] px-0 pb-[16px] md:text-[56px] md:leading-[56px] md:mb-[12px] md:pt-[40px] md:pb-[12px] sm:text-[28px] sm:leading-[32px] md:mb-[8px] sm:pt-[16px] sm:pb-[8px]">
          Welcome To <br />
          My Personal Portfolio
        </h2>
        <p className="max-w-[800px] text-[24px] sm:text-[16px] leading-[40px] sm:leading-[24px] font-light pb-[3.6rem] md:pb-[24px] text-[rgba(255,_255,_255,_0.5)] md:max-w-[670px] md:text-[20px] md:leading-[32px]">
          I seek opportunities to grow and take my development skills to the
          next level and build awesome apps.
        </p>
        <Button />

        <div className="w-[64px] h-[6px] ml-[2rem] rounded-[10px] bg-[#FFB3EE]" />
        <h2 className="font-extrabold text-[65px] leading-[72px] w-max-content max-w-[100%] bg-white-gradient mb-[16px] pt-[58px] md:px-[48px] pb-[16px] md:text-[56px] md:leading-[56px] md:mb-[12px] md:pt-[40px] md:pb-[12px] sm:text-[28px] sm:leading-[32px] md:mb-[8px] sm:pt-[16px] sm:pb-[8px] mr-[5rem] ">
          Projects
        </h2>
      </div>
    </section>
  );
};

export default Hero;
