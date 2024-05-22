import { FaSearch, FaEdit, FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import GroupsItems from "./GroupsItems";
import { useState } from "react";

const Groups = () => {
  let [show, setShow] = useState(false);

  return (
    <>
      {show && (
        <div className="w-full h-screen flex items-center justify-center absolute z-20 bg-[rgb(0,0,0,0.5)]">
          <div className="bg-white rounded-xl">
            <div className="text-end">
              <button
                onClick={() => setShow(false)}
                className="p-4 text-xl rounded-full overflow-hidden"
              >
                <FaWindowClose />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center mx-14 mt-5 mb-20 gap-5">
              <h4 className="text-3xl font-bold mb-3 font-nunitoFont">Create New Group</h4>
              <div className="flex items-center gap-3">
                <p className="text-lg font-semibold font-nunitoFont">Group name:</p>
                <input
                  className="border border-black rounded-lg px-5 py-1"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div>
                <button className="py-3 px-4 rounded-xl text-lg font-semibold bg-brand text-white">
                  Create group
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="bg-[#FCFCFC] overflow-y-scroll overflow-x-hidden ml-64 w-1/4 h-screen">
        <div>
          <div className="w-[465px] pb-4 bg-white fixed top-0">
            <div className="flex justify-between items-center mx-7 my-5 text-lg font-semibold text-primary">
              <h2 className="title">
                <Link to="/chat">Group</Link>
              </h2>
              <div>
                <button onClick={() => setShow(true)} className="p-2">
                  <FaEdit />
                </button>
              </div>
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
            <GroupsItems
              imgUrl="/public/group-img-(1).png"
              idName="Johnson & Johnson"
              msg="Love You....."
            />
            <GroupsItems
              imgUrl="/public/group-img-(2).png"
              idName="MasterCard"
              msg="hate You....."
            />
            <GroupsItems
              imgUrl="/public/group-img-(3).png"
              idName="McDonald's"
              msg="go....."
            />
            <GroupsItems
              imgUrl="/public/group-img-(4).png"
              idName="eBay"
              msg="Love You....."
            />
            <GroupsItems
              imgUrl="/public/group-img-(5).png"
              idName="McDonald's"
              msg="Love You....."
            />
            <GroupsItems
              imgUrl="/public/group-img-(6).png"
              idName="Facebook"
              msg="Love You....."
            />
            <GroupsItems
              imgUrl="/public/group-img-(5).png"
              idName="McDonald's"
              msg="Love You....."
            />
            <GroupsItems
              imgUrl="/public/group-img-(7).png"
              idName="McDonald's"
              msg="Love You....."
            />
            <GroupsItems
              imgUrl="/public/group-img-(2).png"
              idName="McDonald's"
              msg="Love You....."
            />
            <GroupsItems
              imgUrl="/public/group-img-(4).png"
              idName="McDonald's"
              msg="Love You....."
            />
            <GroupsItems
              imgUrl="/public/group-img-(5).png"
              idName="McDonald's"
              msg="Love You....."
            />
            <GroupsItems
              imgUrl="/public/group-img-(2).png"
              idName="McDonald's"
              msg="Love You....."
            />
            <GroupsItems
              imgUrl="/public/group-img-(8).png"
              idName="McDonald's"
              msg="Love You....."
            />
            <GroupsItems
              imgUrl="/public/group-img-(1).png"
              idName="McDonald's"
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

export default Groups;
