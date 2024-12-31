import React, { useState } from 'react';
import AppointmentForm from './Forms/Appointment_Form';

function Physicians() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedPhysician, setSelectedPhysician] = useState(null);
  const physicianImage = "/images/doctors/doctor2.jpg";
  const physicianImage3 = "/images/doctors/doctor.jpg";
  const physicians = [
    {
      id: 1,
      name: "Dr. Samuel Johnson",
      specialty: "Cardiology",
      image: physicianImage,
      description: "Specializing in cardiovascular health with over 10 years of experience.",
      education: "MD - Harvard Medical School",
      languages: ["English", "Amharic"],
      availability: 'Mon-Fri, 9 AM - 5 PM'
    },
    {
      id: 2,
      name: "Dr. Sarah Williams",
      specialty: "Pediatrics",
      image: physicianImage,
      description: "Dedicated to children's health and development for 8 years.",
      education: "MD - Johns Hopkins University",
      languages: ["English", "French", "Amharic"],
      availability: 'Mon-Thu, 8 AM - 4 PM'
    },
    {
      id: 3,
      name: "Dr. Michael Chen",
      specialty: "Neurology",
      image: physicianImage,
      description: "Expert in neurological disorders with 12 years of practice.",
      education: "MD - Stanford University",
      languages: ["English", "Mandarin", "Amharic"],
      availability: 'Mon-Fri, 10 AM - 6 PM'
    },
    {
      id: 4,
      name: "Dr. Emily Brown",
      specialty: "Dermatology",
      image: physicianImage3,
      description: "Skin care specialist with 6 years of experience.",
      education: "MD - Yale University",
      languages: ["English", "Spanish", "Amharic"],
      availability: 'Mon-Thu, 9 AM - 5 PM'
    },
    {
      id: 5,
      name: "Dr. David Kim",
      specialty: "Orthopedics",
      image: physicianImage3,
      description: "Focused on musculoskeletal health for 15 years.",
      education: "MD - Columbia University",
      languages: ["English", "Korean", "Amharic"],
      availability: 'Mon-Fri, 8 AM - 4 PM'
    },
    {
      id: 6,
      name: "Dr. Lisa Martinez",
      specialty: "Gynecology",
      image: physicianImage3,
      description: "Women's health expert with 9 years of experience.",
      education: "MD - UCLA Medical School",
      languages: ["English", "Spanish", "Amharic"],
      availability: 'Mon-Thu, 10 AM - 6 PM'
    }
  ];

  const specialties = 
  [ 'all', 
    'Cardiology', 
    'Neurology', 
    'Pediatrics', 
    'Orthopedics', 
    'Dermatology', 
    'Gynecology'
  ];

  const filteredPhysicians = physicians.filter(physician => {
    const matchesSearch = physician.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      physician.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'all' || physician.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <section id="physicians" className="py-20 bg-gray-50">
      <div className="w-full mx-auto px-[5%]">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">Our Physicians</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our team of experienced and dedicated physicians, committed to providing exceptional healthcare services.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search physicians..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-primary bg-white focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <button
              onClick={() => setSearchTerm('')}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors border-2 border-primary"
            >
              Clear
            </button>
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary bg-white"
            >
              {specialties.map(specialty => (
                <option key={specialty} value={specialty}>
                  {specialty.charAt(0).toUpperCase() + specialty.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Physicians Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhysicians.map(physician => (
            <div key={physician.id} className="bg-white rounded-xl border-[1px] overflow-hidden transition-shadow">
              <div className="relative overflow-hidden">
                <img
                  src={physician.image}
                  alt={physician.name}
                  className="w-full h-[16rem] object-contain object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">
                  {physician.name}
                </h3>
                <p className="text-primary mb-4">{physician.specialty}</p>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <span className="font-bold">Experience:</span> {physician.description}
                  </p>
                  <p>
                    <span className="font-bold">Education:</span> {physician.education}
                  </p>
                  <p>
                    <span className="font-bold">Languages:</span>{' '}
                    {physician.languages.join(', ')}
                  </p>
                  <p className="flex items-center"> <span className="font-semibold">Availability:</span> 
                  <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                     {physician.availability} 
                     </span>
                      </p>
                </div>
                <button
                  className="w-full mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                  onClick={() => setSelectedPhysician(physician)}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPhysicians.length === 0 && (
          <div className="text-center text-gray-600 mt-8">
            No physicians found matching your criteria.
          </div>
        )}
      </div>

      {selectedPhysician && (
        <AppointmentForm
          physician={selectedPhysician}
          onClose={() => setSelectedPhysician(null)}
        />
      )}
    </section>
  );
}

export default Physicians;
