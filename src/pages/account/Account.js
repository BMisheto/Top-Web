import React, { useEffect, useState } from "react";
import { AiFillLeftCircle, AiFillRightCircle, AiOutlineLogout } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { VscDashboard, VscEdit } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { getUserDetails, logout } from "../../features/actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from "../../features/constants/userConstants";
import { motion } from "framer-motion";
import { REACT_APP_URL } from "../../utilities/utils";

function Account() {
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
      } else {
        // WE HAVE THEs USER INFO SO WE SET OUR STATE
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

  const showEdit = () => setEdit(!edit);

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <motion.main className="min-h-[500px]">
      <div className="subpixel-antialiased min-h-screen inset-0 flex justify-center items-center font-sans    mx-auto  p-3  mt-[70px]">
        {/* main div */}

        <div className="flex flex-col justify-between items-center content-center w-full gap-3 md:gap-5">
          {/* navigation */}
          <div className="flex flex-row justify-between items-center content-center w-[90%] md:w-3/4">
            {/* bac to profile */}
            <button
              onClick={() => navigate(-1)}
              className="flex flex-row items-center content-center justify-center gap-2 transition duration-75 delay-75 text-[12px] md:text-[16px] text-blue-600 p-2 rounded-md    font-[500]  group "
            >
              <AiFillLeftCircle className="text-lg md:text-xl" />
              <h1> Back </h1>
            </button>

            {/* dashboard */}
            {user.is_staff && (
              <button
                onClick={() => navigate("/dashboard")}
                className="flex flex-row items-center content-center justify-center gap-2 transition duration-150 delay-150 ease-in-out text-[12px] md:text-[16px] text-blue-600 p-2 md:p-3 rounded-md md:rounded-lg border hover:bg-blue-600 hover:border-blue-600 hover:text-white   font-[500]  group "
              >
                <h1 className=""> Dashboard </h1>
                <VscDashboard className="text-lg md:text-xl " />
              </button>
            )}
          </div>

          <motion.div className="flex flex-col md:flex-row gap-4 md:gap-5 justify-start items-start content-start">
            {/* profile and orders */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 1, scale: 1 }}
              className="flex flex-row justify-around items-start content-center   gap-4  w-auto rounded-xl  border-t border-r border-l  p-2 md:p-3 "
            >
              {/* Profile info */}

              <div className="flex flex-col gap-2 p-1 md:p-0 ">
                {/* image */}

                <div className="">
                  <img
                    src={`${REACT_APP_URL}${user.profile_photo}`}
                    className=" w-[250px] h-[200px] md:w-[300px] md:h-[250px]   object-center object-cover rounded-lg  drop-shadow-xl"
                    alt="profile photo"
                  />
                </div>

                {/* mobile navigation */}
                <div className="flex md:hidden flex-row justify-between items-center content-center p-2  w-full text-[13px]">
                  {/* profile */}
                  <div className="flex flex-row justify-center items-center content-center  gap-1 rounded-md p-1 min-w-[70px] bg-black text-white drop-shadow-lg">
                    <BsPersonFill />
                    <h1>Profile</h1>
                  </div>

                 
                </div>

                {/* profile detail */}
                <div className="flex flex-col gap-[2px] p-1 md:p-2 bg-[#fafafa] border-t border-r border-l rounded-lg">
                  {/* firstname */}
                  <div
                    className="flex flex-row justify-between
                              bg-white text-[13px] p-2 md:p-3 rounded-lg   "
                  >
                    <h1 className="text-gray-700 font-[400]">Firstname:</h1>
                    <h2> {user.first_name}</h2>
                  </div>

                  {/* lastname */}
                  <div
                    className="flex flex-row justify-between
                              bg-white text-[13px] p-2 md:p-3 rounded-lg "
                  >
                    <h1 className="text-gray-700 font-[400]">Lastname:</h1>
                    <h2> {user.last_name}</h2>
                  </div>

                  {/* email */}
                  <div
                    className="flex flex-row justify-between
                              bg-white text-[13px] p-2 md:p-3 rounded-lg  "
                  >
                    <h1 className="text-gray-700 font-[400]">Email:</h1>
                    <h2> {userInfo.email}</h2>
                  </div>

                  {/* phone number */}
                  <div
                    className="flex flex-row justify-between
                              bg-white text-[13px] p-2 md:p-3 rounded-lg   "
                  >
                    <h1 className="text-gray-700 font-[400]">Mobile:</h1>
                    <h2> {userInfo.mobile}</h2>
                  </div>

                  {/* Country*/}
                  <div
                    className="flex flex-row justify-between
                              bg-white text-[13px] p-2 md:p-3 rounded-lg   "
                  >
                    <h1 className="text-gray-700 font-[400]">Country:</h1>
                    <h2> {userInfo.country}</h2>
                  </div>
                </div>

                {/* edit and logout */}
                <div
                  className="flex flex-row justify-between
                              bg-white text-[13px]   rounded-lg "
                >
                  {/* edit profile */}

                  <div
                    onClick={() => navigate("/account/edit")}
                    className="transition duration-100 delay-100 ease-in-out flex flex-row justify-center items-center content-center gap-1  text-[12px] md:text-[14px] text-green-600 cursor-pointer bg-white border hover:bg-green-500 hover:text-white hover:border-green-500 hover:drop-shadow-lg hover:shadow-green-600/50 h-[35px] min-w-[100px] rounded-md"
                  >
                    <span>
                      <VscEdit />
                    </span>
                    <h1>Edit Info</h1>
                  </div>

                  {/* edit profile */}

                  <div
                    onClick={logoutHandler}
                    className="transition duration-100 delay-100 ease-in-out flex flex-row justify-center items-center content-center gap-1  text-[12px] md:text-[14px] text-red-600 cursor-pointer bg-white border hover:bg-red-500 hover:text-white hover:border-red-500 hover:drop-shadow-lg hover:shadow-red-600/50 h-[35px] min-w-[100px] rounded-md"
                  >
                    <h1>Logout</h1>
                    <span>
                      <AiOutlineLogout />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

           
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}

export default Account;
