import React, { ReactNode } from 'react'

const HightlightCard = ({ title, children }: {  title: string, children: ReactNode}) => {
  return (
    <div className='py-3 px-5 w-[230px] bg-white rounded-xl'>
      <p className='text-xl text-[#a6a7b4]'>{title}</p>
      <div className='mt-5'> 
        {children}
      </div>
    </div>
  )
}

export default HightlightCard
