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
