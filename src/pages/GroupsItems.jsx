import { useEffect, useState } from "react";
import { IoMdMore } from "react-icons/io";
import { FaWindowClose } from "react-icons/fa";
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from "react-redux";
import FriendsItems from "./FriendsItems";

const GroupsItems = ({ data, myGroup }) => {
  let [show, setShow] = useState(false);
  const db = getDatabase();
  const [friendList, setFriendList] = useState([]);
  const user = useSelector((state) => state.userSlice.user);

  const handelAddGroup = () => {
    if (myGroup) {
      setShow(true);
      console.log(myGroup);
    }
  };

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
      {show && (
        <dir className="w-1/2 h-full flex items-center bg-[rgb(0,0,0,0.5)] justify-center absolute z-50 top-0 left-[500px]">
          <div className="w-3/4 bg-brand rounded-xl">
            <div className="text-end">
              <button
                onClick={() => setShow(false)}
                className="p-4 text-xl rounded-full overflow-hidden"
              >
                <FaWindowClose />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center mx-14 mt-5 mb-20 gap-5">
              <h4 className="text-3xl text-white font-bold mb-3 font-nunitoFont">
                Add Group Mumber
              </h4>
              <div className="flex items-center gap-3">
                <div>
                  {friendList.map((item) => (
                    <FriendsItems key={item.key} data={item} />
                  ))}
                </div>
              </div>
              <div>
                <button className="py-3 px-4 rounded-xl text-lg font-semibold text-brand bg-white">
                  Add Friends
                </button>
              </div>
            </div>
          </div>
        </dir>
      )}
      <div className="mx-10 mt-40">
        <div className="flex w-1/2 cursor-pointer items-center my-5 gap-5">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img src={data?.createByPhoto} alt="rikto-ltd-imgs" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-primary">
              {data?.groupName}
            </h2>
            <p className="text-lg font-normal text-secandari">
              Admin: {data?.createBy}
            </p>
          </div>
          <div className="ml-auto">
            <button onClick={handelAddGroup} className="text-xl">
              <IoMdMore />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupsItems;
