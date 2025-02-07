"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function OnePage() {
  const [time, setTime] = useState({
    days: 157,
    hours: 10,
    minutes: 21,
    seconds: 53,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else {
          if (minutes > 0) {
            minutes--;
            seconds = 59;
          } else {
            if (hours > 0) {
              hours--;
              minutes = 59;
              seconds = 59;
            } else {
              if (days > 0) {
                days--;
                hours = 23;
                minutes = 59;
                seconds = 59;
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hoursArray = [
    { count: time.days, text: "Days" },
    { count: time.hours, text: "Hrs" },
    { count: time.minutes, text: "Mins" },
    { count: time.seconds, text: "Secs" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row items-center justify-center gap-4 p-4 md:h-[350px] xl:px-32"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 flex flex-row items-center justify-between p-4 sm:p-6 bg-gradient-to-b from-slate-900 to-blue-300 rounded-lg shadow-lg h-full w-full"
      >
        <div className="text-white flex flex-col">
          <p className="text-xl xl:text-4xl font-bold">Mage Sale</p>
          <p className="text-lg xl:text-2xl mt-1">Special Offer</p>
          <p className="text-lg xl:text-2xl mt-1">
            Up to <strong>60% OFF</strong>
          </p>
        </div>
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          src="/pixl/onepage/iphone.png"
          alt="Just photo"
          className="max-w-[100px] sm:max-w-[150px] md:max-w-[200px] w-full"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="flex-1 bg-[#f7cc60] py-6 px-4 rounded-lg shadow-lg text-center h-full w-full"
      >
        <h1 className="mb-4 text-white text-lg font-bold">
          Hot Deals of The Day
        </h1>
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.7 }}
          src="/pixl/onepage/airpods.png"
          alt="AirPods"
          className="hidden md:block w-24 mx-auto mb-3"
        />

        <ul className="flex gap-3 justify-center">
          {hoursArray.map((e, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 + idx * 0.2 }}
            >
              <div className="border w-14 h-14 md:w-16 md:h-16 flex flex-col items-center justify-center bg-white rounded-md shadow">
                <p className="text-xl md:text-2xl font-bold">{e.count}</p>
                <p className="text-xs md:text-sm">{e.text}</p>
              </div>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="flex justify-center items-center mt-4"
        >
          <a href="/buynow">
            <div className="bg-[#1e5cea] h-10 w-[120px] flex justify-between items-center p-2 text-white rounded-3xl shadow-lg">
              <p className="font-bold text-sm">Buy Now</p>
              <ArrowForwardIcon fontSize="small" />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
  