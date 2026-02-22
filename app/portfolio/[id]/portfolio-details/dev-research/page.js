import React from "react";

const page = () => {
  return (
    <>
      <h2 className="text-black text-[48px] cs_portfolio_title cs_font_48">
        Development Research
      </h2>
      <p className="text-black text-[18px] cs_portfolio_text">
        To overcome the challenges mentioned above, we conducted an extensive
        Research on the following topics:
      </p>
      <div className="cs_portfolio_details_wrap row">
        <div className="col-md-4">
          <h4 className="text-black font-bold cs_font_20 m-0">
            Event Planning Industry Trends
          </h4>
          <p className="text-black m-0">
            We studied the latest trends and best practices in event planning to
            ensure our website reflected the highest level of expertise.
          </p>
        </div>
        <div className="col-md-4">
          <h4 className="text-black cs_font_20 font-bold m-0">
            User experience design
          </h4>
          <p className="text-black m-0">
            We researched user experience design principles and best practices
            to create an intuitive and user-friendly interace.
          </p>
        </div>
        <div className="col-md-4">
          <h4 className="text-black cs_font_20 font-bold m-0">
            Next.js features
          </h4>
          <p className="text-black m-0">
            We explored Next.js features, such as server-side rendering and
            static site generation, to optimize the website's performance.
          </p>
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
