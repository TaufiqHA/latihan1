import AuthLayout from "../Layouts/AuthLayout";
import FloatingLabelInput from "../Fragments/FloatingLabelInput";
import Button1 from "../Elements/Button";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayout content="Register">
      <FloatingLabelInput label="Fullname" name="username" type="text" />
      <FloatingLabelInput label="Email" name="email" type="email" />
      <FloatingLabelInput label="Password" name="password" type="password" />
      <FloatingLabelInput
        label="Confirm Password"
        name="password"
        type="password"
      />
      <Button1 color="bg-green-600">Register</Button1>
      <p className="text-xs text-slate-400 font-semibold">
        sudah punya akun ?{" "}
        <Link to="/" className="text-blue-400">
          login
        </Link>{" "}
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;
