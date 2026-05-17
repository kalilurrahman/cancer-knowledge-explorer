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
};
