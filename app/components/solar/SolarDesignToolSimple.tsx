"use client";

import { SolarSizingTool } from "./SizingTool";

export function SolarDesignToolSimple() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Tool Content */}
      <div className="space-y-8">
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Solar Design & Cost Analysis
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Calculate your solar energy requirements and get instant cost estimates for your healthcare facility.
            </p>
          </div>
          
          {/* Solar Sizing Tool */}
          <SolarSizingTool />
        </div>
      </div>
    </div>
  );
}
