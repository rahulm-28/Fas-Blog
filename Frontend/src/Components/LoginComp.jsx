import { useState } from "react";
import { loginFields } from "./FormFields";
import AuthenInput from "./AuthenInput";
import FormExtra from "./FormExtra";
import FormAction from "./FormAction";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const LoginComp = () => {
  const [loginState, setLoginState] = useState(fieldsState);
  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  //Handle Login API Integration here
  const authenticateUser = () => {};

  return (
    <div className="flex justify-center">
      <form className="mt-8 space-y-6 w-3/4 flex flex-col justify-center">
        <div className="-space-y-px">
          {fields.map((field) => (
            <AuthenInput
              key={field.id}
              handleChange={handleChange}
              value={loginState[field.id]}
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
        <FormExtra />
        <FormAction handleSubmit={handleSubmit} text="Login" />
      </form>
    </div>
  );
};

export default LoginComp;
