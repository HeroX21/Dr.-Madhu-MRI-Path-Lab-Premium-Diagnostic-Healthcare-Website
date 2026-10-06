export interface ServiceDetail {
  slug: string;
  name: string;
  shortName: string;
  category: 'Radiology' | 'Pathology' | 'Advanced Imaging' | 'Specialized';
  tagline: string;
  heroImage: string;
  galleryImages: { url: string; caption: string }[];
  overview: string;
  clinicalImportance: string;
  quote: string;
  keyFeatures: string[];
  commonApplications: { title: string; description: string }[];
  patientPreparation: { step: string; detail: string }[];
  keyBenefits: { title: string; description: string }[];
  relatedInvestigations: { title: string; description: string }[];
  prescriptionRequired: boolean;
  emergencyAvailable24x7: boolean;
  typicalDuration: string;
  reportDelivery: string;
}

export const SERVICES_LIST: ServiceDetail[] = [
  {
    slug: 'mri-scan',
    name: 'Advanced MRI Scan Services',
    shortName: 'MRI Scans',
    category: 'Advanced Imaging',
    tagline: 'High-field, radiation-free soft tissue and neurological diagnostic imaging',
    heroImage: 'https://glenrosemedicalcenter.com/wp-content/uploads/2025/07/wide-bore-mri-glen-rose-texas-1200x924-1.jpg',
    galleryImages: [
      {
        url: 'https://files.alphasophia.com/lp/b2f6362f-1d65-41ff-adcf-74dc96401b80.png',
        caption: 'Advanced High-Field MRI Scanner at Dr. Madhu MRI Path Lab',
      },
      {
        url: 'https://www.statnews.com/wp-content/uploads/2019/08/x961_unsmoothed_cropped-copy.jpg',
        caption: 'High-resolution neuro-imaging for brain and stroke evaluation',
      },
      {
        url: 'https://www.diagnopein.com/img/BlogImages/MRI%20Pelvis.jpg',
        caption: 'Detailed pelvic and musculoskeletal soft tissue evaluation',
      },
    ],
    overview:
      'At Dr. Madhu MRI Path Lab, we provide state-of-the-art MRI Scan services utilizing high-resolution imaging technology. Magnetic Resonance Imaging (MRI) is a non-invasive, radiation-free diagnostic modality that delivers extraordinarily detailed views of soft tissues, nerves, joints, brain, spine, and internal organs.',
    clinicalImportance:
      'MRI is critical for diagnosing complex neurological, orthopedic, musculoskeletal, and internal medical conditions where soft tissue contrast is paramount. It allows our radiologists to detect millimeter-level lesions without ionizing radiation.',
    quote:
      'Our advanced MRI technology ensures patient comfort and superior image quality, supporting accurate diagnosis and effective treatment planning.',
    keyFeatures: [
      'Radiation-free imaging utilizing magnetic fields and radiofrequency waves',
      'High-resolution multi-planar reconstruction (axial, coronal, sagittal)',
      'Contrast-enhanced studies with certified gadolinium protocols',
      'Continuous intercom communication and hearing protection for patient comfort',
      'Round-the-clock 24×7 availability for emergency neurological and trauma cases',
    ],
    commonApplications: [
      {
        title: 'Brain & Neurological MRI',
        description: 'Crucial for detecting acute strokes, brain tumors, aneurysms, multiple sclerosis plaques, and severe chronic headaches.',
      },
      {
        title: 'Spine & Orthopedic MRI',
        description: 'Precision evaluation of lumbar/cervical disc herniations, spinal canal stenosis, nerve compression, and spinal cord trauma.',
      },
      {
        title: 'Joints & Musculoskeletal (MSK)',
        description: 'Diagnoses sports injuries, ACL/PCL tears, meniscus injuries, rotator cuff tears, cartilage damage, and arthritis.',
      },
      {
        title: 'Abdominal & Pelvic MRI',
        description: 'Detailed characterization of liver lesions, pancreas, kidneys, prostate, uterus, and ovaries.',
      },
    ],
    patientPreparation: [
      { step: 'Metallic Implant Screening', detail: 'Complete our safety questionnaire regarding pacemakers, metallic clips, or cochlear implants.' },
      { step: 'Clothing & Accessories', detail: 'Wear metal-free clothing; lockers are provided for jewelry, watches, phones, and bank cards.' },
      { step: 'Fasting for Contrast Scans', detail: 'If IV contrast is advised, fast for 4 hours prior and carry recent Serum Creatinine/KFT test results.' },
      { step: 'Comfort & Claustrophobia', detail: 'Our staff will guide you through relaxed breathing; call ahead if mild relaxation guidance is needed.' },
    ],
    keyBenefits: [
      { title: 'Zero Ionizing Radiation', description: 'Safe for repeated checkups, young adults, and vulnerable patients.' },
      { title: 'Superior Soft Tissue Contrast', description: 'Far exceeds standard imaging for ligaments, brain, and spinal nerves.' },
      { title: 'Expert Sub-specialist Reporting', description: 'Analyzed by experienced radiologists with 30+ years clinic legacy.' },
    ],
    relatedInvestigations: [
      { title: 'CT Scan', description: 'Complementary imaging when bone cortex or acute emergency hemorrhage requires rapid scan.' },
      { title: 'X-Ray Services', description: 'Baseline screening for fractures prior to soft-tissue ligament evaluation.' },
      { title: 'Kidney Function Test (KFT)', description: 'Mandatory prior to contrast MRI to confirm renal filtration safety.' },
    ],
    prescriptionRequired: true,
    emergencyAvailable24x7: true,
    typicalDuration: '20 to 45 minutes',
    reportDelivery: 'Prompt Digital Reports within hours; immediate verbal review for STAT emergency cases.',
  },
  {
    slug: 'ct-scan',
    name: 'Multi-Slice CT Scan Services',
    shortName: 'CT Scans',
    category: 'Advanced Imaging',
    tagline: 'Rapid cross-sectional multi-slice computed tomography with optimized low-dose radiation',
    heroImage: 'https://citywideradiology.com/wp-content/uploads/2025/04/CT-Scan-in-NYC.jpg',
    galleryImages: [
      {
        url: 'https://thumbs.dreamstime.com/b/modern-ct-scanner-mri-machine-hospital-radiology-center-diagnostic-equipment-medical-lab-modern-ct-scanner-mri-378434312.jpg',
        caption: 'High-speed multi-slice CT scanning bay',
      },
      {
        url: 'https://teachmeanatomy.info/wp-content/uploads/CT-Scan-of-Abdominal-Aortic-Aneurysm.jpg',
        caption: 'Cross-sectional angiography and abdominal evaluation',
      },
      {
        url: 'https://www.yashodahealthcare.com/blogs/wp-content/uploads/2023/03/ct-scan.jpg',
        caption: 'Low-dose multi-slice CT system configured for emergency scans',
      },
    ],
    overview:
      'At Dr. Madhu MRI Path Lab, we offer state-of-the-art CT Scan services using advanced multi-slice Computed Tomography technology. CT scans provide ultra-fast, cross-sectional images of the body, making them essential for rapid diagnosis in emergencies, trauma cases, acute chest infections, and abdominal pain.',
    clinicalImportance:
      'The procedure is completed in seconds to minutes, making it the gold standard in time-critical medical scenarios such as acute head trauma, stroke triage, and acute abdomen.',
    quote:
      'Our advanced CT imaging ensures rapid and precise diagnostics, supporting timely treatment decisions for better patient outcomes.',
    keyFeatures: [
      'Multi-slice detector technology providing ultra-thin sub-millimeter slices',
      'Dose-optimization protocols that reduce radiation exposure while maintaining pristine diagnostic clarity',
      'Rapid 3D multi-planar reconstruction for vascular and skeletal trauma analysis',
      'Immediate image availability for attending trauma specialists and physicians',
      '24×7 emergency scanning availability',
    ],
    commonApplications: [
      {
        title: 'Head & Brain CT',
        description: 'First-line emergency modality to rule out acute intracranial hemorrhage, skull fractures, stroke, and concussion.',
      },
      {
        title: 'Chest & HRCT Thorax',
        description: 'High-resolution imaging of pulmonary infections, pneumonia, pulmonary embolism, interstitial lung disease, and nodules.',
      },
      {
        title: 'Abdominal & Pelvic CT',
        description: 'Pinpoints appendicitis, kidney stones, bowel obstruction, acute pancreatitis, diverticulitis, and traumatic injuries.',
      },
      {
        title: 'CT Angiography & Spine',
        description: 'Assesses blood vessels, aneurysms, aortic dissection, and complex multi-fragment bone fractures.',
      },
    ],
    patientPreparation: [
      { step: 'Prescription Verification', detail: 'Bring doctor referral with specific clinical indication (plain vs. contrast CT).' },
      { step: 'Fasting Guidelines', detail: 'For contrast-enhanced scans (CECT), fast for 4 hours; water is usually permitted.' },
      { step: 'Creatinine Assessment', detail: 'Patients receiving iodinated contrast require a normal serum creatinine test.' },
      { step: 'Allergy History', detail: 'Inform our staff in advance of any prior allergic responses to contrast agents or asthma.' },
    ],
    keyBenefits: [
      { title: 'Lightning Fast Scanning', description: 'Acquisitions completed in minutes; essential for agitated or emergency patients.' },
      { title: 'Low-Dose Radiation Control', description: 'Modern automated dose modulation protects patient health.' },
      { title: 'High-Accuracy Emergency Reporting', description: 'Critical results conveyed directly to emergency doctors.' },
    ],
    relatedInvestigations: [
      { title: 'Digital X-Ray', description: 'Initial baseline for skeletal trauma.' },
      { title: 'Ultrasound Abdomen', description: 'Complementary radiation-free evaluation for biliary or renal colic.' },
      { title: 'Emergency Blood Tests', description: 'CBC and Troponin I alongside chest CT for cardiopulmonary diagnosis.' },
    ],
    prescriptionRequired: true,
    emergencyAvailable24x7: true,
    typicalDuration: '5 to 15 minutes',
    reportDelivery: 'STAT verbal reports for emergencies; comprehensive signed report within 2–4 hours.',
  },
  {
    slug: 'ultrasound',
    name: 'Ultrasound & Sonography Services',
    shortName: 'Ultrasound & Doppler',
    category: 'Radiology',
    tagline: 'High-resolution, radiation-free real-time ultrasound and color Doppler imaging',
    heroImage: 'https://mindray.scene7.com/is/image/mindray/Consona_N6_diagnostic_ultrasound_front_894x671_pc:introduction',
    galleryImages: [
      {
        url: 'https://udmi.net/wp-content/uploads/2019/06/5M7A5352_US-Machine-and-Empty-Patient-Bed-1024x683.jpg',
        caption: 'High-end ultrasound bay with color Doppler capabilities',
      },
      {
        url: 'https://raisingchildren.net.au/__data/assets/image/0021/49116/pregnancy-scan-12-weeks-dads.jpg',
        caption: 'Obstetric fetal ultrasound monitoring',
      },
      {
        url: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/324/324392/man-having-abdominal-ultrasound.jpg',
        caption: 'Abdominal ultrasound examining liver, gallbladder, and kidneys',
      },
    ],
    overview:
      'At Dr. Madhu MRI Path Lab, we offer comprehensive Ultrasound and Sonography services utilizing state-of-the-art equipment for real-time, high-resolution imaging of internal organs, soft tissues, and developing fetuses. Completely radiation-free and painless, sonography is safe for all age groups.',
    clinicalImportance:
      'Ultrasound allows dynamic, real-time visualization of soft tissue movement, vascular perfusion via Color Doppler, and non-invasive organ diagnostics without patient discomfort.',
    quote:
      'Ultrasound imaging provides immediate insights without any discomfort or radiation exposure, making it the preferred choice for routine checkups, pregnancy monitoring, and urgent diagnostics.',
    keyFeatures: [
      'State-of-the-art broad-bandwidth transducers for high-depth clarity',
      'Color Doppler and Spectral Doppler for vascular blood flow analysis',
      'Comfortable, hygienic scanning suites with patient privacy prioritized',
      'Expert sonologists with decades of clinical diagnostic experience',
      'Available round-the-clock for acute abdominal emergencies and colic pain',
    ],
    commonApplications: [
      {
        title: 'Whole Abdomen Ultrasound',
        description: 'Examines liver, gallbladder (gallstones), kidneys (renal calculi), pancreas, spleen, and urinary bladder.',
      },
      {
        title: 'Obstetric & Fetal Sonography',
        description: 'Follows pregnancy milestones, fetal cardiac activity, growth parameters, placental location, and amniotic fluid levels.',
      },
      {
        title: 'Pelvic Sonography',
        description: 'Evaluates uterus, ovaries, endometrial lining, fibroids, cysts, and prostate in men.',
      },
      {
        title: 'Color Doppler Studies',
        description: 'Assesses peripheral arterial and venous blood flow (DVT rule-out), carotid Doppler, and renal vascular studies.',
      },
      {
        title: 'Small Parts (Thyroid, Breast, Scrotum)',
        description: 'High-frequency imaging for thyroid nodules, testicular torsion, breast masses, and superficial swellings.',
      },
    ],
    patientPreparation: [
      { step: 'Abdominal Ultrasound', detail: 'Overnight fasting or 6–8 hours fasting required to keep gallbladder distended and bowel gas minimal.' },
      { step: 'Pelvic / KUB Ultrasound', detail: 'A full urinary bladder is needed; drink 4–5 glasses of water 1 hour prior and avoid urinating.' },
      { step: 'Pregnancy Scans', detail: 'Follow instructions provided at booking depending on gestational trimester.' },
    ],
    keyBenefits: [
      { title: '100% Radiation Free', description: 'Zero risk, entirely safe for pregnant women, newborns, and repeat monitoring.' },
      { title: 'Real-Time Dynamic Results', description: 'Immediate visualization with live motion assessment during procedure.' },
      { title: 'Comfortable & Painless', description: 'Only acoustic gel and gentle transducer contact on the skin.' },
    ],
    relatedInvestigations: [
      { title: 'Pathology Urine Routine', description: 'Pairs with KUB ultrasound to identify urinary tract infections or hematuria.' },
      { title: 'Liver Function Test (LFT)', description: 'Complements abdominal sonography for jaundice or fatty liver evaluation.' },
      { title: 'FibroScan', description: 'Quantifies liver stiffness and fat percentage when fatty liver is spotted.' },
    ],
    prescriptionRequired: true,
    emergencyAvailable24x7: true,
    typicalDuration: '15 to 25 minutes',
    reportDelivery: 'Immediate image review with final typed report handed over within 30–60 minutes.',
  },
  {
    slug: 'mammography',
    name: 'Digital Mammography Services',
    shortName: 'Digital Mammography',
    category: 'Radiology',
    tagline: 'High-definition digital breast screening and diagnostic imaging dedicated to women’s health',
    heroImage: 'https://www.hologic.com/sites/default/files/styles/coh_large_landscape/public/2021/03/Hologic__0023_3Dimensions%E2%84%A2%20Mammography%20System-Slide1_1.jpg?itok=4Z90nxKD',
    galleryImages: [
      {
        url: 'https://modernlab-berjaoui.com/assets/images/contents/mamography.jpg',
        caption: 'Low-dose digital mammography system',
      },
      {
        url: 'https://blog.beekley.com/hs-fs/hubfs/Imported_Blog_Media/breastimg-cvr.jpg?width=2500&height=1600&name=breastimg-cvr.jpg',
        caption: 'Radiologist reviewing digital breast mammograms',
      },
      {
        url: 'https://www.cancer.gov/sites/g/files/xnrzdm211/files/styles/cgov_enlarged/public/cgov_image/media_image/2024-07/Mammography.jpg?h=cea5cde5&itok=Pg4ek5ya',
        caption: 'Dedicated private breast screening suite for women',
      },
    ],
    overview:
      'At Dr. Madhu MRI Path Lab, we provide dedicated digital mammography services focused on women’s breast wellness. Utilizing modern low-dose digital technology, our facility enables early identification of microcalcifications, masses, and breast architecture changes before they can be felt clinically.',
    clinicalImportance:
      'Early detection through annual routine screening significantly reduces complications and provides peace of mind. Our exams are conducted by trained female technologists in a respectful, private environment.',
    quote:
      'Early detection through regular mammography screening can significantly improve outcomes and save lives. Our compassionate team ensures a comfortable and dignified experience for every patient.',
    keyFeatures: [
      'High-definition digital detector matrices revealing microscopic calcifications',
      'Gentle, automated compression pads engineered for maximum patient comfort',
      'Low-dose digital radiation protocols complying with stringent safety standards',
      'Private screening suites staffed exclusively by sensitive female technologists',
      'Detailed BI-RADS categorized reporting by seasoned radiologists',
    ],
    commonApplications: [
      {
        title: 'Routine Annual Screening',
        description: 'Recommended for women aged 40 and above for early baseline health monitoring.',
      },
      {
        title: 'Diagnostic Mammogram',
        description: 'Investigates palpable lumps, focal pain, nipple discharge, or skin dimpling.',
      },
      {
        title: 'High-Risk Family Surveillance',
        description: 'Regular monitoring for women with a strong family history of breast cancer or genetic markers.',
      },
      {
        title: 'Post-Treatment Follow-up',
        description: 'Surveillance imaging after surgery or medical therapies.',
      },
    ],
    patientPreparation: [
      { step: 'Timing with Cycle', detail: 'Best scheduled 7–10 days after the start of your menstrual cycle when breasts are least tender.' },
      { step: 'Hygiene Products', detail: 'Do not apply deodorant, antiperspirant, body powder, or lotion to underarms or chest on exam day.' },
      { step: 'Clothing', detail: 'Wear a convenient two-piece outfit (skirt/pants and top) so you only need to undress from waist up.' },
      { step: 'Previous Records', detail: 'Bring all previous mammogram films and reports for comparative analysis.' },
    ],
    keyBenefits: [
      { title: 'Early Detection Advantage', description: 'Detects microscopic lesions years before clinical symptoms appear.' },
      { title: 'Trained Female Staff', description: 'Dignified, compassionate handling by certified female technologists.' },
      { title: 'Digital Image Clarity', description: 'High contrast enables precise differentiation between benign and suspect lesions.' },
    ],
    relatedInvestigations: [
      { title: 'Breast Ultrasound (Sonomammogram)', description: 'Essential complement for dense breast tissue to confirm solid vs. cystic nature.' },
      { title: 'Breast MRI', description: 'Advanced diagnostic imaging for high-risk surveillance and surgical planning.' },
      { title: 'Fine Needle Aspiration / Biopsy Guidance', description: 'Performed when definitive tissue cytology is requested.' },
    ],
    prescriptionRequired: true,
    emergencyAvailable24x7: false,
    typicalDuration: '15 to 20 minutes',
    reportDelivery: 'Delivered within 24 hours with BI-RADS classification and radiologist review.',
  },
  {
    slug: 'pathology',
    name: 'Pathology & Laboratory Diagnostic Services',
    shortName: 'Pathology Tests',
    category: 'Pathology',
    tagline: 'Fully automated clinical laboratory providing precision hematology, biochemistry & molecular testing',
    heroImage: 'https://cdn.flabs.in/webassets/6456ba09ccf2c03a8522.png',
    galleryImages: [
      {
        url: 'https://rapidlaboratory.in/wp-content/uploads/2023/08/Automation-in-Blood-Test-Labs.jpg',
        caption: 'Automated clinical chemistry and hematology analyzers',
      },
      {
        url: 'https://www.sironadiagnostics.com/wp-content/uploads/2022/06/Pathology-1.jpg',
        caption: 'Hygienic sample processing area with strict quality assurance',
      },
      {
        url: 'https://anamollabs.com/wp-content/uploads/steptodown.com148887.jpg',
        caption: 'Barcoded vacutainer sample collection for flawless specimen tracking',
      },
    ],
    overview:
      'At Dr. Madhu MRI Path Lab, our Pathology & Laboratory Department is equipped with high-throughput automated analyzers operating under rigorous quality control standards. We provide a full spectrum of diagnostic blood, urine, and body fluid tests with exceptional accuracy, hygiene, and rapid digital reporting.',
    clinicalImportance:
      'Laboratory diagnostics form the backbone of clinical medicine, guiding over 70% of medical diagnoses. From basic blood counts to sensitive cardiac troponin and hormone levels, our lab operates 24×7 to support critical patient care.',
    quote:
      'Our commitment to hygiene, accuracy, and patient comfort makes us a trusted choice for doctors and patients alike. From sample collection to result delivery, every step is handled with professionalism and care.',
    keyFeatures: [
      'Fully automated biochemistry, hematology, and chemiluminescence analyzers',
      'Barcoded sample tracking eliminating sample mix-ups and transcription errors',
      'Strict multi-tier internal calibration and external quality control benchmarks',
      'Hygienic collection booths staffed by gentle, experienced phlebotomists',
      'Home sample collection available across North Delhi with rapid courier logistics',
      'Instant digital PDF reports sent via WhatsApp and email',
    ],
    commonApplications: [
      {
        title: 'Hematology & Hemoglobinopathy',
        description: 'Complete Blood Count (CBC) with 24 parameters, ESR, platelet counts, peripheral blood smear, and bleeding profiles.',
      },
      {
        title: 'Clinical Biochemistry',
        description: 'Liver Function Test (LFT), Kidney Function Test (KFT), Lipid Profile, Serum Electrolytes, and Uric Acid.',
      },
      {
        title: 'Diabetic & Metabolic Profiling',
        description: 'Fasting/PP Blood Sugar, HbA1c (Glycated Hemoglobin), Insulin resistance, and Microalbuminuria.',
      },
      {
        title: 'Thyroid & Endocrine Hormones',
        description: 'Thyroid Profile (Total T3, Total T4, TSH), Free T3/T4, Vitamin D, Vitamin B12, and reproductive hormones.',
      },
      {
        title: 'Infection & Critical Care Markers',
        description: 'CRP, Procalcitonin, D-Dimer, Troponin I, Dengue NS1, Typhoid, Malaria, and bacterial urine cultures.',
      },
    ],
    patientPreparation: [
      { step: 'Fasting Tests (Lipid, Glucose, KFT)', detail: 'Fast for 10–12 hours overnight. Plain water is permitted and encouraged.' },
      { step: 'Post-Prandial Glucose (PP)', detail: 'Blood sample must be drawn exactly 2 hours after finishing your meal.' },
      { step: 'Medication Timing', detail: 'Check with your physician whether morning thyroid or blood pressure pills should be taken before test.' },
      { step: 'Home Sample Collection', detail: 'Book by calling +91 98110 84727 for morning phlebotomy visits right at your home.' },
    ],
    keyBenefits: [
      { title: 'Maximum Accuracy Guarantee', description: 'Dual automated verification and pathologist sign-off on every abnormal value.' },
      { title: 'Same-Day Digital Reporting', description: 'Get test reports online or directly on your phone within hours.' },
      { title: 'Convenient Home Collection', description: 'Comfortable blood draw at your doorstep for seniors and busy families.' },
    ],
    relatedInvestigations: [
      { title: 'Preventive Health Packages', description: 'Cost-effective grouped health packages combining 55+ to 80+ tests.' },
      { title: 'Ultrasound Abdomen', description: 'Pairs with abnormal LFT/KFT tests to identify gallstones or fatty liver.' },
      { title: 'CT & MRI Scans', description: 'Advanced imaging based on biochemical and infection findings.' },
    ],
    prescriptionRequired: false,
    emergencyAvailable24x7: true,
    typicalDuration: '5 to 10 minutes for sample collection',
    reportDelivery: 'Routine tests delivered within 4–6 hours; emergency STAT tests processed within 60 minutes.',
  },
  {
    slug: 'fibroscan',
    name: 'FibroScan® Non-Invasive Liver Health Services',
    shortName: 'FibroScan',
    category: 'Specialized',
    tagline: 'Painless, 5-minute transient elastography measuring liver stiffness and fatty liver steatosis',
    heroImage: 'https://www.echosens.com/wp-content/uploads/2024/08/expert-630-face-RGB-LR-e1724321014585.webp',
    galleryImages: [
      {
        url: 'https://phyathai2international.com/image/Fibroscan%20updated.jpg',
        caption: 'Modern FibroScan system for liver fibrosis and steatosis staging',
      },
      {
        url: 'https://www.dougsamuel.com.au//wp-content/uploads/2016/10/LSMbyCastera.jpg',
        caption: 'Liver stiffness (kPa) and CAP score quantification output',
      },
      {
        url: 'https://www.midashospital.com/Content/Home/images/services/Photo_Test_Fibroscan-1536x838.jpeg',
        caption: 'Comfortable, non-invasive liver examination procedure',
      },
    ],
    overview:
      'At Dr. Madhu MRI Path Lab, we offer cutting-edge FibroScan services — a breakthrough non-invasive method for assessing liver health without surgery or biopsy. FibroScan (transient elastography) utilizes gentle ultrasound-based shear waves to quantify liver stiffness (fibrosis) and fat accumulation (steatosis).',
    clinicalImportance:
      'Traditionally, assessing chronic liver damage required an invasive liver biopsy involving needles and hospital stays. FibroScan delivers comparable diagnostic precision in just 5 to 10 minutes completely painlessly and without radiation.',
    quote:
      'FibroScan is a quick, painless alternative to liver biopsy, delivering accurate results in minutes and helping in the early management of chronic liver diseases.',
    keyFeatures: [
      'Liver Stiffness Measurement (LSM in kPa) for precise staging of fibrosis (F0 to F4 cirrhosis)',
      'Controlled Attenuation Parameter (CAP in dB/m) measuring liver fat steatosis (S0 to S3)',
      'Radiation-free, 100% painless procedure with zero recovery downtime',
      'Instant quantitative scoring aiding gastroenterologists and hepatologists',
      'Ideal for regular monitoring of lifestyle changes and medical therapy response',
    ],
    commonApplications: [
      {
        title: 'Non-Alcoholic Fatty Liver Disease (NAFLD / MASLD)',
        description: 'Accurately quantifies liver fat grade and monitors reversal after dietary modifications and exercise.',
      },
      {
        title: 'Chronic Hepatitis B & C Management',
        description: 'Stages fibrosis level to determine whether antiviral medications are indicated without needing a biopsy.',
      },
      {
        title: 'Alcohol-Related Liver Disease',
        description: 'Evaluates early asymptomatic stiffness and detects emerging liver scarring before cirrhosis develops.',
      },
      {
        title: 'High-Risk Metabolic Surveillance',
        description: 'Recommended for diabetic, obese, and metabolic syndrome patients prone to silent liver damage.',
      },
    ],
    patientPreparation: [
      { step: 'Fasting Requirement', detail: 'Fasting for at least 3 hours prior to the scan is required for accurate liver stiffness measurements.' },
      { step: 'Clothing', detail: 'Wear comfortable clothing that allows easy access to the right side of your ribcage.' },
      { step: 'Relaxation', detail: 'No sedation or injections; you will lie comfortably on an exam table while the probe pulses gently.' },
    ],
    keyBenefits: [
      { title: 'Safe & Painless Biopsy Alternative', description: 'Zero puncture risk, zero bleeding complications, zero hospital stay.' },
      { title: 'Fast 10-Minute Procedure', description: 'Quick scan with immediate numerical liver stiffness score.' },
      { title: 'Monitors Healing Over Time', description: 'Repeat scans track liver tissue recovery as lifestyle improves.' },
    ],
    relatedInvestigations: [
      { title: 'Liver Function Test (LFT)', description: 'Measures liver enzymes (SGOT, SGPT, Bilirubin, Alkaline Phosphatase).' },
      { title: 'Viral Hepatitis Panel', description: 'Screening for Hepatitis B surface antigen and Hepatitis C antibodies.' },
      { title: 'Abdominal Ultrasound', description: 'Structural evaluation of liver morphology and portal vein.' },
    ],
    prescriptionRequired: false,
    emergencyAvailable24x7: false,
    typicalDuration: '5 to 10 minutes',
    reportDelivery: 'Immediate printed report and consultation-ready quantitative graph handed over post-procedure.',
  },
  {
    slug: 'xray',
    name: 'Digital X-Ray Diagnostic Services',
    shortName: 'X-Ray Services',
    category: 'Radiology',
    tagline: 'High-definition digital radiography with instant image acquisition and minimal radiation exposure',
    heroImage: 'https://www.mavenimaging.com/hs-fs/hubfs/Digital_X-ray_Systems_1390x956.jpg?width=1390&height=926&name=Digital_X-ray_Systems_1390x956.jpg',
    galleryImages: [
      {
        url: 'https://www.or-technology.com/images/2022/06/20/amadeo-m-dr-mini-wireless-portable-x-ray-system.webp',
        caption: 'Advanced digital radiography detector and positioning station',
      },
      {
        url: 'https://www.ahu.edu/sites/default/files/styles/fc_800x533/public/media/radiologists-examining-images.jpg?h=73545cb6&itok=Ixb4T89n',
        caption: 'Radiologists analyzing high-contrast digital chest and bone radiography',
      },
      {
        url: 'https://medlineplus.gov/images/Xray_share.jpg',
        caption: 'High-contrast bone and joint alignment imaging',
      },
    ],
    overview:
      'At Dr. Madhu MRI Path Lab, we offer advanced Digital X-Ray services for fast and accurate imaging of bones, chest, joints, and abdominal cavities. Utilizing digital detector technology, our radiographs deliver sharp skeletal and pulmonary detail with lower radiation dosage than traditional film X-rays.',
    clinicalImportance:
      'Digital radiography provides instant feedback for orthopedic trauma, sports injuries, pneumonia, and chest evaluations. It requires no chemical processing, allowing instant digital delivery to referring doctors.',
    quote:
      'Digital X-Rays allow for immediate image viewing, enhanced diagnostic accuracy, and lower radiation doses compared to traditional methods – ensuring safer and more efficient patient care.',
    keyFeatures: [
      'Direct Digital Flat Panel Detectors providing pristine edge resolution',
      'Significantly lower radiation exposure through automated collimation and exposure control',
      'Instant digital preview within seconds of exposure',
      'Multiple standard projections (AP, Lateral, Oblique, Stress views)',
      '24×7 availability for acute orthopedic trauma and emergency chest evaluations',
    ],
    commonApplications: [
      {
        title: 'Chest X-Ray (PA / AP / Lateral)',
        description: 'Crucial for evaluating pneumonia, chronic cough, tuberculosis, cardiomegaly, pneumothorax, and rib fractures.',
      },
      {
        title: 'Skeletal & Bone Fracture Imaging',
        description: 'Immediate detection of bone breaks, dislocations, joint arthritis, and bone deformities in arms, legs, hips, and spine.',
      },
      {
        title: 'Spine Radiography (Cervical, Thoracic, Lumbar)',
        description: 'Assesses scoliosis, spinal alignment, degenerative disc disease, osteophytes, and vertebral compression.',
      },
      {
        title: 'Abdominal Plain Radiograph (KUB / Erect)',
        description: 'Detects radio-opaque kidney stones, bowel perforation gas, and intestinal obstruction signs.',
      },
    ],
    patientPreparation: [
      { step: 'Metal Removal', detail: 'Remove necklaces, buttons, zippers, belts, and metal pins from the body area being scanned.' },
      { step: 'Protective Shielding', detail: 'Lead shields and aprons are provided to protect sensitive body areas.' },
      { step: 'Pregnancy Notice', detail: 'Inform our staff immediately if you suspect you may be pregnant.' },
    ],
    keyBenefits: [
      { title: 'Substantially Lower Radiation', description: 'Digital sensor sensitivity allows much smaller X-ray photon doses.' },
      { title: 'Instantaneous Imaging', description: 'No waiting for darkroom developing; viewable by doctor right away.' },
      { title: 'Walk-ins Supported 24×7', description: 'Immediate intake for emergency trauma and sprains.' },
    ],
    relatedInvestigations: [
      { title: 'CT Scan', description: 'For complex multi-fragment intra-articular fractures and skull trauma.' },
      { title: 'MRI Scan', description: 'When soft tissue ligament or tendon rupture is suspected alongside fracture.' },
      { title: 'Complete Blood Count (CBC)', description: 'To monitor infectious or inflammatory response in chest infections.' },
    ],
    prescriptionRequired: true,
    emergencyAvailable24x7: true,
    typicalDuration: '5 to 10 minutes',
    reportDelivery: 'Instant digital image link provided immediately; verified radiologist report in 1 hour.',
  },
  {
    slug: 'emergency-services',
    name: '24×7 Emergency Diagnostic Services',
    shortName: 'Emergency Diagnostics',
    category: 'Specialized',
    tagline: 'Round-the-clock emergency imaging & urgent pathology laboratory operating 365 days a year',
    heroImage: 'https://backend.ercare24.com/storage/uploads/college-station-emergency-room-signaturecare-lg.jpg',
    galleryImages: [
      {
        url: 'https://www.itnonline.com/sites/default/files/styles/content_large/public/CT%20Trauma%20patient_Siemens_SOMATOM_Definition_Edge_People%202%2011.28.35%20AM.jpg?itok=h9-igiBK',
        caption: 'Rapid emergency CT scanner on 24x7 standby for polytrauma and stroke triage',
      },
      {
        url: 'https://storage.googleapis.com/jackson-ucc/2019/04/LabTest_Mobile-1.jpg',
        caption: 'Urgent pathology laboratory operating round the clock',
      },
      {
        url: 'https://www.visitcompletecare.com/wp-content/uploads/2021/05/ct-scan-L.jpg',
        caption: 'Radiologists on call 24x7 for urgent clinical reports',
      },
    ],
    overview:
      'At Dr. Madhu MRI Path Lab, we understand that medical emergencies demand instantaneous, uncompromising attention. Our 24×7 Emergency Diagnostic Services provide rapid, accurate, and reliable diagnostic support at any hour — day or night — ensuring that attending physicians receive critical results without delay.',
    clinicalImportance:
      'In life-threatening situations like acute trauma, stroke, cardiac ischemia, acute abdominal pain, or sudden internal bleeding, every minute matters. Our round-the-clock facility is fully staffed with emergency radiologists, technologists, and lab scientists.',
    quote:
      'In life-threatening situations such as trauma, stroke, heart attack, severe abdominal pain, or sudden illness, every second counts. Our round-the-clock facility is fully equipped to deliver fast and precise diagnostics when it matters most.',
    keyFeatures: [
      '24×7 on-site technicians and on-call radiologists 365 days a year',
      'Trauma and acute stroke protocols ensuring CT/MRI scan initiation within minutes of arrival',
      'STAT pathology processing for critical biomarkers (Troponin I, D-Dimer, CBC, Serum Creatinine)',
      'Direct communication channel between our radiologists and treating hospital emergency teams',
      'Convenient GTB Nagar Metro location with dedicated wheelchair and stretcher access',
    ],
    commonApplications: [
      {
        title: 'Acute Stroke & Head Injury',
        description: 'Emergency CT Brain to rule out intracranial hemorrhage before thrombolytic treatment; emergent MRI Brain stroke protocols.',
      },
      {
        title: 'Polytrauma & Road Traffic Accidents',
        description: 'Whole body trauma CT, cervical spine imaging, and digital radiography for multiple skeletal fractures.',
      },
      {
        title: 'Cardiac Ischemia Biomarkers',
        description: 'Urgent Troponin I assay and cardiac markers with test results delivered in under 30 minutes.',
      },
      {
        title: 'Pulmonary Embolism & DVT',
        description: 'STAT D-Dimer blood test, CT Pulmonary Angiography, and emergent vascular Doppler.',
      },
      {
        title: 'Acute Abdomen Emergencies',
        description: 'Emergent sonography and CT for appendicitis, perforated ulcer, acute pancreatitis, and renal colic.',
      },
    ],
    patientPreparation: [
      { step: 'Immediate Walk-In', detail: 'No appointment needed for acute emergencies; walk directly to our registration counter or emergency reception.' },
      { step: 'Call Ahead (Optional)', detail: 'Dial +91 98110 84727 so our technicians can pre-warm equipment and prepare contrast bays.' },
      { step: 'Doctor Referral', detail: 'Bring hospital admission slip, casualty prescription, or doctor emergency note if available.' },
    ],
    keyBenefits: [
      { title: 'Always Open 24/7/365', description: 'Zero downtime; fully functional late nights, Sundays, and public holidays.' },
      { title: 'STAT Emergency Turnaround', description: 'Immediate verbal phone consultation with referring physician.' },
      { title: 'Comprehensive Modalities Under One Roof', description: 'MRI, CT, Ultrasound, X-Ray, and Pathology all in one building.' },
    ],
    relatedInvestigations: [
      { title: 'Emergency CT Brain', description: 'Primary stroke and head trauma investigation.' },
      { title: 'STAT Troponin I & D-Dimer', description: 'Rapid cardiac and pulmonary embolism laboratory assays.' },
      { title: 'Bedside Ultrasound (FAST)', description: 'Rapid ultrasound protocol for free internal peritoneal bleeding.' },
    ],
    prescriptionRequired: false,
    emergencyAvailable24x7: true,
    typicalDuration: 'Immediate triage on arrival',
    reportDelivery: 'Immediate verbal and digital STAT reporting directly to the treating physician.',
  },
  {
    slug: 'walk-in-services',
    name: 'Walk-In Diagnostic Services',
    shortName: 'Walk-In Diagnostics',
    category: 'Specialized',
    tagline: 'Quick access to routine blood tests, urine analysis, digital X-rays, and ECG without prior appointment',
    heroImage: 'https://c8.alamy.com/comp/2R9FXK5/clinical-facility-reception-front-desk-with-walk-frame-placed-in-hospital-registration-counter-health-care-insurance-medical-center-with-seats-and-consultation-appointment-forms-2R9FXK5.jpg',
    galleryImages: [
      {
        url: 'https://static.vecteezy.com/system/resources/thumbnails/031/409/259/small_2x/diagnostic-center-with-reception-counter-walking-frame-placed-in-empty-hospital-lobby-with-registration-front-desk-medical-health-care-facility-with-chairs-and-consultation-checkup-photo.jpg',
        caption: 'Quick registration desk for walk-in patients',
      },
      {
        url: 'https://www.brooklinecollege.edu/wp-content/uploads/2025/06/shutterstock_1955069263-1-scaled_OP.jpg',
        caption: 'Fast-track blood draw station with minimal wait times',
      },
      {
        url: 'https://www.mavenimaging.com/hubfs/Chiropractic-digital-xray-4.jpg',
        caption: 'Instant walk-in digital X-ray suite',
      },
    ],
    overview:
      'At Dr. Madhu MRI Path Lab, our Walk-In Diagnostic Services are designed for your convenience, allowing you to visit us directly without a prior appointment for routine investigations (subject to daily availability). This service is ideal for busy individuals, working professionals, and families needing quick laboratory or basic imaging tests.',
    clinicalImportance:
      'No need to wait days for a lab appointment. Simply walk into our centre near GTB Nagar Metro Station, complete quick registration, and undergo your tests with minimal waiting times.',
    quote:
      'No more waiting for appointments – simply walk in, get tested, and receive accurate results quickly. Our friendly staff ensures a smooth, efficient experience from sample collection to report delivery.',
    keyFeatures: [
      'Walk-in intake for all standard routine blood tests and urine analyses',
      'Walk-in digital X-rays and 12-lead ECGs completed on the spot',
      'Walk-in basic ultrasound (subject to same-day radiologist schedule)',
      'Centrally air-conditioned comfortable waiting lounge with digital queue display',
      'Open 24 hours daily for convenient early morning or late evening visits',
    ],
    commonApplications: [
      {
        title: 'Routine Blood Investigations',
        description: 'Complete Blood Count (CBC), Blood Sugar, Lipid Profile, Liver and Kidney panels for ongoing checkups.',
      },
      {
        title: 'Urine & Stool Analysis',
        description: 'Immediate processing for urinary tract infection screening and renal indicators.',
      },
      {
        title: 'Digital X-Rays & 12-Lead ECG',
        description: 'Chest X-rays for employment, visa checkups, or suspected fractures; ECG for heart rhythm checks.',
      },
      {
        title: 'Pre-Operative & Pre-Employment Panels',
        description: 'Required medical screening packages completed in a single walk-in visit.',
      },
    ],
    patientPreparation: [
      { step: 'Check Fasting Status', detail: 'If your test requires fasting (Blood Sugar, Lipids, Ultrasound Abdomen), ensure 8–10 hours overnight fasting.' },
      { step: 'Bring Doctor Slip', detail: 'Carry your doctor prescription or list of tests required by your clinic/employer.' },
      { step: 'Registration Desk', detail: 'Approach our front desk; typical walk-in registration takes less than 3 minutes.' },
    ],
    keyBenefits: [
      { title: 'Zero Appointment Booking Hassle', description: 'Visit whenever convenient, morning or night, around your work schedule.' },
      { title: 'Prime Metro Accessibility', description: 'Step off at GTB Nagar Metro Gate No. 3 and walk into our clinic in 1 minute.' },
      { title: 'Same-Day Fast Reporting', description: 'Reports delivered electronically straight to your smartphone.' },
    ],
    relatedInvestigations: [
      { title: 'Preventive Health Packages', description: 'Upgrade your routine blood test to a comprehensive wellness package on the spot.' },
      { title: 'Digital X-Ray', description: 'Add a chest radiograph or spine checkup during your visit.' },
    ],
    prescriptionRequired: false,
    emergencyAvailable24x7: true,
    typicalDuration: '10 to 20 minutes',
    reportDelivery: 'Same-day digital reports via WhatsApp/Email; hard copies at reception.',
  },
  {
    slug: 'referral-services',
    name: 'Doctor & Hospital Referral Diagnostic Services',
    shortName: 'Doctor Referrals',
    category: 'Specialized',
    tagline: 'Dedicated medical community coordination offering priority scheduling, STAT reporting & doctor consultations',
    heroImage: 'https://placehold.it/365x230',
    galleryImages: [
      {
        url: 'https://placehold.it/365x230',
        caption: 'Doctor referral coordination and direct PACS report dispatch',
      },
      {
        url: 'https://placehold.it/365x230',
        caption: 'Inter-disciplinary case consultations between radiologists and physicians',
      },
    ],
    overview:
      'Dr. Madhu MRI Path Lab offers dedicated Doctor & Hospital Referral Diagnostic Services, designed to provide seamless, priority diagnostic support for healthcare professionals, clinics, nursing homes, and hospitals across Delhi NCR. We understand that timely, accurate diagnostics are critical for clinical decision-making.',
    clinicalImportance:
      'Our referral program ensures tight coordination between referring doctors and our sub-specialist diagnostic team, providing priority appointment slots, STAT turnarounds, and direct access to reviewing radiologists and pathologists.',
    quote:
      'Our referral services prioritize efficiency, accuracy, and communication, allowing physicians to focus on patient care while we handle the diagnostic process with precision and speed.',
    keyFeatures: [
      'Priority appointment slots and accelerated scan initiation for referred patients',
      'Direct STAT report delivery to doctor via WhatsApp, encrypted email, or physician portal',
      'Direct phone access to our reporting Radiologists and Pathologists for complex case discussions',
      'Customized diagnostic panels tailored to specific clinical specialties (Cardiology, Orthopedics, Neurology, Gastroenterology)',
      '24×7 emergency diagnostic support for partnered nursing homes and hospitals',
    ],
    commonApplications: [
      {
        title: 'Neurology & Neurosurgery Referrals',
        description: 'High-field MRI Brain, Spine protocols, and emergency stroke imaging with detailed measurements.',
      },
      {
        title: 'Orthopedic & Sports Medicine',
        description: 'Precision joint MRI (Knee, Shoulder, Ankle), high-resolution multi-slice CT 3D reconstructions, and bone radiography.',
      },
      {
        title: 'Gastroenterology & Hepatology',
        description: 'FibroScan liver elastography, abdominal sonography, and comprehensive liver panels.',
      },
      {
        title: 'Internal Medicine & Critical Care',
        description: 'Emergency pathology markers (Troponin, D-Dimer, Procalcitonin) and round-the-clock emergency imaging.',
      },
    ],
    patientPreparation: [
      { step: 'Doctor Referral Slip', detail: 'Ensure the patient carries the written referral detailing clinical history and specific scan requests.' },
      { step: 'Direct Doctor Call', detail: 'Physicians can dial our dedicated Doctor Helpline +91 98110 84727 for STAT prioritization.' },
      { step: 'Report Dispatch Instructions', detail: 'Specify if reports should be phoned in directly to casualty or dispatched via secure digital channels.' },
    ],
    keyBenefits: [
      { title: 'Physician-Centric Collaboration', description: 'Direct peer-to-peer discussions on diagnostic findings with senior radiologists.' },
      { title: 'STAT Emergency Turnaround', description: 'Accelerated processing for pre-operative and ICU patients.' },
      { title: 'Decades of Trusted Accuracy', description: 'Over 30 years of medical trust across Delhi NCR healthcare practitioners.' },
    ],
    relatedInvestigations: [
      { title: 'Emergency Diagnostics', description: '24×7 trauma and stroke diagnostics for affiliated healthcare centres.' },
      { title: 'Comprehensive Pathology Menu', description: 'Over 150+ specialized and routine laboratory tests.' },
    ],
    prescriptionRequired: true,
    emergencyAvailable24x7: true,
    typicalDuration: 'Priority fast-track processing',
    reportDelivery: 'Direct digital delivery to doctor portal / WhatsApp alongside patient copy.',
  },
];
