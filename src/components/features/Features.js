import React from 'react'
import {FaGlobe,FaCode,FaDatabase } from "react-icons/fa";
// import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Coding"
          des="Trained by Smart Interviews teams and strong in Data Structures and Algorithms(DSA).
          Solved CodeChef and LeetCode problems, strong in problem solving skills."
          icon={<FaCode />}
        />
        <Card
          title="Web Development"
          des="Experienced by developing My Portfolio, Studysphere, She empowers, Vocalizer and other projects with responsive design."
          icon={<FaGlobe />}
        />
        <Card
          title="Data Science"
          des="Familiar with the Data Science and Machine Learning algorithms. And can also handle powerbi for interactive dashboards."
          icon={<FaDatabase />}
        />
        {/* <Card
          title="Mobile Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<AiFillAppstore  />}
        /> */}
      </div>
    </section>
  );
}

export default Features