import React from "react";
import { auth } from "./Firebase";
import "./Message.css";

const Message = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid ? `Sent` : `Received`;

  return (
    <div className={`Message ${messageClass}`}>
      <img src={message.photo} />
      <p>{message.text}</p>
    </div>
  );
};

export default Message;
