import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import BlockLIstItems from "./BlockLIstItems";
import { getDatabase, onValue, push, ref, set } from "firebase/database";

const BlockList = () => {
  const db = getDatabase();
  const [blockList, setBlockList] = useState([]);
  const user = useSelector((state) => state.userSlice.user);

  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "block/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (item.val().blockById == user.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setBlockList(arr);
    });
  }, []);
  console.log(blockList);

  return (
    <>
      <div className="bg-white overflow-y-scroll overflow-x-hidden w-full ml-40 h-screen">
        <div className="w-1/2 m-auto">
          <div className="w-[740px] pb-4 bg-white fixed top-0">
            <div className="flex items-center mx-7 mt-5 mb-6 text-lg font-semibold text-primary">
              <h2 className="title mr-24">
                <Link to="/blocklist">Block List</Link>
              </h2>
            </div>
            <div className="w-full flex items-center border-black border rounded-lg justify-center mx-5">
              <div className="p-4 rounded-l-lg bg-slate-300">
                <FaSearch />
              </div>
              <input
                type="text"
                className="w-full py-2 rounded-r-lg bg-white pl-2 text-xl font-semibold outline-0"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="mx-7 mt-48">
            {blockList.length > 0 ? (
              blockList.map((item) => (
                <BlockLIstItems key={item.key} data={item} />
              ))
            ) : (
              <p className="text-center font-bold">No Block's Available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockList;
