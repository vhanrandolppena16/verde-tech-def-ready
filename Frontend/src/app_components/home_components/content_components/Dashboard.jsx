import React from 'react';
import Gauge from "./dashboard_component/Gauge";
import GrowthStage from "../../../assets/images/lettuce-growing-timeline.png";

const Dashboard = () => {
  return (
    <div
      className="
        grid grid-cols-1 xl:grid-cols-3 gap-6 p-6
        min-h-[590px] max-h-full
      "
    >
      {/* 🔵 Gauges Container */}
      <div
        className="
          grid grid-cols-2 gap-4 bg-white rounded-2xl p-4 shadow-md
          xl:col-span-2
        "
      >
        {/* 🌡️ Temperature Gauge */}
        <Gauge
          name="Temperature"
          min={0}
          max={50}
          value={24}
          unit="°C"
          customRanges={[
            { stop: 0, color: "blue" },
            { stop: 15, color: "green" },
            { stop: 30, color: "red" },
            { stop: 50, color: "red" },
          ]}
        />

        {/* 💧 Humidity Gauge */}
        <Gauge
          name="Humidity"
          min={0}
          max={100}
          value={50}
          unit="%"
          customRanges={[
            { stop: 0, color: "red" },
            { stop: 30, color: "orange" },
            { stop: 60, color: "green" },
            { stop: 100, color: "blue" },
          ]}
        />

        {/* ⚗️ pH Gauge */}
        <Gauge
          name="pH"
          min={0}
          max={14}
          value={6.3}
          customRanges={[
            { stop: 0, color: "yellow" },
            { stop: 6, color: "green" },
            { stop: 9, color: "blue" },
            { stop: 14, color: "blue" },
          ]}
        />

        {/* 🌊 TDS Gauge */}
        <Gauge
          name="Total Dissolved Solids"
          min={0}
          max={2000}
          value={903}
          unit= "ppm"
          customRanges={[
            { stop: 0, color: "blue" },
            { stop: 700, color: "green" },
            { stop: 1500, color: "orange" },
            { stop: 2000, color: "red" },
          ]}
        />
      </div>

      {/* 📦 Right Column: Growth Stage + Camera Feed */}
      <div className="flex flex-col gap-6">
        {/* 🌱 Growth Stage */}
        <div
          className="
            relative flex items-center justify-center
            bg-green-50 rounded-2xl shadow-md h-[50%]
          "
          style={{
            backgroundImage: `url(${GrowthStage})`,
            backgroundSize: "95% 90%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h2 className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-green-100 h2x-4 py-1 rounded-md text-sm font-2xl shadow">
            Prediction Results
          </h2>
        </div>

        {/* 📷 Camera Feed */}
        <div
          className="
            flex items-center justify-center
            bg-white rounded-2xl p-4 shadow-md h-[50%]
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
