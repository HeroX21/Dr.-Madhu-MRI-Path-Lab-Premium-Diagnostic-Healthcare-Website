export interface DiagnosticPackage {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  popular?: boolean;
  description: string;
  idealFor: string;
  testsCount: string;
  includes: string[];
  fastingRequired: boolean;
  fastingHours?: number;
  reportTurnaround: string;
}

export interface TestItem {
  name: string;
  category: string;
  turnaround: string;
  fasting: boolean;
  description: string;
}

export const SITE_INFO = {
  name: 'Dr. Madhu MRI Path Lab',
  legalName: 'Dr. Madhu MRI Path Lab & Diagnostic Centre',
  shortName: 'Dr. Madhu MRI',
  tagline: 'Comprehensive Diagnostic Imaging & Pathology Centre in North Delhi',
  experienceYears: '30+',
  established: 'Over 30 Years of Excellence',
  phone: '+91 98110 84727',
  phoneRaw: '919811084727',
  displayPhone: '098110 84727',
  email: 'drmadhusclinic@gmail.com',
  address: {
    line1: '34–36, Mall Road',
    landmark: 'Near GTB Nagar Metro Station (Gate No. 3)',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110033',
    full: '34–36, Mall Road, Near GTB Nagar Metro Station (Gate No. 3), New Delhi - 110033',
    directionsHint: 'Directly accessible from Gate No. 3 of GTB Nagar Yellow Line Metro Station.',
    lat: 28.6978,
    lng: 77.2073,
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=34-36%20Mall%20Road,%20Near%20GTB%20Nagar%20Metro%20Station%20Gate%203,%20New%20Delhi%20110033&t=&z=16&ie=UTF8&iwloc=&output=embed',
    googleMapsDirectLink: 'https://www.google.com/maps/search/?api=1&query=34-36+Mall+Road+GTB+Nagar+Delhi+110033',
  },
  operatingHours: {
    badge: 'Open 24 Hours / 7 Days',
    general: '24×7 Diagnostic Support Available',
    radiology: '24×7 Emergency & Scheduled Scanning',
    pathology: '24×7 Sample Processing & Blood Collection',
    walkIns: 'Walk-ins Welcome Around the Clock',
  },
  socials: {
    whatsapp: 'https://wa.me/919811084727',
  },
  highlights: [
    { title: '30+ Years of Excellence', description: 'North Delhi’s trusted diagnostic anchor since three decades.' },
    { title: '24×7 Emergency Availability', description: 'Always open for acute trauma, stroke, and round-the-clock urgent scans.' },
    { title: 'Advanced High-Precision Tech', description: 'High-field MRI, Multi-slice CT, Digital Radiography & Automated Lab.' },
    { title: 'Metro-Connected Convenience', description: 'Just a 1-minute walk from GTB Nagar Metro Station (Gate No. 3).' },
  ],
  patientGuidelines: [
    'Please carry your doctor’s valid prescription and any previous diagnostic scans/reports.',
    'Confirm specific fasting guidelines (usually 8–12 hours for blood glucose, lipid, and abdominal ultrasounds).',
    'For MRI scans with contrast, please bring recent serum creatinine / KFT report.',
    'Inform our radiology technologist if you have any metallic implants, pacemaker, or pregnancy.',
    'For 24×7 emergency scans (trauma, stroke), walk in directly or call +91 98110 84727 for immediate prep.',
  ],
};

export const PREVENTIVE_PACKAGES: DiagnosticPackage[] = [
  {
    id: 'basic-health',
    name: 'Basic Health Check',
    price: 1499,
    description: 'Essential preventive screening covering blood sugar, cholesterol, complete blood count, urine analysis, and doctor review.',
    idealFor: 'Annual baseline screening for young adults and busy professionals',
    testsCount: '55+ Parameters',
    fastingRequired: true,
    fastingHours: 10,
    reportTurnaround: 'Same Day (Within 6–8 Hours)',
    includes: [
      'Complete Blood Count (CBC) with ESR (24 Parameters)',
      'Fasting Blood Glucose (Blood Sugar)',
      'Lipid Profile (Total Cholesterol, HDL, LDL, Triglycerides)',
      'Kidney Screen (Blood Urea & Serum Creatinine)',
      'Liver Screen (SGOT, SGPT)',
      'Routine & Microscopic Urine Examination',
      'Clinical Health Report Review',
    ],
  },
  {
    id: 'executive-health',
    name: 'Executive Health Package',
    price: 3499,
    popular: true,
    description: 'Comprehensive whole-body checkup incorporating advanced blood panels, cardiac ECG, abdominal ultrasound, and organ screening.',
    idealFor: 'Professionals, individuals aged 30+, and proactive health management',
    testsCount: '80+ Parameters',
    fastingRequired: true,
    fastingHours: 10,
    reportTurnaround: 'Same Day Reporting',
    includes: [
      'Full Body Ultrasound (Abdomen & Pelvis)',
      '12-Lead Resting Electrocardiogram (ECG)',
      'Complete Blood Count with ESR & Peripheral Smear',
      'Fasting & Post-Prandial Blood Sugar',
      'Comprehensive Lipid Profile (Cholesterol, HDL, LDL, VLDL, Ratios)',
      'Complete Liver Function Test (LFT - 11 Parameters)',
      'Complete Kidney Function Test (KFT - Urea, Creatinine, Uric Acid, Electrolytes)',
      'Thyroid Profile (Total T3, Total T4, TSH)',
      'Urine Complete Examination',
      'Comprehensive Doctor Summary & Diet Guidance',
    ],
  },
  {
    id: 'senior-citizen-gold',
    name: 'Senior Citizen Gold',
    price: 2999,
    description: 'Tailored specifically for older adults focusing on heart risk, bone health, renal function, diabetes, and vital organs.',
    idealFor: 'Seniors aged 55+ with focus on chronic disease prevention',
    testsCount: '75+ Parameters',
    fastingRequired: true,
    fastingHours: 10,
    reportTurnaround: 'Same Day Reporting',
    includes: [
      'HbA1c (Glycated Hemoglobin 3-Month Average)',
      '12-Lead Cardiac ECG',
      'Complete Kidney Function Panel (BUN, Creatinine, Electrolytes, Uric Acid)',
      'Complete Liver Function Profile (Bilirubin, Enzymes, Proteins)',
      'Lipid Profile for Cardiovascular Assessment',
      'Serum Calcium & Alkaline Phosphatase (Bone Profile)',
      'Complete Blood Count with Platelets & Hemoglobin',
      'Urine Routine & Microscopic Evaluation',
      'Senior Wellness Consultation & Doctor Report',
    ],
  },
  {
    id: 'diabetic-screening',
    name: 'Diabetic Screening Package',
    price: 1899,
    description: 'Dedicated panel designed to detect diabetes early and evaluate long-term glycemic management and kidney-cardiac impact.',
    idealFor: 'Pre-diabetics, diabetic patients monitoring disease, high family risk',
    testsCount: '45+ Parameters',
    fastingRequired: true,
    fastingHours: 10,
    reportTurnaround: 'Same Day (Within 6 Hours)',
    includes: [
      'Fasting Blood Glucose',
      'Post-Prandial (PP) Glucose or Random Blood Sugar',
      'HbA1c Glycated Hemoglobin (with Estimated Average Glucose)',
      'Serum Creatinine & Blood Urea (Diabetic Nephropathy Screen)',
      'Lipid Profile (Cholesterol, Triglycerides, HDL, LDL)',
      'Urine Microalbumin / Protein Detection',
    ],
  },
  {
    id: 'womens-wellness',
    name: 'Women’s Wellness Package',
    price: 3299,
    description: 'Specialized checkup addressing hormonal balance, thyroid activity, anemia risk, breast health, and reproductive organ wellness.',
    idealFor: 'Women of all ages, reproductive health check, post-menopausal care',
    testsCount: '70+ Parameters',
    fastingRequired: true,
    fastingHours: 10,
    reportTurnaround: 'Same Day Reporting',
    includes: [
      'Pelvic & Abdominal Sonography (Uterus & Ovaries Evaluation)',
      'Thyroid Profile (T3, T4, Ultrasensitive TSH)',
      'Complete Blood Count & Ferritin/Iron Anemia Screening',
      'Serum Calcium & Vitamin D Screen',
      'Lipid Profile & Glucose Screen',
      'Liver & Kidney Function Profile',
      'Urine Complete Analysis',
    ],
  },
  {
    id: 'cardiac-risk',
    name: 'Cardiac Risk Assessment',
    price: 2699,
    description: 'Heart-focused risk profile evaluating cholesterol sub-fractions, blood pressure impact, ECG, and diabetes markers.',
    idealFor: 'Individuals with sedentary lifestyle, hypertension, or family cardiac history',
    testsCount: '50+ Parameters',
    fastingRequired: true,
    fastingHours: 12,
    reportTurnaround: 'Same Day Reporting',
    includes: [
      '12-Lead Electrocardiogram (ECG)',
      'Advanced Extended Lipid Profile with Atherogenic Index',
      'Blood Sugar Fasting & HbA1c',
      'Serum Electrolytes (Sodium, Potassium, Chloride)',
      'Serum Creatinine & Uric Acid',
      'Complete Blood Count (CBC)',
      'Doctor Consultation & Cardiac Risk Score',
    ],
  },
];
