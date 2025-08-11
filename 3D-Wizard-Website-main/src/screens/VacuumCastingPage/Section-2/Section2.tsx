import React from 'react';

export const Section2 = (): JSX.Element => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header with dotted border */}
        <div className="text-center mb-9">
            <div className="text-[62px] font-['Manrope'] font-semibold text-gray-700">
              What is Vacuum Casting?
            </div>
        </div>

        {/* Subtitle */}
        <div className="text-center">
          <h3 className="text-[28px] font-['Manrope'] font-bold text-gray-900">
            Flexible. Functional. Production-like Prototypes.
          </h3>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[22px] font-['Manrope'] text-gray-700 leading-relaxed">
            Vacuum casting is a process used to make perfect copies of a master model. First, a silicone mold is created around the original model. Liquid resin or polyurethane is then poured into the mold while a vacuum removes any air bubbles. This ensures that every tiny detail is captured, and the final part is strong and smooth.
          </p>
        </div>
      </div>
    </div>
  );
};