import { defaultImages } from '../utils/imagePaths';

const physicians = [
  {
    id: 1,
    name: "Dr. Emily Johnson",
    specialty: "Cardiology",
    image: defaultImages.doctor1,
    education: "MD, Harvard Medical School",
    experience: "15+ years experience",
    availability: "Mon, Wed, Fri"
  },
  {
    id: 2,
    name: "Dr. David Chen",
    specialty: "Neurology",
    image: defaultImages.doctor2,
    education: "MD, Johns Hopkins University",
    experience: "12+ years experience",
    availability: "Tue, Thu, Sat"
  },
  {
    id: 3,
    name: "Dr. Sarah Williams",
    specialty: "Pediatrics",
    image: defaultImages.doctor3,
    education: "MD, Stanford University",
    experience: "10+ years experience",
    availability: "Mon, Tue, Thu"
  },
  {
    id: 4,
    name: "Dr. Michael Brown",
    specialty: "Orthopedics",
    image: defaultImages.doctor4,
    education: "MD, Yale University",
    experience: "18+ years experience",
    availability: "Wed, Fri, Sat"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Meet Our Medical Specialists
          </h2>
          <p className="text-secondary-light max-w-2xl mx-auto">
            Our team of experienced healthcare professionals is dedicated to
            providing you with the highest quality medical care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {physicians.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-white text-xl font-semibold">
                    {doctor.name}
                  </h3>
                  <p className="text-white/80">{doctor.specialty}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-secondary-light mb-1">
                    <span className="font-medium">Education:</span> {doctor.education}
                  </p>
                  <p className="text-secondary-light mb-1">
                    <span className="font-medium">Experience:</span>{" "}
                    {doctor.experience}
                  </p>
                  <p className="text-secondary-light">
                    <span className="font-medium">Available:</span>{" "}
                    {doctor.availability}
                  </p>
                </div>
                <a
                  href="#appointment"
                  className="btn-primary w-full text-center"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn-outline inline-block">
            View All Physicians
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
