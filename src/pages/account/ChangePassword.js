import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import LoginLoading from "../../components/loading/LoginLoading";
import Message from "../../components/message/Message";
import { AiFillEye } from "react-icons/ai";
import { REACT_API_URL } from "../../utilities/utils";
import { useSelector } from "react-redux";

function ChangePassword() {
  const navigate = useNavigate();
  const [oldpassword, setOldpassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changePassword, setChangePassword] = useState(false);

  const [hide, setHide] = useState(true);

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (confirmPassword !== password) {
      setError(true);
      setMessage("Passwords do not march");
    } else {
      const formData = new FormData();
      formData.append("old", oldpassword);
      formData.append("new", password);

      fetch(`${REACT_API_URL}/users/change-password/${userInfo.id}/`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          setSuccess(true);
          setMessage(data.message);
        })
        .catch((error) => {
          setError(true);
          setMessage("error");
        });
    }
  };
  return (
    <div className="">
      <main className="min-h-[500px] ">
        <div className="subpixel-antialiased  bg-hero-cover bg-no-repeat bg-center bg-cover  min-h-screen flex flex-row justify-around items-center font-sans    mx-auto lg:justify-around lg:align-center lg:text-centen  p-3 lg:p-0">
          {/* central div */}

          <div className="inset-0 w-full flex flex-col items-center content-center justify-start ">
            <div className="flex flex-col justify-between items-center content-center w-[90%] md:w-3/4">
              {/* bac to profile */}
              <motion.div
                onClick={() => navigate(-1)}
                className="mb-[20px] flex flex-row items-center content-center justify-center text-gray-500 hover:text-black min-w-[100px] rounded-full p-1 md:p-2 gap-1 md:gap-2 cursor-pointer self-start"
              >
                <BsArrowLeft />
                <h1>Back</h1>
              </motion.div>
            </div>
            {/* login */}
            <div>
              {/* description */}
              <div className="flex flex-col justify-center content-center items-center text-center space-y-3 p-5">
                <h1 className="text-[18px] font-bold">Change Password</h1>
              </div>

              {/* form */}

              <div>
                {/* <LoginLoading /> */}

                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col justify-start  content-center items-center space-y-4 w-full"
                >
                  {/* <div className="flex  flex-col gap-1 w-full mb-[20px]">
                    <h1 className="text-[13px] md:text-[14px] font-semibold text-gray-500 flex flex-row justify-between items-center content-center">
                      Old Password:
                      <span className="cursor-pointer">
                        <AiFillEye onClick={() => setHide(!hide)} />
                      </span>
                    </h1>
                    <input
                      className="p-2 border border-gray-100 min-h-[50px] bg-none outline-none rounded-xl placeholder:text-gray-600
                                    placeholder:text-[13px] placeholder:pl-4  text-[15px] "
                      type={hide ? "password" : ""}
                      value={oldpassword}
                      onChange={(e) => setOldpassword(e.target.value)}
                      required
                      placeholder="Old Password"
                    />
                  </div> */}

                  <div className="flex  flex-col gap-1 w-full">
                    <h1 className="text-[13px] md:text-[14px] font-semibold text-gray-500 flex flex-row justify-between items-center content-center">
                      New Password:
                      <span className="cursor-pointer">
                        <AiFillEye onClick={() => setHide(!hide)} />
                      </span>
                    </h1>
                    <input
                      className="p-2 border border-gray-100 min-h-[50px] bg-none outline-none rounded-xl placeholder:text-gray-600
                                    placeholder:text-[13px] placeholder:pl-4  text-[15px] "
                      type={hide ? "password" : ""}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="New Password"
                    />
                  </div>
                  <div className="flex  flex-col gap-1 w-full">
                    <h1 className="text-[13px] md:text-[14px] font-semibold text-gray-500 flex flex-row justify-between items-center content-center">
                      New Password:
                      <span className="cursor-pointer">
                        <AiFillEye onClick={() => setHide(!hide)} />
                      </span>
                    </h1>
                    <input
                      className="p-2 border border-gray-100 min-h-[50px] bg-none outline-none rounded-xl placeholder:text-gray-600
                                    placeholder:text-[13px] placeholder:pl-4  text-[15px] "
                      type={hide ? "password" : ""}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      placeholder="Confirm New Password"
                    />
                  </div>

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

                  {error && <Message type="error">{message}</Message>}
                  {success && <Message type="success">{message}</Message>}

                  {/* button */}

                  <button
                    type="submit"
                    className="p-2  bg-none outline-none rounded-xl bg-blue-600 text-white  hover:bg-blue-700  min-w-[300px] md:min-w-[400px] h-[60px] text-[13px] md:text-[16px]  m-1 drop-shadow-lg shadow-blue-500/50 "
                  >
                    Change Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ChangePassword;
