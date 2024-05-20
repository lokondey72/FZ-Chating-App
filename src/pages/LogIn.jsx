import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { MdError } from "react-icons/md";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getDatabase, ref, set } from "firebase/database";
import { logeduser } from "../Slices/userSlice";

const LogIn = () => {
  const auth = getAuth();
  const db = getDatabase();
  const disptch = useDispatch();
  const navigate = useNavigate();
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
      signInWithEmailAndPassword(auth, loginData.email, loginData.password)
        .then((res) => {
          if (res.user.emailVerified == false) {
            toast.error("Your email is not Verified", {
              position: "top-center",
              autoClose: 3000,
              closeOnClick: true,
              theme: "light",
            });
          } else {
            console.log(res.user.uid);
            set(ref(db, "users/" + res.user.uid), {
              username: res.user.displayName,
              email: res.user.email,
              photoURL: res.user.photoURL,
            }).then(() => {
              toast.success("Login successfull...", {
                position: "top-center",
                autoClose: 3000,
                closeOnClick: true,
                theme: "light",
              });
              localStorage.setItem("user", JSON.stringify(res.user));
              disptch(logeduser(res.user));
              setTimeout(() => {
                navigate("/");
              }, 1500);
            });
          }
        })
        .catch((error) => {
          if (error.code.includes("auth/invalid-email")) {
            setEmailError("Enter a valid email !");
          } else if (error.code.includes("auth/invalid-credential")) {
            toast.error("Account not found! Please Sign Up", {
              position: "top-center",
              autoClose: 5000,
              closeOnClick: true,
              theme: "light",
            });
          } else if (error.code.includes("auth/too-many-requests")) {
            toast.error("Too many request! Please try again after sometime", {
              position: "top-center",
              autoClose: 5000,
              closeOnClick: true,
              theme: "light",
            });
          }
        });
    }
  };
  const provider = new GoogleAuthProvider();
  const hendelgoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        GoogleAuthProvider.credentialFromResult(res);
        set(ref(db, "users/" + res.user.uid), {
          username: res.user.displayName,
          email: res.user.email,
          photoURL: res.user.photoURL,
        }).then(() => {
          toast.success("Login successfull...", {
            position: "top-center",
            autoClose: 3000,
            closeOnClick: true,
            theme: "light",
          });
          localStorage.setItem("user", JSON.stringify(res.user));
          disptch(logeduser(res.user));
          setTimeout(() => {
            navigate("/");
          }, 1500);
        });
      })
      .catch((error) => {
        console.log(errorMessage);
        const errorMessage = error.message;
      });
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
                  src="/FZ-app-login-logo.png"
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
                    className="w-full border box-border outline-none px-[15px] py-3 rounded-3xl border-solid border-[#c0c0c0]"
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
                    className="w-full outline-none border-none px-[15px] py-3 rounded-3xl"
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
              <div className="w-full flex flex-col justify-start gap-[10px] mb-2 mt-7">
                <div className="m-auto">
                  <button
                    onClick={hendelgoogle}
                    className="flex items-center gap-3 text-xl shadow-all py-3 px-20 rounded-3xl hover:bg-slate-200"
                  >
                    <FcGoogle className="text-4xl" />
                    Continue with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogIn;
