"use client";

import { useState } from "react";
import { SolarSizingTool } from "./SizingTool";
import { SolarPackageSelector } from "./PackageSelector";

export function SolarDesignTool() {
  const [activeView, setActiveView] = useState<"sizing" | "packages">("sizing");

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Tool Navigation */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-2">
        <div className="flex">
          <button
            onClick={() => setActiveView("sizing")}
            className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all ${
              activeView === "sizing"
                ? "bg-green-600 text-white shadow-md"
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
            }`}
          >
            <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Design & Analysis Tool
          </button>
          <button
            onClick={() => setActiveView("packages")}
            className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all ${
              activeView === "packages"
                ? "bg-green-600 text-white shadow-md"
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
            }`}
          >
            <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Package Selection
          </button>
        </div>
      </div>

      {/* Tool Content */}
      <div className="space-y-8">
        {activeView === "sizing" && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Solar Design & Cost Analysis
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Calculate your facility's energy requirements and compare costs before and after solar installation.
              </p>
            </div>
            <SolarSizingTool />
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Ready to choose a package? Compare our pre-configured solar solutions.
              </p>
              <button
                onClick={() => setActiveView("packages")}
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                View Solar Packages
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {activeView === "packages" && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Solar Package Selection
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose from our pre-configured solar packages designed specifically for healthcare facilities.
              </p>
            </div>
            <SolarPackageSelector />
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Want to calculate your specific energy needs first?
              </p>
              <button
                onClick={() => setActiveView("sizing")}
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Use Design Tool
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Help Section */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Help?</h3>
            <p className="text-blue-800 mb-3">
              Our solar experts are available to help you choose the right solution for your healthcare facility.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                Schedule Consultation
              </button>
              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium">
                Download Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
