import Projects from "../../../utils/projects-side.json";
import { useState } from "react";
import Project from "./project";
const otherProjects = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full">
      <h1 className="text-center font-semibold text-white text-opacity-90 text-3xl mb-10 ">
        Other Noteworthy Projects
      </h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {Projects.slice(0, 6).map((project, index) => {
          return <Project index={index} {...project} />;
        })}
        {show &&
          Projects.slice(6, -1).map((project, index) => {
            return <Project index={index} {...project} />;
          })}
      </div>
      <div className="flex justify-center items-center mt-10">
        <button
          onClick={() => setShow(!show)}
          className="bg-gradient-to-r from-amber-400 font-bold leading-7 to-amber-600 hover:brightness-75 transition-all duration-300 px-4 py-2 pt-[9px] rounded-full text-backgound"
        >
          {show ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default otherProjects;
