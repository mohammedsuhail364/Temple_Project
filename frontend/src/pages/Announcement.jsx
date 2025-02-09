
const Announcement = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-300 p-6">
      {/* Heading */}
      <h1 className="text-3xl font-extrabold text-maroon mb-4 text-center">
        அறிவிப்பு பலகை
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-700 text-center max-w-3xl mb-4 px-4">
        நமது திருக்கோவில் மற்றும் அறக்கட்டளை சார்ந்த முக்கிய அறிவிப்புக்கள், கட்டளைதாரர் விபரங்கள், பூஜை நேரம் போன்றவற்றை கீழே காணலாம்.
      </p>

      {/* Placeholder for Announcements */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 mt-4">
        <p className="text-center text-gray-600 text-lg">
          ⏳ இங்கே அறிவிப்புகள் விரைவில் சேர்க்கப்படும்.
        </p>
      </div>
    </div>
  );
};

export default Announcement;
