import { Calendar, History, LayoutDashboard, SquarePlus, TrendingUp } from 'lucide-react'
import React from 'react'

const General = () => {
  return (
    <div className='flex flex-col items-center font-sans text-[15px] text-gray-500 w-[100%]'>
      <span className='relative right-13 text-gray-400 text-[15px] '>
        General
      </span>
      <div className='flex items-center w-[95%] mt-4 text-[#130069] font-semibold'>
        <LayoutDashboard/>
        <span className='pl-4 w-[120px] inline-block'>Dashboard</span>
      </div>
      <div className='flex items-center w-[95%] mt-5 hover:text-[#130069] hover:font-semibold'>
        <History/>
        <span className='pl-4'>History</span>
      </div>
      <div className='flex items-center w-[95%] mt-5 hover:text-[#130069] hover:font-semibold'>
        <Calendar/>
        <span className='pl-4'>Calendar</span>
      </div>
      <div className='flex items-center w-[95%] mt-5 hover:text-[#130069] hover:font-semibold'>
        <SquarePlus/>
        <span className='pl-4'>Appointment</span>
      </div>
      <div className='flex items-center w-[95%] mt-5 hover:text-[#130069] hover:font-semibold'>
        <TrendingUp/>
        <span className='pl-4'>Statistics</span>
      </div>
    </div>
  )
}

export default General
