import React from 'react';

function About() {
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Expert Physicians' },
    { number: '15k+', label: 'Happy Patients' },
    { number: '10+', label: 'Partner Hospitals' }
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'Commitment to delivering the highest quality healthcare services',
      icon: '🌟'
    },
    {
      title: 'Innovation',
      description: 'Embracing cutting-edge medical technologies and practices',
      icon: '💡'
    },
    {
      title: 'Compassion',
      description: 'Providing patient-centered care with empathy and understanding',
      icon: '❤️'
    },
    {
      title: 'Integrity',
      description: 'Maintaining the highest standards of professional ethics',
      icon: '🤝'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="w-full mx-auto px-[5%]">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-secondary mb-6">
              Leading Healthcare
              <span className="text-primary block mt-2">in Ethiopia</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Nova Medics Consultancies is at the forefront of transforming healthcare delivery in Ethiopia. 
              We combine international expertise with local understanding to provide world-class medical services.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white border rounded-lg shadow"
                >
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-72 h-[12rem] bg-primary/10 rounded-full blur-3xl" />
            <img
              src="/images/doctors/team.jpg"
              alt="Medical Team"
              className="relative z-10  rounded-2xl "
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-secondary mb-4">Our Values</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our core values guide every aspect of our service delivery
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl border transition-shadow"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h4 className="text-xl font-semibold text-secondary mb-2">{value.title}</h4>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-primary text-white p-12 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience World-Class Healthcare?</h3>
            <p className="mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied patients who have chosen Nova Medics for their healthcare needs
            </p>
            <button className="px-8 py-3 bg-white text-primary rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
