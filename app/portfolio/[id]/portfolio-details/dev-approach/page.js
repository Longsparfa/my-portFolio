import { getProjectById } from "@/app/constants/constants";




const page = async ({params}) => {

  const {id} = await params
  const project = getProjectById(id)
  return (
    <>
      <h2 className="text-black text-[48px] cs_portfolio_title cs_font_48">
        Development Approach
      </h2>
      {project.tags.map(tag => {
        return <p key={tag} className="text-black text-[18px] cs_portfolio_text">
          {tag}
        </p>
      })}
      <div className="cs_portfolio_details_wrap row">
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
      </div>
      <img
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
      </p>
    </>
  );
};

export default page;
