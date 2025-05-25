
import React from 'react';
import { Crown, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white shadow-2xl">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <Crown className="text-yellow-400 mr-3" size={40} />
            <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
              श्री अमर सिंह यादव
            </h1>
            <Crown className="text-yellow-400 ml-3" size={40} />
          </div>
          
          <div className="flex justify-center items-center mb-4">
            <MapPin className="text-yellow-400 mr-2" size={24} />
            <h2 className="text-2xl md:text-3xl font-semibold text-yellow-200">
              विधायक - राजगढ़
            </h2>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 inline-block">
            <p className="text-lg font-medium">जनता के सेवक • लोकतंत्र के रक्षक</p>
          </div>
        </div>
      </div>
      
      {/* Decorative border */}
      <div className="h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>
    </header>
  );
};

export default Header;
