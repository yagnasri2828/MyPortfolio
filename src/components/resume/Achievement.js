import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./rescard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 ">
          {/* <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Certifications </h2>
        </div>
        <div className="mt-6 lgl:mt-3 w-auto h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 ">
          <ResumeCard title="Cloud Practitioner - AWS"/>
          <ResumeCard title="AI Associate - Salesforce"/>
          <ResumeCard title="Smart Coder - Smart Interviews"/>
          <ResumeCard title="Full Stack Web Development - Infosys Springboard"/>
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 ">
          {/* <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-3 w-full h-[300px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 text-center">
        <ResumeCard title={`Achieved 2nd place in Lakshya 2025 for presenting a poster on "The Invisible Foe."`} />
        <ResumeCard title={`Won 1st place in Lakshya 2024 for presenting a poster on "Unmasking AI Risks."`} />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Achievement;
