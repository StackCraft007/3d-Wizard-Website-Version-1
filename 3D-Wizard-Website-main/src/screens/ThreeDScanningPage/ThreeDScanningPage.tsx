import React from "react";
import { HeroSection } from "../HeroSection";
import { Section1 } from "./Section-1/Section1";
import { Section2 } from "./Section-2/Section2";
import {TrustedByManySection} from "../ElementWizardWebsite/sections/TrustedByManySection";
import { CallToActionSection } from "../ElementWizardWebsite/sections/CallToActionSection";
import { FooterSection } from "../ElementWizardWebsite/sections/FooterSection";
import { Section5 } from "./Section-5";
import { Section4 } from "./Section-4";
import { Section3 } from "./Section-3";

export const ThreeDScanningPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div>
        <Section1/>
      </div>

      <div>
        <Section2/>
      </div>

      <div>
        <Section3/>
      </div>

      <div>
        <Section4/>
      </div>

      <div>
        <Section5/>
      </div>

      <section className="mt-11">
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