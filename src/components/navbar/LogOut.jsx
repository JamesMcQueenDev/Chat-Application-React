import { Logout } from "@mui/icons-material";
import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../assets/Firebase";

function LogOut() {
  const SignOut = () => {
    signOut(auth);
  };
  return (
    <div className="LogOut">
      <Button type="submit" onClick={() => auth.signOut()}>
        <Logout />
      </Button>
    </div>
  );
}

export default LogOut;
