import { useEffect, useState } from "react";
import "./projects.scss";
import ProjectsData from "../../utils/projects.json";
import { motion } from "framer-motion";
interface Project {
  title: string;
  date: string;
  type: string;
  technology: string;
  description: string;
  link: string;
}

const Projects = () => {
  return (
    <div className="max-w-6xl w-full   max-sm:pb-16  flex flex-col px-6 sm:px-10 md:px-24">
      <motion.span
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-white flex gap-4 items-center font-monterastSemiBold  text-2xl pb-16 pt-6"
      >
        <span className="text-amber-400 text-2xl">02.</span> projects
        <div className="w-full h-[1px] bg-white opacity-50 rounded flex-1 md:mr-[20%]"></div>
      </motion.span>
      <div
        className={`grid md:grid-cols-2 lg:grid-cols-3  gap-6 place-items-center grid-cols-1 transition-all w-full pb-16`}
      >
        {ProjectsData.map((project, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1 + 0.2,
                easings: "easeInOut",
              }}
              key={index}
              className={`card `}
            >
              <div className=" absolute top-0 left-0 z-10 h-full w-full ">
                <img
                  src={`https://source.unsplash.com/random/200x200?sig=${index}`}
                  alt="project"
                  className="h-full object-cover w-full"
                />
              </div>
              <div className="backdrop"></div>
              <div className="content flex flex-col">
                <div className="">
                  {project.technology.split(", ").map((tech, index) => {
                    return (
                      <span
                        key={index}
                        className="px-2 py-1 max-sm:text-sm bg-text text-white rounded-lg mr-2"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
                <div className="pt-3 sm:pt-6 text-base sm:text-lg font-monterastBold">
                  {project.title}
                </div>
                <div className="max-sm:text-sm pt-1 text-justify">
                  {project.description}
                </div>
                <div className="mt-auto flex flex-row justify-between items-center">
                  <span className=" max-sm:text-sm font-monterastSemiBold">
                    {project.date}
                  </span>
                  <span className=" bg-sky-700 max-sm:text-base px-2 py-1 sm:px-3 sm:py-2 rounded">
                    <a href={project.link}>Live demo</a>
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
