import { useForm } from "react-hook-form";
import FormInput from "../../components/formInput/formInput";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
const sendEmail = (data: any) => {
  emailjs.send(
    "service_c6yrlwg",
    "template_xwsy2ao",
    { ...data },
    "iL92_1oT4DwqtiZeA"
  );
};
const Contact = () => {
  return (
    <div className="max-w-7xl w-full overflow-hidden  py-10 flex flex-col items-center px-6">
      <span className="text-white font-monterastSemiBold  text-4xl pb-10 pt-4">
        Contact us
      </span>
      <div className="flex flex-col md:flex-row w-full sm:w-2/3 py-10">
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.7,
            easings: "easeInOut",
          }}
          viewport={{ once: true }}
          className="bg-amber-400 mt-8 w-fit text-slate-900 font-monterastSemiBold rounded px-8 py-4"
          type="submit"
        >
          Submit
        </motion.button>
      </div>
    </div>
  );
};

export default Contact;
