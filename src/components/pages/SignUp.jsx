import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <section className="container">
        <div className="w-[550px] m-auto">
          <div className="shadow-[#00000059_0px_5px_15px] my-16  rounded-3xl py-10">
            <div className="px-12 text-center">
              <div className="w-24 text-center m-auto">
                <img
                  src="/public/FZ-app-login-logo.png"
                  alt="FZ-app-login-logo"
                />
              </div>
              {/* <span className="text-primary font-nunitoFont uppercase tracking-[2px] block font-bold text-3xl mt-2">
                Sign Up
              </span> */}
              <h3 className="text-primary text-3xl font-bold font-nunitoFont uppercase mt-3">
                Get started with easily Sign Up
              </h3>
              <p className="text-lg font-normal font-nunitoFont text-secandari mb-2">
                Free register and you can enjoy it
              </p>
            </div>
            <form className="w-full bg-[white] flex flex-col items-center px-20">
              <input
                type="text"
                placeholder="Username"
                className="w-full font-nunitoFont mb-[1.25em] p-[0.8em] border box-border px-[15px] py-3 rounded-3xl border-solid border-[#c0c0c0]"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full font-nunitoFont mb-[1.25em] p-[0.8em] border box-border px-[15px] py-3 rounded-3xl border-solid border-[#c0c0c0]"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full font-nunitoFont mb-[1.25em] p-[0.8em] border box-border px-[15px] py-3 rounded-3xl border-solid border-[#c0c0c0]"
              />
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full font-nunitoFont mb-[1.25em] p-[0.8em] border box-border px-[15px] py-3 rounded-3xl border-solid border-[#c0c0c0]"
              />

              
              <div className=" flex items-center mb-[1.25em]">
                <input className="mr-2" id="okayToEmail" type="checkbox" />
                <label for="okayToEmail" className="checkbox">
                  I want to join the newsletter
                </label>
              </div>
              <button className="w-full text-lg font-semibold font-nunitoFont text-slate-50 shadow-[#0000003d_0px_3px_8px] bg-navegrey border cursor-pointer p-[0.625em] rounded-[20px] border-navegrey hover:text-navegrey hover:bg-[white] hover:transition-[0.5s] hover:border-solid hover:border-navegrey">
                Sign up
              </button>
            </form>
            <div className="text-center mt-4">
                <p className="text-base text-[#747474] mb-2 font-nunitoFont">
                  Already have an account?
                  <span className="text-base underline text-navegrey cursor-pointer font-extrabold ml-px font-nunitoFont">
                    <Link to="/">Login</Link>
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
