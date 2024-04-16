import PostHeading from "./PostHeading";

const ProfileItems = ({ imgUrl, profPera }) => {
  return (
    <>
      <div className="w-full relative mx-20">
        <div className="w-full bg-white rounded-2xl overflow-hidden shadow ">
          <PostHeading />
          <div className="w-full flex justify-center gap-2 h-[660px]">
            <a href="#">
              <img className=" h-full" src={imgUrl} alt="profile-img" />
            </a>
            <a href="#">
              <img className=" h-full" src={imgUrl} alt="profile-img" />
            </a>
          </div>
          <div className=" p-5 bg-gray-800 dark:border-gray-700">
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
            </a>
            <p className="mb-3 font-normal text-gray-100">{profPera}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileItems;