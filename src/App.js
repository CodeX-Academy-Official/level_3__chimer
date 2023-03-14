import React from "react";

import { AuthProvider } from "./context/auth.context";

import SignUpPage from "./pages/sign-up";
import "./App.scss";

const App = () => {
  return (
    <AuthProvider>
      <SignUpPage />
    </AuthProvider>
  );
};

export default App;
