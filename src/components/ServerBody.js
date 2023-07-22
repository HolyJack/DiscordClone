import Message from "./ServerBody/Message";
import SubmitMessage from "./ServerBody/SubmitMessage";

const DUMMY_MESSAGES = [
  {
    id: "m1",
    user_name: "HolyJack",
    image: "",
    message: "Wow",
    date: "",
  },
  {
    id: "m2",
    user_name: "HolyJack",
    image: "",
    message: "Wow",
    date: "wooooooow",
  },
  {
    id: "m3",
    user_name: "HolyJack",
    image: "",
    message: "Wow",
    date: "wooooooow",
  },
  {
    id: "m4",
    user_name: "HolyJack",
    image: "",
    message: "Wow",
    date: "wooooooow",
  },
  {
    id: "m5",
    user_name: "HolyJack",
    image: "",
    message: "Wow",
    date: "wooooooow",
  },
  {
    id: "m6",
    user_name: "HolyJack",
    image: "",
    message: "Wow",
    date: "wooooooow",
  },
  {
    id: "m7",
    user_name: "HolyJack",
    image: "",
    message: "Wow",
    date: "wooooooow",
  },
];

const ServerBody = (props) => {
  const messagesList = DUMMY_MESSAGES.map((message) => (
    <Message id={message.id} />
  ));

  return (
    <div className="relative h-screen w-full bg-gray-700 flex flex-col">
      <section className=" shadow-lg z-10 px-2 h-12 w-full flex flex-row items-center justify-between bg-gray-700">
        <div className=" text-gray-200">#general-1</div>
        <div>icons</div>
      </section>
      <div className=" relative overflow-y-auto h-full max-h-full">
        <ol >{messagesList}</ol>
      </div>
      <SubmitMessage />
    </div>
  );
};

export default ServerBody;
