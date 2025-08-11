import React from "react";
import { HeroSection } from "../HeroSection";
import { Button } from "../../components/ui/button";

export const AboutUsPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section with Image */}
<section className="container mx-auto px-4 py-16">
  <div className="flex h-[636px]">
    {/* Left Content */}
    <div className="w-1/2 flex items-center justify-center bg-[#CCE9FF] rounded-lg shadow-lg">
      <div className="text-6xl  font-bold font-['Manrope',Helvetica] text-gray-900">About Us</div>
    </div>

    {/* Right Image */}
    <div className="w-1/2 relative">
      <img
        src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="3D Printing Professional"
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>


      {/* Why Us Section */}
      <section className="bg-gray-50 py-16">
    <div className="bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header with dotted border */}
        <div className="text-center mb-9">
            <div className="text-[62px] font-['Manrope'] font-medium text-gray-700">
              Why Us?
            </div>
        </div>

        {/* Subtitle */}
        <div className="text-center">
          <h3 className="text-[28px] font-['Manrope'] font-bold text-gray-900">
            Specialising in production-grade parts, we deliver unique designs to our customers using a wide range of 3D Printing Technologies.
          </h3>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[22px] font-['Manrope'] text-gray-700 leading-relaxed">
            Orders are placed via our online portal and made in our London 3D printing facility. Many one-off designs, as well as large batches, are manufactured to precise standards and delivered on time, every time. Our service allows our customers to get their products to market faster, disrupting traditional manufacturing methods. Our many clients vary across industries such as engineering, automotive, product design, architecture, art, film and more.
          </p>
        </div>
      </div>


      {/* Cards */}
      <div className="bg-gray-50 p-6 md:p-10 space-y-8">
      <div className="flex justify-center mx-auto gap-6">
<div className="rounded-xl w-[417px] h-[304px] text-[18px] font-['Manrope'] border-2 bg-white font-normal shadow-[4px_4px_10px_rgba(0,0,0,0.1)] p-8 whitespace-pre-line">
  Our advice is honest <br />
  Many customers come to us with limited knowledge of 3D printing and believe it is the solution for everything. 3D printing is just like any tool in a workshop, highly effective for specific applications and not the ultimate solution to everything.
</div>

<div className="rounded-xl w-[417px] h-[304px] text-[18px] font-['Manrope'] border-2 bg-white font-normal shadow-[4px_4px_10px_rgba(0,0,0,0.1)] p-8 whitespace-pre-line">
  Our advice is honest <br />
  Many customers come to us with limited knowledge of 3D printing and believe it is the solution for everything. 3D printing is just like any tool in a workshop, highly effective for specific applications and not the ultimate solution to everything.
</div>

<div className="rounded-xl w-[417px] h-[304px] text-[18px] font-['Manrope'] border-2 bg-white font-normal shadow-[4px_4px_10px_rgba(0,0,0,0.1)] p-8 whitespace-pre-line">
  Our advice is honest <br />
  Many customers come to us with limited knowledge of 3D printing and believe it is the solution for everything. 3D printing is just like any tool in a workshop, highly effective for specific applications and not the ultimate solution to everything.
</div>

      </div>

      {/* Image */}
      <div className="w-full">
        <img
          src="/your-image-path.jpg" // Replace this with your actual image path or import
          alt="3D printing"
          className="rounded-xl w-full h-[392px] border border-blue-600 object-cover"
        />
      </div>
    </div>
    </div>

      <div className=" flex items-center h-[350px] w-full bg-[#CCE9FF] ">

        <div className="font-['Manrope'] font-normal text-[60px] ml-8 mr-80">
          We Bring Ideas to Life with Precision <br/>
           3D Printing for Designers, <br /> Engineers, and Innovators
        </div>

      </div>

      </section>

      {/* Mission Statement Section */}
      <section className="bg-gray-50 py-16">
        <div className="px-24">
          
          <div className="flex gap-20">
            <div>
              <div className="text-[45px] ml-12 font-normal text-gray-900">
                Founders<br />
                Statement
              </div>
              
            <div className="lg:pl-8">
              {/* Placeholder for founder image or additional content */}
              <div className="bg-gray-200 h-[453px] w-[348px] rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Founder Image</span>
              </div>

            </div>
            
            </div>

            {/* Founder's Statement */}
<div className="flex items-center min-h-screen">
  <div className="space-y-3 text-gray-700 leading-relaxed max-w-3xl">
    <p>
      While learning and creating in the world of product design, we were constantly amazed by how rapidly ideas could evolve—from sketches to digital models. Yet when it came to actually making those ideas tangible, we noticed a gap. Traditional manufacturing was rigid and slow. And even though 3D printing had immense promise, the services available were often limited, expensive, or not built with designers in mind.
    </p>

    <p>
      We found ourselves asking—what if additive manufacturing could be more intuitive, more affordable, and more aligned with the creative process? What if engineers, makers, and designers could bring ideas to life without getting stuck in technical complexity?
    </p>

    <p>
      After many prototypes, mistakes, and breakthroughs, that question became our mission.
    </p>

    <p>
      Our platform and team are built to offer more than just prints—we offer insight, collaboration, and flexibility. You can upload your model, explore material options, get instant quotes, and trust that what you receive will match your vision in quality and function.
    </p>

    <p>
      At 3D Wizard, we set out to reimagine how creators interact with digital manufacturing—by building a service that understands both the art and science of making.
    </p>

    <p>
      From consumer products to electronics, healthcare, and mobility—we help ideas grow without the friction. With every part we print, we strive to make digital manufacturing feel personal, dependable, and empowering.
    </p>

    <p className="font-semibold">
      Thank you for being part of this journey. Let’s make something amazing, together.
    </p>

    <p className="font-semibold">
      The 3D Wizard Team
    </p>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Our History Section */}
<section className="">
  <div className=" mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
      
      {/* Left - Image */}
      <div className="w-full h-[713px]">
        <img
          src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="3D Printer History"
          className="w-full h-full object-cover rounded-none"
        />
      </div>
      
      {/* Right - Black background with text */}
      <div className="w-full h-[713px] bg-black text-white flex flex-col items-center  p-12">
        <h2 className="text-[62px] font-normal mb-8 font-['Manrope']">Our History</h2>
      </div>

    </div>

<div className="flex items-center justify-center my-10 bg-gray-50">
  <Button className="flex items-center justify-center gap-2 w-[169px] h-[48px] rounded-[10px] border border-solid border-[#0d51ff] shadow-[0px_10px_19px_#316bff47] font-['Manrope',Helvetica] font-semibold text-base text-white [background:radial-gradient(50%_50%_at_50%_100%,rgba(255,255,255,0.45)_0%,rgba(0,0,0,0)_100%,rgba(255,255,255,0)_100%),linear-gradient(0deg,rgba(49,107,255,1)_0%,rgba(49,107,255,1)_100%)]">
    <span>Join Us</span>  
  </Button>
</div>

  </div>
</section>

    </div>
  );
};