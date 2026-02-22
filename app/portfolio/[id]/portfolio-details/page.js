import { getProjectById } from "@/app/constants/constants";

import { projects } from "@/app/constants/constants";
import Link from "next/link";

const page = async ({ params }) => {
  // const bg = "#0dcaf0";
  const { id } = await params;

  const project = getProjectById(id);

  return (
    <>
      <h2 className="text-black md:text-[30px] text-[48px] cs_portfolio_title cs_font_48">
        Overview
      </h2>
      <p className="text-black md:text-[16px] text-[18px] cs_portfolio_text">
        {project.description}
      </p>
      {/* <div className="cs_portfolio_details_wrap row">
        <div className="col-md-4">
          <h4 className="cs_font_20 m-0">Stratagy</h4>
          <p className="m-0">Company Branding, UX Strategy</p>
        </div>
        <div className="col-md-4">
          <h4 className="cs_font_20 m-0">Project Type</h4>
          <p className="m-0">UI/UX Design, Motion Design</p>
        </div>
        <div className="col-md-4">
          <h4 className="cs_font_20 m-0">Client</h4>
          <p className="m-0">Envato Elements</p>
        </div>
      </div> */}
      <Link href={project.source} target="_blank">
        <img
          className="cs_protfolio_image w-100 cs_radius_10 my-10"
          src={project.image}
          alt="Thumb"
        />
      </Link>
      <p className="text-black text-[18px] cs_portfolio_text">
        Stellaux Global is a platform that offers customized event planning
        services to clients.
      </p>
      <p className="text-black text-[18px] cs_portfolio_text">
        Built with Next.js Stellaux Global provides professional and
        user-friendly experience to clients.
      </p>
      {/* <p className="text-black text-[18px]  cs_portfolio_text">
        Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
        vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
        vitae, eleifend ac, enim.
      </p> */}
    </>
  );
};

export default page;
