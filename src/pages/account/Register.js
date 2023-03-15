import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { register } from "../../features/actions/userActions";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  /* STATE */
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const redirect = "/";

  const userRegister = useSelector((state) => state.userRegister);

  const { userInfo, loading, error } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(first_name, last_name, mobile, email, password));
    }
  };
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
                  <form
                    onSubmit={submitHandler}
                    className="flex flex-col  content-center items-center space-y-4 w-full"
                  >
                    <input
                      className="p-2 border bg-none outline-none rounded-xl placeholder:text-gray-600
                       placeholder:text-[13px]
                       placeholder:pl-4 min-w-[300px] md:min-w-[400px] h-[60px] text-[15px]"
                      required
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Firstname"
                    />

                    <input
                      className="p-2 border bg-none outline-none rounded-xl placeholder:text-gray-600
                       placeholder:text-[13px]
                       placeholder:pl-4 min-w-[300px] md:min-w-[400px] h-[60px] text-[15px]"
                      required
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Lastname"
                    />

                    <input
                      className="p-2 border bg-none outline-none rounded-xl placeholder:text-gray-600
                      placeholder:text-[13px]
                      placeholder:pl-4 min-w-[300px] md:min-w-[400px] h-[60px] text-[15px]"
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="Mobile(optional)"
                    />

                    <input
                      className="p-2 border bg-none outline-none rounded-xl placeholder:text-gray-600
                       placeholder:text-[13px]
                       placeholder:pl-4 min-w-[300px] md:min-w-[400px] h-[60px] text-[15px]"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Email"
                    />

                    <input
                      className="p-2 border bg-none outline-none rounded-xl placeholder:text-gray-600
                       placeholder:text-[13px]
                       placeholder:pl-4 min-w-[300px] md:min-w-[400px] h-[60px] text-[15px]"
                      type="Password"
                      onChange={(e) => setpassword(e.target.value)}
                      required
                      placeholder="password"
                    />

                    <input
                      className="p-2 border bg-none outline-none rounded-xl placeholder:text-gray-600
                       placeholder:text-[13px]
                       placeholder:pl-4 min-w-[300px] md:min-w-[400px] h-[60px] text-[15px]"
                      type="Password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
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
