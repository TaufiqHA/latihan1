const Button1 = (props) => {
  const { children, color = "bg-gray-600" } = props;
  return (
    <button
      type="button"
      className={`w-full text-white ${color} hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700`}
    >
      {" "}
      {children}{" "}
    </button>
  );
};

export default Button1;
