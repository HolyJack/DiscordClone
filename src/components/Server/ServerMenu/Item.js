import textChannelSvg from "./static/text-channel.svg";
import categorySvg from "./static/text-channel.svg";

const Item = (props) => {
  return (
    <li
      key={props.id}
      className="w-full h-fit list-none"
    >
      <div className="m-1 px-2 py-1 flex items-center justify-center rounded-md hover:bg-gray-700">
        <div className="h-[20px] w-full ml-2 flex flex-row">
          <div className="mr-1.5 flex flex-row items-center justify-center ">
            <img src={textChannelSvg}></img>
          </div>
          <div className="h-full w-full flex items-center">
            <p
              className={
                "text-gray-500 text-base font-sans group-hover:text-gray-400 [&.active]:text-white " +
                props.active
              }
            >
              {props.name}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Item;
