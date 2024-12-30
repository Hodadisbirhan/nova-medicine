// import   from 'react';

function Consultants() {
  const services = [
    {
      id: 1,
      name: 'Cardiology Consultation',
      image: 'https://c8.alamy.com/comp/M51DWW/smiling-doctor-talking-with-a-patient-M51DWW.jpg',
      contact: 'cardio.consult@example.com',
      description: 'Expert cardiology consultation services including diagnosis, treatment plans, and second opinions for heart-related conditions.'
    },
    {
      id: 2,
      name: 'Neurology Consultation',
      image: 'https://c8.alamy.com/comp/EYA380/view-of-a-young-attractive-doctor-listening-his-patient-EYA380.jpg',
      contact: 'neuro.consult@example.com',
      description: 'Comprehensive neurology consultation services for patients dealing with neurological disorders and diseases.'
    },
    {
      id: 3,
      name: 'Pediatric Consultation',
      image: 'https://c8.alamy.com/comp/AP893E/male-doctor-advising-young-couple-AP893E.jpg',
      contact: 'pediatric.consult@example.com',
      description: 'Pediatric consultation services providing expert care for children from infancy through adolescence.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="w-full mx-auto px-[5%]">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">Our Consultant Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our range of specialized consultant services designed to provide you with expert healthcare solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <article 
              key={service.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                  Consultation
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="text-sm text-gray-500 mb-2 block">
                  Contact: <a href={`mailto:${service.contact}`} className="text-primary hover:underline">{service.contact}</a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-full">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Consultants;
