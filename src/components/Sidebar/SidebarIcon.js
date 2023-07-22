const SidebarIcon = (props) => {
  return (
    <div
      key={props.id}
      className="overflow-hidden w-10 h-10 mx-2 my-2 rounded-[44px] flex items-center justify-center bg-gray-800 hover:rounded-[14px] hover:bg-blurple transition-all duration-300 "
    >
      <img
        className="min-h-[50%] min-w-[50%]"
        src={props.image}
        alt={props.name}
      />
    </div>
  );
};

export default SidebarIcon;
