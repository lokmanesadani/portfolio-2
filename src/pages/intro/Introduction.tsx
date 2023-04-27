import { motion } from "framer-motion";
const Introduction = () => {
  const RedirectToGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/u/0/?to=hl_sadani@esi.dz&fs=1&tf=cm`;

    window.location.href = gmailUrl;
  };
  return (
    <div className="max-w-6xl w-full   max-sm:pb-16  flex flex-col px-6 sm:px-10 md:px-24 ">
      <div className="w-full flex-1 flex flex-col max-sm:py-[70px] text-white  justify-center h-[450px] min-h-screen m">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-7  text-icon font-monterastSemiBold text-lg sm:text-2xl"
        >
          Hi, my name is
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-6xl font-monterastExtraBold mb-7 text-white text-opacity-80"
        >
          Lokmane Sadani.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl md:text-5xl font-monterastBold mb-7 text-white text-opacity-40"
        >
          I specialize in developing web applications.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mb-16 text-xl max-sm:text-sm text-white text-opacity-90"
        >
          I'm a sotfware engineer and a MERN Stack developer based in Algiers. I
          will help you transform your vision into a beautiful, functional
          reality.
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          onClick={RedirectToGmail}
          className="px-6 cursor-pointer py-3 w-fit max-sm:text-base text-lg text-icon font-monterast border-icon border-2 rounded-md sm:mb-24"
        >
          Hire me
        </motion.div>
      </div>
      {/* <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.2, type: "spring" }}
          className="flex relative flex-1 items-center  justify-center flex-col"
        >
          <Spline
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 scale-[0.6] sm:scale-75 md:scale-100 lg:scale-[1.1]"
            scene="https://prod.spline.design/tQCKIPfZheceMkAF/scene.splinecode"
          />
          <Developer />
        </motion.div> */}

      {/* <div className="col-span-2 md:hidden max-md:mt-8 sm:col-start-2 flex-[0.2] text-white flex  justify-evenly text-xl sm:text-3xl items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className=" w-1/6 sm:w-1/5 h-[1px] bg-white rounded-full"
        ></motion.div>
        <Brands />
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className=" w-1/6 sm:w-1/5 h-[1px] bg-white rounded-full"
        ></motion.div>
      </div> */}
    </div>
  );
};

export default Introduction;
