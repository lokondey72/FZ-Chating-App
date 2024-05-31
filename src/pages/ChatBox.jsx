import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoSendSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

const ChatBox = () => {
  const friend = useSelector((state) => state.chatIdSlice.friendInfo);
  console.log(friend);

  return (
    <>
      <div className="w-full h-screen flex flex-col bg-gray-200">
        <div className="w-full md:w-4/5 ml-auto bg-gray-200 flex-1 overflow-y-scroll">
          <div className="px-4 py-2">
            <div className="flex border-b border-gray-400 items-center pb-2 my-7">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-5">
                <img
                  className="w-full h-full"
                  src={friend?.friendImg}
                  alt="User Avatar"
                />
              </div>
              <p className="font-bold text-xl">{friend?.friendName}</p>
              <button className="text-3xl ml-auto">
                <IoMdInformationCircleOutline />
              </button>
            </div>
            {/* sender area */}
            <div className="flex">
              <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                <img
                  className="w-full h-full mr-2"
                  src={friend?.friendImg}
                  alt="User Avatar"
                />
              </div>
              <p className="bg-white rounded-lg p-2 shadow mb-2 max-w-sm">
                Hi, how can I help you?
              </p>
            </div>
            {/* reciver area */}
            <div className="flex items-center justify-end">
              <div className="bg-blue-500 text-white rounded-lg p-2 shadow mr-2 max-w-sm">
                Sure, I can help with that.
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 md:w-4/5 ml-auto px-4 py-2">
          <div className="flex items-center">
            <input
              className="w-full border rounded-full py-2 px-4 mr-2"
              type="text"
              placeholder="Type your message..."
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
              <IoSendSharp />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
