import React from "react";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react';

import { AuthProvider } from "../../../../context/auth.context";
import SignUpForm from ".";

describe("SignUpForm", () => {
  const mockSubmitFunction = jest.fn();
  function renderSignUpForm(onSubmit = mockSubmitFunction) {
    render(
      <AuthProvider>
        <SignUpForm onSubmit={onSubmit} />
      </AuthProvider>
    );
    const emailInput = screen.getByLabelText("Email address");
    const passwordInput = screen.getByLabelText("Password");
    const signUpButton = screen.getByRole("button");
    return { signUpButton, passwordInput, emailInput };
  }

  it("should be defined", () => {
    expect(SignUpForm).toBeDefined();
  });

  it("should display the sign up button", () => {
    const { signUpButton } = renderSignUpForm();

    expect(signUpButton).toBeInTheDocument();
    expect(signUpButton).toHaveTextContent("Sign Up");
  });

  it("should call the sign up method with the formState parameters when the sign up button is clicked", async () => {
    const {
      signUpButton,
      passwordInput,
      emailInput }
      = renderSignUpForm();
    const email = "test@test.com";
    const password = "strongest_password_ever";

    await userEvent.type(emailInput, email);
    await userEvent.type(passwordInput, password);
    await userEvent.click(signUpButton);

    expect(mockSubmitFunction).toHaveBeenCalledTimes(1);
    expect(mockSubmitFunction).toHaveBeenCalledWith(email, password);
  });
});


