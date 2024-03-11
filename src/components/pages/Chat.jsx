import { Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";

const chat = () => {
  return (
    <>
      <div className=" bg-slate-600 w-1/4">
        <div>
          <div>
            <div className="flex justify-between items-center mx-6 mt-10 mb-6 text-xl font-semibold text-primary">
              <h2 className="text-4xl font-bold">
                <Link to="/chat">Chat</Link>
              </h2>
              <button className="p-5 rounded-xl border-solid border-2 border-primary">
                <Link to="#">Create Group</Link>
              </button>
            </div>
            <div className="flex items-center justify-center p-5">
              <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-400 bg-white p-5">
                <FcSearch />
              </div>
              <input
                type="text"
                className="w-full py-4 rounded-r-lg bg-white pl-2 text-xl font-semibold outline-0"
                placeholder="inpot name"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default chat;
