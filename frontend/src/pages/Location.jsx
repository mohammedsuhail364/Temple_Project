import React, { useEffect } from "react";
import { assets } from "../assets/assets";

const Location = () => {
  const mapLink = "https://maps.app.goo.gl/VGhWWm9x881D6CyaA"; // Provided Google Maps link

  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto mt-32 bg-white rounded-lg shadow-md">
      {/* Title Section */}
      <h1 className="text-3xl font-bold text-center text-[#6A2C1C] mb-8 mt-12">
        திருக்கோயில் அமைவிடம் மற்றும் வரைபடம்
      </h1>

      {/* Image Section */}
      <div className="flex justify-center mb-6">
        <img
          src={assets.map}
          alt="Temple Location Map"
          className="w-full max-w-md rounded-md shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="text-gray-800 text-justify">
        <p className="text-lg mb-4">
          நமது திருக்கோவில் திருநெல்வேலி மாவட்டம் திசையன்விளை தாலுகாவில் நகரின்
          மேற்குப் பகுதியில் அமைந்துள்ள எழில் கொஞ்சும் ஊரான செல்வமருதூரில் வணிக
          வைசியர் வீதியில் அமையப்பெற்றுள்ளது.
        </p>
        <p className="text-lg mb-4">
          இந்த ஆலயம் சுமார் 150 முதல் 200 ஆண்டுகள் பழமை வாய்ந்ததாக அப்பகுதி
          மக்களால் நம்பப்படுகின்றது.
        </p>
        <p className="text-lg mb-4">
          நமது ஆலயம் திருநெல்வேலியில் இருந்து சுமார் 62 கிலோமீட்டர் தொலைவிலும்
          வள்ளியூரில் இருந்து 39 கிலோமீட்டர் தொலைவிலும் நாங்குநேரியில் இருந்து
          சுமார் 31 கிலோமீட்டர் தொலைவிலும் திருச்செந்தூரில் இருந்து சுமார் 44
          கிலோமீட்டர் தொலைவிலும் அமைந்துள்ளது.
        </p>
        <p className="text-lg">
          இதில் திருநெல்வேலி, வள்ளியூர், நாங்குநேரி, திருச்செந்தூர் போன்ற
          அனைத்து சுற்றுவட்டார நகரங்களிலும் இரயில் சேவை உள்ளது. எனவே அங்கிருந்து
          திசையன்விளை செல்லும் பேருந்துகள் மூலம் எளிதில் திருக்கோவிலை
          வந்தடையலாம்.
        </p>
      </div>

      {/* Button Section */}
      <div className="flex justify-center mt-6">
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-maroon text-white font-bold py-2 px-6 rounded-md shadow-md hover:bg-gray-500 transition duration-300"
        >
          Google Maps-ல் பார்க்க
        </a>
      </div>
    </div>
  );
};

export default Location;
