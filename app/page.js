"use client";
import MainComponent from "@/components/Maincomponent.js/page";
import { useEffect, useState } from "react";
import Login from "./login/page";
import { auth } from "./firebase";

export default function Home() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setLoading(false);
      setUser(currentUser);

      if (currentUser) {
        console.log("Current user:", currentUser);
      } else {
        console.log("No user signed in");
      }
    });

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
