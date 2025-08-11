import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { MdEmail } from "react-icons/md";

export const TrustedByManySection = (): JSX.Element => {
  return (
    <section className="w-full py-20">
      <Card className="mx-auto max-w-[1275px] bg-[#ffffff05] rounded-[32px] border border-solid border-white shadow-[12px_14px_24px_#0000000f] overflow-hidden">
        <CardContent className="p-0 relative">
          {/* Background effects */}
          <div className="relative w-full">
            <div className="absolute w-[608px] h-[166px] top-[217px] left-[-17px] bg-white rounded-[304px/83.16px] rotate-[39.51deg] blur-[112px]" />
            <div className="absolute w-[608px] h-[141px] top-[121px] right-0 bg-white rounded-[304px/70.5px] rotate-[24.77deg] blur-[112px]" />

            {/* Main content container */}
            <div className="flex flex-col items-center justify-center py-20 px-4">

              {/* Limited time offer badge */}
              <div className="relative mb-4">
                <Badge
                  className="flex items-center gap-3 px-12 py-4 bg-[#c2d3ff87] rounded-[35px] backdrop-blur-[5px] hover:bg-[#c2d3ff87] transition-none text-[#316bff]"
                >
                  {/* Inline SVG Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 1000 1000"
                  >
                    <g transform="translate(0,511) scale(0.1,-0.1)">
                      <path d="M3498.5,4987.6c-132.8-38.3-301.3-224.7-347.3-383c-76.6-257.9-38.3-518.4,135.3-878.4c194.1-406,485.2-699.7,891.2-898.9l194.1-97H5000h628.2l194.1,97c406,199.2,697.1,492.8,891.2,898.9c240,497.9,232.4,870.8-17.8,1121c-127.7,127.7-270.7,183.9-408.6,155.8c-150.7-28.1-385.6-211.9-602.6-469.9c-209.4-247.7-574.6-778.8-633.3-921.8c-40.9-97-61.3-97-102.1,0c-117.5,286-732.9,1085.3-955,1246.1C3784.5,5008,3674.7,5036.1,3498.5,4987.6z M3815.1,4372.2c288.5-306.4,559.2-686.9,722.7-1008.7c43.4-86.8,79.2-166,79.2-173.6c0-33.2-86.8-5.1-275.8,89.4c-158.3,79.2-242.6,143-362.6,273.2c-252.8,275.8-423.9,684.3-372.8,886.1C3628.7,4535.6,3674.7,4520.3,3815.1,4372.2z M6394.2,4438.6c30.7-117.5-12.8-298.8-120-518.4c-143-291.1-377.9-528.6-643.5-656.3c-107.2-48.5-209.4-86.8-229.8-81.7c-46,10.2,155.8,380.5,383,704.8c186.4,260.5,508.1,618,559.2,618C6361,4505,6386.6,4474.3,6394.2,4438.6z"/>

            <path d="M735.5,1376.9V342.7h2017.3h2017.3v1034.2V2411H2752.9H735.5V1376.9z"/>

            <path d="M5229.8,1376.9V342.7h2017.3h2017.3v1034.2V2411H7247.1H5229.8V1376.9z"/>

            <path d="M1271.8-2376.9V-4790H3021h1749.2v2413.1V36.2H3021H1271.8V-2376.9z"/>

            <path d="M5229.8-2376.9V-4790h1774.7h1774.7v2413.1V36.2H7004.6H5229.8V-2376.9z"/></g>
                              </svg>
                              <span className="font-semibold text-[30px] tracking-[-0.6px]">
                    Limited Time offer
                  </span>
                </Badge>
              </div>

              {/* Heading */}
              <h1 className="w-[1111px] mx-auto [font-family:'Manrope',Helvetica] font-bold text-[53px] text-center tracking-[-1px] leading-[70px] whitespace-nowrap mb-1">
                <span className="text-[#000000]">Discover </span>
                <span className="text-[#316bff]">3D Wizard</span>
                <span className="text-[#000000]"> with a Free Starter Print</span>
              </h1>

              {/* Description */}
              <p className="w-full px-18 text-center [font-family:'Manrope',Helvetica] font-medium text-black text-[30px] tracking-[-0.60px] leading-[50px] mb-5">
                Experience the magic of 3D printing with us. A small gift to kickstart
                your journey with 3D Wizard.
              </p>

              {/* Claim Box */}
              <Card className="w-[720px] bg-white rounded-[20px] shadow-[0px_12px_32px_rgba(0,0,0,0.08)] border border-gray-200 p-8 text-center mb-8">
                <CardContent className="p-0 flex flex-col items-center">
                  {/* Claim text */}
                  <p className="w-full mx-auto [font-family:'Manrope',Helvetica] font-bold text-[32px] text-center tracking-[-1px] leading-[44px]">
                    Claim your Freebie
                  </p>

                  <p className="max-w-[950px] text-center [font-family:'Manrope',Helvetica] font-medium text-black text-[24px] tracking-[-0.60px] leading-[40px] mb-6 pl-0">
                    📦 No cost, no surprises — just print joy.
                  </p>

                  {/* CTA Button */}
                  <Button className="relative w-[577px] h-[70px] rounded-[12px] border border-solid border-[#0d51ff] shadow-[0px_12px_22px_#316bff47] [background:radial-gradient(50%_50%_at_50%_100%,rgba(255,255,255,0.45)_0%,rgba(0,0,0,0)_100%,rgba(255,255,255,0)_100%),linear-gradient(0deg,rgba(49,107,255,1)_0%,rgba(49,107,255,1)_100%)]">
                    <span className="[font-family:'Manrope',Helvetica] font-semibold text-textlightmodeneutral text-[32px] text-center">
                      Get My Free Product
                    </span>
                  </Button>

                  {/* Privacy message */}
                  <p className="max-w-[950px] text-center [font-family:'Manrope',Helvetica] text-medium text-black text-[20px] tracking-[-0.40px] leading-[32px] mt-4 pl-0">
                    🔒 We respect your privacy. No spam, unsubscribe anytime.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
