// "use client";

import { getProjectById, projects } from "@/app/constants/constants";
import Link from "next/link";
// import { useRouter } from "next/router";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Layout = async ({ children, params }) => {
  // const router = useRouter();
  const fbcolor = "rgb(27, 116, 228)";
  const twcolor = "rgb(29, 155, 240)";
  const incolor = "rgb(10, 102, 194)";

  const { id } = await params;
  const project = getProjectById(id);

  const proId = projects
    .map((pro) => pro.id)
    .find((proId) => proId === Number(id));

  return (
    <div>
      <section
        className="bg-black h-[670px] flex items-center justify-center cs_hero cs_style_3 cs_type_2 cs_filled_bg cs_center text-center"
        // style={{ backgroundColor: bg }}
      >
        <div className="container pb-[15rem] ">
          <div className="h-[45px] cs_height_45 cs_height_lg_45"></div>
          <h1 className="text-[75px] md:text-[40px] font-[800] mb-0 cs_hero_title cs_font_92 cs_extra_bold">
            <span className="cs_gradient_text_2">{project.title}</span>
          </h1>
          <ol className="flex items-center justify-center gap-[15px] mt-[20px] breadcrumb capitalize">
            <li className="text-[18px] text-[rgb(52,46,173)] breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <img src="/images/breadcrum.svg" alt="breadcrum" />
            <li className="text-[18px] text-[rgb(52,46,173)] breadcrumb-item active">
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <img src="/images/breadcrum.svg" alt="breadcrum" />
            <li className="text-[18px] breadcrumb-item active">
              <span>Portfolio-details</span>
            </li>
          </ol>
        </div>
      </section>
      <div className="container mt-[-250px]">
        <div className="border-[6px] border-solid border-[#fff] rounded-[15px] overflow-hidden cs_image_box cs_style_5 cs_radius_15">
          <Link href={project.visit} target="_blank">
            <img
              className="rounded-[10px] cs_radius_10 w-100"
              src={project.image}
              alt="project-details"
            />
          </Link>
        </div>
        <div className="h-[45px] cs_height_45 cs_height_lg_30"></div>
      </div>
      <section>
        <div className="container">
          <div className="flex md:flex-col gap-[10%] md:gap-[25px] md:ml-[20px] row">
            <div className="bg-[#fff] flex flex-col items-center h-fit md:w-fit w-[1000px] mr-[15px] pt-[20px] pb-[20px] md:px-[20px] rounded-[10px] cs_category cs_style_2 cs_white_bg cs_radius_10">
              <div className="flex items-center gap-[25px] cs_social cs_style_1 d-flex align-items-center cs_gap_25">
                <div className="text-black text-[20px] font-semi-bold cs_social_title cs_font_20 cs_semi_bold">
                  Share:
                </div>
                <div className="flex gap-[15px] cs_social_wrap d-flex cs_gap_15">
                  <Link
                    target="_blank"
                    href={`https://www.facebook.com/sharer/sharer.php?u=`}
                    style={{ color: fbcolor }}
                  >
                    <AiFillFacebook size={32} />
                  </Link>
                  <Link
                    target="_blank"
                    href={`https://www.twitter.com/intent/tweet?url=&text="Project Overview"`}
                    style={{ color: twcolor }}
                  >
                    <AiFillTwitterCircle size={32} />
                  </Link>
                  <Link
                    target="_blank"
                    href={`https://www.linkedin.com/sharing/share?url=`}
                    style={{ color: incolor }}
                  >
                    <AiFillLinkedin size={32} />
                  </Link>
                </div>
              </div>
              <ul className="inline-grid gap-[25px] text-black mt-[25px] cs_mp_0">
                <li className="active">
                  <Link href={`/portfolio/${proId}/portfolio-details`}>
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/portfolio/${proId}/portfolio-details/project-challenge`}
                  >
                    Project Challenge
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/portfolio/${proId}/portfolio-details/dev-research`}
                  >
                    Development Research
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/portfolio/${proId}/portfolio-details/dev-approach`}
                  >
                    Development Approach
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/portfolio/${proId}/portfolio-details/the-solutions`}
                  >
                    The Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div className="cs_pl_70">{children}</div>
          </div>
          <div className="h-[30px] cs_height_lg_30"></div>
        </div>
        <div className="h-[75px] cs_height_145 cs_height_lg_75"></div>
      </section>
    </div>
  );
};

export default Layout;
