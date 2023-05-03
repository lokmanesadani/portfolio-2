import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { FunctionComponent } from "react";

const project: FunctionComponent<{
  index: number;
  title: string;
  description: string;
  technology: string;
}> = ({ index, title, description, technology }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ translateY: -7 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
        delay: index * 0.1,
      }}
      key={index}
      className="flex flex-col bg-lightBackgound rounded-md shadow-lg p-8   "
    >
      <div className="text-white opacity-75 font-bold text-xl mb-3">
        {title}
      </div>
      <div className="text-white opacity-75 font-light text-[15.5px] mb-3 flex-1">
        {description}
      </div>

      <div className="flex flex-wrap gap-3 mb-4">
        {technology.split(", ").map((tech, index) => {
          return (
            <div
              key={index}
              className="text-gray-400 font-thin text-[15px] mt-2"
            >
              {tech}
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-end gap-4 ">
        <a
          className="mr-auto"
          href="https://github.com/lokmanesadani?tab=overview&from=2023-01-01&to=2023-01-09"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className=" cursor-pointer hover:-translate-y-[2px] transition-all duration-200 ease-in-out w-5 h-fit text-gray-200 opacity-60 hover:opacity-100 hover:text-amber-400"
          />
        </a>
        <a href="https://github.com/lokmanesadani?tab=overview&from=2023-01-01&to=2023-01-09">
          <FontAwesomeIcon
            icon={faGithub}
            className=" cursor-pointer hover:-translate-y-[2px] transition-all duration-200 ease-in-out w-5 h-fit text-gray-200 opacity-60 hover:opacity-100 hover:text-amber-400"
          />
        </a>
        <a href="https://github.com/lokmanesadani?tab=overview&from=2023-01-01&to=2023-01-09">
          <FontAwesomeIcon
            icon={faGithub}
            className=" cursor-pointer hover:-translate-y-[2px] transition-all duration-200 ease-in-out w-5 h-fit text-gray-200 opacity-60 hover:opacity-100 hover:text-amber-400"
          />
        </a>
      </div>
    </motion.div>
  );
};

export default project;
