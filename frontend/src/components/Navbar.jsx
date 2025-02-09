import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-maroon text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Back Button for Mobile Screens */}
        <button
          className="md:hidden text-white flex items-center p-2 rounded-md"
          onClick={() => navigate(-1)}
          aria-label="Go Back"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Title */}
        <div className="text-center flex-1 mb-1">
          <h1 className="text-2xl font-bold text-gold mb-1">
            ஸ்ரீ செல்வ சுந்தர விநாயகர் திருக்கோயில் அறக்கட்டளை
          </h1>
          <p className="text-sm text-gold">
            செல்வமருதூர் திசையன்விளை திருநெல்வேலி மாவட்டம் - 627 657
          </p>
        </div>

        {/* Burger menu button */}
        <button
          className="md:hidden text-white p-2 rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Navigation for larger screens */}
      <nav className="hidden md:flex justify-center space-x-8 py-2 bg-maroon">
        <a
          onClick={() => navigate("/")}
          className="text-gold text-lg font-medium hover:text-yellow-400 transition duration-300 cursor-pointer"
        >
          முகப்பு
        </a>
        <a
          onClick={() => navigate("/arimugam")}
          className="text-gold text-lg font-medium hover:text-yellow-400 transition duration-300 cursor-pointer"
        >
          அறிமுகம்
        </a>
        <a
          onClick={() => navigate("/photos")}
          className="text-gold text-lg font-medium hover:text-yellow-400 transition duration-300 cursor-pointer"
        >
          கேலரி
        </a>
        <a
          onClick={() => navigate("/contact")}
          className="text-gold text-lg font-medium hover:text-yellow-400 transition duration-300 cursor-pointer"
        >
          தொடர்பு
        </a>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-maroon text-white py-4 mt-2">
          <div className="flex flex-col items-center space-y-4">
            <a
              onClick={() => navigate("/")}
              className="text-gold text-lg font-medium hover:text-yellow-400 hover:bg-opacity-20 hover:bg-gold px-4 py-2 rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              முகப்பு
            </a>
            <a
              onClick={() => navigate("/arimugam")}
              className="text-gold text-lg font-medium hover:text-yellow-400 hover:bg-opacity-20 hover:bg-gold px-4 py-2 rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              அறிமுகம்
            </a>
            <a
              onClick={() => navigate("/photos")}
              className="text-gold text-lg font-medium hover:text-yellow-400 hover:bg-opacity-20 hover:bg-gold px-4 py-2 rounded-md transition-transform duration-300 transform hover:scale-105 cursor-pointer"
            >
              கேலரி
            </a>
            <a
              onClick={() => navigate("/contact")}
              className="text-gold text-lg font-medium hover:text-yellow-400 hover:bg-opacity-20 hover:bg-gold px-4 py-2 rounded-md transition-transform duration-300 transform hover:scale-105 cursor-pointer"
            >
              தொடர்பு
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
