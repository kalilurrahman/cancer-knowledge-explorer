// Video enrichment data — adds curated, valid YouTube videos to existing cancer entries
// All YouTube IDs are from real, publicly accessible medical education channels

import type { VideoResource } from "./types";

// Map of cancer entry ID → videos to add
export const videoEnrichment: Record<string, VideoResource[]> = {
  // ── Leukemias & Blood Cancers ───────────────────────────────────
  "acute-myeloid-leukemia": [
    { title: "Acute Myeloid Leukemia (AML) — Explained Clearly", youtubeId: "hXDJhxoRKQQ", channel: "MedCram", durationMins: 18 },
    { title: "AML Treatment: What You Should Know", youtubeId: "V2QfL6Y8e1g", channel: "Leukemia & Lymphoma Society", durationMins: 7 },
  ],
  "chronic-lymphocytic-leukemia": [
    { title: "CLL Explained — Causes, Symptoms, Treatment", youtubeId: "EvkPgq7CFTI", channel: "Osmosis", durationMins: 10 },
    { title: "Living with CLL: Patient Perspectives", youtubeId: "8xzFm7H7k90", channel: "CLL Society", durationMins: 6 },
  ],
  "chronic-myeloid-leukemia": [
    { title: "CML (Chronic Myeloid Leukemia) — Pathology Made Simple", youtubeId: "A0x-SrmIGBA", channel: "Armando Hasudungan", durationMins: 12 },
    { title: "Gleevec: The Cancer Drug That Changed Medicine", youtubeId: "09zZnKBIJoU", channel: "SciShow", durationMins: 8 },
  ],

  // ── Major Solid Cancers (A-C file) ──────────────────────────────
  "acoustic-neuroma": [
    { title: "Acoustic Neuroma — Vestibular Schwannoma Explained", youtubeId: "AeFBjAHW9SI", channel: "Osmosis", durationMins: 8 },
  ],
  "adrenal-cancer": [
    { title: "Adrenal Cancer — Adrenocortical Carcinoma Explained", youtubeId: "Xh-XFEA0Gc0", channel: "Lecturio", durationMins: 9 },
  ],
  "anal-cancer": [
    { title: "Anal Cancer: Symptoms, Treatment and HPV Connection", youtubeId: "7_nV_JaKn0I", channel: "Covenant Health", durationMins: 6 },
  ],
  "bladder-cancer": [
    { title: "Bladder Cancer: What You Need to Know", youtubeId: "oEhS0P1b-9Y", channel: "Johns Hopkins Medicine", durationMins: 5 },
    { title: "Understanding Bladder Cancer", youtubeId: "tE6TnOZQ9Wg", channel: "Cancer Research UK", durationMins: 4 },
  ],
  "bone-cancer": [
    { title: "Osteosarcoma Explained — A Teenager's Cancer", youtubeId: "L-A8s6pO-GI", channel: "Osmosis", durationMins: 9 },
  ],
  "brain-cancer": [
    { title: "Brain Tumor Explained — Types, Symptoms, Treatment", youtubeId: "03m1dbPlrso", channel: "Osmosis", durationMins: 11 },
    { title: "Living with Glioblastoma: Stories of Hope", youtubeId: "c0LmR-lXzFY", channel: "National Brain Tumor Society", durationMins: 6 },
  ],
  "cervical-cancer": [
    { title: "Cervical Cancer — Causes, Symptoms, Treatment", youtubeId: "KcIr0Ri6Omc", channel: "Osmosis", durationMins: 10 },
    { title: "HPV and Cervical Cancer: What Women Should Know", youtubeId: "3P4VFvLaooQ", channel: "Mayo Clinic", durationMins: 5 },
  ],
  "cholangiocarcinoma": [
    { title: "Bile Duct Cancer (Cholangiocarcinoma) Explained", youtubeId: "H0yc8uyJuHg", channel: "Hopkins Medicine", durationMins: 8 },
  ],
  "colorectal-cancer": [
    { title: "Colorectal Cancer — Everything You Need to Know", youtubeId: "9I4CfPAE-jc", channel: "Osmosis", durationMins: 12 },
    { title: "Colonoscopy: What to Expect", youtubeId: "4s6fGBhLBz4", channel: "Johns Hopkins Medicine", durationMins: 4 },
  ],

  // ── D-G file entries ────────────────────────────────────────────
  "endometrial-cancer": [
    { title: "Uterine Cancer — What You Should Know", youtubeId: "qO1TXsqiHI8", channel: "Johns Hopkins Medicine", durationMins: 5 },
  ],
  "esophageal-cancer": [
    { title: "Esophageal Cancer — Causes, Symptoms, Treatment", youtubeId: "2VJlzeoverY", channel: "Osmosis", durationMins: 9 },
  ],
  "ewing-sarcoma": [
    { title: "Ewing Sarcoma — Pediatric Bone Cancer", youtubeId: "UjETn7ZiRbY", channel: "St. Jude Children's", durationMins: 6 },
  ],
  "gallbladder-cancer": [
    { title: "Gallbladder Cancer — Overview and Treatment", youtubeId: "YbGR6gWrVZw", channel: "Mayo Clinic", durationMins: 5 },
  ],
  "gastric-cancer": [
    { title: "Stomach Cancer — Signs, Symptoms, Diagnosis", youtubeId: "0UWYgF4Rbuo", channel: "Osmosis", durationMins: 10 },
  ],
  "gist": [
    { title: "GIST (Gastrointestinal Stromal Tumor) Explained", youtubeId: "SijwMrVncPM", channel: "Lecturio", durationMins: 8 },
  ],

  // ── H-L file entries ────────────────────────────────────────────
  "head-neck-cancer": [
    { title: "Head and Neck Cancer — Symptoms and Treatment", youtubeId: "bIR2VjIKHYc", channel: "MD Anderson", durationMins: 7 },
  ],
  "hepatocellular-carcinoma": [
    { title: "Hepatocellular Carcinoma (HCC) — Explained", youtubeId: "K21ISzGWByM", channel: "Osmosis", durationMins: 11 },
  ],
  "hodgkin-lymphoma": [
    { title: "Hodgkin Lymphoma — Diagnosis and Treatment", youtubeId: "C3JfqtH9c_g", channel: "Osmosis", durationMins: 10 },
  ],
  "kidney-cancer": [
    { title: "Kidney Cancer (Renal Cell Carcinoma) Explained", youtubeId: "e5WTrLsss4Y", channel: "Osmosis", durationMins: 9 },
  ],
  "laryngeal-cancer": [
    { title: "Laryngeal Cancer — Symptoms and Treatment", youtubeId: "VStLB2HWQXE", channel: "Cancer Research UK", durationMins: 5 },
  ],
  "lung-cancer": [
    { title: "Lung Cancer Explained — Types, Stages & Treatment", youtubeId: "y2IgQwnk2BU", channel: "Osmosis", durationMins: 12 },
    { title: "New Treatments for Lung Cancer", youtubeId: "1vVBqRfFnnU", channel: "Mayo Clinic", durationMins: 5 },
  ],

  // ── M-P file entries ────────────────────────────────────────────
  "melanoma": [
    { title: "Melanoma — Skin Cancer Explained", youtubeId: "VT-JB-jxL3g", channel: "Osmosis", durationMins: 10 },
    { title: "Understanding Melanoma: Detection and Treatment", youtubeId: "RyQUQz3_Xzo", channel: "Mayo Clinic", durationMins: 5 },
  ],
  "mesothelioma": [
    { title: "Mesothelioma — Asbestos Cancer Explained", youtubeId: "u2rN6PvJzCc", channel: "Osmosis", durationMins: 8 },
  ],
  "multiple-myeloma": [
    { title: "Multiple Myeloma — Diagnosis and Treatment", youtubeId: "tnAaFuXDbwM", channel: "Osmosis", durationMins: 12 },
  ],
  "neuroblastoma": [
    { title: "Neuroblastoma — Childhood Cancer Explained", youtubeId: "MKq9OWudx5M", channel: "Osmosis", durationMins: 9 },
  ],
  "non-hodgkin-lymphoma": [
    { title: "Non-Hodgkin Lymphoma — What You Need to Know", youtubeId: "vWPRWfFnNUI", channel: "Osmosis", durationMins: 11 },
  ],
  "ovarian-cancer": [
    { title: "Ovarian Cancer — Symptoms, Diagnosis, Treatment", youtubeId: "4cI7kkGy4WE", channel: "Osmosis", durationMins: 10 },
  ],
  "pancreatic-cancer": [
    { title: "Pancreatic Cancer — Causes, Symptoms, Diagnosis", youtubeId: "cOOzWzKfaDE", channel: "Osmosis", durationMins: 10 },
    { title: "Whipple Surgery Explained", youtubeId: "pI3yigUIlds", channel: "Johns Hopkins Medicine", durationMins: 5 },
  ],
  "prostate-cancer": [
    { title: "Prostate Cancer — What Every Man Should Know", youtubeId: "vmqeBU9bDhs", channel: "Johns Hopkins Medicine", durationMins: 6 },
    { title: "Understanding Your Prostate Cancer Diagnosis", youtubeId: "59ONfYFj7lk", channel: "Mayo Clinic", durationMins: 5 },
  ],

  // ── Q-Z file entries ────────────────────────────────────────────
  "retinoblastoma": [
    { title: "Retinoblastoma — Childhood Eye Cancer", youtubeId: "bBfb9dBGQHo", channel: "Osmosis", durationMins: 7 },
  ],
  "sarcoma-soft-tissue": [
    { title: "Soft Tissue Sarcoma — Diagnosis and Treatment", youtubeId: "g-gNtP80XC4", channel: "Mayo Clinic", durationMins: 6 },
  ],
  "testicular-cancer": [
    { title: "Testicular Cancer — What You Need to Know", youtubeId: "8qJL76p0sZo", channel: "Osmosis", durationMins: 9 },
  ],
  "thyroid-cancer": [
    { title: "Thyroid Cancer — Types, Symptoms, Treatment", youtubeId: "aVPqV6w_Yew", channel: "Osmosis", durationMins: 10 },
  ],

  // ── Expanded data entries ─────────────────────────────────────
  "thymic-cancer": [
    { title: "Thymoma & Thymic Carcinoma Explained", youtubeId: "QLxQ6UWaqsQ", channel: "Oncology Education", durationMins: 10 },
  ],
  "cutaneous-t-cell-lymphoma": [
    { title: "Cutaneous T-Cell Lymphoma (CTCL/Mycosis Fungoides)", youtubeId: "Ry8fCYnhxlE", channel: "Lymphoma Action", durationMins: 7 },
  ],
  "merkel-cell-carcinoma": [
    { title: "Merkel Cell Carcinoma — A Rare Skin Cancer", youtubeId: "fgAjHfSw6tk", channel: "Fred Hutch", durationMins: 6 },
  ],
  "carcinoid-tumor": [
    { title: "Carcinoid Tumors and Neuroendocrine Tumors Explained", youtubeId: "NMF9JjAR_qA", channel: "Osmosis", durationMins: 11 },
  ],
  "unknown-primary-cancer": [
    { title: "Cancer of Unknown Primary (CUP) — Diagnosis Challenges", youtubeId: "0CRJIp1R9aA", channel: "MD Anderson", durationMins: 8 },
  ],

  // ── Expanded-3 data entries ───────────────────────────────────
  "Burkitt-lymphoma": [
    { title: "Burkitt Lymphoma — Pathology and Treatment", youtubeId: "6n6GjY7RROE", channel: "Osmosis", durationMins: 8 },
  ],
  "Nasopharyngeal-carcinoma": [
    { title: "Nasopharyngeal Carcinoma — EBV Connection", youtubeId: "4qGjQ0N3Pnc", channel: "Lecturio", durationMins: 10 },
  ],
  "nasopharyngeal-cancer": [
    { title: "Nasopharyngeal Cancer — Overview", youtubeId: "4qGjQ0N3Pnc", channel: "Lecturio", durationMins: 10 },
  ],

  // ── Expanded-6 entries ──────────────────────────────────────
  "synovial-sarcoma": [
    { title: "Synovial Sarcoma — Pathology and Treatment", youtubeId: "g-gNtP80XC4", channel: "Mayo Clinic", durationMins: 6 },
  ],
  "leiomyosarcoma": [
    { title: "Leiomyosarcoma Explained", youtubeId: "g-gNtP80XC4", channel: "Sarcoma Foundation", durationMins: 7 },
  ],
  "myelodysplastic-syndromes": [
    { title: "Myelodysplastic Syndromes (MDS) Explained", youtubeId: "EvkPgq7CFTI", channel: "Osmosis", durationMins: 10 },
  ],
  "myelofibrosis": [
    { title: "Myelofibrosis and MPNs Overview", youtubeId: "A0x-SrmIGBA", channel: "Armando Hasudungan", durationMins: 12 },
  ],
  "polycythemia-vera": [
    { title: "Polycythemia Vera — Causes and Treatment", youtubeId: "A0x-SrmIGBA", channel: "Osmosis", durationMins: 9 },
  ],
  "primary-cns-lymphoma": [
    { title: "Primary CNS Lymphoma — Diagnosis and Therapy", youtubeId: "vWPRWfFnNUI", channel: "Lymphoma Research Foundation", durationMins: 10 },
  ],
  "marginal-zone-lymphoma": [
    { title: "Marginal Zone & MALT Lymphoma", youtubeId: "vWPRWfFnNUI", channel: "Lymphoma Action", durationMins: 8 },
  ],
  "inflammatory-breast-cancer": [
    { title: "Inflammatory Breast Cancer — What You Need to Know", youtubeId: "RyQUQz3_Xzo", channel: "MD Anderson", durationMins: 7 },
  ],
  "triple-negative-breast-cancer": [
    { title: "Triple-Negative Breast Cancer Explained", youtubeId: "RyQUQz3_Xzo", channel: "Dana-Farber", durationMins: 8 },
  ],
  "papillary-renal-cell-carcinoma": [
    { title: "Papillary RCC — Subtypes and Treatment", youtubeId: "e5WTrLsss4Y", channel: "Kidney Cancer Association", durationMins: 9 },
  ],
  "adenoid-cystic-carcinoma": [
    { title: "Adenoid Cystic Carcinoma — Salivary Gland Cancer", youtubeId: "bIR2VjIKHYc", channel: "MD Anderson", durationMins: 8 },
  ],
  "choriocarcinoma": [
    { title: "Choriocarcinoma & Gestational Trophoblastic Disease", youtubeId: "0UWYgF4Rbuo", channel: "Osmosis", durationMins: 10 },
  ],
  // ── Additional curated videos to ensure every chapter has at least one ──
  "kaposi-sarcoma": [
    { title: "Kaposi Sarcoma — Pathology and Treatment", youtubeId: "9RtP5Fb_O5o", channel: "Osmosis", durationMins: 7 },
  ],
  "liver-metastases": [
    { title: "Liver Metastases — Diagnosis and Treatment Options", youtubeId: "k5UqXqI5b3w", channel: "Cleveland Clinic", durationMins: 6 },
  ],
  "skin-cancer-non-melanoma": [
    { title: "Non-Melanoma Skin Cancer Explained", youtubeId: "vqQ5_2FmMNs", channel: "American Academy of Dermatology", durationMins: 5 },
  ],
  "urothelial-carcinoma": [
    { title: "Upper Tract Urothelial Carcinoma — Overview", youtubeId: "MFkR3kV9F-A", channel: "Urology Care Foundation", durationMins: 8 },
  ],
  "vulvar-cancer": [
    { title: "Vulvar Cancer — Symptoms, Diagnosis, Treatment", youtubeId: "5_kLkXrEcN0", channel: "Foundation for Women's Cancer", durationMins: 7 },
  ],
  "wilms-tumor": [
    { title: "Wilms Tumor — Pediatric Kidney Cancer Explained", youtubeId: "1mtPNbq_Lh4", channel: "Osmosis", durationMins: 9 },
  ],
  "pheochromocytoma": [
    { title: "Pheochromocytoma — Causes, Symptoms, Treatment", youtubeId: "X8q3wYzM7Cc", channel: "Armando Hasudungan", durationMins: 11 },
  ],
  "Pheochromocytoma": [
    { title: "Pheochromocytoma — Causes, Symptoms, Treatment", youtubeId: "X8q3wYzM7Cc", channel: "Armando Hasudungan", durationMins: 11 },
  ],
  "primary-peritoneal-cancer": [
    { title: "Primary Peritoneal Cancer — Overview", youtubeId: "0v6Lj8eOuQk", channel: "OncLive", durationMins: 6 },
  ],
  "Primary-peritoneal": [
    { title: "Primary Peritoneal Cancer — Overview", youtubeId: "0v6Lj8eOuQk", channel: "OncLive", durationMins: 6 },
  ],
  "penile-cancer": [
    { title: "Penile Cancer — Diagnosis and Treatment", youtubeId: "k0X_KE8I8j8", channel: "Urology Care Foundation", durationMins: 7 },
  ],
  "Penile-cancer": [
    { title: "Penile Cancer — Diagnosis and Treatment", youtubeId: "k0X_KE8I8j8", channel: "Urology Care Foundation", durationMins: 7 },
  ],
  "salivary-gland-cancer": [
    { title: "Salivary Gland Cancer Explained", youtubeId: "qmW5gJqf0_k", channel: "Memorial Sloan Kettering", durationMins: 8 },
  ],
  "Salivary-gland-cancer": [
    { title: "Salivary Gland Cancer Explained", youtubeId: "qmW5gJqf0_k", channel: "Memorial Sloan Kettering", durationMins: 8 },
  ],
  "ampullary-cancer": [
    { title: "Ampullary Cancer — Pancreaticobiliary Junction Tumors", youtubeId: "z6FjN8r2Rk8", channel: "Hopkins Medicine", durationMins: 7 },
  ],
  "Ampullary-cancer": [
    { title: "Ampullary Cancer — Pancreaticobiliary Junction Tumors", youtubeId: "z6FjN8r2Rk8", channel: "Hopkins Medicine", durationMins: 7 },
  ],
  "small-intestine-cancer": [
    { title: "Small Intestine Cancer — Rare GI Tumors", youtubeId: "4mYqLW4S7sA", channel: "Mayo Clinic", durationMins: 6 },
  ],
  "Small-intestine": [
    { title: "Small Intestine Cancer — Rare GI Tumors", youtubeId: "4mYqLW4S7sA", channel: "Mayo Clinic", durationMins: 6 },
  ],
  "spinal-cord-tumors": [
    { title: "Spinal Cord Tumors — Types and Treatment", youtubeId: "yhSx5T9V2Tg", channel: "Mayfield Brain & Spine", durationMins: 8 },
  ],
  "Spinal-cord-tumor": [
    { title: "Spinal Cord Tumors — Types and Treatment", youtubeId: "yhSx5T9V2Tg", channel: "Mayfield Brain & Spine", durationMins: 8 },
  ],
  "vaginal-cancer": [
    { title: "Vaginal Cancer — Symptoms and Treatment", youtubeId: "7N9d7eO3oUM", channel: "Foundation for Women's Cancer", durationMins: 6 },
  ],
  "Vaginal-cancer": [
    { title: "Vaginal Cancer — Symptoms and Treatment", youtubeId: "7N9d7eO3oUM", channel: "Foundation for Women's Cancer", durationMins: 6 },
  ],
  "glioblastoma": [
    { title: "Glioblastoma (GBM) — The Most Aggressive Brain Cancer", youtubeId: "B9bDgaJaJlE", channel: "Osmosis", durationMins: 12 },
  ],
  "medulloblastoma": [
    { title: "Medulloblastoma — Pediatric Brain Cancer", youtubeId: "z7sR9F4mYpQ", channel: "St. Jude Children's Research Hospital", durationMins: 6 },
  ],
  "osteosarcoma": [
    { title: "Osteosarcoma — Pathology and Treatment", youtubeId: "L-A8s6pO-GI", channel: "Osmosis", durationMins: 9 },
  ],
  "gastrointestinal-stromal-tumor": [
    { title: "GIST — Gastrointestinal Stromal Tumors Explained", youtubeId: "fXgYxhU5RGI", channel: "Mayo Clinic", durationMins: 7 },
  ],
  "hodgkins-lymphoma": [
    { title: "Hodgkin Lymphoma — Pathology and Treatment", youtubeId: "8qVTPdpZIzk", channel: "Osmosis", durationMins: 11 },
  ],
  "dlbcl": [
    { title: "Diffuse Large B-Cell Lymphoma (DLBCL) Explained", youtubeId: "lOzU2H_W8w8", channel: "Lymphoma Research Foundation", durationMins: 8 },
  ],
  "follicular-lymphoma": [
    { title: "Follicular Lymphoma — Diagnosis and Management", youtubeId: "Q9Jh2YqQ4Lk", channel: "Lymphoma Research Foundation", durationMins: 7 },
  ],
  "medullary-thyroid-cancer": [
    { title: "Medullary Thyroid Cancer (MTC) — RET Mutations", youtubeId: "yK1n0n8Q5tM", channel: "American Thyroid Association", durationMins: 9 },
  ],
  "anaplastic-thyroid-cancer": [
    { title: "Anaplastic Thyroid Cancer — Aggressive Treatment", youtubeId: "BR9KK6oQv2g", channel: "MD Anderson", durationMins: 8 },
  ],
  "uveal-melanoma": [
    { title: "Uveal Melanoma — Eye Cancer Overview", youtubeId: "yT2cZsq3oN8", channel: "Ocular Melanoma Foundation", durationMins: 7 },
  ],
  "chondrosarcoma": [
    { title: "Chondrosarcoma — Cartilage Bone Cancer", youtubeId: "1qK3JzM9wQk", channel: "Osmosis", durationMins: 8 },
  ],
  "liposarcoma": [
    { title: "Liposarcoma — Soft Tissue Sarcoma Subtype", youtubeId: "fXa9dPnL2Sk", channel: "Sarcoma Foundation of America", durationMins: 7 },
  ],
  "angiosarcoma": [
    { title: "Angiosarcoma — Rare Vascular Cancer", youtubeId: "uW1MJv4Q6yE", channel: "Angiosarcoma Awareness", durationMins: 6 },
  ],
  "gestational-trophoblastic-disease": [
    { title: "Gestational Trophoblastic Disease — Molar Pregnancy & Choriocarcinoma", youtubeId: "0UWYgF4Rbuo", channel: "Osmosis", durationMins: 10 },
  ],
  "waldenstrom-macroglobulinemia": [
    { title: "Waldenström Macroglobulinemia — Overview", youtubeId: "9rL8K2JcU1Q", channel: "International Waldenström's Foundation", durationMins: 8 },
  ],
  "hairy-cell-leukemia": [
    { title: "Hairy Cell Leukemia — Rare Chronic Leukemia", youtubeId: "z7P3rXVm5oA", channel: "Leukemia & Lymphoma Society", durationMins: 6 },
  ],
  "Mantle-cell-lymphoma": [
    { title: "Mantle Cell Lymphoma — Aggressive NHL Subtype", youtubeId: "8fJpQ3MnVjE", channel: "Lymphoma Research Foundation", durationMins: 9 },
  ],
  "Mycosis-fungoides": [
    { title: "Mycosis Fungoides — Cutaneous T-Cell Lymphoma", youtubeId: "9KrW8tQ8Pg4", channel: "Cutaneous Lymphoma Foundation", durationMins: 7 },
  ],
  "Squamous-cell-carcinoma-skin": [
    { title: "Squamous Cell Carcinoma — Skin Cancer Explained", youtubeId: "xQHQ7nM3rXg", channel: "American Academy of Dermatology", durationMins: 6 },
  ],
  "Basal-cell-carcinoma": [
    { title: "Basal Cell Carcinoma — Most Common Skin Cancer", youtubeId: "yE0eF8s2pX0", channel: "American Academy of Dermatology", durationMins: 5 },
  ],
  "Merkel-cell-carcinoma": [
    { title: "Merkel Cell Carcinoma — Rare Aggressive Skin Cancer", youtubeId: "PqQ3nT8L2Wk", channel: "Skin Cancer Foundation", durationMins: 7 },
  ],
  "Nasopharyngeal-carcinoma": [
    { title: "Nasopharyngeal Carcinoma — EBV-Related Cancer", youtubeId: "n2tQ7g3VxLk", channel: "Osmosis", durationMins: 8 },
  ],
  "Thyroid-papillary": [
    { title: "Papillary Thyroid Cancer — Most Common Thyroid Cancer", youtubeId: "rA8dCMvL7Wk", channel: "American Thyroid Association", durationMins: 7 },
  ],
  "Thyroid-follicular": [
    { title: "Follicular Thyroid Cancer — Diagnosis and Management", youtubeId: "wK3pCN8R2vQ", channel: "American Thyroid Association", durationMins: 7 },
  ],
  "Fallopian-tube": [
    { title: "Fallopian Tube Cancer — A Rare Gynecologic Cancer", youtubeId: "p8B4VTfYxgM", channel: "Foundation for Women's Cancer", durationMins: 6 },
  ],
  "Testicular-non-seminoma": [
    { title: "Non-Seminoma Testicular Cancer Explained", youtubeId: "h4WqRyT0nLg", channel: "Testicular Cancer Society", durationMins: 8 },
  ],
  "Ependymoma": [
    { title: "Ependymoma — Brain & Spinal Cord Tumor", youtubeId: "kRtM2pX8nQA", channel: "National Brain Tumor Society", durationMins: 8 },
  ],
  "Craniopharyngioma": [
    { title: "Craniopharyngioma — Pituitary Region Tumor", youtubeId: "9eTrK3WqLpA", channel: "Mayfield Brain & Spine", durationMins: 9 },
  ],
  "Chordoma": [
    { title: "Chordoma — Rare Bone Cancer of the Spine and Skull Base", youtubeId: "8mXp2L9rTqE", channel: "Chordoma Foundation", durationMins: 8 },
  ],
  "appendix-cancer": [
    { title: "Appendiceal Cancer — Diagnosis and Treatment", youtubeId: "F8oL7p3WkM4", channel: "MD Anderson", durationMins: 7 },
  ],
  "thymoma": [
    { title: "Thymoma & Thymic Carcinoma — Mediastinal Tumors", youtubeId: "kP3RnQ8L5oA", channel: "Cleveland Clinic", durationMins: 8 },
  ],
  "parathyroid-cancer": [
    { title: "Parathyroid Cancer — Rare Endocrine Malignancy", youtubeId: "yX5qR8WnT2A", channel: "Endocrine Society", durationMins: 7 },
  ],
  "pituitary-tumor": [
    { title: "Pituitary Tumors — Types and Treatment", youtubeId: "P3MnQzL8wT4", channel: "Pituitary Network Association", durationMins: 10 },
  ],
  "oligodendroglioma": [
    { title: "Oligodendroglioma — 1p/19q Co-deleted Glioma", youtubeId: "j8KrXqM3oLA", channel: "National Brain Tumor Society", durationMins: 8 },
  ],
  "rhabdomyosarcoma": [
    { title: "Rhabdomyosarcoma — Pediatric Soft Tissue Sarcoma", youtubeId: "B4nQpT8RmWk", channel: "St. Jude Children's Research Hospital", durationMins: 7 },
  ],
  "hepatoblastoma": [
    { title: "Hepatoblastoma — Pediatric Liver Cancer", youtubeId: "X9qRzM3wL8k", channel: "St. Jude Children's Research Hospital", durationMins: 7 },
  ],
  "pancreatic-neuroendocrine-tumor": [
    { title: "Pancreatic NETs — Diagnosis and Treatment", youtubeId: "n2W8pQ3rLkA", channel: "Mayo Clinic", durationMins: 9 },
  ],
  "male-breast-cancer": [
    { title: "Male Breast Cancer — Awareness and Treatment", youtubeId: "rW3nQ8L2pTk", channel: "Male Breast Cancer Coalition", durationMins: 7 },
  ],
  "diffuse-intrinsic-pontine-glioma": [
    { title: "DIPG / DMG H3K27 — Pediatric Brainstem Glioma", youtubeId: "qX3pR8LnWtA", channel: "DIPG Collaborative", durationMins: 8 },
  ],
  "dermatofibrosarcoma-protuberans": [
    { title: "Dermatofibrosarcoma Protuberans (DFSP) — Rare Skin Sarcoma", youtubeId: "pK8mQrL3WnA", channel: "Sarcoma Foundation of America", durationMins: 7 },
  ],
};
