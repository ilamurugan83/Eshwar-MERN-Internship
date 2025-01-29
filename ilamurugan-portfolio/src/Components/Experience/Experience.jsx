import React from "react";
import "./Experience.css";
import { FaCss3, FaFigma, FaHtml5, FaJava, FaJs, FaReact } from "react-icons/fa";
import { SiCanva, SiPython, SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
const Skills = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJava color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiCanva color="#FF4438" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiPython color="#FF4438" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
           
            <span className="text-white">
              <h2 className="leading-tight">Programming: Understand at least one programming language (C++, Python, Java, or MATLAB depending on your field).</h2>
            
              <ul className="text-sm p-2">
               
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
           
            <span className="text-white">
              <h2 className="leading-tight">Emerging Tech: Familiarize yourself with AI, IoT, 3D printing technologies
              </h2>
            
              <ul className="text-sm p-2">
               
              </ul>
            </span>
          </div>          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
           
            <span className="text-white">
              <h2 className="leading-tight">Tools: VSCode, Git, GitHub, Canva, Kali Linux, Blender
              </h2>
            
              <ul className="text-sm p-2">
               
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
           
           <span className="text-white">
             <h2 className="leading-tight">Cloud/Databases: MySQL,MangoDB

             </h2>
           
             <ul className="text-sm p-2">
              
             </ul>
           </span>
         </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
          
            <span className="text-white">
            <h2 className="leading-tight">Core Concepts: Data Structures & Algorithms,OOPs
            </h2>
          
            <ul className="text-sm p-2">
              
            </ul>
           </span>
         </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
