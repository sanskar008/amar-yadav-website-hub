import React from "react";
import { Crown, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="relative text-white shadow-2xl">
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "banner.jpg",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.7, // adjust opacity here as needed
          pointerEvents: "none", // so it doesn't interfere with interactions
        }}
      />

      {/* Gradient overlay on top of bg image to keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#D97706] opacity-70 z-10"></div>

      {/* Content container */}
      <div className="relative container mx-auto px-4 py-8 z-20">
        {/* Row: Left Photo + Center Text + Right Photo */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-6">
          {/* Left Photo + Caption */}
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <a
              href="https://www.pmindia.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/pm.png"
                alt="PM"
                className="w-80 h-80 object-cover rounded-full border-4 border-red-600"
              />
            </a>
            <p className="mt-2 text-lg text-center text-blue-700 font-bold">
              <a
                href="https://www.pmindia.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                माननीय प्रधानमंत्री जी
              </a>
            </p>
          </div>

          {/* Center Text */}
          <div className="text-center mx-4 flex-1">
            <div className="flex justify-center items-center mb-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-wide text-blue-700">
                श्री अमर सिंह यादव
              </h1>
            </div>

            <div className="flex justify-center items-center mb-4">
              <img
                src="/bjp_flwr_cropped.png"
                alt="BJP Flower"
                className="mr-3"
                style={{ width: 90, height: 90 }}
              />
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-700">
                विधायक 162 - राजगढ़
              </h2>
              <img
                src="/bjp_flwr_cropped.png"
                alt="BJP Flower"
                className="mr-3"
                style={{ width: 90, height: 90 }}
              />
            </div>
            <div className="flex justify-center items-center mb-4">
              <a
                href="https://www.instagram.com/amarsingh_bjp/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/amar2.png"
                  alt="Shri Amar Singh Yadav"
                  className="w-80 h-80 mt-4 object-cover rounded-full border-4 border-red-600"
                />
              </a>
            </div>

            {/* Caption */}
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 inline-block">
              <p className="text-xl font-bold text-blue-700">
                जनता के सेवक • लोकतंत्र के रक्षक
              </p>
            </div>
          </div>

          {/* Right Photo + Caption */}
          <div className="flex flex-col items-center mt-4 md:mt-0 ">
            <a
              href="https://www.mpinfo.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/cm.png"
                alt="CM"
                className="w-80 h-80 object-cover rounded-full border-4 border-red-600"
              />
            </a>
            <p className="mt-2 text-lg text-center text-blue-700 font-bold">
              <a
                href="https://www.cmmp.mp.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                माननीय मुख्यमंत्री जी
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Decorative border */}
      <div className="h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>
    </header>
  );
};

export default Header;
