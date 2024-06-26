import { getDatabase, push, ref, remove, set } from "firebase/database";
import { useSelector } from "react-redux";

const Requests = ({ requList, frRequId }) => {
  // console.log(requList);
  const user = useSelector((state) => state.userSlice.user);
  const db = getDatabase();
  
  const handelConfirm = (data, id) => {
    // console.log(id);
    set(push(ref(db, "friends/")), {
      friendId: data.key,
      friendName: data.username,
      friendProfile: data.photoURL,
      reciverId: user.uid,
      reciverName: user.displayName,
      reciverProfile: user.photoURL,
    });
    remove(ref(db, "friendRequest/" + id));
    window.location.reload();
  };

  const handelCancel = (id) => {
    remove(ref(db, "friendRequest/" + id));
    window.location.reload();
  };

  return (
    <>
      <div className="flex w-full lg:w-1/2 cursor-pointer items-center my-5 gap-5">
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <img src={requList?.photoURL} alt="People Img" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-primary">
            {requList?.username}
          </h2>
        </div>
        <div className="flex flex-col gap-2 ml-auto">
          <button
            onClick={() => handelConfirm(requList, frRequId)}
            className="bg-brand text-white rounded-lg px-2 py-1"
          >
            Confirm
          </button>
          <button onClick={() => handelCancel(frRequId)}>Cancel</button>
        </div>
      </div>
    </>
  );
};

export default Requests;
