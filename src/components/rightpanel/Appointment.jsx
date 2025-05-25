import React from 'react'

const Appointment = () => {
  return (
    <div className="flex w-full px-6 gap-4 mt-4">
      {/* Card 1 - Dentist */}
      <div className="bg-[#130069] hover:bg-[#47468b] rounded-2xl w-[45%] p-2 shadow">
        <div className="flex justify-between items-center pl-4 pb-1">
          <span className="text-lg font-[500] text-white">Dentist</span>
          <span className="pr-4 text-xl">🦷</span>
        </div>
        <div className="pl-4 pb-1 text-sm text-gray-400">10:00 AM - 11:00 AM</div>
        <div className="pl-4 text-sm font-medium text-gray-300">Dr. Sophia Miller</div>
      </div>

      {/* Card 2 - Physio */}
      <div className="bg-[#d7d7e4] hover:bg-gray-100 rounded-2xl w-[55%] p-2 shadow">
        <div className="flex justify-between items-center pl-4 pb-1">
          <span className="text-lg font-[500]">Physiotherapy</span>
          <span className="pr-4 text-xl">💪</span>
        </div>
        <div className="pl-4 pb-1 text-sm text-gray-600">12:00 PM - 1:00 PM</div>
        <div className="pl-4 text-sm font-medium">Dr. Ryan Patel</div>
      </div>
    </div>
  )
}

export default Appointment
