import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    content: "The medical care and attention I received at Nova Medics was exceptional. The staff was professional and caring throughout my treatment.",
    author: "Sarah Johnson",
    role: "Patient",
    image: "/testimonial1.jpg"
  },
  {
    id: 2,
    content: "Nova Medics helped arrange my international treatment seamlessly. Their coordination and support made the whole process stress-free.",
    author: "Michael Chen",
    role: "International Patient",
    image: "/testimonial2.jpg"
  },
  {
    id: 3,
    content: "The telemedicine service was incredibly convenient. I got expert medical advice from the comfort of my home.",
    author: "Emma Davis",
    role: "Telemedicine Patient",
    image: "/testimonial3.jpg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            What Our Patients Say
          </h2>
          <p className="text-secondary-light max-w-2xl mx-auto">
            Real experiences from our valued patients who have trusted us with their healthcare journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].author}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-secondary">
                    {testimonials[activeIndex].author}
                  </h4>
                  <p className="text-secondary-light">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
              <p className="text-lg text-secondary-light italic">
                "{testimonials[activeIndex].content}"
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
