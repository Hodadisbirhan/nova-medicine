export const defaultImages = {
  // Placeholder images from a reliable CDN
  heroDoctor: 'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg',
  heroBg: 'https://img.freepik.com/free-photo/medical-banner-with-doctor-stethoscope_23-2149611240.jpg',
  // Hero section images
  doctorsTeam: 'https://i.imgur.com/YQd56FQ.png',
  // Other images
  aboutMedical: 'https://img.freepik.com/free-photo/medical-workers-covid-19-vaccination-concept-confident-professional-doctor-female-nurse-blue-scrubs-stethoscope-cross-arms-chest-ready-help-patients-work-clinic_1258-57360.jpg',
  doctor1: 'https://img.freepik.com/free-photo/medium-shot-doctor-with-crossed-arms_23-2148868141.jpg',
  doctor2: 'https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg',
  doctor3: 'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg',
  doctor4: 'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg',
  news1: 'https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg',
  news2: 'https://img.freepik.com/free-photo/medical-workers-covid-19-treatment-concept-young-asian-doctor-working-clinic-wearing-medical-mask-using-digital-tablet-standing-white-background_1258-92513.jpg',
  news3: 'https://img.freepik.com/free-photo/young-male-psysician-with-patient-measuring-blood-pressure_1303-17879.jpg',
};

export const getImagePath = (imageName: keyof typeof defaultImages): string => {
  // First try to get the local image, if not available, use the default one
  const localPath = `/images/${imageName}.webp`;
  return defaultImages[imageName] || localPath;
};

export default getImagePath;
