// FinalContentArea.jsx
import React from "react";
import GrowthStage from "../../../../assets/images/lettuce-growing-timeline.png";


const PredictionStage = () => {
  return (
    <>
        <div
        className="rounded-2xl shadow-md bg-green-50"
        style={{
            backgroundImage: `url(${GrowthStage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            height: "300px", // or any height you want
        }}
        >
        {/* You can add overlay content here if needed */}
        </div>
    </>
  );
};

export default PredictionStage;