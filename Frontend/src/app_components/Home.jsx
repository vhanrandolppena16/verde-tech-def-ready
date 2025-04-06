// FinalHome.jsx

// Importing Libraries
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

// Importing Components
import Header from "./home_components/FinalHeader";
import Sidebar from "./old_home_components/Sidebar";
// import HydroponicBackground from "./old_home_components/Background";

function Home() {
  const [navigationText, setNavigationText] = useState("Dashboard");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header navigationText={navigationText} />

      {/* Layout Container */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          setNavigationText={setNavigationText}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

        {/* Main Content Area
        <div className="relative flex-1 overflow-y-auto">
          <HydroponicBackground collapsed={collapsed} />
            <Outlet>
              
            </Outlet>*/}
        </div> 
      </div>
  );
}

export default Home;
