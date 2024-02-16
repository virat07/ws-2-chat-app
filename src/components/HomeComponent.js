import React, { useEffect, useState } from "react";
import ChatArea from "./ChatArea";
import ChatFooter from "./ChatFooter";
import ChatBar from "./ChatBar";

const HomeComponent = ({ socket }) => {
 
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState("");
  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  useEffect(() => {
    socket.on("typingResponse", (data) => setTypingStatus(data));
  }, [socket]);
  return (
    <div>
      <ChatBar socket={socket} />
      <ChatArea messages={messages} typingStatus={typingStatus} />
      <ChatFooter socket={socket} />
    </div>
  );
};

export default HomeComponent;
