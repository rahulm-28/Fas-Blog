import "./Login.css";
import AuthenHeader from "../../Components/AuthenHeader";
import * as TemplateLogin from "../../Components/Login";

const Login = () => {
  return (
    <>
      <AuthenHeader
        heading="Login to your account"
        subheading="Don't have an account yet?"
        linkName="Signup"
        linkUrl="/signup"
      />
      <TemplateLogin />
    </>
  );
};

export default Login;
