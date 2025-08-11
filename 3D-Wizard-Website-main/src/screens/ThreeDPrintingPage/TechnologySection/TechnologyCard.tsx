import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";

interface TechnologyCardProps {
  title: string;
  image: string;
  printVolume: string;
  printMaterials: string[];
  machineCount: string;
  strength: number;
  finish: number;
  cost: number;
  learnMoreText: string;
  description: string;
}

export const TechnologyCard: React.FC<TechnologyCardProps> = ({
  title,
  image,
  printVolume,
  printMaterials,
  machineCount,
  strength,
  finish,
  cost,
  learnMoreText,
  description,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-[6px_6px_15px_rgba(0,0,0,0.1)] border border-gray-100 hover:shadow-[8px_8px_20px_rgba(0,0,0,0.15)] transition-shadow duration-300 w-[315px] h-[847px] mx-auto overflow-hidden flex flex-col">
      {/* Image Section */}
      <div className="h-[222px] w-[315px] bg-gray-50 flex items-center justify-center overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content Section */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Title Section - Fixed height */}
        <div className="h-[80px] flex items-center justify-center">
          <h3 className="font-['Manrope',Helvetica] text-[22px] font-medium text-black text-center leading-tight">
            {title}
          </h3>
        </div>

        {/* Specifications Section - Fixed height */}
        <div className="h-[288px] overflow-y-auto">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
                <h4 className="font-roboto text-3xl text-[18px] font-semibold text-black">
                  Print volume
                </h4>
              </div>
              <p className="font-roboto text-[18px] font-medium text-black ml-5">
                {printVolume}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
                <h4 className="font-roboto text-3xl text-[18px] font-semibold text-black">
                  Print materials
                </h4>
              </div>
              <div className="text-black ml-5">
                {printMaterials.map((material, index) => (
                  <div
                    key={index}
                    className="font-roboto font-medium text-[18px]"
                  >
                    {material}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
                <h4 className="font-roboto text-[18px] font-semibold text-black">
                  No of machines : {machineCount}
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer before performance bars */}
        <div className="flex-1"></div>

        {/* Performance Bars - Fixed height */}
        {/* Performance Bars - Fixed height */}
        <div className="h-[150px] w-[275px] mx-auto space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-['Manrope'] text-[12px] font-medium text-black">
                Strength
              </span>
            </div>
            <div className="relative w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-green-500 h-1.5 rounded-full relative"
                style={{ width: `${strength}%` }}
              >
                {/* Circle at end */}
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 border border-white rounded-full shadow"></span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-['Manrope'] text-[12px] font-medium text-black">
                Finish
              </span>
            </div>
            <div className="relative w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-orange-500 h-1.5 rounded-full relative"
                style={{ width: `${finish}%` }}
              >
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 border border-white rounded-full shadow"></span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-['Manrope'] text-[12px] font-medium text-black">
                Cost
              </span>
            </div>
            <div className="relative w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-cyan-400 h-1.5 rounded-full relative"
                style={{ width: `${cost}%` }}
              >
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 border border-white rounded-full shadow"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Learn More Link - Fixed height */}
        <div className="h-[42px] font-['Manrope'] flex items-center justify-center">
          <a href="#" className="text-blue-500 hover:text-blue-600 text-xs">
            {learnMoreText} →
          </a>
        </div>

        {/* CTA Button - Fixed height */}
        <div className="h-[60px] flex items-center justify-center">
          <Link to="/start-print">
            <Button
              className="relative overflow-hidden flex items-center justify-center gap-2 w-[169px] h-[48px] 
rounded-[10px] border border-solid border-[#0d51ff] shadow-[0px_10px_19px_#316bff47] 
font-['Manrope',Helvetica] font-semibold text-base text-white
bg-[radial-gradient(50%_50%_at_50%_100%,rgba(255,255,255,0.45)_0%,rgba(0,0,0,0)_100%),linear-gradient(0deg,#316bff_0%,#316bff_100%)]
hover:bg-[radial-gradient(50%_50%_at_50%_0%,rgba(255,255,255,0.6)_0%,rgba(0,0,0,0)_100%),linear-gradient(0deg,#254eda_0%,#254eda_100%)]
transition-[background] duration-700 ease-in-out"
            >
              <img
                className="w-5 h-5 brightness-0 invert drop-shadow-[0_0_1px_rgba(255,255,255,0.8)]"
                alt="Upload"
                src="/svgs/upload.svg"
              />
              <span>Start your print</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
