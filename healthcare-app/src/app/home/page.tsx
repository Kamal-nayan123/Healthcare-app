// src/app/home/page.tsx
import React from 'react';

// We will add authentication checks later
// For now, it's a simple placeholder

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Your Health Dashboard
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
        <p className="text-lg text-gray-600">
          Welcome back! Here you can view your personalized health insights, upcoming appointments, and more.
        </p>
        {/* Add dashboard components, charts, data displays here later */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-primary-light/20 p-6 rounded-lg">
             <h2 className="font-semibold text-primary-dark">Vitals Summary</h2>
             <p className="text-gray-600 mt-2">Your recent vital signs will appear here.</p>
          </div>
          <div className="bg-secondary/10 p-6 rounded-lg">
             <h2 className="font-semibold text-secondary">Upcoming Appointments</h2>
             <p className="text-gray-600 mt-2">No upcoming appointments scheduled.</p>
          </div>
        </div>
      </div>
    </div>
  );
}