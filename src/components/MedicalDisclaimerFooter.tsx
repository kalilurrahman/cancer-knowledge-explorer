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
