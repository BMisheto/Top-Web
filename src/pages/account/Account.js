import React, { useEffect, useState } from "react";
import {
  AiFillLeftCircle,
  AiFillRightCircle,
  AiOutlineLogout,
} from "react-icons/ai";
import { BsArrowLeft, BsPersonFill } from "react-icons/bs";
import { VscDashboard, VscEdit } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { getUserDetails, logout } from "../../features/actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from "../../features/constants/userConstants";
import { motion } from "framer-motion";
import { REACT_APP_URL } from "../../utilities/utils";
import MyPostsPage from "./posts/MyPostsPage";
import MyDonationPage from "./donation/MyDonationPage";
import MyEventsPage from "./events/MyEventsPage";

function Account() {
  const [active, setActive] = useState(1);
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
            <motion.div
              onClick={() => navigate(-1)}
              className="mb-[20px] flex flex-row items-center content-center justify-center text-gray-500 hover:text-black min-w-[100px] rounded-full p-1 md:p-2 gap-1 md:gap-2 cursor-pointer"
            >
              <BsArrowLeft />
              <h1>Back</h1>
            </motion.div>

            {/* dashboard */}
            {user.is_staff && (
              <button
                onClick={() => navigate("/dashboard")}
                className="flex flex-row items-center content-center justify-center gap-2 transition duration-150 delay-150 ease-in-out text-[12px] md:text-[16px] text-blue-600 p-2 md:p-3 rounded-lg md:rounded-xl border hover:bg-blue-600 hover:border-blue-600 hover:text-white   font-[500]  group "
              >
                <h1 className=""> Dashboard </h1>
                <VscDashboard className="text-lg md:text-xl " />
              </button>
            )}
          </div>

          <motion.div className="flex flex-col md:flex-row gap-4 md:gap-5 justify-center items-center content-center w-full md:w-[80%]">
            {/* profile and orders */}
            <motion.div
             
              className="flex flex-row justify-around md:items-start content-center   gap-4  w-auto rounded-xl    p-2 md:p-3 "
            >
              {/* Profile info */}


              <div className="flex flex-col items-center content-center justify-center md:flex-row gap-2 p-2 md:p-0 ">
                {/* image */}
               


                <div className="relative">
                  <img
                    src={`${REACT_APP_URL}${user.profile_photo}`}
                    className=" w-[250px] h-[250px] md:w-[250px] md:h-[250px]   object-center object-cover rounded-full  shadow-lg"
                    alt="profile photo"
                  />

                   {/* edit profile */}
                   <div
                      onClick={() => navigate("/account/edit")}
                      className="cursor-pointer flex flex-row justify-center content-center items-center gap-1 text-sm bg-green-500 rounded-full text-white p-2 hover:bg-green-600 absolute  bottom-2 right-5 border-[6px]  border-white "
                    >
                      <span>
                        <VscEdit />
                      </span>
                      
                    
                    </div>

                    
              <div
                      onClick={logoutHandler}
                      className=" cursor-pointer flex flex-row self-start content-center items-center gap-1 text-xs  rounded-full absolute top-2 right-1 bg-gray-600 text-white hover:bg-red-600 active:bg-red-600 p-2 border-[6px]  border-white"
                    >
                      <span>
                        <AiOutlineLogout />
                      </span>
                      <h1>Logout</h1>
                      
                    </div>

                   




                </div>

                <div className="flex flex-col gap-2 md:gap-3 text-sm md:text-[15px] items-center md:items-start content-center justify-center min-w-[300px] p-2 md:p-3" >
                  <h1 className="font-semibold text-lg border-b">
                    {user.first_name}
                    {"  "}

                    {user.last_name}
                  </h1>

                  <h1 className="font-regular max-w-sm text-center md:text-left text-gray-600  p-2 md:p-2 rounded-lg">
                    {user.bio}
                  </h1>
                  <h1 className="font-semibold text-slate-600 ">
                    
                    {user.company}
                    </h1>

                  <div className="flex flex-row  items-center content-center justify-between gap-3 w-full ">
                   
                  

                    {/* logout profile */}

                    
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="flex flex-col gap-3 md:gap-4 p-2 md:p-3 w-full md:w-auto   mx-auto">
            <div className="flex flex-row justify-center items-center content-center gap-2 bg  rounded-lg border border-gray-100 text-[13px] md:text-[15px]  p-1">
              <button
                onClick={() => setActive(1)}
                className={
                  active === 1
                    ? "bg-gray-600 text-white p-2 rounded-md  shadow-lg"
                    : "p-2 text-gray-500"
                }
              >
                My Posts
              </button>
              <button
                onClick={() => setActive(2)}
                className={
                  active === 2
                    ? "bg-gray-600 text-white p-2 rounded-md shadow-lg"
                    : "p-2 text-gray-500"
                }
              >
                My Events
              </button>
              <button
                onClick={() => setActive(3)}
                className={
                  active === 3
                    ? "bg-gray-600 text-white p-2  rounded-md  shadow-lg"
                    : "p-2  text-gray-500"
                }
              >
                My Donations
              </button>
            </div>
            {active === 3 && <MyDonationPage key={3} />}
            {active === 2 && <MyEventsPage key={2} />}
            {active === 1 && <MyPostsPage key={1} />}
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}

export default Account;
