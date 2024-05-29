import { useEffect, useState } from "react";
import { IoMdMore } from "react-icons/io";
import { FaWindowClose } from "react-icons/fa";
import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  remove,
} from "firebase/database";
import { useSelector } from "react-redux";

const GroupsItems = ({ data, myGroup }) => {
  // console.log(data);
  let [show, setShow] = useState(false);
  let [showAdd, setShowAdd] = useState(false);
  let [showInfo, setShowInfo] = useState(false);
  const db = getDatabase();
  const [friendList, setFriendList] = useState([]);
  const [mumberId, setMumberId] = useState([]);
  const [mumberList, setMumberList] = useState([]);
  const [realTime, setRealTime] = useState(false);
  const user = useSelector((state) => state.userSlice.user);

  const handelGroup = () => {
    if (myGroup) {
      setShow(true);
      // console.log(myGroup);
    }
  };
  const handelMember = () => {
    setShowAdd(true);
    setShow(false);
  };
  const handelInfo = () => {
    setShowInfo(true);
    setShow(false);
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
  }, [realTime]);
  // console.log(friendList);

  const handelAdd = (data, friend) => {
    setRealTime(!realTime);
    set(push(ref(db, "groupMembers")), {
      groupName: data.groupName,
      groupId: data.key,
      createBy: data.createBy,
      createById: data.createById,
      createByPhoto: data.createByPhoto,
      mumberId: friend.friendId,
      mumberName: friend.friendName,
      mumberImg: friend.friendImg,
      munberKey: friend.key,
    });
  };

  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "groupMembers/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (data.key == item.val().groupId) {
          arr.push(item.val().createById + item.val().mumberId);
        }
      });
      setMumberId(arr);
    });
  }, [realTime]);

  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "groupMembers/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (data.key == item.val().groupId) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setMumberList(arr);
    });
  }, [realTime]);
  console.log(mumberList);

  const handelRemove = (key) => {
    remove(ref(db, "groupMembers/" + key));
    window.location.reload();
  };

  return (
    <>
      {show && (
        <dir className="w-1/2 h-full flex items-center bg-[rgb(0,0,0,0.5)] justify-center absolute z-50 top-0 left-[500px]">
          <div className="w-3/4 bg-slate-400 rounded-xl">
            <div className="text-end">
              <button
                onClick={() => setShow(false)}
                className="p-4 text-xl rounded-full overflow-hidden"
              >
                <FaWindowClose />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center mx-14 mb-10 gap-5">
              <h4 className="text-3xl text-white font-bold mb-3 border-b font-nunitoFont">
                Group Option
              </h4>
              <div className="flex flex-col items-center gap-3">
                <button
                  onClick={handelMember}
                  className="w-40 py-4 rounded-xl bg-brand text-white"
                >
                  Add Members
                </button>
                <button
                  onClick={handelInfo}
                  className="w-40 py-4 rounded-xl bg-brand text-white"
                >
                  Group Info
                </button>
              </div>
            </div>
          </div>
        </dir>
      )}
      {showAdd && (
        <dir className="w-1/2 h-full flex items-center bg-[rgb(0,0,0,0.5)] justify-center absolute z-50 top-0 left-[500px]">
          <div className="w-3/4 bg-slate-400 rounded-xl">
            <div className="text-end">
              <button
                onClick={() => setShowAdd(false)}
                className="p-4 text-xl rounded-full overflow-hidden"
              >
                <FaWindowClose />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center mx-14 mt-5 mb-20 gap-5">
              <h4 className="text-3xl text-white font-bold mb-3 border-b border-brand font-nunitoFont">
                {data?.groupName}
              </h4>
              <div className="flex items-center gap-3">
                <div>
                  {mumberList.length > 0 ? (
                    friendList.map((item) => (
                      <div
                        key={item.key}
                        className="flex items-center my-5 gap-5"
                      >
                        <div className="w-14 h-14 rounded-full overflow-hidden">
                          <img src={item?.friendImg} alt="rikto-ltd-imgs" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-white">
                            {item?.friendName}
                          </h2>
                        </div>
                        <div className="text-white">
                          {mumberId.includes(user.uid + item.friendId) ? (
                            <p className="w-28 py-2 ml-20 text-center border border-brand">
                              Member
                            </p>
                          ) : (
                            <button
                              onClick={() => handelAdd(data, item)}
                              className="w-28 py-2 ml-20 rounded-xl cursor-pointer bg-brand"
                            >
                              Add
                            </button>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center font-bold">
                      No Friends Available
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </dir>
      )}
      {showInfo && (
        <dir className="w-1/2 h-full flex items-center bg-[rgb(0,0,0,0.5)] justify-center absolute z-50 top-0 left-[500px]">
          <div className="w-3/4 bg-slate-400 rounded-xl">
            <div className="text-end">
              <button
                onClick={() => setShowInfo(false)}
                className="p-4 text-xl rounded-full overflow-hidden"
              >
                <FaWindowClose />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center mx-14 mt-5 mb-20 gap-5">
              <h4 className="text-2xl text-white font-bold mb-3 font-nunitoFont">
                {data?.groupName}
              </h4>
              <h4 className="text-3xl text-white font-bold mb-3 border-b border-brand font-nunitoFont">
                Group Mumber's
              </h4>
              <div className="flex items-center gap-3">
                <div>
                  {mumberList.length > 0 ? (
                    mumberList.map(
                      (item) =>
                        item.groupId == data.key && (
                          <div
                            key={item.key}
                            className="flex items-center my-5 gap-5"
                          >
                            <div className="w-14 h-14 rounded-full overflow-hidden">
                              <img src={item?.mumberImg} alt="rikto-ltd-imgs" />
                            </div>
                            <div>
                              <h2 className="text-xl font-bold text-white">
                                {item?.mumberName}
                              </h2>
                            </div>
                            <div className="text-white">
                              {mumberList.includes(user.uid + item.friendId) ? (
                                <p className="px-4 py-2 ml-20 bg-red-400 border border-brand">
                                  Removed
                                </p>
                              ) : (
                                <button
                                  onClick={() => handelRemove(item.key)}
                                  className="px-4 py-2 ml-20 rounded-xl cursor-pointer bg-brand"
                                >
                                  Remove
                                </button>
                              )}
                            </div>
                          </div>
                        )
                    )
                  ) : (
                    <p className="text-center font-bold">
                      No Member's Available
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </dir>
      )}
      <div>
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
            <button onClick={handelGroup} className="text-xl">
              <IoMdMore />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupsItems;
