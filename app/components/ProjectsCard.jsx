import Link from "next/link";
import React from "react";

const ProjectsCard = ({ title, img, id }) => {
  return (
    <div className="relaive rounded-[20px] overflow-hidden  portCard">
      <div className="flex items-center gap-[70px] py-[2px] px-[30px] bg-card-header shadow-[0_30px_27px_0_#231f6f33] card_header">
        <div className="flex gap-[16px] port_btn">
          <span className="bg-[#fff] rounded-[50%] inline-block h-[27px] w-[27px] shadow-[inset_0_-2px_4px_0_#1f145f26] filter-[drop-shadow(0_1px_2px_rgba(31,20,95,0.2))_drop-shadow(0_8px_30px_rgba(31,20,95,0.1))] "></span>
          <span className="bg-[#fff] rounded-[50%] inline-block h-[27px] w-[27px] shadow-[inset_0_-2px_4px_0_#1f145f26] filter-[drop-shadow(0_1px_2px_rgba(31,20,95,0.2))_drop-shadow(0_8px_30px_rgba(31,20,95,0.1))] "></span>
          <span className="bg-[#fff] rounded-[50%] inline-block h-[27px] w-[27px] shadow-[inset_0_-2px_4px_0_#1f145f26] filter-[drop-shadow(0_1px_2px_rgba(31,20,95,0.2))_drop-shadow(0_8px_30px_rgba(31,20,95,0.1))] "></span>
        </div>
        <div className="bg-[#fff] rounded-[8px] h-[30px] w-[100%] shadow-[0_1px_2px_0_#1f145f33,_0_8px_30px_0_#1f145f1a,_inset_0_-2px_4px_0_#1f145f26] search_btn"></div>
      </div>
      <Link
        href={`/portfolio/${id}/portfolio-details`}
        className="block min-h-[200px] relative overflow-hidden thumbnail"
      >
        <img
          src={img}
          alt=""
          className="w-[100%] transition-[all_0.4s_ease] transform-[scale(1.07)] "
        />
      </Link>
      <div className="hover:bottom-[0px] pro_title">
        <h2 className="font-[500] text-[28px] text-[#000] second">{title}</h2>
        <Link
          href="/portfolio/portfolio-details/id"
          className="inline-flex items-center gap-[15px] font-[500] text-[16px]  view"
        >
          <span className="relative transition-[0.4s] text-black text-uppercase ">
            View Work
          </span>
          <svg
            width="5"
            height="9"
            viewBox="0 0 5 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0L5 4.5L0 9L0 0Z" fill="currentColor"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsCard;
