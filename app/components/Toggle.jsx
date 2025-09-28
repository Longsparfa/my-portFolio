"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Toggle = ({ toggle, setToggle, pathName, activeSection }) => {
  // const [activeSection, setActiveSection] = useState("");

  // useEffect(() => {
  //   const sections = document.querySelectorAll("section");
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setActiveSection(entry.target.id);
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.5,
  //     }
  //   );

  //   sections.forEach((section) => {
  //     observer.observe(section);
  //   });

  //   return () => {
  //     sections.forEach((section) => {
  //       observer.unobserve(section);
  //     });
  //   };
  // }, []);

  return (
    <>
      <div className="hidden md:block">
        {toggle ? (
          <AiOutlineClose
            color="#333"
            fontSize={27}
            className="cursor-pointer"
            onClick={() => setToggle(false)}
          />
        ) : (
          <AiOutlineMenu
            color="#333"
            fontSize={27}
            className="cursor-pointer"
            onClick={() => setToggle(true)}
          />
        )}
      </div>
      <div className="fixed  bottom-[50%] sm:bottom-[56%] z-[666] ">
        {toggle && (
          <div className="bg-[#181818] border-t-[2px] border-t-[#0dcaf0] text-center p-[2rem] mt-[1rem] min-w-[210px] rounded-[5px] shadow-[0_0_10px_rgba(0,0,0,0.2)]">
            <ul
              className="flex flex-col gap-4"
              onClick={() => setToggle(false)}
            >
              <li>
                <Link
                  href="/"
                  className={clsx(
                    "text-[2rem] leading-[32px] transition 0.4s ease mr-4 hover:text-sky-200",
                    { " text-[rgb(52,46,173)]": pathName === "/" }
                  )}
                >
                  Home
                  {/* Projects */}
                </Link>
              </li>
              <li>
                <Link
                  href={pathName === "/" ? "/#about" : "/"}
                  className={clsx(
                    "text-[2rem] leading-[32px] transition 0.4s ease mr-4 hover:text-sky-200",
                    { " text-[rgb(52,46,173)]": activeSection === "about" }
                  )}
                >
                  About
                  {/* Technologies */}
                </Link>
              </li>
              <li>
                <Link
                  href={pathName === "/" ? "/#testimonial" : "/"}
                  className={clsx(
                    "text-[2rem] leading-[32px] transition 0.4s ease mr-4 hover:text-sky-200",
                    {
                      " text-[rgb(52,46,173)]": activeSection === "testimonial",
                    }
                  )}
                >
                  Testimonial
                  {/* About */}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={clsx(
                    "text-[2rem] leading-[32px] transition 0.4s ease mr-4 hover:text-sky-600",
                    { " text-[rgb(52,46,173)]": pathName === "/contact" }
                  )}
                >
                  Contact
                  {/* About */}
                </Link>
              </li>
            </ul>

            {/* <a
              href="#projects"
              className="text-[2rem] leading-[32px] my-[1rem] mx-0 text-[rgba(255,255,255,0.75)] transition 0.4s ease mr-4 hover:text-white cursor-pointer"
              onClick={hideMenu}
            >
              Project
            </a>
            <a
              href="#tech"
              className="text-[2rem] leading-[32px] my-[1rem] mx-0 text-[rgba(255,255,255,0.75)] transition 0.4s ease mr-4 hover:text-white"
              onClick={hideMenu}
            >
              Technologies
            </a>
            <a
              href="#about"
              className="text-[2rem] leading-[32px] my-[1rem] mx-0 text-[rgba(255,255,255,0.75)] transition 0.4s ease mr-4 hover:text-white"
              onClick={hideMenu}
            >
              About
            </a> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Toggle;
