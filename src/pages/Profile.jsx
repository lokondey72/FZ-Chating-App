import { MdOutlineCancel } from "react-icons/md";
import {
  FaEllipsisH,
  FaCamera,
  FaRegEdit,
  FaCheckCircle,
} from "react-icons/fa";
import ProfileItems from "./ProfileItems";
import HomeHeader from "./HomeHeader";
import { useSelector } from "react-redux";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { createRef, useState } from "react";
import { getDatabase } from "firebase/database";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
} from "firebase/storage";

const Profile = () => {
  const auth = getAuth();
  const db = getDatabase();
  const storage = getStorage();
  const cropperRef = createRef();
  const user = useSelector((state) => state.userSlice.user);
  const [image, setImage] = useState();
  const [cropData, setCropData] = useState("");
  const [upProfilePic, SetUpProfilePic] = useState(false);
  const [editName, setEditName] = useState(false);
  const [fullName, setFullName] = useState("");

  const onChange = (e) => {
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
  };

  const heandelCancel = () => {
    SetUpProfilePic(false);
    setCropData("");
    setImage("");
  };

  const heandelUpload = () => {
    const storageRef = ref(storage, user?.uid);
    // console.log(cropData);
    uploadString(storageRef, cropData, "data_url").then((snapshot) => {
      getDownloadURL(storageRef).then((downloadURL) => {
        onAuthStateChanged(auth, () => {
          console.log(auth.currentUser);
          console.log(downloadURL);
          updateProfile(auth.currentUser, {
            photoURL: downloadURL,
            username: "hllo",
          }).then((rs) => {
            SetUpProfilePic(false);
            setCropData("");
            setImage("");
            console.log(rs);
          });
        });
        // console.log(downloadURL)
        // console.log(auth.currentUser);
        
      });
    });
  };

  const handelNameEdit = () => {
    setEditName(!editName);
  };

  const handelNameSave = () => {
    onAuthStateChanged(auth, () => {
      updateProfile(auth.currentUser, {
        username: fullName,
      });
      console.log("click");
    });
  };

  return (
    <>
      <HomeHeader />
      <div className="w-full ml-64">
        <div className="h-96 bg-profile-img bg-no-repeat bg-cover">
          <div className="flex justify-end px-4 pt-4">
            <FaEllipsisH />
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg shadow">
          <div className="flex flex-col items-center pb-10">
            <div className="w-32 h-32 mb-3 overflow-hidden absolute top-80 rounded-full shadow-lg">
              <img
                src={cropData ? cropData : user?.photoURL}
                alt="Bonnie image"
                className="w-full h-full"
              />
            </div>
            <div
              onClick={() => SetUpProfilePic(true)}
              className="px-1 cursor-pointer absolute left bg-red-500"
            >
              <button className=" text-white">
                <FaCamera />
              </button>
            </div>
            {upProfilePic && (
              <div className="w-full h-full z-10 bg-[rgb(0,0,0,0.6)] absolute top-0 left-0 flex justify-center items-center">
                <div className="w-[500px] bg-slate-400 rounded-xl">
                  <button
                    onClick={heandelCancel}
                    className="flex ml-auto p-2 text-lg"
                  >
                    <MdOutlineCancel />
                  </button>
                  {image && (
                    <div className="m-auto w-36 h-36 mt-3 rounded-full overflow-hidden">
                      <img src={cropData} alt="" className="w-full h-full" />
                    </div>
                  )}
                  <div className="text-center my-5">
                    <label
                      htmlFor="profile"
                      className="cursor-pointer text-white border px-5 py-3 rounded-xl"
                    >
                      Choose your profile picture
                      <input
                        id="profile"
                        className="hidden"
                        type="file"
                        onChange={onChange}
                      />
                    </label>
                  </div>
                  {image && (
                    <Cropper
                      ref={cropperRef}
                      style={{ height: 400, width: "100%" }}
                      zoomTo={0.5}
                      initialAspectRatio={1}
                      preview=".img-preview"
                      src={image}
                      viewMode={1}
                      minCropBoxHeight={10}
                      minCropBoxWidth={10}
                      background={false}
                      responsive={true}
                      autoCropArea={1}
                      checkOrientation={false}
                      guides={true}
                    />
                  )}
                  <div className="flex justify-center mx-5 my-3">
                    {cropData ? (
                      <button
                        onClick={heandelUpload}
                        className="text-white bg-green-500 rounded-xl py-2 px-6"
                      >
                        Upload Profile
                      </button>
                    ) : (
                      <button
                        onClick={getCropData}
                        className="text-white bg-secandari rounded-xl mt-2 py-2 px-4"
                      >
                        Preview
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center gap-1 pt-20">
              <h5 className="mb-1 text-2xl font-bold text-gray-900">
                {user?.displayName}
              </h5>
              <button onClick={handelNameEdit} className="p-2">
                <FaRegEdit />
              </button>
              <p>Nickname</p>
            </div>
            {editName && (
              <div className="flex border border-black rounded-xl overflow-hidden items-center">
                <input
                  onChange={(e) => setFullName(e.target.value)}
                  type="text"
                  className="outline-none px-2 py-1"
                  placeholder="Full name"
                />
                {fullName && (
                  <button
                    onClick={handelNameSave}
                    className="px-1 text-green-500"
                  >
                    <FaCheckCircle />
                  </button>
                )}
              </div>
            )}
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Visual Designer
              </span>
              <button className="p-2">
                <FaRegEdit />
              </button>
            </div>
            <div className="flex mt-4 md:mt-6">
              <button
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add friend
              </button>
              <button className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Message
              </button>
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
