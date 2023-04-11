import React from "react";
import { Link } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <Link to="sign-up">Sign up</Link>
      <Link to="sign-in">Sign in</Link>
    </div>
  );
}

