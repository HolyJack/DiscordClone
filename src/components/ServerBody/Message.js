function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

const Message = (props) => {
    const messageTime = formatAMPM(props.user.date);

  return ( 
    <li key={props.id} className=" flex flex-row my-2">
      <div className="h-full w-fit">
        <div className=" overflow-hidden mx-2 w-8 h-8 rounded-[2rem] bg-white flex flex-col justify-center items-center">
          <img src={props.user.img} alt="wow"></img>
        </div>
      </div>
      <div className="px-1 flex flex-col">
        <div className="flex flex-row justify-start">
          <div className=" text-red-500  text-base flex flex-row items-center">
            {props.user.user_name}
          </div>
          <div className="px-2 text-gray-500 text-sm text-[12px] flex flex-row items-center">
      {messageTime}
          </div>
        </div>
        <div className=" text-gray-200 w-full h-fit text-sm">
          <p>{props.user.message}</p>
        </div>
      </div>
    </li>
  );
};

export default Message;
