import React, { useState } from 'react';

function Partners() {
  const [activeCategory, setActiveCategory] = useState('all');

  const partners = [
    {
      id: 1,
      name: 'Central Medical Hospital',
      category: 'hospital',
      location: 'Dubai, UAE',
      image: 'https://placehold.co/400x300?text=Hospital+1',
      specialties: ['Cardiology', 'Neurology', 'Oncology'],
      rating: 4.8
    },
    {
      id: 2,
      name: 'Advanced Diagnostic Center',
      category: 'diagnostic',
      location: 'Abu Dhabi, UAE',
      image: 'https://placehold.co/400x300?text=Diagnostic+Center',
      specialties: ['Radiology', 'Laboratory', 'Imaging'],
      rating: 4.9
    },
    {
      id: 3,
      name: 'International Medical City',
      category: 'hospital',
      location: 'Riyadh, KSA',
      image: 'https://placehold.co/400x300?text=Hospital+2',
      specialties: ['Surgery', 'Pediatrics', 'Orthopedics'],
      rating: 4.7
    },
    {
      id: 4,
      name: 'Premium Health Labs',
      category: 'diagnostic',
      location: 'Kuwait City, Kuwait',
      image: 'https://placehold.co/400x300?text=Diagnostic+Lab',
      specialties: ['Pathology', 'Molecular Testing', 'Genetics'],
      rating: 4.8
    },
    {
      id: 5,
      name: 'Royal Care Hospital',
      category: 'hospital',
      location: 'Muscat, Oman',
      image: 'https://placehold.co/400x300?text=Hospital+3',
      specialties: ['Emergency Care', 'Internal Medicine', 'Obstetrics'],
      rating: 4.6
    },
    {
      id: 6,
      name: 'Elite Medical Center',
      category: 'clinic',
      location: 'Manama, Bahrain',
      image: 'https://placehold.co/400x300?text=Medical+Center',
      specialties: ['Family Medicine', 'Dermatology', 'Dental'],
      rating: 4.7
    }
  ];

  const categories = [
    { id: 'all', label: 'All Partners' },
    { id: 'hospital', label: 'Hospitals' },
    { id: 'diagnostic', label: 'Diagnostic Centers' },
    { id: 'clinic', label: 'Clinics' }
  ];

  const filteredPartners = activeCategory === 'all' 
    ? partners 
    : partners.filter(partner => partner.category === activeCategory);

  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="w-full mx-auto px-[5%]">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Our Partner Network
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access world-class healthcare through our extensive network of partner hospitals,
            diagnostic centers, and clinics
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPartners.map(partner => (
            <div
              key={partner.id}
              className="bg-white rounded-xl border overflow-hidden "
            >
              <div className="relative h-48">
                <img
                  src="/images/doctors/diagnostic.webp"
                  alt={partner.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-primary">
                  {partner.rating} ★
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {partner.name}
                </h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {partner.location}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">
                    Specialties
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {partner.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-primary px-2 py-1 rounded-full text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full btn-primary">
                  Schedule Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
