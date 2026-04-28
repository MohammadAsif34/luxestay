export const Button = ({
  type = "button",
  onClick,
  children,
  className = "primary",
}) => {
  const variants = {
    primary: "bg-teal-500 text-white hover:bg-teal-600",
    secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-100",
  };
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`h-10 my-2 px-4 rounded-md cursor-pointer ${variants[className]}`}
      >
        {children}
      </button>
    </>
  );
};
