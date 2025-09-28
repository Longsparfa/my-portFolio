import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import Button from "./Button";
import Image from "next/image";
// import img from "../../public/images/parfa.png";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="lg:hidden xl:block bg-[linear-gradient(121.57deg,_#0dcaf0_18.77%,_rgba(255,_255,_255)_60.15%)] flex items-center max-h-[1050px] min-h-[100vh] relative overflow-hidden pt-[145px] pb-[110px]">
        <div className="container">
          <div className="w-[50%] ">
            <h4 className="font-[600] text-[48px] text-[#ccc] leading-[58px] mb-0">
              Hi! I&apos;m
            </h4>
            <h1 className="text-[75px] text-[rgb(18,_16,_62)] leading-[102px] mb-[15px] mt-0">
              <span className="bg-[linear-gradient(147deg,_rgb(52,_46,_173),_rgb(255,_109,_90))_text] text-[rgb(244,_241,_245)] ">
                Parfa
              </span>{" "}
              <span className="bg-[linear-gradient(147deg,_rgb(52,_46,_173),_rgb(255,_109,_90))_text] text-[rgba(0_0_0_0)]">
                Longs
              </span>
            </h1>
            <h4 className="stack font-[600] text-[36px] text-[#ccc] ">
              Fullstack{" "}
              <span className="stack_role text-[rgb(181,_181,_192)] ">
                Web developer
              </span>
            </h4>
            <p className="max-w-[800px] text-white text-[24px] sm:text-[16px] leading-[40px] sm:leading-[24px] font-light pb-[3.6rem] md:pb-[24px] md:max-w-[670px] md:text-[20px] md:leading-[32px]">
              I build all kinds of websites that scale up company businesses and
              meet their needs. Currently, I&apos;m living in{" "}
              <span className="text-[rgb(181,_181,_192)]">
                Plateau State, Nigeria
              </span>
            </p>

            <div className="flex items-center gap-[15px_30px] mb-[50px] ">
              <a
                target="_blank"
                href="https://github.com/Longsparfa"
                className="link"
              >
                <AiFillGithub size="3rem" color="black" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/longsingenious/"
                className="link"
              >
                <AiFillInstagram size="3rem" color="black" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/parfa-longs-661643189/"
                className="link"
              >
                <AiFillLinkedin size="3rem" color="black" />
              </a>
              <a
                target="_blank"
                href="mailto:longsparfa@gmail.com"
                className="link"
              >
                <AiFillMail size="3rem" color="black" />
              </a>
            </div>
            <div className="flex items-center gap-[24px] ">
              <a
                target="_blank"
                href="https://docs.google.com/document/d/1Tz1pPVTnPh00KR-YzGZ-Xeebn1DMwJum/edit?usp=drive_link&ouid=104837301727004602396&rtpof=true&sd=true"
                download="Parfa Longs CV.pdf"
                className="inline-flex items-center justify-center font-600 rounded-[10px] py-[13px] px-[37px] overflow-hidden bg-[#0dcaf0]"
              >
                <span className="transition-[transform_0.7s_cubic-bezier(0.68,_-0.55,_0.265,1.55)] hover:transform-[translateY(-40px)] ">
                  Download CV
                </span>
              </a>
              <Link
                href="/contact"
                className="relative text-[24px] text-[rgb(181,_181,_192)] font-[600] "
              >
                <span>Let&apos;s Talk</span>
                <div className="absolute bg-[rgb(181,_181,_192)] w-[100%] h-[1px] transition-0.4s bottom-[0px] left-[0px] "></div>
              </Link>
            </div>
          </div>
          <div className="w-[50%] ">
            <div className="bg-image">
              <div className="animate_div flex justify-center">
                <Image
                  src="/images/parfa.png"
                  height={300}
                  width={300}
                  // height={400}
                  alt="Parfa"
                />
              </div>
              <div className="absolute shadow-[rgba(19,16,63,0.1)_1px_1px_2px_0px] right-[0px] top-[40%] text-left bg-experience-tag py-[10px] px-[15px] rounded-[20px] flex items-center gap-[15px] experience_tag">
                <div className="font-[600] text-[36px] text-[rgb(181,_181,_192)] num">
                  4+
                </div>
                <div>
                  <h5 className="mb-0 font-[400] text-[18px] text-[rgb(18,16,62)] p-[0px] years">
                    Years
                  </h5>
                  <p className="mb-0 mt-0 font-[400] text-[16px] text-[rgb(118,118,130)] leading-[18px] text-left overflow-hidden happy">
                    Happy Clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:flex flex-col gap-[200px] xl:hidden bg-[linear-gradient(121.57deg,_#0dcaf0_18.77%,_rgba(255,_255,_255)_60.15%)] max-h-[1050p] min-h-[100vh] relative overflow-hidden pt-[145px] pb-[110px]">
        <div className="w-[50]">
          <div className="bg-image-mobile absolute h-[690px] w-[500px] sm:w-[350px] sm:left-[5px] left-[15%] top-[90px] ">
            <div className="animate_div flex justify-center">
              <Image
                src="/images/longs.png"
                height={600}
                width={600}
                // height={400}
                alt="Parfa"
              />
            </div>
            <div className="absolute shadow-[rgba(19,16,63,0.1)_1px_1px_2px_0px] right-[0px] top-[40%] text-left bg-experience-tag py-[10px] px-[15px] rounded-[20px] flex items-center gap-[15px] experience_tag">
              <div className="font-[600] text-[36px] text-[rgb(181,_181,_192)] num">
                4+
              </div>
              <div>
                <h5 className="mb-0 font-[400] text-[18px] text-[rgb(18,16,62)] p-[0px] years">
                  Years
                </h5>
                <p className="mb-0 mt-0 font-[400] text-[16px] text-[rgb(118,118,130)] leading-[18px] text-left overflow-hidden happy">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[50] mt-[350px] ml-[35px] sm:mr-[10px] pt-[145px] pb-[110px]">
          <h4 className="font-[600] text-[48px] text-[#ccc] leading-[58px] mb-0">
            Hi! I&apos;m
          </h4>
          <h1 className="text-[75px] text-[rgb(18,_16,_62)] leading-[102px] mb-[15px] mt-0">
            <span className="bg-[linear-gradient(147deg,_rgb(52,_46,_173),_rgb(255,_109,_90))_text] text-[rgb(244,_241,_245)] ">
              Parfa
            </span>{" "}
            <span className="bg-[linear-gradient(147deg,_rgb(52,_46,_173),_rgb(255,_109,_90))_text] text-[rgba(0_0_0_0)]">
              Longs
            </span>
          </h1>
          <h4 className="stack font-[600] text-[36px] text-[#ccc] ">
            Fullstack{" "}
            <span className="stack_role text-[rgb(181,_181,_192)] ">
              Web developer
            </span>
          </h4>
          <p className="max-w-[800px] text-[24px] sm:text-[16px] leading-[40px] sm:leading-[24px] font-light pb-[3.6rem] md:pb-[24px] text-black md:max-w-[670px] md:text-[20p] md:leading-[32px]">
            I build all kinds of websites that scale up company businesses and
            meet their needs. Currently, I&apos;m living in{" "}
            <span className="text-[rgb(181,_181,_192)]">
              Plateau State, Nigeria
            </span>
          </p>

          <div className="flex items-center gap-[15px_30px] mb-[50px] ">
            <a
              target="_blank"
              href="https://github.com/Longsparfa"
              className="link"
            >
              <AiFillGithub size="3rem" color="black" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/longsingenious/"
              className="link"
            >
              <AiFillInstagram size="3rem" color="black" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/parfa-longs-661643189/"
              className="link"
            >
              <AiFillLinkedin size="3rem" color="black" />
            </a>
            <a
              target="_blank"
              href="mailto:longsparfa@gmail.com"
              className="link"
            >
              <AiFillMail size="3rem" color="black" />
            </a>
          </div>
          <div className="flex items-center gap-[24px] ">
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1Tz1pPVTnPh00KR-YzGZ-Xeebn1DMwJum/edit?usp=drive_link&ouid=104837301727004602396&rtpof=true&sd=true"
              className="inline-flex items-center justify-center font-600 rounded-[10px] py-[13px] px-[37px] overflow-hidden bg-[#0dcaf0]"
            >
              <span className="transition-[transform_0.7s_cubic-bezier(0.68,_-0.55,_0.265,1.55)] hover:transform-[translateY(-40px)] ">
                Download CV
              </span>
            </a>
            <Link
              href="/contact"
              className="relative text-[24px] text-[rgb(181,_181,_192)] font-[600] "
            >
              <span>Let&apos;s Talk</span>
              <div className="absolute bg-[rgb(181,_181,_192)] w-[100%] h-[1px] transition-0.4s bottom-[0px] left-[0px] "></div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
