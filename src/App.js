import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { AuthProvider } from "./context/auth.context";

import Root from "./routes/root";
import SignUpPage from "./routes/sign-up";
import SignInPage from "./routes/sign-in";
import ErrorPage from "./error-page";

import "./App.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "sign-up",
    element: <SignUpPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "sign-in",
    element: <SignInPage />,
    errorElement: <ErrorPage />
  },
]);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
