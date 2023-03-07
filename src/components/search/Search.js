import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router';
import { BsSearch } from 'react-icons/bs';

function Search() {
  const navigate = useNavigate();
  const location = useLocation();

  // STATE
  const [keyword, setKeyword] = useState("");

  const route = location.pathname;

  /* STATE */
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`${route}?keyword=${keyword}`);
  };

  return (
    <motion.form
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 1, scale: 1 }}
    onSubmit={handleSubmit}
    className="border flex flex-row justify-center items-center content-center rounded-lg w-full h-full  min-h-[50px] p-1 bg-[#fafafa]"
  >
    <input
      type="text"
      name="keyword"
      onChange={(e) => setKeyword(e.target.value)}
      placeholder="Search ..."
      className="bg-inherit placeholder:text-[14px] w-[90%] outline-none"
    />
    <BsSearch type="submit" className="text-blue-600 cursor-pointer" />
  </motion.form>
  )
}

export default Search