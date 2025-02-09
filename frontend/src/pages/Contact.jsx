import { useEffect } from "react";
import { motion } from "framer-motion";

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center p-6 bg-maroon shadow-xl rounded-lg space-y-6 mt-5">
        <motion.h1
          className="text-2xl lg:text-3xl font-bold text-gold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ஸ்ரீ செல்வ சுந்தர விநாயகர் திருக்கோயில் அறக்கட்டளை
        </motion.h1>
      </div>

      {/* Address Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        <motion.div
          className="p-4 bg-amber-50 shadow-lg rounded-lg"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl font-semibold text-maroon mb-2">முகவரி</h2>
          <p className="text-gray-800 leading-relaxed">
            ஸ்ரீ செல்வ சுந்தர விநாயகர் திருக்கோயில் அறக்கட்டளை அலுவலகம்,<br />
            ஸ்ரீ செல்வ சுந்தர விநாயகர் திருக்கோயில் வளாகம்,<br />
            வணிக வைசியர் தெரு,<br />
            செல்வமருதூர், திசையன்விளை - 627 657
          </p>
        </motion.div>

        {/* Contact Numbers */}
        <motion.div
          className="p-4 bg-amber-50 shadow-lg rounded-lg"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl font-semibold text-maroon mb-2">தொடர்பு எண்கள்</h2>
          <ul className="list-disc pl-6 text-gray-800">
            <li>
              <a
                href="tel:7010072500"
                className="text-maroon hover:text-gold hover:underline transition duration-300"
              >
                7010072500
              </a>
            </li>
            <li>
              <a
                href="tel:9788967117"
                className="text-maroon hover:text-gold hover:underline transition duration-300"
              >
                9788967117
              </a>
            </li>
            <li>
              <a
                href="tel:9486142601"
                className="text-maroon hover:text-gold hover:underline transition duration-300"
              >
                9486142601
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Trust Details Section */}
      <div className="p-6 bg-amber-50 shadow-lg rounded-lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-xl font-semibold text-maroon mb-2">அறக்கட்டளை Account விவரங்கள்</h2>
          <p className="text-gray-800">
            <strong>Phone number:</strong>{" "}
            <a
              href="tel:6380741727"
              className="text-maroon hover:text-gold hover:underline transition duration-300"
            >
              6380741727
            </a>
          </p>
          <p className="text-gray-800">
            <strong>UPI ID:</strong> <span className="text-maroon">6380741727@okbizaxis</span>
          </p>
          <p className="text-gray-800">
            <strong>NAME:</strong> SRI SELVA SUNDARA VINAYAGAR TEMPLE TRUST
          </p>
          <p className="text-gray-800">
            <strong>A/C NAME:</strong> SRI SELVA SUNDARA VINAYAGAR TEMPLE TRUST
          </p>
          <p className="text-gray-800">
            <strong>A/C NO:</strong> 50200076626565
          </p>
          <p className="text-gray-800">
            <strong>IFSC CODE:</strong> HDFC0004084
          </p>
          <p className="text-gray-800">
            <strong>BRANCH:</strong> HDFC BANK, THISAIYANVILAI
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contacts;
