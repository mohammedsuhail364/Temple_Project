import { useEffect } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Headers = () => {
  const navigate = useNavigate();

  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigation = (path) => {
    window.scrollTo(0, 0); // Ensure the page scrolls to top when navigating
    navigate(path);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center text-center p-6 bg-amber-50 shadow-xl rounded-lg space-y-6 lg:space-y-0 lg:space-x-8 mt-5 max-w-7xl mx-auto pt-2">
        {/* Image 1 */}
        <motion.img
          src={assets.welcomegirl}
          alt="Welcome Image"
          className="max-w-xs lg:max-w-md h-auto mb-6 lg:mb-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Text */}
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-gray-800 font-poppins font-light leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          அன்புடையீர் வணக்கம் , நமது செல்வ சுந்தர விநாயகர் அறக்கட்டளையின்
          பிரத்தியேக இணையதளத்தின் மூலம் திருக்கோயில் தொடர்பான பல்வேறு நிகழ்வுகளை
          அறிந்துக்கொள்ளவும், வரி மற்றும் நன்கொடை அனுப்பவும் , திருவிழா
          நிகழ்ச்சி நிரல் அறிந்து கொள்ளவும் , கட்டளைக்கு முன்பதிவு செய்வது போன்ற
          பல்வேறு சிறப்பம்சங்களை பெறுவதற்கு வசதியாக உருவாக்கப்பட்ட வலைத்தளம்
          இதுவாகும்
        </motion.p>

        {/* Image 2 */}
        <motion.img
          src={assets.badge}
          alt="Badge"
          className="max-w-xs lg:max-w-96 h-auto"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {/* Division 1 */}
        <div
          onClick={() => handleNavigation("/photos")}
          className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg transition-transform duration-300 transform hover:bg-brown-900 hover:scale-105 hover:text-white"
        >
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
            திருக்கோயில் புகைப்படங்கள்
          </h3>
          <p className="text-gray-600 ">
            திருக்ககோவிலின் எழில்மிகு புகைப்படங்களை இங்கே பதிவிறக்கம் செய்யலாம்
          </p>
        </div>

        {/* Division 2 */}
        <div
          onClick={() => handleNavigation("/festivals")}
          className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg transition-transform duration-300 transform hover:bg-brown-900 hover:scale-105 hover:text-white"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            திருவிழாக்கள்
          </h3>
          <p className="text-gray-600">
            திருக்கோவிலில் நடைபெறும் மாதாந்திர மற்றும் வருடாந்திர திருவிழாக்கள்
          </p>
        </div>

        {/* Division 3 */}
        <div
          onClick={() => handleNavigation("/prebooking")}
          className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg transition-transform duration-300 transform hover:bg-brown-900 hover:scale-105 hover:text-white"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            பூஜை முன்பதிவு
          </h3>
          <p className="text-gray-600">
            திருக்கோவிலின் பூஜைகளுக்கு முன்பதிவு செய்திட
          </p>
        </div>

        {/* Division 4 */}
        <div
          onClick={() => handleNavigation("/map")}
          className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg transition-transform duration-300 transform hover:bg-brown-900 hover:scale-105 hover:text-white"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            இருப்பிடம்
          </h3>
          <p className="text-gray-600">
            திருக்கோவிலின் வரைபடம் மற்றும் இருப்பிடம்
          </p>
        </div>

        {/* Division 5 */}
        <div
          onClick={() => handleNavigation("/songs")}
          className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg transition-transform duration-300 transform hover:bg-brown-900 hover:scale-105 hover:text-white"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            பாடல்கள்
          </h3>
          <p className="text-gray-600">
            திருக்கோவிலின் பாடல்களை இங்கே பதிவிறக்கம் செய்யலாம்
          </p>
        </div>

        {/* Division 6 */}
        <div
          onClick={() => handleNavigation("/donation")}
          className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg transition-transform duration-300 transform hover:bg-brown-900 hover:scale-105 hover:text-white"
        >
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
            நன்கொடை செலுத்தவும்
          </h3>
          <p className="text-gray-600">
            திருக்கோவிலுக்கு வரி மற்றும் நன்கொடை செலுத்திட
          </p>
        </div>

        {/* Division 7: முக்கிய அறிவிப்பு */}
        <div
          onClick={() => handleNavigation("/announcement")}
          className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg transition-transform duration-300 transform hover:bg-brown-900 hover:scale-105 hover:text-white"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            முக்கிய அறிவிப்பு
          </h3>
          <p className="text-gray-600">
            அறிவிப்புகள் மற்றும் முக்கிய தகவல்களை இங்கே காணலாம்
          </p>
        </div>

        {/* Division 8: ஆலோசனை பெட்டி */}
        <div
          onClick={() => handleNavigation("/feedback")}
          className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg transition-transform duration-300 transform hover:bg-brown-900 hover:scale-105 hover:text-white"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            ஆலோசனை பெட்டி
          </h3>
          <p className="text-gray-600">
            உங்கள் கருத்துக்களை மற்றும் ஆலோசனைகளை வழங்க
          </p>
        </div>

        {/* Division 9: தல சிறப்புகள் */}
        <div
          onClick={() => handleNavigation("/specialities")}
          className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg transition-transform duration-300 transform hover:bg-brown-900 hover:scale-105 hover:text-white"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            தல சிறப்புகள்
          </h3>
          <p className="text-gray-600">
            திருக்கோவிலின் தல வரலாறு மற்றும் சிறப்புக்கள்
          </p>
        </div>
      </div>
    </div>
  );
};

export default Headers;
