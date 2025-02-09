import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { date: selectedDate, event: selectedEvent = {} } =
    location.state || {};
  const [formFields, setFormFields] = useState([
    { name: "", town: "", mobile: "" },
  ]);

  // Add a new row of form fields
  const addColumn = () =>
    setFormFields([...formFields, { name: "", town: "", mobile: "" }]);

  // Remove a specific row of form fields
  const removeColumn = (index) =>
    setFormFields(formFields.filter((_, i) => i !== index));

  // Update a specific field in the form
  const handleChange = (index, field, value) =>
    setFormFields(
      formFields.map((f, i) => (i === index ? { ...f, [field]: value } : f))
    );

  // Handle form submission and redirect to payment
  const handleBooking = () => {
    if (formFields.some((f) => !f.name || !f.town || !f.mobile)) {
      alert("எல்லா விவரங்களையும் நிரப்புக!");
      return;
    }

    // Prepare the title for the payment page
    const title =
      selectedEvent.description || "சங்கத்தின் உறுப்பினர் ஆண்டு சந்தா"; // Default title if not available

    // Navigate to payment page with payment details
    navigate("/payment", {
      state: {
        qrCode: assets.QRcode, // Replace with actual QR code path
        // upiId: "6380741727@okbizaxis", // Replace with your UPI ID
        upiId: "sundaramsoma539@okaxis", // Replace with your UPI ID
        amount: 1500,
        name: formFields[0].name,
        town: formFields[0].town,
        mobile: formFields[0].mobile,
        title: title, // Pass the event title
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-maroon-100 to-yellow-100 p-6">
      {/* Page Title */}
      <h2 className="text-4xl font-extrabold text-maroon mb-6 mt-32">
        திருக்கோவில் சிறப்பு பூஜைக்கு முன்பதிவு
      </h2>

      <div className="text-xl font-semibold text-gray-700">
        {selectedDate
          ? `தேர்ந்தெடுக்கப்பட்ட நாள்: ${new Date(
              selectedDate
            ).toLocaleDateString("ta-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}`
          : ""}
      </div>

      {/* Event Details Section */}
      <div className="w-full max-w-4xl bg-gradient-to-r from-yellow-50 to-yellow-200 shadow-lg rounded-lg p-6 mb-6">
        <h3 className="text-2xl font-bold text-maroon mb-4">
          தேர்ந்தெடுக்கப்பட்ட நிகழ்வு
        </h3>
        <p className="text-lg font-semibold text-gray-700">
          {selectedEvent.description || "சிறப்பு பூஜை"}
        </p>
        {selectedEvent.date && (
          <p className="text-md text-gray-600 mt-2">
            📅 {selectedEvent.day} -{" "}
            {new Date(selectedEvent.date).toLocaleDateString("ta-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        )}
      </div>

      {/* Booking Form */}
      <form
        className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-8 space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          handleBooking();
        }}
      >
        <h3 className="text-2xl font-bold text-maroon mb-6">
          பின்வரும் விவரங்களை நிரப்பவும்
        </h3>

        {formFields.map((field, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:space-x-4 items-center mb-4 space-y-4 sm:space-y-0"
          >
            {/* Name Field */}
            <input
              type="text"
              value={field.name}
              placeholder="கட்டளைதாரர் பெயர்"
              onChange={(e) => handleChange(index, "name", e.target.value)}
              className="w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-maroon-500"
            />

            {/* Town Field */}
            <input
              type="text"
              value={field.town}
              placeholder="ஊர்"
              onChange={(e) => handleChange(index, "town", e.target.value)}
              className="w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-maroon-500"
            />

            {/* Mobile Field */}
            <input
              type="tel"
              value={field.mobile}
              placeholder="தொலைபேசி எண்"
              onChange={(e) => handleChange(index, "mobile", e.target.value)}
              className="w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-maroon-500"
            />

            {/* Remove Column Button */}
            {formFields.length > 1 && (
              <button
                type="button"
                onClick={() => removeColumn(index)}
                className="text-red-500 text-xl font-bold focus:outline-none sm:ml-4"
              >
                ×
              </button>
            )}
          </div>
        ))}

        {/* Form Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <button
            type="button"
            onClick={addColumn}
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            + மேலும் கட்டளைதாரர்களை இனைக்க
          </button>
          <button
            type="submit"
            className="bg-maroon text-white px-6 py-2 rounded-lg shadow hover:bg-maroon-700 focus:outline-none focus:ring-2 focus:ring-maroon-500"
          >
            முன்பதிவு செய்யவும்
          </button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
