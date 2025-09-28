import React from "react";
import Link from "next/link";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
// import icon from "../../public/images/footer_shape.svg";

const Footer = () => {
  return (
    <footer className="bg-black relative h-fit overflow-hidden ">
      <div className="absolute left-[55%] top-[45px] rotate footer_img">
        <img src="/images/footer_shape.svg" alt="icon" className="" />
      </div>
      <div className="container">
        <div className="flex lg:flex-col items-center justify-around gap-y-[25px] gap-x-[30px] py-[80px] px-[0px] footer_cta">
          <h2 className="font-[600] sm:text-[40px] md:text-[50px] text-[75px] ">
            Have a project?
          </h2>
          <a
            href=""
            className="inline-flex items-center justify-center font-600 rounded-[10px] py-[13px] px-[37px] overflow-hidden bg-[#0dcaf0]"
          >
            <span>Let&apos;s talk</span>
          </a>
        </div>
        <div className="relative text-[rgb(181,181,192)] text-center py-[21px] px-[0px] before:bg-footer before:h-[1px] before:absolute before:top-[0px] before:left-[50%] before:w-[915px] before:transform-[translateX(-50%)] copyright">
          © {new Date().getFullYear()} <a href="/">parfalongs</a>. All rights
          reserved
        </div>
      </div>
    </footer>

    // <section className="bg-white w-[calc(100vw_-_96px)] max-w-[1040px] pt-[2rem] px-[48px] pb-[40px] my-[1rem] mx-auto box-content sm:pt-[0] sm:px-[16px] sm:pb-[48px] sm:w-[calc(100vw_-_96px)]">
    //   <ul className="border-t-[1px] border-solid border-[rgba(255, 255, 255, 0.1)] grid grid-cols-3 gap-[40px] pt-[40px] px-[0] pb-[28px] lg:pt-[32px] lg:px-0 lg:pb-[16px] md:w-[100%] md:gap-[16px] sm:pr-[4px] sm:gap-[4px]">
    //     <div className="flex flex-col max-w-[220px] w-[100%]">
    //       <h4 className="not-italic font-semibold text-[12px] leading-[24px] uppercase text-[#000] mb-[16px] sm:text-[10px] sm:leading-[12px] sm:mb-[8px]">
    //         Call
    //       </h4>
    //       <a
    //         className="sm:text-[8px] md:text-[15px] text-[18px] leading-[30px] text-[#000] mb-[16px] transition 0.3s ease relative left-0 hover:text[#333] hover:left-[6px]"
    //         href="tel:+234-806-037-5723"
    //       >
    //         +234-806-037-5723
    //       </a>
    //     </div>
    //     <div className="flex flex-col max-w-[220px] w-[100%]">
    //       <h4 className="not-italic font-semibold text-[12px] leading-[24px] uppercase text-[#000] mb-[16px] sm:text-[10px] sm:leading-[12px] sm:mb-[8px]">
    //         Email
    //       </h4>
    //       <a
    //         className="sm:text-[8px] md:text-[15px] text-[18px] leading-[30px] text-[#000] mb-[16px] transition 0.3s ease relative left-0 hover:text[#333] hover:left-[6px]"
    //         href="mailto:longsparfa@gmail.com"
    //       >
    //         longsparfa@gmail.com
    //       </a>
    //     </div>
    //   </ul>
    //   <div className="max-w-[1040px] flex flex-row justify-between sm:w-[100%] ">
    //     <div className="flex align-baseline flex-wrap mr-auto md:flex-col sm:align-center sm:mt-0 sm:mr-0 sm:mb-[32px]">
    //       <p className="text-[#000] min-w-[280px] tracking-[0.02em] text-[18px] md:text-[16px] sm:[14px] leading-[30px] md:leading-[28px] sm:leading-[22px] p-[1rem] sm:min-w-[100px]">
    //         Can only get better, let's take on one project at a time.
    //       </p>
    //     </div>
    //     <div className="flex align-center md:justify-center md:pr-[16px] md:flex-wrap">
    //       <Link
    //         target="_blank"
    //         className="transition 0.3s ease text-white rounded-[50px] p-[8px] bg-[#999] hover:bg-[#212d45] hover:[scale(1.2)] cursor-pointer"
    //         href="https://github.com/Longsparfa"
    //       >
    //         <AiFillGithub size="3rem" />
    //       </Link>
    //       <Link
    //         target="_blank"
    //         className="transition 0.3s ease text-white rounded-[50px] p-[8px] bg-[#999] hover:bg-[#212d45] hover:[scale(1.2)] cursor-pointer"
    //         href="https://www.linkedin.com/in/parfa-longs-661643189/"
    //       >
    //         <AiFillLinkedin size="3rem" />
    //       </Link>
    //       <Link
    //         target="_blank"
    //         className="transition 0.3s ease text-white rounded-[50px] p-[8px] bg-[#999] hover:bg-[#212d45] hover:[scale(1.2)] cursor-pointer"
    //         href="https://www.instagram.com/longsingenious/"
    //       >
    //         <AiFillInstagram size="3rem" />
    //       </Link>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Footer;
