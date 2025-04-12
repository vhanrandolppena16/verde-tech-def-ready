// src/components/Dashboard.jsx
import React, { useEffect, useState } from "react";
import Gauge from "./dashboard_component/Gauge";
import { rtdb } from "../../../firebase/firebase"; // Make sure the path is correct
import GrowthStage from "../../../assets/images/lettuce-growing-timeline.png";
import { ref, onValue } from "firebase/database"; // Import Firebase database functions

const Dashboard = () => {
  // State to hold the sensor values
  const [temperaturevalue, setTemperature] = useState(0);
  const [humidityvalue, setHumidity] = useState(0);
  const [pHvalue, setPH] = useState(0);
  const [tdsvalue, setTDS] = useState(0);

  // Fetch the sensor data from Firebase and listen for real-time updates
  useEffect(() => {
    const readingsRef = ref(rtdb, "readings"); // Assuming 'readings' is the root node

    // Set up real-time listener for the 'readings' node
    onValue(readingsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        
        // Assuming the latest data is under an 'id' node or similar (e.g., 'id1', 'id2', etc.)
        // Here, we grab the most recent reading's data
        const latestReadingId = Object.keys(data)[Object.keys(data).length - 1]; // Get last entry
        const latestReading = data[latestReadingId];

        // Update state with the latest values from Firebase
        setTemperature(latestReading.temperature); // Assuming sensor1 is the temperature
        setHumidity(latestReading.humidity); // Assuming sensor2 is the humidity
        // setPH(latestReading.ph); // Assuming sensor3 is the pH
        setTDS(latestReading.tds); // Assuming sensor4 is the TDS
      }
    });

    

    // Cleanup listener when the component is unmounted
    return () => {
      // Detach the listener when the component is unmounted to prevent memory leaks
    };
  }, []);

  useEffect(() => {
    document.title = "Dashboard | Verde";
  }, []);

  return (
    <div
      className="
        grid grid-cols-1 xl:grid-cols-3 gap-6 p-6
        min-h-[590px]
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
          value={temperaturevalue}
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
          value={humidityvalue}
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
          value={0}
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
          value={tdsvalue}
          unit="ppm"
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
            bg-green-50 rounded-2xl shadow-md h-[50%] min-h-[240px]
          "
          style={{
            backgroundImage: `url(${GrowthStage})`,
            backgroundSize: "95% 90%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h2 className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-green-100 py-1 rounded-md text-sm font-2xl shadow">
            Prediction Results
          </h2>
        </div>

        {/* 📷 Camera Feed */}
        <div
          className="
            flex items-center justify-center
            bg-white rounded-2xl p-4 shadow-md h-[50%] min-h-[240px]
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
