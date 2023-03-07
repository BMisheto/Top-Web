import React, { useEffect, useState } from 'react'
import { BsEyeFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router';
import LoginLoading from '../../components/loading/LoginLoading';
import Message from '../../components/message/Message';
import { userEmailCheck, userResetPassword } from '../../features/actions/userActions';

function ForgotPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const emailCheck = useSelector((state) => state.userEmailCheck);
  const {
    error: error,
    loading: loading,
    message: message,
    success: success,
  } = emailCheck;

  const redirect = location.state?.from || "/";

  const submitHandler = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError(true);
      setErrorMessage("You did not add your email");
    } else {
      dispatch(userEmailCheck(email));
    }
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
                <h1 className="text-[18px] font-bold">Forgot Password</h1>

                <p className="max-w-md text-gray-600 text-[14px] ">
                  Please enter the email of your account
                </p>
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
                      value={email}
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Your Account Email"
                    />
                    {/* message */}

                    {error && <Message type={"error"}>{message}</Message>}

                    {/* button */}

                    <button
                      type="submit"
                      className="p-2  bg-none outline-none rounded-xl bg-blue-600 text-white  hover:bg-blue-700  min-w-[300px] md:min-w-[400px] h-[60px] text-[13px] md:text-[16px]  m-1 drop-shadow-lg shadow-blue-500/50 "
                    >
                      Request Change
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ForgotPassword