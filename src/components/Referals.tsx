import React, { useState } from 'react';
 

function Referals() {
  const [activeCategory, setActiveCategory] = useState('all');

  const centers = [
    {
      id: 1,
      name: 'Johns Hopkins Hospital',
      category: 'hospital',
      location: 'Baltimore, USA',
      image:  "https://cdn.getyourguide.com/img/tour/5d3f721e8b0d8.jpeg/98.jpg",
      services: ['Cardiology', 'Neurology', 'Oncology'],
    },
    {
      id: 2,
      name: 'Mayo Clinic',
      category: 'clinic',
      location: 'Rochester, USA',
      image: "https://th.bing.com/th/id/R.aa29554382bb30d896db86c8f602b4cf?rik=tJBVcmvNH5YDfA&pid=ImgRaw&r=0",
      services: ['Gastroenterology', 'Endocrinology', 'Orthopedics'],
    },
    {
      id: 3,
      name: 'Cleveland Clinic',
      category: 'hospital',
      location: 'USA',
      image: "https://my.clevelandclinic.org/-/scassets/images/org/social/cc-fb.jpg",
      services: ['Cardiothoracic Surgery', 'Transplant Surgery', 'Urology'],
    },
    {
      id: 4,
      name: 'Singapore General Hospital',
      category: 'hospital',
      location: 'Singapore',
      image: 'https://th.bing.com/th/id/OIP.zXGGD65qO7h2l2epFV-cawHaFL?rs=1&pid=ImgDetMain',
      services: ['Emergency Medicine', 'Neurosurgery', 'Pediatrics'],
    },
    {
      id: 5,
      name: 'Royal Melbourne Hospital',
      category: 'hospital',
      location: 'Melbourne, Australia',
      image: 'https://th.bing.com/th/id/OIP.E5IGXIli7wGkFmLDmwAbAQHaE7?rs=1&pid=ImgDetMain',
      services: ['Trauma Care', 'Oncology', 'Respiratory Medicine'],
    },
    {
      id: 6,
      name: 'Anadolu Medical Center',
      category: 'clinic',
      location: 'Istanbul, Turkey',
      image: 'https://th.bing.com/th/id/OIP.NZr0boDv1IoDmUnRVeWibwHaJM?w=800&h=993&rs=1&pid=ImgDetMain',
      services: ['Radiology', 'General Surgery', 'Nephrology'],
    },
    {
      id: 7,
      name: 'Kokilaben Hospital',
      category: 'General Emergency Medical Services',
      location: 'India',
      image: 'https://kdahweb-static.kokilabenhospital.com/kdah-2019/product/1580029144.jpg',
      services: ['Radiology', 'General Surgery', 'Nephrology'],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Centers' },
    { id: 'hospital', label: 'Hospitals' },
    { id: 'clinic', label: 'Clinics' },
  ];

  const filteredCenters = activeCategory === 'all'
    ? centers
    : centers.filter(center => center.category === activeCategory);

  return (
    <section id="referral-centers" className="py-20 bg-gray-50">
      <div className="w-full mx-auto px-[5%]">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Our International Referral Centers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access world-class healthcare services through our network of international referral centers.
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

        {/* Centers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCenters.map(center => (
            <div
              key={center.id}
              className="bg-white rounded-xl border overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={center.image}
                  alt={center.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {center.name}
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
                  {center.location}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">
                    Services Offered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {center.services.map((service, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-primary px-2 py-1 rounded-full text-xs"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Referals;
