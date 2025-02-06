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
      className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 md:h-[400px] xl:px-40"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 flex flex-row items-center justify-between p-6 sm:p-10 bg-gradient-to-b from-slate-900 to-blue-300 rounded-lg shadow-lg h-full w-full"
      >
        <div className="text-white flex flex-col">
          <p className="text-2xl xl:text-6xl font-bold">Mage Sale</p>
          <p className="text-xl xl:text-4xl mt-2">Special Offer</p>
          <p className="text-xl xl:text-4xl mt-2">
            Up to <strong>60% OFF</strong>
          </p>
        </div>
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          src="/pixl/onepage/iphone.png"
          alt="Just photo"
          className="max-w-[120px] sm:max-w-[180px] md:max-w-[250px] w-full"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="flex-1 bg-[#f7cc60] py-8 px-6 rounded-lg shadow-lg text-center h-full w-full"
      >
        <h1 className="mb-6 text-white text-xl font-bold">
          Hot Deals of The Day
        </h1>
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.7 }}
          src="/pixl/onepage/airpods.png"
          alt="AirPods"
          className="hidden md:block w-32 mx-auto mb-4"
        />

        <ul className="flex gap-4 justify-center">
          {hoursArray.map((e, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 + idx * 0.2 }}
            >
              <div className="border w-16 h-16 flex flex-col items-center justify-center bg-white rounded-md shadow">
                <p className="text-3xl font-bold">{e.count}</p>
                <p className="text-sm">{e.text}</p>
              </div>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="flex justify-center items-center mt-6"
        >
          <a href="/buynow">
            <div className="bg-[#1e5cea] h-12 w-[150px] flex justify-between items-center p-3 text-white rounded-3xl shadow-lg">
              <p className="font-bold">Buy Now</p>
              <ArrowForwardIcon />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
