import { MdOutlineCancel } from "react-icons/md";
import {
  FaEllipsisH,
  FaCamera,
  FaRegEdit,
  FaCheckCircle,
} from "react-icons/fa";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import HomeHeader from "./HomeHeader";
import ProfileItems from "./ProfileItems";
import { useDispatch, useSelector } from "react-redux";
import { createRef, useState } from "react";
// import { getDatabase } from "firebase/database";
import { getDatabase, ref as dref, set } from "firebase/database";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
} from "firebase/storage";
import { logeduser } from "../Slices/userSlice";

const Profile = () => {
  const auth = getAuth();
  const db = getDatabase();
  const storage = getStorage();
  const disptch = useDispatch();
  const cropperRef = createRef();
  const [image, setImage] = useState();
  const [cropData, setCropData] = useState("");
  const [fullName, setFullName] = useState("");
  const [editName, setEditName] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const [upProfilePic, SetUpProfilePic] = useState(false);
  const user = useSelector((state) => state.userSlice.user);

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
    setLoadingData(true);
    const storageRef = ref(storage, user?.uid);
    uploadString(storageRef, cropData, "data_url").then(() => {
      getDownloadURL(storageRef).then((downloadURL) => {
        onAuthStateChanged(auth, (res) => {
          // console.log(res);
          // console.log(downloadURL);
          updateProfile(auth.currentUser, {
            photoURL: downloadURL,
            // username: "hllo",
          }).then(() => {
            set(dref(db, "users/" + user.uid), {
              username: user.displayName,
              email: user.email,
              photoURL: downloadURL,
            });
            localStorage.setItem("user", JSON.stringify(auth.currentUser));
            disptch(logeduser(auth.currentUser));
            SetUpProfilePic(false);
            setCropData("");
            setImage("");
            setLoadingData(false);
            // console.log(photoURL);
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
        displayName: fullName,
      });
      // console.log("click");
    });
  };

  return (
    <>
      {/* <HomeHeader /> */}
      <div className="w-full">
        <div className="">
          <div className="w-full h-96">
            <img
              className="w-full h-full"
              src="/profile-bg-img.jpg"
              alt="profile-cover"
            />
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg shadow">
          <div className="flex flex-col items-center pb-10">
            <div>
              <div className="w-32 h-32 mb-3 overflow-hidden absolute top-[320px] sm:top-80 sm:left-[895px] xl:top-80 left-5 rounded-full shadow-lg">
                <img
                  src={user?.photoURL}
                  alt="Profile Photo"
                  className="w-full h-full"
                />
              </div>
              <div
                className="px-1 rounded-full bg-brand cursor-pointer absolute top-[435px] left-[71px] xl:top-[410px] xl:left-[950px] md:top-[410px] md:left-[385px] sm:top-[410px] sm:left-[385px]"
                onClick={() => SetUpProfilePic(true)}
              >
                <button className="text-white">
                  <FaCamera />
                </button>
              </div>
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
                      loadingData ? (
                        <button className="text-white bg-green-500 rounded-xl py-2 px-6">
                          <div className="flex flex-row gap-2">
                            <div className="w-4 h-4 rounded-full bg-brand animate-bounce [animation-delay:.7s]"></div>
                            <div className="w-4 h-4 rounded-full bg-brand animate-bounce [animation-delay:.3s]"></div>
                            <div className="w-4 h-4 rounded-full bg-brand animate-bounce [animation-delay:.7s]"></div>
                          </div>
                        </button>
                      ) : (
                        <button
                          onClick={heandelUpload}
                          className="text-white bg-green-500 rounded-xl py-2 px-6"
                        >
                          Upload Profile
                        </button>
                      )
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

            <div className="flex items-center gap-1 pt-20 sm:ml-28">
              <h5 className="mb-1 text-2xl font-bold text-gray-900">
                {user?.displayName}
              </h5>
              <button onClick={handelNameEdit} className="p-2">
                <FaRegEdit />
              </button>
              <p>Nickname</p>
            </div>
            {editName && (
              <div className="flex border border-black rounded-xl overflow-hidden items-center ml-28">
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
            <div className="flex items-center gap-1">
              <p className="text-sm ml-28 text-gray-500 dark:text-gray-400">
                Visual Designer
              </p>
              <button className="p-2">
                <FaRegEdit />
              </button>
            </div>
            <div className="flex ml-28 mt-4 md:mt-6">
              <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
              profilePost={user.photoURL}
            />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
