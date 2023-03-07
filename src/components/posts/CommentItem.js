import React from "react";

function CommentItem({comment}) {
  return (
    <div className="flex flex-col items-start justify-center content-center gap-1 md:gap-2 border p-1 md:p-2 rounded-lg min-w-full  min-h-[150px]">
      <h1 className="font-regular border-b p-1">comment:{comment._id}</h1>

      <p className="max-w-lg p-1">
      {comment.content}
      </p>
    </div>
  );
}

export default CommentItem;
