import React from 'react'
import { MdUpdate } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

function PostEdit() {

    const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [is_poll, setPoll] = useState("");
  const [link, setLink] = useState("");
  const [pollItems, setPollItems] = useState([]);
  const [choice_text, setChoice] = useState("");

  const getId = useParams();
  const postId = getId.id;

  const postUpdate = useSelector((state) => state.postUpdate);
  const {
    success: successUpdate,
    loading: loadingUpdate,
    error: errorUpdate,
  } = postUpdate;

  const postDetails = useSelector((state) => state.postDetails);
  const { loading, post, error } = postDetails;

  const pollList = useSelector((state) => state.pollList);
  const { loading: pollLoading, polls, error: pollError, count } = pollList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // product detail dispatch
  useEffect(() => {
    // CHECK IF PRODUCT WAS UDPATED
    if (successUpdate) {
      dispatch({ type: POST_UPDATE_RESET });
      dispatch({ type: POST_DETAILS_REQUEST });
      dispatch({ type: POLL_UPDATE_REQUEST });
      dispatch({ type: POLL_DETAILS_REQUEST });
      navigate("/account/posts/");
    } else {
      if (!post.title || post._id !== Number(postId)) {
        dispatch(listPostDetails(postId));
        dispatch(listPolls(postId));
      } else {
        setTitle(post.title);
        setContent(post.content);
        setPoll(post.is_poll);
        setLink(post.link);
        setPollItems(polls);
      }
    }
  }, [dispatch, post, postId, navigate, successUpdate]);

  /* HANDLERS */

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      updatePost({
        _id: postId,
        title,
        content,
        is_poll,
        link,
        polls,
      })
    );
  };
  const createPollHandler = (e) => {
    e.preventDefault();

    dispatch(createPoll(postId));
  };
  const updatePollHandler = (e) => {
    e.preventDefault();
    

    dispatch(createPoll(postId));
  };
  return (
    <motion.main className="min-h-[500px]">
    <div className="subpixel-antialiased min-h-screen inset-0 flex justify-center items-center font-sans    mx-auto  p-3  mt-[70px] ">
      {/* main div */}
      <div className=" flex flex-col  ">
        {/* Heading */}

        <div className="flex flex-row justify-between items-center content-center w-full">
          <div className=" text-lg md:text-xl  p-2 text-gray-700 font-[500]">
            <h1>Post</h1>
          </div>

          <div className="text-lg md:text-xl  p-2 text-gray-700 font-bold">
            <h1>{post._id}</h1>
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
                    required
                    placeholder="Product Name"
                  />
                </div>
                {/* event location */}
                <div className="flex flex-col items-start content-center gap-1 md:gap-3 p-1  ">
                  <label className="font-[500] text-gray-700">Type</label>
                  <p className="text-xs">
                   
                  </p>
                  {is_poll && ( <div className="bg-gray-200 p-2 md:p-3 rounded-lg border border-gray-300">
                    <h1>Poll</h1>
                  </div>)}
                  {is_poll == false && ( <div className="bg-gray-200 p-2 md:p-3 rounded-lg border border-gray-300">
                    <h1>Normal Post</h1>
                  </div>)}
                  

                  {/* <input
                    className="p-2 border bg-none outline-none rounded-full placeholder:text-gray-600
                                                                                      placeholder:text-[15px]
                                                                                      placeholder:pl-4  h-[20px] text-[15px]"
                    type="checkbox"
                    checked={is_poll}
                    onChange={(e) => setPoll(e.target.checked)}
                    placeholder="Featured "
                  /> */}
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
                <h1>Update Post</h1>
                <MdUpdate />
              </button>
            </div>
          </motion.div>

          {/* image upload */}
        </form>

        
    

        {/* navigation */}
        <div></div>
      </div>
    </div>
  </motion.main>
  )
}

export default PostEdit