import { getProjectById } from "@/app/constants/constants";

const page = async ({ params }) => {
  const { id } = await params;
  const project = getProjectById(id);
  return (
    <>
      <h2 className="text-black text-[48px] cs_portfolio_title cs_font_48">
        Development Approach
      </h2>
      {project.tags.map((tag) => {
        return (
          <p key={tag} className="text-black text-[18px] cs_portfolio_text">
            {tag}
          </p>
        );
      })}
      <div className="cs_portfolio_details_wrap row">
        <div className="col-md-4 my-4 ">
          <h4 className="cs_font_20 text-black font-bold mb-2">
            Designing a visually appealing website
          </h4>
          <p className="text-black m-0">
            We designed a website that showcases Stellaux Global's brand and
            expertise in event planning, with a focus on high-quality images and
            a clean modern design.
          </p>
        </div>
        <div className="col-md-4 my-4">
          <h4 className="cs_font_20 text-black font-bold mb-2">
            Creating a clear services page
          </h4>
          <p className="text-black m-0">
            We developed a clear and concise services page that outlines
            Stellaux Global's event planning services and packages
          </p>
        </div>
        <div className="col-md-4 my-4">
          <h4 className="cs_font_20 text-black font-bold mb-2">
            Implementing a contact form
          </h4>
          <p className="text-black m-0">
            We implemented a contact form that allows potential clients to
            easily get in touch with Stellaux Global.
          </p>
        </div>
        <div className="col-md-4">
          <h4 className="cs_font_20 text-black font-bold mb-2">
            Showcasing our portfolio
          </h4>
          <p className="text-black m-0">Envato Elements</p>
        </div>
      </div>
      {/* <img
        className="cs_protfolio_image w-100 cs_radius_10"
        src="/images/portfolio/pd2.jpg"
        alt="Thumb"
      />
      <p className="text-black text-[18px] cs_portfolio_text">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.
      </p>
      <p className="text-black text-[18px] cs_portfolio_text">
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
        Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
        aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet
        a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
      </p>
      <p className="text-black text-[18px]  cs_portfolio_text">
        Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
        vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
        vitae, eleifend ac, enim.
      </p> */}
    </>
  );
};

export default page;
