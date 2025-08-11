import React from 'react';
import { Button } from "../../../components/ui/button";

export const Section1 = (): JSX.Element => {
  return (
    <div className="bg-gray-50 flex justify-center py-16 ">
      <div className="mx-auto ">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-[40px] font-['Manrope'] font-bold text-gray-900 mb-8">
            Vaccum Casting
          </h2>
        </div>

        {/* Hero Image */}
        <div className="mb-8">
<div className="relative w-[1171px] h-[593px] rounded-[12px] overflow-hidden">
  <img
    src="/Vacuum casting/Vacuum casting.jpg"
    alt="Professional 3D scanning equipment with laser technology"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
</div>

        </div>

        {/* Service Title */}
        <div className="text-center mb-6">
          <h3 className="text-[28px] font-['Manrope'] font-bold text-gray-900">
            3D Wizard Vacuum Casting – Replicate with Precision, Scale with Ease    
          </h3>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto">
          <p className="text-[24px] font-medium font-['Manrope'] text-gray-700 leading-relaxed text-center">
            At 3D Wizard, our state-of-the-art vacuum casting machines help bring
your ideas to life with high-quality, detailed replicas. Vacuum casting is an
efficient and cost-effective way to produce small batches of parts that look
and feel like final products.
          </p>
        </div>

        {/* Optional CTA - uncomment if needed */}
        
        <div className="flex justify-center mt-8">
          <Button className="flex items-center justify-center gap-2 w-[169px] h-[48px] rounded-[10px] border border-solid border-[#0d51ff] shadow-[0px_10px_19px_#316bff47] font-['Manrope',Helvetica] font-semibold text-base text-white [background:radial-gradient(50%_50%_at_50%_100%,rgba(255,255,255,0.45)_0%,rgba(0,0,0,0)_100%,rgba(255,255,255,0)_100%),linear-gradient(0deg,rgba(49,107,255,1)_0%,rgba(49,107,255,1)_100%)]">
            <span>Order Now</span>  
          </Button>
        </div>

       
      </div>
    </div>
  );
};