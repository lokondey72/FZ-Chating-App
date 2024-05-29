import { getDatabase, push, ref, remove, set } from "firebase/database";
import { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import { useSelector } from "react-redux";

const FriendsItems = ({ data }) => {
  const db = getDatabase();
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.userSlice.user);

  const hendelOption = () => {
    setOpen(!open);
  };

  const handelUnfriend = (key) => {
    console.log(key);
    remove(ref(db, "friends/" + key));
    window.location.reload();
  };

  const handelBlock = (data) => {
    console.log(data);
    set(push(ref(db, "block/")), {
      blockById: user.uid,
      blockByName: user.displayName,
      blockByProfile: user.photoURL,

      blockId: data.friendId,
      blockName: data.friendName,
      blockProfile: data.friendImg,
    });
    remove(ref(db, "friends/" + data.key));
    window.location.reload();
  };
  return (
    <>
      <div className="flex w-1/2 cursor-pointer items-center my-5 gap-5">
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <img src={data?.friendImg} alt="rikto-ltd-imgs" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-primary">{data?.friendName}</h2>
        </div>
        <div className="ml-auto">
          <button onClick={hendelOption}>
            <FaEllipsisH />
          </button>
          {open ? (
            <div className="bg-black p-1 absolute ">
              <ul className="flex gap-3 text-white text-center">
                <li>
                  <button onClick={() => handelUnfriend(data.key)}>
                    Unfriens
                  </button>
                </li>
                <li>
                  <button onClick={() => handelBlock(data)}>block</button>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default FriendsItems;
