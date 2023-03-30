import React from "react";
import { auth } from "./Firebase";

import "./Profile.css";

function Profile() {
  const profilePicture = auth.currentUser.photoURL;
  const name = auth.currentUser.displayName;
  const email = auth.currentUser.email;

  return (
    <div className="Profile">
      <img src={profilePicture} />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
}

export default Profile;
