import { FaEllipsisH } from "react-icons/fa";
import ProfileItems from "./ProfileItems";

const Profile = () => {
  return (
    <>
      <div className="w-full ml-64 mt-">
        <div className="h-96 bg-profile-img bg-no-repeat bg-cover">
          <div class="flex justify-end px-4 pt-4">
            <FaEllipsisH />
          </div>
        </div>
        <div class="border border-gray-200 rounded-lg shadow">
          <div class="flex flex-col items-center pb-10">
            <div class="w-32 h-32 mb-3 overflow-hidden absolute top-80 rounded-full shadow-lg">
              <img src="/public/WhatsApp-img.jpg" alt="Bonnie image" />
            </div>
            <div className="flex items-center gap-2 pt-20">
              <h5 class="mb-1 text-2xl font-bold text-gray-900">
                Bonnie Green
              </h5>
              <span>Nickname</span>
            </div>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              Visual Designer
            </span>
            <div class="flex mt-4 md:mt-6">
              <a
                href="#"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add friend
              </a>
              <a
                href="#"
                class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Message
              </a>
            </div>
          </div>
        </div>

        <div className="w-full my-10">
          <div className="flex justify-center flex-wrap gap-10">
            <ProfileItems
              imgUrl="/public/profile-bg-img.jpg"
              profPera="With a passion for design and video editing that spans over 5 years, I'm here to bring your creative visions to life. As an experienced designer and video editor, I offer a wide range of services that will elevate your content to the next level.

              What sets me apart:
              ✅ Adept at the latest design and editing software
              ✅ Creative flair and attention to detail
              ✅ Excellent communication for a seamless collaboration
              ✅ Competitive pricing and custom packages."
            />
            <ProfileItems
              imgUrl="/public/WhatsApp-img.jpg"
              profPera="Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order."
            />
            <ProfileItems
              imgUrl="/public/friends-img.jpg"
              profPera="Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order."
            />
            <ProfileItems
              imgUrl="/public/uploded-you-img.jpg"
              profPera="Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
