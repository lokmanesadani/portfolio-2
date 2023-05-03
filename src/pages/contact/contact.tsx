import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        easings: "easeInOut",
      }}
      viewport={{ once: true }}
      className="max-w-7xl w-full overflow-hidden  py-10 flex flex-col items-center px-6 "
    >
      <span className="text-white font-semibold  text-5xl pb-10 pt-4">
        Get in touch
      </span>
      <div className="text-gray-300 text-xl font-light leading-8 max-w-2xl text-center mb-20">
        I'm always looking for opportunities and challenges, and if you think we
        could work together, please get in touch with me. My inbox is always
        open, whether you have a job offer or simply just want to say hi.
      </div>
      <button className="download">Submit</button>
    </motion.div>
  );
};

export default Contact;
