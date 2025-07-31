import React from "react";

export default function OurServices() {
  const services = [
    ["Contract", "Manufacturing"],
    ["Private Labelling"],
    ["Corporate Gifting"],
    ["Product Sampling"],
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 xl:px-24 2xl:px-32">
        <h2
          className="text-[28px] text-gray-700 text-center mb-12"
          style={{ fontFamily: "Lora" }}
        >
          Our Services
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {services.map((lines, index) => (
            <div
              key={index}
              className="border border-[#7E9E86] text-[#7E9E86] rounded-[12px] w-[290px] sm:w-[270px] h-[150px] flex items-center justify-center text-[22px] font-semibold text-center leading-snug px-6 py-5"
              style={{ fontFamily: "Lora" }}
            >
              <div>
                {lines.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
