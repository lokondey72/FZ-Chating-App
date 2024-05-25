import Requests from "./Requests";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from "react-redux";

const FriendRequests = () => {
  const db = getDatabase();
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [requestList, setRequestList] = useState([]);
  const user = useSelector((state) => state.userSlice.user);

  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "friendRequest/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (item.val().receverId == user.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setRequestList(arr);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const starCountRef = ref(db, "users/");
    let arr = [];
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        arr.push({ ...item.val(), key: item.key });
        setUserList(arr);
      });
    });
  }, []);

  return (
    <>
      <div className="w-full bg-white overflow-y-scroll overflow-x-hidden h-screen">
        <div className="w-1/2 m-auto">
          <div className="xl:w-[740px] sm:w-[465px] pb-4 bg-white fixed top-0">
            <div className="flex justify-between items-center mx-7 my-5 text-lg font-semibold text-primary">
              <h2 className="title">
                <Link to="/friendrequest">Friend Requests</Link>
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
              <p>Loading Data...</p>
            ) : requestList.length > 0 ? (
              requestList.map((requId) =>
                userList.map(
                  (item) =>
                    requId.senderId == item.key && (
                      <Requests
                        key={item?.key}
                        requList={item}
                        frRequId={requId.key}
                      />
                    )
                )
              )
            ) : (
              <p className="text-center font-bold">
                No Friend Request Available
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendRequests;
