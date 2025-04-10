import React from 'react';

const legends = [
  { label: 'Temperature', color: 'bg-orange-500', key: 'temperature' },
  { label: 'Humidity', color: 'bg-indigo-600', key: 'humidity' },
  { label: 'pH', color: 'bg-red-500', key: 'ph' },
  { label: 'Total Dissolved Solids', color: 'bg-green-500', key: 'tds' },
];

const ToggleLegend = ({ active, toggle }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
      {legends.map((item) => (
        <label key={item.key} className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={active.includes(item.key)}
            onChange={() => toggle(item.key)}
            className="hidden"
          />
          <div
            className={`w-5 h-5 rounded ${item.color} border-2 border-black flex items-center justify-center`}
          >
            {active.includes(item.key) && <div className="w-2 h-2 bg-white rounded" />}
          </div>
          <span className="text-sm">{item.label}</span>
        </label>
      ))}
    </div>
  );
};

export default ToggleLegend;
