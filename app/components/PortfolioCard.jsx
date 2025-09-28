import Link from "next/link";
import { projects } from "../constants/constants";

const PortfolioCard = ({ img, title, id }) => {
  // const id = projects.map((pro) => pro.id);

  return (
    <div className="cs_grid_item mb-[0px]">
      <Link
        className="cs_portfolio cs_style_1 cs_zoom relative overflow-hidden"
        href={`/portfolio/${id}/portfolio-details`}
      >
        <div className="min-h-[200px] cs_portfolio_thumbnail">
          <img
            className="cs_zoom_in h-auto max-w-[100%] w-[100%] border-[0px] transition-[all_0.4s_ease] "
            src={img}
            alt="Thumb"
          />
        </div>
        <div className="hidden cs_portfolio_info cs_white_color cs_medium absolute font-medium text-white bottom-[30px] left-[30px] ">
          <h2 className="text-[28px] text-[#0dcaf0] cs_font_28 cs_white_colo cs_medium mb-0">
            {title}
          </h2>
          <div className="inline-flex items-center gap-[15px] text-[16px] font-[500] cs_font_16 cs_gap_15 d-inline-flex cs_medium align-items-center">
            <span className="relative uppercase transition 0.4s text-[#0dcaf0] cs_text_btn cs_secondary_font cs_type_1 text-uppercase">
              View work
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
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioCard;
