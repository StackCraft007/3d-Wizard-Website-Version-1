import React from "react";

export const HowItWorksSection = (): JSX.Element => {
  const workflowSteps = [
    { title: "Upload File", description: "Drop your 3D file or drag & drop", position: "first" },
    { title: "AI Quoting", description: "Instant price calculation using AI" },
    { title: "Instant Approval", description: "Review and approve your quote" },
    { title: "Auto Printing", description: "Automated printing process begins" },
    { title: "Live Tracking", description: "Real time order status updates", position: "last" },
  ];

  return (
    <section className="w-full max-w-[1083px] mx-auto py-16">
      <h2 className="text-5xl font-bold text-center mb-16 tracking-[-0.96px] leading-[60px] 
        [font-family:'Manrope',Helvetica] text-[#000000cf] 
        ">
        How it works
      </h2>

      <div className="relative w-full">
        <div className="flex justify-between items-start relative">
          {workflowSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center w-[164px] relative">
              
              {/* Green Box */}
              <div className="relative mb-4 z-10 flex items-center justify-center">
                <div className="w-[69px] h-[69px] rounded-[20px] shadow-[0px_1.85px_3.15px_#9672ff04,0px_8.15px_6.52px_#9672ff07,0px_20px_13px_#9672ff09,0px_38.52px_25.48px_#9672ff0b,0px_64.81px_46.85px_#9672ff0e,0px_100px_80px_#9672ff12] bg-[linear-gradient(180deg,rgba(56,239,125,1)_0%,rgba(17,153,142,1)_100%)] flex items-center justify-center">
                  {/* Upload Icon */}
                  {index === 0 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                  )}
                  {/* Lightning Icon */}
                  {index === 1 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  )}
                  {/* Checkmark Icon */}
                  {index === 2 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                  {/* Printer Icon */}
                  {index === 3 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 6 2 18 2 18 9" />
                      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                      <rect x="6" y="14" width="12" height="8" />
                    </svg>
                  )}
                  {/* Eye Icon for Live Tracking */}
                  {index === 4 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </div>
                
                {/* Connecting line with dashed style and gap */}
                {index < workflowSteps.length - 1 && (
                  <div className="absolute top-1/2 left-[85px] flex items-center w-[140px] -translate-y-1/2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#15a28c]" />
                    <div className="flex-1 h-[2px]" style={{
                      backgroundImage: 'linear-gradient(to right, #32e180 33%, rgba(255, 255, 255, 0) 0%)',
                      backgroundPosition: 'top',
                      backgroundSize: '15px 2px',
                      backgroundRepeat: 'repeat-x',
                      height: '2px'
                    }} />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#32e180]" />
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-[22px] text-black text-center mb-2 
                [font-family:'Manrope',Helvetica] 
                [-webkit-text-stroke:0.5px_#ffffff96]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-semibold text-[15px] text-[#000000] text-center leading-[26px] 
                [font-family:'Manrope',Helvetica] 
                [-webkit-text-stroke:0.5px_#ffffff96]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
