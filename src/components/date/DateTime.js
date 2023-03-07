import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsSunFill } from "react-icons/bs";

function DateTime() {
  const [Dayname, setDayname] = useState("");
  const [Duration, setDuration] = useState("");

  const date = new Date();
  const todayDate = date.toLocaleDateString();
  const currentTime = date.toLocaleTimeString();
  const currentDay = date.getDay();

  useEffect(() => {
    if ((currentTime >= "12:00:00 PM") & (currentTime <= "6:00:00 PM")) {
      setDuration("afternoon");
    }

    if (currentDay == 1) {
      setDayname("Monday");
    } else if (currentDay == 2) {
      setDayname("Tuesday");
    } else if (currentDay == 3) {
      setDayname("Wednesday");
    } else if (currentDay == 4) {
      setDayname("Thursday");
    } else if (currentDay == 5) {
      setDayname("Friday");
    } else if (currentDay == 6) {
      setDayname("Saturday");
    } else {
      setDayname("Sunday");
    }
  }, [currentDay, currentTime]);

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="border-r border-l rounded-xl flex flex-col justify-evenly gap-2 text-[13px] md:text-[16px] p-1 md:p-2 w-full drop-shadow-sm min-w-[300px] md:min-w-[500px]"
    >
      <h1 className="font-[450] text-gray-700 drop-shadow-xl">Today</h1>

      {/* main div */}
      <div className="border-t  border-l  border-r flex flex-row justity-around items-center content-center w-auto text-gray-700 rounded-xl p-1 md:p-2  from-[#fafafa]">
        {/* dayname and time */}
        <motion.div className="w-full flex flex-col items-start content-center justify-start p-1 md:p-2">
          {/* icons */}
          <AnimatePresence exit={false}>
            <motion.div
              initial={{ bottom: 50, opacity: 0 }}
              animate={{ bottom: 0, opacity: 1 }}
              exit={{ bottom: 5, opacity: 0 }}
              className="flex flex-col items-center content-center justify-center text-center"
            >
              <BsSunFill className="text-[2rem] md:text-[4rem] text-orange-500 drop-shadow-md" />
            </motion.div>
          </AnimatePresence>

          {/* dayname */}
          <div className="p-1 md:p-2 font-bold text-[15px] md:text-2xl">
            <h1>{Dayname}</h1>
            <h2 className="text-[12px] md:text-lg text-light">{Duration}</h2>
          </div>
        </motion.div>

        {/* time and date */}
        <div className="w-full flex flex-col justify-evenly items-end content-end h-full">
          {/* time */}
          <div className="p-1 md:p-2 font-bold text-[13px] md:text-lg">
            <h1>{currentTime}</h1>
          </div>

          {/* date */}
          <div className="p-1 md:p-2 font-bold text-[15px] md:text-2xl">
            <h2>{todayDate}</h2>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default DateTime;
