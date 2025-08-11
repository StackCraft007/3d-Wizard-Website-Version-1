import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";

export const TechnologiesSection = (): JSX.Element => {
  const serviceCards = [
    {
      id: "3d-printing",
      title: "3D Printing",
      image: "/TechnologiesSection/3d Printing.png",
      path: "/3d-printing",
      buttonText: "Start your print",
      learnMoreText: "Learn more about 3D Printing →",
    },
    {
      id: "3d-scanning",
      title: "3D Scanning",
      image: "/TechnologiesSection/3d scanning.png",
      path: "/3d-scanning",
      buttonText: "Scan now",
      learnMoreText: "Learn more about 3D Scanning →",
    },
    {
      id: "vacuum-casting",
      title: "Vacuum Casting",
      image: "TechnologiesSection/Vacuum casting.jpg",
      path: "/vacuum-casting",
      buttonText: "Order now",
      learnMoreText: "Learn more about Vacuum Casting →",
    },
  ];

  return (
    <section className="w-full py-8 px-4 mt-8">
      <div className="max-w-[1192px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {serviceCards.map((service) => (
            <Link key={service.id} to={service.path} className="block">
              <Card className="relative h-[409px] rounded-[20px] shadow-[14px_14px_24px_#00000014] overflow-hidden hover:shadow-[20px_20px_30px_#00000020] transition-all duration-300 cursor-pointer group">
                <div className="relative h-[302px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    alt={service.title}
                    src={service.image}
                  />
                </div>
                <CardContent className="p-0">
                  <h3 className="w-full text-center mt-5 font-bold text-black text-[40px] tracking-[-0.80px] leading-[60px] [font-family:'Manrope',Helvetica] whitespace-nowrap group-hover:text-[#316bff] transition-colors duration-300">
                    {service.title}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};