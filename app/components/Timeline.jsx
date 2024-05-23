import React from "react";
import { TimeLineData } from "../constants/constants";

const Timeline = () => {
  return (
    <section
      className="flex flex-col pt-[32px] px-[48px] pb-0 my-0 mx-0 max-w-[1040px] box-content relative overflow-hidden grid-cols-1 md:pt-[24px] md:flex-col sm:pt-[16px] sm:px-[16px] sm:pb-[0] sm:w-[calc(100vw_-_32px)] sm:flex-col"
      id="about"
    >
      <h2 className="font-extrabold text-[56px] leading-[56px] w-max-content max-w-[100%] bg-white-gradient mb-[16px] p-[0] md:text-[48px] md:leading-[48px] md:mb-[12px] md:p-[0] sm:text-[32px] sm:leading-[40px] md:mb-[8px]">
        About Me
      </h2>
      <p className="max-w-[800px] text-[24px] sm:text-[16px] leading-[40px] sm:leading-[24px] text-[300] pb-[3.6rem] md:pb-[24px] text-[rgba(255,_255,_255,_0.5)] md:max-w-[670px] md:text-[20px] md:leading-[32px]">
        I'm so much interested in web 2.0 because i believe that a solid
        background here, will help me thrive in the web 3.0 world which is
        undeniably the future.
      </p>
      <ul className="grid grid-cols-3 gap-[40px] my-[3rem] mx-0 lg:my-[64px] lg:mx-0 md:mt-[64px] md:mb[0] md:gap-[24px] sm:my-[32px]">
        {TimeLineData.map((t, index) => (
          <li key={index}>
            {t.year} - <span>{t.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Timeline;
