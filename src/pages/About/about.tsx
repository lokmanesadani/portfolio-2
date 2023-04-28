import Coffee from "../../components/coffee";
import Anime from "../../components/anime";
import Music from "../../components/music";
import Cinema from "../../components/cinema";
import Joystick from "../../components/joystick";
import { motion } from "framer-motion";

import "./About.scss";
interface Intrest {
  icon: any;
  name: string;
}
interface Info {
  title: string;
  value: string;
}
const About = () => {
  const Intrests: Intrest[] = [
    { icon: Coffee, name: "Coffee" },
    { icon: Anime, name: "Anime" },
    { icon: Music, name: "Music" },
    { icon: Cinema, name: "Movies" },
    { icon: Joystick, name: "Games" },
  ];

  return (
    <div className="max-w-6xl w-full   max-sm:pb-16  flex flex-col px-6 sm:px-10 md:px-24">
      <motion.span
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-white flex gap-4 items-center font-monterastSemiBold  text-2xl pb-16 pt-6"
      >
        <span className="text-amber-400 text-2xl">01.</span> About me{" "}
        <div className="w-full h-[1px] bg-white opacity-50 rounded flex-1 md:mr-[20%]"></div>
      </motion.span>

      <div className="w-full backdrop-blur-sm rounded-2xl flex flex-col h-full justify-evenly">
        <div className="flex flex-col lg:flex-row-reverse gap-12 max-lg:items-center">
          <div className="wrapper relative ">
            <div className="image">
              <motion.img
                initial={{ opacity: 0.4, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                src="/Signature.jpg"
                className="rounded"
                alt=""
              />
            </div>
            <div className="border">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="border-white border-[4px] rounded-md w-full h-full hover:border-amber-400"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="leading-8 text-white text-justify w-full max-sm:pb-10"
          >
            Hey there, I'm{" "}
            <span className=" text-amber-400">SADANI Lokmane Abdelaziz</span>, a
            software engineer who's been working with React and Node.js for a
            while now. I enjoy creating responsive and user-friendly web
            applications and have some advanced knowledge of these technologies.
            I'm a collaborative team player who values efficient and
            maintainable code. I'm also excited about new projects and
            challenges that push me to grow as a developer. If you're looking
            for a motivated software engineer with experience in React and
            Node.js, let's connect and see how I can help bring your vision to
            life!
          </motion.div>
        </div>
        <div className="flex flex-col pt-10 sm:flex-row gap-12 max-sm:items-center">
          <div className=" text-justify w-full text-white ">
            <span className=" text-2xl font-monterastSemiBold">Intrests</span>
            <div className="flex flex-wrap gap-4 py-4">
              {Intrests.map((intrest, index) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + 0.2 * index }}
                    key={index}
                    className="flex rounded-full items-center justify-center p-4 aspect-square h-24 bg-slate-500 flex-col gap-2"
                  >
                    <div className="h-8">
                      <intrest.icon />
                    </div>
                    <span className="text-sm">{intrest.name}</span>
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
