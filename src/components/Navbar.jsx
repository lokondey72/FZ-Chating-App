import { Link } from "react-router-dom";
import { FaHome, FaUser, FaRegAddressCard } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { IoChatboxEllipses, IoPeople } from "react-icons/io5";
import { RiGroup2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { GoBlocked } from "react-icons/go";
import { useState } from "react";

const Navbar = () => {
  const user = useSelector((state) => state.userSlice.user);
  let [show, setShow] = useState(false);
  const [logOut, setLogOut] = useState(false);

  const handelShow = () => {
    setShow(!show);
  };
  const hendelLogout = () => {
    setLogOut(localStorage.setItem("user", JSON.stringify("")));
  };

  return (
    <div>
      <div className="fixed z-30 sm:hidden ml-2">
        <button onClick={handelShow} className="text-4xl text-whit">
          <CgDetailsMore />
        </button>
      </div>

      {show && (
        <div className="w-60 fixed z-20 overflow-y-scroll overflow-x-hidden pt-5 bg-slate-400">
          {/* <div className="ml-2">
            <button
              onClick={() => setShow(true)}
              className="text-4xl text-whit"
            >
              <CgDetailsMore />
            </button>
          </div> */}
          <div className="mt-6 inline-block">
            <Link to="/">
              <div className="flex w-36 mb-5 text-center">
                <img
                  className="w-full"
                  src="/FZ-app-login-logo.png"
                  alt="FZ-app-login-logo"
                />
                <h3 className="xl:text-xl font-bold uppercase">Friends Zone</h3>
              </div>
            </Link>
          </div>
          <button>
            <Link to="/profile">
              <button className="flex items-center gap-2 p-2 xl:mx-4 mb-5">
                <div className="w-14  xl:w-14 xl:h-14 sm:w-10 sm:h-9 rounded-full overflow-hidden">
                  <img src={user?.photoURL} alt="NavProfile" />
                </div>
                <div className="mr-2">
                  <h2 className="xl:text-xl sm:text-sm font-semibold">
                    {user?.displayName}
                  </h2>
                  <p className="sm:text-xs sm:w-16">Edit Profile</p>
                </div>
                {/* <div className="text-xl text-slate-50 font-semibold">
          <IoSettings />
        </div> */}
              </button>
            </Link>
          </button>
          <ul className="flex flex-col gap-5 items-center">
            <li className="bg-brand text-slate-50 rounded-xl">
              <Link to="/">
                <button className="text-lg flex items-center gap-3 py-5 px-10">
                  <FaHome />
                  <span>Home</span>
                </button>
              </Link>
            </li>
            <li className="text-slate-50 rounded-xl">
              <Link to="/chat">
                <button className="text-lg flex items-center gap-3 py-5 px-10">
                  <IoChatboxEllipses />
                  <span>Chat</span>
                </button>
              </Link>
            </li>
            <li className="text-slate-50 rounded-xl">
              <Link to="/group">
                <button className="text-lg flex items-center gap-3 py-5 px-10">
                  <RiGroup2Fill className="flex gap-5 text-4xl" />
                  <span>Group</span>
                </button>
              </Link>
            </li>

            <li className="text-slate-50 rounded-xl">
              <Link to="/friends">
                <button className="text-lg flex items-center gap-3 py-5 px-10">
                  <FaUser />
                  Friends
                </button>
              </Link>
            </li>
            <li className="text-slate-50 rounded-xl">
              <Link to="/people">
                <button className="text-lg flex items-center gap-3 py-5 px-10">
                  <IoPeople />
                  People
                </button>
              </Link>
            </li>
            <li className="text-slate-50 rounded-xl">
              <Link to="/friendrequest">
                <button className="text-lg flex items-center gap-3 py-5 px-10">
                  <FaRegAddressCard />
                  Friend Requests
                </button>
              </Link>
            </li>
            <li className="text-slate-50 rounded-xl">
              <Link to="/blocklist">
                <button className="text-lg flex items-center gap-3 py-5 px-10">
                  <GoBlocked />
                  Block
                </button>
              </Link>
            </li>
          </ul>
          <div className="flex justify-center pb-10">
            <button className="bg-primary px-6 py-2 rounded-lg">
              <Link
                to="#"
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

      <div className="w-0 sm:w-36 xl:w-64 h-full fixed z-20 overflow-y-scroll overflow-x-hidden sm:overflow-y-scroll sm:overflow-x-hidden xl:overflow-y-scroll xl:overflow-x-hidden pt-5 bg-slate-400">
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
        <button>
          <Link to="/profile">
            <button className="flex items-center gap-2 p-2 xl:mx-4 sm:mx-0 mb-10">
              <div className="xl:w-14 xl:h-14 sm:w-10 sm:h-9 rounded-full overflow-hidden">
                <img src={user?.photoURL} alt="NavProfile" />
              </div>
              <div className="mr-2">
                <h2 className="xl:text-xl sm:text-sm font-semibold">
                  {user?.displayName}
                </h2>
                <p className="sm:text-xs sm:w-16">Edit Profile</p>
              </div>
              {/* <div className="text-xl text-slate-50 font-semibold">
                <IoSettings />
              </div> */}
            </button>
          </Link>
        </button>
        <ul className="flex flex-col gap-5 items-center">
          <li className="bg-brand text-slate-50 rounded-xl">
            <Link to="/">
              <button className="text-lg flex items-center gap-3 py-5 px-10">
                <FaHome />
                <span>Home</span>
              </button>
            </Link>
          </li>
          <li className="text-slate-50 rounded-xl">
            <Link to="/chat">
              <button className="text-lg flex items-center gap-3 py-5 px-10">
                <IoChatboxEllipses />
                <span>Chat</span>
              </button>
            </Link>
          </li>
          <li className="text-slate-50 rounded-xl">
            <Link to="/group">
              <button className="text-lg flex items-center gap-3 py-5 px-10">
                <RiGroup2Fill className="flex gap-5 text-4xl" />
                <span>Group</span>
              </button>
            </Link>
          </li>

          <li className="text-slate-50 rounded-xl">
            <Link to="/friends">
              <button className="text-lg flex items-center gap-3 py-5 px-10">
                <FaUser />
                Friends
              </button>
            </Link>
          </li>
          <li className="text-slate-50 rounded-xl">
            <Link to="/people">
              <button className="text-lg flex items-center gap-3 py-5 px-10">
                <IoPeople />
                People
              </button>
            </Link>
          </li>
          <li className="text-slate-50 rounded-xl">
            <Link to="/friendrequest">
              <button className="text-lg flex items-center gap-3 py-5 px-10">
                <FaRegAddressCard />
                Friend Requests
              </button>
            </Link>
          </li>
          <li className="text-slate-50 rounded-xl">
            <Link to="/blocklist">
              <button className="text-lg flex items-center gap-3 py-5 px-10">
                <GoBlocked />
                Block
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
    </div>
  );
};

export default Navbar;
