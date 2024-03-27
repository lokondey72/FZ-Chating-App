import { Link } from "react-router-dom";
import { FaEllipsisH } from "react-icons/fa";

const PostHeading = () => {
  return (
    <>
      <div className="p-5 bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <Link className="flex items-center gap-3" to="/profile">
            <div className="w-14 h-14 rounded-full overflow-hidden">
              <img src="/public/WhatsApp-img.jpg" alt="" />
            </div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Rikto Dey
            </h5>
          </Link>
          <Link to="#">
            <FaEllipsisH className="text-white" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default PostHeading;