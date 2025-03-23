import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour,projectFive } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title=""
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Study Sphere"
          des="The StudySphere project uses HTML, CSS, and JavaScript for an interactive front-end, while JSP and Java power the back-end for dynamic content. It is likely hosted on Apache Tomcat and utilizes MySQL for database management. This technology stack ensures a seamless learning experience with interactive quizzes and digital resources."
          src={projectOne}
          githubLink= "https://github.com/yagnasri2828/Studysphere"
          liveLink ="https://studyspherewebsite.netlify.app/"
        />
        <ProjectsCard
          title="SHE EMPOWERS"
          des="The SHE Empowers project provides information on women's rights, legal acts, dietary guidelines, and self-defense tips, along with a complaint submission form. It is built with HTML, CSS, JavaScript, and uses Firebase Realtime Database for real-time data storage. Bootstrap enhances the UI, ensuring a responsive and user-friendly experience."
          src={projectTwo}
          githubLink= "https://github.com/yagnasri2828/SHEempowers"
          liveLink ="https://she-empowers.netlify.app/"
        />
        <ProjectsCard
          title="MY PORTFOLIO"
          des="My portfolio website is designed using HTML, CSS, and JavaScript to ensure a responsive and interactive user experience. It utilizes Tailwind CSS for modern and efficient styling. NPM is used for dependency management, enhancing project scalability. This technology stack makes the portfolio dynamic, well-structured, and easily customizable."
          src={projectThree}
          githubLink= "https://github.com/yagnasri2828/MyPortfolio"
          liveLink ="https://yagnasri2828.netlify.app/"
        />
        <ProjectsCard
          title="VOCALIZER"
          des="Vocalizer is a text-to-speech web application that allows users to enter text, select an accent, and listen to the output. It is developed using HTML, CSS, and JavaScript, ensuring a smooth and interactive experience. The application utilizes a voice API for speech synthesis, enhancing accessibility and usability."
          src={projectFour}
          githubLink= "https://github.com/yagnasri2828/Vocalizer"
          liveLink ="https://vocalizer-yagnasri.vercel.app/"
        />
        <ProjectsCard
          title="ACCIDENT DETECTION SYSTEM"
          des=" This Accident Detection System uses YOLOv4, OpenCV, and Twilio for real-time vehicle and person detection. It captures live images, identifies potential accidents, and triggers automated emergency calls via Twilio API. The project is implemented using Python, OpenCV, NumPy, and Google Colab for seamless execution."
          src={projectFive}
          githubLink= "https://github.com/yagnasri2828/AccidentDetection"
          // liveLink ="https://studyspherewebsite.netlify.app/"
        />
        {/* <ProjectsCard
          title="DASHBOARD USING POWERBI"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
          githubLink= "https://github.com/yagnasri2828/Studysphere"
          liveLink ="https://studyspherewebsite.netlify.app/"
        /> */}
      </div>
    </section>
  );
}

export default Projects