import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-3 lgl:mt-3 w-full lgl:w-[1200px] h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-6">
          <ResumeCard
            title="BTech in Artificial Intelligence and Data Science"
            subTitle="Lakireddy Bali Reddy College of Engineering (2022 - 2026)"
            result="8.82/10 (upto 5th semester)"
          />
          <ResumeCard
            title="Intermediate - Mathematics, Physics, Chemistry"
            subTitle="Sarada Educational Institution (2020 - 2022)"
            result="965/1000"
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Mother Teresa High School (2019 - 2020)"
            result="600/600"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
