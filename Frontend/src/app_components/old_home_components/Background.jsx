import React from "react";
import "./Background.css";

const HydroponicBackground = ({ collapsed }) => {
    return (
        <div className={`background-container ${collapsed ? "expanded" : ""}`}>
            <div className="content">
                <h1>{collapsed ? "Full View Mode" : "Sidebar Expanded Mode"}</h1>
            </div>
        </div>
    );
};

export default HydroponicBackground;
