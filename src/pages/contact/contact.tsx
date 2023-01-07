import { useForm } from "react-hook-form";
import FormInput from "../../components/formInput/formInput";

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
      <div className="flex flex-col md:flex-row w-full py-10">
        <div className="w-full">{/* <Developer /> */}</div>
        <form
          className=" flex flex-col items-center w-full"
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <div className="grid w-full grid-cols-2 gap-x-5 gap-y-8 grow">
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
            className="bg-transparent border border-slate-500 text-slate-300 focus:border-slate-100 w-full px-4 text-lg py-4 rounded focus:outline-none resize-none mt-8"
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
