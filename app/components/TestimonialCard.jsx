import React from "react";
import doe from "../../public/images/client.jpg";
import quote from "../../public/images/quote.svg";

const TestimonialCard = ({ msg, name, rank }) => {
  return (
    <div className="bg-[#fff] rounded-[20px] shadow-[0_1px_2px_0_#1a176017] mb-[24px] md:mx-[10px] xl:ml-[60px] pt-[30px] pr-[30px] pb-[30px] pl-[30px] transition-[all_0.3s_ease-in-out] hover:shadow-[0_1px_2px_0_#1a176017,0_10px_60px_0_#0e0c331a] testi_card">
      <div className="flex items-center gap-[45px] -ml-[60p] testimonial_in">
        <div className="hidden min-w-[130px] rounded-y-[20px] rounded-x-[0px] overflow-hidden testimonial_img">
          <img
            className="object-cover border-[0] image_testi h-[100%] w-[100%]"
            src="/images/client.jpg"
            alt="avaterImg"
          />
        </div>
        <div className="">
          <img
            className="border-[0] height-auto max-w-[100%] mb-[20px] testimonial_quote"
            src="/images/quote.svg"
            alt="Testmonial Quote"
          />
          <p className="text-[#333] mb-[20px] mt-[0px] leading-[1.6em] testimonial_text">
            {msg}
          </p>
          <div className="">
            <div className="text-[#12103e] text-[20px] font-[600] author_name">
              {name}
            </div>
            <div className="text-[16px] text-[#333] font_16">{rank}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
