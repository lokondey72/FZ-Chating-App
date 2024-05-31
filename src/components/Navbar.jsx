import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaRegAddressCard } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import {
  IoChatboxEllipses,
  IoPeople,
  IoSearchCircleSharp,
} from "react-icons/io5";
import { RiGroup2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { GoBlocked } from "react-icons/go";
import { CgMenuRound } from "react-icons/cg";
import { useState } from "react";

const Navbar = () => {
  const user = useSelector((state) => state.userSlice.user);
  let [show, setShow] = useState(false);
  let [showDrop, setShowDrop] = useState(false);
  const [logOut, setLogOut] = useState(false);
  const location = useLocation().pathname;

  // console.log(location);

  const handelShow = () => {
    setShow(!show);
  };
  const handeldrop = () => {
    setShowDrop(!showDrop);
  };
  const hendelLogout = () => {
    setLogOut(localStorage.setItem("user", JSON.stringify("")));
  };

  return (
    <div>
      <div className="fixed z-30 sm:hidden ml-2">
        <button
          onClick={() => handelShow(setShowDrop(false))}
          className="text-4xl text-whit"
        >
          <CgDetailsMore />
        </button>
      </div>

      {show && (
        <div className="w-56 h-screen fixed z-20 pt-5 bg-slate-400">
          <div className="xl:ml-6 sm:ml-0 inline-block">
            <Link to="/">
              <div className="flex w-32 h-14 my-10 text-center">
                <img
                  className="w-full"
                  src="/FZ-app-login-logo.png"
                  alt="FZ-app-login-logo"
                />
                <h3 className="xl:text-xl font-bold uppercase">Friends Zone</h3>
              </div>
            </Link>
          </div>
          <div className="mx-2 mb-5">
            <button
              onClick={() => handeldrop(setShow(false))}
              className="w-full inline-flex justify-center text-4xl rounded-xl px-3 py-2 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-800 hover:text-white hover:bg-gray-800"
              type="button"
              id="menu-button"
            >
              <CgMenuRound />
            </button>
          </div>
          <ul className="flex flex-col gap-5 items-center">
            <li className="text-slate-50 rounded-xl">
              <Link to="/">
                <button
                  onClick={() => setShow(false)}
                  className="text-lg flex items-center gap-3 py-5 px-10"
                >
                  <FaHome />
                  <p>Home</p>
                </button>
              </Link>
            </li>
            <li className="text-slate-50 rounded-xl">
              <Link to="/chat">
                <button
                  onClick={() => setShow(false)}
                  className="text-lg flex items-center gap-3 py-5 px-10"
                >
                  <IoChatboxEllipses />
                  <p>Chat</p>
                </button>
              </Link>
            </li>
            <li className="text-slate-50 rounded-xl">
              <Link to="/group">
                <button
                  onClick={() => setShow(false)}
                  className="text-lg flex items-center gap-3 py-5 px-10"
                >
                  <RiGroup2Fill className="flex gap-5 text-4xl" />
                  <p>Group</p>
                </button>
              </Link>
            </li>

            <li className="text-slate-50 rounded-xl">
              <Link to="/friends">
                <button
                  onClick={() => setShow(false)}
                  className="text-lg flex items-center gap-3 py-5 px-10"
                >
                  <FaUser />
                  Friends
                </button>
              </Link>
            </li>
            <li className="text-slate-50 rounded-xl">
              <Link to="/people">
                <button
                  onClick={() => setShow(false)}
                  className="text-lg flex items-center gap-3 py-5 px-10"
                >
                  <IoPeople />
                  People
                </button>
              </Link>
            </li>
          </ul>
          <div className="flex justify-center pb-10">
            <button className="bg-primary px-6 py-2 rounded-lg">
              <Link
                onClick={() => hendelLogout(logOut)}
                to="/login"
                className="text-slate-50 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                Log Out
              </Link>
            </button>
          </div>
        </div>
      )}

      {showDrop && (
        <div>
          <div className="w-full sm:w-3/5 md:w-1/3 absolute sm:left-40 lg:left-60 bg-slate-400 top-0 z-10">
            <div className="px-10 py-3">
              <div className="flex w-full items-center ">
                <input
                  type="text"
                  className="w-full bg-white text-[#646464] outline-none transition-all px-4 py-3 rounded-s-3xl"
                  placeholder="Search"
                />
                <button>
                  <IoSearchCircleSharp className="text-5xl bg-white rounded-e-3xl" />
                </button>
              </div>
              <Link to="/profile">
                <button
                  onClick={() => setShowDrop(!showDrop)}
                  className="w-full p-2 mb-10"
                >
                  <div className="w-24 h-24 xl:w-14 xl:h-14 sm:w-10 sm:h-9 mx-auto rounded-full overflow-hidden">
                    <img src={user?.photoURL} alt="NavProfile" />
                  </div>
                  <div className="mr-2">
                    <h2 className="xl:text-xl sm:text-sm font-semibold">
                      {user?.displayName}
                    </h2>
                    <p className="sm:text-xs sm:w-16 mx-auto">Edit Profile</p>
                  </div>
                </button>
              </Link>
              <div className="flex flex-col lg:flex-row sm:gap-2 xl:gap-10">
                <div className="flex w-full justify-center rounded-xl font-semibold text-gray-900 shadow-sm hover:text-white hover:bg-gray-800">
                  <Link to="/friendrequest">
                    <button
                      onClick={() => setShowDrop(!showDrop)}
                      className="text-lg text-white flex items-center gap-3 py-2 px-5"
                    >
                      <FaRegAddressCard className="text-5xl" />
                      <p>Friend Requests</p>
                    </button>
                  </Link>
                </div>
                <div className="flex w-full justify-center rounded-xl font-semibold text-gray-900 shadow-sm hover:text-white hover:bg-gray-800">
                  <Link to="/blocklist">
                    <button
                      onClick={() => setShowDrop(!showDrop)}
                      className="text-lg text-white flex items-center gap-3 py-2 px-5"
                    >
                      <GoBlocked className="text-5xl" />
                      Block
                    </button>
                  </Link>
                </div>
                <div className="flex w-full justify-center rounded-xl font-semibold text-gray-900 shadow-sm hover:text-white hover:bg-gray-800">
                  <button className="px-6 py-2 rounded-lg">
                    <Link
                      onClick={() => hendelLogout(logOut)}
                      to="/login"
                      className="text-white block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                    >
                      Log Out
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-0 sm:w-40 xl:w-64 h-full fixed z-20 overflow-y-scroll  pt-5 bg-slate-400">
        <div className="xl:ml-6 sm:ml-0 inline-block">
          <Link to="/">
            <div className="flex sm:w-32 sm:h-10 xl:w-20 mb-10 text-center">
              <img
                className="w-full"
                src="/FZ-app-login-logo.png"
                alt="FZ-app-login-logo"
              />
              <h3 className="xl:text-xl font-bold uppercase">Friends Zone</h3>
            </div>
          </Link>
        </div>
        <div className="mx-2 mb-5">
          <button
            onClick={handeldrop}
            className="w-full inline-flex justify-center text-4xl rounded-xl px-3 py-2 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-800 hover:text-white hover:bg-gray-800"
            type="button"
            id="menu-button"
          >
            <CgMenuRound />
          </button>
        </div>
        <ul className="flex flex-col gap-5 items-center">
          <li className="text-white">
            <Link to="/">
              <button
                className={`${
                  location == "/" && "bg-brand text-white"
                }text-lg rounded-xl flex items-center gap-3 py-5 px-10`}
              >
                <FaHome />
                <p>Home</p>
              </button>
            </Link>
          </li>
          <li className="text-slate-50 rounded-xl">
            <Link to="/chat">
              <button
                className={`${
                  location == "/chat" && "bg-brand text-white"
                }text-lg rounded-xl flex items-center gap-3 py-5 px-10`}
              >
                <IoChatboxEllipses />
                <p>Chat</p>
              </button>
            </Link>
          </li>
          <li className="text-slate-50 rounded-xl">
            <Link to="/group">
              <button
                className={`${
                  location == "/group" && "bg-brand text-white"
                }text-lg rounded-xl flex items-center gap-3 py-5 px-10`}
              >
                <RiGroup2Fill className="flex gap-5 text-4xl" />
                <p>Group</p>
              </button>
            </Link>
          </li>

          <li className="text-slate-50 rounded-xl">
            <Link to="/friends">
              <button
                className={`${
                  location == "/friends" && "bg-brand text-white"
                }text-lg rounded-xl flex items-center gap-3 py-5 px-10`}
              >
                <FaUser />
                Friends
              </button>
            </Link>
          </li>
          <li className="text-slate-50 rounded-xl">
            <Link to="/people">
              <button
                className={`${
                  location == "/people" && "bg-brand text-white"
                }text-lg rounded-xl flex items-center gap-3 py-5 px-10`}
              >
                <IoPeople />
                People
              </button>
            </Link>
          </li>
          <li className="flex justify-center pb-10">
            <button className="bg-primary px-6 py-2 rounded-lg">
              <Link
                onClick={() => hendelLogout(logOut)}
                to="/login"
                className="text-slate-50 block px-4 py-2 text-sm"
              >
                Log Out
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
