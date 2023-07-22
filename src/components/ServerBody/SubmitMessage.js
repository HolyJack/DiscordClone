// import plusSvg from "./static/plus.js";
// import giftSvg from "./static/gift.js";
// import emojiSvg from "./static/emoji.js";
// import fileSvg from "./static/file.js";

const SubmitMessage = (props) => {
  return (
    <form className="w-full h-fit px-4 pb-6 grow">
      <div className="w-full h-8 rounded-lg bg-gray-600 flex relative">
        <div className=" mx-4 flex items-center justify-center">
          <svg
            className=" fill-gray-500 hover:fill-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
          </svg>
        </div>
        <input
          type="text"
          className=" resize-none w-full bg-transparent outline-none text-white placeholder-gray-500 "
          placeholder="Message #general-1"
        ></input>
        <div className="h-full mx-4 flex items-center justify-center">
          <svg
            className="mx-1 fill-gray-500 hover:fill-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 512 512"
          >
            <path d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z" />
          </svg>
          <svg
            className="mx-1 fill-gray-500 hover:fill-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 512 512"
          >
            <path d="M426.8 14.2C446-5 477.5-4.6 497.1 14.9s20 51 .7 70.3c-6.8 6.8-21.4 12.4-37.4 16.7c-16.3 4.4-34.1 7.5-46.3 9.3c-1.6 .2-3.1 .5-4.6 .6c-4.9 .8-9.1-2.8-9.5-7.4c-.1-.7 0-1.4 .1-2.1c1.6-11.2 4.6-29.6 9-47c.3-1.3 .7-2.6 1-3.9c4.3-15.9 9.8-30.5 16.7-37.4zm-44.7 19c-1.5 4.8-2.9 9.6-4.1 14.3c-4.8 18.9-8 38.5-9.7 50.3c-4 26.8 18.9 49.7 45.7 45.8c11.9-1.6 31.5-4.8 50.4-9.7c4.7-1.2 9.5-2.5 14.3-4.1C534.2 227.5 520.2 353.8 437 437c-83.2 83.2-209.5 97.2-307.2 41.8c1.5-4.8 2.8-9.6 4-14.3c4.8-18.9 8-38.5 9.7-50.3c4-26.8-18.9-49.7-45.7-45.8c-11.9 1.6-31.5 4.8-50.4 9.7c-4.7 1.2-9.5 2.5-14.3 4.1C-22.2 284.5-8.2 158.2 75 75C158.2-8.3 284.5-22.2 382.2 33.2zM51.5 410.1c18.5-5 38.8-8.3 50.9-10c.4-.1 .7-.1 1-.1c5.1-.2 9.2 4.3 8.4 9.6c-1.7 12.1-5 32.4-10 50.9C97.6 476.4 92 491 85.2 497.8C66 517 34.5 516.6 14.9 497.1s-20-51-.7-70.3c6.8-6.8 21.4-12.4 37.4-16.7zM416.9 209c-4.7-11.9-20.8-11-26.8 .3c-19 35.5-45 70.8-77.5 103.3S244.8 371.1 209.3 390c-11.3 6-12.2 22.1-.3 26.8c57.6 22.9 125.8 11 172.3-35.5s58.4-114.8 35.5-172.3zM87.1 285.1c2 2 4.6 3.2 7.3 3.4l56.1 5.1 5.1 56.1c.3 2.8 1.5 5.4 3.4 7.3c6.3 6.3 17.2 3.6 19.8-4.9l29.7-97.4c3.5-11.6-7.3-22.5-19-19L92 265.3c-8.6 2.6-11.3 13.4-4.9 19.8zM265.3 92l-29.7 97.4c-3.5 11.6 7.3 22.5 19 19l97.4-29.7c8.6-2.6 11.3-13.4 4.9-19.8c-2-2-4.6-3.2-7.3-3.4l-56.1-5.1-5.1-56.1c-.3-2.8-1.5-5.4-3.4-7.3c-6.3-6.3-17.2-3.6-19.8 4.9z" />
          </svg>

          <svg
            className="mx-1 fill-gray-500 hover:fill-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 384 512"
          >
            <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
          </svg>
        </div>
      </div>
    </form>
  );
};

export default SubmitMessage;
