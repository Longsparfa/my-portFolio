"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import Toggle from "./Toggle";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import clsx from "clsx";

const Header = ({ toggle, setToggle }) => {
  const [isScrolling, setIscrolling] = useState(false);
  const [isScrollY, setIscrollY] = useState(false);
  const pathName = usePathname();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      setIscrolling(true);
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        setIscrolling(false);
      }, 1000);
    }

    window.addEventListener("scroll", handleScroll);

    function handleSticky() {
      const offset = window.scrollY;

      if (offset > 0) {
        setIscrollY(true);
      } else {
        setIscrollY(false);
      }
    }

    window.addEventListener("scroll", handleSticky);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleSticky);
    };
  }, []);

  return (
    <div
      style={{ backgroundColor: isScrolling || isScrollY ? "white" : "" }}
      className="flex items-center justify-around fixed top-0 left-0 w-[100%] p-[1rem] z-[99999] "
    >
      {/* className="fixed right-[2px] left-[2px] z-[1] bg-[#666] grid grid-cols-3 grid-rows-1 md:grid-cols-2 px-8 pt-5 " */}
      <div className="">
        <Link href="/" className="flex items-center text-white">
          {/* <DiCss3Full size="3rem" />{" "} */}
          <span>
            <Image src={logo} height={30} width={100} />
          </span>
        </Link>
      </div>

      <div className="md:hidden">
        {/* className="md:hidden flex col-start-2 row-start-1 " */}
        {/* <Link
          target="_blank"
          href="https://github.com/Longsparfa"
          className="transition 0.3s ease text-white rounded-[50px] p-[8px] hover:bg-[#212d45] cursor-pointer"
        >
          <AiFillGithub size="3rem" />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/parfa-longs-661643189/"
          className="transition 0.3s ease text-white rounded-[50px] p-[8px] hover:bg-[#212d45] cursor-pointer"
        >
          <AiFillLinkedin size="3rem" />
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/longsingenious/"
          className="transition 0.3s ease text-white rounded-[50px] p-[8px] hover:bg-[#212d45] cursor-pointer"
        >
          <AiFillInstagram size="3rem" />
        </Link> */}
        <ul
          className="flex items-center justify-center gap-[10px]"
          style={{
            color:
              isScrolling || isScrollY
                ? "#0dcaf0"
                : !pathName === "/contact" || "/portfolio"
                ? "text-black"
                : "text-sky-500",
          }}
        >
          {/* className="col-start-3 flex justify-around items-center md:hidden sm:text-[16px]" */}
          <li>
            <Link
              href="/"
              className={clsx(
                "text-[2rem] leading-[32px] transition 0.4s ease mr-4 hover:text-black",
                { " text-[rgb(52,46,173)]": pathName === "/" }
              )}
            >
              Home
              {/* Projects */}
            </Link>
          </li>
          <li>
            <Link
              href={pathName === "/" ? "#about" : "/"}
              className={clsx(
                "text-[2rem] leading-[32px] transition 0.4s ease mr-4 hover:text-black",
                { " text-[rgb(52,46,173)]": activeSection === "about" }
              )}
            >
              About
              {/* Technologies */}
            </Link>
          </li>
          <li>
            <Link
              href={pathName === "/" ? "#testimonial" : "/"}
              className={clsx(
                "text-[2rem] leading-[32px] transition 0.4s ease mr-4 hover:text-black",
                { " text-[rgb(52,46,173)]": activeSection === "testimonial" }
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
                "text-[2rem] leading-[32px] transition 0.4s ease mr-4 hover:text-black",
                { " text-[rgb(52,46,173)]": pathName === "/contact" }
              )}
            >
              Contact
              {/* About */}
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center">
        <div className="mr-8">
          {/* className="col-start-3 flex justify-around items-center md:hidden sm:text-[16px]" */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center text-white text-[18px] font-[600] rounded-[10px] py-[13px] px-[37px] overflow-hidden bg-[#0dcaf0] "
          >
            <span className="">Hire Me</span>
          </Link>
        </div>
        <Toggle
          toggle={toggle}
          setToggle={setToggle}
          pathName={pathName}
          activeSection={activeSection}
        />
      </div>
    </div>
  );
};

export default Header;
