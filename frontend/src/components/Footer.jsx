import React from 'react';
import { FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-maroon text-white py-4 mt-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Address Section */}
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-sm sm:text-base font-semibold text-center sm:text-left mb-1">
              அறக்கட்டளை அலுவலக முகவரி
            </p>
            <p className="text-xs sm:text-sm text-center sm:text-left">
              ஸ்ரீ செல்வ சுந்தர விநாயகர் திருக்கோயில் அறக்கட்டளை அலுவலகம், <br />
              ஸ்ரீ செல்வ சுந்தர விநாயகர் திருக்கோயில் வளாகம், <br />
              வணிக வைசியர் தெரு, <br />
              செல்வமருதூர், திசையன்விளை - 627 657
            </p>
          </div>

          {/* About the Temple Trust Section */}
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-sm sm:text-base font-semibold text-center sm:text-left mb-1">
              திருக்கோயில் அறக்கட்டளை பற்றிய தகவல்
            </p>
            <p className="text-xs sm:text-sm text-center sm:text-left">
              நமது திருக்கோயில் அறக்கட்டளை பக்தர்களின் நன்மையை நோக்கி செயற்படுகிறது, <br />
              வணிக, கல்வி மற்றும் சமூக சேவைகளில் பல்வேறு பணிகளுக்கு முன்னுரிமை அளிக்கின்றது.
            </p>
          </div>

          {/* Social Media Icons with Labels */}
          <div className="flex flex-col items-center sm:items-start space-y-4 mt-4 sm:mt-0">
            <div className="flex items-center space-x-2">
              <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-2xl sm:text-3xl hover:text-gold transition-colors duration-300"
              >
                <FaYoutube />
              </a>
              <span className="text-sm sm:text-base">திருக்கோவில் YouTube சேனல்</span>
            </div>
            <div className="flex items-center space-x-2">
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-2xl sm:text-3xl hover:text-gold transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <span className="text-sm sm:text-base">திருக்கோயில் Instagram சேனல்</span>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gold mt-4"></div>

        {/* Copyright Section */}
        <div className="text-center text-xs mt-2">
          <p>&copy; 2025 ஸ்ரீ செல்வ சுந்தர விநாயகர் திருக்கோயில் அறக்கட்டளை</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
