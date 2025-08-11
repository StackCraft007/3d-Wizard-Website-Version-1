import React from 'react';

export const Section4 = (): JSX.Element => {
  const materials = [
    {
      title: "ABS-like resins",
      description: "Ideal for general-purpose parts with good mechanical properties",
    },
    {
      title: "ABS-like resins",
      description: "Ideal for general-purpose parts with good mechanical properties",
    },
    {
      title: "ABS-like resins",
      description: "Ideal for general-purpose parts with good mechanical properties",
    },
    {
      title: "ABS-like resins",
      description: "Ideal for general-purpose parts with good mechanical properties",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 flex ">
      <div className=" mx-auto">
        {/* Header */}
        <div className="text-center mb-9">
          <h2 className="text-[52px] font-['Manrope'] font-semibold text-gray-700">
            Materials
          </h2>
        </div>

        {/* Cards Grid */}
<div className="flex  gap-14 justify-items-center">
  {materials.map((material, index) => (
    <div 
      key={index} 
      className="bg-white w-[293px] h-[237px] rounded-lg shadow-md overflow-hidden flex flex-col"
    >
      {/* Placeholder Image */}
      <div className="bg-gray-300 flex-1"></div>

      {/* Text */}
      <div className="p-3">
        <h3 className="text-[22px] font-['Manrope'] font-semibold text-gray-900">
          {material.title}
        </h3>
        <p className="text-[14px] font-['Manrope'] font-normal text-gray-600">
          {material.description}
        </p>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};
