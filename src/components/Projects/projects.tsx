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
  const [index, setIndex] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false);
  const [filtered, setFiltered] = useState<Project[]>(ProjectsData);
  const [showed, setShowed] = useState<Project[]>(filtered.slice(0, 6));
  useEffect(() => {
    console.log(filtered);
  }, [index]);

  return (
    <div className="max-w-7xl w-full overflow-hidden transition-all  py-10 flex flex-col items-center px-6">
      <span className="text-white font-monterastSemiBold text-4xl pb-10 pt-4">
        Projects
      </span>
      <div className="w-full flex text-white flex-row justify-end">
        <div
          className={` transition-colors rounded-l-lg px-10 py-4 cursor-pointer ${
            selectedLink === "All"
              ? "bg-icon text-backgound font-black"
              : "bg-slate-800"
          }`}
          onClick={() => {
            setSlecectedLink("All");
            setFiltered(ProjectsData);
            setShowed(ProjectsData.slice(0, 6));
            setShow(false);
          }}
        >
          All
        </div>
        <div
          className={` transition-colors px-10 py-4 cursor-pointer ${
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
            setShowed(filteredProjects.slice(0, 6));
            setShow(false);
          }}
        >
          Personel
        </div>
        <div
          className={` transition-colors px-10 py-4 rounded-r-lg  cursor-pointer ${
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
            setShowed(filteredProjects.slice(0, 6));
            setShow(false);
          }}
        >
          Professional
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-6 place-items-center grid-cols-1 h-fit w-full py-16 ">
        {showed.map((project, index) => {
          return (
            <div key={index} className="card">
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
                        className="px-2 py-1 bg-text text-white rounded-lg mr-2"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
                <div className="pt-6 text-lg font-monterastBold">
                  {project.title}
                </div>
                <div className="pt-1 text-justify">{project.description}</div>
                <div className="mt-auto flex flex-row justify-between items-center">
                  <span className=" font-monterastSemiBold">
                    {project.date}
                  </span>
                  <span className=" bg-sky-700 px-3 py-2 rounded">
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
          if (show) {
            setShowed(filtered.slice(0, 6));
          } else {
            setShowed(filtered);
          }
        }}
        className="px-8 py-4 rounded-lg bg-text text-white"
      >
        View all
      </div>
    </div>
  );
};

export default Projects;
