import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import FriendsItems from "./FriendsItems";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDatabase, onValue, push, ref, set } from "firebase/database";

const Friends = () => {
  const db = getDatabase();
  const [friendList, setFriendList] = useState([]);
  // const [realTime, setRealTime] = useState(false);
  const user = useSelector((state) => state.userSlice.user);

  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "friends/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (item.val().friendId == user.uid) {
          arr.push({
            friendId: item.val().reciverId,
            friendName: item.val().reciverName,
            friendImg: item.val().reciverProfile,
            key: item.key,
          });
        } else if (item.val().reciverId == user.uid) {
          arr.push({
            friendId: item.val().friendId,
            friendName: item.val().friendName,
            friendImg: item.val().friendProfile,
            key: item.key,
          });
        }
      });
      setFriendList(arr);
    });
  }, []);

  return (
    <>
      <div className="bg-[#FCFCFC] overflow-y-scroll overflow-x-hidden ml-64 w-1/4 h-screen">
        <div>
          <div className="w-[465px] pb-4 bg-white fixed top-0">
            <div className="flex justify-between items-center mx-7 my-5 text-lg font-semibold text-primary">
              <h2 className="title">
                <Link to="/chat">Friends</Link>
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
            {friendList.length > 0 ? (
              friendList.map((item) => (
                <FriendsItems key={item.key} data={item} />
              ))
            ) : (
              <p className="text-center font-bold">No Friends Available</p>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center m-auto">
        <div className="w-60 text-center text-xl font-semibold interFont">
          <h2>Select your friend and see friends info</h2>
        </div>
      </div>
    </>
  );
};

export default Friends;
