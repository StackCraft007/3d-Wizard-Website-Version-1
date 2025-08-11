import React from "react";
import { Section1 } from "./Section-1/Section1";
import { Section2 } from "./Section-2/Section2";
import { Section3 } from "./Section-3/Section3";
import { Section4 } from "./Section-4/Section4";
import { Section5 } from "./Section-5/Section5";
export const VacuumCastingPage = (): JSX.Element => {
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
    </div>
  );
};