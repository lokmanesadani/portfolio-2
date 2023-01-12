// import Spline from "@splinetool/react-spline";
import Developer from "../../components/developer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
const Introduction = () => {
  const RedirectToGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/u/0/?to=hl_sadani@esi.dz&fs=1&tf=cm`;

    window.location.href = gmailUrl;
  };
  return (
    <div className="max-w-7xl w-full max-sm:pt-[70px]  pb-10 flex flex-col px-6">
      <div className="flex flex-1  flex-col-reverse md:flex-row max-md:flex-1">
        <div className="w-full flex-1 flex flex-col text-white justify-center h-[450px] sm:h-[700px]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5 text-icon font-monterastSemiBold text-xl sm:text-3xl "
          >
            welcome !
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl md:text-4xl font-monterastBold mb-5"
          >
            I'm Lokmane Sadani
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-cairoBold text-xl italic mb-5 text-orange-100"
          >
            a MERN Stack developer from algiers
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mb-14  max-sm:text-sm"
          >
            Transforming your vision into a beautiful, functional reality.
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            onClick={RedirectToGmail}
            className="px-6 cursor-pointer py-3 w-fit max-sm:text-base text-lg text-white font-monterast bg-text rounded-md"
          >
            Hire me
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.2, type: "spring" }}
          className="flex relative flex-1 items-center  justify-center flex-col"
        >
          {/* <Spline
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 scale-[0.6] sm:scale-75 md:scale-100 lg:scale-[1.1]"
            scene="https://prod.spline.design/tQCKIPfZheceMkAF/scene.splinecode"
          /> */}
          <Developer />
        </motion.div>
      </div>
      <div className="col-span-2 max-md:mt-8 sm:col-start-2 flex-[0.2] text-white flex  justify-evenly text-xl sm:text-3xl items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className=" w-1/6 sm:w-1/5 h-[1px] bg-white rounded-full"
        ></motion.div>
        <motion.a
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          href="https://www.linkedin.com/in/lokmane-sadani-b843421bb/"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className=" hover:scale-150 transition-all cursor-pointer"
          />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          href="https://github.com/lokmanesadani?tab=overview&from=2023-01-01&to=2023-01-09"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className=" cursor-pointer hover:scale-150 transition-all"
          />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          href="https://www.facebook.com/profile.php?id=100012091511985"
        >
          <FontAwesomeIcon
            className="hover:scale-150 transition-all cursor-pointer"
            icon={faFacebook}
          />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          href="https://www.instagram.com/lok_mane.s"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className=" hover:scale-150 transition-all cursor-pointer"
          />
        </motion.a>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className=" w-1/6 sm:w-1/5 h-[1px] bg-white rounded-full"
        ></motion.div>
      </div>
    </div>
  );
};

export default Introduction;
