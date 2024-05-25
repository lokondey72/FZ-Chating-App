import { SiHomebridge } from "react-icons/si";
import { RiGroup2Fill } from "react-icons/ri";
import {
  IoPeople,
  IoSearchCircleSharp,
  IoGameController,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import HomeDropdone from "./HomeDropdone";
import { GoBlocked } from "react-icons/go";

const HomeHeader = () => {
  return (
    <>
      <div className="sm:w-[640px] xl:w-[1680px] ml-60 bg-slate-400 fixed top-0 z-10 shadow-Uxl">
        <div className="flex justify-between items-center px-10 py-3">
          <div className="flex sm:w-40 items-center ">
            <input
              type="text"
              className="w-full bg-white text-[#646464] outline-none transition-all px-4 py-3 rounded-s-3xl"
              placeholder="Search"
            />
            <button>
              <IoSearchCircleSharp className="text-5xl bg-white rounded-e-3xl" />
            </button>
          </div>
          <div className="flex sm:gap-2 xl:gap-10">
            <div className="flex w-full justify-center gap-x-1.5 rounded-xl px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:text-white hover:bg-gray-800">
              <Link to="/">
                <SiHomebridge className="flex gap-5 text-4xl" />
              </Link>
            </div>
            <div className="flex w-full justify-center gap-x-1.5 rounded-xl px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:text-white hover:bg-gray-800">
              <Link to="/people">
                <IoPeople className="flex gap-5 text-4xl" />
              </Link>
            </div>
            <div className="flex w-full justify-center gap-x-1.5 rounded-xl px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:text-white hover:bg-gray-800">
              <Link to="/group">
                <RiGroup2Fill className="flex gap-5 text-4xl" />
              </Link>
            </div>
            <div className="flex w-full justify-center gap-x-1.5 rounded-xl px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:text-white hover:bg-gray-800">
              <Link to="/blocklist">
                <GoBlocked className="flex gap-5 text-4xl" />
              </Link>
            </div>
            <div className="flex w-full justify-center gap-x-1.5 rounded-xl px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:text-white hover:bg-gray-800">
              <Link to="/game">
                <IoGameController className="flex gap-5 text-4xl" />
              </Link>
            </div>
          </div>
          <div>
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
