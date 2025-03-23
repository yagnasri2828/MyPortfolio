import React from 'react'
// import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">KURAKULA YAGNA SRI</h3>
        <p className="text-lg font-normal text-gray-400">
          {/* Full Stack Developer */}
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio. */}
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
  Phone:  
  <a href="tel:+918331964970" className="text-lightText hover:text-designColor duration-300">
    +91 8331964970
  </a>
</p>

        <p className="text-base text-gray-400 flex items-center gap-2">
  Email:  
  <a href="mailto:yagnasri2828@gmail.com" className="text-lightText hover:text-designColor duration-300">
    yagnasri2828@gmail.com
  </a>
</p>

      </div>
      {/* <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div> */}
    </div>
  );
}

export default ContactLeft