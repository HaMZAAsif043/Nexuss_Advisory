import React from 'react';

export default function AccountingBookkeepingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#545454] mb-8">
          Accounting & BookKeeping Services
        </h1>
        <p className="text-xl text-[#545454]/80 mb-8">
          Comprehensive accounting and bookkeeping solutions to keep your finances organized and compliant.
        </p>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#545454] mb-4">Our Services Include:</h2>
          <ul className="list-disc list-inside space-y-2 text-[#545454]/80">
            <li>General Bookkeeping & Data Entry</li>
            <li>Accounts Payable & Receivable</li>
            <li>Financial Statement Preparation</li>
            <li>Monthly Financial Reporting</li>
            <li>Payroll Processing & Management</li>
            <li>QuickBooks Setup & Training</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
