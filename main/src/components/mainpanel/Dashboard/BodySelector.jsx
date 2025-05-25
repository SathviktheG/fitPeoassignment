import React from 'react';
import markers from './../../../data/markerData';

const BodySelector = () => {
  return (
    <div className="relative w-full">
      <img src="https://res.cloudinary.com/djxfcfg4k/image/upload/v1748198375/wmremove-transformed-removebg-preview_csd9pn.png" alt="Body Scan" className="w-full " />
      {markers.map((marker, idx) => (
        <div
          key={idx}
          className={`absolute group ${marker.style}`}
        >
          <div className="w-full h-full rounded-md border-2 border-[#3764c5] bg-[#619ecf] opacity-0 group-hover:opacity-100 hover:animate-pulse flex items-center justify-center text-white text-xs hover:scale-105 transition-all duration-300" />
          <span className="absolute left-1/2 -translate-x-1/2 mt-1 bg-[#5f42dd] text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {marker.name}
          </span>
        </div>
      ))}
    </div>
  )
}

export default BodySelector;
