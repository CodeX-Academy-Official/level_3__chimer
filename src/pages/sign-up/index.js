import React from "react";

import SignUpForm from "./components/SignUpForm";
import { authActionsContext } from "../../../../context/auth.context";

const SignUpPage = () => {
  const { signUp } = useContext(authActionsContext);
  return (
    <div className="h-screen flex flex-col justify-center items-center p-4">
      <h1>Chimer</h1>
      <div className="flex justify-center items-center sign-up-form-container">
        <SignUpForm onSubmit={signUp} />
      </div>
    </div>
  );
};

export default SignUpPage;
