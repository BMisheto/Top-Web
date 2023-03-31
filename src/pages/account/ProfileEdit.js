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
import { BsArrowLeft, BsCheck, BsX } from "react-icons/bs";
import UploadingLoader from "../../components/loading/UploadingLoader";
import { USER_UPDATE_PROFILE_RESET } from "../../features/constants/userConstants";
import { HiOutlineUpload } from "react-icons/hi";

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
  const [bio, setBio] = useState("");
  const [company, setCompany] = useState("");
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
        navigate("/account");
      } else {
        // WE HAVE THE USER INFO SO WE SET OUR STATE
        setFirstname(user.first_name);
        setLastname(user.last_name);
        setEmail(user.email);
        setBio(user.bio);
        setCompany(user.company);
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
          bio: bio,
          company: company,
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
      <div className="subpixel-antialiased min-h-screen inset-0 flex flex-col justify-center items-center font-sans    mx-auto  p-3  mt-[70px] ">
        <div className="flex flex-row justify-between items-center content-center w-[90%] md:w-3/4">
          {/* bac to profile */}
          <motion.div
            onClick={() => navigate(-1)}
            className="mb-[20px] flex flex-row items-center content-center justify-center text-gray-500 hover:text-black min-w-[100px] rounded-full p-1 md:p-2 gap-1 md:gap-2 cursor-pointer"
          >
            <BsArrowLeft />
            <h1>Back</h1>
          </motion.div>
        </div>
        {/* main div */}
        <div className="flex flex-col justify-start items-start content-start gap-3  md:gap-4 w-full md:w-[80%]">
          {/* Heading */}
          <div className="flex flex-col items-start justify-start font-bold text-lg md:text-xl gap-2">
            <h1>Edit Profile</h1>
          </div>

          <div className="flex flex-col lg:flex-row justify-start content-start items-start gap-2 md:gap-3 w-full ">
            {/* image */}
            <div
             
              className="flex flex-col md:flex-row justify-center md:justify-start gap-2 w-full  rounded-xl p-1 md:p-2 mb-[30px] bg-gray-50 border border-gray-100"
            >
              <div className=" w-full flex flex-col gap-2 p-2 md:p-3">
              <h1 className="text-[13px] md:text-[14px] font-semibold text-gray-500">Profile photo</h1>
                <img
                  src={`${REACT_APP_URL}${profile}`}
                  className=" h-[250px] w-full  md:h-[300px] md:w-[300px] rounded-xl object-center object-cover drop-shadow-lg shadow-blue-600/95"
                />
              </div>
              {uploading ? (
                <UploadingLoader />
              ) : (
                <div className="p-2 md:p-3 w-full flex flex-col gap-2">
                  <h1 className="text-[13px] md:text-[14px]">
                    Choose a new profile photo
                  </h1>
                  <input
                    class="block w-full text-sm text-gray-900 bg-white rounded-md border border-gray-100 cursor-pointer focus:outline-none "
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
            </div>

            {/* form */}
            <div
              
              className="transition duration-100 delay-100 ease-in-out  w-full rounded-lg p-2 md:p-2"
            >
              <form
                onSubmit={SubmitHandler}
                className="flex flex-col justify-center space-y-3 content-center items-center gap-3 md:gap-4"
              >
                {/* items Edit */}
                <div className="flex flex-col  space-y-3 md:space-y-0 md:grid md:grid-cols-2 gap-3 md:gap-4 w-full">
                  {/* firstname */}
                  <div className="flex  flex-col gap-1 ">
                    <h1 className="text-[13px] md:text-[14px] font-semibold text-gray-500">First Name:</h1>
                    <input
                      className="p-2 border border-gray-100 min-h-[50px] bg-none outline-none rounded-xl placeholder:text-gray-600
                                    placeholder:text-[13px] placeholder:pl-4  text-[15px] "
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      required
                      placeholder="First name"
                    />
                  </div>

                  {/* Lastname */}
                  <div className="flex  flex-col gap-1 ">
                    <h1 className="text-[13px] md:text-[14px] font-semibold text-gray-500">Last Name:</h1>
                    <input
                     className="p-2 border border-gray-100 min-h-[50px] bg-none outline-none rounded-xl placeholder:text-gray-600
                     placeholder:text-[13px] placeholder:pl-4  text-[15px] "
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      placeholder="Last name"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex  flex-col gap-1 ">
                    <h1 className="text-[13px] md:text-[14px] font-semibold text-gray-500">Email:</h1>
                    <input
                       className="p-2 border border-gray-100 min-h-[50px] bg-none outline-none rounded-xl placeholder:text-gray-600
                       placeholder:text-[13px] placeholder:pl-4  text-[15px] "
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                  </div>

                 

                  {/* Mobile */}
                  <div className="flex  flex-col gap-1 ">
                    <h1 className="text-[13px] md:text-[14px] font-semibold text-gray-500">Mobile:</h1>
                    <input
                      className="p-2 border border-gray-100 min-h-[50px] bg-none outline-none rounded-xl placeholder:text-gray-600
                      placeholder:text-[13px] placeholder:pl-4   text-[15px] "
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="Mobile"
                    />
                  </div>

                  {/* Country */}
                  <div className="flex  flex-col gap-1 ">
                    <h1 className="text-[13px] md:text-[14px] font-semibold text-gray-500">Country:</h1>
                    <input
                       className="p-2 border border-gray-100 min-h-[50px] bg-none outline-none rounded-xl placeholder:text-gray-600
                       placeholder:text-[13px] placeholder:pl-4  text-[15px] "
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="Country"
                    />
                  </div>
                </div>

                 {/* Email */}
                 <div className="flex  flex-col gap-1 w-full">
                    <h1 className="text-[13px] md:text-[14px] font-semibold text-gray-500">Company:</h1>
                    <input
                       className="p-2 border border-gray-100 min-h-[50px] bg-none outline-none rounded-xl placeholder:text-gray-600
                       placeholder:text-[13px] placeholder:pl-4    text-[15px] "
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Company"
                    />
                  </div>
                {/* Email */}
                <div className="flex  flex-col gap-1 w-full">
                  <h1 className="text-[13px] md:text-[14px] font-semibold text-gray-500">Bio:</h1>
                
                  <textarea
                     className="p-2 border border-gray-100   bg-none outline-none rounded-xl placeholder:text-gray-600
                     placeholder:text-[13px] placeholder:pl-4  max-h-[160px]   text-[15px] "
                    maxLength={150}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Bio"
                  ></textarea>
                </div>

                {/* password */}
                <div className="w-full p-1">
                  {/* title */}
                  <div className="flex flex-row justify-start items-center content-center text-[13px] md:text-[15px] p-1">
                    
                      <h1
                        onClick={() => navigate('/account/password')}
                        className="font-[400] cursor-pointer text-blue-500"
                      >
                        Change Your Password
                      </h1>
                    

                   
                  </div>

                
                </div>

                {/* update and Cancel */}
                <div className="flex flex-row justify-between items-center content-center text-[13px] md:text-[15px] w-full p-1">
                  <button
                    onClick={() => navigate("/account")}
                    className="flex flex-row justify-between items-center content-center gap-1  h-[35px] font-[450] text-red-600"
                  >
                    <h1>Cancel</h1>
                    
                  </button>
                  <button
                    type="submit"
                    className="flex flex-row justify-center items-center min-w-[100px] content-center gap-1  h-[35px]  rounded-2xl  bg-green-600 text-white p-2 font-[450] "
                  >
                    <h1>Update</h1>
                    <HiOutlineUpload className="text-lg md:text-xl" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* navigation */}
          <div></div>
        </div>
      </div>
    </motion.main>
  );
}

export default ProfileEdit;
