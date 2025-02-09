import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Fooddonation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    amount: "",
  });

  // const upiId = "6380741727@okbizaxis"; // Your UPI ID
  const upiId = "sundaramsoma539@okaxis"; // Your UPI ID

  const handleSubmit = () => {
    if (!formData.name || !formData.city || !formData.amount) {
      alert("அனைத்து தகவல்களையும் நிரப்பவும்.");
      return;
    }

    // Scroll to the top before navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const upiLink = `upi://pay?pa=${upiId}&pn=Temple&am=${formData.amount}&cu=INR&tn=Annadhanam%20Donation`;

    // Navigate to Payonline with all parameters
    navigate("/payment", {
      state: {
        qrCode: upiLink,
        upiId,
        amount: formData.amount,
        name: formData.name,
        town: formData.city, // Pass city as town
        mobile: "Not Provided", // Example placeholder for mobile if not used
        title: "அன்னதானம் நன்கொடை",
      },
    });
  };

  return (
    <div className="p-4 md:p-6 max-w-5xl mx-auto mt-10 bg-white rounded-lg shadow-md">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-center text-[#6A2C1C] mb-8">
        அன்னதானம் - ஒரு மகத்தான தொண்டு
      </h1>

      {/* Introduction */}
      <p className="text-lg leading-relaxed text-justify text-gray-800 mb-6">
        அன்னதானம் என்பது அனைத்து தானங்களுக்கும் முந்திய தானமாகும். பசிக்கும் உணர்வு ஒரு மனிதனை மட்டுமல்லாமல் அனைத்து உயிரினங்களையும் பாதிக்கும். 
        அன்னதானத்தின் மூலம், அந்த பசிக்கே தீர்வு காண முடியும். உங்கள் உதவியுடன், தசையன்விளை திருக்கோவிலில் நடைபெறும் அன்னதான திட்டங்களில் 
        பங்குகொள்ளுங்கள் மற்றும் பலரின் பசியை தீர்த்து அவர்களின் வாழ்வில் மகிழ்ச்சியை பரப்புங்கள்.
      </p>

      {/* Form */}
      <h2 className="text-xl font-semibold text-center text-[#6A2C1C] mb-4">உங்கள் நன்கொடையை வழங்குங்கள்</h2>

      <div className="space-y-6 mb-8">
        <div>
          <label className="block text-lg font-semibold text-gray-800 mb-2">பெயர்</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="உங்கள் பெயர்"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold text-gray-800 mb-2">நகரம்</label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="உங்கள் நகரம்"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold text-gray-800 mb-2">தொகை</label>
          <input
            type="number"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="நன்கொடை தொகை (₹)"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center mt-8">
        <button
          onClick={handleSubmit}
          className="px-6 py-3 bg-[#6A2C1C] text-white text-lg rounded-lg shadow-md hover:bg-[#8C3B2B]"
        >
          ஆன்லைனில் பணம் செலுத்தவும்
        </button>
      </div>
    </div>
  );
};

export default Fooddonation;
