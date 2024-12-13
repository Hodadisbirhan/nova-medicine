import React, { useState } from 'react';

function Diagnostics() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const diagnosticTests = [
    {
      id: 1,
      name: 'Complete Blood Count (CBC)',
      category: 'blood',
      price: 150,
      duration: '1 day',
      preparation: 'Fasting for 8-12 hours',
      description: 'Measures different components of blood including red cells, white cells, and platelets.'
    },
    {
      id: 2,
      name: 'MRI Scan',
      category: 'imaging',
      price: 1200,
      duration: '45-60 mins',
      preparation: 'No metal objects, specific instructions provided',
      description: 'Detailed imaging of organs and structures using magnetic fields and radio waves.'
    },
    {
      id: 3,
      name: 'Lipid Profile',
      category: 'blood',
      price: 200,
      duration: '1 day',
      preparation: 'Fasting for 12 hours',
      description: 'Measures cholesterol levels and other blood fats.'
    },
    {
      id: 4,
      name: 'CT Scan',
      category: 'imaging',
      price: 800,
      duration: '15-30 mins',
      preparation: 'Specific instructions based on area',
      description: 'Detailed cross-sectional images of bones, blood vessels, and soft tissues.'
    },
    {
      id: 5,
      name: 'Thyroid Function Test',
      category: 'hormone',
      price: 250,
      duration: '1 day',
      preparation: 'No special preparation needed',
      description: 'Evaluates how well your thyroid gland is working.'
    },
    {
      id: 6,
      name: 'Ultrasound',
      category: 'imaging',
      price: 400,
      duration: '30-45 mins',
      preparation: 'Varies by type of ultrasound',
      description: 'Uses sound waves to produce images of structures inside your body.'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Tests' },
    { id: 'blood', label: 'Blood Tests' },
    { id: 'imaging', label: 'Imaging' },
    { id: 'hormone', label: 'Hormone Tests' }
  ];

  const filteredTests = diagnosticTests
    .filter(test => selectedCategory === 'all' || test.category === selectedCategory)
    .filter(test => 
      test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <section id="diagnostics" className="py-20 bg-white">
      <div className="w-full mx-auto px-[5%]">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Diagnostic Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            State-of-the-art diagnostic services with quick and accurate results
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="max-w-xl mx-auto mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for tests..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-white  rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <svg
                className="absolute right-3 top-3 w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${selectedCategory === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTests.map(test => (
            <div
              key={test.id}
              className="bg-white p-5 rounded-xl border"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {test.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {test.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm">
                  <svg
                    className="w-5 h-5 mr-2 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-600">Duration: {test.duration}</span>
                </div>

                <div className="flex items-center text-sm">
                  <svg
                    className="w-5 h-5 mr-2 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-gray-600">Preparation: {test.preparation}</span>
                </div>

                <div className="flex items-center text-sm">
                  <svg
                    className="w-5 h-5 mr-2 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-600">Price: AED {test.price}</span>
                </div>
              </div>

          
            </div>
          ))}
        </div>

        {filteredTests.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">
              No tests found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Diagnostics;
