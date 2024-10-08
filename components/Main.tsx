"use client";

import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import { StaticImageData } from "next/image";
import { IoCloudyOutline } from "react-icons/io5";
import { SiMicrostrategy } from "react-icons/si";
import { FiTarget } from "react-icons/fi";
import { Button } from "./ui/button";
import { Days } from "@/constants/Days";

import sunny from "@/public/assets/sunny.png";
import cloudy from "@/public/assets/cloudy.png";
import snow from "@/public/assets/snow.png";
import rainy from "@/public/assets/rainy.png";
import { useWeather } from "@/context/weatherContext";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { formatTimezone } from "@/utils/timezone";

const Main = () => {
  const { weather, fetchWeather, error, isLoading } = useWeather();
  const [userInput, setUserInput] = useState("");
  const [weatherImage, setWeatherImage] = useState<StaticImageData>(sunny);
  const newDate = new Date();
  const currentDay = Days[newDate.getDay()];

  useEffect(() => {
    if (weather) {
      switch (weather.weather[0].main) {
        case "Clear":
          setWeatherImage(sunny);
          break;
        case "Rain":
          setWeatherImage(rainy);
          break;
        case "Clouds":
          setWeatherImage(cloudy);
          break;
        case "Snow":
          setWeatherImage(snow);
          break;
        default:
          setWeatherImage(sunny);
      }
    }
  }, [weather]);

  useEffect(() => {
    fetchWeather("Thailand");
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    fetchWeather(userInput);
  };
  
  const convertIntoCelsius = Math.ceil(Number(weather?.main.temp) - 273.15)

  if (isLoading) {
    return (
      <div className="bg-white rounded-l-3xl rounded-r-3xl lg:rounded-r-none px-12 py-9">
        <div className="animate-pulse container">
          <div className="py-2">
            <div className="h-10 bg-slate-700 rounded-lg" />
          </div>
          <div className="mt-10 flex flex-col gap-10">
            <div className="rounded-full bg-slate-700 h-[200px] w-[200px]"></div>
            <div className="h-10 bg-slate-700 rounded-lg" />
            <div className="h-10 bg-slate-700 rounded-lg" />
            <div className="h-10 bg-slate-700 rounded-lg" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-l-3xl rounded-r-3xl lg:rounded-r-none px-12 py-9">
      <div className="container">
        <div className="inline-flex items-center gap-3">
          <CiSearch className="w-8 h-8" />
          <Input
            type="text"
            placeholder="Seach for places..."
            name="userInput"
            value={userInput}
            onChange={handleInput}
          />
          <Button
            variant="outline"
            className="border-none rounded-full bg-[#ececf4]"
            type="submit"
            onClick={() => handleSubmit()}
          >
            <FiTarget className="w-4 h-4" />
          </Button>
        </div>
        {error ? (
          <div className="flex items-center">
            <p className="text-2xl text-red-500 mt-5">Country/City Not Found</p>
          </div>
        ) : (
          <>
            <motion.img
              src={weatherImage.src}
              alt=""
              className="object-cover w-[200px] h-[200px]"
              animate={{
                translateY: [-15, 15]
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                repeatType: 'mirror',
                ease: 'easeInOut'
              }}
            />
            <div className="flex">
              <h1 className="text-7xl">
                <CountUp
                  start={0}
                  end={convertIntoCelsius}
                  duration={3}
                />
              </h1>
              <span className="text-5xl">°C</span>
            </div>
            <p className="mt-6 text-lg font-medium">
              {currentDay},{" "}
              <span className="text-[#d6d7e7]">
                {formatTimezone(weather?.timezone ?? 0)}
              </span>
            </p>
            <div className="border-b-2 my-6" />
            <div className="flex items-center gap-3">
              <IoCloudyOutline />
              <p className="medium-text">{weather?.weather[0].main}</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <SiMicrostrategy />
              <p className="medium-text">{weather?.weather[0].description}</p>
            </div>
            <h2 className="mt-5 text-2xl font-medium">{weather?.name}</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
