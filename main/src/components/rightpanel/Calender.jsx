import { appointments } from "../../data/appointment"

const Calender = () => {
  return (
    <div className="grid grid-cols-7 gap-2 w-full p-0 lg:p-4 h-[150px] xl:h-[150px] ">
      {appointments.map((appt) => (
        <div key={appt.day} className="bg-[#d7d7e4] hover:bg-[#e6e6ec] rounded-lg p-2 flex flex-col items-center">
          <h3 className="font-semibold">{appt.day}</h3>
          <div className="flex flex-col items-center mt-2">
            <span className="text-sm text-gray-500">{appt.hour - 1}:00</span>
            <span className="text-base font-bold text-[#130069]">{appt.hour}:00</span>
            <span className="text-sm text-gray-500">{appt.hour + 1}:00</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Calender
