import React from "react";
import AboutImg from "./img7.jpeg"; // Replace with your actual image path
import "./About.css";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                A Frontend Developer is responsible for designing and implementing the visual elements of a
                website or web application that users interact with directly. They use technologies like HTML, CSS, 
                and JavaScript, along with modern frameworks such as React, Angular, or Vue.js, to 
                create responsive, user-friendly interfaces.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                A Database Developer is responsible for designing, developing, 
                and managing databases that store and organize data efficiently.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                A Backend Developer is responsible for building and maintaining
                the server-side logic, databases, and APIs that power web applications.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
