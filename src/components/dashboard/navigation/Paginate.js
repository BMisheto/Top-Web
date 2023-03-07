
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";import React from 'react'

function Paginate({ page, pages, keyword = "", route }) {

    const navigate = useNavigate();
    
  if (keyword) {
    keyword = keyword.split("?keyword=")[1].split("&")[0];
  }
  return (
    pages > 1 && (
        <div className="flex flex-row items-center content-center justify-center max-w-[90%] text-[12px] p-1  md:p-5  h-[60px]  gap-1  md:gap-3  border-gray-200 ">
          {(page == 0) | (pages == 1) ? (
            ""
          ) : (
            <div
              onClick={() =>
                navigate(`${route}?keyword=${keyword}&page=${page - 1}`)
              }
              className=" text-[11px] text-blue-600 md:text-[13px]  flex flex-row justify-center items-center content-center gap-1  p-2 cursor-pointer font-semibold md:w-[100px] rounded-sm"
            >
              <AiFillLeftCircle className="text-lg  md:text-lg" />
              <h1>Previous</h1>
            </div>
          )}
  
          <div className="flex flex-row items-center content-center gap-2 p-1 md:p-3">
            {[...Array(pages).keys()].map((x) => (
              <Link
                key={x + 1}
                className="text-black md:pl-3 md:pr-3 p-1 text-[11px] md:text-[14px] hover:text-gray-700 font-bold active:text-green-700"
                to={`${route}?keyword=${keyword}&page=${x + 1}`}
              >
                <h1
                  className={
                    x + 1 == page
                      ? `text-white text-center cursor-pointer bg-blue-600 p-1 pl-3 pr-3 rounded-full  focus:bg-black`
                      : `text-black cursor-pointer  focus:bg-black`
                  }
                  active={x + 1 == page}
                >
                  {x + 1}
                </h1>
              </Link>
            ))}
          </div>
  
          {page == pages ? (
            ""
          ) : (
            <div
              onClick={() =>
                navigate(`${route}?keyword=${keyword}&page=${page + 1}`)
              }
              className=" text-[11px] text-blue-600 md:text-[13px]  flex flex-row justify-center items-center content-center gap-1  p-1 md:p-2 cursor-pointer font-semibold md:w-[100px] rounded-sm"
            >
              <h1>Next</h1>
              <AiFillRightCircle className="text-lg md:text-lg" />
            </div>
          )}
        </div>
  ))
}

export default Paginate