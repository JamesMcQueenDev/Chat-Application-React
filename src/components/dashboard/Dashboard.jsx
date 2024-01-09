import { Card } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Chat from "../chat/Chat";
import Navbar from "../navbar/Navbar";
import Profile from "../profile/Profile";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="Dashboard">
      <Card sx={{ width: 750, height: 1200 }}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/chat" component={Chat} />
            <Route path="/" component={Chat} />
          </Switch>
        </BrowserRouter>
      </Card>
    </div>
  );
}

export default Dashboard;
