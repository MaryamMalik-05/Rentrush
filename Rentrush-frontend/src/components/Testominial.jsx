/*import React from "react";

function Testominial({name,city,desc}) {
  return (
    <div className="bg-[#C17D3C] w-full px-3 py-7 min-h-[200px] rounded-lg flex flex-col gap-3">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row justify-start gap-5">
          <img
            src="/src/assets/user.png"
            className="h-12 rounded-full border-2"
            alt=""
          />
          <div className="flex flex-col">
            <span className="font-bold">{name}</span>
            <span className="text-[#2C2C2C]">{city}</span>
          </div>
        </div>
        <p>4.5</p>
      </div>
      <p>
        {desc}
      </p>
    </div>
  );
}

export default Testominial;*/

import React from "react";

function Testimonial({ name, city, desc }) {
  return (
    <div className="bg-[#C17D3C] w-full px-6 py-8 min-h-[200px] rounded-lg flex flex-col gap-4 shadow-lg">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row justify-start gap-5 items-center">
          <img
            src="/src/assets/user.png"
            className="h-12 w-12 rounded-full border-2 border-white"
            alt={`${name}'s profile`}
          />
          <div className="flex flex-col">
            <span className="font-bold text-lg">{name}</span>
            <span className="text-[#2C2C2C] text-sm">{city}</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-yellow-400 text-xl">★</span>
          <span className="font-bold">4.5</span>
        </div>
      </div>
      <p className="text-gray-800 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

export default Testimonial;
