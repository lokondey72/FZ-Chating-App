import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PeopleItems = ({ userData }) => {
  const db = getDatabase();
  const [realTime, setRealTime] = useState(false);
  const [friendList, setFriendList] = useState([]);
  const [blockList, setBlockList] = useState([]);
  const [requestList, setRequestList] = useState([]);
  const user = useSelector((state) => state.userSlice.user);

  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "friendRequest/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        arr.push(item.val().senderId + item.val().receverId);
      });
      setRequestList(arr);
    });
  }, [realTime]);

  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "friends/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        arr.push(item.val().friendId + item.val().reciverId);
      });
      setFriendList(arr);
    });
  }, [realTime]);

  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "block/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        arr.push(item.val().blockById + item.val().blockId);
      });
      setBlockList(arr);
    });
  }, [realTime]);

  const handelRequest = (key, username) => {
    setRealTime(!realTime);
    // console.log(userData.key, userData.username);
    set(push(ref(db, "friendRequest/")), {
      senderName: user.displayName,
      senderId: user.uid,
      receverName: username,
      receverId: key,
    });
  };

  return (
    <>
      <div className="flex w-1/2 items-center my-5 gap-5">
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <img src={userData?.photoURL} alt="rikto-ltd-imgs" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-primary">
            {userData?.username}
          </h2>
        </div>
        <div className="ml-auto">
          {requestList.includes(user.uid + userData.key) ? (
            <button className="px-3 py-2 bg-brand text-white rounded-xl">
              Cancel Request
            </button>
          ) : requestList.includes(userData.key + user.uid) ? (
            <button className="px-3 py-2 bg-brand text-white rounded-xl">
              View Profile
            </button>
          ) : friendList.includes(userData.key + user.uid) ||
            friendList.includes(user.uid + userData.key) ? (
            <p>Friends</p>
          ) : blockList.includes(userData.key + user.uid) ||
            blockList.includes(user.uid + userData.key) ? (
            <p>Blocked</p>
          ) : (
            <button
              className="px-3 py-2 bg-brand text-white rounded-xl"
              onClick={() => handelRequest(userData.key, userData.username)}
            >
              Add Friend
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default PeopleItems;
