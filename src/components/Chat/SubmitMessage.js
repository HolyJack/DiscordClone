import EmojiIconSvg from "./static/EmojiIconSvg";
import GiftIconSvg from "./static/GiftIconSvg";
import PlusIconSvg from "./static/PlusIconSvg";
import FileIconSvg from "./static/FileIconSvg";
import { useState } from "react";

const SubmitMessage = (props) => {
  const [message, setMessage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (message.trim().length === 0) {
      return;
    }
    console.log(message);

    props.onMessageSubmit({
      id: Math.random(),
      user_name: "Submiter",
      message: message,
      img: "",
      date: new Date(),
    });
    setMessage("");
  };

  const textChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  return (
    <form onSubmit={submitHandler} className=" w-full h-fit px-4 pb-6">
      <div className="w-full h-8 rounded-lg bg-gray-600 flex relative">
        <div className=" mx-4 flex items-center justify-center">
          <PlusIconSvg />
        </div>
        <input
          type="text"
          className=" resize-none w-full bg-transparent outline-none text-white placeholder-gray-500 "
          placeholder="Message #general-1"
          value={message}
          onChange={textChangeHandler}
        ></input>
        <div className=" h-full mx-4 flex items-center justify-center">
          <GiftIconSvg />
          <EmojiIconSvg />
          <FileIconSvg />
        </div>
      </div>
    </form>
  );
};

export default SubmitMessage;
