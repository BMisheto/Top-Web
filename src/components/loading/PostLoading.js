import React from 'react'

function PostLoading() {
  return (
    <div className="flex flex-col gap-2    w-full">
    <div className="flex flex-col items-start justify-center gap-2 animate-pulse w-full  ">
        <div className="bg-slate-200 rounded-2xl w-full min-h-[200px]"></div>

        
      </div>
    <div className="flex flex-col items-start justify-center gap-2 animate-pulse w-full md:w-full ">
        <div className="bg-slate-200 rounded-2xl w-full min-h-[200px]"></div>
        
        
      </div>
    <div className="flex flex-col items-start justify-center gap-2 animate-pulse w-full md:w-full ">
        <div className="bg-slate-200 rounded-2xl w-full min-h-[200px]"></div>
        
        
      </div>

      </div>
  )
}

export default PostLoading