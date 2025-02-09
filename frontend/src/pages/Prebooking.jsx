import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { checkBookingsService } from "../services";
//import './CustomCalendar.css'; // Include custom styles for better UI

const Prebooking = () => {
  const navigate = useNavigate();
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [check, setCheck] = useState([]);
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
    navigate("/booking", {
      state: {
        date,
        event: {
          description: "சிறப்பு பூஜை",
          date: date.toISOString(),
          day: "",
        },
      },
    });
  };

  const events = [
    {
      date: "2025-01-17",
      description: "சங்கடஹர சதுர்த்தி பூஜை.",
      day: "வெள்ளிக்கிழமை",
    },
    { date: "2025-02-11", description: "தைப்பூசம்", day: "செவ்வாய்க்கிழமை" },
    {
      date: "2025-02-16",
      description: "சங்கடஹர சதுர்த்தி பூஜை..",
      day: "ஞாயிற்றுக்கிழமை",
    },
    { date: "2025-02-26", description: "மஹா சிவராத்திரி", day: "புதன்கிழமை" },
    {
      date: "2025-03-17",
      description: "சங்கடஹர சதுர்த்தி பூஜை,",
      day: "திங்கட்கிழமை",
    },
    { date: "2025-04-14", description: "சித்திரை விஷூ", day: "திங்கட்கிழமை" },
    {
      date: "2025-04-16",
      description: "சங்கடஹர சதுர்த்தி பூஜை,,",
      day: "புதன்கிழமை",
    },
    {
      date: "2025-05-16",
      description: "சங்கடஹர சதுர்த்தி பூஜை_",
      day: "வெள்ளிக்கிழமை",
    },
    {
      date: "2025-06-14",
      description: "சங்கடஹர சதுர்த்தி பூஜை;",
      day: "சனிக்கிழமை",
    },
    {
      date: "2025-07-14",
      description: "சங்கடஹர சதுர்த்தி பூஜை*",
      day: "திங்கட்கிழமை",
    },
    {
      date: "2025-08-12",
      description: "சங்கடஹர சதுர்த்தி பூஜை-",
      day: "செவ்வாய்க்கிழமை",
    },
    {
      date: "2025-09-10",
      description: "சங்கடஹர சதுர்த்தி பூஜை`",
      day: "புதன்கிழமை",
    },
    {
      date: "2025-10-10",
      description: "சங்கடஹர சதுர்த்தி பூஜை~",
      day: "வெள்ளிக்கிழமை",
    },
    { date: "2025-10-18", description: "ஐப்பசி விஷூ", day: "சனிக்கிழமை" },
    {
      date: "2025-10-20",
      description: "தீபாவளி திருநாள்",
      day: "திங்கட்கிழமை",
    },
    {
      date: "2025-11-08",
      description: "சங்கடஹர சதுர்த்தி பூஜை--",
      day: "சனிக்கிழமை",
    },
    {
      date: "2025-11-17",
      description: "கார்த்திகை சோம வார பூஜை",
      day: "திங்கட்கிழமை",
    },
    {
      date: "2025-11-24",
      description: "கார்த்திகை சோம வார பூஜை.",
      day: "திங்கட்கிழமை",
    },
    {
      date: "2025-12-01",
      description: "கார்த்திகை சோம வார பூஜை,",
      day: "திங்கட்கிழமை",
    },
    {
      date: "2025-12-03",
      description: "திருக்கார்த்திகை மஹா தீபத்திருநாள்",
      day: "திங்கட்கிழமை",
    },
    {
      date: "2025-12-08",
      description: "கார்த்திகை சோம வார பூஜை-",
      day: "திங்கட்கிழமை",
    },
    {
      date: "2025-12-15",
      description: "கார்த்திகை சோம வார பூஜை`",
      day: "திங்கட்கிழமை",
    },
    {
      date: "2025-12-07",
      description: "சங்கடஹர சதுர்த்தி பூஜை",
      day: "ஞாயிற்றுக்கிழமை",
    },
  ];
  async function checkBookings() {
    const response =await checkBookingsService();
    if (response.success){
      setCheck((prev)=>[...prev, ...response.returnBookings])
    }
  }
  useEffect(()=>{
    checkBookings();
  },[])
  console.log(check);
  
  return (
    <div className="p-4 md:p-6 max-w-5xl mx-auto mt-10 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-[#6A2C1C] mb-8">
        திருக்கோயிலில் சிறப்பு பூஜைக்கு இங்கே முன்பதிவு செய்திடவும்
      </h1>

      <ul className="space-y-4">
        {events.map((event, index) => {
          const alreadyBooked=check.includes(event.description) ;
          const eventDate = new Date(event.date);
          const isPastEvent = eventDate < new Date(); // Check if the date has passed

          return (
            <li
              key={index}
              className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200"
            >
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  {event.description}
                </p>
                <p className="text-sm text-gray-600">
                  {event.day} -{" "}
                  {eventDate.toLocaleDateString("ta-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <button
                className={`px-4 py-2 text-white text-sm rounded-md shadow-md ${
                  isPastEvent || alreadyBooked
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#6A2C1C] hover:bg-[#8C3B2B]"
                }`}
                onClick={() => {
                  if (!isPastEvent) {
                    navigate("/booking", { state: { event } });
                  }
                }}
                disabled={isPastEvent || alreadyBooked} // Disable if the event date has passed
              >
                {alreadyBooked?"Already Booked" : "முன்பதிவு"}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="text-center mt-8">
        <button
          className="px-6 py-3 bg-[#6A2C1C] text-white text-lg rounded-lg shadow-md hover:bg-[#8C3B2B]"
          onClick={() => setShowCalendar(true)}
        >
          விருப்பம் உள்ள நாட்களில் முன்பதிவு செய்திட
        </button>
        {showCalendar && (
          <div className="absolute mt-4 z-50 bg-white shadow-lg rounded-lg p-4">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateSelect}
              inline
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              locale="ta"
              calendarClassName="custom-calendar"
              dayClassName={(date) => {
                const isToday =
                  new Date().toDateString() === date.toDateString();
                return `rounded-full px-2 py-1 ${
                  isToday
                    ? "bg-blue-500 text-white"
                    : "hover:bg-[#FBE4D5] hover:text-black"
                }`;
              }}
              weekDayClassName={() =>
                "text-gray-500 text-sm font-semibold uppercase"
              }
            />
            <button
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={() => setShowCalendar(false)}
            >
              மூடு
            </button>
          </div>
        )}
      </div>

      {selectedDate && (
        <div className="mt-6 text-center">
          <p className="text-lg font-medium text-gray-700">
            நீங்கள் தேர்ந்தெடுத்த திகதி:
          </p>
          <p className="text-xl font-bold text-[#6A2C1C] mt-2">
            {selectedDate.toLocaleDateString("ta-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      )}
    </div>
  );
};

export default Prebooking;
