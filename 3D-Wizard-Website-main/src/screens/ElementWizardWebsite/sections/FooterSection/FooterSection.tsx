import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#f8f9fa] text-gray-800 py-16 px-4">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Left Logo Section (3 parts) */}
        <div className="basis-3/8 flex justify-center md:justify-start">
          <img
            src="/Logo/Logo.png"
            alt="3D Wizard Logo"
            className="w-[450px] h-auto"
          />
        </div>

        {/* Right Content Section (5 parts with fixed width) */}
        <div className="basis-5/8 flex flex-col space-y-6 max-w-[800px]">
          
          {/* More Row */}
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <h4 className="text-lg font-semibold md:w-[150px]">More</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-lg w-full max-w-[600px] text-gray-700">
              <Link to="/blog" className="hover:underline">3D Wizard Blog</Link>
              <Link to="/knowledge-base" className="hover:underline">Knowledge Base</Link>
              <Link to="/materials" className="hover:underline">Materials</Link>
              <Link to="/about-us" className="hover:underline">About Us</Link>
              <Link to="/contact-sales" className="hover:underline">Contact Sales</Link>
              <Link to="/help" className="hover:underline">Need Help?</Link>
            </div>
          </div>

          {/* Contact Row */}
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <h4 className="text-lg font-semibold md:w-[150px]">Contact Us</h4>
            <p className="text-gray-700 text-lg leading-relaxed w-full max-w-[600px]">
              3D Wizard, Shop no 1, Iskcon Temple Rd, near Four Square Corner, 
              near Dharamraj Chowk, Navashakti Society, Ravet, Pune, 
              Pimpri-Chinchwad, Maharashtra 411044
            </p>
          </div>

          {/* Social Row */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <h4 className="text-lg font-semibold md:w-[150px]">Follow Us</h4>
            <div className="flex flex-wrap gap-4 text-blue-600 max-w-[600px]">
              <a href="#"><Facebook className="w-6 h-6 hover:opacity-80" /></a>
              <a href="#"><Instagram className="w-6 h-6 hover:opacity-80" /></a>
              <a href="#"><Linkedin className="w-6 h-6 hover:opacity-80" /></a>
              <a href="#"><Twitter className="w-6 h-6 hover:opacity-80" /></a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Links */}
      <div className="border-t border-gray-300 mt-12 pt-6 flex flex-col md:flex-row justify-between text-base text-gray-600 max-w-[1300px] mx-auto">
        <div className="flex flex-wrap justify-center md:justify-start gap-14">
          <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
          <Link to="/terms-use" className="hover:underline">Terms to use</Link>
          <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link to="/data-protection" className="hover:underline">Data Protection Policy</Link>
          <Link to="/confidentiality" className="hover:underline">Confidentiality notice</Link>
        </div>
        <div className="mt-4 md:mt-0 text-center md:text-right">
          <span className="font-bold">2025</span> 3D Wizard
        </div>
      </div>
    </footer>
  );
};
