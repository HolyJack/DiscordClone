import Item from "./ServerMenu/Item";
import UserCard from "./ServerMenu/UserCard";

const DUMMY_CONTENT = [
  {
    id: "c1",
    type: "category",
    name: "main",
    active: "",
    children: [
      {
        id: "c1t1",
        type: "text-channel",
        name: "general-chat",
        active: "",
      },
      {
        id: "c1t2",
        type: "text-channel",
        name: "general-chat-2",
        active: "active",
      },
      {
        id: "c1t3",
        type: "text-channel",
        name: "general-chat-3",
        active: "",
      },
    ],
  },
];

const ServerMenu = () => {
  const itemsList = DUMMY_CONTENT[0].children.map((item) => {
    return (
      <Item
        key={item.id}
        type={item.type}
        name={item.name}
        active={item.active}
      ></Item>
    );
  });

  return (
    <div className="relative h-screen w-56 flex flex-col bg-gray-800 ">
      <section className=" shadow-lg z-10 px-2 h-12 w-full flex flex-row items-center justify-between bg-gray-800">
        <div className="ml-2 text-gray-100 ">Server name</div>
        <div className="mr-1">PH</div>
      </section>
      <div className=" relative h-full overflow-y-auto">
        <ul>{itemsList}</ul>
      </div>
      <UserCard />
    </div>
  );
};

export default ServerMenu;
