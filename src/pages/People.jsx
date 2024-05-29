import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
// import FriendsItems from "./FriendsItems";
import PeopleItems from "./PeopleItems";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const People = () => {
  const db = getDatabase();
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.userSlice.user);

  useEffect(() => {
    const starCountRef = ref(db, "users/");
    let arr = [];
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (item.key !== user.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
        setUserList(arr);
        setLoading(false);
      });
    });
  }, []);
  // console.log(userList);

  return (
    <>
      <div className="w-full bg-white overflow-y-scroll overflow-x-hidden h-screen">
        <div className="w-1/2 m-auto">
          <div className="w-[485px] pb-4 bg-white fixed top-0">
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
            {loading ? (
              <p>Loading...</p>
            ) : (
              userList.map((item) => (
                <PeopleItems userData={item} key={item?.key} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default People;
