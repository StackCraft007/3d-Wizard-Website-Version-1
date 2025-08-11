import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const CallToActionSection = (): JSX.Element => {
  return (
    <div className="w-full py-10 px-6">
      <Card className="relative w-full mx-auto max-w-[1320px] rounded-[25px] border border-solid border-[#0000001f] shadow-[12px_14px_24px_#00000014] overflow-hidden p-8 bg-white">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row items-center justify-between p-8 gap-8">
            <div className="max-w-[534px]">
              <h2 className="text-[45px] font-bold font-['Manrope',Helvetica] tracking-[-0.80px] leading-[60px] bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent">
                Be the first to know
              </h2>
              <p className="mt-1 text-lg text-[#000000c2] font-['Manrope',Helvetica] text-justify">
                Sign up for our newsletter to receive all the latest product
                updates, get helpful tips and insights from the team and enjoy
                direct access to all our latest offers and discounts.
              </p>
            </div>

            <div className="flex w-full max-w-[500px] items-center gap-5 m-10">
              <Input
                className="h-[75px] w-full px-5 rounded-xl bg-white text-base font-['Poppins',Helvetica] text-[#0b0101] placeholder:text-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-none focus:ring-2 focus:ring-[#316bff] focus:outline-none"
                placeholder="Enter your Email"
              />
              <Button className="h-[55px] px-7 py-9 rounded-xl bg-[#316bff] hover:bg-[#255ae6] text-white text-lg  font-['Poppins',Helvetica] shadow-[0_4px_10px_#00000012]">
                Subscribe
              </Button>
            </div>


          </div>
        </CardContent>
      </Card>
    </div>
  );
};
