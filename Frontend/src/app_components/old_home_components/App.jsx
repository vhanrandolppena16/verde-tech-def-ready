import React, { useState } from "react";
import Header from "../Front-End/Header";
import Sidebar from "../Front-End/Sidebar";
import HydroponicBackground from "../Content/Background";

function App() {
    const [navigationText, setNavigationText] = useState("Dashboard");
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="app-container">
            <Header navigationText={navigationText} />
            <Sidebar setNavigationText={setNavigationText} collapsed={collapsed} setCollapsed={setCollapsed} />
            <div className={`main-content`}>
                <HydroponicBackground collapsed={collapsed} />
            </div>
        </div>
    );
}

export default App;
