import { FaSearch, FaEdit, FaWindowClose } from "react-icons/fa";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import GroupsItems from "./GroupsItems";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Groups = () => {
  const db = getDatabase();
  let [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  let [groupList, setGroupList] = useState([]);
  let [groupName, setGroupName] = useState("");
  // let [groupNameErr, setGroupNameErr] = useState("")
  const user = useSelector((state) => state.userSlice.user);

  const handelgruop = () => {
    if (!groupName) {
      toast.error("Enter Your Group Name", {
        position: "top-center",
        autoClose: 3000,
        closeOnClick: true,
        theme: "light",
      });
    } else {
      set(push(ref(db, "group/")), {
        groupName: groupName,
        createBy: user.displayName,
        createById: user.uid,
        createByPhoto: "/user-dufolt-img.png",
      }).then(() => {
        setShow(false);
        setGroupName("");
        window.location.reload()
      });
    }
  };

  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "group/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        arr.push({ ...item.val(), key: item.key });
      });
      setGroupList(arr);
      setLoading(false);
    });
  }, []);

  // console.log(groupList);

  return (
    <>
      <ToastContainer />
      {show && (
        <div className="w-full h-screen flex items-center justify-center absolute z-20 bg-[rgb(0,0,0,0.5)]">
          <div className="bg-white rounded-xl">
            <div className="text-end">
              <button
                onClick={() => (setShow(false), setGroupName(""))}
                className="p-4 text-xl rounded-full overflow-hidden"
              >
                <FaWindowClose />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center mx-14 mt-5 mb-20 gap-5">
              <h4 className="text-3xl font-bold mb-3 font-nunitoFont">
                Create New Group
              </h4>
              <div className="flex items-center gap-3">
                <p className="text-lg font-semibold font-nunitoFont">
                  Group name:
                </p>
                <input
                  onChange={(e) => setGroupName(e.target.value)}
                  className="border border-black rounded-lg px-5 py-1"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div>
                <button
                  onClick={handelgruop}
                  className="py-3 px-4 rounded-xl text-lg font-semibold bg-brand text-white"
                >
                  Create group
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="bg-white overflow-y-scroll overflow-x-hidden ml-64 w-full h-screen">
        <div className="w-1/2 m-auto">
          <div className="sm:w-[465px] xl:w-[740px] pb-4 bg-white fixed top-0">
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
            {loading ? (
              <p>Loading...</p>
            ) : groupList.length > 0 ? (
              groupList.map((item) => (
                <GroupsItems key={item.key} data={item} />
              ))
            ) : (
              <p className="text-center font-bold">No Friends Available</p>
            )}
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center items-center m-auto">
        <div className="w-60 text-center text-xl font-semibold interFont">
          <h2>Select a chat or start a new conversation</h2>
        </div>
      </div> */}
    </>
  );
};

export default Groups;
