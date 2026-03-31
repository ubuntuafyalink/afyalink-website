"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const container = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10";
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());

  const categories = [
    {
      id: "health-facility",
      title: "Health Facility",
      description: "I represent a clinic, dispensary, pharmacy, or diagnostic center interested in reliable energy or digital health systems.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      )
    },
    {
      id: "partner-investor",
      title: "Partner / Investor",
      description: "I represent a partner organization, donor, or investor interested in collaboration or scaling resilient healthcare infrastructure.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <line x1="20" y1="8" x2="20" y2="14"></line>
          <line x1="23" y1="11" x2="17" y2="11"></line>
        </svg>
      )
    },
    {
      id: "technician-stars",
      title: "Solar Technician / Ubuntu Stars",
      description: "I'm interested in technical training, field operations, or joining the Ubuntu Stars workforce program.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    }
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (fieldErrors[field]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleFieldBlur = (field: string, value: any, isRequired: boolean, type?: string) => {
    setTouchedFields(prev => new Set(prev).add(field));
    
    // Validation
    if (isRequired && (!value || value.toString().trim() === '')) {
      setFieldErrors(prev => ({ ...prev, [field]: 'This field is required' }));
    } else if (type === 'email' && value && !/\S+@\S+\.\S+/.test(value)) {
      setFieldErrors(prev => ({ ...prev, [field]: 'Please enter a valid email address' }));
    } else if (type === 'tel' && value && !/^\+?[\d\s\-\(\)]+$/.test(value)) {
      setFieldErrors(prev => ({ ...prev, [field]: 'Please enter a valid phone number' }));
    } else {
      setFieldErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    // Basic validation based on selected category
    if (selectedCategory === 'health-facility') {
      if (!formData.facilityName?.trim()) errors.facilityName = 'Facility name is required';
      if (!formData.facilityType) errors.facilityType = 'Facility type is required';
      if (!formData.region?.trim()) errors.region = 'Region is required';
      if (!formData.phone?.trim()) errors.phone = 'Phone number is required';
      if (!formData.email?.trim()) errors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Please enter a valid email address';
    }
    
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category: selectedCategory,
          name: formData.name || '',
          email: formData.email || '',
          phone: formData.phone || '',
          facilityName: formData.facilityName || '',
          facilityType: formData.facilityType || '',
          region: formData.region || '',
          staffCount: formData.staffCount || '',
          message: formData.message || '',
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        console.log('Email sent successfully:', result);
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({});
          setSelectedCategory(null);
          setSubmitStatus('idle');
          setTouchedFields(new Set());
        }, 3000);
      } else {
        setSubmitStatus('error');
        console.error('Email sending failed:', result.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderForm = () => {
    switch (selectedCategory) {
      case "health-facility":
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative">
                <label className="block text-sm font-semibold text-black mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  className={`peer w-full rounded-xl border-2 px-4 py-3 pt-6 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200 ${
                    fieldErrors.name ? 'border-red-500 bg-red-50' : 
                    touchedFields.has('name') && formData.name ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-white'
                  }`}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  onBlur={(e) => handleFieldBlur('name', e.target.value, true)}
                />
                <label className={`absolute left-4 top-3 text-sm transition-all duration-200 pointer-events-none ${
                  formData.name ? 'top-1 text-xs text-green-600 font-medium' : 'top-3 text-gray-500'
                }`}>
                  Full Name *
                </label>
                {fieldErrors.name && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {fieldErrors.name}
                  </p>
                )}
                {touchedFields.has('name') && !fieldErrors.name && formData.name && (
                  <div className="absolute right-3 top-3 text-green-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="relative">
                <input
                  type="text"
                  required
                  className={`peer w-full rounded-xl border-2 px-4 py-3 pt-6 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200 ${
                    fieldErrors.facilityName ? 'border-red-500 bg-red-50' : 
                    touchedFields.has('facilityName') && formData.facilityName ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-white'
                  }`}
                  onChange={(e) => handleInputChange('facilityName', e.target.value)}
                  onBlur={(e) => handleFieldBlur('facilityName', e.target.value, true)}
                />
                <label className={`absolute left-4 top-3 text-sm transition-all duration-200 pointer-events-none ${
                  formData.facilityName ? 'top-1 text-xs text-green-600 font-medium' : 'top-3 text-gray-500'
                }`}>
                  Facility Name *
                </label>
                {fieldErrors.facilityName && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {fieldErrors.facilityName}
                  </p>
                )}
                {touchedFields.has('facilityName') && !fieldErrors.facilityName && formData.facilityName && (
                  <div className="absolute right-3 top-3 text-green-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="relative">
                <select
                  required
                  className={`peer w-full rounded-xl border-2 px-4 py-3 pt-6 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200 appearance-none bg-white ${
                    fieldErrors.facilityType ? 'border-red-500 bg-red-50' : 
                    touchedFields.has('facilityType') && formData.facilityType ? 'border-green-500 bg-green-50' : 'border-gray-300'
                  }`}
                  onChange={(e) => handleInputChange('facilityType', e.target.value)}
                  onBlur={(e) => handleFieldBlur('facilityType', e.target.value, true)}
                >
                  <option value="">Select facility type</option>
                  <option value="dispensary">Dispensary</option>
                  <option value="health-center">Health Center</option>
                  <option value="polyclinic">Polyclinic</option>
                  <option value="pharmacy">Pharmacy</option>
                  <option value="laboratory">Laboratory / Diagnostic Center</option>
                </select>
                <label className={`absolute left-4 top-3 text-sm transition-all duration-200 pointer-events-none ${
                  formData.facilityType ? 'top-1 text-xs text-green-600 font-medium' : 'top-3 text-gray-500'
                }`}>
                  Facility Type *
                </label>
                <div className="absolute right-3 top-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {fieldErrors.facilityType && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {fieldErrors.facilityType}
                  </p>
                )}
              </div>
              <div className="relative">
                <input
                  type="text"
                  required
                  className={`peer w-full rounded-xl border-2 px-4 py-3 pt-6 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200 ${
                    fieldErrors.region ? 'border-red-500 bg-red-50' : 
                    touchedFields.has('region') && formData.region ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-white'
                  }`}
                  onChange={(e) => handleInputChange('region', e.target.value)}
                  onBlur={(e) => handleFieldBlur('region', e.target.value, true)}
                />
                <label className={`absolute left-4 top-3 text-sm transition-all duration-200 pointer-events-none ${
                  formData.region ? 'top-1 text-xs text-green-600 font-medium' : 'top-3 text-gray-500'
                }`}>
                  Region / District *
                </label>
                {fieldErrors.region && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {fieldErrors.region}
                  </p>
                )}
                {touchedFields.has('region') && !fieldErrors.region && formData.region && (
                  <div className="absolute right-3 top-3 text-green-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="relative">
                <input
                  type="number"
                  className="peer w-full rounded-xl border-2 border-gray-300 px-4 py-3 pt-6 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200 bg-white"
                  onChange={(e) => handleInputChange('staffCount', e.target.value)}
                />
                <label className="absolute left-4 top-3 text-sm text-gray-500 transition-all duration-200 pointer-events-none peer-focus:top-1 peer-focus:text-xs peer-focus:text-green-600 peer-focus:font-medium peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-green-600 peer-[:not(:placeholder-shown)]:font-medium">
                  Number of Staff
                </label>
              </div>
              <div className="relative">
                <input
                  type="tel"
                  required
                  className={`peer w-full rounded-xl border-2 px-4 py-3 pt-6 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200 ${
                    fieldErrors.phone ? 'border-red-500 bg-red-50' : 
                    touchedFields.has('phone') && formData.phone ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-white'
                  }`}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  onBlur={(e) => handleFieldBlur('phone', e.target.value, true, 'tel')}
                />
                <label className={`absolute left-4 top-3 text-sm transition-all duration-200 pointer-events-none ${
                  formData.phone ? 'top-1 text-xs text-green-600 font-medium' : 'top-3 text-gray-500'
                }`}>
                  Phone Number *
                </label>
                {fieldErrors.phone && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {fieldErrors.phone}
                  </p>
                )}
                {touchedFields.has('phone') && !fieldErrors.phone && formData.phone && (
                  <div className="absolute right-3 top-3 text-green-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="relative">
                <input
                  type="email"
                  required
                  className={`peer w-full rounded-xl border-2 px-4 py-3 pt-6 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200 ${
                    fieldErrors.email ? 'border-red-500 bg-red-50' : 
                    touchedFields.has('email') && formData.email ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-white'
                  }`}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  onBlur={(e) => handleFieldBlur('email', e.target.value, true, 'email')}
                />
                <label className={`absolute left-4 top-3 text-sm transition-all duration-200 pointer-events-none ${
                  formData.email ? 'top-1 text-xs text-green-600 font-medium' : 'top-3 text-gray-500'
                }`}>
                  Email Address *
                </label>
                {fieldErrors.email && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {fieldErrors.email}
                  </p>
                )}
                {touchedFields.has('email') && !fieldErrors.email && formData.email && (
                  <div className="absolute right-3 top-3 text-green-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-3">Main Challenge</label>
              <div className="space-y-3">
                {[
                  "unreliable electricity",
                  "vaccine refrigeration reliability", 
                  "patient booking or queue management",
                  "operational costs"
                ].map((challenge) => (
                  <label key={challenge} className="flex items-center gap-3 p-3 rounded-xl border-2 border-gray-200 hover:border-green-300 hover:bg-green-50 cursor-pointer transition-all duration-200">
                    <input
                      type="checkbox"
                      className="h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500 focus:ring-2"
                      onChange={(e) => {
                        const current = formData.challenges || [];
                        if (e.target.checked) {
                          handleInputChange('challenges', [...current, challenge]);
                        } else {
                          handleInputChange('challenges', current.filter((c: string) => c !== challenge));
                        }
                      }}
                    />
                    <span className="text-black/80 select-none">{challenge}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-3">Interested In</label>
              <div className="space-y-3">
                {["AfyaSolar", "AfyaBooking AI", "Both"].map((interest) => (
                  <label key={interest} className="flex items-center gap-3 p-3 rounded-xl border-2 border-gray-200 hover:border-green-300 hover:bg-green-50 cursor-pointer transition-all duration-200">
                    <input
                      type="checkbox"
                      className="h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500 focus:ring-2"
                      onChange={(e) => {
                        const current = formData.interests || [];
                        if (e.target.checked) {
                          handleInputChange('interests', [...current, interest]);
                        } else {
                          handleInputChange('interests', current.filter((i: string) => i !== interest));
                        }
                      }}
                    />
                    <span className="text-black/80 select-none">{interest}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="relative">
              <textarea
                rows={4}
                className="peer w-full rounded-xl border-2 border-gray-300 px-4 py-3 pt-6 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200 bg-white resize-none"
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder=" "
              />
              <label className="absolute left-4 top-3 text-sm text-gray-500 transition-all duration-200 pointer-events-none peer-focus:top-1 peer-focus:text-xs peer-focus:text-green-600 peer-focus:font-medium peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-green-600 peer-[:not(:placeholder-shown)]:font-medium">
                Message (optional)
              </label>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-green-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-lg"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4m0 12v4m0-8a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        );

      case "partner-investor":
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Organization / Fund *</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                  onChange={(e) => handleInputChange('organization', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Organization Type *</label>
                <select
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                  onChange={(e) => handleInputChange('orgType', e.target.value)}
                >
                  <option value="">Select organization type</option>
                  <option value="ngo">NGO / Development Partner</option>
                  <option value="government">Government Agency</option>
                  <option value="impact-investor">Impact Investor</option>
                  <option value="venture-capital">Venture Capital / Fund</option>
                  <option value="corporate">Corporate Partner</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Country *</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                  onChange={(e) => handleInputChange('country', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Phone *</label>
                <input
                  type="tel"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2">Area of Interest</label>
              <div className="space-y-2">
                {[
                  "healthcare infrastructure deployment",
                  "solar for health facilities",
                  "climate resilience programs",
                  "digital health systems",
                  "workforce development (Ubuntu Stars)"
                ].map((area) => (
                  <label key={area} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                      onChange={(e) => {
                        const current = formData.areas || [];
                        if (e.target.checked) {
                          handleInputChange('areas', [...current, area]);
                        } else {
                          handleInputChange('areas', current.filter((a: string) => a !== area));
                        }
                      }}
                    />
                    <span className="text-black/80">{area}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2">Short Message</label>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                onChange={(e) => handleInputChange('message', e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-green-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-lg"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4m0 12v4m0-8a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        );

      case "technician-stars":
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Phone Number *</label>
                <input
                  type="tel"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Location (Region / District) *</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                  onChange={(e) => handleInputChange('location', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Area of Interest *</label>
                <select
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                  onChange={(e) => handleInputChange('areaOfInterest', e.target.value)}
                >
                  <option value="">Select area of interest</option>
                  <option value="solar-installation">Solar installation technician</option>
                  <option value="solar-maintenance">Solar maintenance technician</option>
                  <option value="energy-monitoring">Energy monitoring support</option>
                  <option value="ubuntu-stars">Ubuntu Stars program participant</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Experience Level *</label>
                <select
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                  onChange={(e) => handleInputChange('experienceLevel', e.target.value)}
                >
                  <option value="">Select experience level</option>
                  <option value="student">Student / trainee</option>
                  <option value="entry-level">Entry-level technician</option>
                  <option value="experienced">Experienced technician</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2">Short Message</label>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                onChange={(e) => handleInputChange('message', e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-green-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-lg"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4m0 12v4m0-8a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <main className="bg-white text-black">
      {/* Enhanced Hero Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-green-50 via-white to-emerald-50/40 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className={`${container} text-center relative z-10`}>
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-green-200 px-4 py-2 text-sm font-medium text-green-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Response within 24 hours
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-green-200 px-4 py-2 text-sm font-medium text-green-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              33 Facilities Served
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-green-200 px-4 py-2 text-sm font-medium text-green-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Verified Solutions
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-balance mb-6">
            <span className="text-green-700 relative">
              Talk to Us
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-green-200" fill="currentColor" viewBox="0 0 100 10">
                <path d="M0,5 Q25,10 50,5 T100,5" />
              </svg>
            </span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold leading-[1.1] tracking-tight text-balance mb-8">
            Let's build <span className="text-green-700">stronger healthcare facilities</span> together
          </h2>
          
          <p className="text-xl leading-8 text-black/90 max-w-3xl mx-auto mb-12">
            Transform your healthcare facility with reliable energy and digital solutions.
          </p>
          
          {/* Alternative contact methods */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+255656721324"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            <a
              href="https://wa.me/255656721324"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-green-600 bg-transparent px-6 py-3 text-base font-semibold text-green-600 transition-all duration-300 hover:bg-green-600 hover:text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href="mailto:info@ubuntuafyalink.co.tz"
              className="inline-flex items-center gap-2 rounded-full border-2 border-gray-300 bg-white px-6 py-3 text-base font-semibold text-black transition-all duration-300 hover:border-gray-400 hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Step Progress Indicator */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className={container}>
          <div className="flex items-center justify-center py-4">
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 ${!selectedCategory ? 'text-green-600' : 'text-gray-400'}`}>
                <div className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  !selectedCategory ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  1
                </div>
                <span className="font-medium">Select Category</span>
              </div>
              <div className={`h-0.5 w-16 transition-colors duration-300 ${
                selectedCategory ? 'bg-green-600' : 'bg-gray-300'
              }`}></div>
              <div className={`flex items-center gap-2 ${selectedCategory ? 'text-green-600' : 'text-gray-400'}`}>
                <div className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  selectedCategory ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  2
                </div>
                <span className="font-medium">Complete Form</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 1: Who Are You? */}
      {!selectedCategory && (
        <section className="w-full py-16 md:py-20">
          <div className={container}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-600 text-white px-4 py-2 text-sm font-bold mb-4 animate-pulse">
                <span className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center text-xs">1</span>
                Select who you are
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-balance">
                Who Are You?
              </h2>
              <p className="text-lg text-black/70 mt-4 max-w-2xl mx-auto">
                Choose the option that best describes you to get started
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
              {categories.map((category, idx) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={[
                    "group relative bg-white rounded-3xl border-2 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 text-left overflow-hidden",
                    idx === 0 && "border-blue-600/20 bg-gradient-to-br from-blue-200 via-blue-50 to-white",
                    idx === 1 && "border-purple-600/20 bg-gradient-to-br from-purple-200 via-purple-50 to-white",
                    idx === 2 && "border-green-600/20 bg-gradient-to-br from-green-200 via-green-50 to-white"
                  ].join(" ")}
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className={[
                      "flex items-center justify-center w-20 h-20 rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300",
                      idx === 0 && "bg-gradient-to-br from-blue-500 to-blue-600",
                      idx === 1 && "bg-gradient-to-br from-purple-500 to-purple-600",
                      idx === 2 && "bg-gradient-to-br from-green-500 to-green-600"
                    ].join(" ")}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-green-700 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-black/70 leading-relaxed mb-4">{category.description}</p>
                    <div className="flex items-center text-green-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Get Started</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Corner decoration */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Step 2: Form */}
      {selectedCategory && (
        <section className="w-full py-16 md:py-20">
          <div className={container}>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 rounded-full bg-green-600 text-white px-4 py-2 text-sm font-bold mb-4 animate-pulse">
                  <span className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center text-xs">2</span>
                  Complete the form
                </div>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setFieldErrors({});
                    setTouchedFields(new Set());
                  }}
                  className="text-green-600 hover:text-green-700 font-medium mb-4 transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to selection
                </button>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-balance">
                  {categories.find(c => c.id === selectedCategory)?.title}
                </h2>
                <p className="text-lg text-black/70 mt-4 max-w-2xl mx-auto">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-8 bg-green-50 border-2 border-green-200 rounded-2xl p-6 text-center animate-fadeIn">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Thank you! Your message has been sent.</h3>
                  <p className="text-green-700">We'll get back to you within 24 hours.</p>
                </div>
              )}
              
              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-8 bg-red-50 border-2 border-red-200 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-red-800 mb-2">Something went wrong</h3>
                  <p className="text-red-700">Please try again or contact us directly.</p>
                </div>
              )}
              
              <div className="bg-white rounded-3xl border-2 border-slate-600/20 bg-gradient-to-br from-slate-200 via-slate-50 to-white p-8 shadow-lg relative overflow-hidden">
                {submitStatus !== 'success' && renderForm()}
                
                {/* Loading Overlay */}
                {isSubmitting && (
                  <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="text-center">
                      <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-lg font-medium text-black">Sending your message...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Direct Contact Information */}
      <section className="w-full py-16 md:py-20 bg-gray-50">
        <div className={container}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-balance text-center mb-12">
              Direct Contact Information
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white rounded-3xl border-2 border-orange-600/20 bg-gradient-to-br from-orange-200 via-orange-50 to-white p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13-9-13-9-13-9-13-9s-9 6-9 13c0 3.09 1.42 5.9 3.72 7.84l-2.72 7.16 7.16-2.72C16.1 23.58 18.91 25 22 25c7 0 9-6 9-13z"/>
                </svg>
                <h3 className="font-bold text-black mb-2">Location</h3>
                <p className="text-black/70">Dar es Salaam, Tanzania</p>
              </div>
              <div className="bg-white rounded-3xl border-2 border-cyan-600/20 bg-gradient-to-br from-cyan-200 via-cyan-50 to-white p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <h3 className="font-bold text-black mb-2">Email</h3>
                <p className="text-black/70">info@ubuntuafyalink.co.tz</p>
              </div>
              <div className="bg-white rounded-3xl border-2 border-indigo-600/20 bg-gradient-to-br from-indigo-200 via-indigo-50 to-white p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <h3 className="font-bold text-black mb-2">Phone</h3>
                <p className="text-black/70">+255 656 721 324</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <a
                href="https://wa.me/255656721324"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Chat on WhatsApp
              </a>
              <p className="text-sm text-black/60 mt-2">
                Many healthcare facilities respond faster on WhatsApp than email.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50/40">
        <div className={container}>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-6">
              Prefer to speak directly?
            </h2>
            <p className="text-xl text-black/90 mb-8 max-w-3xl mx-auto">
              Our team can discuss your facility needs, partnership ideas, or program participation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="tel:+255656721324"
                className="btn-bounce inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-600"
              >
                Talk to Our Team
              </Link>
              <Link
                href="/contact"
                className="btn-bounce inline-flex items-center justify-center rounded-full border-2 border-green-600/40 bg-white px-8 py-4 text-base font-semibold text-black shadow-lg transition-all duration-300 hover:border-green-600 hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

