import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import ItemLoading from "../../loading/ItemLoading";
import { motion } from "framer-motion";
import { BsCheck, BsFilter, BsPerson } from "react-icons/bs";
import { MdDeleteOutline, MdPageview } from "react-icons/md";
import { REACT_APP_URL } from "../../../utilities/utils";
import { deleteUser, listUsers } from "../../../features/actions/userActions";
import Paginate from "../navigation/Paginate";
import AdminSearch from "../navigation/AdminSearch";

function UsersList() {

    const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  /* PULLING OUT STATE */
  const userList = useSelector((state) => state.userList);
  const { users, loading, error, pages, page, count } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // WE NEED THE SUCCESS VALUE SO WHEN WE SUCCESSFULLY DELETE THE USER WE WANT THE NEW DATA
  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  let keyword = location.search;

  useEffect(() => {
    // WE DON'T WANT NON ADMINS TO ACCESS THIS PAGE SO REDIRECT IF SOMEBODY TRIES TO

    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers(keyword));
    } else {
      navigate("/login");
    }
  }, [dispatch, keyword, successDelete, userInfo]);

  /* HANDLER */
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this user ?"))
      dispatch(deleteUser(id));
  };

  const makeAdmin = (id) => {
    

  }

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 1, scale: 1 }}
    className="flex flex-col justify-start items-start content-start gap-3 md:gap-3"
  >
    <div className="flex flex-rows justify-between text-[15px] md:text-[21px]    font-bold p-2 w-full mb-[20px]">
      <div>Users</div>
      <div>{count}</div>
    </div>


    {/* search */}
    <AdminSearch />
    

    {/* Filter    */}

    <div className="flex flex-row justify-between items-center content-center w-full p-1">
      {/* Your orders */}
      <div className="font-[450] text-[13px] md:text-[15px] text-gray-600">
        Your Users
      </div>

      {/* Filters */}
      {/* <motion.div className="  hover:bg-gray-200 text-gray-600 min-w-[70px] flex flex-row justify-center items-center content-center text-[13px] md:text-[15px] rounded-md border border-gray-300 p-1  cursor-pointer gap-1 font-[450]">
        <motion.h1>Filter</motion.h1>
        <BsFilter />
      </motion.div> */}
    </div>

    {/* Users */}
    <div className="border-t border-l border-r rounded-xl flex flex-col items-center content-center justify-center p-2 md:p-3">
      {/* user items -Large Screen table */}
      <div className="hidden bg-gray-50  lg:flex flex-row items-start content-start justify-evenly  w-full border-t border-l border-r rounded-xl border-gray-100">
        <table className=" table-auto w-full divide-y justify-evenly  text-[15px]  font-regular ">
          <thead className="text-center  text-[13px]  md:text-[15px]     text-gray-600  ">
            <th className="p-1 lg:pl-2 lg:pr-2">ID</th>
            <th className="p-1 lg:p-2">Profile image</th>
            <th className="p-1 lg:p-2">Firstname</th>
            <th className="p-1 lg:p-2">Lastname</th>
            <th className="p-1 lg:p-2">Email</th>
            <th className="p-1 lg:p-2">Phone Number</th>
            <th className="p-1 lg:p-2">Country</th>
            <th className="p-1 lg:p-2">Status</th>
            <th className="p-1 lg:p-2">View</th>
            <th className="p-1 lg:p-2">Delete</th>
          </thead>

          <tbody className="text-center gap-2  ">
            {users?.map((item) => (
              <tr
                key={item._id}
                className=" hover:bg-gray-100 transition-all delay-75 duration-75 ease-in-out"
              >
                <td className="p-1 lg:pl-2 lg:pr-2">{item.id}</td>

                <td className="p-1 lg:p-3">
                  <div className="flex justify-center content-center items-center">
                    <img
                      src={`${REACT_APP_URL}${item.profile_photo}`}
                      className="h-[70px] w-[70px] rounded-full object-cover object-center"
                    />
                  </div>
                </td>
                <td className="p-1 lg:p-2">{item.first_name}</td>
                <td className="p-1 lg:p-2">{item.last_name}</td>
                <td className="p-1 lg:p-2">{item.email}</td>
                <td className="p-1 lg:p-2">{item.mobile}</td>
                <td className="p-1 lg:p-2">Tanzania</td>
                <td className="p-1 lg:p-2">
                  {item.isAdmin ? (
                    <div className="flex flex-rows justify-center items-center content-center gap-1  p-2 rounded-md text-[13px] ">
                      <BsCheck className="text-lg  bg-green-600 text-white rounded-full" />
                      <h1>Staff</h1>
                    </div>
                  ) : (
                    <div className="flex flex-rows justify-between items-center content-center gap-1  p-2 rounded-md text-[13px] ">
                      <BsPerson className="text-lg   text-orange-500 rounded-full" />
                      <h1>Normal</h1>
                    </div>
                  )}
                </td>
                <td className="p-1 lg:p-2">
                  <div className="flex flex-rows justify-between items-center content-center gap-1  p-2 rounded-md text-[13px] text-green-600 cursor-pointer hover:underline">
                    <MdPageview className="text-lg" />
                    <h1>View</h1>
                  </div>
                </td>
                <td className="p-1 lg:p-2">
                  <div
                    onClick={() => deleteHandler(item.id)}
                    className="flex flex-rows justify-between items-center content-center gap-1  p-2 rounded-md text-[13px] text-red-600 cursor-pointer hover:underline"
                  >
                    <MdDeleteOutline className="text-lg" />
                    <h1>Delete</h1>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* user items -medium Screen table */}
      <div className="hidden bg-gray-50 border-t  border-l border-r border-gray-100 rounded-xl md:flex lg:hidden flex-row items-start content-start justify-evenly  w-full">
        <table className=" table-auto w-full divide-y justify-evenly  text-[15px]  font-regular ">
          <thead className="text-center  text-[13px]  md:text-[15px]     text-gray-600  ">
            <th className="p-1 lg:pl-2 lg:pr-2">ID</th>
            <th className="p-1 lg:p-2">Profile image</th>
            <th className="p-1 lg:p-2">Email</th>
            <th className="p-1 lg:p-2">Phone Number</th>
            <th className="p-1 lg:p-2">Status</th>
            <th className="p-1 lg:p-2">View</th>
            <th className="p-1 lg:p-2">Delete</th>
          </thead>

          <tbody className="text-center gap-2  ">
            {users?.map((item) => (
              <tr
                key={item._id}
                className="divide-x divide-gray-100 hover:bg-gray-100 transition-all delay-75 duration-75 ease-in-out"
              >
                <td className="p-1 lg:pl-2 lg:pr-2">{item.id}</td>

                <td className="p-1 lg:p-3">
                  <div className="flex justify-center content-center items-center">
                    <img
                      src={`${REACT_APP_URL}${item.profile_photo}`}
                      className="h-[70px] w-[70px] rounded-full object-cover object-center"
                    />
                  </div>
                </td>

                <td className="p-1 lg:p-2">{item.email}</td>
                <td className="p-1 lg:p-2">{item.mobile}</td>
                <td className="p-1 lg:p-2">
                  {item.isAdmin ? (
                    <div className="flex flex-rows justify-center items-center content-center gap-1  p-2 rounded-md text-[13px] ">
                      <BsCheck className="text-lg  bg-green-600 text-white rounded-full" />
                      <h1>Staff</h1>
                    </div>
                  ) : (
                    <div className="flex flex-rows justify-between items-center content-center gap-1  p-2 rounded-md text-[13px] ">
                      <BsPerson className="text-lg   text-orange-500 rounded-full" />
                      <h1>Normal</h1>
                    </div>
                  )}
                </td>
                <td className="p-1 lg:p-2">
                  <div className="flex flex-rows justify-between items-center content-center gap-1  p-2 rounded-md text-[13px] text-green-600 cursor-pointer hover:underline">
                    <MdPageview className="text-lg" />
                    <h1>View</h1>
                  </div>
                </td>
                <td className="p-1 lg:p-2">
                  <div
                    onClick={() => deleteHandler(item.id)}
                    className="flex flex-rows justify-between items-center content-center gap-1  p-2 rounded-md text-[13px] text-red-600 cursor-pointer hover:underline"
                  >
                    <MdDeleteOutline className="text-lg" />
                    <h1>Delete</h1>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* user items - small Screen table */}
      <div className="border-t border-l border-r bg-gray-50 border-gray-100 rounded-xl  flex-row items-start content-start justify-evenly  w-full md:hidden lg:hidden ">
        <table className=" table-auto w-full divide-y justify-evenly  text-[12px]  font-regular ">
          <thead className="text-center text-gray-600  text-[13px]">
            <th className="p-1 lg:pl-2 lg:pr-2">ID</th>
            <th className="p-1 lg:p-2">Phone Number</th>
            <th className="p-1 lg:p-2">View</th>
            <th className="p-1 lg:p-2">Delete</th>
          </thead>

          <tbody className="text-center divide-y border-lborder-r rounded-lg   gap-2 text-[12px]">
            {users?.map((item) => (
              <tr
                key={item._id}
                className="divide-x divide-gray-100 hover:bg-gray-100 transition-all delay-75 duration-75 ease-in-out w-full"
              >
                <td className="p-1 lg:pl-2 lg:pr-2">{item.id}</td>
                <td className="p-1 lg:p-2">{item.mobile}</td>

                <td className="p-1 lg:p-2">
                  <div className="flex flex-rows justify-between items-center content-center gap-1  p-2 rounded-md text-[12px] text-green-600 cursor-pointer hover:underline">
                    <MdPageview className="text-lg" />
                    <h1>View</h1>
                  </div>
                </td>
                <td className="p-1 lg:p-2">
                  <div
                    onClick={() => deleteHandler(item.id)}
                    className="flex flex-rows justify-between items-center content-center gap-1  p-2 rounded-md text-[12px] text-red-600 cursor-pointer hover:underline"
                  >
                    <MdDeleteOutline className="text-lg" />
                    <h1>Delete</h1>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* loading */}

    {loading && <ItemLoading />}

    {/* pagination */}
    <Paginate
      page={page}
      pages={pages}
      keyword={keyword}
      route="/dashboard/users"
    />
  </motion.div>);
}

export default UsersList;
