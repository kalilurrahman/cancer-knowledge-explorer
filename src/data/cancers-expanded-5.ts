// Cancer Knowledge Book — Expanded Set 5
// Adds rare/under-represented cancer types missing from the curated set.
// Same CancerEntry schema as other data modules.

import type { CancerEntry } from "./types";

export const cancersExpanded5: CancerEntry[] = [
  {
    id: "appendix-cancer",
    name: "Appendiceal Cancer",
    alternateNames: ["Appendix Cancer", "Mucinous Appendiceal Neoplasm", "LAMN", "Pseudomyxoma Peritonei"],
    category: "carcinoma",
    description: "Rare tumour arising in the appendix. Includes mucinous neoplasms (LAMN/HAMN), goblet cell adenocarcinoma, colonic-type adenocarcinoma and appendiceal carcinoids. Often discovered incidentally during appendectomy. Advanced mucinous disease can cause pseudomyxoma peritonei (PMP).",
    commonSymptoms: ["Right lower quadrant pain (appendicitis-like)", "Abdominal bloating", "Increasing waistline", "Change in bowel habits", "Ovarian mass (in women)", "Often asymptomatic until advanced"],
    riskFactors: ["Age 40-60", "Family history of GI cancers", "Smoking (carcinoid subtype)", "MEN1 syndrome (rare)"],
    diagnostics: ["CT abdomen/pelvis", "Tumour markers (CEA, CA 19-9, CA 125)", "Appendectomy with histology", "Diagnostic laparoscopy", "Peritoneal Carcinomatosis Index (PCI) scoring"],
    treatments: [
      { name: "Appendectomy", description: "Curative for incidental low-grade tumours <2 cm at the tip", typicalCostRange: "$8,000 – $25,000" },
      { name: "Right Hemicolectomy", description: "For tumours >2 cm, at the base, or high-grade histology", typicalCostRange: "$20,000 – $60,000" },
      { name: "Cytoreductive Surgery (CRS) + HIPEC", description: "Standard of care for peritoneal spread / PMP; heated intraperitoneal chemotherapy at end of surgery", typicalCostRange: "$70,000 – $180,000" },
      { name: "Systemic Chemotherapy", description: "FOLFOX or FOLFIRI for adenocarcinoma subtypes with distant spread", typicalCostRange: "$20,000 – $80,000" }
    ],
    stages: ["Stage I (localised)", "Stage II (through wall)", "Stage III (nodal)", "Stage IV (peritoneal/distant)"],
    survivalRates: "Low-grade mucinous after CRS+HIPEC: 60-80% 5-year; high-grade adenocarcinoma Stage IV: 20-30% 5-year",
    supportOrganizations: [
      { name: "PMP Pals' Network", url: "https://www.pmppals.org/", description: "Patient support for pseudomyxoma peritonei and appendix cancer", geography: "US" },
      { name: "Pseudomyxoma Survivor", url: "https://pseudomyxomasurvivor.org/", description: "UK charity for PMP and appendix cancer patients", geography: "UK" },
      { name: "ACPMP Research Foundation", url: "https://acpmp.org/", description: "Appendix cancer / PMP research advocacy", geography: "US" }
    ],
    externalResources: [
      { title: "NCI – Gastrointestinal Carcinoid Tumours", url: "https://www.cancer.gov/types/gi-carcinoid-tumors", type: "website" },
      { title: "ACS – Appendix Cancer Overview", url: "https://www.cancer.org/cancer/types/gastrointestinal-carcinoid-tumor.html", type: "website" },
      { title: "PSOGI Consensus on Mucinous Appendiceal Neoplasms", url: "https://pubmed.ncbi.nlm.nih.gov/26644103/", type: "research" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~1,500 new cases/year", notableHospitals: ["MD Anderson", "Mercy Medical Baltimore (Sugarbaker Centre)", "Wake Forest Baptist"] },
      { region: "UK", prevalence: "Centralised PMP services", notableHospitals: ["Basingstoke Peritoneal Malignancy Institute", "The Christie Manchester"] },
      { region: "India", prevalence: "Under-reported; rising recognition", notableHospitals: ["Tata Memorial Hospital", "HCG Bangalore"] }
    ],
    lastUpdated: "2026-05-16"
  },
  {
    id: "thymoma",
    name: "Thymoma & Thymic Carcinoma",
    alternateNames: ["Thymic Epithelial Tumour", "TET"],
    category: "carcinoma",
    description: "Rare tumour of the thymus gland in the anterior mediastinum. Thymomas are usually indolent; thymic carcinoma is aggressive. Strongly associated with paraneoplastic syndromes, especially myasthenia gravis (30-50% of thymomas).",
    commonSymptoms: ["Chest pain or pressure", "Persistent cough", "Shortness of breath", "Myasthenia gravis symptoms (muscle weakness, droopy eyelids)", "Superior vena cava syndrome", "Often asymptomatic, found on imaging"],
    riskFactors: ["Age 40-60", "Autoimmune disease (myasthenia gravis, pure red cell aplasia, hypogammaglobulinaemia)", "No clear environmental risk factors"],
    diagnostics: ["CT chest with contrast", "MRI chest", "PET-CT", "Core-needle or surgical biopsy", "AChR antibody testing", "Pulmonary function tests"],
    treatments: [
      { name: "Complete Surgical Resection", description: "Median sternotomy or VATS thymectomy; gold standard for resectable disease", typicalCostRange: "$30,000 – $90,000" },
      { name: "Radiation Therapy", description: "Adjuvant for Masaoka stage II-IV or positive margins", typicalCostRange: "$15,000 – $45,000" },
      { name: "Chemotherapy", description: "CAP (cisplatin/doxorubicin/cyclophosphamide) for unresectable or metastatic disease", typicalCostRange: "$25,000 – $80,000" },
      { name: "Targeted / Immune Therapy", description: "Sunitinib, lenvatinib, pembrolizumab in refractory thymic carcinoma", typicalCostRange: "$80,000 – $180,000/year" }
    ],
    stages: ["Masaoka I (encapsulated)", "Masaoka II (capsular invasion)", "Masaoka III (adjacent organ)", "Masaoka IVa (pleural/pericardial)", "Masaoka IVb (distant)"],
    survivalRates: "Thymoma stage I-II: 90-95% 5-year; stage IV: 50-60%. Thymic carcinoma: 35-55% 5-year",
    supportOrganizations: [
      { name: "Foundation for Thymic Cancer Research", url: "https://www.thymic.org/", description: "Patient education, research grants, registry", geography: "US" },
      { name: "ITMIG", url: "https://itmig.org/", description: "International Thymic Malignancy Interest Group", geography: "Global" },
      { name: "Rare Cancers Europe", url: "https://www.rarecancerseurope.org/", description: "Pan-European rare cancer advocacy", geography: "EU" }
    ],
    externalResources: [
      { title: "NCI – Thymoma and Thymic Carcinoma", url: "https://www.cancer.gov/types/thymoma", type: "website" },
      { title: "NCCN Thymomas Guidelines (Patient)", url: "https://www.nccn.org/patients/guidelines/content/PDF/thymoma-patient.pdf", type: "pdf" },
      { title: "ESMO Clinical Practice Guidelines – Thymic Tumours", url: "https://www.esmo.org/guidelines/guidelines-by-topic/thoracic-cancers/thymic-epithelial-tumours", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~400 cases/year", notableHospitals: ["MD Anderson", "Memorial Sloan Kettering", "NIH Clinical Center"] },
      { region: "EU", prevalence: "~1,500 cases/year", notableHospitals: ["Istituto Nazionale dei Tumori Milan", "Gustave Roussy Paris"] },
      { region: "Asia", prevalence: "Higher incidence than Western populations", notableHospitals: ["National Cancer Center Japan", "Samsung Medical Center Seoul"] }
    ],
    lastUpdated: "2026-05-16"
  },
  {
    id: "parathyroid-cancer",
    name: "Parathyroid Cancer",
    alternateNames: ["Parathyroid Carcinoma"],
    category: "carcinoma",
    description: "Extremely rare endocrine malignancy of the parathyroid glands. Most patients present with severe primary hyperparathyroidism (very high calcium and PTH levels) rather than a neck mass. Distinct from benign parathyroid adenoma which causes mild hyperparathyroidism.",
    commonSymptoms: ["Severe hypercalcaemia (>14 mg/dL)", "Bone pain and fractures", "Kidney stones", "Fatigue and confusion", "Palpable neck mass (40-70%)", "Hoarseness if recurrent laryngeal nerve involved"],
    riskFactors: ["HRPT2/CDC73 germline mutation", "MEN1 and MEN2A syndromes", "Prior neck irradiation", "Hyperparathyroidism-Jaw Tumour Syndrome", "End-stage renal disease (rare)"],
    diagnostics: ["Serum calcium and intact PTH", "Neck ultrasound", "Sestamibi parathyroid scan", "4D-CT neck", "FNA generally avoided (tract seeding risk)", "Genetic testing (CDC73)"],
    treatments: [
      { name: "En Bloc Surgical Resection", description: "Removal of parathyroid + ipsilateral thyroid lobe + central neck nodes; best chance of cure", typicalCostRange: "$25,000 – $70,000" },
      { name: "Re-operation for Recurrence", description: "Aggressive surgical debulking for locoregional recurrence", typicalCostRange: "$30,000 – $80,000" },
      { name: "Calcimimetics", description: "Cinacalcet to control refractory hypercalcaemia", typicalCostRange: "$10,000 – $30,000/year" },
      { name: "Targeted / Systemic Therapy", description: "Limited data; tyrosine kinase inhibitors and immunotherapy in trials for metastatic disease", typicalCostRange: "$80,000 – $200,000/year" }
    ],
    stages: ["No formal AJCC staging; classified as localised, regional, or distant"],
    survivalRates: "5-year overall survival 60-85%; 10-year ~50%. Death is usually from uncontrolled hypercalcaemia, not tumour bulk.",
    supportOrganizations: [
      { name: "American Association of Endocrine Surgeons", url: "https://www.endocrinesurgery.org/", description: "Patient resources and surgeon directory", geography: "US" },
      { name: "Parathyroid Peeps", url: "https://www.parathyroidpeeps.com/", description: "Patient community for parathyroid disease", geography: "Global" },
      { name: "AMEND", url: "https://www.amend.org.uk/", description: "Association for Multiple Endocrine Neoplasia Disorders (UK)", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Parathyroid Cancer", url: "https://www.cancer.gov/types/parathyroid", type: "website" },
      { title: "Endocrine Society – Parathyroid Carcinoma Statement", url: "https://academic.oup.com/jcem/article/101/8/2872/2835016", type: "research" },
      { title: "Orphanet – Parathyroid Carcinoma", url: "https://www.orpha.net/en/disease/detail/99879", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~100 cases/year (<1% of primary hyperparathyroidism)", notableHospitals: ["Mayo Clinic", "MD Anderson", "Mass General"] },
      { region: "Asia", prevalence: "Higher reported incidence in Japan and Italy", notableHospitals: ["University of Tokyo Hospital"] },
      { region: "India", prevalence: "Often diagnosed at advanced stage due to delayed recognition", notableHospitals: ["AIIMS New Delhi", "PGIMER Chandigarh"] }
    ],
    lastUpdated: "2026-05-16"
  },
  {
    id: "pituitary-tumor",
    name: "Pituitary Tumours",
    alternateNames: ["Pituitary Adenoma", "Pituitary Neuroendocrine Tumour", "PitNET"],
    category: "cns",
    description: "Tumours arising from the pituitary gland at the base of the brain. Most are benign adenomas but can cause significant morbidity through hormone hypersecretion (prolactinoma, acromegaly, Cushing's disease) or mass effect (visual loss, hypopituitarism). True pituitary carcinoma is exceptionally rare.",
    commonSymptoms: ["Headaches", "Bitemporal hemianopsia (visual field loss)", "Galactorrhoea / menstrual changes (prolactinoma)", "Coarsened features, large hands and feet (acromegaly)", "Central weight gain, striae (Cushing's)", "Fatigue, low libido (hypopituitarism)"],
    riskFactors: ["MEN1 syndrome", "Familial isolated pituitary adenoma (AIP mutation)", "Carney complex", "McCune-Albright syndrome"],
    diagnostics: ["Dedicated pituitary MRI", "Full anterior pituitary hormone panel", "IGF-1 and oral glucose tolerance test (acromegaly)", "24-hour urine free cortisol and dexamethasone suppression", "Formal visual field testing"],
    treatments: [
      { name: "Transsphenoidal Surgery", description: "Endoscopic resection through the nose; first-line for most non-prolactinoma tumours", typicalCostRange: "$30,000 – $80,000" },
      { name: "Dopamine Agonists", description: "Cabergoline / bromocriptine — first-line for prolactinoma", typicalCostRange: "$1,000 – $6,000/year" },
      { name: "Somatostatin Analogues", description: "Octreotide, lanreotide, pasireotide for acromegaly and Cushing's", typicalCostRange: "$20,000 – $60,000/year" },
      { name: "Stereotactic Radiosurgery", description: "Gamma Knife or CyberKnife for residual or recurrent tumour", typicalCostRange: "$15,000 – $50,000" },
      { name: "Temozolomide", description: "For aggressive or carcinomatous PitNETs refractory to other treatment", typicalCostRange: "$20,000 – $60,000" }
    ],
    stages: ["Microadenoma (<10 mm)", "Macroadenoma (≥10 mm)", "Giant (>40 mm) / invasive", "Aggressive PitNET", "Pituitary carcinoma (metastatic)"],
    survivalRates: "Adenomas: near-normal life expectancy with treatment; pituitary carcinoma: ~66% 5-year",
    supportOrganizations: [
      { name: "Pituitary Network Association", url: "https://pituitary.org/", description: "Education, support, physician referrals", geography: "US" },
      { name: "The Pituitary Foundation", url: "https://www.pituitary.org.uk/", description: "UK pituitary patient charity", geography: "UK" },
      { name: "Australian Pituitary Foundation", url: "https://www.pituitary.asn.au/", description: "Support and advocacy in Australia", geography: "Australia" }
    ],
    externalResources: [
      { title: "NCI – Pituitary Tumours", url: "https://www.cancer.gov/types/pituitary", type: "website" },
      { title: "Endocrine Society – Pituitary Guidelines Hub", url: "https://www.endocrine.org/clinical-practice-guidelines", type: "website" },
      { title: "Pituitary Society – Consensus Statements", url: "https://www.pituitarysociety.org/", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~10,000 diagnosed/year; incidental on MRI in up to 10% of adults", notableHospitals: ["Mayo Clinic", "Johns Hopkins", "Cleveland Clinic"] },
      { region: "UK", prevalence: "~1,200 cases/year", notableHospitals: ["Barts Health NHS", "Oxford Centre for Diabetes, Endocrinology & Metabolism"] },
      { region: "India", prevalence: "Often presents late with visual loss", notableHospitals: ["AIIMS Delhi", "Apollo Chennai", "NIMHANS Bangalore"] }
    ],
    lastUpdated: "2026-05-16"
  },
  {
    id: "oligodendroglioma",
    name: "Oligodendroglioma",
    alternateNames: ["Anaplastic Oligodendroglioma", "IDH-mutant 1p/19q-codeleted Glioma"],
    category: "cns",
    description: "Diffuse glioma of the cerebral hemispheres arising from oligodendrocyte-lineage cells. Defined molecularly by IDH1/2 mutation plus 1p/19q whole-arm co-deletion. Generally more chemo-sensitive and longer-surviving than IDH-wildtype glioblastoma.",
    commonSymptoms: ["New-onset seizures (most common)", "Headaches", "Personality or cognitive change", "Focal weakness or sensory loss", "Speech difficulty", "Visual field defects"],
    riskFactors: ["IDH1/IDH2 somatic mutation", "Prior cranial radiation", "Rare hereditary syndromes (Lynch, Li-Fraumeni)", "No proven environmental risk factors"],
    diagnostics: ["MRI brain with contrast and perfusion", "Maximal safe surgical resection with histology", "IDH1/2 sequencing", "1p/19q FISH or chromosomal microarray", "MGMT methylation status"],
    treatments: [
      { name: "Maximal Safe Resection", description: "Awake craniotomy with intraoperative mapping when near eloquent cortex", typicalCostRange: "$50,000 – $150,000" },
      { name: "Radiation Therapy", description: "54-60 Gy in 1.8-2 Gy fractions; standard for anaplastic disease", typicalCostRange: "$25,000 – $70,000" },
      { name: "PCV Chemotherapy", description: "Procarbazine + CCNU + vincristine — gold standard adjuvant per RTOG 9402 and EORTC 26951", typicalCostRange: "$15,000 – $40,000" },
      { name: "Temozolomide", description: "Often substituted for PCV due to better tolerability", typicalCostRange: "$20,000 – $60,000" },
      { name: "Vorasidenib", description: "IDH1/2 inhibitor approved 2024 for residual/recurrent grade 2 IDH-mutant glioma (INDIGO trial)", typicalCostRange: "$200,000 – $400,000/year" }
    ],
    stages: ["WHO Grade 2 (oligodendroglioma)", "WHO Grade 3 (anaplastic oligodendroglioma)"],
    survivalRates: "Grade 2: median overall survival >15 years; Grade 3: median 10-14 years with PCV + radiation",
    supportOrganizations: [
      { name: "National Brain Tumor Society", url: "https://braintumor.org/", description: "Patient resources, research funding, advocacy", geography: "US" },
      { name: "The Brain Tumour Charity", url: "https://www.thebraintumourcharity.org/", description: "UK brain tumour patient support and research", geography: "UK" },
      { name: "Oligo Nation", url: "https://oligonation.org/", description: "Oligodendroglioma-specific research and patient support", geography: "Global" }
    ],
    externalResources: [
      { title: "NCI – Adult Central Nervous System Tumours", url: "https://www.cancer.gov/types/brain", type: "website" },
      { title: "NEJM – Vorasidenib in IDH-Mutant Low-Grade Glioma (INDIGO)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2304194", type: "research" },
      { title: "WHO Classification of CNS Tumours (5th ed) – Summary", url: "https://academic.oup.com/neuro-oncology/article/23/8/1231/6311214", type: "research" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~1,200 new cases/year (~5% of gliomas)", notableHospitals: ["UCSF", "MD Anderson", "Dana-Farber/Brigham"] },
      { region: "UK", prevalence: "~500 cases/year", notableHospitals: ["The Walton Centre Liverpool", "National Hospital for Neurology Queen Square"] },
      { region: "India", prevalence: "Under-reported; molecular testing access improving", notableHospitals: ["NIMHANS Bangalore", "AIIMS Delhi", "Tata Memorial"] }
    ],
    lastUpdated: "2026-05-16"
  },
  {
    id: "rhabdomyosarcoma",
    name: "Rhabdomyosarcoma",
    alternateNames: ["RMS", "Embryonal RMS", "Alveolar RMS", "Pleomorphic RMS"],
    category: "sarcoma",
    description: "Most common soft tissue sarcoma in children, arising from skeletal-muscle progenitor cells. Embryonal (ERMS) predominates in young children; alveolar (ARMS, PAX3/7-FOXO1 fusion-positive) is more aggressive; pleomorphic occurs in adults.",
    commonSymptoms: ["Painless mass (head/neck, GU tract, extremities)", "Proptosis or visual changes (orbital)", "Nasal obstruction or bleeding", "Haematuria, urinary obstruction (bladder/prostate)", "Vaginal bleeding or grape-like mass (sarcoma botryoides)"],
    riskFactors: ["Li-Fraumeni syndrome (TP53)", "Neurofibromatosis type 1", "Beckwith-Wiedemann syndrome", "DICER1 syndrome", "Costello and Noonan syndromes", "Parental drug or radiation exposure"],
    diagnostics: ["MRI of primary site", "Core or incisional biopsy with FOXO1 FISH", "CT chest, bone scan, PET-CT for staging", "Bone marrow biopsy", "Lumbar puncture for parameningeal tumours"],
    treatments: [
      { name: "Multimodality Chemotherapy", description: "VAC (vincristine/actinomycin-D/cyclophosphamide) backbone; ivosidenib/irinotecan in high-risk per COG", typicalCostRange: "$80,000 – $250,000" },
      { name: "Wide Local Excision", description: "When complete resection achievable without major functional loss", typicalCostRange: "$25,000 – $80,000" },
      { name: "Radiation Therapy", description: "Proton therapy preferred for paediatric head/neck and parameningeal sites", typicalCostRange: "$30,000 – $120,000" },
      { name: "Targeted / Maintenance Therapy", description: "Vinorelbine + cyclophosphamide maintenance per EpSSG RMS 2005; FGFR/IGF1R inhibitors in trials", typicalCostRange: "$20,000 – $80,000/year" }
    ],
    stages: ["IRS Group I (completely resected)", "IRS Group II (microscopic residual)", "IRS Group III (gross residual)", "IRS Group IV (metastatic)"],
    survivalRates: "Low-risk ERMS: >90% 5-year; intermediate-risk: 60-70%; high-risk metastatic ARMS: 20-30%",
    supportOrganizations: [
      { name: "Children's Oncology Group", url: "https://www.childrensoncologygroup.org/", description: "Largest paediatric cancer trials network", geography: "US" },
      { name: "Sarcoma Foundation of America", url: "https://www.curesarcoma.org/", description: "Patient support and research advocacy", geography: "US" },
      { name: "Sarcoma UK", url: "https://sarcoma.org.uk/", description: "UK sarcoma charity with paediatric resources", geography: "UK" },
      { name: "Cure4Kids", url: "https://www.cure4kids.org/", description: "Free paediatric oncology education from St. Jude", geography: "Global" }
    ],
    externalResources: [
      { title: "NCI – Childhood Rhabdomyosarcoma Treatment (PDQ)", url: "https://www.cancer.gov/types/soft-tissue-sarcoma/hp/rhabdomyosarcoma-treatment-pdq", type: "website" },
      { title: "St. Jude – Rhabdomyosarcoma", url: "https://www.stjude.org/disease/rhabdomyosarcoma.html", type: "website" },
      { title: "COG ARST Studies Overview", url: "https://www.childrensoncologygroup.org/sarcomas", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~400-500 children/year", notableHospitals: ["St. Jude Children's Research Hospital", "Children's Hospital of Philadelphia", "MD Anderson Children's"] },
      { region: "UK", prevalence: "~60 children/year", notableHospitals: ["Great Ormond Street Hospital", "Royal Marsden (Sutton)"] },
      { region: "India", prevalence: "Outcomes improving with COG-style protocols", notableHospitals: ["Tata Memorial Hospital", "CMC Vellore", "Kidwai Memorial Bangalore"] },
      { region: "Sub-Saharan Africa", prevalence: "Often diagnosed at metastatic stage", notableHospitals: ["Red Cross War Memorial Children's Hospital Cape Town"] }
    ],
    lastUpdated: "2026-05-16"
  },
  {
    id: "hepatoblastoma",
    name: "Hepatoblastoma",
    alternateNames: ["Paediatric Liver Cancer", "HB"],
    category: "carcinoma",
    description: "Most common primary liver cancer in children, usually before age 3. Distinct from adult hepatocellular carcinoma. Strongly associated with prematurity, low birth weight and several overgrowth syndromes. Highly chemo-sensitive and often curable.",
    commonSymptoms: ["Painless abdominal swelling or mass", "Weight loss or failure to thrive", "Loss of appetite", "Jaundice (less common)", "Precocious puberty (β-hCG secreting tumours)"],
    riskFactors: ["Beckwith-Wiedemann syndrome", "Familial adenomatous polyposis (APC)", "Prematurity / very low birth weight", "Trisomy 18", "Glycogen storage diseases"],
    diagnostics: ["Abdominal ultrasound and contrast MRI", "Serum alpha-fetoprotein (AFP) — markedly elevated", "CT chest for metastases", "PRETEXT staging on imaging", "Image-guided biopsy"],
    treatments: [
      { name: "Cisplatin-based Chemotherapy", description: "C5V or SIOPEL regimens; neoadjuvant to shrink tumour before resection", typicalCostRange: "$40,000 – $150,000" },
      { name: "Partial Hepatectomy", description: "Curative resection after downstaging; preferred when PRETEXT I-III", typicalCostRange: "$50,000 – $150,000" },
      { name: "Liver Transplantation", description: "For unresectable PRETEXT IV without extrahepatic disease", typicalCostRange: "$300,000 – $800,000" },
      { name: "Salvage Therapy", description: "Irinotecan, vincristine, sorafenib for relapsed/refractory disease", typicalCostRange: "$30,000 – $120,000" }
    ],
    stages: ["PRETEXT I", "PRETEXT II", "PRETEXT III", "PRETEXT IV"],
    survivalRates: "Standard-risk: >90% 5-year event-free; high-risk metastatic: 50-70%",
    supportOrganizations: [
      { name: "Children's Liver Disease Foundation", url: "https://childliverdisease.org/", description: "Paediatric liver disease and cancer support", geography: "UK" },
      { name: "American Childhood Cancer Organization", url: "https://www.acco.org/", description: "Family resources for childhood cancers", geography: "US" },
      { name: "CHIC Consortium", url: "https://www.chichome.org/", description: "Children's Hepatic tumours International Collaboration", geography: "Global" }
    ],
    externalResources: [
      { title: "NCI – Childhood Liver Cancer Treatment (PDQ)", url: "https://www.cancer.gov/types/liver/hp/child-liver-treatment-pdq", type: "website" },
      { title: "SIOPEL – Liver Tumour Strategy Group", url: "https://www.siopel.org/", type: "website" },
      { title: "PHITT (Paediatric Hepatic International Tumour Trial)", url: "https://clinicaltrials.gov/study/NCT03533582", type: "research" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~100 children/year; rising in survivors of prematurity", notableHospitals: ["Cincinnati Children's", "Texas Children's", "CHOP"] },
      { region: "EU", prevalence: "SIOPEL-trial network coverage", notableHospitals: ["Great Ormond Street Hospital", "Hôpital Bicêtre Paris"] },
      { region: "Asia", prevalence: "Higher absolute counts in China and Japan", notableHospitals: ["National Center for Child Health and Development Tokyo"] },
      { region: "India", prevalence: "Outcomes improving with transplant access", notableHospitals: ["ILBS Delhi", "Apollo Chennai", "Tata Memorial"] }
    ],
    lastUpdated: "2026-05-16"
  },
  {
    id: "pancreatic-neuroendocrine-tumor",
    name: "Pancreatic Neuroendocrine Tumour",
    alternateNames: ["PanNET", "Islet Cell Tumour", "Insulinoma", "Gastrinoma", "Glucagonoma", "VIPoma"],
    category: "other",
    description: "Tumour arising from islet cells of the pancreas. Distinct biology and prognosis from pancreatic adenocarcinoma. Can be functional (hormone-secreting: insulinoma, gastrinoma, glucagonoma, VIPoma, somatostatinoma) or non-functional (most common).",
    commonSymptoms: ["Hypoglycaemia, sweating, confusion (insulinoma)", "Severe peptic ulcers, diarrhoea (gastrinoma / Zollinger-Ellison)", "Migratory rash, diabetes, weight loss (glucagonoma)", "Profuse watery diarrhoea, hypokalaemia (VIPoma)", "Abdominal pain, mass, jaundice (non-functional)"],
    riskFactors: ["MEN1 syndrome", "Von Hippel-Lindau disease", "Neurofibromatosis type 1", "Tuberous sclerosis complex", "Family history"],
    diagnostics: ["Multiphase pancreatic protocol CT or MRI", "68Ga-DOTATATE PET-CT (somatostatin receptor imaging)", "Chromogranin A, pancreatic polypeptide, hormone-specific assays (insulin, gastrin, glucagon, VIP)", "EUS-guided biopsy with Ki-67 grading", "Genetic testing for MEN1/VHL when indicated"],
    treatments: [
      { name: "Surgical Resection", description: "Enucleation, distal pancreatectomy, or Whipple depending on location; curative for localised disease", typicalCostRange: "$50,000 – $150,000" },
      { name: "Somatostatin Analogues", description: "Octreotide LAR or lanreotide — anti-proliferative (CLARINET, PROMID) and symptom control", typicalCostRange: "$30,000 – $90,000/year" },
      { name: "Peptide Receptor Radionuclide Therapy", description: "177Lu-DOTATATE (Lutathera) for somatostatin-receptor-positive disease (NETTER-1, NETTER-2)", typicalCostRange: "$100,000 – $200,000 per course" },
      { name: "Targeted Therapy", description: "Everolimus or sunitinib for progressive metastatic PanNET", typicalCostRange: "$80,000 – $160,000/year" },
      { name: "Capecitabine + Temozolomide (CAPTEM)", description: "Active oral regimen for higher-grade or rapidly progressive PanNET", typicalCostRange: "$20,000 – $50,000" }
    ],
    stages: ["G1 (Ki-67 <3%)", "G2 (Ki-67 3-20%)", "G3 well-differentiated", "Neuroendocrine carcinoma (poorly differentiated)"],
    survivalRates: "Localised G1/G2: >90% 5-year; distant metastatic well-differentiated: 50-70%; poorly differentiated NEC: 10-20%",
    supportOrganizations: [
      { name: "NET Research Foundation", url: "https://netrf.org/", description: "Research funding and patient education for NETs", geography: "US" },
      { name: "Carcinoid Cancer Foundation", url: "https://www.carcinoid.org/", description: "Longstanding NET patient charity", geography: "US" },
      { name: "Neuroendocrine Cancer UK", url: "https://www.neuroendocrinecancer.org.uk/", description: "UK NET patient charity and helpline", geography: "UK" },
      { name: "INCA", url: "https://incalliance.org/", description: "International Neuroendocrine Cancer Alliance", geography: "Global" }
    ],
    externalResources: [
      { title: "NCI – Pancreatic Neuroendocrine Tumours (PDQ)", url: "https://www.cancer.gov/types/pancreatic/hp/pnet-treatment-pdq", type: "website" },
      { title: "NCCN Neuroendocrine and Adrenal Tumours Guidelines", url: "https://www.nccn.org/guidelines/category_1", type: "website" },
      { title: "NEJM – NETTER-1 (177Lu-DOTATATE)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1607427", type: "research" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~1,000-2,000 new cases/year; incidence rising", notableHospitals: ["MD Anderson", "Mayo Clinic", "Memorial Sloan Kettering"] },
      { region: "EU", prevalence: "Established ENETS Centres of Excellence", notableHospitals: ["Royal Free London (ENETS CoE)", "Uppsala University Hospital"] },
      { region: "India", prevalence: "DOTATATE PET access expanding", notableHospitals: ["Tata Memorial", "Apollo Chennai", "AIIMS Delhi"] }
    ],
    lastUpdated: "2026-05-16"
  },
  {
    id: "male-breast-cancer",
    name: "Male Breast Cancer",
    alternateNames: ["MBC", "Breast Cancer in Men"],
    category: "carcinoma",
    description: "Breast cancer occurring in men, accounting for ~1% of all breast cancers. Almost always ductal, overwhelmingly ER-positive. Frequently diagnosed at later stage than female breast cancer because of low awareness and lack of routine screening.",
    commonSymptoms: ["Painless lump beneath the nipple-areolar complex", "Nipple retraction or discharge (often bloody)", "Skin ulceration over the lump", "Axillary lymphadenopathy", "Gynaecomastia (usually benign, but evaluate)"],
    riskFactors: ["BRCA2 mutation (most important; lifetime risk 5-10%)", "BRCA1 mutation", "Klinefelter syndrome (XXY)", "Family history of breast cancer", "Liver disease / cirrhosis", "Obesity", "Prior chest-wall radiation", "Testicular abnormalities"],
    diagnostics: ["Diagnostic mammography and ultrasound", "Core-needle biopsy with ER/PR/HER2", "Genetic counselling and BRCA1/2 testing for all men", "Staging CT and bone scan if symptomatic / node-positive"],
    treatments: [
      { name: "Mastectomy", description: "Modified radical mastectomy is standard; sentinel node biopsy when clinically node-negative", typicalCostRange: "$15,000 – $50,000" },
      { name: "Adjuvant Radiation", description: "Chest wall and regional nodes given thin tissue and frequent skin/muscle involvement", typicalCostRange: "$15,000 – $45,000" },
      { name: "Tamoxifen", description: "First-line endocrine therapy for ER-positive disease; 5-10 years (aromatase inhibitors less effective as monotherapy in men)", typicalCostRange: "$500 – $3,000/year" },
      { name: "Chemotherapy", description: "Anthracycline / taxane regimens for higher-risk or node-positive disease", typicalCostRange: "$20,000 – $80,000" },
      { name: "PARP Inhibitors", description: "Olaparib / talazoparib for BRCA-mutant advanced disease", typicalCostRange: "$130,000 – $180,000/year" }
    ],
    stages: ["Stage 0 (DCIS, rare in men)", "Stage I", "Stage II", "Stage III", "Stage IV"],
    survivalRates: "Stage I: ~95% 5-year; Stage II: ~85%; Stage III: ~65%; Stage IV: ~25-30%",
    supportOrganizations: [
      { name: "His Breast Cancer Awareness", url: "https://www.hisbreastcancer.org/", description: "Dedicated male breast cancer advocacy and support", geography: "US" },
      { name: "Male Breast Cancer Coalition", url: "https://malebreastcancercoalition.org/", description: "Global community for men with breast cancer", geography: "Global" },
      { name: "Walk the Walk – Men Get Breast Cancer Too", url: "https://walkthewalk.org/", description: "UK awareness campaigns", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Male Breast Cancer", url: "https://www.cancer.gov/types/breast/patient/male-breast-treatment-pdq", type: "website" },
      { title: "ASCO Guideline – Management of Male Breast Cancer", url: "https://ascopubs.org/doi/10.1200/JCO.19.03120", type: "research" },
      { title: "EORTC 10085 / TBCRC 029 International Male Breast Cancer Programme", url: "https://pubmed.ncbi.nlm.nih.gov/29401001/", type: "research" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~2,800 new cases/year, ~530 deaths", notableHospitals: ["MD Anderson", "Memorial Sloan Kettering", "Dana-Farber"] },
      { region: "UK", prevalence: "~400 cases/year", notableHospitals: ["The Royal Marsden", "The Christie Manchester"] },
      { region: "India", prevalence: "Often advanced at presentation", notableHospitals: ["Tata Memorial Hospital", "Apollo Chennai"] },
      { region: "Sub-Saharan Africa", prevalence: "Higher relative proportion of male breast cancer than Western series" }
    ],
    lastUpdated: "2026-05-16"
  },
  {
    id: "diffuse-intrinsic-pontine-glioma",
    name: "Diffuse Intrinsic Pontine Glioma (DIPG / DMG H3K27-altered)",
    alternateNames: ["DIPG", "Diffuse Midline Glioma", "DMG", "Brainstem Glioma"],
    category: "cns",
    description: "Highly aggressive paediatric brainstem tumour arising in the pons. The 2021 WHO classification renames most cases as Diffuse Midline Glioma, H3 K27-altered. Surgery is not feasible due to location. One of the leading causes of paediatric cancer death.",
    commonSymptoms: ["Cranial nerve palsies (facial weakness, double vision)", "Ataxia and gait disturbance", "Long-tract signs (limb weakness, hyperreflexia)", "Headache, vomiting", "Behavioural change", "Rapid symptom progression over weeks"],
    riskFactors: ["Sporadic in nearly all cases", "Rare association with Li-Fraumeni syndrome and neurofibromatosis type 1", "No proven environmental risk factors"],
    diagnostics: ["MRI brain — characteristic expansile pontine T2-hyperintense lesion", "Stereotactic biopsy increasingly performed at expert centres", "H3 K27M, TP53, ACVR1 molecular profiling", "Liquid biopsy for cell-free tumour DNA (research)"],
    treatments: [
      { name: "Focal Radiation Therapy", description: "54 Gy in 30 fractions; transient neurological improvement in most patients", typicalCostRange: "$25,000 – $80,000" },
      { name: "Re-irradiation", description: "Offered at progression in selected patients for symptom control", typicalCostRange: "$15,000 – $50,000" },
      { name: "ONC201 / Imipridones", description: "Selective DRD2 antagonist with activity in H3 K27M-mutant DMG; FDA accelerated review", typicalCostRange: "Clinical trial / expanded access" },
      { name: "Clinical Trial Enrolment", description: "PNOC, COG-ACNS, CONNECT consortia trials are the standard of care wherever possible", typicalCostRange: "Variable" },
      { name: "Supportive & Palliative Care", description: "Steroids, anti-epileptics, swallow/speech therapy, paediatric palliative care from diagnosis", typicalCostRange: "$10,000 – $50,000" }
    ],
    stages: ["No formal staging — diagnosis is by location and molecular profile"],
    survivalRates: "Median overall survival 9-12 months; <10% alive at 2 years; long-term survival rare",
    supportOrganizations: [
      { name: "DIPG / DMG Resource Network", url: "https://www.dipg.org/", description: "Global hub for DIPG/DMG patients, families and researchers", geography: "Global" },
      { name: "ChadTough Defeat DIPG", url: "https://chadtoughdefeatdipg.org/", description: "Major funder of DIPG/DMG research", geography: "US" },
      { name: "Abbie's Army", url: "https://www.abbiesarmy.co.uk/", description: "UK DIPG family charity and research funder", geography: "UK" },
      { name: "Cure Brain Cancer Foundation", url: "https://www.curebraincancer.org.au/", description: "Australian brain cancer charity with DIPG focus", geography: "Australia" }
    ],
    externalResources: [
      { title: "NCI – Childhood Brain Stem Glioma Treatment (PDQ)", url: "https://www.cancer.gov/types/brain/hp/child-glioma-treatment-pdq", type: "website" },
      { title: "St. Jude – DIPG Information", url: "https://www.stjude.org/disease/diffuse-intrinsic-pontine-glioma-dipg.html", type: "website" },
      { title: "Nature Reviews – Diffuse Midline Glioma Biology and Therapy", url: "https://www.nature.com/articles/s41571-021-00567-0", type: "research" },
      { title: "PNOC Trials Network", url: "https://pnoc.us/", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~200-300 children/year", notableHospitals: ["St. Jude", "Dana-Farber/Boston Children's", "UCSF Benioff Children's", "Children's National Washington DC"] },
      { region: "EU", prevalence: "Coordinated through SIOPE-Brain network", notableHospitals: ["Institut Gustave Roussy Paris", "Great Ormond Street Hospital"] },
      { region: "Australia", prevalence: "Cure Brain Cancer-funded trial sites", notableHospitals: ["Sydney Children's Hospital", "Royal Children's Melbourne"] },
      { region: "India", prevalence: "Increasing biopsy and molecular testing capacity", notableHospitals: ["AIIMS Delhi", "Tata Memorial", "NIMHANS Bangalore"] }
    ],
    lastUpdated: "2026-05-16"
  },
  {
    id: "dermatofibrosarcoma-protuberans",
    name: "Dermatofibrosarcoma Protuberans",
    alternateNames: ["DFSP", "Bednar Tumour (pigmented variant)"],
    category: "sarcoma",
    description: "Rare, slow-growing soft tissue sarcoma of the dermis driven by the COL1A1-PDGFB fusion (t(17;22)). Highly locally infiltrative with finger-like extensions, but distant metastasis is uncommon. Often misdiagnosed as a benign lesion for years.",
    commonSymptoms: ["Firm, painless skin plaque on trunk, shoulders, or proximal limbs", "Slow-growing nodule that may become multinodular over years", "Reddish-brown or violaceous discolouration", "Skin ulceration or bleeding in advanced lesions"],
    riskFactors: ["COL1A1-PDGFB gene fusion (acquired)", "Prior trauma or scar at site (anecdotal)", "Slight female predominance, ages 20-50", "No clear hereditary syndrome"],
    diagnostics: ["Punch or incisional biopsy with CD34 immunohistochemistry", "FISH or RT-PCR for COL1A1-PDGFB fusion", "MRI for deep or recurrent lesions", "Sentinel node biopsy generally not required"],
    treatments: [
      { name: "Mohs Micrographic Surgery", description: "Preferred technique — lowest recurrence rates by mapping margins exhaustively", typicalCostRange: "$5,000 – $20,000" },
      { name: "Wide Local Excision", description: "2-4 cm margins down to fascia when Mohs unavailable; consider adjuvant radiation if margins close", typicalCostRange: "$10,000 – $40,000" },
      { name: "Adjuvant Radiation", description: "For positive/close margins where re-excision is not feasible", typicalCostRange: "$15,000 – $40,000" },
      { name: "Imatinib", description: "Targets PDGFB fusion; first-line systemic therapy for unresectable, recurrent, or metastatic DFSP", typicalCostRange: "$15,000 – $60,000/year (generic)" }
    ],
    stages: ["No formal AJCC staging — described as localised, locally advanced, or metastatic (rare)"],
    survivalRates: "5-year overall survival >95% with adequate surgery; fibrosarcomatous transformation reduces survival to ~70%",
    supportOrganizations: [
      { name: "Sarcoma Foundation of America", url: "https://www.curesarcoma.org/", description: "Patient resources, advocacy and research grants", geography: "US" },
      { name: "Sarcoma UK", url: "https://sarcoma.org.uk/", description: "UK sarcoma support and research charity", geography: "UK" },
      { name: "DFSP Patient Group", url: "https://www.facebook.com/groups/dfspsupport/", description: "Active online peer support community", geography: "Global" }
    ],
    externalResources: [
      { title: "NCI – Adult Soft Tissue Sarcoma Treatment (PDQ)", url: "https://www.cancer.gov/types/soft-tissue-sarcoma/hp/adult-soft-tissue-treatment-pdq", type: "website" },
      { title: "NCCN Dermatofibrosarcoma Protuberans Guidelines", url: "https://www.nccn.org/guidelines/category_1", type: "website" },
      { title: "Lancet Oncology – Imatinib in DFSP (EORTC 62027)", url: "https://www.thelancet.com/journals/lanonc/article/PIIS1470-2045(10)70184-8/fulltext", type: "research" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~1,000 cases/year (~4 per million)", notableHospitals: ["MD Anderson", "Memorial Sloan Kettering", "Mayo Clinic"] },
      { region: "EU", prevalence: "Concentrated in sarcoma reference centres", notableHospitals: ["Institut Gustave Roussy Paris", "Istituto Nazionale dei Tumori Milan"] },
      { region: "India", prevalence: "Often diagnosed late after multiple excisions", notableHospitals: ["Tata Memorial Hospital", "HCG Bangalore"] }
    ],
    lastUpdated: "2026-05-16"
  }
];
