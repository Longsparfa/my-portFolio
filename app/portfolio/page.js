import Link from "next/link";
import { projects } from "../constants/constants";
import PortfolioCard from "../components/PortfolioCard";

const page = ({ params }) => {
  // style='background-image: url("/images/bg/hero_bg_5.svg");'
  return (
    <div>
      <section
        className="bg-black h-[490px] flex items-center justify-center cs_hero cs_style_3 cs_type_2 cs_filled_bg cs_center text-center"
        // style={{ backgroundColor: bg }}
      >
        <div className="container ">
          <div className="h-[45px] cs_height_45 cs_height_lg_45"></div>
          <h1 className="text-[75px] font-[800] mb-0 cs_hero_title cs_font_92 cs_extra_bold">
            <span className="cs_gradient_text_2">Portfolio</span>
          </h1>
          <ol className="flex items-center justify-center gap-[15px] mt-[20px] breadcrumb capitalize">
            <li className="text-[18px] text-[rgb(52,46,173)] breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <img src="/images/breadcrum.svg" alt="breadcrum" className="" />
            <li className="text-[18px] breadcrumb-item active">portfolio</li>
          </ol>
        </div>
      </section>
      <section>
        <div className="h-[80px] cs_height_150 cs_height_lg_80"></div>
        <div className="container">
          <div className="grid md:grid-cols-1 grid-cols-3 gap-[0px] cs_grid_3">
            {projects.map((project) => (
              <PortfolioCard
                id={project.id}
                img={project.image}
                title={project.title}
              />
            ))}
          </div>

          <div className="h-[80px] cs_height_150 cs_height_lg_80"></div>
        </div>
      </section>
    </div>
  );
};

export default page;
