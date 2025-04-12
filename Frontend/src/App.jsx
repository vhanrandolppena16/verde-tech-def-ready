// App.jsx

// Importing the Routes and Route components from react-router to handle routing in the app
import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { authentication } from "./firebase/firebase";

// Importing custom components used in the app
import AuthLayout from "./startup_components/AuthLayout";                         // Welcome or landing screen
import { AuthProvider, useAuth } from "./startup_components/AuthContext";                    // Context provider
import WelcomeScreen from "./startup_components/login_components/WelcomeScreen";  // Login/SignUp form component
import Login from "./startup_components/login_components/Login";                  // Login form component
import SignUp from "./startup_components/login_components/Signup";                // Sign-up/registration form component

// Importing components for contents used in the app
import Home from "./app_components/Home";                           // Main component shown after login (dashboard, etc.)
import Dashboard from "./app_components/home_components/content_components/Dashboard";
import PredictionTrends from "./app_components/home_components/content_components/analysis_components/PredictionTrends";
import Dataset from "./app_components/home_components/content_components/Dataset"
import AccountPage from "./app_components/home_components/content_components/Account"
import AboutPage from "./app_components/home_components/content_components/About"
import LiveStreamPage from "./app_components/home_components/content_components/LiveStream"

// Wrapper for protecting routes
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div className="text-white p-4">Loading...</div>;
  if (!user) return <Login />;

  return children;
};

// Main App component
function App() {
  return (
    <AuthProvider>
      <Routes>
        {/*Rendering the component to set the welcome page for login and signup*/}
        <Route path="/" element={<AuthLayout />}>                          
          <Route path="/" element={<WelcomeScreen />} />  {/* Welcome screen route (root path) */}
          <Route path="/login" element={<Login />} />     {/* Login screen route */}
          <Route path="/signup" element={<SignUp />} />   {/* Sign Up screen route */}
        </Route>

        <Route path='/' element={<Home/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path='/analysis' element={<PredictionTrends />}/>
          <Route path='/dataset' element={<Dataset />}/>
          <Route path='/control'/>
          <Route path='/logs'/>
          <Route path='/account' element={<AccountPage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/livestream' element={<LiveStreamPage />}/>
          <Route path='/logout'/> 
        </Route>
      </Routes>

    </AuthProvider>
  )
}

// Exporting the App component as default
export default App;
