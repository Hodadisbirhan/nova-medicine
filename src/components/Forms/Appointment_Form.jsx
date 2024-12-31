import React, { useState } from 'react';

function AppointmentForm({ physician, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4 sm:p-8 overflow-hidden">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-lg mx-auto relative overflow-auto max-h-[90vh] pt-12">
        <button 
          type="button" 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          &times;
        </button>
        <div className="text-center">
          <img 
            src="/images/doctors/real_logo.jpg" 
            alt="Nova Medics Logo" 
            className="h-12 w-auto mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold text-primary mb-2">
            Welcome to Nova Medics!
          </h2>
          <p className="text-gray-700 mb-4">Book your appointment with {physician.name}</p>
          <h4 className="text-sm text-gray-500 mb-4">
          Please fill out this form, and we will be in touch with you shortly.
          </h4>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border focus:ring-primary/60 focus:border-primary transition duration-200 ease-in-out"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border focus:ring-primary/60 focus:border-primary transition duration-200 ease-in-out"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border focus:ring-primary/60 focus:border-primary transition duration-200 ease-in-out"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border focus:ring-primary/60 focus:border-primary transition duration-200 ease-in-out"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border focus:ring-primary/60 focus:border-primary transition duration-200 ease-in-out"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border focus:ring-primary/60 focus:border-primary transition duration-200 ease-in-out"
              rows="4"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AppointmentForm;
