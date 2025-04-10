import React from 'react';

const Analysis = ({ children }) => {
  return (
    <div className="bg-white border rounded-xl shadow p-4 w-full h-full flex items-center justify-center">
    {children || <span className="text-gray-400">Graph Placeholder</span>}
  </div>
  );
};

export default Analysis;
