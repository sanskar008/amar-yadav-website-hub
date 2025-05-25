import React from "react";
import { User, Award, Heart, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 h-fit sticky top-6">
      <div className="text-center mb-6">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center overflow-hidden">
          <img
            src="/amar.jpg"
            alt="श्री अमर सिंह यादव"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-2xl font-bold mb-2" style={{ color: "#FF9933" }}>
          श्री अमर सिंह यादव
        </h3>
        <p className="text-blue-600 font-semibold">
          विधायक निर्वाचन क्षेत्र 162 - राजगढ़
        </p>
      </div>

      <div className="space-y-4">
        <div className="border-l-4 border-blue-500 pl-4">
          <h4 className="font-semibold text-gray-800 flex items-center mb-2">
            <Award className="mr-2 text-blue-600" size={20} />
            परिचय
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            श्री अमर सिंह यादव राजगढ़ विधानसभा क्षेत्र के वर्तमान विधायक हैं। वे
            जनता की सेवा में समर्पित हैं और विकास कार्यों में अग्रणी भूमिका
            निभाते हैं।
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h4 className="font-semibold text-gray-800 flex items-center mb-2">
            <Heart className="mr-2 text-green-600" size={20} />
            मुख्य कार्यक्षेत्र
          </h4>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>• शिक्षा एवं स्वास्थ्य सुविधाओं का विकास</li>
            <li>• कृषि एवं किसान कल्याण</li>
            <li>• रोजगार के अवसरों का सृजन</li>
            <li>• बुनियादी ढांचे का विकास</li>
          </ul>
        </div>

        <div className="border-l-4 border-purple-500 pl-4">
          <h4 className="font-semibold text-gray-800 flex items-center mb-2">
            <Users className="mr-2 text-purple-600" size={20} />
            संपर्क सूत्र
          </h4>
          <div className="text-gray-600 text-sm space-y-1">
            <p>📧 amarsinghyadav@gmail.com</p>
            <p>📞 +91-XXXXX-XXXXX</p>
            <p>🏛️ विधानसभा कार्यालय</p>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 text-center">
        <p className="text-blue-800 font-medium text-sm">
          "जनता की सेवा ही हमारा धर्म है"
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
