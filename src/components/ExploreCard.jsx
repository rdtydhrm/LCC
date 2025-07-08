import React from "react";

export default function ExploreCard({ image, name, location, rating, desc }) {
  return (
    <div className="bg-[#E6F2E1] rounded-[20px] shadow-lg w-[290px] min-h-[320px] flex flex-col overflow-hidden hover:shadow-xl transition relative">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-[160px] object-cover rounded-[20px] border-[10px] border-[#E6F2E1]"
        />
        <button className="absolute bottom-2 right-2  rounded-full p-2 shadow transition z-10">
          <svg
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fafafa"
            strokeWidth="2"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>
      <div className="p-4 pt-1 flex flex-col flex-1">
        <h3 className="font-bold text-[18px] text-[#214b4e] mb-1">{name}</h3>
        <p className="text-[#214b4e] text-[14px] mb-1">{location}</p>
        <div className="flex items-center text-[#214b4e] text-[14px] mb-1">
          <span className="mr-1">★★★★★</span>
          <span className="font-semibold">{rating}</span>
          <span className="ml-1 text-[#888]">(35)</span>
        </div>
        <p className="text-[#214b4e] text-[13px] flex-1 mb-2 line-clamp-3">
          {desc}
        </p>
      </div>
    </div>
  );
}
