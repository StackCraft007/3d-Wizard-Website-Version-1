import React, { useState } from "react";
import { HeroSection } from "../HeroSection";
import { Phone, Mail, MapPin, Twitter, Instagram, Facebook, Linkedin } from "lucide-react";

export const ContactUsPage = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <HeroSection /> */}
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl [font-family:'Manrope',Helvetica] font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-medium text-gray-600 text-[18px] [font-family:'Manrope',Helvetica]">
            Any question or remarks? Just write us a message!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column - Contact Information */}
              <div className="bg-[#3E74FF] p-8 lg:p-12 text-white relative overflow-hidden m-3 rounded-2xl">
                {/* Decorative circles */}
                <div className="absolute bottom-[-50px] right-[-50px] w-60 h-60 bg-[#FFFFFF] bg-opacity-[.46] rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#316BFF]  bg-opacity-[.46] rounded-full"></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-semibold mb-10">Contact Information</h2>
                  
                  <div className="space-y-14 ">
                    <div className="flex items-center space-x-4">
                      <Phone className="h-6 w-6" />
                      <span className="text-[16px] text-base">7506120031</span>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <Mail className="h-6 w-6" />
                      <span className="text-[16px] text-base">3dwizardhub@gmail.com</span>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 mt-1 flex-shrink-0" />
                      <div className="text-[16px] text-base">
                        Shop no 1, Iskcon Temple Rd, near Four Square Corner,<br />
                        near Dharamraj Chowk, Navashakti Society,<br />
                        Ravet, Pune, Pimpri-Chinchwad, Maharashtra 411044
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 mt-64 mb-0">
                    <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full px-0 py-3 text-lg border-0 border-b-2 border-gray-300 bg-transparent focus:border-blue-500 focus:outline-none focus:ring-0 placeholder-gray-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        className="w-full px-0 py-3 text-lg border-0 border-b-2 border-gray-300 bg-transparent focus:border-blue-500 focus:outline-none focus:ring-0 placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 012 3456 789"
                        className="w-full px-0 py-3 text-lg border-0 border-b-2 border-gray-300 bg-transparent focus:border-blue-500 focus:outline-none focus:ring-0 placeholder-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your message..."
                      rows={4}
                      className="w-full px-0 py-3 text-lg border-0 border-b-2 border-gray-300 bg-transparent focus:border-blue-500 focus:outline-none focus:ring-0 resize-none placeholder-gray-500"
                    />
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      className="flex items-center justify-center gap-2 w-[169px] h-[48px] rounded-[10px] border border-solid border-[#0d51ff] shadow-[0px_10px_19px_#316bff47] font-['Manrope',Helvetica] font-semibold text-base text-white [background:radial-gradient(50%_50%_at_50%_100%,rgba(255,255,255,0.45)_0%,rgba(0,0,0,0)_100%,rgba(255,255,255,0)_100%),linear-gradient(0deg,rgba(49,107,255,1)_0%,rgba(49,107,255,1)_100%)]"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};