import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PeopleItems = ({ userData }) => {
  const db = getDatabase();
  // const [requestList, setRequestList] = useState([]);
  const user = useSelector((state) => state.userSlice.user);

  // useEffect(() => {
  //   let arr = [];
  //   const starCountRef = ref(db, "friendRequest/");
  //   onValue(starCountRef, (snapshot) => {
  //     snapshot.forEach((item) => {
  //       if (item.val().senderId == user.uid) {
  //         arr.push({ ...item.val(), key: item.key });
  //       }
  //     });
  //     setRequestList(arr);
  //   });
  // }, []);
  // console.log(userData);

  const handelRequest = (key, username) => {
    console.log(userData.key, userData.username);
    set(push(ref(db, "friendRequest/")), {
      senderPhotoURL: user.photoURL,
      senderName: user.displayName,
      senderId: user.uid,
      receverName: username,
      receverId: key,
    });
  };

  return (
    <>
      <div className="flex cursor-pointer items-center my-5 gap-5">
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <img src={userData?.profile_picture} alt="rikto-ltd-imgs" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-primary">
            {userData?.username}
          </h2>
        </div>
        <div className="ml-auto">
          {/* {requestList.map((item) => {
            item.receverId == userData.key ? (
              <button>Cancel</button>
            ) : (
            );
          })} */}
              <button
                onClick={() => handelRequest(userData.key, userData.username)}
              >
                Add Friend
              </button>
        </div>
      </div>
    </>
  );
};

export default PeopleItems;
