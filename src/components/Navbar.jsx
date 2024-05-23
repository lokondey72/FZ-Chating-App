import { Link } from "react-router-dom";
import { FaHome, FaUser, FaRegAddressCard } from "react-icons/fa";
import { IoChatboxEllipses, IoPeople, IoSettings } from "react-icons/io5";
import { RiGroup2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { GoBlocked } from "react-icons/go";

const Navbar = () => {
  const user = useSelector((state) => state.userSlice.user);
  return (
    <div>
      <div className="w-64 h-screen fixed z-20 sm:overflow-y-scroll sm:overflow-x-hidden 2xl:overflow-y-hidden 2xl:overflow-x-hidden  pt-10 bg-slate-400">
        <div className="ml-6 inline-block">
          <Link to="/">
            <div className="flex w-20 mb-10 text-center">
              <img src="/FZ-app-login-logo.png" alt="FZ-app-login-logo" />
              <h3 className="text-xl font-bold uppercase">Friends Zone</h3>
            </div>
          </Link>
        </div>
        <button>
          <Link to="/profile">
            <button className="flex items-center gap-2 p-2 mx-4 mb-10">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img src={user?.photoURL} alt="NavProfile" />
              </div>
              <div className="mr-2">
                <h2 className="text-xl font-semibold">{user?.displayName}</h2>
                <p>Edit Profile</p>
              </div>
              <div className="text-xl text-slate-50 font-semibold">
                <IoSettings />
              </div>
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
        <div className="flex justify-center">
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
    </div>
  );
};

export default Navbar;
