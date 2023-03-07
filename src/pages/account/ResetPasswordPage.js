import React, { useEffect, useState } from 'react'
import { BsEyeFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router';
import LoginLoading from '../../components/loading/LoginLoading';
import Message from '../../components/message/Message';
import { userResetPassword } from '../../features/actions/userActions';

function ResetPasswordPage() {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const params = useParams();

  const [password, setPassword] = useState("");
  const [hide, setHide] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [email, setEmail] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userReset = useSelector((state) => state.userPasswordReset);
  const {
    error: error,
    loading: loading,
    message: message,
    success: success,
  } = userReset;

  const redirect = location.state?.from || "/";

  var token = params.token;
  var encoded_pk = params.encoded_pk;

  useEffect(() => {
    // if (!token & !encoded_pk) {
    //   navigate(redirect);
    // }
  }, [navigate, redirect, token, encoded_pk]);

  const submitHandler = (e) => {
    e.preventDefault();
    /* DISABLE SUBMIT IF PASSWORDS DON'T MATCH */
    if (password !== confirmPassword) {
      setPasswordMessage("Passwords do not match");
    } else {
      dispatch(userResetPassword(password, token, encoded_pk));
    }
  };

  const showPassword = () => {
    setHide(!hide);
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
              <h1 className="text-[18px] font-bold">Reset Password</h1>

              <p className="max-w-md text-gray-600 text-[14px] ">
                Please enter a new password for your account
              </p>
            </div>

            {/* form */}

            <div>
              {loading ? (
                <LoginLoading />
              ) : (
                <form
                  onSubmit={submitHandler}
                  className="flex flex-col justify-start  content-center items-center gap-2 md:gap-3 w-full"
                >
                  <input
                    className="p-2 border bg-none outline-none rounded-xl placeholder:text-gray-600
                                  placeholder:text-[13px]
                                  placeholder:pl-4 min-w-[300px] md:min-w-[400px] h-[60px] text-[15px]"
                    type={hide ? "password" : ""}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="New Password"
                  />

                  <input
                    className="p-2 border bg-none outline-none rounded-xl placeholder:text-gray-600
                                  placeholder:text-[13px]
                                  placeholder:pl-4 min-w-[300px] md:min-w-[400px] h-[60px] text-[15px]"
                    type={hide ? "password" : ""}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder="Confirm New Password"
                  />

                  <h1
                    onClick={showPassword}
                    className="text-[13px] cursor-pointer  flex flex-row items-center content-center justify-start gap-1   "
                  >
                    Show password
                    <BsEyeFill />
                  </h1>

                  {/* message */}

                  {error && <Message type={"error"}>{message}</Message>}
                  {success ? <Message type="success">{message}</Message> : ""}

                  {/* button */}

                  <button
                    type="submit"
                    className="p-2  bg-none outline-none rounded-xl bg-blue-600 text-white  hover:bg-blue-700  min-w-[300px] md:min-w-[400px] h-[60px] text-[13px] md:text-[16px]  m-1 drop-shadow-lg shadow-blue-500/50 "
                  >
                    Change Password
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

export default ResetPasswordPage