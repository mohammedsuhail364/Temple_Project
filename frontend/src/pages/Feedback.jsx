import { useState } from 'react';
import emailjs from 'emailjs-com';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = () => {
    if (!feedback.trim()) {
      alert('தயவுசெய்து உங்கள் கருத்தை உள்ளிடவும்!');
      return;
    }

    // Prepare EmailJS parameters
    const templateParams = {
      message:feedback,
    };

    setIsLoading(true);

    // Use EmailJS to send email
    emailjs
      .send(
        'service_hzjmsno', // Replace with your EmailJS Service ID
        'template_69lwwfq', // Replace with your EmailJS Template ID
        templateParams,
        'Y4u_-kyILAXBT8eUR'   // Replace with your EmailJS Public Key
      )
      .then(() => {
        alert('உங்கள் கருத்து வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது!');
        setFeedback(''); // Clear the feedback after submission
      })
      .catch((error) => {
        console.error('Error sending feedback:', error);
        alert('உங்கள் கருத்தை சமர்ப்பிக்க முடியவில்லை. தயவுசெய்து மீண்டும் முயற்சிக்கவும்!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-r from-maroon-200 to-yellow-200 p-6">
      {/* Heading */}
      <h2 className="text-3xl font-extrabold text-maroon mb-4 text-center">
        தங்கள் மேலான கருத்துக்களை இங்கே பகிரலாம்
      </h2>
      
      {/* Description */}
      <div className="text-lg text-gray-700 mb-6 text-center max-w-3xl px-4">
        <p>
          நமது திருக்கோவில் மற்றும் அறக்கட்டளையின் வளர்ச்சிக்கு உங்கள் ஆலோசனையும் ஆக்கப்பூர்வமான கருத்துக்களும் மிக அவசியமானது. அதனை கருத்தில் கொண்டு தங்கள் ஆலோசனைகளை கீழே பகிரவும், இது முற்றிலும் நிர்வாகத்தினர் பார்வைக்கு மட்டுமே உங்கள் கருத்துகளின் இரகசியங்கள் பாதுகாக்க படும்.
        </p>
      </div>
      
      {/* Textarea for feedback */}
      <textarea
        value={feedback}
        onChange={handleFeedbackChange}
        placeholder="உங்கள் கருத்தை இங்கே எழுதவும்..."
        className="w-full max-w-lg px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:border-transparent mb-4"
        rows="6"
        disabled={isLoading}
      />
      
      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className={`bg-maroon text-white text-lg font-medium py-2 px-6 rounded-lg shadow-md hover:bg-maroon-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:ring-offset-2 ${
          isLoading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={isLoading}
      >
        {isLoading ? 'சமர்ப்பிக்கிறது...' : 'சமர்ப்பிக்கவும்'}
      </button>
    </div>
  );
};

export default Feedback;
