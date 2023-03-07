import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import {
  getUserDetails,
  updateUserProfile,
} from "../../features/actions/userActions";

import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { REACT_APP_URL } from "../../utilities/utils";
import axios from "axios";

import Message from "../../components/message/Message";
import { BsCheck, BsX } from "react-icons/bs";
import UploadingLoader from "../../components/loading/UploadingLoader";
import { USER_UPDATE_PROFILE_RESET } from "../../features/constants/userConstants";

function ProfileEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [profile, setProfile] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(false);
  const [message, setMessage] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [profileMessage, setProfileMessage] = useState("");
  const [updateError, setUpdateError] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changePassword, setChangePassword] = useState(false);

  // makign sure user is logged in
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  // get user details
  const userDetails = useSelector((state) => state.userDetails);

  const { user, loading, error } = userDetails;

  // updating user details
  const userUpdateProfle = useSelector((state) => state.userUpdateProfle);

  const { success } = userUpdateProfle;

  // redirect
  const redirect = location.state?.from || "/";

  const changepassword = () => {
    setChangePassword(true);
  };

  useEffect(() => {
    // USER IS NOT LOGGED IN
    if (!userInfo) {
      navigate(redirect);
    } else {
      // WE DON'T HAVE THE USER INFO SO WE DISPATCH AN ACTION TO GET THE DATA
      if (!user || !user.email || success || userInfo._id !== user._id) {
        /* (userInfo._id !== user._id) BECAUSE DURING USER EDIT STATE CHANGES SO WE WANT TO FIRE DISPATCH AGAIN HERE IF THE DATA ISN'T SAME AS THE USER AS WE ARE LOGGED IN  */
        // RESETTING PROFILE BEFORE FETCHING DATA SO THAT WE ALWAYS HAVE UPDATED DATA
        dispatch({ type: USER_UPDATE_PROFILE_RESET });

        // FETCHING USER DATA
        dispatch(getUserDetails("profile"));
      } else {
        // WE HAVE THE USER INFO SO WE SET OUR STATE
        setFirstname(user.first_name);
        setLastname(user.last_name);
        setEmail(user.email);
        setMobile(user.mobile);
        setCountry(user.country);
        setProfile(user.profile_photo);
      }
    }
  }, [dispatch, navigate, user, userInfo, redirect, success]);

  const SubmitHandler = (e) => {
    e.preventDefault();

    /* DISABLE SUBMIT IF PASSWORDS DON'T MATCH */
    if (password !== confirmPassword) {
      setUpdateError(true);
      setProfileMessage("Wrong password");
    } else {
      dispatch(
        updateUserProfile({
          id: user._id,
          first_name: firstname,
          last_name: lastname,
          mobile: mobile,
          country: country,
          email: email,
          password: password,
        })
      );
      setProfileMessage("Your Profile information was updated");
    }
  };

  const id = userInfo.id;

  const profileImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append("image", file);
    formData.append("user_id", id);

    setUploading(true);

    try {
      const config = {
        header: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        `${REACT_APP_URL}/users/profile/upload/`,
        formData,
        config
      );
      setProfile(data);

      setUploading(false);
      setProfilePhoto(true);
    } catch (error) {
      setUploading(false);
    }
  };
  return (
    <motion.main className="min-h-[500px]">
      <div className="subpixel-antialiased min-h-screen inset-0 flex justify-center items-center font-sans    mx-auto  p-3  mt-[70px] ">
        {/* main div */}
        <div className="flex flex-col justify-start items-start content-start gap-3  md:gap-4 w-full md:w-[80%]">
          {/* Heading */}
          <div className="flex flex-col items-start justify-start font-bold text-lg md:text-2xl">
            <h1>Edit Profile</h1>
          </div>

          <div className="flex flex-col lg:flex-row justify-start content-start items-start gap-2 md:gap-3 w-full">
            {/* image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 1, scale: 1 }}
              className="flex flex-col md:flex-row justify-center md:justify-start gap-2 w-full bg-[#fafafa] rounded-xl p-1 md:p-2 border-t border-l border-r"
            >
              <div className="p-1 md:p-2 w-full">
                <img
                  src={`${REACT_APP_URL}${profile}`}
                  className=" h-[250px] w-full  md:h-[300px] md:w-[300px] rounded-xl object-center object-cover drop-shadow-xl shadow-blue-600/95"
                />
              </div>
              {uploading ? (
                <UploadingLoader />
              ) : (
                <div className="p-1 md:p-2 w-full flex flex-col gap-2">
                  <h1 className="text-[13px] md:text-[14px]">
                    Choose a new profile photo
                  </h1>
                  <input
                    class="block w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 cursor-pointer focus:outline-none "
                    aria-describedby="file_input_help"
                    id="file_input"
                    type="file"
                    onChange={profileImageUpload}
                  />

                  {profilePhoto && (
                    <Message type="success">Profile photo was uploaded</Message>
                  )}
                </div>
              )}
            </motion.div>

            {/* form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 1, scale: 1 }}
              className="transition duration-100 delay-100 ease-in-out bg-[#fafafa] border-t border-l border-r w-full rounded-lg p-1 md:p-2"
            >
              <form
                onSubmit={SubmitHandler}
                className="flex flex-col justify-center space-y-3 content-center items-center gap-2 md:gap-3"
              >
                {/* items Edit */}
                <div className="flex flex-col  space-y-3 md:space-y-0 md:grid md:grid-cols-2 gap-2 md:gap-3 w-full">
                  {/* firstname */}
                  <div className="flex  flex-col gap-1 ">
                    <h1 className="text-[13px] md:text-[14px]">First Name:</h1>
                    <input
                      className="p-2 border bg-none outline-none rounded-md placeholder:text-gray-600
                                    placeholder:text-[13px] placeholder:pl-4 bg-white   text-[15px]"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      required
                      placeholder="First name"
                    />
                  </div>

                  {/* Lastname */}
                  <div className="flex  flex-col gap-1 ">
                    <h1 className="text-[13px] md:text-[14px]">Last Name:</h1>
                    <input
                      className="p-2 border bg-none outline-none rounded-md placeholder:text-gray-600
                                    placeholder:text-[13px] placeholder:pl-4 bg-white  text-[15px]"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      placeholder="Last name"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex  flex-col gap-1 ">
                    <h1 className="text-[13px] md:text-[14px]">Email:</h1>
                    <input
                      className="p-2 border bg-none outline-none rounded-md placeholder:text-gray-600
                                    placeholder:text-[13px] placeholder:pl-4 bg-white  text-[15px]"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                  </div>

                  {/* Mobile */}
                  <div className="flex  flex-col gap-1 ">
                    <h1 className="text-[13px] md:text-[14px]">Mobile:</h1>
                    <input
                      className="p-2 border bg-none outline-none rounded-md placeholder:text-gray-600
                                    placeholder:text-[13px] placeholder:pl-4 bg-white  text-[15px]"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="Mobile"
                    />
                  </div>

                  {/* Country */}
                  <div className="flex  flex-col gap-1 ">
                    <h1 className="text-[13px] md:text-[14px]">Country:</h1>
                    <input
                      className="p-2 border bg-none outline-none rounded-md placeholder:text-gray-600
                                    placeholder:text-[13px] placeholder:pl-4 bg-white  text-[15px]"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="Country"
                    />
                  </div>
                </div>

                {/* password */}
                <div className="w-full p-1">
                  {/* title */}
                  <div className="flex flex-row justify-start items-center content-center text-[13px] md:text-[15px] p-1">
                    {changePassword == false && (
                      <h1
                        onClick={changepassword}
                        className="font-[400] cursor-pointer text-blue-500"
                      >
                        Change Your Password
                      </h1>
                    )}

                    {changePassword == true && (
                      <h1
                        onClick={() => setChangePassword(false)}
                        className="font-[300] cursor-pointer text-red-500 flex flex-row items-center content-center"
                      >
                        Cancel{" "}
                        <span>
                          <BsX className="text-[14px]" />
                        </span>
                      </h1>
                    )}
                  </div>

                  {changePassword && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 1, scale: 1 }}
                      className="flex flex-col md:flex-row justify-between content-center items-center w-full gap-2"
                    >
                      {/* password */}
                      <div className="flex  flex-col gap-1 w-full">
                        <h1 className="text-[13px] md:text-[14px]">
                          Password:
                        </h1>
                        <input
                          className="p-2 border bg-none outline-none rounded-md placeholder:text-gray-600
                                            placeholder:text-[13px] placeholder:pl-4 bg-white   text-[15px]"
                          type="password"
                          onChange={(e) => setpassword(e.target.value)}
                          placeholder="Password"
                        />
                      </div>

                      {/* confirmPassword */}
                      <div className="flex  flex-col gap-1 w-full">
                        <h1 className="text-[13px] md:text-[14px]">
                          Confirm Password:
                        </h1>
                        <input
                          className="p-2 border bg-none outline-none rounded-md placeholder:text-gray-600
                                            placeholder:text-[13px] placeholder:pl-4 bg-white   text-[15px]"
                          required
                          type="password"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="confirm Password"
                        />
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* update and Cancel */}
                <div className="flex flex-row justify-between items-center content-center text-[13px] md:text-[15px] w-full p-1">
                  <button
                    onClick={() => navigate("/account")}
                    className="flex flex-row justify-between items-center content-center gap-1  h-[35px] font-[450] text-red-600"
                  >
                    <h1>Cancel</h1>
                    <BsX className="text-lg md:text-xl" />
                  </button>
                  <button
                    type="submit"
                    className="flex flex-row justify-between items-center content-center gap-1  h-[35px]  rounded-md  text-green-600 font-[450] "
                  >
                    <h1>Update</h1> <BsCheck className="text-lg md:text-xl" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* navigation */}
          <div></div>
        </div>
      </div>
    </motion.main>
  );
}

export default ProfileEdit;
