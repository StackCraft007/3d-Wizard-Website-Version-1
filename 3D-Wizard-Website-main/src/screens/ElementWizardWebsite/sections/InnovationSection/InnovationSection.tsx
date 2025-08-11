import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const InnovationSection = (): JSX.Element => {
  // Data for industry cards
  const industryCards = [
    {
      title: "Healthcare",
      image: "/InnovationSection/Healthcare.jpeg",
    },
    {
      title: "Architecture",
      image: "/InnovationSection/Architecture.jpg",
    },
    {
      title: "Defence",
      image: "/InnovationSection/Defence.webp",
    },
    {
      title: "Automotive",
      image: "/InnovationSection/Automotive.jpg",
    },
    {
      title: "FMCG",
      image: "/InnovationSection/FMCG.jpg",
    },
    {
      title: "Hobbyist",
      image: "/InnovationSection/Hobbyist.webp",
    },
  ];

  return (
    <section className="w-full py-16 px-4 mt-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industryCards.map((card, index) => (
            <Card
              key={index}
              className="relative h-[363px] w-[353] overflow-hidden border-0 rounded-3xl"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover backdrop-blur-[5px] backdrop-brightness-[100%] scale-110 [-webkit-backdrop-filter:blur(5px)_brightness(100%)]"
                alt={`${card.title} background`}
                src={card.image}
              /> <div className="absolute inset-0 bg-black/40"></div>
              <CardContent className="relative h-full flex items-center justify-center">
                <h3 className="[-webkit-text-stroke:0.5px_#ffffff] font-bold text-[#ffffffc9] text-[55px] text-center tracking-[-1.00px] leading-[60px] font-['Manrope',Helvetica]">
                  {card.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};