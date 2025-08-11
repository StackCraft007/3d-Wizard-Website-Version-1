import React from "react";
import { TechnologyCard } from "./TechnologySection/TechnologyCard"; // We'll style this next
import { FinishingServicesSection } from "./FinishingSection/FinishingServicesSection";
import {TrustedByManySection} from "../ElementWizardWebsite/sections/TrustedByManySection";
import { CallToActionSection } from "../ElementWizardWebsite/sections/CallToActionSection";
import { FooterSection } from "../ElementWizardWebsite/sections/FooterSection";

export const ThreeDPrintingPage = (): JSX.Element => {
  const technologies = [
    {
      title: "FDM (Fused Deposition Modeling)",
      image: "/3Dprinting/FDM.jpg",
      printVolume: "10 mm to 2000 mm",
      printMaterials: ["PLA", "ABS", "PETG", "TPU (rubber like)"],
      machineCount: "50",
      strength: 70,
      finish: 45,
      cost: 85,
      learnMoreText: "Learn more about FDM (Fused Deposition Modeling)"
    },
    {
      title: "SLA (Stereolithography)",
      image: "/3Dprinting/SLA.png",
      printVolume: "1 mm to 500 mm",
      printMaterials: ["Prototyping resin", "ABS resin", "Transparent Resin"],
      machineCount: "5",
      strength: 60,
      finish: 90,
      cost: 70,
      learnMoreText: "Learn more about SLA (Stereolithography)"
    },
    {
      title: "SLS (Selective Laser Sintering)",
      image: "/3Dprinting/SLS.png",
      printVolume: "1000 x 1000 x 1000 mm",
      printMaterials: ["Nylon PA - 12"],
      machineCount: "1",
      strength: 85,
      finish: 65,
      cost: 55,
      learnMoreText: "Learn more about SLS (Selective Laser Sintering)"
    },
    {
      title: "MJF (Multi Jet Fusion)",
      image: "/3Dprinting/MJF.png",
      printVolume: "1000 x 1000 x 1000 mm",
      printMaterials: ["Nylon PA - 12"],
      machineCount: "1",
      strength: 90,
      finish: 75,
      cost: 50,
      learnMoreText: "Learn more about MJF (Multi Jet Fusion)"
    }
  ];

  return (
    <div className="bg-slate-50  min-h-screen pt-16">
        <div className="px-6">
          <h1 className="text-4xl font-['Manrope'] font-bold text-gray-900 mb-4">Our 3D Printing Technologies</h1>
        </div>

      <div className="px-6 mt-8">
        <div>
          <div className="flex gap-17">
            {technologies.map((tech, index) => (
              <TechnologyCard key={index} {...tech} />
            ))}
          </div>
        </div>
      </div>

      <div className="text-center pb-8 mt-8">
        <a href="#" className="text-blue-600 text-3xl font-normal font-['Manrope'] ">
          Know more about 3D Printing →
        </a>
      </div>

      {/* ✅ Added finishing services section */}
      <div className="container">
        <FinishingServicesSection />
      </div>

      <section>
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
  );
};
