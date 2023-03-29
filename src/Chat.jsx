import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import firestore from "./Firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";
import "./Chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(firestore, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
      scroll.current.scrollIntoView({ behavior: "smooth" });
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <main className="Chat">
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
      <div className="ChatFooter">
        <SendMessage scroll={scroll} />
      </div>
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
