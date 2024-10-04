"use client";

import React from "react";
import HightlightCard from "./HightlightCard";
import { useWeather } from "@/Context/weatherContext";
import { visibilityInKm } from "@/utils/convert";
import { assessVisibilityLevel, checkHumidityLevel } from "@/utils/checkLevel";
import CountUp from "react-countup";

const Hightlight = () => {
  const { weather } = useWeather();

  return (
    <section className="mt-10">
      <h1 className="text-2xl font-medium">Today&apos;s Hightlights</h1>
      <div className="flex mt-9 justify-between">
        <HightlightCard title="Humandity">
          <div className="flex">
            <p className="text-4xl font-medium">
              <CountUp
                start={0}
                end={weather?.main.humidity ?? 0}
                duration={3}
              />
            </p>
            <p className="font-medium">%</p>
          </div>
          <p className="mt-7">
            {checkHumidityLevel(weather?.main.humidity ?? 0)}
          </p>
        </HightlightCard>
        <HightlightCard title="Wind Status">
          <div className="flex items-end gap-2">
            <p className="text-4xl font-medium">
              <CountUp
                start={0}
                end={weather?.wind.speed ?? 0}
                duration={3}
                decimals={2}
              />
            </p>
            <p className="text-xl font-medium">km/h</p>
          </div>
          <p className="mt-7">Degree: {weather?.wind.deg}°</p>
        </HightlightCard>
        <HightlightCard title="Visibility">
          <div className="flex items-end gap-2">
            <p className="text-4xl font-medium">
              <CountUp
                start={0}
                end={visibilityInKm(weather?.visibility ?? 0)}
                duration={3}
              />
            </p>
            <p className="font-medium">km</p>
          </div>
          <p className="mt-7">
            {assessVisibilityLevel(weather?.visibility ?? 0)}
          </p>
        </HightlightCard>
      </div>
    </section>
  );
};

export default Hightlight;
