import React from "react";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import "./SignUpForm.scss";

const SignUpForm = () => {
  return (
    <form className="flex flex-col gap-4">
      {/* TODO: Replace with bootstrap. */}
      <Input />
      <Input />
      <Button variant="primary">Sign Up</Button>
    </form>
  );
};

export default SignUpForm;
