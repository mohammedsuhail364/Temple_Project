import React from 'react';

const Festivals = () => {
  return (
    <div className="p-6 max-w-full mx-auto  pt-10">
      {/* Heading Section */}
      <h1 className="text-3xl font-bold text-center text-[#6A2C1C] mb-4">
        திருக்கோவில் வருடாந்திர திருவிழாக்கள்
      </h1>
      <p className="text-2xl sm:text-xl md:text-2xl text-center text-gray-700 mb-8">
        நமது ஆலயத்தில் பல்வேறு திருவிழாக்கள் மற்றும் சிறப்பு பூஜைகள் நடைபெறுகின்றன.
        அந்த வகையில், இந்த 2025 ஆம் ஆண்டு நடைபெறும் திருவிழாக்களும் அதன் 
        தேதிகளும் கீழே குறிப்பிடப்பட்டுள்ளது.
      </p>

      {/* Table Section for Festivals */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg mb-8">
        <table className="table-auto min-w-full text-sm sm:text-xs md:text-base text-left text-gray-700">
          <thead className="bg-[#6A2C1C] text-white">
            <tr>
              <th className="py-3 px-4 sm:py-2 sm:px-3">நிகழ்ச்சி</th>
              <th className="py-3 px-4 sm:py-2 sm:px-3">தேதி</th>
              <th className="py-3 px-4 sm:py-2 sm:px-3">நாள்</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 sm:py-1 sm:px-2">வருஷாபிஷேகம்</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">தை 28</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">திங்கள் கிழமை - 10.02.2025</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 sm:py-1 sm:px-2">தைப்பூசம்</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">தை 29</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">செவ்வாய் கிழமை - 11.02.2025</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 sm:py-1 sm:px-2">மஹா சிவராத்திரி</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">மாசி 14</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">புதன் கிழமை - 26.02.2025</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 sm:py-1 sm:px-2">சித்திரை விஷூ</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">சித்திரை 01</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">திங்கள் கிழமை - 14.04.2025</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 sm:py-1 sm:px-2">வினாயகர் சதுர்த்தி விழா</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">ஆவணி 11</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">புதன் கிழமை - 27.08.2025</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 sm:py-1 sm:px-2">வினாயகர் மங்கள பூஜை</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">ஆவணி 19</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">வியாழக்கிழமை - 04.09.2025</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 sm:py-1 sm:px-2">நவராத்திரி விழா</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">புரட்டாசி 06</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">திங்கள் கிழமை - 22.09.2025</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 sm:py-1 sm:px-2">சரஸ்வதி பூஜை</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">புரட்டாசி 15</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">புதன் கிழமை - 01.10.2025</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 sm:py-1 sm:px-2">விஜய தசமி</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">புரட்டாசி 16</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">வியாழக்கிழமை - 02.10.2025</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 sm:py-1 sm:px-2">ஐப்பசி விஷூ</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">ஐப்பசி 01</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">சனி கிழமை - 18.09.2025</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 sm:py-1 sm:px-2">தீபாவளி திருநாள்</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">ஐப்பசி 03</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">திங்கள் கிழமை - 20.10.2025</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 sm:py-1 sm:px-2">கார்த்திகை சோம வார பூஜை</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">கார்த்திகை 01</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">திங்கள் கிழமை - 17.11.2025</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 sm:py-1 sm:px-2">கார்த்திகை சோம வார பூஜை</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">கார்த்திகை 08</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">திங்கள் கிழமை - 24.11.2025</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 sm:py-1 sm:px-2">கார்த்திகை சோம வார பூஜை</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">கார்த்திகை 15</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">திங்கள் கிழமை - 01.12.2025</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 sm:py-1 sm:px-2">திருக்கார்த்திகை மஹா தீபத்திருநாள்</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">கார்த்திகை 17</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">திங்கள் கிழமை - 03.12.2025</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 sm:py-1 sm:px-2">கார்த்திகை சோம வார பூஜை</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">கார்த்திகை 22</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">திங்கள் கிழமை - 08.12.2025</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 sm:py-1 sm:px-2">கார்த்திகை சோம வார பூஜை</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">கார்த்திகை 19</td>
              <td className="py-2 px-4 sm:py-1 sm:px-2">திங்கள் கிழமை - 15.12.2025</td>
            </tr>
          </tbody>
        </table> 
      </div>

      {/* Footer Notes */}
      <div className="text-center text-sm text-gray-600 mt-8">
        <p className="mb-4 font-bold">
          <strong className="font-bold text-[#6A2C1C]">குறிப்பு :</strong> 
          திருவிழா காலங்களில் பூஜை நேரங்கள் சூழ்நிலைக்கு ஏற்ப மாறுபடும், 
          பூஜை நேரங்களை நிர்ணயம் செய்யும் பொறுப்பு முற்றிலும் நிர்வாகத்தை சார்ந்தது.
        </p>
        <p className="font-bold">
          நமது திருக்கோவிலில் பிரதி மாதம்தோறும் சங்கடஹர சதுர்த்தி பூஜை சீரும் சிறப்புடன் 
          நடைபெற்று வருகிறது.
        </p>
      </div>
    </div>
  );
};

export default Festivals;
