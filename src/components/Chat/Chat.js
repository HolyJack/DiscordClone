import { useState } from "react";
import TopBar from "../Server/ServerBody/TopBar";
import Message from "./Message";
import SubmitMessage from "./SubmitMessage";

const DUMMY_MESSAGES = [
  {
    id: "m1",
    user_name: "HolyJack",
    image: "",
    message: "Wow",
    date: new Date(),
  },
  {
    id: "m2",
    user_name: "HolyJack",
    image: "",
    message: "Wow",
    date: new Date(),
  },
  {
    id: "m3",
    user_name: "HolyJack",
    image: "",
    message: "Wow",
    date: new Date(),
  },
];

const Chat = () => {
  const [messages, setMessages] = useState(DUMMY_MESSAGES);

  let messagesList = messages.map((message) => (
    <Message key={message.id} id={message.id} user={message} />
  ));

  const newMessageHandler = (message) => {
    setMessages((oldMessages) => [...oldMessages, message]);
  };

  return (
    <div className="h-full w-full bg-gray-700 flex flex-col">
      <TopBar />
      <div className="flex overflow-y-auto flex-1">
        <ol className="w-full flex flex-col justify-end">{messagesList}</ol>
      </div>
      <SubmitMessage onMessageSubmit={newMessageHandler} />
    </div>
  );
};

export default Chat;
