import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
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
  const [projects, setProjects] = useState<Project[]>([]);
  let filteredSlices: any;
  // slice a list into elements of size n and return a list of lists

  const getSlicesOfThree = (list: Project[]) => {
    const slices: Project[][] = [];

    for (let i = 0; i < list.length; i += 3) {
      slices.push(list.slice(i, i + 3));
    }
    return slices;
  };
  const slices = getSlicesOfThree(ProjectsData);
  filteredSlices = slices;
  useEffect(() => {
    setProjects(slices[index]);
  }, [index]);

  return (
    <div className="max-w-6xl w-full  py-10 flex flex-col items-center px-6">
      <span className="text-white font-monterastSemiBold text-4xl pb-10 pt-4">
        Projects
      </span>
      <div className="w-full flex text-white flex-row justify-end">
        <div
          className={` px-7 transition-colors rounded-l-lg py-3 cursor-pointer ${
            selectedLink === "All"
              ? "bg-icon text-backgound font-black"
              : "bg-slate-800"
          }`}
          onClick={() => {
            setSlecectedLink("All");
            filteredSlices = slices;
            if (selectedLink !== "All") {
              setIndex(0);
              setProjects(slices[0]);
            } else {
              setProjects(slices[index]);
            }
          }}
        >
          All
        </div>
        <div
          className={` px-7 transition-colors py-3 cursor-pointer ${
            selectedLink === "Personel"
              ? "bg-icon text-backgound font-black"
              : "bg-slate-800"
          }`}
          onClick={() => {
            setSlecectedLink("Personel");
            filteredSlices = getSlicesOfThree(
              ProjectsData.filter((project) => {
                return project.type === "Personel";
              })
            );
            if (selectedLink !== "Personel") {
              setIndex(0);
              setProjects(filteredSlices[0]);
            } else {
              setProjects(filteredSlices[index]);
            }
          }}
        >
          Personel
        </div>
        <div
          className={` transition-colors px-7 rounded-r-lg py-3 cursor-pointer ${
            selectedLink === "Professional"
              ? "bg-icon text-backgound font-black"
              : "bg-slate-800"
          }`}
          onClick={() => {
            setSlecectedLink("Professional");
            filteredSlices = getSlicesOfThree(
              ProjectsData.filter((project) => {
                return project.type === "Professional";
              })
            );
            if (selectedLink !== "Professional") {
              setIndex(0);
              setProjects(filteredSlices[0]);
            } else {
              setProjects(filteredSlices[index]);
            }
          }}
        >
          Professional
        </div>
      </div>
      <div className="flex flex-col sm:flex-row">
        {projects.map((project, index) => {
          return (
            <div className=" h-92 w-full">
              <div>
                <img src="" alt="" />
              </div>
              <div>{project.technology}</div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row ">
        <div
          onClick={() => {
            if (index > 0) {
              setIndex(index - 1);
              setProjects(filteredSlices[index]);
            }
          }}
          className="grid place-content-center px-6 rounded-l-lg bg-icon text-backgound text-xl py-4"
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        <div className="h-full w-[2px] bg-backgound"></div>
        <div
          onClick={() => {
            if (index < slices.length - 1) {
              setIndex(index + 1);
              setProjects(filteredSlices[index]);
            }
          }}
          className="grid place-content-center px-6 rounded-r-lg bg-icon text-backgound text-xl py-4"
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
