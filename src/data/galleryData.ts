export interface GalleryItem {
  id: string;
  title: string;
  category: 'mri-ct' | 'radiology' | 'pathology' | 'facility';
  categoryLabel: string;
  imageUrl: string;
  thumbnailUrl: string;
  description: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Advanced High-Field MRI Scanner',
    category: 'mri-ct',
    categoryLabel: 'MRI & CT Imaging',
    imageUrl: 'https://glenrosemedicalcenter.com/wp-content/uploads/2025/07/wide-bore-mri-glen-rose-texas-1200x924-1.jpg',
    thumbnailUrl: 'https://glenrosemedicalcenter.com/wp-content/uploads/2025/07/wide-bore-mri-glen-rose-texas-1200x924-1.jpg',
    description: 'High-field diagnostic MRI suite equipped with noise reduction and wide-bore patient comfort design.',
  },
  {
    id: 'gal-2',
    title: 'Multi-Slice CT Scanner Suite',
    category: 'mri-ct',
    categoryLabel: 'MRI & CT Imaging',
    imageUrl: 'https://citywideradiology.com/wp-content/uploads/2025/04/CT-Scan-in-NYC.jpg',
    thumbnailUrl: 'https://citywideradiology.com/wp-content/uploads/2025/04/CT-Scan-in-NYC.jpg',
    description: 'Fast multi-slice computed tomography providing sub-millimeter anatomical detail with low-dose radiation protocols.',
  },
  {
    id: 'gal-3',
    title: 'Automated Clinical Chemistry & Hematology Lab',
    category: 'pathology',
    categoryLabel: 'Pathology Laboratory',
    imageUrl: 'https://rapidlaboratory.in/wp-content/uploads/2023/08/Automation-in-Blood-Test-Labs.jpg',
    thumbnailUrl: 'https://rapidlaboratory.in/wp-content/uploads/2023/08/Automation-in-Blood-Test-Labs.jpg',
    description: 'Fully automated biochemistry and hematology analyzers with barcoded specimen tracking.',
  },
  {
    id: 'gal-4',
    title: 'High-Resolution Ultrasound & Color Doppler',
    category: 'radiology',
    categoryLabel: 'Ultrasound & X-Ray',
    imageUrl: 'https://mindray.scene7.com/is/image/mindray/Consona_N6_diagnostic_ultrasound_front_894x671_pc:introduction',
    thumbnailUrl: 'https://mindray.scene7.com/is/image/mindray/Consona_N6_diagnostic_ultrasound_front_894x671_pc:introduction',
    description: 'Real-time multi-frequency ultrasound console for abdominal, obstetric, and vascular Doppler studies.',
  },
  {
    id: 'gal-5',
    title: 'Digital Radiography (X-Ray) Bay',
    category: 'radiology',
    categoryLabel: 'Ultrasound & X-Ray',
    imageUrl: 'https://www.mavenimaging.com/hs-fs/hubfs/Digital_X-ray_Systems_1390x956.jpg?width=1390&height=926&name=Digital_X-ray_Systems_1390x956.jpg',
    thumbnailUrl: 'https://www.mavenimaging.com/hs-fs/hubfs/Digital_X-ray_Systems_1390x956.jpg?width=1390&height=926&name=Digital_X-ray_Systems_1390x956.jpg',
    description: 'Direct digital flat-panel X-ray suite delivering instant skeletal and chest diagnostic imaging.',
  },
  {
    id: 'gal-6',
    title: 'Digital Mammography Unit',
    category: 'radiology',
    categoryLabel: 'Ultrasound & X-Ray',
    imageUrl: 'https://www.hologic.com/sites/default/files/styles/coh_large_landscape/public/2021/03/Hologic__0023_3Dimensions%E2%84%A2%20Mammography%20System-Slide1_1.jpg?itok=4Z90nxKD',
    thumbnailUrl: 'https://www.hologic.com/sites/default/files/styles/coh_large_landscape/public/2021/03/Hologic__0023_3Dimensions%E2%84%A2%20Mammography%20System-Slide1_1.jpg?itok=4Z90nxKD',
    description: 'Private women’s screening suite for early detection of microcalcifications and breast tissue alterations.',
  },
  {
    id: 'gal-7',
    title: 'Non-Invasive FibroScan Liver Assessment',
    category: 'facility',
    categoryLabel: 'Centre & Patient Care',
    imageUrl: 'https://www.echosens.com/wp-content/uploads/2024/08/expert-630-face-RGB-LR-e1724321014585.webp',
    thumbnailUrl: 'https://www.echosens.com/wp-content/uploads/2024/08/expert-630-face-RGB-LR-e1724321014585.webp',
    description: 'Transient elastography device for quick, painless measurement of liver stiffness and fat percentage.',
  },
  {
    id: 'gal-8',
    title: 'Diagnostic Centre Exterior & Entrance',
    category: 'facility',
    categoryLabel: 'Centre & Patient Care',
    imageUrl: 'https://content.jdmagicbox.com/v2/comp/delhi/n9/011pxx11.xx11.161205130735.z2n9/catalogue/dr-madhu-mri-path-lab-gtb-nagar-delhi-pathology-labs-nyw3xi.jpg',
    thumbnailUrl: 'https://content.jdmagicbox.com/v2/comp/delhi/n9/011pxx11.xx11.161205130735.z2n9/catalogue/dr-madhu-mri-path-lab-gtb-nagar-delhi-pathology-labs-nyw3xi.jpg',
    description: 'Dr. Madhu MRI Path Lab facility located on Mall Road, right by GTB Nagar Metro Station Gate 3.',
  },
  {
    id: 'gal-9',
    title: 'Patient Reception & Registration Desk',
    category: 'facility',
    categoryLabel: 'Centre & Patient Care',
    imageUrl: 'https://sdk-image3.s3.ap-south-1.amazonaws.com/1_9db561aab5.jpg',
    thumbnailUrl: 'https://sdk-image3.s3.ap-south-1.amazonaws.com/1_9db561aab5.jpg',
    description: 'Comfortable, air-conditioned reception area with fast-track registration for walk-in and scheduled patients.',
  },
  {
    id: 'gal-10',
    title: 'Emergency 24×7 Diagnostic Standby Room',
    category: 'facility',
    categoryLabel: 'Centre & Patient Care',
    imageUrl: 'https://backend.ercare24.com/storage/uploads/college-station-emergency-room-signaturecare-lg.jpg',
    thumbnailUrl: 'https://backend.ercare24.com/storage/uploads/college-station-emergency-room-signaturecare-lg.jpg',
    description: 'Round-the-clock emergency imaging bay ready for trauma, acute stroke, and critical patient triage.',
  },
  {
    id: 'gal-11',
    title: 'Cross-Sectional Neuro-Imaging Console',
    category: 'mri-ct',
    categoryLabel: 'MRI & CT Imaging',
    imageUrl: 'https://www.statnews.com/wp-content/uploads/2019/08/x961_unsmoothed_cropped-copy.jpg',
    thumbnailUrl: 'https://www.statnews.com/wp-content/uploads/2019/08/x961_unsmoothed_cropped-copy.jpg',
    description: 'Detailed brain imaging review station for acute cerebral infarction and spinal pathology.',
  },
  {
    id: 'gal-12',
    title: 'Microbiology & Clinical Pathology Bench',
    category: 'pathology',
    categoryLabel: 'Pathology Laboratory',
    imageUrl: 'https://cdn.flabs.in/webassets/6456ba09ccf2c03a8522.png',
    thumbnailUrl: 'https://cdn.flabs.in/webassets/6456ba09ccf2c03a8522.png',
    description: 'Specialized testing bench handling culture examinations, serology assays, and routine microscopic analysis.',
  },
];
