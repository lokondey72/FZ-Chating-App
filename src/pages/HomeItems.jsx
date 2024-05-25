import { Link } from "react-router-dom";
import PostHeading from "./PostHeading";

const HomeItems = ({ imgUrl, peragrap }) => {
  return (
    <>
      <div className="w-2/3 relative sm:ml-56 xl:ml-32">
        <div className="xl:w-full sm:w-96 bg-white rounded-2xl overflow-hidden shadow ">
          <PostHeading />
          <div className="w-full flex justify-center gap-2 xl:h-[660px]">
            <Link to="#">
              <img className=" h-full" src={imgUrl} alt="Home-img" />
            </Link>
          </div>
          <div className=" p-5 bg-gray-800 dark:border-gray-700">
            <Link
              to="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
            </Link>
            <p className="mb-3 font-normal text-gray-100">{peragrap}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeItems;
