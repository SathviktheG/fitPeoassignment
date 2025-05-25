import { MessageCircleMore, Phone } from 'lucide-react'
import React from 'react'

const Tools = () => {
  return (
    <div className='flex flex-col items-center font-sans text-[15px] text-gray-500'>
      <span className='relative right-13 text-gray-400 text-[15px]'>
        Tools
      </span>
      <div className='flex items-center w-[95%] mt-4 hover:text-[#130069] hover:font-semibold'>
        <MessageCircleMore/>
        <span className='pl-4'>Dashboard</span>
      </div>
      <div className='flex items-center w-[95%] mt-6 hover:text-[#130069] hover:font-semibold'>
        <Phone/>
        <span className='pl-4'>History</span>
      </div>
    </div>
  )
}

export default Tools
