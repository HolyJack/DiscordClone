import SidebarIcon from "./Sidebar/SidebarIcon";
import logo from "../logo.svg";

const DUMMY_SERVERS = [
  {
    id: "s1",
    name: "A",
    image:
      "https://cdn.discordapp.com/icons/1118135812031270922/2828413ea5fc041bf56c29dad8420a66.webp?size=240",
  },
  {
    id: "s2",
    name: "B",
    image:
      "https://cdn.discordapp.com/icons/1118135812031270922/2828413ea5fc041bf56c29dad8420a66.webp?size=240",
  },
  {
    id: "s3",
    name: "C",
    image:
      "https://cdn.discordapp.com/icons/1118135812031270922/2828413ea5fc041bf56c29dad8420a66.webp?size=240",
  },
  {
    id: "s4",
    name: "D",
    image:
      "https://cdn.discordapp.com/icons/1118135812031270922/2828413ea5fc041bf56c29dad8420a66.webp?size=240",
  },
];

const Sidebar = () => {
  const serverList = DUMMY_SERVERS.map((server) => {
    return (
      <SidebarIcon
        key={server.id}
        id={server.id}
        name={server.name}
        image={server.image}
      />
    );
  });

  return (
    <div className="fixed top-0 left-0 h-full w-14 m-0 flex flex-col bg-gray-900 text-white shadow">
      <SidebarIcon id="discord" name="discord" image={logo} />
      {serverList}
    </div>
  );
};

export default Sidebar;
