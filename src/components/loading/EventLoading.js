import React from 'react'

function EventLoading() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 justify-center content-center items-center gap-3 md:gap-4   w-full">
    <div className="flex flex-col items-start justify-center gap-2 animate-pulse w-full  ">
        <div className="bg-slate-200 rounded-xl w-full min-h-[300px]"></div>
        <div className="bg-slate-200 rounded-xl  w-full h-[30px] md:h-[50px]"></div>
        
      </div>
    <div className="flex flex-col items-start justify-center gap-2 animate-pulse w-full md:w-full ">
        <div className="bg-slate-200 rounded-xl w-full min-h-[300px]"></div>
        <div className="bg-slate-200 rounded-xl  w-full h-[30px] md:h-[50px]"></div>
        
      </div>
    <div className="flex flex-col items-start justify-center gap-2 animate-pulse w-full md:w-full ">
        <div className="bg-slate-200 rounded-xl w-full min-h-[300px]"></div>
        <div className="bg-slate-200 rounded-xl  w-full h-[30px] md:h-[50px]"></div>
        
      </div>

      </div>
  )
}

export default EventLoading