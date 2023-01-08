import { useForm } from "react-hook-form";
import FormInput from "../../components/formInput/formInput";
import emailjs from "emailjs-com";
const sendEmail = (data: any) => {
  emailjs.send(
    "service_c6yrlwg",
    "template_xwsy2ao",
    { ...data },
    "iL92_1oT4DwqtiZeA"
  );
};
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fields = [
    {
      type: "text",
      name: "name",
      placeholder: "name",
    },
    {
      type: "email",
      name: "email",
      placeholder: "email",
    },
    {
      name: "phone",
      type: "text",
      placeholder: "phone",
    },
    {
      name: "subject",
      type: "text",
      placeholder: "subject",
    },
  ];

  return (
    <div className="max-w-7xl w-full overflow-hidden  py-10 flex flex-col items-center px-6">
      <span className="text-white font-monterastSemiBold  text-4xl pb-10 pt-4">
        Contact us
      </span>
      <div className="flex flex-col md:flex-row w-full sm:w-2/3 py-10">
        <form
          className=" flex flex-col items-center w-full"
          onSubmit={handleSubmit((data) => {
            console.log(data);
            sendEmail(data);
          })}
        >
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-x-5 sm:gap-y-8 gap-y-5 grow">
            {fields.map((field) => (
              <FormInput
                key={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                reg={register(field.name, { required: true })}
                error={errors[field.name]}
              />
            ))}
          </div>
          <textarea
            className="bg-transparent border border-slate-500 text-slate-300 focus:border-slate-100 w-full px-3 sm:px-4 text-lg py-3 sm:py-4 aspect-[2.5] min-h-[300px] rounded focus:outline-none resize-none mt-6 sm:mt-8"
            {...register("message", { required: true })}
            name="message"
            placeholder="message"
          />
          {errors["message"] && (
            <span className="text-red-500 w-full pt-2 text-xs">
              message is required
            </span>
          )}

          <button
            className="bg-icon mt-8 w-fit text-slate-900 font-monterastSemiBold rounded px-8 py-4"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
