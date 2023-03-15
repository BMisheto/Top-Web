import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import Message from "../../components/message/Message";
import { Link } from "react-router-dom";
import LoginLoading from "../../components/loading/LoginLoading";
import { login } from "../../features/actions/userActions";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;

  const redirect = location.state?.from || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <div className="">
      <main className="min-h-[500px] ">
        <div className="subpixel-antialiased  bg-hero-cover bg-no-repeat bg-center bg-cover  min-h-screen flex flex-row justify-around items-center font-sans    mx-auto lg:justify-around lg:align-center lg:text-centen  p-3 lg:p-0">
          {/* central div */}

          <div className="inset-0 w-full">
            {/* login */}
            <div>
              {/* description */}
              <div className="flex flex-col justify-center content-center items-center text-center space-y-3 p-5">
                <h1 className="text-[18px] font-bold">Login</h1>
              </div>

              {/* form */}

              <div>
                {loading ? (
                  <LoginLoading />
                ) : (
                <form
                  onSubmit={submitHandler}
                  className="flex flex-col justify-start  content-center items-center space-y-4 w-full"
                >
                  <input
                     className="p-2 border bg-none outline-none rounded-xl placeholder:text-gray-600
                     placeholder:text-[13px]
                     placeholder:pl-4 min-w-[300px] md:min-w-[400px] h-[60px] text-[15px]"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email"
                  />

                  <input
                    className="p-2 border bg-none outline-none rounded-xl placeholder:text-gray-600
                    placeholder:text-[13px]
                    placeholder:pl-4 min-w-[300px] md:min-w-[400px] h-[60px] text-[15px]"
                    type="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="password"
                  />

                  <div className="flex flex-row space-x-2 justify-start  text-left p-1 text-[12px] md:text-[13px]">
                    <h1 className="">Don't remember your passsword?</h1>
                    <Link
                      to="/forgot-password"
                      className="text-red-600 text-[13px] md:text-[15px]"
                    >
                      Reset
                    </Link>
                  </div>

                  {/* message */}

                  {error && <Message type={"error"}>{error}</Message>}

                  {/* button */}

                  <button
                    type="submit"
                    className="p-2  bg-none outline-none rounded-xl bg-blue-600 text-white  hover:bg-blue-700  min-w-[300px] md:min-w-[400px] h-[60px] text-[13px] md:text-[16px]  m-1 drop-shadow-lg shadow-blue-500/50 "
                  >
                    Login
                  </button>
                </form>)}
              </div>

              {/* Register */}
              <div className="flex flex-col justify-center content-center items-center text-center space-y-3 p-5">
                <h1 className="text-[15px] ">
                  Dont have an account ?{" "}
                  <span className="font-bold">
                    <Link to="/register">Sign Up</Link>
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

export default Login;
