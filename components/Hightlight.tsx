import React from "react";
import HightlightCard from "./HightlightCard";

const Hightlight = () => {
  return (
    <section className="mt-10">
      <h1 className="text-2xl font-medium">Today's Hightlights</h1>
      <div className="flex mt-9 justify-between">
        <HightlightCard title="Humandity">
          <div className='flex'>
            <p className="text-4xl font-medium">7.70</p>
            <p className='font-medium'>%</p>
          </div>
          <p className='mt-7'>Degree: 120</p>
        </HightlightCard>
        <HightlightCard title="Wind Status">
          <div className='flex items-end gap-2'>
            <p className="text-4xl font-medium">12</p>
            <p className='text-xl font-medium'>km/h</p>
          </div>
          <p className='mt-7'>WSW</p>
        </HightlightCard>
        <HightlightCard title="Visibility">
          <div className='flex items-end gap-2'>
            <p className="text-4xl font-medium">1</p>
            <p className='font-medium'>km</p>
          </div>
          <p className='mt-7'>Low</p>
        </HightlightCard>
      </div>
    </section>
  );
};

export default Hightlight;
