import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "../../../sign-up/components/SignUpForm/SignUpForm.scss";

const SignInForm = ({ onSubmit }) => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await onSubmit(formState.email, formState.password);
  }
  function handleChange(e) {
    const { target: { name, value } } = e;
    setFormState(prevFormState => ({
      ...prevFormState,
      [name]: value,
    }));
  }

  return (
    <div className="">
      <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleChange}
            name="email"
            value={formState.email}
          />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={formState.password}
          />

        </Form.Group>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

export default SignInForm;

