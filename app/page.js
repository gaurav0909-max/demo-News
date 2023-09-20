'use client'
import MainComponent from "@/components/Maincomponent.js/page";
import { useEffect, useState } from "react";
import Login from "./login/page";
import { auth } from "./firebase"; // Import your Firebase config file here

export default function Home() {
  const [user, setUser] = useState(null); // Initialize user as null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up the Firebase onAuthStateChanged listener
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setLoading(false); // Loading is complete
      setUser(currentUser); // Set the current user

      // currentUser will be null if no user is signed in
      if (currentUser) {
        console.log("Current user:", currentUser);
      } else {
        console.log("No user signed in");
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader-overlay">
        <div className="loader"></div>
      </div>
      ) : user ? (
        <MainComponent />
      ) : (
        <Login />
      )}
    </div>
  );
}

