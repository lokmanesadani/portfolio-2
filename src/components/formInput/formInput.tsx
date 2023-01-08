import "./formInput.scss";
const FormInput = (props: {
  type: string;
  name: string;
  placeholder: string;
  reg: any;
  error: any;
}) => {
  console.log(props.error);

  return (
    <div className="">
      <input
        className="bg-transparent border border-slate-500 text-slate-300 focus:border-slate-100 w-full px-3 sm:px-4 text-lg sm:py-6 py-4 rounded focus:outline-none"
        {...props.reg}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
      />
      {props.error && props.error.type === "required" && (
        <span className="text-red-500 text-xs w-fit">
          {props.name} is required
        </span>
      )}
    </div>
  );
};

export default FormInput;
