import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-3 lgl:mt-3 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Development Intern"
            subTitle="EDUSKILLS - (January 2025 - March 2025)"
            result="Virtual"
            des="Worked on front-end and back-end development using HTML, CSS, JavaScript, Tailwind CSS, SQL, and MongoDB.
                Currently working on version control and web hosting for deploying applications."
          />
          <ResumeCard
            title="Machine Learning Intern"
            subTitle="BIST TECHNOLOGIES PRIVATE LIMITED - (June 2024 - June 2024)"
            result="Vijayawada"
            des="Developed a YOLOv4-based vehicle detection system achieving 90% accuracy.
                Improved detection rates for bikes and motorcycles by 25%, enhancing model precision."
          />
          {/* <ResumeCard
            title="Data Science Intern"
            subTitle="PRODIGY INFOTECH - (August 2024 - August 2024)"
            result="Virtual"
            des="Developed a YOLOv4-based vehicle detection system achieving 90% accuracy.
                Improved detection rates for bikes and motorcycles by 25%, enhancing model precision."
          /> */}
        </div>
      </div>
       {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>  */}
    </motion.div>
  );
};

export default Experience;
