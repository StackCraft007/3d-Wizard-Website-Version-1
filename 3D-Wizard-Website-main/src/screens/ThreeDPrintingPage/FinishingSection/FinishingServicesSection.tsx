import React from 'react';

export const FinishingServicesSection = (): JSX.Element => {
  return (
    <div className="bg-slate-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-[35px] font-['Manrope'] font-bold text-gray-900">
            Convert your{' '}
            <span className="text-blue-600">3D PRINTS</span>{' '}
            To Full Colour Finished Products
          </h2>
        </div>

        {/* Hero Image */}
        <div className="mb-8">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/3Dprinting/FINISHES.jpg"
              alt="Professional spray painting service in clean booth environment"
              className="w-[1204px] h-[557px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Call to Action */}
      <div className="text-center pb-8 mt-8">
        <a href="#" className="text-blue-600 text-3xl font-normal font-['Manrope'] ">
          Check Colors and Finishes →
        </a>
      </div>
      </div>
    </div>
  );
};