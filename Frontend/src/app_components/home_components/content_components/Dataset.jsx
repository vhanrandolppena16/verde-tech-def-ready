// Dataset.jsx

// src/components/DatasetTable.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

const DatasetTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchFirestoreData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "growth_stages"));
        const rows = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(rows);
      } catch (error) {
        console.error("Error fetching Firestore data:", error);
      }
    };

    fetchFirestoreData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Growth Stages</h2>
      <div className="overflow-auto rounded-xl border border-gray-200 bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="p-2">No. of Days</th>
              <th className="p-2">Plant</th>
              <th className="p-2">Growth Stage</th>
              <th className="p-2">Temperature</th>
              <th className="p-2">Humidity</th>
              <th className="p-2">pH</th>
              <th className="p-2">TDS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={row.id} className={index % 2 === 0 ? 'bg-white' : 'bg-green-100'}>
                <td className="p-2">{row.days}</td>
                <td className="p-2">{row.plant}</td>
                <td className="p-2">{row.growth_stage}</td>
                <td className="p-2">{row.temperature}</td>
                <td className="p-2">{row.humidity}</td>
                <td className="p-2">{row.ph}</td>
                <td className="p-2">{row.tds}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DatasetTable;
