import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { rtdb } from "../../../firebase/firebase"; // Make sure the path is correct

const GROWTH_DURATION_DAYS = 30; // Assumed days to full maturity (you can change this)

// Helper function to compute growth stage based on number of days
const getGrowthStage = (days) => {
  if (days < 7) return "Germination";
  if (days < 14) return "Seeding";
  if (days < 21) return "Vegetative";
  if (days < 28) return "Mature";
  return "Harvest";
};

const SensorTable = () => {
  const [sensorData, setSensorData] = useState([]);
  const [startDate, setStartDate] = useState(() => {
    const saved = localStorage.getItem('plantStartDate');
    return saved ? new Date(saved) : new Date(); // fallback to now if not set
  });

  useEffect(() => {
    const sensorRef = ref(rtdb, 'readings');
    const unsubscribe = onValue(sensorRef, (snapshot) => {
      if (snapshot.exists()) {
        const rawData = snapshot.val();
        const parsedData = Object.entries(rawData).map(([id, entry]) => ({
          id,
          ...entry,
          timestampObj: new Date(entry.timestamp) // parse timestamp to Date
        }));
        setSensorData(parsedData);
      } else {
        setSensorData([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleResetStartDate = () => {
    const now = new Date();
    localStorage.setItem('plantStartDate', now.toISOString());
    setStartDate(now);
  };

  return (
    <div className="p-6 overflow-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Sensor Readings Table</h2>
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
          onClick={handleResetStartDate}
        >
          Reset Growth Start
        </button>
      </div>

      <table className="min-w-full bg-white rounded-xl overflow-hidden shadow">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-left py-2 px-4">Timestamp</th>
            <th className="text-left py-2 px-4">Temperature (°C)</th>
            <th className="text-left py-2 px-4">Humidity (%)</th>
            <th className="text-left py-2 px-4">pH</th>
            <th className="text-left py-2 px-4">TDS (ppm)</th>
            <th className="text-left py-2 px-4">Day #</th>
            <th className="text-left py-2 px-4">Growth Stage</th>
            <th className="text-left py-2 px-4">Predicted Maturity (Days)</th>
          </tr>
        </thead>
        <tbody>
          {sensorData.map((entry) => {
            const dayNum = Math.floor(
              (entry.timestampObj - startDate) / (1000 * 60 * 60 * 24)
            );
            return (
              <tr key={entry.id} className="border-t">
                <td className="py-2 px-4">{entry.timestamp}</td>
                <td className="py-2 px-4">{entry.temperature}</td>
                <td className="py-2 px-4">{entry.humidity}</td>
                <td className="py-2 px-4">{entry.ph}</td>
                <td className="py-2 px-4">{entry.tds}</td>
                <td className="py-2 px-4">{dayNum >= 0 ? dayNum : 0}</td>
                <td className="py-2 px-4">{getGrowthStage(dayNum)}</td>
                <td className="py-2 px-4">{GROWTH_DURATION_DAYS}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SensorTable;
