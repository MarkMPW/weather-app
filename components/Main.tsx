"use client";

import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import Image, { StaticImageData } from "next/image";
import { IoCloudyOutline } from "react-icons/io5";
import { SiMicrostrategy } from "react-icons/si";
import { FiTarget } from "react-icons/fi";
import { Button } from "./ui/button";
import { Days } from "@/constants/Days";

import sunny from "@/public/assets/sunny.png";
import cloudy from "@/public/assets/cloudy.png";
import snow from "@/public/assets/snow.png";
import rainy from "@/public/assets/rainy.png";
interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  weather: {
    description: string;
    main: string;
  }[];
  name: string;
}

const Main = () => {
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState<WeatherData>();
  const [weatherImage, setWeatherImage] = useState<StaticImageData>();
  const newDate = new Date();
  const currentDay = Days[newDate.getDay()];
  let hours = newDate.getHours();
  let minutes = newDate.getMinutes();

  const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

  const formatToTwoDigits = (num: number) => {
    return num < 10 ? `0${num}` : num.toString();
  };

  const formattedHours = formatToTwoDigits(hours);
  const formattedMinutes = formatToTwoDigits(minutes);

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
    fetchData("songkhla");
  }, []);

  const fetchData = async (location: string) => {
    try {
      const response = await fetch(
        baseUrl +
          location +
          "&appid=" +
          process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY
      );

      if (!response.ok) {
        setError(true);
      } else {
        const data = await response.json();
        setWeather(data);
        setIsLoading(false);
        setError(false);
      }
    } catch (error: any) {
      console.log("Failed to fetch data: ", error.message);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    fetchData(userInput);
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-l-3xl rounded-r-3xl lg:rounded-r-none px-12 py-9 container">
        <div className="animate-pulse container">
          <div className="py-2">
            <div className="h-10 bg-slate-700 rounded-lg" />
          </div>
          <div className="mt-10 flex flex-col gap-10">
            <div className="rounded-full bg-slate-700 h-[150px] w-[150px]"></div>
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
          <div className='flex items-center'>
            <p className='text-2xl text-red-500 mt-5'>Country/City Not Found</p>
          </div>
        ) : (
          <>
            <Image
              src={weatherImage ?? sunny}
              alt=""
              width={200}
              height={200}
              className="object-cover w-[200px] h-[200px]"
              priority={true}
            />
            <div className="flex">
              <h1 className="text-7xl">
                {Math.ceil(Number(weather?.main.temp) - 273.15)}
              </h1>
              <span className="text-5xl">°C</span>
            </div>
            <p className="mt-6 text-lg font-medium">
              {currentDay},{" "}
              <span className="text-[#d6d7e7]">
                {formattedHours}:{formattedMinutes}
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
