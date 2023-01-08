import { useEffect, useState } from "react";
import "./projects.scss";
import ProjectsData from "../../utils/projects.json";
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
      <span className="text-white font-monterastSemiBold text-4xl pb-10 pt-4">
        Projects
      </span>
      <div className="w-full flex text-white max-sm:text-xs flex-row justify-end">
        <div
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
        </div>
        <div
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
        </div>
        <div
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
        </div>
      </div>
      <div
        className={`grid md:grid-cols-2 lg:grid-cols-3  gap-6 place-items-center grid-cols-1 transition-all w-full py-16`}
      >
        {filtered.map((project, index) => {
          return (
            <div
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
                <div className="pt-3 sm:pt-6 text-sm sm:text-lg font-monterastBold">
                  {project.title}
                </div>
                <div className="max-sm:text-xs pt-1 text-justify">
                  {project.description}
                </div>
                <div className="mt-auto flex flex-row justify-between items-center">
                  <span className=" max-sm:text-sm font-monterastSemiBold">
                    {project.date}
                  </span>
                  <span className=" bg-sky-700 max-sm:text-sm px-2 py-1 sm:px-3 sm:py-2 rounded">
                    Live demo
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        onClick={() => {
          setShow(!show);
        }}
        className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base bg-text text-white"
      >
        View all
      </div>
    </div>
  );
};

export default Projects;
