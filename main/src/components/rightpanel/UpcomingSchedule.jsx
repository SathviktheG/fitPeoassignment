import React from 'react'

const UpcomingSchedule = () => {
  return (
        <div className="flex flex-col gap-2 px-6">
          <div className='font-sans text-[#7d7d7e]'> On Thursday</div>
          <div className="flex w-full gap-4">
            <div className="bg-white hover:bg-blue-100 rounded-2xl w-[45%] px-3 py-2 shadow">
              <div className="flex justify-between items-center pl-2 pb-1">
                <span className="text-sm font-medium">Health Checkup</span>
                <span className="pr-2 text-lg">🩺</span>
              </div>
              <div className="pl-2 text-xs text-gray-600">10:00 AM - 11:00 AM</div>
            </div>

            <div className="bg-white hover:bg-blue-100 rounded-2xl w-[55%] px-3 py-2 shadow">
              <div className="flex justify-between items-center pl-2 pb-1">
                <span className="text-sm font-medium">Ophthalmologist</span>
                <span className="pr-2 text-lg">👁️</span>
              </div>
              <div className="pl-2 text-xs text-gray-600">11:30 AM - 12:30 PM</div>
            </div>
          </div>
          <div className='font-sans text-[#818181]'>On Saturday</div>
          <div className="flex w-full gap-4">
            <div className="bg-white hover:bg-blue-100 rounded-2xl w-[45%] px-3 py-2 shadow">
              <div className="flex justify-between items-center pl-2 pb-1">
                <span className="text-sm font-medium">Cardiologist</span>
                <span className="pr-2 text-lg">❤️</span>
              </div>
              <div className="pl-2 text-xs text-gray-600">2:00 PM - 3:00 PM</div>
            </div>

            <div className="bg-white hover:bg-blue-100 rounded-2xl w-[55%] px-3 py-2 shadow">
              <div className="flex justify-between items-center pl-2 pb-1">
                <span className="text-sm font-medium">Neurologist</span>
                <span className="pr-2 text-lg">🧠</span>
              </div>
              <div className="pl-2 text-xs text-gray-600">4:00 PM - 5:00 PM</div>
            </div>
          </div>
        </div>

  )
}

export default UpcomingSchedule
