import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Donation = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    town: "",  
    mobile: "",
  });
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");  // State to hold the selected title
  const [isFormVisible, setIsFormVisible] = useState(false);

  const donationCategories = [
    {
      title: "தை வருஷாபிஷேக வரி",
      description: "தை மாதத்தில் அம்மன் கோவிலில் நடைபெறும் வருஷாபிஷேக நிகழ்வுக்கான நன்கொடை.",
      amount: 2000,
    },
    {
      title: "அம்மன் கோவில் கொடை விழா வரி",
      description: "அம்மன் கோவிலில் நடைபெறும் கொடை விழாவுக்கான நன்கொடை.",
      amount: 4000,
    },
    {
      title: "நவராத்திரி கொலு விழா வரி",
      description: "நவராத்திரி கொலு விழா நிகழ்ச்சிகளுக்கான நன்கொடை.",
      amount: 1000,
    },
    {
      title: "சங்கத்தின் உறுப்பினர் ஆண்டு சந்தா",
      description: "சங்கத்தின் உறுப்பினர் சந்தாவுக்கான ஆண்டு கட்டணம்.",
      amount: 2000,
    },
  ];

  // const upiId = "6380741727@okbizaxis"; // Your UPI ID
  const upiId = "sundaramsoma539@okaxis"; // Your UPI ID

  const handleDonate = (category) => {
    setSelectedAmount(category.amount);
    setSelectedTitle(category.title);  // Set selected title
    setIsFormVisible(true);  // Show the form after selecting the amount
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.town || !formData.mobile) {
      alert("Please fill out all the details.");
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });

    const upiLink = `upi://pay?pa=${upiId}&pn=Temple&am=${selectedAmount}&cu=INR&tn=Temple%20Donation`;

    navigate("/payment", {
      state: {
        qrCode: upiLink,
        upiId,
        amount: selectedAmount,
        name: formData.name,
        town: formData.town,
        mobile: formData.mobile,
        title: selectedTitle,  
      },
    });
  };

  return (
    <div className="p-4 md:p-6 max-w-5xl mx-auto mt-10 bg-white rounded-lg shadow-md">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-center text-[#6A2C1C] mb-8">
        திருக்கோயிலுக்கு உங்கள் நன்கொடை
      </h1>

      {/* Donation Categories */}
      {!isFormVisible ? (
        <>
          <h2 className="text-xl font-semibold text-center text-[#6A2C1C] mb-4">நன்கொடை தொகை தேர்வு செய்யவும்</h2>
          <ul className="space-y-4">
            {donationCategories.map((category, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200"
              >
                <div>
                  <p className="text-lg font-semibold text-gray-800">{category.title}</p>
                  <p className="text-sm text-gray-600">{category.description}</p>
                  <p className="text-sm text-gray-700 font-medium mt-2">
                    நன்கொடை தொகை: ₹{category.amount}
                  </p>
                </div>
                <button
                  className="px-4 py-2 bg-[#6A2C1C] text-white text-sm rounded-md shadow-md hover:bg-[#8C3B2B]"
                  onClick={() => handleDonate(category)}
                >
                  தேர்வு செய்யவும்
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div>
          {/* Selected Title */}
          <h3 className="text-xl font-semibold text-center text-[#6A2C1C] mb-4">{selectedTitle}</h3>

          {/* User Details Form */}
          <h2 className="text-xl font-semibold text-center text-[#6A2C1C] mb-4">உங்கள் விவரங்களை உள்ளிடவும்</h2>

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
              <label className="block text-lg font-semibold text-gray-800 mb-2">ஊர்</label>
              <input
                type="text"
                value={formData.town}
                onChange={(e) => setFormData({ ...formData, town: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="உங்கள் ஊர்"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-2">மொபைல் எண்</label>
              <input
                type="text"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="உங்கள் மொபைல் எண்"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-[#6A2C1C] text-white text-lg rounded-lg shadow-md hover:bg-[#8C3B2B]"
            >
              பணம் செலுத்திட
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
