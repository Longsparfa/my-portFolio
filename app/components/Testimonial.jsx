import React from "react";
import testimonialIcon from "../../public/images/testimonial_heading_icon.svg";
import TestimonialCard from "./TestimonialCard";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import Link from "next/link";

const Testimonial = () => {
  return (
    <>
      <section id="testimonial" className="lg:hidden ">
        <div></div>
        <div className="container">
          <div className="flex justify-betweeen testi_flex">
            <div className="">
              <p className="flex items-center mb-[0px] gap-[15px] text-[#0dcaf0] paragraph_about">
                <span>Testimonials</span>
                <img
                  src="/images/testimonial_heading_icon.svg"
                  alt="Icon"
                  className="rotate"
                />
              </p>
              <h2 className="font-[600] text-black text-[48px] leading-[1.2em] m-[0px] about_title">
                What <span className="text-[#0dcaf0] h_m">my client</span> have
                <br />
                to say{" "}
                <span className="text-[rgb(52,46,173)] next_project">
                  about me
                </span>
              </h2>
            </div>
            <div className="hidden self-end align_self">
              <div className=""></div>
              <Link
                className="inline-flex items-center gap-[15px] text-[#0dcaf0] text-[24px] font-[600] view_btn"
                href="/testimonial"
              >
                <span className="relative transition-[0.4s] before:h-[1px] before:w-[100%] before:bg-currentcolor before:absolute before:bottom-[0px] before:left-[0px] before:transition-[0.4s] text">
                  View All Testmonial
                </span>
                <span className="relative transition-[0.4s] arrow_port bg-[rgba(0,0,0,0)] h-[30px] transform-[translateY(3px)] w-[30px] cursor-pointer inline-flex items-center justify-center relative transition-[0.3s ease-in-out] overflow-hidden arrow_port">
                  <AiOutlineArrowsAlt />
                </span>
              </Link>
            </div>
          </div>
          <div className="h-[70px]"></div>
          <div className="flex gap-[40px] testi_cards">
            <TestimonialCard
              name="Mr Binshak"
              rank="CEO, Sparkling Events"
              msg="Coming soon..."
            />
            <TestimonialCard
              name="Mr Binshak"
              rank="CEO, Sparkling Events"
              msg="Coming soon..."
            />
          </div>
        </div>
        <div className="h-[150px]"></div>
      </section>
      <section id="testimonial" className="lg:block xl:hidden container">
        <div className="">
          <p className="flex items-center mb-[0px] gap-[15px] text-[#0dcaf0] paragraph_about">
            <span>Testimonials</span>
            <img
              src="/images/testimonial_heading_icon.svg"
              alt="Icon"
              className="rotate"
            />
          </p>
          <h2 className="font-[600] text-black text-[48px] leading-[1.2em] m-[0px] about_title">
            What <span className="text-[#0dcaf0] h_m">my client</span> have
            <br />
            to say{" "}
            <span className="text-[rgb(52,46,173)] next_project">about me</span>
          </h2>
        </div>
        <div className="h-[50px]"></div>
        <div className="">
          <TestimonialCard
            name="Stella Ezeigwe"
            rank="CEO, Stelluax Global"
            msg="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
          />
          <TestimonialCard
            name="Mr Binshak"
            rank="CEO, Sparkling Events"
            msg="Coming soon..."
          />
        </div>
        <div className="hidden self-end align_self">
          <div className=""></div>
          <Link
            className="inline-flex items-center gap-[15px] text-[#0dcaf0] text-[24px] font-[600] view_btn"
            href="/testimonial"
          >
            <span className="relative transition-[0.4s] before:h-[1px] before:w-[100%] before:bg-currentcolor before:absolute before:bottom-[0px] before:left-[0px] before:transition-[0.4s] text">
              View All Testmonial
            </span>
            <span className="relative transition-[0.4s] arrow_port bg-[rgba(0,0,0,0)] h-[30px] transform-[translateY(3px)] w-[30px] cursor-pointer inline-flex items-center justify-center relative transition-[0.3s ease-in-out] overflow-hidden arrow_port">
              <AiOutlineArrowsAlt />
            </span>
          </Link>
        </div>
        <div className="h-[150px]"></div>
      </section>
    </>
  );
};

export default Testimonial;
