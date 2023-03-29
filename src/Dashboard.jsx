import React from "react";
import Chat from "./Chat";
import Navbar from "./Navbar";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Profile from "./Profile";

function Dashboard() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/chat" component={Chat} />
          <Route path="/" component={Chat} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Dashboard;
