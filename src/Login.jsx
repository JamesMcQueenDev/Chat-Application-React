import { Facebook, GitHub, Google } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
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
      <Card id="LoginCard" sx={{ width: 700, height: 1000 }}>
        <div className="LoginContent">
          <CardContent>
            <Typography sx={{ fontSize: 15 }}>
              <h1>Sign In to Messenger</h1>
            </Typography>
            <ButtonGroup variant="contained" orientation="vertical" size="">
              <Button
                id="GoogleButton"
                className="LogButton"
                variant="contained"
                type="submit"
                onClick={GoogleSignIn}
              >
                <Google />
              </Button>
              <Button
                id="GithubButton"
                className="LogButton"
                variant="contained"
                type="submit"
                onClick={GithubSignIn}
              >
                <GitHub />
              </Button>
              <Button
                id="FacebookButton"
                className="LogButton"
                variant="contained"
                type="submit"
                onClick={FacebookSignIn}
              >
                <Facebook />
              </Button>
            </ButtonGroup>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

export default Login;
