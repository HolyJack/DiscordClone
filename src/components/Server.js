import Chat from "./Chat/Chat";
import ServerBody from "./Server/ServerBody";
import ServerMenu from "./Server/ServerMenu";

const Server = () => {
  return (
    <div className="fixed top-0 left-14 w-[calc(100%-3.5rem)] h-full flex flex-row">
      <ServerMenu />
      <ServerBody>
        <Chat />
      </ServerBody>
    </div>
  );
};

export default Server;
