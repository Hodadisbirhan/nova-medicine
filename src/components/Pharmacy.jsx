import { useState } from 'react';
import Pharmacy1 from '../assets/Pharmacies/pharmacy center.png';
import DrugStore1 from '../assets/Pharmacies/Drug store.png';
import MedicalCenter1 from '../assets/Pharmacies/Mediccal Supply Center.png';


function Pharmacy() {
  const [activeCategory, setActiveCategory] = useState('all');

  const pharmacies = [
    {
      id: 1,
      name: 'Central Pharmacy',
      category: 'pharmacy',
      location: 'Dubai, UAE',
      image:  Pharmacy1,
      medicines: ['Aspirin', 'Paracetamol', 'Ibuprofen'],
    },
    {
      id: 2,
      name: 'Advanced Drug Store',
      category: 'drugstore',
      location: 'Abu Dhabi, UAE',
      image:DrugStore1 ,
      medicines: ['Antibiotics', 'Vitamins', 'Cough Syrup'],
    },
    {
      id: 3,
      name: 'Medical Supply Shop',
      category: 'medicalsupply',
      location: 'Riyadh, KSA',
      image: MedicalCenter1 ,
      medicines: ['Bandages', 'Gauze', 'Gloves'],
    },
    {
      id: 4,
      name: 'Premium Health Pharmacy',
      category: 'pharmacy',
      location: 'Kuwait City, Kuwait',
      image: 'https://thehealthcentrum.com/wp-content/uploads/2020/05/thc_pharmacy1.jpg',
      medicines: ['Insulin', 'Metformin', 'Atorvastatin'],
    },
    {
      id: 5,
      name: 'HealthPlus Drug Store',
      category: 'drugstore',
      location: 'Addis Ababa, Ethiopia',
      image: 'https://mendhanmedicalcenterrak.com/public/images/pharmacy_01.jpg',
      medicines: ['Painkillers', 'Antiseptics', 'Antihistamines'],
    },
    {
      id: 6,
      name: 'Royal Medical Supplies',
      category: 'medicalsupply',
      location: 'Gondar, Ethiopia',
      image: 'https://www.indiafilings.com/learn/wp-content/uploads/2015/04/starting-a-pharmacy-business.jpg',
      medicines: ['Syringes', 'Scalpels', 'Sutures'],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Pharmacies' },
    { id: 'pharmacy', label: 'Pharmacies' },
    { id: 'drugstore', label: 'Drug Stores' },
    { id: 'medicalsupply', label: 'Medical Supply Stores' },
  ];

  const filteredPharmacies = activeCategory === 'all'
    ? pharmacies
    : pharmacies.filter(pharmacy => pharmacy.category === activeCategory);

  return (
    <section id="pharmacies" className="py-20 bg-gray-50">
      <div className="w-full mx-auto px-[5%]">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Our Pharmacy Network
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access a wide range of medical supplies and medicines through our extensive network of pharmacies, drug stores, and medical supply stores.
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

        {/* Pharmacies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPharmacies.map(pharmacy => (
            <div
              key={pharmacy.id}
              className="bg-white rounded-xl border overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={pharmacy.image}
                  alt={pharmacy.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {pharmacy.name}
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
                  {pharmacy.location}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">
                    Available Medicines
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {pharmacy.medicines.map((medicine, index) => (
                      <span
                        key={index}
                        className="bg-green-50 text-primary px-2 py-1 rounded-full text-xs"
                      >
                        {medicine}
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

export default Pharmacy;
