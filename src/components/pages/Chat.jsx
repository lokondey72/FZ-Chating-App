import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import ChatItems from "./ChatItems";

const chat = () => {
  return (
    <>
      <div className="bg-[#FCFCFC] ml-64 w-1/4 h-screen">
        <div>
          <div className="mb-8">
            <div className="flex justify-between items-center mx-7 mt-10 mb-6 text-lg font-semibold text-primary">
              <h2 className="title">
                <Link to="/chat">Friends Chat</Link>
              </h2>
              <button className="p-3 rounded-xl border-solid border-2 border-primary">
                <Link to="#">Create Group</Link>
              </button>
            </div>
            <div className="flex items-center border-black border rounded-lg justify-center mx-5">
              <div className="p-[14px] rounded-l-lg bg-slate-300">
                <FaSearch />
              </div>
              <input
                type="text"
                className="w-full py-2 rounded-r-lg bg-white pl-2 text-xl font-semibold outline-0"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="mx-7">
            <ChatItems
              imgUrl="/public/rikto-ltd-imgs.jpg"
              idName="Jenny Wilson"
              msg="Love You....."
            />
            <ChatItems
              imgUrl="/public/WhatsApp-img.jpg"
              idName="Rikto Dey"
              msg="hate You....."
            />
            <ChatItems
              imgUrl="/public/rikto-ltd-imgs.jpg"
              idName="Jenny Wilson"
              msg="go....."
            />
            <ChatItems
              imgUrl="/public/WhatsApp-img.jpg"
              idName="Lokon Dey Sarker"
              msg="Love You....."
            />
            <ChatItems
              imgUrl="/public/rikto-ltd-imgs.jpg"
              idName="Jenny Wilson"
              msg="Love You....."
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center m-auto">
        <div className="w-60 text-center text-xl font-semibold interFont">
          <h2>Select a chat or start a new conversation</h2>
        </div>
      </div>
    </>
  );
};

export default chat;
