import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaLinkedinIn,
  FaGithub,
  FaFile,
} from "react-icons/fa";


const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [""],
    loop: false,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Hello, Welcome to my digital space!</h4>
        <h1 className="text-6xl font-bold text-white">
          I'm <span className="text-designColor capitalize">KURAKULA YAGNA SRI</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          Final year Student.<span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle=""
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Learning, coding, and growing in web and data science.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/yagnasri2828" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            {/* <a href="https://github.com/noorjsdivs/portfolioone" target="blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://github.com/noorjsdivs/portfolioone" target="blank">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a> */}
            <a href="https://www.linkedin.com/in/yagnasri2828/" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://drive.google.com/file/d/1GZL0VDt_svrnGr1uu6TTnOTDRl-SILB0/view" target="blank">
              <span className="bannerIcon">
                <FaFile />cv
              </span>
            </a>
          </div>
        </div>
        {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Also visit
          </h2>
          <div className="flex gap-4">
            
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LeftBanner;
