// AuthContext.jsx

// Importing core React and Firebase modules
import React, { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

// Firebase auth instance
import { authentication } from "../firebase/firebase";

// Creating the authentication context
const AuthContext = createContext();

// AuthProvider component to wrap the entire app and provide auth state
const AuthProvider = ({ children }) => {
  // User object from Firebase Auth
  const [user, setUser] = useState(null);

  // Loading flag to wait for Firebase to determine auth status
  const [loading, setLoading] = useState(true);

  // Listen to auth state changes (on mount)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authentication, (currentUser) => {
      setUser(currentUser);   // Set user when authenticated
      setLoading(false);      // Auth status resolved
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []);

  // Providing user and loading state to children
  return (
    <AuthContext.Provider value={{ user, loading }}>
      {/* Only render children after auth state is resolved */}
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context throughout the app
const useAuth = () => useContext(AuthContext);

export {AuthProvider, useAuth}