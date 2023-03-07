import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { AiFillRightCircle } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { getUserDetails } from "../../../features/actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from "../../../features/constants/userConstants";
import { REACT_APP_URL } from "../../../utilities/utils";

function ProfileInformation() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [edit, setEdit] = useState(false);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const userDetails = useSelector((state) => state.userDetails);

  const { user, loading, error } = userDetails;

  /* WE NEED TO MAKE SURE USER IS LOGGED IN SO PULLING OUT USER LOGIN INFO */
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  //     const shipping = useSelector((state) => state.shippingAddress)

  //   const { shippingInfo } = shipping;

  /* PULLING OUT SUCCESS FROM userUpdateProfile, IF SUCCESS IS TRUE WE WILL RESET STATE */
  const userUpdateProfle = useSelector((state) => state.userUpdateProfle);

  const { success } = userUpdateProfle;

  let keyword = location.search;

  /* SENDING USER TO LOGIN PAGE IF NOT LOGGED IN & SHOW PROFILE DATA IF LOGGED IN */
  useEffect(() => {
    // USER IS NOT LOGGED IN
    if (!userInfo) {
      navigate("/login");
    } else {
      // WE DON'T HAVE THE USER INFO SO WE DISPATCH AN ACTION TO GET THE DATA
      if (!user || !user.email || success || userInfo._id !== user._id) {
        /* (userInfo._id !== user._id) BECAUSE DURING USER EDIT STATE CHANGES SO WE WANT TO FIRE DISPATCH AGAIN HERE IF THE DATA ISN'T SAME AS THE USER AS WE ARE LOGGED IN  */
        // RESETTING PROFILE BEFORE FETCHING DATA SO THAT WE ALWAYS HAVE UPDATED DATA
        dispatch({ type: USER_UPDATE_PROFILE_RESET });

        // FETCHING USER DATA
        dispatch(getUserDetails("profile"));

        // FETCHING USER ORDER DETAILS
      } else {
        // WE HAVE THE USER INFO SO WE SET OUR STATE
        setFirstname(user.first_name);
        setLastname(user.last_name);
        setEmail(user.email);
        setMobile(user.mobile);
        setCountry(user.country);
        setEdit(false);
      }
    }
  }, [dispatch, keyword, user, userInfo, success]);

  /* HANDLERS */
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 1, scale: 1 }}
      className="flex flex-col justify-start items-start content-start gap-3 md:gap-3"
    >
      <div className="flex flex-rows justify-between text-[15px] md:text-[21px]    font-bold p-2 w-full mb-[20px]">
        <div>Profile</div>
      </div>

      {/*Profile information*/}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 1, scale: 1 }}
        className="flex flex-col justify-around items-start content-center   gap-4   rounded-xl  border-t border-r border-l  p-2 md:p-3 w-full"
      >
        {/* Profile info */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-3 justify-evenly items-start content-start w-full">
          {/* image */}
          <div className="p-1 md:p-2">
            <img
              src={`${REACT_APP_URL}${user.profile_photo}`}
              className=" w-[250px] h-[200px] md:w-[300px] md:h-[300px]
                                        lg:w-full lg:h-[400px]   object-center object-cover rounded-lg  drop-shadow-xl transition duration-100 delay-100 ease-in-out"
              alt="profile photo"
            />
          </div>

          {/* information */}
          <div className="flex flex-col md:grid md:grid-cols-2 justify-start content-start items-start gap-2 md:gap-3 p-1 md:p-2  bg-gray-50 rounded-xl border border-gray-100 h-full w-full md:w-auto">
            {/* firstname */}
            <div
              className="flex flex-col justify-between
                                         text-[13px] md:text-[15px] p-2 md:p-3    "
            >
              <h1 className="text-gray-700 font-[450]">Firstname:</h1>
              <h2 className="text-[14px] md:text-[16px]"> {user.first_name}</h2>
            </div>

            {/* lastname */}
            <div
              className="flex flex-col justify-between
                                         text-[13px] md:text-[15px] p-2 md:p-3    "
            >
              <h1 className="text-gray-700 font-[450]">Lastname:</h1>
              <h2 className="text-[14px] md:text-[16px]"> {user.last_name}</h2>
            </div>

            {/* email */}
            <div
              className="flex flex-col justify-between
                                         text-[13px] md:text-[15px] p-2 md:p-3    "
            >
              <h1 className="text-gray-700 font-[450]">Email:</h1>
              <h2 className="text-[14px] md:text-[16px]"> {userInfo.email}</h2>
            </div>

            {/* phone number */}
            <div
              className="flex flex-col justify-between
                                         text-[13px] md:text-[15px] p-2 md:p-3    "
            >
              <h1 className="text-gray-700 font-[450]">Mobile:</h1>
              <h2 className="text-[14px] md:text-[16px]"> {userInfo.mobile}</h2>
            </div>

            {/* Country*/}
            <div
              className="flex flex-col justify-between
                                         text-[13px] md:text-[15px] p-2 md:p-3    "
            >
              <h1 className="text-gray-700 font-[450]">Country:</h1>
              <h2 className="text-[14px] md:text-[16px]">
                {" "}
                {userInfo.country}
              </h2>
            </div>
          </div>
        </div>
      </motion.div>

      {/* loading */}

      {/* {loading && ( <ItemLoading /> )} */}
    </motion.div>
  );
}

export default ProfileInformation;
