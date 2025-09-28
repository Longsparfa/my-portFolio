"use client";

import Link from "next/link";
import { useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (
      !formData.fName ||
      !formData.lName ||
      !formData.email ||
      !formData.budget ||
      !formData.message
    ) {
      alert("Please all fields are required");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/longsparfa@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _subject: `New Project Request from ${formData.fName} ${formData.lName}`,
            _template: "table",
            _autoresponse: `Thank you for your request, ${formData.fName} ${formData.lName}! We'll contact you shortly.`,
            _next: `${window.location.origin}/thank-you`,
          }),
        }
      );

      // if (response.ok) {
      //     router.push('/thank-you');
      // } else {
      //     throw new Error('Form submission failed');
      // }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <div className="bg-black h-[490px] flex items-center justify-center cs_hero cs_style_3 cs_type_2 cs_filled_bg cs_center text-center">
        <div className="container">
          <div className="h-[45px] cs_height_45 cs_height_lg_45"></div>
          <h1 className="text-[75px] font-[800] mb-0 cs_hero_title cs_font_92 cs_extra_bold">
            <span className="cs_gradient_text_2">Contact</span>
          </h1>
          <ol className="flex items-center justify-center gap-[15px] mt-[20px] breadcrumb capitalize">
            <li className="text-[18px] text-[rgb(52,46,173)] breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <img src="/images/breadcrum.svg" alt="breadcrum" className="" />
            <li className="text-[18px] breadcrumb-item active">contact</li>
          </ol>
        </div>
      </div>
      <div className="h-[80px] cs_height_150 cs_height_lg_80"></div>
      <div className="container">
        <div className="row">
          <h4 className="font-[600] text-black text-[36px] cs_form_title cs_font_36 cs_semi_bold m-0">
            Lets Talk
          </h4>
          <p className="text-black cs_form_text">
            Got a project in mind? Fill in the form below or{" "}
            <a href="mailto:longsparfa@gmail.com" className="italic">
              send us a mail
            </a>
            .
          </p>
          <div className="h-[15px] cs_height_5 cs_height_lg_5"></div>
          <form onSubmit={handleSubmit}>
            <input
              className="bg-[#fff] border-[1px] border-solid border-[#ecebf9] rounded-[5px] text-black text-[16px] py-[10px] px-[20px] w-[100%] form-control"
              type="text"
              name="fName"
              value={formData.fName}
              onChange={handleChange}
              placeholder="First name"
              required=""
            />
            <div className="h-[25px] cs_height_25 cs_height_lg_25"></div>
            <input
              className="bg-[#fff] border-[1px] border-solid border-[#ecebf9] rounded-[5px] text-black text-[16px] py-[10px] px-[20px] w-[100%] form-control"
              type="text"
              name="lName"
              value={formData.lName}
              onChange={handleChange}
              placeholder="Last name"
              required=""
            />
            <div className="h-[25px] cs_height_25 cs_height_lg_25"></div>
            <input
              className="bg-[#fff] border-[1px] border-solid border-[#ecebf9] rounded-[5px] text-black text-[16px] py-[10px] px-[20px] w-[100%] form-control"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required=""
            />
            <div class="h-[25px] cs_height_25 cs_height_lg_25"></div>
            <select
              class="bg-[#fff] border-[1px] border-solid border-[#ecebf9] rounded-[5px] text-black text-[16px] py-[10px] px-[20px] w-[100%] form-control cs_select_option"
              name="budget"
              onChange={handleChange}
              required=""
            >
              <option value="" disabled="">
                Select your budget
              </option>
              <option value="0-100">$0 - $100</option>
              <option value="100-200">$100 - $200</option>
              <option value="200-500">$200 - $500</option>
              <option value="500-1000">$500 - $1000</option>
            </select>
            <div class="h-[25px] cs_height_25 cs_height_lg_25"></div>
            <textarea
              class="bg-[#fff] border-[1px] border-solid border-[#ecebf9] rounded-[5px] text-black text-[16px] py-[10px] px-[20px] w-[100%] form-control"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              cols="30"
              rows="5"
              required=""
            ></textarea>
            <div class="h-[25px] cs_height_25 cs_height_lg_25"></div>
            <button
              type="submit"
              disabled={isSubmitting}
              class="inline-flex items-center justify-center text-white text-[18px] font-[600] rounded-[10px] py-[13px] px-[37px] overflow-hidden bg-[#0dcaf0] cs_btn cs_style_1 cs_primary_font"
            >
              <span>{isSubmitting ? "Processing..." : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>
      <div className="h-[80px] cs_height_150 cs_height_lg_80"></div>
    </section>
  );
};

export default page;
