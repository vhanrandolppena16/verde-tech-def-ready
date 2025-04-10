//Dashboard.jsx
import React from 'react';

const Dashboard = () => {
  return (
    // 🧩 Main dashboard grid layout
    <div
      className="
        grid                 // Use CSS grid layout
        grid-cols-1         // Single column on small screens
        xl:grid-cols-3      // 3 columns on extra-large screens
        gap-6               // Gap between grid items
        p-6                 // Padding around the dashboard
    min-h-[590px]        // ✅ Optional: Set a taller minimum height
    max-h-full           // Respect the 620px from parent
      "
    >
      {/* 🔵 Gauges Container */}
      <div
        className="
          grid               // Inner grid for gauge cards
          grid-cols-2        // Two columns
          gap-4              // Space between gauge cards
          bg-white           // White background for container
          rounded-2xl        // Large rounded corners
          p-4                // Padding inside
          shadow-md          // Subtle shadow for elevation
          xl:col-span-2      // Span 2 columns on XL screens
        "
      >
        {/* 🌡️ Temperature Gauge */}
        <div
          className="
            flex flex-col               // Stack items vertically
            items-center justify-center // Center content
            bg-blue-50                 // Light blue background
            rounded-xl                 // Rounded corners
            p-6                        // Padding inside
            shadow                     // Basic shadow
          "
        >
          <span className="text-xl font-semibold mb-2">Temperature</span>
          <div className="text-3xl font-bold">0°C</div>
        </div>

        {/* 💧 Humidity Gauge */}
        <div
          className="
            flex flex-col items-center justify-center
            bg-blue-50 rounded-xl p-6 shadow
          "
        >
          <span className="text-xl font-semibold mb-2">Humidity</span>
          <div className="text-3xl font-bold">0%</div>
        </div>

        {/* ⚗️ pH Gauge */}
        <div
          className="
            flex flex-col items-center justify-center
            bg-blue-50 rounded-xl p-6 shadow
          "
        >
          <span className="text-xl font-semibold mb-2">pH</span>
          <div className="text-3xl font-bold">0</div>
        </div>

        {/* 🌊 TDS Gauge */}
        <div
          className="
            flex flex-col items-center justify-center
            bg-blue-50 rounded-xl p-6 shadow
          "
        >
          <span className="text-xl font-semibold mb-2">Total Dissolved Solids</span>
          <div className="text-3xl font-bold">0 ppm</div>
        </div>
      </div>

            {/* 📦 Right Column: Growth Stage + Camera Feed */}
            <div className="flex flex-col gap-6">
        {/* 🌱 Growth Stage Container */}
        <div
          className="
            flex items-center justify-center
            bg-green-50 rounded-2xl p-4 shadow-md
            h-[50%]                        // Match gauge height
          "
        >
          <img
            src="/growth_stage.png"
            alt="Growth Stage"
            className="w-full h-full object-contain"
          />
        </div>

        {/* 📷 Camera Feed Container */}
        <div
          className="
            flex items-center justify-center
            bg-white rounded-2xl p-4 shadow-md
            h-[50%]                        // Match gauge height
          "
        >
          <img
            src="/camera_feed.png"
            alt="Camera Feed"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
