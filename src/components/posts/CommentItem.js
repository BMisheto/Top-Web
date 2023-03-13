import React from "react";

function CommentItem({comment}) {
  return (
    <div className="flex flex-col items-start justify-start content-start gap-1  p-2 md:p-2 min-w-full  min-h-[150px] ">
      <div className="flex flex-row items-center content-center  justify-center gap-2 p-1">
        <h1 className="h-[50px] w-[50px] bg-gray-100 rounded-full border border-gray-200">
          

        </h1>
        <p>{comment._id}</p>

      </div>
     
      <p className="max-w-lg p-1">
      {comment.content}
      </p>
    </div>
  );
}

export default CommentItem;
