import {
  faLinkedin,
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Brands = () => {
  return (
    <div className="max-md:hidden">
      <div className="flex flex-col right-0 fixed bottom-0 px-2 gap-6 items-center  w-[88px] ">
        <span
          className="text-gray-200 hover:opacity-100 font-light hover:text-icon hover:-translate-y-1 transition-all duration-75 cursor-pointer w-6 h-fit text-opacity-60"
          style={{ writingMode: "vertical-rl" }}
        >
          {" "}
          hl_sadani@esi.dz
        </span>
        <div className="h-24 w-[1px] bg-white opacity-90" />
      </div>
      <div className="flex flex-col fixed bottom-0 px-2 gap-6 items-center  w-[88px]">
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, type: "ease-in", delay: 0 }}
          href="https://www.linkedin.com/in/lokmane-sadani-b843421bb/"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className=" hover:-translate-y-1 transition-all duration-75 cursor-pointer w-5 h-fit text-gray-200 opacity-60 hover:opacity-100 hover:text-icon"
          />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, type: "ease-in", delay: 0.2 }}
          href="https://github.com/lokmanesadani?tab=overview&from=2023-01-01&to=2023-01-09"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className=" cursor-pointer hover:-translate-y-1 transition-all duration-75 w-5 h-fit text-gray-200 opacity-60 hover:opacity-100 hover:text-icon"
          />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, type: "ease-in", delay: 0.4 }}
          href="https://www.facebook.com/profile.php?id=100012091511985"
        >
          <FontAwesomeIcon
            className="hover:-translate-y-1 transition-all duration-75 cursor-pointer w-5 h-fit text-gray-200 opacity-60 hover:opacity-100 hover:text-icon"
            icon={faFacebook}
          />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, type: "ease-in", delay: 0.6 }}
          href="https://www.instagram.com/lok_mane.s"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="hover:-translate-y-1 transition-all duration-75 cursor-pointer w-5 h-fit text-gray-200 opacity-60 hover:opacity-100 hover:text-icon"
          />
        </motion.a>

        <div className="h-24 w-[1px] bg-white opacity-90" />
      </div>
    </div>
  );
};

export default Brands;
