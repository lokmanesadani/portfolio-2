import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
const SayHi = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        easings: "easeInOut",
      }}
      className=" w-80 rounded-full my-16 font-cairoBold gap-8 flex flex-col items-center justify-center overflow-hidden sm:w-96 aspect-square text-white border-2"
    >
      <div className="text-3xl sm:text-4xl ">Let's Say Hi</div>
      <div className="text-2xl text-red-300 sm:text-3xl italic font-thin">
        hl_sadani@esi.dz
      </div>
      <div className="flex flex-row gap-12 text-3xl sm:text-4xl">
        <div className=" cursor-pointer">
          <a href="https://www.instagram.com/lok_mane.s">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className=" cursor-pointer">
          <a href="https://www.facebook.com/profile.php?id=100012091511985">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
        <div className=" cursor-pointer">
          <a href="https://www.linkedin.com/in/lokmane-sadani-b843421bb/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default SayHi;
