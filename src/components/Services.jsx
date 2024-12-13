import React, { useState } from 'react';

function Services() {
  const [activeTab, setActiveTab] = useState('consultations');

  const services = {
    consultations: {
      title: 'Medical Consultations',
      description: 'Expert medical consultations with our experienced physicians.',
      items: [
        {
          title: 'In-person Consultations',
          description: 'Face-to-face consultations at our partner hospitals',
          icon: '🏥'
        },
        {
          title: 'Telemedicine',
          description: 'Virtual consultations from the comfort of your home',
          icon: '💻'
        },
        {
          title: 'Follow-up Care',
          description: 'Comprehensive follow-up and monitoring services',
          icon: '📋'
        }
      ]
    },
    diagnostic: {
      title: 'Diagnostic Services',
      description: 'Comprehensive diagnostic services with state-of-the-art equipment.',
      items: [
        {
          title: 'Laboratory Tests',
          description: 'Full range of clinical laboratory services',
          icon: '🔬'
        },
        {
          title: 'Medical Imaging',
          description: 'Advanced imaging services including MRI, CT, and X-ray',
          icon: '📷'
        },
        {
          title: 'Special Rates',
          description: 'Exclusive discounts for Nova Medics patients',
          icon: '💰'
        }
      ]
    },
    procedures: {
      title: 'Medical Procedures',
      description: 'Specialized medical procedures and treatments.',
      items: [
        {
          title: 'Specialized Treatments',
          description: 'Advanced medical procedures by expert physicians',
          icon: '⚕️'
        },
        {
          title: 'Minor Surgery',
          description: 'Outpatient surgical procedures',
          icon: '🔧'
        },
        {
          title: 'Preventive Care',
          description: 'Comprehensive preventive healthcare services',
          icon: '🛡️'
        }
      ]
    },
    aesthetic: {
      title: 'Aesthetic Medicine',
      description: 'Advanced aesthetic treatments for your well-being.',
      items: [
        {
          title: 'Skin Rejuvenation',
          description: 'Advanced skin care and rejuvenation treatments',
          icon: '✨'
        },
        {
          title: 'Body Contouring',
          description: 'Non-invasive body sculpting procedures',
          icon: '🎯'
        },
        {
          title: 'Anti-aging',
          description: 'Comprehensive anti-aging treatments',
          icon: '🌟'
        }
      ]
    },
    mental: {
      title: 'Mental Health',
      description: 'Professional mental health services and support.',
      items: [
        {
          title: 'Therapy Sessions',
          description: 'Individual and group therapy sessions',
          icon: '🧠'
        },
        {
          title: 'Psychiatric Care',
          description: 'Professional psychiatric consultations',
          icon: '🏥'
        },
        {
          title: 'Wellness Programs',
          description: 'Mental wellness and support programs',
          icon: '🌿'
        }
      ]
    }
  };

  return (
    <section id="services" className="py-20 w-full  bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full mx-auto px-[5%]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive healthcare services tailored to your needs
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(services).map(([key, service]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                ${activeTab === key
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:scale-105'
                }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Service Content */}
        <div className="w-full mx-auto">
          <div className="bg-white rounded-2xl border-[1px] p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-secondary mb-2">
                {services[activeTab].title}
              </h3>
              <p className="text-gray-600">
                {services[activeTab].description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services[activeTab].items.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="text-lg font-semibold text-secondary mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
