import { ChatBubble } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import { auth } from "./Firebase";
import LogOut from "./LogOut";
import "./Navbar.css";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const image = auth.currentUser ? auth.currentUser.photoURL : null;

  return (
    <div className="Navbar">
      <LogOut />
      <Link>
        <NavLink exact to="/chat" activeClassName="active">
          <Button>
            <ChatBubble />
          </Button>
        </NavLink>
        <NavLink to="/profile" activeClassName="active">
          <Button>{image ? <Avatar src={image} /> : <Avatar />}</Button>
        </NavLink>
      </Link>
    </div>
  );
};

export default Navbar;
