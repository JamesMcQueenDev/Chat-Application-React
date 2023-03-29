import { Facebook, GitHub, Google } from "@mui/icons-material";
import { Button } from "@mui/material";
import { signInWithRedirect } from "firebase/auth";
import React from "react";
import {
  auth,
  facebookProvider,
  githubProvider,
  googleProvider,
} from "./Firebase";
import "./Login.css";

function Login() {
  const GoogleSignIn = () => {
    signInWithRedirect(auth, googleProvider);
  };

  const GithubSignIn = () => {
    signInWithRedirect(auth, githubProvider);
  };

  const FacebookSignIn = () => {
    signInWithRedirect(auth, facebookProvider);
  };

  return (
    <div className="Login">
      <h1>Sign in to Messenger</h1>
      <Button
        className="Button"
        variant="contained"
        type="submit"
        onClick={GoogleSignIn}
      >
        <Google />
      </Button>
      <Button
        className="Button"
        variant="contained"
        type="submit"
        onClick={GithubSignIn}
      >
        <GitHub />
      </Button>
      <Button
        className="Button"
        variant="contained"
        type="submit"
        onClick={FacebookSignIn}
      >
        <Facebook />
      </Button>
    </div>
  );
}

export default Login;
