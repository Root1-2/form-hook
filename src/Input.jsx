import PropTypes from "prop-types";

function Input({
  id,
  label,
  type = "text",
  disabled = false,
  rows = 8,
  w = "half",
  error,
  register,
  name,
}) {
  const baseClassName =
    "text-dark peer block w-full appearance-none border-0 border-b bg-transparent px-0 py-5 text-lg focus:outline-none focus:ring-0 border-gray-600 focus:border-blue-500";

  let inputElement;

  if (type === "textarea") {
    inputElement = (
      <textarea
        className={baseClassName}
        placeholder=" "
        disabled={disabled}
        rows={rows}
        id={id}
        {...register(name)}
      />
    );
  } else {
    inputElement = (
      <input
        type={type}
        className={baseClassName}
        placeholder=" "
        disabled={disabled}
        id={id}
        {...register(name)}
      />
    );
  }

  return (
    <div
      className={`group relative z-0 mb-5 ${w === "full" ? "w-11/12" : "w-5/12"}`}
    >
      {inputElement}
      <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-emerald-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4">
        {label}
      </label>
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  rows: PropTypes.number,
  w: PropTypes.string,
  error: PropTypes.object,
  register: PropTypes.func,
  name: PropTypes.string,
};

export default Input;
