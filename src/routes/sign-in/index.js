import React, { useContext } from "react";

import { authActionsContext } from "../../context/auth.context";

import SignInForm from "./components/SignInForm";

const SignInPage = () => {
  const { login } = useContext(authActionsContext);
  return (
    <div className="h-screen flex flex-col justify-center items-center p-4">
      <h1>Chimer</h1>
      <div className="flex justify-center items-center sign-up-form-container">
        <SignInForm onSubmit={login} />
      </div>
    </div>
  );
}

export default SignInPage;

