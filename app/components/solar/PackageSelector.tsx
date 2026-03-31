"use client";

import { useState } from "react";

interface SolarPackage {
  id: string;
  name: string;
  size: string;
  cashPrice: number;
  installmentMonthly: number;
  paasMonthlyFee?: number;
  description: string;
  features: string[];
  suitableFor: string;
}

export function SolarPackageSelector() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [selectedPaymentPlan, setSelectedPaymentPlan] = useState<"cash" | "installment" | "paas">("cash");

  const packages: SolarPackage[] = [
    {
      id: "essential",
      name: "Essential",
      size: "2 kW",
      cashPrice: 4500000,
      installmentMonthly: 180000,
      paasMonthlyFee: 150000,
      description: "Basic power for essential medical equipment and lighting",
      features: [
        "Solar panels (2 kW)",
        "Battery storage (2.5 kWh)",
        "Hybrid inverter (2 kW)",
        "Basic installation",
        "1 year warranty"
      ],
      suitableFor: "Small dispensaries and clinics"
    },
    {
      id: "plus",
      name: "Plus",
      size: "4.2 kW",
      cashPrice: 8500000,
      installmentMonthly: 340000,
      paasMonthlyFee: 280000,
      description: "Comprehensive power for health centers with vaccine refrigeration",
      features: [
        "Solar panels (4.2 kW)",
        "Battery storage (5.4 kWh)",
        "Hybrid inverter (4.2 kW)",
        "Vaccine refrigerator support",
        "Professional installation",
        "2 year warranty"
      ],
      suitableFor: "Health centers and dispensaries"
    },
    {
      id: "pro",
      name: "Pro",
      size: "6 kW",
      cashPrice: 12000000,
      installmentMonthly: 480000,
      paasMonthlyFee: 400000,
      description: "Advanced system for larger health facilities with multiple departments",
      features: [
        "Solar panels (6 kW)",
        "Battery storage (7.7 kWh)",
        "Hybrid inverter (6 kW)",
        "Medical equipment support",
        "Advanced monitoring",
        "3 year warranty"
      ],
      suitableFor: "Polyclinics and diagnostic labs"
    },
    {
      id: "ultra",
      name: "Ultra",
      size: "10 kW",
      cashPrice: 18000000,
      installmentMonthly: 720000,
      paasMonthlyFee: 600000,
      description: "Comprehensive solution for large hospitals and health networks",
      features: [
        "Solar panels (10 kW)",
        "Battery storage (12.8 kWh)",
        "Hybrid inverter (10 kW)",
        "Full hospital support",
        "Remote monitoring",
        "5 year warranty"
      ],
      suitableFor: "Hospitals and health networks"
    }
  ];

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-TZ', {
      style: 'currency',
      currency: 'TZS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const selectedPkg = packages.find(pkg => pkg.id === selectedPackage);

  const getPaymentAmount = (): number => {
    if (!selectedPkg) return 0;
    
    switch (selectedPaymentPlan) {
      case "cash":
        return selectedPkg.cashPrice;
      case "installment":
        return selectedPkg.installmentMonthly;
      case "paas":
        return selectedPkg.paasMonthlyFee || 0;
      default:
        return 0;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
        <h3 className="text-2xl font-bold mb-2">Choose Your Solar Package</h3>
        <p className="text-green-50">Select the right solution for your healthcare facility</p>
      </div>

      <div className="p-6">
        {!selectedPackage ? (
          /* Package Selection View */
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPackage(pkg.id)}
                  className="border-2 border-gray-200 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:border-green-400 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900">{pkg.name}</h4>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {pkg.size}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Cash Price:</span>
                      <span className="font-bold text-green-600">{formatCurrency(pkg.cashPrice)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Installment:</span>
                      <span className="font-semibold">{formatCurrency(pkg.installmentMonthly)}/mo</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Power-as-a-Service:</span>
                      <span className="font-semibold text-blue-600">{formatCurrency(pkg.paasMonthlyFee || 0)}/mo</span>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-500 mb-4">
                    <strong>Best for:</strong> {pkg.suitableFor}
                  </div>
                  
                  <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
                    Select Package
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Package Details View */
          <div className="space-y-6">
            {selectedPkg && (
              <>
                {/* Selected Package Header */}
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">{selectedPkg.name} Package</h4>
                      <p className="text-gray-600">{selectedPkg.description}</p>
                    </div>
                    <span className="bg-green-600 text-white px-4 py-2 rounded-full text-lg font-medium">
                      {selectedPkg.size}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => setSelectedPackage(null)}
                    className="text-green-600 hover:text-green-800 text-sm font-medium"
                  >
                    ← Back to packages
                  </button>
                </div>

                {/* Payment Plan Selector */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h5 className="text-lg font-semibold mb-4">Choose Payment Plan</h5>
                  <div className="grid gap-3 md:grid-cols-3">
                    <button
                      onClick={() => setSelectedPaymentPlan("cash")}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedPaymentPlan === "cash"
                          ? "border-green-500 bg-green-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="font-semibold text-gray-900">Upfront Cash</div>
                      <div className="text-sm text-gray-600 mt-1">One-time payment</div>
                      <div className="text-lg font-bold text-green-600 mt-2">
                        {formatCurrency(selectedPkg.cashPrice)}
                      </div>
                    </button>
                    
                    <button
                      onClick={() => setSelectedPaymentPlan("installment")}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedPaymentPlan === "installment"
                          ? "border-green-500 bg-green-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="font-semibold text-gray-900">Installment Plan</div>
                      <div className="text-sm text-gray-600 mt-1">Monthly payments</div>
                      <div className="text-lg font-bold text-green-600 mt-2">
                        {formatCurrency(selectedPkg.installmentMonthly)}/mo
                      </div>
                    </button>
                    
                    <button
                      onClick={() => setSelectedPaymentPlan("paas")}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedPaymentPlan === "paas"
                          ? "border-green-500 bg-green-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="font-semibold text-gray-900">Power-as-a-Service</div>
                      <div className="text-sm text-gray-600 mt-1">No upfront cost</div>
                      <div className="text-lg font-bold text-green-600 mt-2">
                        {formatCurrency(selectedPkg.paasMonthlyFee || 0)}/mo
                      </div>
                    </button>
                  </div>
                </div>

                {/* Package Features */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h5 className="text-lg font-semibold mb-4">What's Included</h5>
                  <div className="grid gap-3 md:grid-cols-2">
                    {selectedPkg.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing Summary */}
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                  <h5 className="text-lg font-semibold mb-4">Pricing Summary</h5>
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-2">
                      {selectedPaymentPlan === "cash" && "One-time payment"}
                      {selectedPaymentPlan === "installment" && "Monthly payment"}
                      {selectedPaymentPlan === "paas" && "Monthly service fee"}
                    </div>
                    <div className="text-3xl font-bold text-blue-600">
                      {formatCurrency(getPaymentAmount())}
                      {selectedPaymentPlan !== "cash" && <span className="text-lg">/month</span>}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <button className="bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                    Request Quote for {selectedPkg.name} Package
                  </button>
                  <p className="text-sm text-gray-500 mt-3">
                    Our team will contact you within 24 hours
                  </p>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
