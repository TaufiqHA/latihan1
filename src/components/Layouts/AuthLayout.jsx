const AuthLayout = ({ content, children }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className="flex flex-col w-full max-w-xs gap-5">
        <h2 className="text-4xl text-green-600 font-bold">{content}</h2>
        <p className="text-slate-400 text-sm font-semibold ">
          masukkan akun anda
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
