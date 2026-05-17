// Cancer Knowledge Book — Expanded Set 6
// Adds further rare and clinically-important cancer types missing from prior sets.

import type { CancerEntry } from "./types";

export const cancersExpanded6: CancerEntry[] = [
  {
    id: "synovial-sarcoma",
    name: "Synovial Sarcoma",
    alternateNames: ["Malignant Synovioma", "SS18-SSX Sarcoma"],
    category: "sarcoma",
    description: "A translocation-driven soft-tissue sarcoma defined by SS18-SSX gene fusion. Typically arises near (not within) joints in adolescents and young adults, most commonly in the lower extremities.",
    commonSymptoms: ["Slow-growing painless mass near a joint", "Joint stiffness", "Localised pain (late)", "Nerve compression symptoms"],
    riskFactors: ["Age 15-40", "No clear environmental risk", "No known inherited predisposition"],
    diagnostics: ["MRI of mass", "Core-needle biopsy", "SS18-SSX FISH/RT-PCR", "Staging CT chest", "PET-CT"],
    treatments: [
      { name: "Wide Surgical Excision", description: "Limb-sparing resection with negative margins is the cornerstone of cure", typicalCostRange: "$30,000 – $80,000" },
      { name: "Adjuvant Radiation", description: "Pre- or post-operative radiation reduces local recurrence for tumours >5 cm or high-grade", typicalCostRange: "$20,000 – $50,000" },
      { name: "Chemotherapy", description: "Ifosfamide/doxorubicin for high-risk or metastatic disease", typicalCostRange: "$25,000 – $70,000" },
      { name: "Afami-cel (T-cell therapy)", description: "FDA-approved engineered TCR therapy targeting MAGE-A4 in HLA-A*02:01 patients with advanced synovial sarcoma", typicalCostRange: "$500,000 – $750,000 (single dose)" }
    ],
    stages: ["Stage I (low-grade, any size)", "Stage II (high-grade ≤5 cm)", "Stage III (high-grade >5 cm or nodal)", "Stage IV (metastatic)"],
    survivalRates: "Localised: 60-75% 5-year; metastatic: 20-30% 5-year",
    supportOrganizations: [
      { name: "Sarcoma Foundation of America", url: "https://www.curesarcoma.org/", description: "Patient advocacy and research funding for all sarcomas", geography: "US" },
      { name: "Sarcoma UK", url: "https://sarcoma.org.uk/", description: "Information, support line and research grants", geography: "UK" },
      { name: "Sarcoma Alliance", url: "https://sarcomaalliance.org/", description: "Education, peer navigation and second-opinion grants", geography: "US" }
    ],
    externalResources: [
      { title: "NCI – Soft Tissue Sarcoma Treatment", url: "https://www.cancer.gov/types/soft-tissue-sarcoma/hp/adult-soft-tissue-treatment-pdq", type: "website" },
      { title: "ESMO Clinical Practice Guidelines – Soft Tissue Sarcoma", url: "https://www.esmo.org/guidelines/guidelines-by-topic/sarcoma-and-gist", type: "research" },
      { title: "Afami-cel approval (FDA)", url: "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-afamitresgene-autoleucel-unresectable-or-metastatic-synovial-sarcoma", type: "research" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~800-1,000 new cases/year", notableHospitals: ["MD Anderson", "Memorial Sloan Kettering", "Mayo Clinic"] },
      { region: "UK", prevalence: "Treated at sarcoma centres", notableHospitals: ["Royal Marsden", "Royal National Orthopaedic Hospital"] },
      { region: "India", prevalence: "Centralised at oncology hospitals", notableHospitals: ["Tata Memorial Hospital", "HCG Bangalore"] }
    ],
    lastUpdated: "2026-05-17"
  },
  {
    id: "leiomyosarcoma",
    name: "Leiomyosarcoma",
    alternateNames: ["LMS", "Smooth Muscle Sarcoma"],
    category: "sarcoma",
    description: "Malignant tumour of smooth muscle origin, most commonly arising in the uterus, retroperitoneum, large blood vessels or extremities. Aggressive with high metastatic potential to lungs and liver.",
    commonSymptoms: ["Painless enlarging mass", "Abnormal uterine bleeding (uterine LMS)", "Abdominal pain or fullness", "Unintended weight loss", "Vascular obstruction (IVC LMS)"],
    riskFactors: ["Prior pelvic radiation", "Hereditary retinoblastoma (RB1)", "Li-Fraumeni syndrome", "Tamoxifen exposure (uterine)"],
    diagnostics: ["Contrast MRI", "CT chest/abdomen/pelvis", "Core-needle biopsy", "Histopathology with desmin/SMA staining", "Ki-67 grading"],
    treatments: [
      { name: "Surgery", description: "Complete en-bloc resection is the only curative therapy; total hysterectomy for uterine LMS", typicalCostRange: "$25,000 – $90,000" },
      { name: "Doxorubicin-based Chemotherapy", description: "Doxorubicin ± ifosfamide or dacarbazine for unresectable/metastatic disease", typicalCostRange: "$25,000 – $80,000" },
      { name: "Trabectedin / Pazopanib / Eribulin", description: "Approved second-line agents for advanced LMS", typicalCostRange: "$60,000 – $150,000/year" },
      { name: "Radiation", description: "Selective use for positive margins or palliation", typicalCostRange: "$15,000 – $45,000" }
    ],
    stages: ["Stage I (localised, low risk)", "Stage II-III (high-grade)", "Stage IV (metastatic)"],
    survivalRates: "Localised uterine LMS: 50-60% 5-year; metastatic: 10-20% 5-year",
    supportOrganizations: [
      { name: "Leiomyosarcoma Support & Direct Research Foundation", url: "https://lmsdr.org/", description: "Patient-led foundation funding LMS research", geography: "US" },
      { name: "National LMS Foundation", url: "https://www.nlmsf.org/", description: "Information, registry and research grants", geography: "US" },
      { name: "Sarcoma UK", url: "https://sarcoma.org.uk/", description: "UK-wide support and helpline", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Uterine Sarcoma Treatment", url: "https://www.cancer.gov/types/uterine/hp/uterine-sarcoma-treatment-pdq", type: "website" },
      { title: "NCCN Soft Tissue Sarcoma Guidelines", url: "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1464", type: "research" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~3,000 new cases/year (all sites)", notableHospitals: ["Dana-Farber", "MD Anderson", "MSK"] },
      { region: "UK", prevalence: "Sarcoma MDT centres", notableHospitals: ["Royal Marsden", "Christie Manchester"] },
      { region: "India", prevalence: "Limited registry data", notableHospitals: ["Tata Memorial", "AIIMS Delhi"] }
    ],
    lastUpdated: "2026-05-17"
  },
  {
    id: "myelodysplastic-syndromes",
    name: "Myelodysplastic Syndromes (MDS)",
    alternateNames: ["MDS", "Pre-leukemia", "Myelodysplasia"],
    category: "leukemia",
    description: "Clonal stem-cell disorders characterised by ineffective haematopoiesis, peripheral cytopenias and a risk of transformation to acute myeloid leukemia. Risk-stratified using IPSS-R / IPSS-M molecular scoring.",
    commonSymptoms: ["Fatigue / pallor (anemia)", "Easy bruising / bleeding (thrombocytopenia)", "Recurrent infections (neutropenia)", "Dyspnoea on exertion", "Often asymptomatic on routine CBC"],
    riskFactors: ["Age >60", "Prior chemotherapy/radiation (t-MDS)", "Benzene exposure", "Smoking", "Inherited bone marrow failure syndromes (Fanconi, telomere disorders)"],
    diagnostics: ["CBC with differential and reticulocyte count", "Peripheral blood smear", "Bone marrow aspirate and biopsy with cytogenetics", "Next-generation sequencing (TP53, SF3B1, ASXL1, RUNX1)", "Flow cytometry"],
    treatments: [
      { name: "Supportive Care", description: "Transfusions, growth factors (EPO, G-CSF), iron chelation for chronic transfusion burden", typicalCostRange: "$10,000 – $40,000/year" },
      { name: "Hypomethylating Agents", description: "Azacitidine or decitabine — standard of care for higher-risk MDS", typicalCostRange: "$60,000 – $120,000/year" },
      { name: "Luspatercept", description: "Approved for transfusion-dependent anemia in lower-risk MDS with ring sideroblasts", typicalCostRange: "$120,000 – $180,000/year" },
      { name: "Allogeneic Stem Cell Transplant", description: "Only curative option; reserved for higher-risk fit patients", typicalCostRange: "$200,000 – $800,000" }
    ],
    stages: ["IPSS-R Very Low / Low", "IPSS-R Intermediate", "IPSS-R High / Very High"],
    survivalRates: "Very low risk: median >8 years; very high risk: <1 year without transplant",
    supportOrganizations: [
      { name: "MDS Foundation", url: "https://www.mds-foundation.org/", description: "Global MDS patient education, centres of excellence directory", geography: "Global" },
      { name: "Leukemia & Lymphoma Society", url: "https://www.lls.org/", description: "Patient support, financial aid, and information lines", geography: "US" },
      { name: "Aplastic Anaemia Trust", url: "https://www.theaat.org.uk/", description: "UK charity covering MDS and related bone marrow failure", geography: "UK" }
    ],
    externalResources: [
      { title: "NCCN MDS Guidelines", url: "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1446", type: "research" },
      { title: "NCI – Myelodysplastic Syndromes Treatment", url: "https://www.cancer.gov/types/myeloproliferative/patient/myelodysplastic-treatment-pdq", type: "website" },
      { title: "IPSS-M Risk Calculator", url: "https://mds-risk-model.com/", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~10,000-20,000 new cases/year", notableHospitals: ["MD Anderson", "Cleveland Clinic", "Moffitt"] },
      { region: "UK", prevalence: "~2,500 new cases/year", notableHospitals: ["King's College Hospital", "Guy's and St Thomas'"] },
      { region: "India", prevalence: "Under-diagnosed; rising", notableHospitals: ["Tata Memorial", "CMC Vellore", "AIIMS Delhi"] }
    ],
    lastUpdated: "2026-05-17"
  },
  {
    id: "myelofibrosis",
    name: "Myelofibrosis",
    alternateNames: ["Primary Myelofibrosis", "PMF", "Idiopathic Myelofibrosis"],
    category: "leukemia",
    description: "A Philadelphia-negative myeloproliferative neoplasm with progressive marrow fibrosis, extramedullary haematopoiesis, splenomegaly and constitutional symptoms. Driven by JAK2, CALR or MPL mutations.",
    commonSymptoms: ["Massive splenomegaly", "Fatigue and night sweats", "Early satiety and weight loss", "Bone pain", "Pruritus"],
    riskFactors: ["Age >60", "Prior polycythemia vera or essential thrombocythemia", "Radiation/benzene exposure"],
    diagnostics: ["CBC with leukoerythroblastic picture", "Bone marrow biopsy with reticulin staining", "JAK2 V617F / CALR / MPL mutation panel", "DIPSS-Plus risk scoring", "Splenic ultrasound"],
    treatments: [
      { name: "JAK Inhibitors", description: "Ruxolitinib, fedratinib, pacritinib or momelotinib — reduce spleen size and symptoms", typicalCostRange: "$100,000 – $160,000/year" },
      { name: "Allogeneic SCT", description: "Only curative therapy; for higher-risk patients <70 years", typicalCostRange: "$200,000 – $800,000" },
      { name: "Supportive Care", description: "Transfusions, erythropoietin, danazol for anemia", typicalCostRange: "$10,000 – $30,000/year" },
      { name: "Splenectomy / Splenic Radiation", description: "For drug-refractory massive splenomegaly", typicalCostRange: "$25,000 – $60,000" }
    ],
    stages: ["DIPSS Low", "DIPSS Intermediate-1", "DIPSS Intermediate-2", "DIPSS High"],
    survivalRates: "Low risk: median >11 years; high risk: median ~1.5 years",
    supportOrganizations: [
      { name: "MPN Research Foundation", url: "https://www.mpnresearchfoundation.org/", description: "Funds MPN research, patient symposia", geography: "US" },
      { name: "MPN Voice", url: "https://www.mpnvoice.org.uk/", description: "UK patient charity for MPNs", geography: "UK" }
    ],
    externalResources: [
      { title: "NCCN MPN Guidelines", url: "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1477", type: "research" },
      { title: "NCI – Primary Myelofibrosis", url: "https://www.cancer.gov/types/myeloproliferative/patient/chronic-treatment-pdq", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~1.5 per 100,000/year", notableHospitals: ["MD Anderson", "Mayo Clinic"] },
      { region: "UK", prevalence: "Treated via haematology MPN clinics", notableHospitals: ["Guy's & St Thomas'", "Hammersmith Hospital"] }
    ],
    lastUpdated: "2026-05-17"
  },
  {
    id: "polycythemia-vera",
    name: "Polycythemia Vera",
    alternateNames: ["PV", "Primary Polycythemia"],
    category: "leukemia",
    description: "JAK2-driven myeloproliferative neoplasm causing erythrocytosis, often with leukocytosis and thrombocytosis. Major morbidity from arterial/venous thrombosis; small risk of transformation to MF or AML.",
    commonSymptoms: ["Plethoric facies", "Aquagenic pruritus", "Headache and visual disturbance", "Erythromelalgia (burning hands/feet)", "Splenomegaly"],
    riskFactors: ["Age >60", "JAK2 V617F mutation (~95%)", "Family history of MPN"],
    diagnostics: ["Hemoglobin/hematocrit", "JAK2 V617F (and exon 12) testing", "Serum erythropoietin (low)", "Bone marrow biopsy", "Abdominal ultrasound for splenomegaly"],
    treatments: [
      { name: "Therapeutic Phlebotomy", description: "Target hematocrit <45% to reduce thrombotic risk", typicalCostRange: "$200 – $1,000/session" },
      { name: "Low-dose Aspirin", description: "81-100 mg daily for thrombosis prevention", typicalCostRange: "$10 – $50/year" },
      { name: "Hydroxyurea", description: "First-line cytoreduction for high-risk patients", typicalCostRange: "$500 – $3,000/year" },
      { name: "Ropeginterferon alfa-2b / Ruxolitinib", description: "For hydroxyurea-intolerant or resistant disease", typicalCostRange: "$50,000 – $150,000/year" }
    ],
    stages: ["Low risk (<60, no thrombosis)", "High risk (≥60 or prior thrombosis)"],
    survivalRates: "Median survival >20 years with modern treatment; ~10% transform to MF, <5% to AML",
    supportOrganizations: [
      { name: "MPN Research Foundation", url: "https://www.mpnresearchfoundation.org/", description: "Research funding and patient education for MPNs", geography: "US" },
      { name: "MPN Voice", url: "https://www.mpnvoice.org.uk/", description: "UK MPN charity, helpline and forums", geography: "UK" }
    ],
    externalResources: [
      { title: "NCCN MPN Guidelines", url: "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1477", type: "research" },
      { title: "NCI – Polycythemia Vera", url: "https://www.cancer.gov/types/myeloproliferative/patient/chronic-treatment-pdq", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~2 per 100,000/year", notableHospitals: ["Mayo Clinic", "MD Anderson"] },
      { region: "UK", prevalence: "MPN-specialist haematology centres", notableHospitals: ["Guy's & St Thomas'", "Royal Marsden"] }
    ],
    lastUpdated: "2026-05-17"
  },
  {
    id: "primary-cns-lymphoma",
    name: "Primary CNS Lymphoma",
    alternateNames: ["PCNSL", "Primary Central Nervous System Lymphoma"],
    category: "lymphoma",
    description: "Aggressive extranodal non-Hodgkin lymphoma (usually DLBCL) confined to brain, leptomeninges, eyes or spinal cord. Increased incidence in immunocompromised patients and the elderly.",
    commonSymptoms: ["Focal neurological deficit", "Cognitive change / personality change", "Seizures", "Headache from raised ICP", "Visual symptoms (vitreoretinal involvement)"],
    riskFactors: ["HIV / AIDS", "Post-transplant immunosuppression", "Epstein-Barr virus (in immunosuppressed)", "Age >60"],
    diagnostics: ["MRI brain with contrast", "Stereotactic brain biopsy (before steroids if possible)", "CSF cytology and flow", "Slit-lamp / vitreous biopsy", "HIV testing, PET-CT to exclude systemic disease"],
    treatments: [
      { name: "High-dose Methotrexate-based Induction", description: "HD-MTX ± rituximab ± cytarabine; backbone of induction therapy", typicalCostRange: "$50,000 – $150,000" },
      { name: "Consolidation: Autologous SCT or Whole-brain RT", description: "ASCT preferred in fit younger patients to reduce neurotoxicity", typicalCostRange: "$150,000 – $400,000" },
      { name: "Salvage / Refractory", description: "Lenalidomide, ibrutinib, CAR-T (investigational)", typicalCostRange: "$80,000 – $500,000" }
    ],
    stages: ["Limited to brain parenchyma", "Leptomeningeal involvement", "Ocular involvement", "Spinal cord involvement"],
    survivalRates: "5-year overall survival: 30-40%; younger patients receiving ASCT: 60-70%",
    supportOrganizations: [
      { name: "Lymphoma Research Foundation", url: "https://lymphoma.org/", description: "PCNSL-specific resources, helpline and clinical trial finder", geography: "US" },
      { name: "International PCNSL Collaborative Group", url: "https://www.ipcg.org/", description: "Clinical trial collaboration and consensus guidelines", geography: "Global" }
    ],
    externalResources: [
      { title: "NCI – Primary CNS Lymphoma Treatment", url: "https://www.cancer.gov/types/lymphoma/hp/primary-cns-lymphoma-treatment-pdq", type: "website" },
      { title: "EHA / ESMO PCNSL Guidelines", url: "https://www.esmo.org/guidelines/guidelines-by-topic/haematological-malignancies/diffuse-large-b-cell-lymphoma", type: "research" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~1,500 new cases/year", notableHospitals: ["Memorial Sloan Kettering", "Dana-Farber", "MD Anderson"] },
      { region: "UK", prevalence: "Treated at neuro-oncology centres", notableHospitals: ["UCLH", "The Christie"] }
    ],
    lastUpdated: "2026-05-17"
  },
  {
    id: "marginal-zone-lymphoma",
    name: "Marginal Zone Lymphoma",
    alternateNames: ["MZL", "MALT Lymphoma", "Nodal MZL", "Splenic MZL"],
    category: "lymphoma",
    description: "Indolent B-cell non-Hodgkin lymphoma arising from marginal-zone B cells. Three subtypes: extranodal MALT (often gastric, linked to H. pylori), nodal MZL and splenic MZL (linked to hepatitis C).",
    commonSymptoms: ["Painless lymphadenopathy", "Dyspepsia / gastric ulcer symptoms (MALT)", "Splenomegaly", "Cytopenias", "B-symptoms (less common)"],
    riskFactors: ["Helicobacter pylori (gastric MALT)", "Hepatitis C (splenic MZL)", "Chlamydia psittaci (ocular adnexal MALT)", "Autoimmune disease (Sjögren, Hashimoto)", "Age >60"],
    diagnostics: ["Lymph node / tissue biopsy", "Endoscopy with biopsies (gastric MALT)", "H. pylori testing", "Hepatitis C serology", "Flow cytometry, immunohistochemistry, FISH for t(11;18)"],
    treatments: [
      { name: "H. pylori Eradication", description: "Triple therapy cures most localised gastric MALT lymphoma", typicalCostRange: "$200 – $1,500" },
      { name: "Radiation Therapy", description: "Curative for localised stage I-II MZL/MALT", typicalCostRange: "$15,000 – $40,000" },
      { name: "Rituximab ± Chemotherapy", description: "Rituximab monotherapy or R-bendamustine for advanced disease", typicalCostRange: "$30,000 – $90,000" },
      { name: "BTK Inhibitors", description: "Ibrutinib / zanubrutinib for relapsed/refractory disease", typicalCostRange: "$120,000 – $180,000/year" }
    ],
    stages: ["Ann Arbor I (localised)", "Ann Arbor II-III", "Ann Arbor IV (disseminated / marrow)"],
    survivalRates: "5-year OS: 85-90% (overall); MALT after H. pylori eradication >95%",
    supportOrganizations: [
      { name: "Lymphoma Research Foundation", url: "https://lymphoma.org/", description: "MZL-specific patient resources, helpline", geography: "US" },
      { name: "Lymphoma Action UK", url: "https://lymphoma-action.org.uk/", description: "UK helpline, peer support and information booklets", geography: "UK" }
    ],
    externalResources: [
      { title: "NCCN B-cell Lymphoma Guidelines", url: "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1480", type: "research" },
      { title: "NCI – Adult Non-Hodgkin Lymphoma Treatment", url: "https://www.cancer.gov/types/lymphoma/hp/adult-nhl-treatment-pdq", type: "website" }
    ],
    geographyNotes: [
      { region: "Global", prevalence: "~8% of all NHL", notableHospitals: ["MD Anderson", "Royal Marsden", "Lyon Sud (France)"] },
      { region: "India", prevalence: "Higher gastric MALT due to H. pylori burden", notableHospitals: ["Tata Memorial", "AIIMS Delhi"] }
    ],
    lastUpdated: "2026-05-17"
  },
  {
    id: "inflammatory-breast-cancer",
    name: "Inflammatory Breast Cancer",
    alternateNames: ["IBC", "T4d Breast Cancer"],
    category: "carcinoma",
    description: "Rare, highly aggressive form of breast cancer presenting with rapid onset breast erythema, oedema (peau d'orange) and warmth — caused by tumour emboli in dermal lymphatics. Considered locally advanced (T4d) at diagnosis.",
    commonSymptoms: ["Rapid breast swelling and erythema (>1/3 of breast)", "Peau d'orange (orange-peel skin)", "Warmth and tenderness", "Inverted nipple", "Often no discrete palpable mass"],
    riskFactors: ["Female sex", "Younger age at diagnosis than typical breast cancer", "Black/African ancestry (higher risk)", "Obesity", "BRCA1/2 mutations (subset)"],
    diagnostics: ["Diagnostic mammogram and breast ultrasound", "Breast MRI", "Core biopsy of breast mass and skin punch biopsy", "Staging CT/PET, bone scan", "ER/PR/HER2 testing"],
    treatments: [
      { name: "Neoadjuvant Chemotherapy", description: "Anthracycline + taxane ± HER2-targeted therapy; mandatory before surgery", typicalCostRange: "$40,000 – $120,000" },
      { name: "Modified Radical Mastectomy", description: "With axillary node dissection; breast conservation is generally NOT appropriate", typicalCostRange: "$25,000 – $60,000" },
      { name: "Post-mastectomy Radiation", description: "Chest wall + regional nodes to reduce local recurrence", typicalCostRange: "$20,000 – $50,000" },
      { name: "Endocrine / Anti-HER2 Maintenance", description: "Tamoxifen/AI for ER+; trastuzumab ± pertuzumab for HER2+", typicalCostRange: "$10,000 – $80,000/year" }
    ],
    stages: ["Stage IIIB / IIIC (locally advanced)", "Stage IV (metastatic at diagnosis ~30%)"],
    survivalRates: "5-year survival: stage III 40-50%; stage IV 11%",
    supportOrganizations: [
      { name: "IBC Network Foundation", url: "https://theibcnetwork.org/", description: "Patient education, research funding, IBC-specific clinician directory", geography: "US" },
      { name: "Inflammatory Breast Cancer Research Foundation", url: "https://www.ibcresearch.org/", description: "Research grants and patient registry", geography: "US" },
      { name: "Breast Cancer Now", url: "https://breastcancernow.org/", description: "UK helpline and IBC information", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Inflammatory Breast Cancer", url: "https://www.cancer.gov/types/breast/ibc-fact-sheet", type: "website" },
      { title: "NCCN Breast Cancer Guidelines", url: "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1419", type: "research" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "1-5% of all breast cancers", notableHospitals: ["MD Anderson Morgan Welch IBC Clinic", "Dana-Farber"] },
      { region: "India", prevalence: "Higher proportion in young women (often misdiagnosed as mastitis)", notableHospitals: ["Tata Memorial", "AIIMS", "HCG"] }
    ],
    lastUpdated: "2026-05-17"
  },
  {
    id: "triple-negative-breast-cancer",
    name: "Triple-Negative Breast Cancer",
    alternateNames: ["TNBC", "Basal-like Breast Cancer"],
    category: "carcinoma",
    description: "Breast cancer lacking expression of estrogen receptor, progesterone receptor and HER2. Tends to occur in younger women and patients of African ancestry, with higher early-recurrence risk and limited targeted-therapy options.",
    commonSymptoms: ["Palpable breast lump (often rapid growth)", "Nipple discharge or change", "Skin dimpling", "Axillary lymphadenopathy"],
    riskFactors: ["BRCA1 mutation (up to 70% of BRCA1 cancers are TNBC)", "Premenopausal age", "Black/African ancestry", "Higher parity, younger age at first birth", "Obesity"],
    diagnostics: ["Mammogram + ultrasound", "Breast MRI for high-risk lesions", "Core biopsy with ER/PR/HER2", "BRCA1/2 germline testing", "PD-L1 testing for metastatic", "Staging CT/bone scan"],
    treatments: [
      { name: "Neoadjuvant Chemo-Immunotherapy", description: "KEYNOTE-522 regimen: pembrolizumab + carboplatin/paclitaxel then AC, for stage II-III", typicalCostRange: "$120,000 – $250,000" },
      { name: "Surgery + Radiation", description: "Lumpectomy + radiation, or mastectomy ± reconstruction", typicalCostRange: "$30,000 – $80,000" },
      { name: "PARP Inhibitors", description: "Olaparib/talazoparib for BRCA-mutated disease (adjuvant or metastatic)", typicalCostRange: "$160,000 – $200,000/year" },
      { name: "Sacituzumab Govitecan", description: "Trop-2-directed ADC for pre-treated metastatic TNBC", typicalCostRange: "$150,000 – $250,000/year" }
    ],
    stages: ["Stage I-III (curative intent)", "Stage IV (metastatic)"],
    survivalRates: "5-year survival: stage I ~85%, stage III ~50%, stage IV ~12%",
    supportOrganizations: [
      { name: "Triple Negative Breast Cancer Foundation", url: "https://tnbcfoundation.org/", description: "TNBC-specific research funding and patient education", geography: "US" },
      { name: "Living Beyond Breast Cancer", url: "https://www.lbbc.org/", description: "Webinars, helpline and metastatic resources", geography: "US" },
      { name: "Breast Cancer Now", url: "https://breastcancernow.org/", description: "UK information, support and research", geography: "UK" }
    ],
    externalResources: [
      { title: "NCCN Breast Cancer Guidelines", url: "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1419", type: "research" },
      { title: "KEYNOTE-522 Trial (NEJM)", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1910549", type: "research" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~15% of breast cancers; higher in Black women", notableHospitals: ["Dana-Farber", "MD Anderson", "MSK"] },
      { region: "India", prevalence: "~25-30% of breast cancers — higher than Western populations", notableHospitals: ["Tata Memorial", "HCG", "Apollo"] }
    ],
    lastUpdated: "2026-05-17"
  },
  {
    id: "papillary-renal-cell-carcinoma",
    name: "Papillary Renal Cell Carcinoma",
    alternateNames: ["pRCC", "Type 1 / Type 2 Papillary RCC"],
    category: "carcinoma",
    description: "Second-most-common subtype of renal cell carcinoma (10-15%). Type 1 is associated with MET mutations (often hereditary), while Type 2 is more aggressive and linked to fumarate hydratase deficiency / HLRCC syndrome.",
    commonSymptoms: ["Hematuria", "Flank pain", "Abdominal mass", "Often asymptomatic, found incidentally on imaging"],
    riskFactors: ["Hereditary papillary renal carcinoma (MET)", "HLRCC syndrome (FH gene, Type 2)", "End-stage renal disease / dialysis", "Smoking, hypertension, obesity"],
    diagnostics: ["Contrast CT or MRI of abdomen", "Renal mass biopsy in selected cases", "FH and MET germline testing for suspected hereditary disease", "Chest CT for staging"],
    treatments: [
      { name: "Partial / Radical Nephrectomy", description: "Nephron-sparing surgery preferred when feasible", typicalCostRange: "$25,000 – $80,000" },
      { name: "Active Surveillance", description: "For small (<4 cm), low-risk lesions in elderly/comorbid patients", typicalCostRange: "Imaging surveillance costs only" },
      { name: "MET Inhibitors", description: "Cabozantinib (preferred), savolitinib for MET-altered disease", typicalCostRange: "$120,000 – $200,000/year" },
      { name: "Immunotherapy Combinations", description: "Nivolumab + cabozantinib or ipilimumab/nivolumab for advanced disease", typicalCostRange: "$200,000 – $400,000/year" }
    ],
    stages: ["Stage I (≤7 cm, kidney only)", "Stage II (>7 cm, kidney only)", "Stage III (perinephric / nodal)", "Stage IV (metastatic)"],
    survivalRates: "Localised 5-year survival: ~90%; metastatic Type 2: 12-20%",
    supportOrganizations: [
      { name: "Kidney Cancer Association", url: "https://www.kidneycancer.org/", description: "Patient education, navigator, and clinical trial finder", geography: "US" },
      { name: "HLRCC Family Alliance", url: "https://www.hlrccinfo.org/", description: "Support for hereditary leiomyomatosis & RCC families", geography: "Global" },
      { name: "Kidney Cancer UK", url: "https://www.kcuk.org.uk/", description: "UK charity with helpline and clinical trial information", geography: "UK" }
    ],
    externalResources: [
      { title: "NCCN Kidney Cancer Guidelines", url: "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1440", type: "research" },
      { title: "NCI – Renal Cell Cancer Treatment", url: "https://www.cancer.gov/types/kidney/hp/kidney-treatment-pdq", type: "website" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~7,000-10,000 new cases/year", notableHospitals: ["NCI Urologic Oncology Branch", "MSK", "Cleveland Clinic"] },
      { region: "India", prevalence: "Limited subtype-specific data", notableHospitals: ["Tata Memorial", "Apollo"] }
    ],
    lastUpdated: "2026-05-17"
  },
  {
    id: "adenoid-cystic-carcinoma",
    name: "Adenoid Cystic Carcinoma",
    alternateNames: ["ACC", "Cylindroma (historical)"],
    category: "carcinoma",
    description: "Rare slow-growing but relentlessly progressive epithelial cancer of secretory glands — most often major and minor salivary glands, but also lacrimal, tracheobronchial, breast and skin. Marked perineural invasion and late distant lung metastases.",
    commonSymptoms: ["Persistent painless mass (parotid, palate)", "Facial nerve weakness", "Numbness or neuropathic pain (perineural)", "Hoarseness or dyspnea (tracheal)", "Chronic nasal obstruction"],
    riskFactors: ["No clear environmental risk factors", "MYB-NFIB fusion in most tumours", "Rare familial reports"],
    diagnostics: ["MRI of primary site (best for perineural spread)", "CT chest for lung metastases", "Core or open biopsy", "Cribriform/tubular/solid histology pattern", "MYB FISH/IHC"],
    treatments: [
      { name: "Wide Surgical Resection", description: "Often with facial-nerve sacrifice; aim for negative margins", typicalCostRange: "$30,000 – $90,000" },
      { name: "Adjuvant Photon / Proton / Neutron Radiation", description: "Standard after surgery; neutron or proton therapy for unresectable disease", typicalCostRange: "$30,000 – $120,000" },
      { name: "Chemotherapy", description: "Limited efficacy; cisplatin-based for palliation", typicalCostRange: "$20,000 – $60,000" },
      { name: "Targeted Trials", description: "MYB-, NOTCH- and FGFR-directed agents under investigation", typicalCostRange: "Trial-dependent" }
    ],
    stages: ["Stage I-II (early local)", "Stage III (large or nodal)", "Stage IV (distant metastasis)"],
    survivalRates: "10-year survival: 50-65% (but late distant recurrences common — 20-year survival ~25%)",
    supportOrganizations: [
      { name: "Adenoid Cystic Carcinoma Research Foundation", url: "https://www.accrf.org/", description: "Research grants, patient registry and clinical trial information", geography: "Global" },
      { name: "ACCOI – ACC Organisation International", url: "https://accoi.org/", description: "Patient community, advocacy and educational webinars", geography: "Global" }
    ],
    externalResources: [
      { title: "NCI – Salivary Gland Cancer Treatment", url: "https://www.cancer.gov/types/head-and-neck/hp/adult/salivary-gland-treatment-pdq", type: "website" },
      { title: "NCCN Head and Neck Cancers Guidelines", url: "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1437", type: "research" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~1,200 new cases/year", notableHospitals: ["MD Anderson", "MSK", "Mayo Clinic"] },
      { region: "UK", prevalence: "Treated at specialist H&N centres", notableHospitals: ["Royal Marsden", "Guy's & St Thomas'"] }
    ],
    lastUpdated: "2026-05-17"
  },
  {
    id: "choriocarcinoma",
    name: "Choriocarcinoma",
    alternateNames: ["Gestational Choriocarcinoma", "Non-gestational Choriocarcinoma"],
    category: "carcinoma",
    description: "Highly malignant trophoblastic tumour producing large amounts of β-hCG. Gestational form follows molar pregnancy, miscarriage or term delivery; non-gestational form arises in gonads as a germ-cell tumour. Among the most chemo-curable solid cancers.",
    commonSymptoms: ["Postpartum or post-molar vaginal bleeding", "Persistently elevated β-hCG", "Hemoptysis (lung metastases)", "Neurological symptoms (brain metastases)", "Pelvic mass"],
    riskFactors: ["Prior complete hydatidiform mole (~50% of gestational cases)", "Maternal age >40 or <20", "Prior choriocarcinoma", "Asian ethnicity (higher molar pregnancy rates)"],
    diagnostics: ["Quantitative β-hCG (serial)", "Pelvic ultrasound and MRI", "CT chest (lungs commonest mets)", "Brain MRI", "FIGO/WHO risk scoring"],
    treatments: [
      { name: "Single-agent Methotrexate", description: "Curative for low-risk gestational disease (WHO score ≤6)", typicalCostRange: "$5,000 – $20,000" },
      { name: "EMA-CO Combination Chemotherapy", description: "Etoposide/MTX/actinomycin-D/cyclophosphamide/vincristine for high-risk disease", typicalCostRange: "$40,000 – $120,000" },
      { name: "Surgery / Radiation", description: "Hysterectomy or focal surgery/radiation for resistant sites; whole-brain RT for CNS mets", typicalCostRange: "$20,000 – $80,000" },
      { name: "BEP / TIP Chemotherapy", description: "Germ-cell regimens for non-gestational ovarian/testicular choriocarcinoma", typicalCostRange: "$30,000 – $90,000" }
    ],
    stages: ["FIGO I (uterine)", "FIGO II (pelvic)", "FIGO III (lung)", "FIGO IV (other distant)"],
    survivalRates: "Low-risk gestational: ~100% cure; high-risk: 80-90%; non-gestational: 50-70%",
    supportOrganizations: [
      { name: "International Society for the Study of Trophoblastic Disease (ISSTD)", url: "https://isstd.org/", description: "Global trophoblastic disease registry, clinician education", geography: "Global" },
      { name: "My Molar Pregnancy", url: "https://www.mymolarpregnancy.com/", description: "Patient information for molar pregnancy and GTN", geography: "US" },
      { name: "Charing Cross GTD Service", url: "https://www.hmole-chorio.org.uk/", description: "UK national referral service and patient information", geography: "UK" }
    ],
    externalResources: [
      { title: "NCI – Gestational Trophoblastic Disease Treatment", url: "https://www.cancer.gov/types/gestational-trophoblastic/hp/gtd-treatment-pdq", type: "website" },
      { title: "FIGO Guidelines on GTN", url: "https://www.figo.org/", type: "research" }
    ],
    geographyNotes: [
      { region: "US", prevalence: "~2-7 per 100,000 pregnancies", notableHospitals: ["Brigham and Women's", "MD Anderson"] },
      { region: "UK", prevalence: "Centralised national service", notableHospitals: ["Charing Cross Hospital", "Sheffield Trophoblastic Centre", "Dundee"] },
      { region: "Asia", prevalence: "Higher incidence — up to 1 in 500 pregnancies in parts of SE Asia", notableHospitals: ["Tata Memorial (India)", "King Chulalongkorn (Thailand)"] }
    ],
    lastUpdated: "2026-05-17"
  }
];
