import React from "react";
import { CiSearch } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import sunny from "@/assets/sunny.png";
import { IoCloudyOutline } from "react-icons/io5";
import { SiMicrostrategy } from "react-icons/si";
import { FiTarget } from "react-icons/fi";

const Main = () => {
  return (
    <div className="bg-white rounded-tl-3xl rounded-bl-3xl px-12 py-9">
      <div className="container">
        <div className="inline-flex items-center gap-3">
          <CiSearch className="w-8 h-8" />
          <Input type="text" placeholder="Seach for places..." />
          <div className='rounded-full bg-[#ececf4] p-2 hidden md:block'>
            <FiTarget className="w-4 h-4"/>
          </div>
        </div>
        <Image src={sunny} alt="Sunny" width={200} height={200} />
        <div className='flex'>
          <h1 className='text-7xl'>
            12
          </h1>
          <span className='text-5xl'>°C</span>
        </div>
        <p className='mt-6 text-lg font-medium'>Monday, <span className='text-[#d6d7e7]'>16.00</span></p>
        <div className='border-b-2 my-6'/>
        <div className='flex items-center gap-3'>
          <IoCloudyOutline />
          <p className='font-medium text-sm'>Mostly Cloudy</p>
        </div>
        <div className='flex items-center gap-3 mt-6'>
          <SiMicrostrategy />
          <p className='font-medium text-sm'>Rain - 30%</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
