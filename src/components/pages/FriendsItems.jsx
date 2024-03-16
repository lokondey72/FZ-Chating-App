import { FaEllipsisH } from "react-icons/fa";

const FriendsItems = ({ imgUrl, idName }) => {
  return (
    <>
      <div className="flex cursor-pointer items-center my-5 gap-5">
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <img src={imgUrl} alt="rikto-ltd-imgs" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-primary">{idName}</h2>
        </div>
        <div className="ml-auto">
          <FaEllipsisH />
        </div>
      </div>
    </>
  );
};

export default FriendsItems;
