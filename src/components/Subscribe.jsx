import React, { useState } from 'react';
import { IoMdMail } from "react-icons/io";

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically integrate with your email service
    // For now, we'll just show a success message
    if (email) {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-md">
        <div className="flex items-center space-x-2 mb-4">
          <IoMdMail className="text-primary text-2xl" />
          <h3 className="text-lg font-semibold text-gray-800">Subscribe to Our Newsletter</h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">
          Stay updated with our latest medical services and health tips.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <span>Subscribe</span>
          </button>
        </form>

        {status === 'success' && (
          <div className="mt-3 text-sm text-green-600">
            Thank you for subscribing!
          </div>
        )}
      </div>
    </div>
  );
};

export default Subscribe;
