import React from 'react';
import { Button } from "../../../components/ui/button";

export const Section2 = (): JSX.Element => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Row - Scanning Equipment */}
        <div className="flex flex-row gap-20 mb-10">
          {/* Hexagon 8 - Axis Laser Scanner */}
            <div className="flex flex-col justify-center items-center">
            <div className="text-[24px] font-['Manrope'] font-bold text-gray-900 py-3">
                HEXAGON 8 - AXIS LASER SCANNER
            </div>
            <div className="relative w-[490px] h-[490px] rounded-[12px] overflow-hidden">
                <img
                src="/3Dscanning/Reverse engineering.jpg"
                alt="Hexagon 8-Axis Laser Scanner"
                className="w-[490px] h-[490px] object-cover rounded-[12px]"
                />
            </div>
            </div>


          {/* Hexagon Blue - Light Scanner */}
          <div className="flex flex-col justify-center items-center">
                <div className="text-[24px] font-['Manrope'] font-bold text-gray-900 py-3">
                    HEXAGON BLUE - LIGHT SCANNER
                </div>
                <div className="relative w-[490px] h-[490px] rounded-[12px] overflow-hidden">
                    <img
                src="/3Dscanning/Metrology.jpg"
                        
                        alt="Hexagon Blue Light Scanner"
                        className="w-[490px] h-[490px] object-cover rounded-[12px]"
                    />
                </div>
          </div>
        </div>

        {/* Bottom Row - Services */}
<div className="flex flex-row justify-center items-stretch gap-40 mt-20">
  {/* Reverse Engineering */}
  <div className="bg-white w-[400px] h-[254px] rounded-2xl shadow-lg p-8 flex flex-col justify-between items-center text-center">
    <div>
      <h3 className="text-[26px] font-['Manrope'] font-semibold text-gray-900">
        REVERSE ENGINEERING
      </h3>
      <p className="text-[22px] font-medium font-['Manrope'] text-gray-700 mt-2">
        Object to CAD File.
      </p>
    </div>
    <Button className="flex items-center justify-center gap-2 w-[236px] h-[66px] rounded-[10px] border border-solid border-[#0d51ff] shadow-[0px_10px_19px_#316bff47] font-['Manrope',Helvetica] font-semibold text-base text-white [background:radial-gradient(50%_50%_at_50%_100%,rgba(255,255,255,0.45)_0%,rgba(0,0,0,0)_100%,rgba(255,255,255,0)_100%),linear-gradient(0deg,rgba(49,107,255,1)_0%,rgba(49,107,255,1)_100%)]">
      <img
        className="w-5 h-5 brightness-0 invert drop-shadow-[0_0_1px_rgba(255,255,255,0.8)]"
        alt="Upload"
        src="/svgs/upload.svg"
      />
      <span>Start your print</span>
    </Button>
  </div>

  {/* QC - Metrology */}
  <div className="bg-white w-[400px] h-[254px] rounded-2xl shadow-lg p-8 flex flex-col justify-between items-center text-center">
    <div>
      <h3 className="text-[26px] font-['Manrope'] font-semibold text-gray-900">
        QC - METROLOGY
      </h3>
      <p className="text-[22px] font-medium font-['Manrope'] text-gray-700 mt-2">
        Check Part dimensions as per CAD.
      </p>
    </div>
    <Button className="flex items-center justify-center gap-2 w-[236px] h-[66px] rounded-[10px] border border-solid border-[#0d51ff] shadow-[0px_10px_19px_#316bff47] font-['Manrope',Helvetica] font-semibold text-base text-white [background:radial-gradient(50%_50%_at_50%_100%,rgba(255,255,255,0.45)_0%,rgba(0,0,0,0)_100%,rgba(255,255,255,0)_100%),linear-gradient(0deg,rgba(49,107,255,1)_0%,rgba(49,107,255,1)_100%)]">
      <img
        className="w-5 h-5 brightness-0 invert drop-shadow-[0_0_1px_rgba(255,255,255,0.8)]"
        alt="Upload"
        src="/svgs/upload.svg"
      />
      <span>Start your print</span>
    </Button>
  </div>
</div>

      </div>
    </div>
  );
};