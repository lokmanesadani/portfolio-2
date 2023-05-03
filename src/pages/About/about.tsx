import { motion } from "framer-motion";

import "./About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
interface Intrest {
  icon: any;
  name: string;
}

const technologies = [
  "React",
  "Next.js",
  "Typescript",
  "Node.js",
  "Express.js",
  "Javascript (ES6+)",
];

const About = ({ index }: { index: number }) => {
  return (
    <div className="max-w-6xl w-full   max-sm:pb-16  flex flex-col px-6 sm:px-10 md:px-24 py-24">
      <motion.span
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-white text-opacity-90 flex gap-4 items-center font-bold  text-3xl pb-16 pt-6"
      >
        <span className="text-amber-400 text-2xl">0{index}.</span> About me{" "}
        <div className="w-full h-[1px] bg-white opacity-50 rounded flex-1 md:mr-[20%]"></div>
      </motion.span>

      <div className="w-full backdrop-blur-sm rounded-2xl text-[1.1rem] font-light flex flex-col h-full justify-evenly">
        <div className="flex flex-col lg:flex-row-reverse gap-12 max-lg:items-center">
          <div className="wrapper relative ">
            <motion.img
              initial={{ opacity: 0.4, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              src="/Signature.jpg"
              className="rounded border-4 md:border-[5px]"
              alt=""
            />
          </div>
          <div className="w-full   text-justify leading-[30px] text-white text-opacity-75">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="  w-full"
            >
              Hey there, I'm{" "}
              <span className=" text-amber-400 text-opacity-100">
                SADANI Lokmane Abdelaziz
              </span>
              , a software engineer who's been working with{" "}
              <span className=" text-amber-400 text-opacity-100">React</span>{" "}
              and{" "}
              <span className=" text-amber-400 text-opacity-100">Node.js</span>{" "}
              for a while now. I enjoy creating responsive and user-friendly web
              applications and have some advanced knowledge of these
              technologies.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              I'm a collaborative team player who values efficient and
              maintainable code. I'm also excited about new projects and
              challenges that push me to grow as a developer. If you're looking
              for a motivated software engineer with experience in React and
              Node.js, let's connect and see how I can help bring your vision to
              life !
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-white text-opacity-75 pt-6"
            >
              Here are a few technologies I’ve been working with recently :
            </motion.div>
            <div className="flex flex-wrap gap-4 mt-4">
              {technologies.map((tech, index) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + 0.2 * index }}
                    viewport={{ once: true }}
                    key={index}
                    className="flex items-center gap-4 text-white px-4 py-1 rounded bg-gray-700 text-opacity-75 text-[15.5px] "
                  >
                    {/* <FontAwesomeIcon
                      className=" text-amber-400"
                      icon={faCaretRight}
                    /> */}
                    {tech}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
