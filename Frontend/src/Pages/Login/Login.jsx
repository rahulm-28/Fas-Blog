import "./Login.css";
import AuthenHeader from "../../Components/AuthenHeader";
import LoginComp from "../../Components/LoginComp";

const Login = () => {
  return (
    <div className="p-10">
      <AuthenHeader
        heading="Login to your account"
        subheading="Don't have an account yet?"
        linkName="Signup"
        linkUrl="/signup"
      />
      <LoginComp />
    </div>
  );
};

export default Login;
