import "./projects.scss";
import ProjectsData from "../../utils/projects.json";
import { motion } from "framer-motion";
import OtherProjects from "./components/otherProjects";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface Project {
  title: string;
  date: string;
  type: string;
  technology: string;
  description: string;
  link: string;
  image: string;
}
{
  /* <div className="backdrop"></div>
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
              </div> */
}
const Projects = ({ index }: { index: number }) => {
  return (
    <div className="max-w-[1200px] w-full   max-sm:pb-16  flex flex-col px-6 sm:px-10 md:px-24 py-24">
      <motion.span
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-white flex gap-4 items-center font-bold  text-3xl pb-16 pt-6"
      >
        <span className="text-amber-400 text-2xl">0{index}.</span> Projects
        <div className="w-full h-[1px] bg-white opacity-50 rounded flex-1 md:mr-[20%]"></div>
      </motion.span>
      <div className={` grid-cols-1 transition-all w-full pb-16`}>
        {ProjectsData.slice(0, 3).map((project: Project, index) => {
          return (
            <div
              className={`${
                index % 2 == 0 ? "direction-rtl" : "direction-ltr"
              } grid-container lg:mb-28 md:mb-20 sm:mb-16 mb-8`}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 == 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={` info-container flex flex-col text-white text-opacity-75 max-md:bg-lightBackgound max-md:rounded max-md:bg-opacity-75 hover:max-md:bg-opacity-50 transition-colors max-md:cursor-pointer`}
              >
                <div className=" text-icon text-[15px] font-light">
                  {project.title}
                </div>
                <div className="font-bold text-3xl">{project.title}</div>
                <div
                  className={`${
                    index % 2 == 0 ? "md:text-right" : "text-left"
                  } font-light direction-ltr max-lg:md:p-6 mt-8 rounded text-base  md:text-[15.5px] lg:text-base   bg-transparent max-lg:md:bg-lightBackgound max-lg:md:shadow-lg`}
                >
                  {project.description}
                </div>
                <div className="flex flex-wrap gap-2 text-base mt-8">
                  {project.technology.split(", ").map((tech) => (
                    <div className="font-extralight">{tech}</div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 text-lg my-8">
                  <a href="https://github.com/lokmanesadani">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className=" cursor-pointer  transition-all duration-200 ease-in-out w-5 h-fit text-gray-200 opacity-60 hover:opacity-100 hover:text-amber-400"
                    />
                  </a>
                </div>
              </motion.div>
              <motion.a
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="project-link md:shadow-md transition-transform duration-[500ms] ease-out"
                href=""
              >
                <img className="image-container" src={project.image} alt="" />
              </motion.a>
            </div>
          );
        })}
      </div>
      <OtherProjects />
    </div>
  );
};

export default Projects;
