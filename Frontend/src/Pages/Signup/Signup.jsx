import AuthenHeader from "../../Components/AuthenHeader";
import SignupComp from "../../Components/SignupComp";

const Signup = () => {
  return (
    <div className="p-10">
      <AuthenHeader
        heading="Signup to create an account"
        subheading="Already have an account? "
        linkName="Login"
        linkUrl="/login"
      />
      <SignupComp />
    </div>
  );
};

export default Signup;
