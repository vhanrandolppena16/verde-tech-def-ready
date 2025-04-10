import React, { useState } from 'react';
import Analysis from '../Analysis';
import ToggleLegend from './ToggleLegend';

const graphOrder = ['humidity', 'temperature', 'ph', 'tds'];

const PredictionTrends = () => {
  const [activeGraphs, setActiveGraphs] = useState(['temperature', 'humidity', 'ph', 'tds']);

  const toggleGraph = (key) => {
    setActiveGraphs((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  // Get the graphs to render in fixed order
  const graphsToShow = graphOrder.filter((key) => activeGraphs.includes(key));
  const count = graphsToShow.length;

  return (
    <div className="flex flex-col items-center bg-white rounded-3xl p-6 shadow-xl w-full max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Prediction Trends</h2>

      {/* 📊 Responsive Graph Grid */}
      <div
        className={`
          grid w-full gap-4
          ${count === 1 ? 'grid-cols-1 place-items-center' : ''}
          ${count === 2 ? 'grid-cols-2' : ''}
          ${count === 3 ? 'grid-cols-2 auto-rows-auto' : ''}
          ${count === 4 ? 'grid-cols-2' : ''}
        `}
      >
        {graphsToShow.map((key) => (
          <Analysis key={key}>
            <p className="text-gray-500 capitalize">Graph: {key}</p>
          </Analysis>
        ))}
      </div>

      {/* ✅ Toggle Graphs */}
      <ToggleLegend active={activeGraphs} toggle={toggleGraph} />
    </div>
  );
};

export default PredictionTrends;
