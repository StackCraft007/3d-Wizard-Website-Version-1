import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const SubscriptionSection = (): JSX.Element => {
  const statistics = [
    {
      value: "3000+",
      label: "Parts Developed",
      width: "w-[168px]",
      textAlign: "text-left",
    },
    {
      value: "120+",
      label: "Happy Customers",
      width: "w-[119px]",
      textAlign: "text-left",
    },
    {
      value: "40+",
      label: "Materials & Finishes",
      width: "w-[103px]",
      textAlign: "text-center",
    },
    {
      value: "6",
      label: "Tecnologies Offered",
      width: "w-[100px]",
      textAlign: "text-center",
    },
    {
      value: "8+",
      label: "Countries serves",
      width: "w-[142px]",
      textAlign: "text-center",
    },
    {
      value: "100%",
      label: "Quality Checked",
      width: "w-[142px]",
      textAlign: "text-center",
    },
  ];

  return (
    <section className="w-full max-w-[1208px] mx-auto my-8">
      <Card className="relative w-full h-[166px] bg-[#eaf0ff69] rounded-[20px] shadow-[20px_14px_24px_#0000000a] overflow-hidden">
        <CardContent className="p-0 h-full">
          <div className="flex h-full">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col justify-center items-center ${
                  index === 0 ? "pl-5" : ""
                } ${
                  index === statistics.length - 1 ? "rounded-r-[20px]" : ""
                } ${
                  index !== 0 && index !== 2 && index !== 4 ? "bg-white" : ""
                } ${
                  index === statistics.length - 1 ? "bg-white" : ""
                } h-full flex-1`}
              >
                <div
                  className={`${stat.width} ${stat.textAlign} [font-family:'Libre_Franklin',Helvetica] font-medium text-black text-[45px] tracking-[0] leading-[44px] whitespace-nowrap`}
                >
                  {stat.value}
                </div>
                <div
                  className={`w-[110px] mt-1 [font-family:'Libre_Franklin',Helvetica] font-medium text-[#5e5e5e] text-base ${
                    index === 0 ? "text-center" : "text-center"
                  } tracking-[0] leading-[normal]`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
