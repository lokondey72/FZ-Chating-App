import { SiHomebridge } from "react-icons/si";
import { RiGroup2Fill } from "react-icons/ri";
import {
  IoPeople,
  IoSearchCircleSharp,
  IoGameController,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import HomeDropdone from "./HomeDropdone";

const HomeHeader = () => {
  return (
    <>
      <div className="w-full bg-slate-400 fixed top-0 z-10 shadow-Uxl">
        <div className="flex ml-60 justify-between items-center py-3">
          <div className="flex ml-14 items-center ">
            <input
              type="text"
              className="bg-white text-[#646464] outline-none w-60 transition-all px-4 py-3 rounded-s-3xl"
              placeholder="Search"
            />
            <button>
              <IoSearchCircleSharp className="text-5xl bg-white rounded-e-3xl" />
            </button>
          </div>
          <div className="flex gap-10 mr-28">
            <div className="flex w-full justify-center gap-x-1.5 rounded-xl px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:text-white hover:bg-gray-800">
              <Link to="/">
                <SiHomebridge className="flex gap-5 text-4xl" />
              </Link>
            </div>
            <div className="flex w-full justify-center gap-x-1.5 rounded-xl px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:text-white hover:bg-gray-800">
              <Link>
                <RiGroup2Fill className="flex gap-5 text-4xl" />
              </Link>
            </div>
            <div className="flex w-full justify-center gap-x-1.5 rounded-xl px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:text-white hover:bg-gray-800">
              <Link>
                <IoPeople className="flex gap-5 text-4xl" />
              </Link>
            </div>
            <div className="flex w-full justify-center gap-x-1.5 rounded-xl px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:text-white hover:bg-gray-800">
              <Link to="/game">
                <IoGameController className="flex gap-5 text-4xl" />
              </Link>
            </div>
          </div>
          <div className="mr-14">
            <div className="flex gap-5 text-5xl">
              <HomeDropdone />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
