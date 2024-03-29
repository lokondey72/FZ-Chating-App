import { Link } from "react-router-dom";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { FaCheckCircle } from "react-icons/fa";
import { MdCancel, MdError } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const auth = getAuth();
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  const [userError, setUserError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const heandelSignUp = () => {
    if (!userName) {
      setUserError({ nameError: "Please enter a username!" });
      console.log("invalid username");
    } else if (!email) {
      setUserError({ emailError: "Please enter a email !" });
      console.log("invalid Email");
    } else if (!password) {
      setUserError({ passwordError: "Please enter a Password !" });
      console.log("invalid password");
    } else if (!confirmPassword) {
      setUserError({ confirmPasswordError: "Password don't match !" });
      console.log("invalid confirm password");
    } else {
      createUserWithEmailAndPassword(
        auth,
        email,
        password,
        confirmPassword,
        userName
      )
        .then(() => {
          console.log("SignUp successfull");
          toast.success("SignUp successfull", {
            position: "top-center",
            autoClose: 5000,
            closeOnClick: true,
            theme: "light",
          });
          setUserName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code.includes("auth/invalid-email")) {
            setUserError({ emailError: "invalid email !" });
          }
          // else if (error.code.includes("auth/email-already-in-use")) {
          //   setUserError({ emailError: "You already have an account!" });
          // }
          else if (error.code.includes("auth/weak-password")) {
            setUserError({ passwordError: "Please strong password!" });
          } else if (error.code.includes("auth/weak-password")) {
            setUserError({ confirmPasswordError: "Please strong password!" });
          }
        });
    }
  };
  return (
    <>
      <section className="container">
        <ToastContainer />
        <div className="w-[560px] m-auto">
          <div className="shadow-[#00000059_0px_5px_15px] my-16  rounded-3xl py-10">
            <div className="px-12 text-center">
              <div className="w-24 text-center m-auto">
                <img
                  src="/public/FZ-app-login-logo.png"
                  alt="FZ-app-login-logo"
                />
              </div>
              <h3 className="text-primary text-3xl font-bold font-nunitoFont uppercase mt-3">
                Get started with easily Sign Up
              </h3>
              <p className="text-lg font-normal font-nunitoFont text-secandari mb-2">
                Free register and you can enjoy it
              </p>
            </div>
            <div className="w-full bg-[white] flex flex-col items-center px-16">
              <div className="flex gap-2">
                <div>
                  <input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    type="text"
                    placeholder="Username"
                    className="w-full font-nunitoFont p-[0.8em] border box-border px-[15px] py-3 rounded-3xl border-solid border-[#c0c0c0]"
                  />
                  {userError.nameError && (
                    <p className="pl-2 flex items-center gap-1 text-red-400">
                      <MdError />
                      {userError.nameError}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email address"
                    className="w-full font-nunitoFont p-[0.8em] border box-border px-[15px] py-3 rounded-3xl border-solid border-[#c0c0c0]"
                  />
                  {userError.emailError && (
                    <p className="pl-2 flex items-center gap-1 text-red-400">
                      <MdError />
                      {userError.emailError}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <div className="my-[1.25em]">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className="w-full font-nunitoFont p-[0.8em] border box-border px-[15px] py-3 rounded-3xl border-solid border-[#c0c0c0]"
                  />
                  {userError.passwordError && (
                    <p className="pl-2 flex items-center gap-1 text-red-400">
                      <MdError />
                      {userError.passwordError}
                    </p>
                  )}
                </div>
                <div className="my-[1.25em]">
                  <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    placeholder="Confirm password"
                    className="w-full font-nunitoFont p-[0.8em] border box-border px-[15px] py-3 rounded-3xl border-solid border-[#c0c0c0]"
                  />
                  {userError.confirmPasswordError && (
                    <p className="pl-2 flex items-center gap-1 text-red-400">
                      <MdError />
                      {userError.confirmPasswordError}
                    </p>
                  )}
                </div>
              </div>

              <div className=" flex items-center mb-[1.25em]">
                <input className="mr-2" id="okayToEmail" type="checkbox" />
                <label for="okayToEmail" className="checkbox">
                  I want to join the newsletter
                </label>
              </div>
              <button
                onClick={heandelSignUp}
                className="w-full text-lg font-semibold font-nunitoFont text-slate-50 shadow-[#0000003d_0px_3px_8px] bg-navegrey border cursor-pointer p-[0.625em] rounded-[20px] border-navegrey hover:text-navegrey hover:bg-[white] hover:transition-[0.5s] hover:border-solid hover:border-navegrey"
              >
                Sign up
              </button>
            </div>
            <div className="text-center mt-4">
              <p className="text-base text-[#747474] mb-2 font-nunitoFont">
                Already have an account?
                <span className="text-base underline text-navegrey cursor-pointer font-extrabold ml-px font-nunitoFont">
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
