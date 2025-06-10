import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">संपर्क जानकारी</h4>
            <div className="space-y-2 text-gray-300">
              <p>
                📧{" "}
                <a
                  href="mailto:AamrY798@gmail.com"
                  className="text-white-600 hover:underline"
                >
                  AamrY798@gmail.com
                </a>
              </p>
              <p>
                📞{" "}
                <a href="tel:+917440681111" className="hover:text-blue-200">
                  +91-74406-81111
                </a>{" "}
                /{" "}
                <a href="tel:+919926394195" className=" hover:text-blue-200">
                  +91-99263-94195
                </a>
              </p>
              <p>🏛️ जिला पंचायत के सामने, राजगढ़</p>
              <p>📍 राजगढ़ विधानसभा क्षेत्र, मध्य प्रदेश</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">महत्वपूर्ण लिंक</h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                मुख्यमंत्री कार्यालय
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                विधानसभा सचिवालय
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                जन सुनवाई
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                योजनाएं
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-bold mb-4">सामाजिक मीडिया</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/amarsinghyadav0/"
                className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-blue-400 p-3 rounded-full hover:bg-blue-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/amarsingh_bjp/?hl=en"
                className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>
            &copy; 2025 श्री अमर सिंह यादव - विधायक राजगढ़। सभी अधिकार सुरक्षित।
          </p>

          <p className="mt-2 text-sm ">
            विकसितकर्ता:{" "}
            <a
              href="https://www.instagram.com/sanskar.008/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              संस्कार
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
