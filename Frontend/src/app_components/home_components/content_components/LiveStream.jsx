// LiveStream.jsx

import React from 'react';

const LiveStreamPage = () => {
  return (
    <div className="p-6 max-w-5xl h-full mx-auto bg-white bg-opacity-90 rounded-3xl shadow-xl">
      <h2 className="text-2xl font-bold text-green-900 mb-4">Live Stream</h2>

      {/* 🌱 Crop Label */}
      <div className="mb-2 text-lg font-semibold text-left text-green-700">Lettuce</div>

      {/* 🎥 Live Stream Container */}
      <div className="relative h-[87%] rounded-2xl overflow-hidden border-4 border-blue-600 shadow-lg">
        {/* 🔴 Live Indicator */}
        <div className="absolute top-2 right-2 w-3 h-3 bg-red-600 rounded-full animate-pulse z-10" />

        {/* 📹 Image or Stream Feed */}
        <img
          src="/images/lettuce-stream.jpg"
          alt="Live Plant Stream"
          className="w-full h-auto object-cover"
        />

        {/* 🗺️ Metadata Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-sm p-3">
          <div className="flex items-start gap-2">
            {/* 📍 Thumbnail Map (Optional) */}
            <img
              src="/images/map-thumb.png"
              alt="Map"
              className="w-20 h-20 object-cover rounded-md border"
            />
            <div className="flex flex-col">
              <strong>Antipolo, Rizal, Philippines</strong>
              <span>H5FJ+H5F, Gladiola St, Antipolo, 1870 Rizal</span>
              <span>Latitude: 14.573928</span>
              <span>Longitude: 121.180406</span>
              <span>April 1, 2025 11:59:21PM GMT+8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStreamPage;
