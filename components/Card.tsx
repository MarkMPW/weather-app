import React from "react";
import Image from "next/image";
import { WeeklyDataType } from "@/constants/weeklyData";

const Card = ({ date }: { date: WeeklyDataType }) => {
  return (
    <div className="bg-white rounded-xl py-2 px-6 flex flex-col items-center gap-2">
      <p>{date.day}</p>
      <Image src={date.imgUrl} alt="weather icon" width={60} height={60} className='object-cover w-[60px] h-[60px]' />
      <div className="inline-flex">
        <p>{date.highest}°</p>
        <p className="text-[#a8a9b5]">{date.lowest}°</p>
      </div>
    </div>
  );
};

export default Card;
