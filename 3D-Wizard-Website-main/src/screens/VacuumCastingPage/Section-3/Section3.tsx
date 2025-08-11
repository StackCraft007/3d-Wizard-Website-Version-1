import React from 'react';

export const Section3 = (): JSX.Element => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header with dotted border */}
        <div className="text-center mb-9">
            <div className="text-[62px] font-['Manrope'] font-semibold text-gray-700">
              Process
            </div>
            <div className='relative w-[1217px] h-[253px] rounded-[12px] overflow-hidden'>
                <img 
                src=""
                alt="process"
                className="absolute inset-0 w-full h-full object-cover" />
            </div>
        </div>
      </div>
    </div>
  );
};