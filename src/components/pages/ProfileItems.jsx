import PostHeading from "./PostHeading";

const ProfileItems = ({ imgUrl, profPera }) => {
  return (
    <>
      <div className="w-1/2">
        <div className="w-full bg-white rounded-2xl overflow-hidden shadow ">
          <PostHeading />
          <div className="w-full">
            <a href="#">
              <img
                className="w-full"
                src={imgUrl}
                alt="Profile-post-img"
              />
            </a>
          </div>
          <div className="p-5 dark:bg-gray-800 dark:border-gray-700">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {profPera}
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileItems;
