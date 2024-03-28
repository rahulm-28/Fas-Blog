import "./Login.css";
import AuthenHeader from "../../Components/AuthenHeader";
import LoginComp from "../../Components/LoginComp";

const Login = () => {
  return (
    <>
      <AuthenHeader
        heading="Login to your account"
        subheading="Don't have an account yet?"
        linkName="Signup"
        linkUrl="/signup"
      />
      <LoginComp />
    </>
  );
};

export default Login;
