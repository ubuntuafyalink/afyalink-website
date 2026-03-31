"use client";

import { useState, useEffect, useRef } from "react";

interface Device {
  id: string;
  deviceName: string;
  wattage: number;
  quantity: number;
  hoursPerDay: number;
}

interface FacilityData {
  averageOutageHours: number;
  facilityType: "on-grid" | "off-grid" | "hybrid";
  monthlyGridBill: number;
  dieselLitresPerDay: number;
  dieselPricePerLitre: number;
}

interface Calculations {
  totalDailyLoad: number;
  adjustedLoad: number;
  peakLoad: number;
  solarArraySize: number;
  batteryStorage: number;
  annualGridCost: number;
  annualDieselCost: number;
  annualSavings: number;
  remainingEnergyCost: number;
}

export interface SizingSummary {
  totalDailyLoad: number;
  solarArraySize: number;
  annualGridCost: number;
  annualDieselCost: number;
  annualSavings: number;
  remainingEnergyCost: number;
  requiredKw: number;
}

export function SolarSizingTool() {
  const [activeTab, setActiveTab] = useState<"inventory" | "energy" | "cost">("inventory");
  const [devices, setDevices] = useState<Device[]>([
    { id: "1", deviceName: "", wattage: 0, quantity: 0, hoursPerDay: 0 },
    { id: "2", deviceName: "", wattage: 0, quantity: 0, hoursPerDay: 0 },
  ]);

  const [facilityData, setFacilityData] = useState<FacilityData>({
    averageOutageHours: 0,
    facilityType: "on-grid",
    monthlyGridBill: 0,
    dieselLitresPerDay: 0,
    dieselPricePerLitre: 0,
  });

  const [solarOffset, setSolarOffset] = useState(0.7);

  const calculateEnergy = (): Calculations => {
    const totalDailyLoad = devices.reduce((sum, device) => {
      return sum + (device.wattage * device.quantity * device.hoursPerDay) / 1000;
    }, 0);

    const adjustedLoad = totalDailyLoad * 1.2;
    const peakLoad = adjustedLoad / (24 * 0.4);
    const solarArraySize = (adjustedLoad / 6) * 1.15;
    const batteryStorage = adjustedLoad / 0.9;

    const annualGridCost = facilityData.monthlyGridBill * 12;
    const annualDieselCost = facilityData.dieselLitresPerDay * facilityData.dieselPricePerLitre * 365;
    const totalCurrentCost = facilityData.facilityType === "off-grid" ? annualDieselCost : annualGridCost;

    const annualSavings = totalCurrentCost * solarOffset;
    const remainingEnergyCost = totalCurrentCost - annualSavings;

    return {
      totalDailyLoad,
      adjustedLoad,
      peakLoad,
      solarArraySize,
      batteryStorage,
      annualGridCost,
      annualDieselCost,
      annualSavings,
      remainingEnergyCost,
    };
  };

  const calculations = calculateEnergy();

  const addDevice = () => {
    const newDevice: Device = {
      id: Date.now().toString(),
      deviceName: "",
      wattage: 0,
      quantity: 0,
      hoursPerDay: 0,
    };
    setDevices([...devices, newDevice]);
  };

  const updateDevice = (id: string, field: keyof Device, value: string | number) => {
    setDevices(devices.map(device =>
      device.id === id ? { ...device, [field]: value } : device
    ));
  };

  const removeDevice = (id: string) => {
    setDevices(devices.filter(device => device.id !== id));
  };

  const updateFacilityData = (field: keyof FacilityData, value: string | number) => {
    setFacilityData({ ...facilityData, [field]: value });
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-TZ', {
      style: 'currency',
      currency: 'TZS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
        <h3 className="text-2xl font-bold mb-2">Solar Design & Cost Analysis Tool</h3>
        <p className="text-green-50">Calculate your energy requirements and compare costs</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex">
          <button
            onClick={() => setActiveTab("inventory")}
            className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
              activeTab === "inventory"
                ? "text-green-600 border-b-2 border-green-600 bg-green-50"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Energy Inventory
          </button>
          <button
            onClick={() => setActiveTab("energy")}
            className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
              activeTab === "energy"
                ? "text-green-600 border-b-2 border-green-600 bg-green-50"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            System Sizing
          </button>
          <button
            onClick={() => setActiveTab("cost")}
            className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
              activeTab === "cost"
                ? "text-green-600 border-b-2 border-green-600 bg-green-50"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
            Cost Comparison
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Inventory Tab */}
        {activeTab === "inventory" && (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-4">Device Inventory</h4>
              <p className="text-gray-600 mb-4">List the main devices that consume electricity in your facility.</p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-3 border border-gray-200">Device Name</th>
                      <th className="text-left p-3 border border-gray-200">Wattage (W)</th>
                      <th className="text-left p-3 border border-gray-200">Quantity</th>
                      <th className="text-left p-3 border border-gray-200">Hours/Day</th>
                      <th className="text-left p-3 border border-gray-200">Daily kWh</th>
                      <th className="text-left p-3 border border-gray-200">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {devices.map((device) => {
                      const dailyKwh = (device.wattage * device.quantity * device.hoursPerDay) / 1000;
                      return (
                        <tr key={device.id} className="hover:bg-gray-50">
                          <td className="p-3 border border-gray-200">
                            <input
                              type="text"
                              value={device.deviceName}
                              onChange={(e) => updateDevice(device.id, "deviceName", e.target.value)}
                              placeholder="e.g. LED Bulb, Vaccine Fridge"
                              className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                          </td>
                          <td className="p-3 border border-gray-200">
                            <input
                              type="number"
                              value={device.wattage === 0 ? "" : device.wattage}
                              onChange={(e) => updateDevice(device.id, "wattage", Number(e.target.value))}
                              placeholder="e.g. 20"
                              className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                          </td>
                          <td className="p-3 border border-gray-200">
                            <input
                              type="number"
                              value={device.quantity === 0 ? "" : device.quantity}
                              onChange={(e) => updateDevice(device.id, "quantity", Number(e.target.value))}
                              placeholder="e.g. 10"
                              className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                          </td>
                          <td className="p-3 border border-gray-200">
                            <input
                              type="number"
                              value={device.hoursPerDay === 0 ? "" : device.hoursPerDay}
                              onChange={(e) => updateDevice(device.id, "hoursPerDay", Number(e.target.value))}
                              placeholder="e.g. 8"
                              className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                          </td>
                          <td className="p-3 border border-gray-200 font-mono text-sm">
                            {dailyKwh.toFixed(2)}
                          </td>
                          <td className="p-3 border border-gray-200">
                            <button
                              onClick={() => removeDevice(device.id)}
                              className="text-red-600 hover:text-red-800 transition-colors"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <button
                onClick={addDevice}
                className="mt-4 flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Device
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Average Outage Hours per Day</label>
                <input
                  type="number"
                  value={facilityData.averageOutageHours === 0 ? "" : facilityData.averageOutageHours}
                  onChange={(e) => updateFacilityData("averageOutageHours", Number(e.target.value))}
                  placeholder="e.g. 4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Facility Type</label>
                <select
                  value={facilityData.facilityType}
                  onChange={(e) => updateFacilityData("facilityType", e.target.value as "on-grid" | "off-grid" | "hybrid")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="on-grid">On-grid</option>
                  <option value="off-grid">Off-grid</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Grid Bill (TZS)</label>
                <input
                  type="number"
                  value={facilityData.monthlyGridBill === 0 ? "" : facilityData.monthlyGridBill}
                  onChange={(e) => updateFacilityData("monthlyGridBill", Number(e.target.value))}
                  disabled={facilityData.facilityType === "off-grid"}
                  placeholder="e.g. 300000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Diesel Litres per Day</label>
                <input
                  type="number"
                  value={facilityData.dieselLitresPerDay === 0 ? "" : facilityData.dieselLitresPerDay}
                  onChange={(e) => updateFacilityData("dieselLitresPerDay", Number(e.target.value))}
                  disabled={facilityData.facilityType === "on-grid"}
                  placeholder="e.g. 10"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Diesel Price per Litre (TZS)</label>
                <input
                  type="number"
                  value={facilityData.dieselPricePerLitre === 0 ? "" : facilityData.dieselPricePerLitre}
                  onChange={(e) => updateFacilityData("dieselPricePerLitre", Number(e.target.value))}
                  disabled={facilityData.facilityType === "on-grid"}
                  placeholder="e.g. 2500"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Solar Offset (%)</label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={solarOffset * 100}
                    onChange={(e) => setSolarOffset(Number(e.target.value) / 100)}
                    className="flex-1"
                  />
                  <span className="text-sm font-medium w-12">{Math.round(solarOffset * 100)}%</span>
                </div>
              </div>
            </div>

            {calculations.totalDailyLoad > 0 && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium">
                  Total daily load: <span className="font-bold">{calculations.totalDailyLoad.toFixed(1)} kWh/day</span>
                </p>
              </div>
            )}
          </div>
        )}

        {/* Energy Tab */}
        {activeTab === "energy" && (
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4">Daily Energy Calculation</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Total Daily Load:</span>
                    <span className="font-bold">{calculations.totalDailyLoad.toFixed(2)} kWh/day</span>
                  </div>
                  <div className="flex justify-between">
                    <span>System Loss Buffer (20%):</span>
                    <span className="font-bold">
                      {(calculations.adjustedLoad - calculations.totalDailyLoad).toFixed(2)} kWh/day
                    </span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span>Adjusted Load:</span>
                    <span className="font-bold">{calculations.adjustedLoad.toFixed(2)} kWh/day</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4">System Sizing</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Peak Load Estimation:</span>
                    <span className="font-bold">{calculations.peakLoad.toFixed(2)} kW</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Solar Array Size:</span>
                    <span className="font-bold">{calculations.solarArraySize.toFixed(2)} kW</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Battery Storage:</span>
                    <span className="font-bold">{calculations.batteryStorage.toFixed(2)} kWh</span>
                  </div>
                </div>
              </div>
            </div>

            {calculations.totalDailyLoad > 0 && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4">Device Breakdown</h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-blue-200">
                        <th className="text-left py-2">Device</th>
                        <th className="text-left py-2">Watts</th>
                        <th className="text-left py-2">Qty</th>
                        <th className="text-left py-2">Hours/Day</th>
                        <th className="text-left py-2">Daily kWh</th>
                        <th className="text-left py-2">% of Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {devices.map((device) => {
                        const dailyKwh = (device.wattage * device.quantity * device.hoursPerDay) / 1000;
                        const percentage = calculations.totalDailyLoad > 0
                          ? (dailyKwh / calculations.totalDailyLoad) * 100
                          : 0;
                        if (dailyKwh > 0) {
                          return (
                            <tr key={device.id} className="border-b border-blue-100">
                              <td className="py-2">{device.deviceName}</td>
                              <td className="py-2">{device.wattage}</td>
                              <td className="py-2">{device.quantity}</td>
                              <td className="py-2">{device.hoursPerDay}</td>
                              <td className="py-2 font-mono">{dailyKwh.toFixed(2)}</td>
                              <td className="py-2">{percentage.toFixed(1)}%</td>
                            </tr>
                          );
                        }
                        return null;
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Cost Tab */}
        {activeTab === "cost" && (
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4">Cost Comparison Summary</h4>
              <p className="text-gray-600 mb-4">Before and after solar installation.</p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center p-4 bg-white rounded-lg border">
                  <div className="text-2xl font-bold text-red-600">
                    {formatCurrency(
                      facilityData.facilityType === "on-grid"
                        ? calculations.annualGridCost
                        : calculations.annualDieselCost
                    )}
                  </div>
                  <div className="text-sm text-gray-600">Current Annual Cost</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border">
                  <div className="text-2xl font-bold text-green-600">
                    {formatCurrency(calculations.annualSavings)}
                  </div>
                  <div className="text-sm text-gray-600">Annual Savings</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border">
                  <div className="text-2xl font-bold text-blue-600">
                    {formatCurrency(calculations.remainingEnergyCost)}
                  </div>
                  <div className="text-sm text-gray-600">New Annual Cost</div>
                </div>
              </div>
            </div>

            {calculations.solarArraySize > 0 && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4">Recommended System Size</h4>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-700">
                      {calculations.solarArraySize.toFixed(1)} kW
                    </div>
                    <div className="text-sm text-gray-600">Solar Array</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-700">
                      {calculations.batteryStorage.toFixed(1)} kWh
                    </div>
                    <div className="text-sm text-gray-600">Battery Storage</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-700">
                      {Math.ceil(calculations.solarArraySize / 0.62)}
                    </div>
                    <div className="text-sm text-gray-600">620W Panels</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-700">
                      {calculations.peakLoad.toFixed(1)} kW
                    </div>
                    <div className="text-sm text-gray-600">Peak Load</div>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800 text-sm">
                <strong>Note:</strong> This is a preliminary estimate. For accurate system design and pricing, 
                please contact our team for a comprehensive site assessment.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
