import React from 'react'

const Organs = () => {
    const cards = [
    { title: "Lungs", emoji: "🫁", date: "Date: 26 May 2025", progress: 70 },
    { title: "Teeth", emoji: "🦷", date: "Date: 3 oct 2024", progress: 80 },
    { title: "Bone", emoji: "🦴", date: "Date: 12 May 2025", progress: 90 },
  ];
  return (
    <div className="h-full w-full flex flex-col gap-2">
      {cards.map((item, i) => (
        <div key={i} className="flex-1 w-full bg-blue-50 rounded-xl p-3">

          <div className="text-xl font-semibold flex items-center gap-2">
            <span>{item.emoji}</span>
            <span>{item.title}</span>
          </div>


          <div className="text-sm text-gray-400 mt-1">{item.date}</div>

          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
            <div
              className={`h-2.5 rounded-full`}
              style={{
                width: `${item.progress}%`,
                backgroundColor: ['#c1121f', '#06d6a0', '#e36414'][i],
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Organs