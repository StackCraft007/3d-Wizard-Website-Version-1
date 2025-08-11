import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FooterSection } from "./sections/FooterSection";

import { HowItWorksSection } from "./sections/HowItWorksSection";
import { InnovationSection } from "./sections/InnovationSection";
import { SubscriptionSection } from "./sections/SubscriptionSection";
import { TechnologiesSection } from "./sections/TechnologiesSection";
import { TrustedByManySection } from "./sections/TrustedByManySection";

import { IoMdSend } from "react-icons/io";

export const ElementWizardWebsite = (): JSX.Element => {
  return (
    <div className="bg-slate-50 flex flex-row justify-center w-full">
      <div className="bg-slate-50 overflow-hidden w-full  relative">
        {/* Hero Section */}
        <section className="relative mb-[300px]">
          

          {/* Hero Content */}
          <div className="w-[758px] mt-[150px] ml-[126px] bg-[linear-gradient(180deg,rgba(17,24,39,1)_0%,rgba(17,24,39,0.6)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Manrope',Helvetica] font-semibold text-transparent text-7xl tracking-[0] leading-[90px]">
            Prototype to Product.
            <br />
            In Days, Not Weeks.
          </div>

          <div className="mt-6 ml-[132px] [font-family:'Manrope',Helvetica] font-medium text-[#111827b2] text-[32px] tracking-[0] leading-[38px]">
            India&apos;s Fastest 3D Printing Service
            <br />
            Upload - Approve - Print
          </div>

          <div className="w-[491px] mt-6 ml-[132px] [font-family:'Manrope',Helvetica] font-medium text-[#11182799] text-xl tracking-[0] leading-[30px]">
            No delays. No hidden costs. <br />
            Just pixel- perfect results delivered fast.
          </div>

          <Link to="/start-print">
            <Button className="mt-6 ml-[131px] w-[247px] h-[67px] rounded-[12px] border border-solid border-[#0d51ff] shadow-[0px_12px_22px_#316bff47] [background:radial-gradient(50%_50%_at_50%_100%,rgba(255,255,255,0.45)_0%,rgba(0,0,0,0)_100%,rgba(255,255,255,0)_100%),linear-gradient(0deg,rgba(49,107,255,1)_0%,rgba(49,107,255,1)_100%)]">
              <div className="relative w-[298px] h-[78px] top-px left-px rounded-[11px] flex items-center justify-center gap-4">
                <div className="flex items-center justify-center">
                  <img
                    className="w-7 h-7 brightness-0 invert"
                    alt="Upload"
                    src="/svgs/upload.svg"
                  />
                </div>
                <div className="[font-family:'Manrope',Helvetica] text-white text-[22px] tracking-[0] leading-[normal] ">
                  Start your print
                </div>
              </div>
            </Button>
          </Link>

       {/* Chat Widget - Increased Size */}
          <Card className="w-[333px] h-[285px] absolute top-[450px] right-[70px] bg-white rounded-[35px_35px_35px_0px] shadow-[16px_16px_28px_#00000014]">
            <CardContent className="p-0">
              {/* Header */}
              <div className="w-full h-[60px] rounded-[35px_35px_0px_0px] bg-[linear-gradient(180deg,rgba(3,79,183,1)_0%,rgba(53,136,249,1)_100%)] flex items-center px-6">
                <div className="[font-family:'Manrope',Helvetica] font-semibold text-white text-[18px]">
                  Hi there!
                </div>
                <img src="/svgs/waving-hand.svg" alt="wave" className="ml-2 w-6 h-6" />
              </div>

              {/* Message Bubble */}
              <div className="w-[208px] h-[64px] mt-[26px] ml-4 bg-[#cbe9ff] rounded-[24px_24px_24px_0px] overflow-hidden">
                <div className="h-10 mt-[15px] ml-[15px] [font-family:'DM_Sans',Helvetica] font-medium text-black text-[18px] leading-5">
                  Hello,
                  <br />
                  How can I help you?
                </div>
              </div>

              {/* Divider Line */}
              <div className="mt-[60px] mx-4 border-t border-gray-300"></div>

              {/* Message input with properly placed send icon */}
              <div className="flex items-center justify-between px-4 mt-3">
                <div className="[font-family:'DM_Sans',Helvetica] font-medium text-[#0000005e] text-lg leading-5 whitespace-nowrap tracking-[0] flex-1">
                  Enter your message...
                </div>
                {/* ✅ Correct usage of IoMdSend */}
                {IoMdSend({ className: "text-gray-500 cursor-pointer ml-2", size: 26 }) as JSX.Element}
              </div>
            </CardContent>
          </Card>


        </section>

        {/* How It Works Section */}
        <section className="mt-[150px]">
          <HowItWorksSection />
        </section>

        {/* Trusted By Many Section */}
        <section className="mt-[100px]">
          <div className="w-[403px] mx-auto [font-family:'Manrope',Helvetica] font-bold text-[#000000e8] text-5xl text-center tracking-[-0.96px] leading-[60px] whitespace-nowrap">
            Trusted by many
          </div>
          <SubscriptionSection />
        </section>

        {/* Technologies Section */}
        <section className="mt-[100px]">
          <div className="w-[1237px] mx-auto [font-family:'Manrope',Helvetica] font-bold text-black text-5xl text-center tracking-[-0.96px] leading-[60px] whitespace-nowrap">
            Discover Our Advanced Manufacturing Technologies
          </div>
          <TechnologiesSection />
        </section>

        {/* Innovation Section */}
        <section className="mt-[100px]">
          <div className="w-[1111px] mx-auto [font-family:'Manrope',Helvetica] font-bold text-black text-[50px] text-center tracking-[-1.00px] leading-[60px] whitespace-nowrap">
            Access the latest innovation through 3D Wizard
          </div>
          <div className="w-[938px] mx-auto mt-[20px] [font-family:'Manrope',Helvetica] font-medium text-[#00000099] text-[32px] text-center tracking-[-0.64px] leading-10">
            As the industry advances, so do we—bringing you the latest in 3D
            printing materials, finishes, and color options!
          </div>
          <InnovationSection />
        </section>

        {/* Limited Time Offer Section */}
        <section className="mt-[100px]">
          <TrustedByManySection />
        </section>

        {/* Call To Action Section */}
        <section>
          <CallToActionSection />
        </section>

        {/* Footer Section */}
        <section className="mt-[100px]">
          <FooterSection />
        </section>
      </div>
    </div>
  );
};
