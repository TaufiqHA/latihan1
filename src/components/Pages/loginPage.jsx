import AuthLayout from "../Layouts/AuthLayout";
import FloatingLabelInput from "../Fragments/FloatingLabelInput";
import Button1 from "../Elements/Button";

const LoginPage = () => {
  return (
    <AuthLayout content="Login">
      <FloatingLabelInput label="Username" name="username" type="text" />
      <FloatingLabelInput label="Password" name="password" type="password" />
      <Button1 color="bg-green-600">Login</Button1>
      <p className="text-xs text-slate-400 font-semibold">
        belum punya akun ?{" "}
        <a href="/register" className="text-blue-400">
          register
        </a>{" "}
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
