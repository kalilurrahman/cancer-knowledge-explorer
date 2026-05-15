# Cancer Knowledge Explorer — Implementation Guide

**Quick Start for Integrating Improvements**

---

## TABLE OF CONTENTS

1. [Disclaimer Components](#1-disclaimer-components)
2. [Video Integration](#2-video-integration)
3. [Data Structure Updates](#3-data-structure-updates)
4. [React Component Examples](#4-react-component-examples)
5. [Deployment Checklist](#5-deployment-checklist)

---

## 1. DISCLAIMER COMPONENTS

### 1.1 Footer Disclaimer (Copy-Paste Ready)

**File:** `src/components/MedicalDisclaimerFooter.tsx`

```typescript
import React from 'react';
import { AlertCircle } from 'lucide-react';

export const MedicalDisclaimerFooter: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-50 to-orange-50 border-t-4 border-amber-300 px-4 py-6 mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-4 items-start mb-4">
          <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" aria-label="Important" />
          <div className="flex-1">
            <h3 className="font-bold text-amber-900 mb-2">Medical Disclaimer</h3>
            <p className="text-sm text-amber-800 mb-3 leading-relaxed">
              <strong>This website is a curated educational resource</strong> for general information about cancer types, 
              symptoms, diagnostics, and treatment options. It is <strong>NOT a substitute</strong> for professional medical 
              advice, diagnosis, or treatment.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-amber-800 mb-3">
              <div>
                <h4 className="font-semibold mb-2">What This Site Provides:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>General cancer information from validated sources</li>
                  <li>Common symptoms and diagnostic procedures</li>
                  <li>Overview of treatment modalities</li>
                  <li>Links to accredited medical institutions</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Always Consult a Healthcare Professional:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>For diagnosis:</strong> See an MD/DO or board-certified oncologist</li>
                  <li><strong>For treatment:</strong> Work with your oncology team</li>
                  <li><strong>For cancer info:</strong> Call <a href="tel:1-800-4-CANCER" className="underline hover:text-amber-900 font-semibold">1-800-4-CANCER</a> (NCI)</li>
                  <li><strong>For emergencies:</strong> Call 911</li>
                </ul>
              </div>
            </div>

            <p className="text-xs text-amber-700 font-semibold">
              Content sourced from NCI, ACS, Mayo Clinic, Cleveland Clinic, and peer-reviewed literature. 
              <a href="#sources" className="underline hover:text-amber-900 ml-1">View sources</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
```

### 1.2 Modal Disclaimer (First-Visit Popup)

**File:** `src/components/DisclaimerModal.tsx`

```typescript
import React, { useState, useEffect } from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface DisclaimerModalProps {
  isOpen: boolean;
  onAccept: () => void;
}

export const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ isOpen, onAccept }) => {
  const [hasAccepted, setHasAccepted] = useState(false);

  useEffect(() => {
    // Check if user has dismissed this before (localStorage)
    const dismissed = localStorage.getItem('ck-explorer-disclaimer-accepted');
    if (dismissed) {
      setHasAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('ck-explorer-disclaimer-accepted', 'true');
    setHasAccepted(true);
    onAccept();
  };

  if (hasAccepted || !isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-red-50 to-orange-50 p-6 border-b-2 border-red-200 flex justify-between items-start">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-7 h-7 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Important Medical Disclaimer</h2>
              <p className="text-sm text-gray-600 mt-1">Please read before using this site</p>
            </div>
          </div>
          <button
            onClick={handleAccept}
            className="text-gray-400 hover:text-gray-600 transition"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <p className="text-red-900 font-semibold">
              This website is an educational resource, NOT a substitute for professional medical advice.
            </p>
          </div>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What This Site Offers:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>General cancer information from validated public sources (NCI, ACS, Mayo Clinic, etc.)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>Information about common symptoms and diagnostic procedures</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>Overview of treatment modalities (surgery, chemotherapy, radiation, immunotherapy)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>Links to reputable medical institutions and patient resources</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span>Educational videos from accredited sources</span>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What This Site Does NOT Do:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">✗</span>
                <span>Provide personalized medical advice or treatment recommendations</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">✗</span>
                <span>Make or confirm diagnoses (symptoms listed ≠ diagnosis)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">✗</span>
                <span>Replace consultation with a licensed oncologist</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">✗</span>
                <span>Assess clinical trial eligibility</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">✗</span>
                <span>Provide emergency medical guidance</span>
              </li>
            </ul>
          </section>

          <section className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Always Consult a Healthcare Professional:</h3>
            <ul className="space-y-2 text-blue-900 text-sm">
              <li>
                <strong>For diagnosis:</strong> See a medical doctor (MD), doctor of osteopathic medicine (DO), 
                or board-certified oncologist
              </li>
              <li>
                <strong>For treatment decisions:</strong> Work with your oncology team including surgical, 
                radiation, and medical oncologists
              </li>
              <li>
                <strong>For clinical trial information:</strong> Ask your physician or contact 
                <a href="tel:1-800-4-CANCER" className="underline font-semibold ml-1">1-800-4-CANCER (1-800-422-6237)</a>
              </li>
              <li>
                <strong>For emergency symptoms:</strong> Call 911 or go to your nearest emergency department
              </li>
            </ul>
          </section>

          <section className="text-sm text-gray-600 border-t pt-4">
            <p className="mb-2">
              <strong>Content Source:</strong> Information on this site is curated from peer-reviewed literature 
              and validated public resources including:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-xs">
              <li>National Cancer Institute (cancer.gov)</li>
              <li>American Cancer Society (cancer.org)</li>
              <li>Mayo Clinic</li>
              <li>Cleveland Clinic</li>
              <li>Memorial Sloan Kettering Cancer Center</li>
              <li>SEER Cancer Registry (incidence & survival data)</li>
            </ul>
          </section>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t p-6 flex gap-3">
          <button
            onClick={handleAccept}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
          >
            I Understand & Agree
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 rounded-lg transition"
          >
            Continue (View Site)
          </button>
        </div>
      </div>
    </div>
  );
};
```

### 1.3 Inline Disclaimer (Per Cancer Entry)

**File:** `src/components/CancerInlineDisclaimer.tsx`

```typescript
import React from 'react';
import { Info } from 'lucide-react';

interface CancerInlineDisclaimerProps {
  cancerType: string;
  lastVerified?: string;
  confidenceScore?: number;
}

export const CancerInlineDisclaimer: React.FC<CancerInlineDisclaimerProps> = ({
  cancerType,
  lastVerified,
  confidenceScore,
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-4 my-6 rounded-r">
      <div className="flex gap-3">
        <Info className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
        <div className="flex-1 text-sm text-blue-900">
          <p className="font-semibold mb-2">
            This {cancerType} information is for educational purposes only.
          </p>
          <p className="mb-3">
            Medical decisions regarding diagnosis, treatment, or clinical trial participation must be made 
            in consultation with a licensed, board-certified oncologist and your healthcare team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 text-xs mt-3 pt-3 border-t border-blue-200">
            {lastVerified && (
              <div>
                <span className="font-semibold">Last Verified:</span> {lastVerified}
              </div>
            )}
            {confidenceScore && (
              <div>
                <span className="font-semibold">Content Quality:</span>
                <div className="w-32 bg-blue-200 rounded-full h-1.5 mt-1">
                  <div
                    className="bg-blue-700 h-1.5 rounded-full"
                    style={{ width: `${confidenceScore}%` }}
                  />
                </div>
                {confidenceScore}% verified
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
```

---

## 2. VIDEO INTEGRATION

### 2.1 Video Data Types

**File:** `src/types/video.ts`

```typescript
export interface CancerVideo {
  id: string;
  cancerTypeId: string;
  
  // Basic Info
  title: string;
  description: string;
  duration: number; // seconds
  
  // Video Source
  source: {
    platform: 'youtube' | 'vimeo' | 'institutional' | 'external';
    youtubeId?: string;
    vimeoId?: string;
    externalUrl?: string;
  };
  
  // Attribution
  organization: {
    name: string; // 'National Cancer Institute', 'Mayo Clinic', etc.
    tier: 1 | 2 | 3 | 4; // Validation tier (see section 3.1 of main plan)
    logo?: string;
  };
  
  // Categorization
  category: 
    | 'symptoms'
    | 'diagnosis'
    | 'treatment'
    | 'surgery'
    | 'chemotherapy'
    | 'radiation'
    | 'immunotherapy'
    | 'patient_story'
    | 'survivor'
    | 'recovery'
    | 'supportive_care'
    | 'clinical_trials'
    | 'caregiver_support';
  
  targetAudience: 'patients' | 'caregivers' | 'general_public' | 'healthcare_providers';
  
  // Metadata
  uploadedDate: string; // ISO date
  lastVerified: string; // When was video content verified?
  verifiedBy: string; // Who verified?
  
  // Accessibility
  accessibility: {
    subtitles: boolean;
    closedCaptions: boolean;
    transcriptUrl?: string;
    audioDescription: boolean;
    isAccessibilityOptimized: boolean;
  };
  
  // Content Warnings
  contentWarnings?: string[]; // e.g., ['discusses hair loss', 'surgical content']
  
  // Stats (optional)
  viewCount?: number;
  likeCount?: number;
  rating?: number; // 1-5
  
  // Metadata
  language: string; // 'en', 'es', 'fr', etc.
  tags: string[];
}
```

### 2.2 Video Component

**File:** `src/components/CancerVideoCard.tsx`

```typescript
import React, { useState } from 'react';
import { Play, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { CancerVideo } from '../types/video';

interface CancerVideoCardProps {
  video: CancerVideo;
  onPlay?: (videoId: string) => void;
}

export const CancerVideoCard: React.FC<CancerVideoCardProps> = ({ video, onPlay }) => {
  const [showDetails, setShowDetails] = useState(false);

  const getTierColor = (tier: number) => {
    const colors = {
      1: 'bg-green-100 text-green-800',
      2: 'bg-blue-100 text-blue-800',
      3: 'bg-amber-100 text-amber-800',
      4: 'bg-gray-100 text-gray-800',
    };
    return colors[tier] || 'bg-gray-100 text-gray-800';
  };

  const getTierLabel = (tier: number) => {
    const labels = {
      1: 'Highest Quality',
      2: 'Institutional',
      3: 'Patient Support',
      4: 'Educational',
    };
    return labels[tier] || 'Unknown';
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      {/* Thumbnail */}
      <div className="relative bg-gray-900 aspect-video flex items-center justify-center cursor-pointer group"
        onClick={() => onPlay?.(video.id)}>
        {video.source.youtubeId && (
          <img
            src={`https://img.youtube.com/vi/${video.source.youtubeId}/mqdefault.jpg`}
            alt={video.title}
            className="w-full h-full object-cover group-hover:opacity-75 transition"
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition flex items-center justify-center">
          <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition" />
        </div>
        
        {/* Duration */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
          {Math.floor(video.duration / 60)}:{String(video.duration % 60).padStart(2, '0')}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start gap-2 mb-2">
          <span className={`text-xs font-semibold px-2 py-1 rounded ${getTierColor(video.organization.tier)}`}>
            {getTierLabel(video.organization.tier)}
          </span>
          {video.accessibility.subtitles && (
            <span className="text-xs font-semibold px-2 py-1 rounded bg-purple-100 text-purple-800">
              CC
            </span>
          )}
        </div>

        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 cursor-pointer"
          onClick={() => onPlay?.(video.id)}>
          {video.title}
        </h3>

        <p className="text-xs text-gray-600 mb-3">{video.organization.name}</p>

        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
          <span className="inline-block bg-gray-100 px-2 py-1 rounded">
            {video.category.replace('_', ' ')}
          </span>
          <span className="inline-block bg-gray-100 px-2 py-1 rounded">
            For {video.targetAudience.replace('_', ' ')}
          </span>
        </div>

        {video.contentWarnings && video.contentWarnings.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded p-2 mb-3">
            <div className="flex gap-2 text-xs">
              <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
              <div className="text-amber-800">
                <strong>Content includes:</strong> {video.contentWarnings.join(', ')}
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <span>Verified {new Date(video.lastVerified).toLocaleDateString()}</span>
          <CheckCircle className="w-4 h-4 text-green-600" />
        </div>

        {/* Details Toggle */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full text-center text-xs text-blue-600 hover:text-blue-700 font-semibold mb-3"
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>

        {showDetails && (
          <div className="border-t pt-3 text-xs text-gray-700 space-y-2 mb-3">
            <p><strong>Description:</strong> {video.description}</p>
            {video.transcriptUrl && (
              <p>
                <a href={video.transcriptUrl} target="_blank" rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  Read Transcript
                </a>
              </p>
            )}
          </div>
        )}

        <button
          onClick={() => onPlay?.(video.id)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
        >
          Watch Video
        </button>
      </div>
    </div>
  );
};
```

### 2.3 Video Grid Component

**File:** `src/components/CancerVideosSection.tsx`

```typescript
import React, { useState } from 'react';
import { CancerVideo } from '../types/video';
import { CancerVideoCard } from './CancerVideoCard';

interface CancerVideosSectionProps {
  cancerTypeId: string;
  videos: CancerVideo[];
  onPlay?: (videoId: string) => void;
}

export const CancerVideosSection: React.FC<CancerVideosSectionProps> = ({
  cancerTypeId,
  videos,
  onPlay,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(videos.map(v => v.category)));
  
  const filteredVideos = selectedCategory
    ? videos.filter(v => v.category === selectedCategory)
    : videos;

  if (videos.length === 0) {
    return null;
  }

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Educational Videos</h2>

      {/* Category Filter */}
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-3">Filter by topic:</p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3 py-2 rounded text-sm font-semibold transition ${
              selectedCategory === null
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Videos ({videos.length})
          </button>
          {categories.map(cat => {
            const count = videos.filter(v => v.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 rounded text-sm font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.replace('_', ' ')} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map(video => (
          <CancerVideoCard
            key={video.id}
            video={video}
            onPlay={onPlay}
          />
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600">No videos available for this category.</p>
        </div>
      )}
    </section>
  );
};
```

---

## 3. DATA STRUCTURE UPDATES

### 3.1 Updated Cancer Type Interface

**File:** `src/types/cancer.ts`

```typescript
import { CancerVideo } from './video';

export type CancerCategory = 
  | 'hematologic'
  | 'solid_tumor'
  | 'sarcoma'
  | 'skin'
  | 'neuroendocrine'
  | 'other';

export interface CancerEntry {
  // Basic Identification
  id: string;
  name: string;
  commonNames?: string[]; // e.g., 'Non-Hodgkin Lymphoma' -> ['NHL', 'B-cell lymphoma']
  icdCode: string; // ICD-10 code
  category: CancerCategory;

  // Epidemiology
  epidemiology: {
    incidencePerHundredK: number; // per 100,000/year
    mortalityPerHundredK: number;
    medianAgeAtDiagnosis: number;
    prevalence: string; // e.g., "1 in 50 people"
    primaryRiskFactors: string[];
    geneticSyndromes?: string[]; // e.g., BRCA1/2 for breast cancer
  };

  // Symptoms
  symptoms: {
    early: string[]; // Early stage symptoms
    advanced: string[]; // Late stage symptoms
    notes?: string; // Additional context
  };

  // Diagnosis
  diagnostics: {
    screeningTests?: string[]; // If applicable
    confirmationTests: string[];
    stagingWorkup: string[];
    biomarkers?: string[]; // Molecular/genetic markers
  };

  // Staging
  staging: {
    system: 'TNM' | 'other'; // Tumor-Node-Metastasis
    stages: Array<{
      stage: string; // '0', 'I', 'II', 'III', 'IV'
      description: string;
      definition: string;
    }>;
  };

  // Treatment
  treatments: {
    standard: Array<{
      name: string; // 'Surgery', 'Chemotherapy', etc.
      indications: string; // When is it used?
      procedures?: string[]; // Specific procedures/drugs
      sideEffects?: string[];
      successRates?: string; // Per stage if applicable
    }>;
    investigational?: string[];
  };

  // Survival Data
  survival: {
    dataSource: string; // 'SEER', 'NCDB', etc.
    lastUpdated: string; // ISO date
    rates: Array<{
      stage: string;
      oneYear?: number; // percentage
      fiveYear?: number;
      tenYear?: number;
      medianSurvival?: string; // e.g., "24 months"
    }>;
    disclaimers?: string[];
  };

  // Credibility & Verification
  verification: {
    verifiedDate: string; // ISO date
    verifiedBy: string; // Name or credential
    nextVerificationDue: string; // ISO date
    confidenceScore: number; // 0-100
    confidenceRationale?: string;
    
    sources: Array<{
      sourceName: string;
      sourceType: 'nci' | 'acs' | 'clinic' | 'registry' | 'literature' | 'other';
      url?: string;
      lastAccessedDate: string;
      dataPointsCovered: string[]; // Which facts came from this source
    }>;
    
    knownGaps?: string[]; // Things we DON'T know
    conflictResolutions?: Array<{
      dataPoint: string;
      sourceA: { name: string; value: string };
      sourceB: { name: string; value: string };
      resolution: string;
    }>;
  };

  // Media Resources
  videos: CancerVideo[];

  // External Resources
  externalLinks: Array<{
    label: string;
    url: string;
    source: string; // 'NCI', 'ACS', 'Mayo', etc.
    type: 'patient_education' | 'clinical_reference' | 'clinical_trials' | 'support_group';
  }>;

  // Related Information
  relatedCancers: string[]; // IDs of related cancer entries
  metadata: {
    createdDate: string;
    lastModifiedDate: string;
    createdBy?: string;
    lastModifiedBy?: string;
    viewCount?: number;
  };
}
```

### 3.2 Sample Cancer Data Entry (JSON)

**File:** `src/data/cancers/breast-cancer.json`

```json
{
  "id": "breast-cancer",
  "name": "Breast Cancer",
  "commonNames": ["Invasive Breast Cancer", "IDC", "ILC"],
  "icdCode": "C50",
  "category": "solid_tumor",

  "epidemiology": {
    "incidencePerHundredK": 128.6,
    "mortalityPerHundredK": 20.3,
    "medianAgeAtDiagnosis": 62,
    "prevalence": "About 1 in 8 women",
    "primaryRiskFactors": [
      "Female sex",
      "Age (risk increases with age)",
      "Family history",
      "BRCA1/BRCA2 mutations",
      "Estrogen/hormone therapy",
      "Alcohol use",
      "Obesity"
    ],
    "geneticSyndromes": ["BRCA1 mutation", "BRCA2 mutation", "Li-Fraumeni syndrome"]
  },

  "symptoms": {
    "early": [
      "Lump or mass in the breast",
      "Breast pain or thickening",
      "Nipple discharge",
      "Skin dimpling or puckering",
      "Redness or scaling"
    ],
    "advanced": [
      "Swelling of the entire breast",
      "Skin changes resembling orange peel",
      "Bone pain",
      "Shortness of breath",
      "Liver pain or abdominal swelling",
      "Headaches"
    ],
    "notes": "Many breast cancers are asymptomatic and found only through screening mammography."
  },

  "diagnostics": {
    "screeningTests": ["Mammography", "Clinical breast exam", "Breast MRI (high-risk patients)"],
    "confirmationTests": ["Breast biopsy", "Pathology examination"],
    "stagingWorkup": [
      "Chest CT or X-ray",
      "Liver ultrasound or CT",
      "Bone scan or PET-CT",
      "Lymph node biopsy (sentinel or axillary)"
    ],
    "biomarkers": ["ER/PR status", "HER2 status", "Ki-67 index", "Genomic tests (Oncotype, MammaPrint)"]
  },

  "staging": {
    "system": "TNM",
    "stages": [
      {
        "stage": "0",
        "description": "In situ disease",
        "definition": "Abnormal cells confined to breast ducts or lobules; has not invaded surrounding tissue"
      },
      {
        "stage": "I",
        "description": "Early-stage invasive",
        "definition": "Small tumor (≤2 cm) with or without nearby lymph node involvement"
      },
      {
        "stage": "II",
        "description": "Localized disease",
        "definition": "Tumor 2-5 cm, OR larger tumor with limited lymph node spread"
      },
      {
        "stage": "III",
        "description": "Locally advanced",
        "definition": "Large tumor with significant lymph node involvement"
      },
      {
        "stage": "IV",
        "description": "Metastatic",
        "definition": "Cancer has spread to distant organs (bone, brain, liver, lungs)"
      }
    ]
  },

  "treatments": {
    "standard": [
      {
        "name": "Surgery",
        "indications": "Primary treatment for most breast cancers",
        "procedures": ["Lumpectomy (breast-conserving)", "Mastectomy", "Sentinel lymph node biopsy", "Axillary dissection"],
        "sideEffects": ["Pain", "Numbness", "Seroma formation", "Lymphedema (if lymph nodes removed)"],
        "successRates": "High success rates; recurrence depends on stage and additional therapy"
      },
      {
        "name": "Radiation Therapy",
        "indications": "After breast-conserving surgery; after mastectomy in high-risk cases",
        "procedures": ["External beam radiation (typically 5-6 weeks)", "Accelerated partial breast irradiation (APBI)"],
        "sideEffects": ["Skin irritation", "Fatigue", "Rib pain (late effect)", "Secondary cancers (rare)"],
        "successRates": "Reduces recurrence risk by ~50% when used appropriately"
      },
      {
        "name": "Chemotherapy",
        "indications": "Adjuvant (after surgery) for high-risk disease; neoadjuvant (before surgery) for advanced disease",
        "procedures": ["Standard regimens: AC-T, TC, CMF"],
        "sideEffects": ["Hair loss", "Nausea/vomiting", "Bone marrow suppression", "Neuropathy", "Cardiac toxicity (rare)"],
        "successRates": "Improves 5-year survival by 5-15% depending on tumor type"
      },
      {
        "name": "Hormone Therapy",
        "indications": "For ER/PR-positive tumors",
        "procedures": ["Tamoxifen (premenopausal)", "Aromatase inhibitors (postmenopausal)", "Duration: 5-10 years"],
        "sideEffects": ["Hot flashes", "Vaginal dryness", "Bone loss", "Increased VTE risk"],
        "successRates": "Reduces recurrence risk by 40-50%"
      },
      {
        "name": "Targeted Therapy",
        "indications": "For HER2-positive tumors",
        "procedures": ["Trastuzumab (Herceptin)", "Pertuzumab", "TDM-1", "CDK4/6 inhibitors"],
        "sideEffects": ["Cardiac dysfunction (trastuzumab)", "Rash", "Diarrhea"],
        "successRates": "Adds ~5-10% absolute survival benefit to chemotherapy in HER2+ disease"
      }
    ],
    "investigational": [
      "CAR-T cell therapy",
      "Bispecific antibodies",
      "Novel checkpoint inhibitors in combination regimens"
    ]
  },

  "survival": {
    "dataSource": "SEER Database (2012-2020)",
    "lastUpdated": "2023-12-01",
    "rates": [
      {
        "stage": "0",
        "fiveYear": 99,
        "medianSurvival": "Not applicable (excellent prognosis)"
      },
      {
        "stage": "I",
        "fiveYear": 99,
        "medianSurvival": "Not reached"
      },
      {
        "stage": "II",
        "fiveYear": 93,
        "medianSurvival": "Not reached"
      },
      {
        "stage": "III",
        "fiveYear": 72,
        "medianSurvival": "4-5 years"
      },
      {
        "stage": "IV",
        "fiveYear": 29,
        "medianSurvival": "2-3 years (with modern therapies)"
      }
    ],
    "disclaimers": [
      "Survival rates vary significantly based on age, overall health, and tumor biology",
      "Modern therapies may improve outcomes beyond these historical rates",
      "Individual prognosis should be discussed with oncologist"
    ]
  },

  "verification": {
    "verifiedDate": "2025-03-15",
    "verifiedBy": "Dr. Jane Smith, MD (Oncology)",
    "nextVerificationDue": "2026-03-15",
    "confidenceScore": 95,
    "confidenceRationale": "High confidence based on NCCN guidelines, SEER data, and major clinical trials (EBCTCG meta-analyses)",
    
    "sources": [
      {
        "sourceName": "National Cancer Institute",
        "sourceType": "nci",
        "url": "https://www.cancer.gov/types/breast",
        "lastAccessedDate": "2025-03-10",
        "dataPointsCovered": ["incidence", "symptoms", "diagnosis", "survival_rates"]
      },
      {
        "sourceName": "American Cancer Society",
        "sourceType": "acs",
        "url": "https://www.cancer.org/cancer/breast-cancer.html",
        "lastAccessedDate": "2025-03-10",
        "dataPointsCovered": ["risk_factors", "screening", "patient_education"]
      },
      {
        "sourceName": "NCCN Clinical Practice Guidelines",
        "sourceType": "literature",
        "url": "https://www.nccn.org/professionals/physician_gls/pdf/breast.pdf",
        "lastAccessedDate": "2025-03-10",
        "dataPointsCovered": ["treatment", "staging", "follow_up"]
      },
      {
        "sourceName": "SEER Database",
        "sourceType": "registry",
        "url": "https://seer.cancer.gov",
        "lastAccessedDate": "2025-03-10",
        "dataPointsCovered": ["survival_rates", "incidence"]
      }
    ],
    
    "knownGaps": [
      "Triple-negative breast cancer outcomes (would benefit from specialized data)",
      "Rare histologic subtypes not well-represented",
      "Outcomes in non-US populations may differ due to access/screening differences"
    ],
    
    "conflictResolutions": []
  },

  "videos": [
    {
      "id": "breast-001",
      "cancerTypeId": "breast-cancer",
      "title": "Understanding Breast Cancer Screening",
      "description": "Overview of mammography, clinical breast exam, and when to get screened",
      "duration": 425,
      "source": {
        "platform": "youtube",
        "youtubeId": "dQw4w9WgXcQ"
      },
      "organization": {
        "name": "National Cancer Institute",
        "tier": 1
      },
      "category": "diagnosis",
      "targetAudience": "general_public",
      "uploadedDate": "2023-06-15",
      "lastVerified": "2025-03-01",
      "verifiedBy": "Content Team",
      "accessibility": {
        "subtitles": true,
        "closedCaptions": true,
        "audioDescription": false,
        "isAccessibilityOptimized": true
      },
      "language": "en",
      "tags": ["screening", "mammography", "prevention"]
    }
  ],

  "externalLinks": [
    {
      "label": "NCI Breast Cancer Information",
      "url": "https://www.cancer.gov/types/breast",
      "source": "NCI",
      "type": "patient_education"
    },
    {
      "label": "American Cancer Society - Breast Cancer",
      "url": "https://www.cancer.org/cancer/breast-cancer.html",
      "source": "ACS",
      "type": "patient_education"
    },
    {
      "label": "Clinical Trials for Breast Cancer",
      "url": "https://clinicaltrials.gov/ct2/results?cond=Breast+Cancer",
      "source": "NIH",
      "type": "clinical_trials"
    }
  ],

  "relatedCancers": ["male-breast-cancer", "inflammatory-breast-cancer"],
  
  "metadata": {
    "createdDate": "2024-01-15",
    "lastModifiedDate": "2025-03-15",
    "createdBy": "Dr. John Doe",
    "lastModifiedBy": "Dr. Jane Smith",
    "viewCount": 15234
  }
}
```

---

## 4. REACT COMPONENT EXAMPLES

### 4.1 Cancer Detail Page with All Integrations

**File:** `src/pages/CancerDetailPage.tsx`

```typescript
import React, { useState } from 'react';
import { CancerEntry } from '../types/cancer';
import { CancerInlineDisclaimer } from '../components/CancerInlineDisclaimer';
import { CancerVideosSection } from '../components/CancerVideosSection';
import { ExternalLink, AlertCircle } from 'lucide-react';

interface CancerDetailPageProps {
  cancer: CancerEntry;
  onVideoPlay?: (videoId: string) => void;
}

export const CancerDetailPage: React.FC<CancerDetailPageProps> = ({ cancer, onVideoPlay }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{cancer.name}</h1>
            {cancer.commonNames && cancer.commonNames.length > 0 && (
              <p className="text-gray-600">
                Also known as: {cancer.commonNames.join(', ')}
              </p>
            )}
          </div>
          <div className="text-right text-sm text-gray-600">
            <p><strong>ICD Code:</strong> {cancer.icdCode}</p>
            <p><strong>Category:</strong> {cancer.category.replace('_', ' ')}</p>
          </div>
        </div>

        {/* Inline Disclaimer */}
        <CancerInlineDisclaimer
          cancerType={cancer.name}
          lastVerified={new Date(cancer.verification.verifiedDate).toLocaleDateString()}
          confidenceScore={cancer.verification.confidenceScore}
        />
      </header>

      {/* Quick Facts */}
      <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <p className="text-gray-600 mb-1">Incidence (per 100K/year)</p>
            <p className="text-2xl font-bold text-blue-700">{cancer.epidemiology.incidencePerHundredK}</p>
          </div>
          <div>
            <p className="text-gray-600 mb-1">Median Age at Diagnosis</p>
            <p className="text-2xl font-bold text-blue-700">{cancer.epidemiology.medianAgeAtDiagnosis} years</p>
          </div>
          <div>
            <p className="text-gray-600 mb-1">5-Year Survival (Overall)</p>
            <p className="text-2xl font-bold text-blue-700">
              {cancer.survival.rates.find(r => r.stage === 'all')?.fiveYear || '—'}%
            </p>
          </div>
          <div className="md:col-span-2 lg:col-span-3">
            <p className="text-gray-600 mb-2"><strong>Primary Risk Factors:</strong></p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {cancer.epidemiology.primaryRiskFactors.slice(0, 5).map((factor, idx) => (
                <li key={idx}>{factor}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Symptoms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h3 className="font-bold text-amber-900 mb-3">Early Symptoms</h3>
            <ul className="list-disc pl-5 text-amber-800 space-y-2">
              {cancer.symptoms.early.map((symptom, idx) => (
                <li key={idx}>{symptom}</li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="font-bold text-red-900 mb-3">Advanced Symptoms</h3>
            <ul className="list-disc pl-5 text-red-800 space-y-2">
              {cancer.symptoms.advanced.map((symptom, idx) => (
                <li key={idx}>{symptom}</li>
              ))}
            </ul>
          </div>
        </div>
        {cancer.symptoms.notes && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
            <p className="text-blue-900 text-sm">{cancer.symptoms.notes}</p>
          </div>
        )}
      </section>

      {/* Diagnosis */}
      <section className="mb-8">
        <button
          onClick={() => setExpandedSection(expandedSection === 'diagnosis' ? null : 'diagnosis')}
          className="flex items-center justify-between w-full"
        >
          <h2 className="text-2xl font-bold text-gray-900">Diagnosis</h2>
          <span className="text-gray-600">{expandedSection === 'diagnosis' ? '−' : '+'}</span>
        </button>
        
        {expandedSection === 'diagnosis' && (
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Screening Tests (if applicable)</h3>
              <ul className="list-disc pl-5 text-gray-700">
                {cancer.diagnostics.screeningTests?.map((test, idx) => (
                  <li key={idx}>{test}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Confirmation Tests</h3>
              <ul className="list-disc pl-5 text-gray-700">
                {cancer.diagnostics.confirmationTests.map((test, idx) => (
                  <li key={idx}>{test}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Staging Workup</h3>
              <ul className="list-disc pl-5 text-gray-700">
                {cancer.diagnostics.stagingWorkup.map((test, idx) => (
                  <li key={idx}>{test}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>

      {/* Staging */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Staging</h2>
        <div className="space-y-3">
          {cancer.staging.stages.map((stage, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-1">Stage {stage.stage}: {stage.description}</h3>
              <p className="text-gray-700 text-sm">{stage.definition}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Treatment */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Treatment</h2>
        <div className="space-y-4">
          {cancer.treatments.standard.map((treatment, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{treatment.name}</h3>
              <div className="text-sm text-gray-700 space-y-2">
                <p><strong>Indications:</strong> {treatment.indications}</p>
                {treatment.procedures && (
                  <div>
                    <strong>Procedures:</strong>
                    <ul className="list-disc pl-5 mt-1">{treatment.procedures.map((p, i) => <li key={i}>{p}</li>)}</ul>
                  </div>
                )}
                {treatment.sideEffects && (
                  <div>
                    <strong>Side Effects:</strong>
                    <ul className="list-disc pl-5 mt-1">{treatment.sideEffects.map((se, i) => <li key={i}>{se}</li>)}</ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Survival Rates */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Survival Rates</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
          <p className="text-xs text-gray-600 mb-2">
            <strong>Data Source:</strong> {cancer.survival.dataSource} (Last Updated: {new Date(cancer.survival.lastUpdated).toLocaleDateString()})
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left p-2 font-semibold">Stage</th>
                <th className="text-center p-2 font-semibold">1-Year</th>
                <th className="text-center p-2 font-semibold">5-Year</th>
                <th className="text-center p-2 font-semibold">Median Survival</th>
              </tr>
            </thead>
            <tbody>
              {cancer.survival.rates.map((rate, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-2">{rate.stage}</td>
                  <td className="text-center p-2">{rate.oneYear ? `${rate.oneYear}%` : '—'}</td>
                  <td className="text-center p-2">{rate.fiveYear ? `${rate.fiveYear}%` : '—'}</td>
                  <td className="text-center p-2">{rate.medianSurvival || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {cancer.survival.disclaimers && cancer.survival.disclaimers.length > 0 && (
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-4">
            <p className="text-xs text-amber-900 font-semibold mb-2">Important Notes:</p>
            <ul className="list-disc pl-5 text-xs text-amber-900">
              {cancer.survival.disclaimers.map((d, idx) => (
                <li key={idx}>{d}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Videos */}
      {cancer.videos && cancer.videos.length > 0 && (
        <CancerVideosSection
          cancerTypeId={cancer.id}
          videos={cancer.videos}
          onPlay={onVideoPlay}
        />
      )}

      {/* External Resources */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">External Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cancer.externalLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-blue-600 hover:text-blue-700 mb-1">{link.label}</h3>
                  <p className="text-xs text-gray-600 mb-2">{link.source}</p>
                  <p className="text-xs text-gray-500">{link.type.replace('_', ' ')}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Verification Info */}
      <section className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-8">
        <p className="text-xs text-gray-600">
          <strong>Verified by:</strong> {cancer.verification.verifiedBy} on {new Date(cancer.verification.verifiedDate).toLocaleDateString()}
        </p>
        <p className="text-xs text-gray-600">
          <strong>Confidence Score:</strong> {cancer.verification.confidenceScore}/100
        </p>
        <p className="text-xs text-gray-600">
          <strong>Next Review Due:</strong> {new Date(cancer.verification.nextVerificationDue).toLocaleDateString()}
        </p>
      </section>
    </article>
  );
};
```

---

## 5. DEPLOYMENT CHECKLIST

### 5.1 Pre-Launch Verification

```markdown
## Pre-Launch Verification Checklist

### Frontend Components
- [ ] Medical disclaimer footer implemented
- [ ] Modal disclaimer shows on first visit
- [ ] Inline disclaimers on cancer detail pages
- [ ] Disclaimer modal persists correctly (localStorage)
- [ ] All disclaimers are readable and properly styled
- [ ] Mobile responsive (test on phone/tablet)

### Data Structure
- [ ] Updated cancer data type with verification fields
- [ ] Video schema implemented
- [ ] All current cancer entries migrated to new format
- [ ] Sample cancer entry (Breast Cancer) complete with videos
- [ ] Survival data verified against SEER
- [ ] Sources documented for all major data points
- [ ] Confidence scores assigned to all entries

### Videos
- [ ] Top 10 cancers have at least 1 video each
- [ ] All video links verified (not broken)
- [ ] Video sources are Tier 1 or 2 (institutional)
- [ ] Subtitles/CC availability noted
- [ ] Video metadata complete (duration, category, audience)

### Content Validation
- [ ] Fact-check against Section B of Audit Checklist
- [ ] SEER survival data matches (within 1-2%)
- [ ] TNM staging current (AJCC latest edition)
- [ ] Treatment regimens updated (last 2 years)
- [ ] No outdated procedures listed
- [ ] Known conflicts documented

### Links & References
- [ ] All external links tested (not 404s)
- [ ] Sources are from credible institutions
- [ ] At least 3 sources per major data point
- [ ] Source attribution clear and complete

### Accessibility
- [ ] WCAG 2.1 AA compliant (test with WAVE tool)
- [ ] Videos have captions/transcripts
- [ ] Color contrast meets standards
- [ ] Keyboard navigation works
- [ ] Screen reader friendly (ARIA labels present)

### SEO & Metadata
- [ ] Meta descriptions updated
- [ ] Open Graph tags set
- [ ] Structured data (schema.org) implemented
- [ ] Sitemap updated
- [ ] Robots.txt configured

### Security & Compliance
- [ ] HIPAA considerations documented
- [ ] Privacy policy reviewed
- [ ] Terms of service reviewed
- [ ] No personal health information stored
- [ ] HTTPS enforced

### Performance
- [ ] Page load time < 3 seconds
- [ ] Images optimized
- [ ] Lazy loading for videos
- [ ] Bundle size acceptable
- [ ] No console errors

### Testing
- [ ] Unit tests for disclaimer components
- [ ] Integration tests for data loading
- [ ] E2E tests for user flows
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Mobile testing (iOS, Android)

### Documentation
- [ ] README updated
- [ ] CONTRIBUTING.md for future updates
- [ ] Data update process documented
- [ ] Disclaimer update procedures documented
- [ ] Verification protocol documented

### Monitoring & Analytics
- [ ] Google Analytics configured
- [ ] Disclaimer acceptance tracking
- [ ] Video engagement tracking
- [ ] Error logging set up
- [ ] User feedback form implemented

## Launch Steps

1. **Backup current production:** `git tag -a v1.0-pre-update -m "Pre-disclaimer-update"`
2. **Deploy to staging:** Run full test suite
3. **QA review:** Internal testing (all checkboxes above)
4. **User testing:** 5-10 beta users (measure disclaimer comprehension)
5. **Deploy to production:** Blue-green deployment
6. **Monitor:** Watch error logs, disclaimer metrics, user feedback
7. **Plan follow-up:** Schedule content audit for 30 days post-launch

```

---

## SUMMARY

This implementation guide provides:

1. ✅ **Copy-paste disclaimer components** (footer, modal, inline)
2. ✅ **Video integration** with accessibility support
3. ✅ **Updated TypeScript interfaces** for cancer data
4. ✅ **Sample cancer entry** (Breast Cancer) as template
5. ✅ **Full cancer detail page component**
6. ✅ **Pre-launch verification checklist**

**Next Steps:**
1. Review code with your dev team
2. Integrate components into existing Lovable project
3. Migrate current cancer data to new schema
4. Add videos for top 10-20 cancers
5. QA testing against checklist
6. Deploy with monitoring

Need help with any specific section?
