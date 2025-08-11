import React from 'react';

export const Section5 = (): JSX.Element => {
  const projects = [
    {
      title: "Balanced design",
      date: "Finished 13.07.2024 for Techify",
      description: "mold is created around the original model. Liquid resin or polyurethane is then poured into the mold while a vacuum.",
      image: "https://images.pexels.com/photos/3964736/pexels-photo-3964736.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Balanced design",
      date: "Finished 13.07.2024 for Techify",
      description: "mold is created around the original model. Liquid resin or polyurethane is then poured into the mold while a vacuum.",
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Balanced design",
      date: "Finished 13.07.2024 for Techify",
      description: "mold is created around the original model. Liquid resin or polyurethane is then poured into the mold while a vacuum.",
      image: "https://images.pexels.com/photos/8566464/pexels-photo-8566464.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Balanced design",
      date: "Finished 13.07.2024 for Techify",
      description: "mold is created around the original model. Liquid resin or polyurethane is then poured into the mold while a vacuum.",
      image: "https://images.pexels.com/photos/3964736/pexels-photo-3964736.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[52px] font-['Manrope'] font-medium text-gray-700">
            Our Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-row lg:flex-row items-center justify-center gap-12">
          {projects.map((project, index) => (
<div
  key={index}
  className="bg-white w-[320px] h-[440px] rounded-2xl overflow-hidden flex flex-col shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.16)] transition-shadow"
>
  {/* Project Image */}
  <div className="w-full h-[195px] overflow-hidden flex-none">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Project Content */}
  <div className="flex-1 flex flex-col justify-between items-center px-4 py-3">
    <div className="text-center">
      <div className="text-[18px] font-['Manrope'] font-bold text-gray-900">
        {project.title}
      </div>

      <p className="text-[14px] font-['Manrope'] text-gray-600 mt-1">
        {project.date}
      </p>

      <p className="text-[16px] text-center font-medium font-['Manrope'] text-gray-700 mt-3">
        {project.description}
      </p>
    </div>

    <button className="bg-[#C8D5F6] hover:bg-blue-200 text-[#3455A7] font-['Manrope'] font-bold py-2 px-4 rounded-lg text-[12px] transition-colors duration-200 ">
      Read more
    </button>
  </div>
</div>

          ))}
        </div>
      </div>
    </div>
  );
};