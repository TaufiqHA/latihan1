const Input = ({ name, type, id }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-green-600 bg-transparent rounded-lg border-1 border-green-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
    />
  );
};

export default Input;
