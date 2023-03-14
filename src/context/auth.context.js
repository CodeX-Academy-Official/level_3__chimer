import React, { useState, createContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const initialState = {
  isLoggedIn: false,
};

const authContext = createContext(initialState);
const authActionsContext = createContext();

const { Provider } = authContext;
const { Provider: AuthActionsProvider } = authActionsContext;

const AuthProvider = ({ children }) => {

  const [state, setState] = useState(initialState);
  async function signUp(email, password) {
    try {
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      setState((prevState) => ({
        ...prevState,
        isLoggedIn: true,
      }))
      console.log("user signed up ===========>", user);
    } catch (error) {

      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error ===>", {
        errorCode,
        errorMessage,
      });
    }
  }

  async function login(_email, _password) {
    throw new Error("Method not implemented!");
  }

  return (
    <Provider value={state}>
      <AuthActionsProvider
        value={{
          signUp,
          login,
        }}
      >
        {children}
      </AuthActionsProvider>
    </Provider>
  );
}

export { AuthProvider, authContext, authActionsContext };

