import React from 'react';

export const Section4 = (): JSX.Element => {
  const processSteps = [
    {
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Using a 3D Scanner to map the surface",
      description: "High-precision laser scanning captures every detail of the object's surface geometry."
    },
    {
      image: "https://images.pexels.com/photos/8566464/pexels-photo-8566464.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Software converts the point cloud data into usable mesh model",
      description: "Advanced algorithms process the captured data into a detailed 3D mesh."
    },
    {
      image: "https://images.pexels.com/photos/3964736/pexels-photo-3964736.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "The Mesh is then processed to a CAD model",
      description: "Final processing converts the mesh into a precise CAD model ready for use."
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[52px] font-['Manrope'] font-medium text-gray-700">
            Process
          </h2>
        </div>

        {/* Process Steps */}
<div className="flex flex-row lg:flex-row items-center justify-center gap-8">
{processSteps.map((step, index) => (
  <React.Fragment key={index}>
    {/* Step Card */}
<div className="bg-white w-[400px] h-[254px] rounded-2xl shadow-lg flex flex-col overflow-hidden flex-none box-border">
  {/* Image */}
  <div className="w-full h-[180px] overflow-hidden">
    <img
      src={step.image}
      alt={step.title}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Title */}
  <div className="flex-1 flex items-center justify-center text-[16px] font-['Manrope'] font-normal text-gray-900 text-center px-2 leading-tight">
    {step.title}
  </div>
</div>




    {/* Arrow (except after last step) */}
    {index < processSteps.length - 1 && (
      <div className="hidden lg:block">
        <svg 
          className="w-8 h-8 text-gray-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M17 8l4 4m0 0l-4 4m4-4H3" 
          />
        </svg>
      </div>
    )}
  </React.Fragment>
))}

</div>

      </div>
    </div>
  );
};