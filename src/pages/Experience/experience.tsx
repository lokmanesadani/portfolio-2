import { motion } from "framer-motion";

const Experience = ({ index }: { index: number }) => {
  return (
    <div className="max-w-6xl w-full   max-sm:pb-16  flex flex-col px-6 sm:px-10 md:px-24 py-24">
      <motion.span
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-white text-opacity-90 flex gap-4 items-center font-monterastBold  text-2xl pb-16 pt-6"
      >
        <span className="text-amber-400 text-2xl">0{index}.</span> Experience{" "}
        <div className="w-full h-[1px] bg-white opacity-50 rounded flex-1 md:mr-[20%]"></div>
      </motion.span>
    </div>
  );
};

export default Experience;
