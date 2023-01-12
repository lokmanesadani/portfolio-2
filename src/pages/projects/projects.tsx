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
  const [selectedLink, setSlecectedLink] = useState<string>("All");
  const [show, setShow] = useState<boolean>(false);
  const [filtered, setFiltered] = useState<Project[]>(ProjectsData);

  return (
    <div className="max-w-7xl w-full overflow-hidden  py-10 flex flex-col items-center px-6">
      <motion.span
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-white font-monterastSemiBold text-4xl pb-10 pt-4"
      >
        Projects
      </motion.span>
      <div className="w-full flex text-white max-sm:text-xs flex-row justify-end">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className={` transition-colors rounded-l-lg px-4 sm:px-10 py-2 sm:py-4 cursor-pointer ${
            selectedLink === "All"
              ? "bg-icon text-backgound font-black"
              : "bg-slate-800"
          }`}
          onClick={() => {
            setSlecectedLink("All");
            setFiltered(ProjectsData);
            setShow(false);
          }}
        >
          All
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className={` transition-colors px-4 sm:px-10 py-2 sm:py-4 cursor-pointer ${
            selectedLink === "Personel"
              ? "bg-icon text-backgound font-black"
              : "bg-slate-800"
          }`}
          onClick={() => {
            setSlecectedLink("Personel");
            const filteredProjects = ProjectsData.filter(
              (project) => project.type === "Personel"
            );
            setFiltered(filteredProjects);
            setShow(false);
          }}
        >
          Personel
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          viewport={{ once: true }}
          className={` transition-colors px-4 sm:px-10 py-2 sm:py-4 rounded-r-lg  cursor-pointer ${
            selectedLink === "Professional"
              ? "bg-icon text-backgound font-black"
              : "bg-slate-800"
          }`}
          onClick={() => {
            setSlecectedLink("Professional");
            const filteredProjects = ProjectsData.filter(
              (project) => project.type === "Professional"
            );
            setFiltered(filteredProjects);
            setShow(false);
          }}
        >
          Professional
        </motion.div>
      </div>
      <div
        className={`grid md:grid-cols-2 lg:grid-cols-3  gap-6 place-items-center grid-cols-1 transition-all w-full py-16`}
      >
        {filtered.map((project, index) => {
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
              className={`card ${index > 5 && !show ? "hidden" : ""}`}
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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onClick={() => {
          setShow(!show);
        }}
        className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base bg-text text-white"
      >
        View all
      </motion.div>
    </div>
  );
};

export default Projects;
