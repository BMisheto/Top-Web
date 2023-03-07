import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="">
      <main className="min-h-[500px] ">
        <div className="subpixel-antialiased  bg-hero-cover bg-no-repeat bg-bottom bg-cover  min-h-screen flex flex-row justify-around items-center font-sans    mx-auto lg:justify-around lg:align-center lg:text-centen  p-3 lg:p-0">
          {/* central div */}

          <div className="inset-0 w-full">
            {/* login */}
            <div>
              {/* description */}
              <div className="flex flex-col justify-center content-center items-center text-center space-y-3 p-5">
                <h1 className="text-[18px] font-bold">Create Account</h1>
              </div>

              {/* form */}

              <div>
                <div>
                  <form className="flex flex-col  content-center items-center space-y-4 w-full">
                    <input
                      className="p-2 border-b bg-gray-100 outline-none  placeholder:text-gray-600
                          placeholder:text-[13px]
                          placeholder:pl-4 min-w-[300px] md:min-w-[400px] h-[60px] text-[15px] rounded-xl"
                      required
                      placeholder="Firstname"
                    />

                    <input
                      className="p-2 border-b bg-gray-100 outline-none  placeholder:text-gray-600
                          placeholder:text-[13px]
                          placeholder:pl-4 min-w-[300px] md:min-w-[400px] h-[60px] text-[15px] rounded-xl"
                      required
                      placeholder="Lastname"
                    />

                    <input
                      className="p-2 border-b bg-gray-100 outline-none  placeholder:text-gray-600
                          placeholder:text-[13px]
                          placeholder:pl-4 min-w-[300px] md:min-w-[400px] h-[60px] text-[15px] rounded-xl"
                      required
                      placeholder="Mobile"
                    />

                    <input
                      className="p-2 border-b bg-gray-100 outline-none  placeholder:text-gray-600
                          placeholder:text-[13px]
                          placeholder:pl-4 min-w-[300px] md:min-w-[400px] h-[60px] text-[15px] rounded-xl"
                      required
                      placeholder="Email"
                    />

                    <input
                      className="p-2 border-b bg-gray-100 outline-none  placeholder:text-gray-600
                             placeholder:text-[13px]
                             placeholder:pl-4 min-w-[300px] md:min-w-[400px] h-[60px] text-[15px] rounded-xl"
                      type="Password"
                      required
                      placeholder="password"
                    />

                    <input
                      className="p-2 border-b bg-gray-100 outline-none  placeholder:text-gray-600
                              placeholder:text-[13px]
                              placeholder:pl-4 min-w-[300px] md:min-w-[400px] h-[60px] text-[15px] rounded-xl"
                      type="Password"
                      required
                      placeholder="Confirm Password"
                    />

                    <button
                      type="submit"
                      className="p-2  bg-none outline-none rounded-xl bg-blue-600 text-white  hover:bg-blue-700  min-w-[300px] md:min-w-[400px] h-[60px] text-[13px] md:text-[16px] drop-shadow-lg shadow-blue-500/50  m-1"
                    >
                      Create Account
                    </button>
                  </form>
                </div>
              </div>

              {/* Register */}
              <div className="flex flex-col justify-center content-center items-center text-center space-y-3 p-5">
                <h1 className="text-[15px] ">
                  Already have an account?{" "}
                  <span className="font-bold">
                    <Link to="/login">Sign In</Link>
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Register;
