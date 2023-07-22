const Message = (props) => {
  return (
    <li key={props.id} className=" flex flex-row my-2">
      <div className="h-full w-fit">
        <div className="mx-2 w-8 h-8 rounded-[2rem] bg-white">
          <img></img>
        </div>
      </div>
      <div className="px-1 flex flex-col">
        <div className="flex flex-row justify-start">
          <div className=" text-red-500  text-base flex flex-row items-center">
            HolyJack
          </div>
          <div className="px-2 text-gray-500 text-sm text-[12px] flex flex-row items-center">
            Today at 12:35 AM
          </div>
        </div>
        <div className=" text-gray-200 w-full h-fit text-sm">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </li>
  );
};

export default Message;
