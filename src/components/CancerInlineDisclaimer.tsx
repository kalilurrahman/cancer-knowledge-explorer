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
