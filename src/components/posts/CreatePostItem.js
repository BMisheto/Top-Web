import React, { useEffect, useState } from "react";
import { MdUpdate } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { createPost } from "../../features/actions/postActions";
import { motion } from "framer-motion";

function CreatePostItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user, setUser] = useState("");
  const [is_poll, setPoll] = useState("");
  const [link, setLink] = useState("");
  const [choices, setChoices] = useState(["Option 1", "Option 2"]);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    setUser(userInfo._id);
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      createPost({
        title,
        user,
        content,
        is_poll,
        link,
        choices,
      })
    );
  };

  function addOption(newOption) {
    setChoices([...choices, newOption]);
  }

  // function to remove an option from the poll
  function removeOption(optionIndex) {
    const newChoices = [...choices];
    newChoices.splice(optionIndex, 1);
    setChoices(newChoices);
  }
  return (
    <motion.div className=" flex flex-col  ">
      {/* Heading */}

      <div className="flex flex-row justify-between items-center content-center w-full">
        <div className=" text-lg md:text-xl  p-2 text-gray-700 font-[500]">
          <h1>Post</h1>
        </div>

        <div className="text-lg md:text-xl  p-2 text-gray-700 font-bold">
          <h1></h1>
        </div>
      </div>

      {/* Product details */}

      <form
        onSubmit={submitHandler}
        className=" flex flex-col gap-2 md:gap-3 center w-full  items-center content-center"
      >
        {/* Product name & Offfer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 1, scale: 1 }}
          className="flex flex-col gap-1 justify-center md:gap-2 w-auto border-t border-l border-r p-1 md:p-2 rounded-xl"
        >
          {/* Name and More */}

          <div className="flex flex-col md:grid justify-center md:grid-cols-2 gap-1 md:gap-2 border-t border-l border-r rounded-xl  p-2 md:p-3 bg-[#fafafa] w-full h-full">
            <div className="flex flex-col gap-2 h-full w-full">
              {/* event name */}
              <div className="flex flex-col  justify-start content-start  items-start gap-1 md:gap-2 p-1 md:p-2 text-[13px] md:text-[15px] w-auto">
                <h1 className="font-[500] text-gray-700">Title</h1>

                <input
                  className="p-2 border bg-none outline-none rounded-xl placeholder:text-gray-600
                                              placeholder:text-[15px]
                                              placeholder:pl-4  min-w-[300px] md:min-w-[320px] lg:min-w-[400px] h-[60px] drop-shadow-sm "
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  placeholder="Product Name"
                />
              </div>

              {/* event venue */}
              <div className="flex flex-col  justify-start content-start  items-start gap-1 md:gap-2 p-1 md:p-2 text-[13px] md:text-[15px] w-auto">
                <h1 className="font-[500] text-gray-700">Link</h1>

                <input
                  className="p-2 border bg-none outline-none rounded-xl placeholder:text-gray-600
                                              placeholder:text-[15px]
                                              placeholder:pl-4  min-w-[300px] md:min-w-[320px] lg:min-w-[400px] h-[60px] drop-shadow-sm "
                  type="text"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="Product Name"
                />
              </div>
              {/* event location */}
              <div className="flex flex-col items-start content-center gap-1 md:gap-3 p-1  ">
                <label className="font-[500] text-gray-700">Type</label>
                <p className="text-xs">Make the post a Poll or Normal post</p>

                <input
                  className="p-2 border bg-none outline-none rounded-full placeholder:text-gray-600
                                                                              placeholder:text-[15px]
                                                                              placeholder:pl-4  h-[20px] text-[15px]"
                  type="checkbox"
                  checked={is_poll}
                  onChange={(e) => setPoll(e.target.checked)}
                  placeholder="Featured "
                />
              </div>
            </div>

            <div className="flex flex-col  h-full  gap-2">
              {/* event Description */}
              <div className="flex flex-col  justify-start content-start  items-start gap-1 md:gap-2 p-1 md:p-2 text-[13px] md:text-[15px] w-full h-full">
                <h1 className="font-[500] text-gray-700">Description</h1>

                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Description"
                  className="p-2 border bg-none outline-none rounded-xl placeholder:text-gray-600
                                          placeholder:text-[15px]
                                          placeholder:pl-4 min-w-[300px] md:min-w-[320px] lg:min-w-[400px] h-full text-[15px] min-h-[200px]"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Offer and Featured */}
          <div className="flex flex-row w-full justify-end items-center content-center  border-l border-r rounded-xl  p-2 md:p-3 ">
            <button
              type="submit"
              className="self-end transition duration-100 delay-100 ease-in-out flex flex-row items-center content-center justify-center gap-2 md:gap-3  border-gray-200 bg-blue-600 text-white p-1 md:p-2 rounded-xl h-[50px] hover:drop-shadow-md hover:bg-blue-500 hover:border-blue-500 hover:text-white min-w-full md:min-w-[200px]"
            >
              <h1>Add Post</h1>
              <MdUpdate />
            </button>
          </div>
        </motion.div>

        {/* image upload */}
      </form>

      {is_poll ? (
        <form className=" flex flex-col gap-2 md:gap-3 center w-full  items-center content-center border rounded-xl p-2 m:p-3">
          <div className="flex flex-row justify-between items-center content-center w-full">
            <div className=" text-lg md:text-xl  p-2 text-gray-700 font-[500]">
              <h1>Polls</h1>
            </div>
          </div>
          <div className="flex flex-col w-full  md:grid md:grid-cols-2  items-center content-center justify-center bg-gray-100 rounded-xl border p-1 md:p-2">
            {choices?.map((option, index) => (
              <div className="flex flex-col  justify-start content-start  items-start gap-2 md:gap-3 p-1 md:p-2 text-[13px] md:text-[15px] w-auto">
                <div className=" flex flex-row justify-between items-center content-center w-full">
                  <h1 className="font-[500] text-gray-700">Name</h1>
                </div>

                <input
                  className="p-2 border bg-none outline-none rounded-xl placeholder:text-gray-600
                                           placeholder:text-[15px]
                                           placeholder:pl-4  min-w-[300px] md:min-w-[320px] lg:min-w-[400px] h-[60px] drop-shadow-sm "
                  type="text"
                  value={choices.choice_text}
                  onChange={(e) => {
                    const newItems = [...choices];
                    newItems[index] = e.target.value;
                    setChoices(newItems);
                  }}
                  placeholder="Poll Name"
                />
              </div>
            ))}
          </div>

          <div
            className="flex flex-row justify-between items-center content-center  w-full
    "
          >
            <div
              onClick={addOption}
              className="cursor-pointer text-white bg-green-600 p-2 rounded-md text-sm"
            >
              add option
            </div>
            <div
              onClick={removeOption}
              className="cursor-pointer text-white bg-gray-600 p-2 rounded-md text-sm"
            >
              remove option
            </div>
          </div>

          {/* Offer and Featured */}
        </form>
      ) : (
        ""
      )}

      {/* navigation */}
      <div></div>
    </motion.div>
  );
}

export default CreatePostItem;
