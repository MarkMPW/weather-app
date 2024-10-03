"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

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

interface WeatherContextProps {
  weather: WeatherData | undefined;
  fetchWeather: (location: string) => void;
  error: boolean;
  isLoading: boolean;
}

const WeatherContext = createContext<WeatherContextProps | undefined>(
  undefined
);

export const useWeather = () => {
  const context = useContext(WeatherContext);

  if (!context) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }

  return context;
};

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [weather, setWeather] = useState<WeatherData>();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

  const fetchWeather = async (location: string) => {
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
        setError(false);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  return (
    <WeatherContext.Provider
      value={{ weather, fetchWeather, error, isLoading }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
