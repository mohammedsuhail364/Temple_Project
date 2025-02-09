import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Annadhanam = () => {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    // Smooth scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Navigate to the Annadhanam page after a delay (optional for smooth navigation)
    setTimeout(() => {
      navigate("/annadhanam");
    }, 500); // Adjust delay to match scroll duration
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center text-center p-4 lg:p-6 bg-amber-50 shadow-xl rounded-lg space-y-4 lg:space-y-0 lg:space-x-6 mt-5 max-w-5xl mx-auto pt-20 mb-10">
      {/* Image */}
      <motion.img 
        src={assets.Annadhanam} 
        alt="Annadhanam" 
        className="max-w-xs lg:max-w-sm h-auto mb-4 lg:mb-0 rounded-lg"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Content */}
      <motion.div 
        className="text-sm sm:text-base lg:text-lg text-gray-800 font-poppins font-light leading-relaxed max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Highlighted Title */}
        <p className="font-bold text-lg text-[#6A2C1C] text-center mb-3">
          திருக்கோயில் அன்னதான திட்டம்
        </p>

        {/* Highlighted Text */}
        <p className="italic text-md text-[#6A2C1C] text-center mb-4">
          தானத்தில் சிறந்த தானம் அன்னதானம்
        </p>

        {/* Description Text */}
        <p className="text-sm text-gray-700 leading-relaxed text-justify mb-4">
          நமது திருவாலயத்தில் ஆண்டுதோறும் நடைபெறும் வருஷாபிஷேகம் மற்றும் நவராத்திரி திருவிழாவின் போது பக்தர்களுக்கு 
          அன்னதானம் வழங்கப்படுகிறது, இந்த சேவை தங்கு தடையின்றி நடைபெற அன்னதான நிரந்தர வைப்பு நிதிக்கு உங்கள் பங்களிப்பை 
          தந்து இறையருள் பெறுமாறு அன்புடன் கேட்டுக் கொள்கிறோம்
        </p>

        {/* Styled Button */}
        <motion.button 
          onClick={handleDonateClick}
          className="bg-[#6A2C1C] text-white py-2 px-4 rounded-md text-base hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6A2C1C]"
          whileHover={{ scale: 1.05 }}
        >
          நன்கொடை செலுத்த
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Annadhanam;
