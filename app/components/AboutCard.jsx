import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowsAlt } from "react-icons/ai";
import cardIcon from "../../public/images/cardIcon.svg";

const AboutCard = ({ role, desc, completed }) => {
  return (
    <div className="bg-[rgb(255,255,255)] shadow-[0px_1px_2px_0px_rgba(14,12,51,0.1)] mb-[40px] rounded-[20px] flex gap-[30px] pt-[20px] pl-[40px] pr-[20px] pb-[30px] hover:shadow-[0px_1px_2px_0px_rgba(14,12,51,0.1)_5px_30px_40px_0px] hover:rotate([-5deg]) card">
      <div className="h-[80px] w-[80px] p-[10px] flex items-center justify-center  image">
        <img src="/images/cardIcon.svg" alt="cardIcon" />
      </div>
      <div className="w-[100%] relative content">
        <h3 className="font-[600] text-black text-[28px] transition-0.4s ease-in-out m-[0px] hover:rgb(255,109,90) ">
          {role}
        </h3>
        <p className="text-[#0dcaf0] leading-[1.6em] mt-[0px] mb-[15px] ">
          {desc}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[rgb(158,158,172)] text-[15px] text-uppercase tracking-[1.5px] projects">
            {completed}
          </span>
          <a
            href=""
            className="border-w-[2px] border-style-[solid] border-color-[rgb(205,203,255)] rounded-[50%] cursor-pointer inline-flex items-center justify-center h-[36px] w-[36px] relative transition-[0.3s_ease-in-out] overflow-hidden hover:bg-[rgb(255,109,90)] hover:text-[rgb(255,255,255)] hover:border-color-[rgb(255,109,90)] arrow"
          >
            {/* <ArrowSupport /> */}
            <AiOutlineArrowsAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
