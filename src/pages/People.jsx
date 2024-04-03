import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
// import FriendsItems from "./FriendsItems";
import PeopleItems from "./PeopleItems";

const People = () => {
  return (
    <>
      <div className="bg-[#FCFCFC] overflow-y-scroll overflow-x-hidden ml-64 w-1/4 h-screen">
        <div>
          <div className="w-[465px] pb-4 shadow-Uxl bg-white fixed top-0">
            <div className="flex justify-between items-center mx-7 my-5 text-lg font-semibold text-primary">
              <h2 className="title">
                <Link to="/chat">People</Link>
              </h2>
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
          <div className="mx-7 mt-40">
            <PeopleItems />
            <PeopleItems />
            <PeopleItems />
            <PeopleItems />
            <PeopleItems />
            <PeopleItems />
            <PeopleItems />
            <PeopleItems />
            <PeopleItems />
            <PeopleItems />
            <PeopleItems />
            <PeopleItems />
            <PeopleItems />
            <PeopleItems />
            <PeopleItems />
            <PeopleItems />
            <PeopleItems />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center m-auto">
        <div className="w-60 text-center text-xl font-semibold interFont">
          <h2>People you may know ther</h2>
        </div>
      </div>
    </>
  );
};

export default People;
