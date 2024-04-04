import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { MdError } from "react-icons/md";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getDatabase, ref, set } from "firebase/database";
import { logeduser } from "../Slices/userSlice";

const LogIn = () => {
  const disptch = useDispatch();
  const navigate = useNavigate();
  const db = getDatabase();
  const auth = getAuth();
  let [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  let [showPass, setShowPass] = useState(false);

  const hendelLogin = () => {
    if (loginData.email == "") {
      setEmailError("Please enter a email !");
    } else if (loginData.password == "") {
      setPasswordError("Please enter your Password !");
    } else {
      signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password
      ).then((res) => {
        if (res.user.emailVerified == false) {
          toast.error("Your email is not Verified", {
            position: "top-center",
            autoClose: 3000,
            closeOnClick: true,
            theme: "light",
          });
        } else {
          toast.success("Login successfull...", {
            position: "top-center",
            autoClose: 3000,
            closeOnClick: true,
            theme: "light",
          });
          // setTimeout(() => {
          //   navigate("/");
          // }, 1500);
        }
        disptch(logeduser("Hloo"));
        console.log(res);
        // set(ref(db, "users/" + res.user.uid), {
        //   username: res.user.displayName,
        //   email: res.user.email,
        //   profile_picture: res.user.photoURL,
        // });
      });
      // .catch((error) => {
      //   if (error.code.includes("auth/invalid-email")) {
      //     setEmailError("Enter a valid email !");
      //   } else if (error.code.includes("auth/invalid-credential")) {
      //     toast.error("Account not found! Please Sign Up", {
      //       position: "top-center",
      //       autoClose: 5000,
      //       closeOnClick: true,
      //       theme: "light",
      //     });
      //   } else if (error.code.includes("auth/too-many-requests")) {
      //     toast.error("Too many request! Please try again after sometime", {
      //       position: "top-center",
      //       autoClose: 5000,
      //       closeOnClick: true,
      //       theme: "light",
      //     });
      //   }
      // });
    }
  };

  return (
    <>
      <section>
        <div className="container">
          <ToastContainer />
          <div>
            <div className="w-[560px] bg-white shadow-[#00000059_0px_5px_15px] box-border mx-auto my-16 py-10 rounded-3xl">
              <div className="w-24 text-center m-auto pb-2">
                <img
                  src="/public/FZ-app-login-logo.png"
                  alt="FZ-app-login-logo"
                />
              </div>
              <div className="px-12 pb-2">
                <h3 className="text-primary text-3xl font-bold font-nunitoFont uppercase mt-3 text-center">
                  Get started with easily Login
                </h3>
              </div>
              <div className="text-center pb-4">
                <p className="text-xl font-normal font-nunitoFont text-secandari">
                  Free sign up and you can enjoy it
                </p>
              </div>
              <div className="w-full flex flex-col px-20 gap-[18px] mb-[15px]">
                <div>
                  <input
                    onChange={(e) => {
                      setLoginData({ ...loginData, email: e.target.value }),
                        setEmailError("");
                    }}
                    type="email"
                    className="w-full border box-border px-[15px] py-3 rounded-3xl border-solid border-[#c0c0c0]"
                    placeholder="Email Addres"
                  />
                  {emailError && (
                    <p className="pl-2 flex items-center gap-1 text-red-400">
                      <MdError />
                      {emailError}
                    </p>
                  )}
                </div>
                <div className="flex items-center border box-border rounded-3xl border-solid border-[#c0c0c0]">
                  <input
                    onChange={(e) => {
                      setLoginData({ ...loginData, password: e.target.value }),
                        setPasswordError("");
                    }}
                    type={showPass ? "text" : "password"}
                    className="w-full border-none px-[15px] py-3 rounded-3xl"
                    placeholder="Password"
                  />
                  <button
                    onClick={() => setShowPass(!showPass)}
                    className="mr-4 cursor-pointer"
                  >
                    {showPass ? <IoEye /> : <IoEyeOff />}
                  </button>
                </div>
                {passwordError && (
                  <p className="pl-2 flex items-center gap-1 text-red-400">
                    <MdError />
                    {passwordError}
                  </p>
                )}
                <p className="underline text-end text-[#747474] decoration-[#747474] m-0">
                  <span className="cursor-pointer text-base font-bold hover:text-black font-nunitoFont">
                    Forgot Password?
                  </span>
                </p>
                <button
                  onClick={hendelLogin}
                  className="text-lg font-semibold font-nunitoFont text-slate-50 shadow-[#0000003d_0px_3px_8px] bg-navegrey border cursor-pointer p-[0.625em] rounded-[20px] border-navegrey hover:text-navegrey hover:bg-[white] hover:transition-[0.5s] hover:border-solid hover:border-navegrey"
                >
                  Log in
                </button>
              </div>
              <div className="text-center">
                <p className="text-base text-[#747474] m-0 font-nunitoFont">
                  Don't have an account?
                  <span className="text-base underline text-navegrey cursor-pointer font-extrabold ml-px font-nunitoFont">
                    <Link to="/signup">Sign Up</Link>
                  </span>
                </p>
              </div>
              {/* <div className="w-full flex flex-col justify-start gap-[10px] mt-[30px]">
                <div className="apple-login-button">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    className="apple-icon"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"></path>
                  </svg>
                  <span>Log in with Apple</span>
                </div>
                <div className="google-login-button">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    version="1.1"
                    x="0px"
                    y="0px"
                    className="google-icon"
                    viewBox="0 0 48 48"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                  <span>Log in with Google</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogIn;
