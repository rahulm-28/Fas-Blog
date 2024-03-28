import { useState } from "react";
import { signupFields } from "./FormFields";
import AuthenInput from "./AuthenInput";
import FormAction from "./FormAction";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.is] = ""));

const SignupComp = () => {
  const [signupState, setSignupState] = useState(fieldsState);
  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = () => {};
  return (
    <div className="flex justify-center">
      <form
        className="mt-8 space-y-6 w-3/4 flex flex-col justify-center"
        onSubmit={handleSubmit}
      >
        <div className="">
          {fields.map((field) => (
            <AuthenInput
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
        </div>
        <FormAction handleSubmit={handleSubmit} text="Register" />
      </form>
    </div>
  );
};

export default SignupComp;
