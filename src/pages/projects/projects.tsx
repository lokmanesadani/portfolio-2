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
    <div className="max-w-6xl w-full   max-sm:pb-16  flex flex-col px-6 sm:px-10 md:px-24 py-24">
      <motion.span
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-white flex gap-4 items-center font-bold  text-3xl pb-16 pt-6"
      >
        <span className="text-amber-400 text-2xl">0{index}.</span> Projects
        <div className="w-full h-[1px] bg-white opacity-50 rounded flex-1 md:mr-[20%]"></div>
      </motion.span>
      <div
        className={`flex flex-col gap-20 md:gap-32 place-items-center grid-cols-1 transition-all w-full pb-16`}
      >
        {ProjectsData.map((project: Project, index) => {
          return (
            <div
              className={`${
                index % 2 == 0 ? "direction-rtl" : "direction-ltr"
              } grid-container`}
            >
              <div
                className={` info-container flex flex-col text-white text-opacity-75 max-md:bg-lightBackgound max-md:rounded max-md:bg-opacity-75 hover:max-md:bg-opacity-50 transition-colors max-md:cursor-pointer`}
              >
                <div className=" text-icon text-[15px] font-light">
                  {project.title}
                </div>
                <div className="font-bold text-3xl">{project.title}</div>
                <div
                  className={`${
                    index % 2 == 0 ? "text-right" : "text-left"
                  } font-light direction-ltr md:p-6 mt-8 rounded text-base  md:text-[15.5px] lg:text-base leading-8 md:leading-8 lg:leading-8   bg-transparent md:bg-lightBackgound md:shadow-lg`}
                >
                  {project.description}
                </div>
                <div className="flex flex-wrap gap-2 text-base my-8">
                  {project.technology.split(", ").map((tech) => (
                    <div className="font-extralight">{tech}</div>
                  ))}
                </div>
              </div>
              <a className="project-link md:shadow-md" href="">
                <img className="image-container" src={project.image} alt="" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
