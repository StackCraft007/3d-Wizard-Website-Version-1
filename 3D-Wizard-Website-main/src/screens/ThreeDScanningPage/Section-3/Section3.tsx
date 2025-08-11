import React from 'react';

export const Section3 = (): JSX.Element => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header with dotted border */}
        <div className="text-center mb-9">
            <div className="text-[62px] font-['Manrope'] font-medium text-gray-700">
              What is 3D Scanning?
            </div>
        </div>

        {/* Subtitle */}
        <div className="text-center">
          <h3 className="text-[28px] font-['Manrope'] font-bold text-gray-900">
            Turning Real Objects into Digital Possibilities
          </h3>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[22px] font-['Manrope'] text-gray-700 leading-relaxed">
            3D Scanning is the process of capturing the shape, size, and texture of a physical object 
            using laser or structured light. The result is a high-accuracy 3D model that can be used for 
            digital design, reverse engineering, modification, or reproduction.
          </p>
        </div>
      </div>
    </div>
  );
};