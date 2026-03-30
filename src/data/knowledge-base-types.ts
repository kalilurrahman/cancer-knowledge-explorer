// Knowledge Base JSON — Type Definitions

export interface KBGlobalResource {
  name: string;
  url: string;
  description: string;
  type: string;
  geography: string;
}

export interface KBHospital {
  name: string;
  url?: string;
  phone?: string;
  city?: string;
  tier?: string;
  description?: string;
  address?: string;
}

export interface KBNgo {
  name: string;
  url: string;
  helpline?: string;
  description: string;
  services?: string[];
}

export interface KBFinancialAid {
  name: string;
  url?: string;
  urls?: string[];
  description: string;
}

export interface KBGovtScheme {
  name: string;
  url: string;
  description: string;
  type: string;
}

export interface KBCityResources {
  title: string;
  hospitals: KBHospital[];
}

export interface KBIndiaResources {
  title: string;
  overview: string;
  govtSchemes: KBGovtScheme[];
  hospitals: KBHospital[];
  ngos: KBNgo[];
  financialAid: KBFinancialAid[];
  hyderabad: KBCityResources;
  chennai: KBCityResources;
}

export interface KBCountryResource {
  name: string;
  url: string;
  helpline?: string;
  description?: string;
}

export interface KBCountryResources {
  title: string;
  overview?: string;
  resources: KBCountryResource[];
  topHospitals?: Array<{ name: string; url: string }>;
}

export interface KBTreatmentResource {
  name: string;
  url: string;
}

export interface KBTreatmentModality {
  id: string;
  name: string;
  description: string;
  subtypes?: string[];
  usedFor?: string;
  costRange?: Record<string, string>;
  resources: KBTreatmentResource[];
}

export interface KBSupportResource {
  name: string;
  url: string;
  helpline?: string;
  description: string;
  geography?: string;
}

export interface KBClinicalTrialResource {
  name: string;
  url: string;
  description: string;
  usage?: string;
}

export interface KBDiagnosticsResource {
  name: string;
  url: string;
  description: string;
}

export interface KBBookReference {
  title: string;
  edition?: string;
  url?: string;
  description: string;
  format?: string;
  type?: string;
}

export interface KBEmergencyContact {
  name: string;
  number: string;
}

export interface KBCancerType {
  id: string;
  letter: string;
  name: string;
  aliases?: string[];
  icdCode: string;
  category: string;
  description: string;
  symptoms?: string[];
  riskFactors?: string[];
  stages?: string;
  subtypes?: Array<Record<string, string>>;
  prevalence?: Record<string, string>;
  treatments?: string[];
  survivalRates?: Record<string, string>;
  screening?: Record<string, string | string[]>;
  costs?: Record<string, string>;
  resources: Array<{ name: string; url: string }>;
  indiaContext?: string;
  ABCDERule?: Record<string, string>;
  prevention?: Record<string, string>;
  diagnosis?: string;
  note?: string;
  url?: string;
}

export interface KnowledgeBase {
  metadata: {
    title: string;
    version: string;
    lastUpdated: string;
    description: string;
    disclaimer: string;
    curators: string[];
    primarySources: string[];
  };
  globalResources: {
    title: string;
    items: KBGlobalResource[];
  };
  geographyResources: {
    india: KBIndiaResources;
    usa: KBCountryResources;
    uk: KBCountryResources;
    australia: KBCountryResources;
    canada: KBCountryResources;
    uae: KBCountryResources;
  };
  treatmentModalities: {
    title: string;
    items: KBTreatmentModality[];
  };
  cancerTypes: KBCancerType[];
  supportResources: {
    emotional: KBSupportResource[];
    financial: KBSupportResource[];
    palliative: KBSupportResource[];
    survivorship: KBSupportResource[];
    nutrition: KBSupportResource[];
  };
  clinicalTrialResources: KBClinicalTrialResource[];
  diagnosticsResources: KBDiagnosticsResource[];
  booksPdfsReference: KBBookReference[];
  emergencyContacts: Record<string, KBEmergencyContact[]>;
}
