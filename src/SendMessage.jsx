import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import firestore, { auth } from "./Firebase";
import "./SendMessage.css";

const SendMessage = (scroll) => {
  const [input, setInput] = useState("");

  const photo = auth.currentUser.photoURL;

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(firestore, "messages"), {
      text: input,
      name: displayName,
      uid,
      photo,
      timestamp: serverTimestamp(),
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="ChatBox">
      <form onSubmit={sendMessage}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter Message"
        />
      </form>
    </div>
  );
};

export default SendMessage;
