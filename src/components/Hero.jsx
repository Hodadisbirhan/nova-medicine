import React, { useState } from 'react';

function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Content */}
      <div className="w-full mx-auto px-[5%] z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-secondary">
              Your Health Is Our
              <span className="text-primary block mt-2">Top Priority</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Experience world-class healthcare with our team of expert physicians and state-of-the-art facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#appointment"
                className="btn-primary text-center text-lg"
              >
                Book Appointment
              </a>
              <a
                href="#services"
                className="btn-outline text-center text-lg"
              >
                Our Services
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-primary">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">50+</div>
                <div className="text-gray-600">Specialist Doctors</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">15k+</div>
                <div className="text-gray-600">Happy Patients</div>
              </div>
            </div>
          </div>

          {/* Right Column - Doctor Image */}
          <div className="relative hidden md:block">
            {/* Decorative circles */}
            <div className="absolute -top-8 -left-8 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
            
            {/* Main image */}
            <div className="relative">
              <img
                src="/images/doctors/background.webp"
                alt="Professional Medical Team"
                className={`relative z-10 w-full rounded-md h-auto object-contain transform scale-110 translate-y-6 transition-opacity duration-500 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.08))',
                  maxWidth: '600px',
                  margin: '0 auto',
                }}
                onLoad={() => setImageLoaded(true)}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/5 to-blue-100/30 rounded-bl-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-100/30 to-primary/5 rounded-tr-full -z-10" />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
