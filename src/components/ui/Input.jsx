export const Input = ({
  label,
  type,
  name,
  onChange,
  required,
  placeholder,
}) => {
  return (
    <>
      <div>
        <label htmlFor="email" className="py-2 text-gray-500">
          {label}
        </label>
        <input
          type={type}
          name={name}
          onChange={onChange}
          required={required}
          className="w-full h-10 mt-2 px-2 text-gray-400 border-2 border-gray-300 rounded-md outline-0  focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/20  "
          placeholder={placeholder}
        />
      </div>
    </>
  );
};
