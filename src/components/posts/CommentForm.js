import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../features/actions/commentActions";
import Message from "../message/Message";

function CommentForm({ postId }) {
  const [content, setContent] = useState("");
  const [message, setMessage] = useState(false);
  const [warning, setWarning] = useState("");
  const dispatch = useDispatch();

  const commentCreate = useSelector((state) => state.commentCreate);
  const { loading, success, error } = commentCreate;

  useEffect(() => {
    if (success) {
      setContent("");
      window.location.reload();
    }
  }, [success, dispatch]);

  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (content === "") {
      setWarning("cant add  Empty Comment");
      setMessage(true);
    } else {
      dispatch(
        createComment({
          post: postId,
          content,
        })
      );

      setContent("");
    }
  };

  return (
    <div className="w-full flex flex-col gap-2 md:gap-3 p-1 md:p-2">
      {loading ? (
        <div className="min-w-[300px] min-h-[100px] bg-gray-100 animate-pulse rounded-xl flex flex-col items-center justify-center ">
          Loading
        </div>
      ) : (
        <div className="w-full flex flex-col gap-2 md:gap-3 p-1 md:p-2">
          <h1 className="font-bold text-sm">Write a comment</h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start content-start justify-center gap-2 md:gap-3 p-1"
          >
            <textarea
            placeholder="Write your comment here"
              onChange={(e) => setContent(e.target.value)}
              className="bg-gray-100 border rounded-xl w-full min-h-[100px] outline-none placeholder:text-sm placeholder:p-2 placeholder:opacity-60"
            ></textarea>

            {content != "" && (
              <button
                type="submit"
                className=" border border-black min-w-[100px] rounded-full p-2 md:p-2 hover:bg-black hover:text-white"
              >
                Comment
              </button>
            )}
          </form>
        </div>
      )}

      {success ? <Message type="succes">"Comment Added"</Message> :""}
      {message == true ? <Message type="error">{warning}</Message> : ""}
      {error && <Message type="error">{error}</Message>}
    </div>
  );
}

export default CommentForm;
