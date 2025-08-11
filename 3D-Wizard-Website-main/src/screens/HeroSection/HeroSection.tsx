import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  const location = useLocation();
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const timeoutRef = React.useRef<number>();

const navItems = [
  { text: "Services" }, // Removed path
  { text: "Projects", path: "/projects" },
  { text: "About us", path: "/about-us" },
  { text: "Contact us", path: "/contact-us" },
];


  return (
    <header className="w-full h-[77px] border-b border-[#11182747] bg-white relative">
      <div className=" mx-auto flex items-center h-full">
        
        {/* Logo aligned to left */}
        <Link to="/" className="flex-shrink-0">
          <img
            className="w-[126px] h-[77px] object-cover cursor-pointer"
            alt="Poli art FINAL"
            src="/Logo/Logo.png"
          />
        </Link>

        {/* Navigation Items */}
<nav className="flex gap-10 ml-12">
  {navItems.map((item, index) => {
    const isServiceActive =
      location.pathname.startsWith("/3d-printing") ||
      location.pathname.startsWith("/3d-scanning") ||
      location.pathname.startsWith("/vacuum-casting");

    return (
      <div
        key={`nav-item-${index}`}
        className="relative"
        onMouseEnter={() => {
          if (item.text === "Services") {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setIsServicesHovered(true);
          }
        }}
        onMouseLeave={() => {
          if (item.text === "Services") {
            timeoutRef.current = window.setTimeout(() => {
              setIsServicesHovered(false);
            }, 50);
          }
        }}
      >
        {/* Services (non-clickable) */}
        {item.text === "Services" ? (
          <span
            className={`font-['Manrope',Helvetica] font-medium text-[22px] tracking-[0] hover:text-[#0d51ff] ${
              isServiceActive ? "text-[#0d51ff]" : "text-black"
            }`}
          >
            {item.text}
          </span>
        ) : (
          <Link
            to={item.path as string} // Non-null assertion
            className={`font-['Manrope',Helvetica] font-medium text-[22px] tracking-[0] hover:text-[#0d51ff] ${
              location.pathname === item.path ? "text-[#0d51ff]" : "text-black"
            }`}
          >
            {item.text}
          </Link>
        )}

        {/* Dropdown Menu */}
        {item.text === "Services" && isServicesHovered && (
          <div className="absolute top-full left-[-30px] mt-2 w-[811px] h-[361px] bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-6">
            <div className="grid grid-cols-3 gap-12">
              {/* 3D Printing */}
              <div className="space-y-4">
                <Link to="/3d-printing" className="block">
                  <h3 className="font-['Manrope',Helvetica] font-bold text-[28px] text-black hover:text-[#0d51ff] mb-4">
                    3D Printing
                  </h3>
                  <div className="space-y-4">
                    <p className="font-['Manrope',Helvetica] text-[18px] text-[#666666] hover:text-[#0d51ff] cursor-pointer">
                      FDM (Fused Deposition Modeling)
                    </p>
                    <p className="font-['Manrope',Helvetica] text-[18px] text-black hover:text-[#0d51ff] cursor-pointer">
                      SLA (Stereolithography)
                    </p>
                    <p className="font-['Manrope',Helvetica] text-[18px] text-[#666666] hover:text-[#0d51ff] cursor-pointer">
                      SLS (Selective laser sintering)
                    </p>
                    <p className="font-['Manrope',Helvetica] text-[18px] text-[#666666] hover:text-[#0d51ff] cursor-pointer">
                      MJF (Multi Jet Fusion)
                    </p>
                  </div>
                </Link>
              </div>

              {/* 3D Scanning */}
              <div className="space-y-3">
                <Link to="/3d-scanning" className="block">
                  <h3 className="font-['Manrope',Helvetica] font-bold text-[28px] text-black hover:text-[#0d51ff] mb-4">
                    3D Scanning
                  </h3>
                  <div className="space-y-2">
                    <p className="font-['Manrope',Helvetica] text-[18px] text-[#666666] hover:text-[#0d51ff] cursor-pointer">
                      HEXAGON 8 - Axis Laser Scanner
                    </p>
                    <p className="font-['Manrope',Helvetica] text-[18px] text-black hover:text-[#0d51ff] cursor-pointer">
                      HEXAGON BLUE - Light Scanner
                    </p>
                  </div>
                </Link>
              </div>

              {/* Vacuum Casting */}
              <div className="space-y-3">
                <Link to="/vacuum-casting" className="block">
                  <h3 className="font-['Manrope',Helvetica] font-bold text-[28px] text-black hover:text-[#0d51ff]">
                    Vacuum Casting
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  })}
</nav>



        {/* Start your print button */}
        <Link to="/start-print" className="ml-auto mr-6">
          <Button className="flex items-center justify-center gap-2 w-[169px] h-[48px] rounded-[10px] border border-solid border-[#0d51ff] shadow-[0px_10px_19px_#316bff47] font-['Manrope',Helvetica] font-semibold text-base text-white [background:radial-gradient(50%_50%_at_50%_100%,rgba(255,255,255,0.45)_0%,rgba(0,0,0,0)_100%,rgba(255,255,255,0)_100%),linear-gradient(0deg,rgba(49,107,255,1)_0%,rgba(49,107,255,1)_100%)]">
            <img
              className="w-5 h-5 brightness-0 invert drop-shadow-[0_0_1px_rgba(255,255,255,0.8)]"
              alt="Upload"
              src="/svgs/upload.svg"
            />
            <span>Start your print</span>  
          </Button>
        </Link>

        {/* Sign in */}
        <div className="flex flex-col items-center cursor-pointer mr-5">
          <img
            className="w-[30px] h-[25px] invert-0 brightness-0"
            alt="Sign in square"
            src="/svgs/signin.svg"
          />
          <div className="font-['Manrope',Helvetica] font-semibold text-black text-[20px] text-center tracking-[0] leading-normal mt-0">
            Sign in
          </div>
        </div>
      </div>
    </header>
  );
};