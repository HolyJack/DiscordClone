import { useEffect } from "react";
import { useState } from "react";
import Message from "./ServerBody/Message";
import SubmitMessage from "./ServerBody/SubmitMessage";

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

const ServerBody = (props) => {
  const [messages, setMessages] = useState(DUMMY_MESSAGES);
  
  let messagesList = messages.map((message) => (<Message id={message.id} user={message} />));
    
const newMessageHandler = (message) => {
  setMessages(oldMessages => ([...oldMessages, message]))
}


  return (
    <div className="relative h-screen w-full bg-gray-700 flex flex-col">
      <section className=" shadow-lg z-10 px-2 h-12 w-full flex flex-row items-center justify-between bg-gray-700">
        <div className=" text-gray-200">#general-1</div>
        <div>icons</div>
      </section>
      <div className=" relative overflow-y-auto h-full max-h-full" >
          <ol className=" absolute bottom-0">{messagesList}</ol>
       </div>
      <SubmitMessage onMessageSubmit={newMessageHandler}/>
    </div>
  );
};

export default ServerBody;
