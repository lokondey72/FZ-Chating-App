import { useState } from "react";
import { CgMenuRound } from "react-icons/cg";
import { IoPersonCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

const HomeDropdone = () => {
  const [open, setOpen] = useState("");
  const [logOut, setLogOut] = useState(false);
  const hendelclik = () => {
    setOpen(!open);
  };
  const hendelLogout = () => {
    setLogOut(localStorage.setItem("user", JSON.stringify("")));
  };

  return (
    <>
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-xl px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-800 hover:text-white hover:bg-gray-800"
            id="menu-button"
            onClick={hendelclik}
          >
            <CgMenuRound className="flex gap-5 text-4xl" />
          </button>
        </div>
        <div>
          {open ? (
            <ul className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <li>
                <IoPersonCircle />
              </li>
              <li>
                <Link
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  Account settings
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  Account settings
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => hendelLogout(logOut)}
                  to="/login"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  Log Out
                </Link>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default HomeDropdone;
