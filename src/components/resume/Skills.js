import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./rescard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex justify-center gap-10 lgl:gap-20 text-center mx-auto"
    >
      {/* Web Development Column */}
      <div className="w-[300px]">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 text-center">
          <h2 className="text-xl md:text-4xl font-bold">Web</h2>
        </div>
        <div className="mt-3 lgl:mt-0 w-full border-l-[6px] border-l-black border-opacity-0 flex flex-col gap-4 ">
        <ResumeCard 
  title={
    <span className="text-xl font-semibold text-left w-full block">
      HTML <br/> CSS<br/> JavaScript<br/> React<br/> Tailwind CSS<br/> Firebase<br/> SQL
    </span>
  } 
/>

        </div>
      </div>

      {/* Coding Column */}
      <div className="w-[300px]">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Coding</h2>
        </div>
        <div className="mt-3 lgl:mt-0 w-full border-l-[6px] border-l-black border-opacity-0 flex flex-col gap-4 items-center">
        <ResumeCard 
  title={
    <span className="text-xl font-semibold text-left w-full block">
      Java<br/> Python<br/> C<br/> DSA
    </span>
  } 
/>

        </div>
      </div>

      {/* Data Column */}
      <div className="w-[300px]">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Data</h2>
        </div>
        <div className="mt-3 lgl:mt-0 w-full border-l-[6px] border-l-black border-opacity-0 flex flex-col gap-4 items-center">
        <ResumeCard 
  title={
    <span className="text-xl font-semibold text-left w-full block">
      Data Science<br/>Machine Learning<br/>Power BI
    </span>
  } 
/>

        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
