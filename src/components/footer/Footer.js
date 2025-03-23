import React from 'react';
import { logo } from "../../assets/index";

const Footer = () => {
  return (
    <div className="w-full py-19 h-auto border-b-[1px] border-b-black flex flex-col items-center">
      
      {/* Logo, Headings, and Links in One Row */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-16">
        
        {/* Logo Section */}
        <div className="flex justify-center">
          <img className="w-40" src={logo} alt="logo" />
        </div>

        {/* Work Links Section */}
        <div className="text-center">
          <h3 className="text-xl uppercase text-designColor tracking-wider mb-4">Quick Links</h3>
          <ul className="flex flex-wrap justify-center gap-6 font-titleFont font-medium">
            <li><a href="https://github.com/yagnasri2828" target="_blank" rel="noopener noreferrer" className="hover:text-designColor duration-300">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/yagnasri2828/" target="_blank" rel="noopener noreferrer" className="hover:text-designColor duration-300">LinkedIn</a></li>
            <li><a href="https://drive.google.com/file/d/1sOnHeGFa6pn8ax7k8FTm3jIH9R_XzkY1/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-designColor duration-300">Resume</a></li>
          </ul>
        </div>

        {/* Coding Arena Section */}
        <div className="text-center">
          <h3 className="text-xl uppercase text-designColor tracking-wider mb-4">Coding Arena</h3>
          <ul className="flex flex-wrap justify-center gap-6 font-titleFont font-medium">
            <li><a href="https://hive.smartinterviews.in/profile/yagnasri2828" target="_blank" rel="noopener noreferrer" className="hover:text-designColor duration-300">Smart Interviews</a></li>
            <li><a href="https://www.codechef.com/users/yagnasri2828" target="_blank" rel="noopener noreferrer" className="hover:text-designColor duration-300">CodeChef</a></li>
            <li><a href="https://leetcode.com/u/yagnasri2828/" target="_blank" rel="noopener noreferrer" className="hover:text-designColor duration-300">LeetCode</a></li>
            <li><a href="https://www.hackerrank.com/profile/yagnasri2828" target="_blank" rel="noopener noreferrer" className="hover:text-designColor duration-300">HackerRank</a></li>
            <li><a href="https://www.interviewbit.com/profile/yagnasri2828/" target="_blank" rel="noopener noreferrer" className="hover:text-designColor duration-300">InterviewBit</a></li>
            <li><a href="https://codeforces.com/profile/yagnasri2828" target="_blank" rel="noopener noreferrer" className="hover:text-designColor duration-300">CodeForces</a></li>
          </ul>
        </div>

      </div>

    </div>
  );
}

export default Footer;
