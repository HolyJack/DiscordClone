import ServerMenu from "./components/ServerMenu";
import Sidebar from "./components/Sidebar";
import ServerBody from "./components/ServerBody";

function App() {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className=" flex flex-row justify-start h-full w-full">
        <ServerMenu />
        <ServerBody />
      </div>
    </div>
  );
}

export default App;
