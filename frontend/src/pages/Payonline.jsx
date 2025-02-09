import { useLocation, useNavigate } from "react-router-dom";
import ReactQRCode from "react-qr-code";
import { useEffect, useState } from "react";
import { bookingService } from "../services";

const Payonline = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { qrCode, upiId, amount, name, town, mobile, title } = location.state || {};
  const [paymentReceived, setPaymentReceived] = useState(false);
  const [loading, setLoading] = useState(false);
  async function handlePayments() {
    setLoading(true);
    const response=await bookingService({
      name,title,mobile,amount,town
    })
    if (response.success){
      alert('booking added successfully')
      setLoading(false);
      navigate('/prebooking')
    }
  }
  useEffect(() => {
    if (!upiId || !amount) return;

    const checkPaymentStatus = async () => {
      try {
        // Replace this with your actual API to check the payment status
        const response = await fetch(`/api/check-payment?upiId=${upiId}&amount=${amount}`);
        const data = await response.json();

        if (data.success) {
          setPaymentReceived(true);
          alert("Payment received successfully! Thank you.");
          navigate("/"); // Redirect to home page
        }
      } catch (error) {
        console.error("Error checking payment status:", error);
      }
    };

    // Poll every 3 seconds
    const interval = setInterval(checkPaymentStatus, 3000);

    return () => clearInterval(interval); // Cleanup when unmounted
  }, [upiId, amount, navigate]);
  
  

  if (!qrCode || !upiId || !amount || !name || !town || !mobile || !title) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-maroon-100 to-yellow-100 p-6">
        <h2 className="text-3xl font-bold text-maroon mb-6">பணம் செலுத்துமாறு</h2>
        <p className="text-lg text-gray-700">பணம் செலுத்துவதற்கான விவரங்கள் காணவில்லை. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-maroon-100 to-yellow-100 p-6">
      <h2 className="text-4xl font-extrabold text-maroon mb-6">திருக்கோவில் பணம் செலுத்தும் பக்கம்</h2>

      <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-maroon mb-6">{title}</h3>

        <h3 className="text-2xl font-bold text-maroon mb-6">Scan the QR Code to Pay</h3>

        <div className="flex justify-center mb-6">
          <ReactQRCode value={qrCode} size={256} />
        </div>

        <div className="text-lg font-medium text-gray-700 mb-4">
          <p>பெயர்: <span className="font-semibold">{name}</span></p>
          <p>ஊர்: <span className="font-semibold">{town}</span></p>
          <p>மொபைல் எண்: <span className="font-semibold">{mobile}</span></p>
          <p>Amount: <span className="font-semibold">₹{amount}</span></p>
        </div>

        <a
          href={qrCode}
          className={`bg-yellow-500 text-white px-6 py-2 rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 inline-block ${paymentReceived ? "opacity-50 cursor-not-allowed" : ""}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Pay மூலம் பணம் செலுத்தவும்
        </a>
        <div className=" mt-5 font-bold text-2xl flex flex-col justify-center items-center">
          If you send amount then click the below button we want to store your name
          <button onClick={handlePayments} className=" bg-yellow-500 text-white w-[350px] hover:bg-yellow-600 focus:outline-none focus:ring-2 font-light rounded text-xl p-2 ">
           {loading? "Loading...":" Yes we made payment"}
          </button> 
        </div>
      </div>
    </div>
  );
};

export default Payonline;
