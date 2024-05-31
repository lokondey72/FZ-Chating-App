import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import ChatItems from "./ChatItems";
import { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import { useSelector } from "react-redux";

const chat = () => {
  const db = getDatabase();
  const [friendList, setFriendList] = useState([]);
  const user = useSelector((state) => state.userSlice.user);
  // const friend = useSelector((state) => state.chatIdSlice);
  // console.log(friend);

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
  // console.log(friendList);

  return (
    <>
      <div className="w-full bg-white overflow-y-scroll h-screen">
        <div className="lg:w-1/2 mx-auto">
          <div className="w-full sm:w-[465px] lg:w-2/5 sm:right-0 lg:left-[680px] pb-4 bg-white fixed top-0">
            <div className="flex items-center mx-7 mt-5 mb-6 text-lg font-semibold text-primary">
              <h2 className="title mr-24">
                <Link to="/chat">Friends Chat</Link>
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
          <div className="mx-7 mt-48">
            {friendList.length > 0 ? (
              friendList.map((item) => <ChatItems key={item.key} data={item} />)
            ) : (
              <p className="text-center w-1/2 font-bold">
                No Friends Available
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default chat;
