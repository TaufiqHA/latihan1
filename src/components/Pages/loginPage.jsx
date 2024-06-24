import AuthLayout from "../Layouts/AuthLayout";
import FloatingLabelInput from "../Fragments/FloatingLabelInput";
import Button1 from "../Elements/Button";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayout content="Login">
      <FloatingLabelInput label="Username" name="username" type="text" />
      <FloatingLabelInput label="Password" name="password" type="password" />
      <Button1 color="bg-green-600">Login</Button1>
      <p className="text-xs text-slate-400 font-semibold">
        belum punya akun ?{" "}
        <Link to="/register" className="text-blue-400">
          register
        </Link>{" "}
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
