"use client";
import Header from "@/components/Header/header";
import Content from "@/components/Content/content";
import Login from "./login/page";
import MainComponent from "@/components/Maincomponent.js/page";
// import { useSession } from "next-auth/react";
import loaderGIF from "./Next-loader.gif";
import { useSession } from "next-auth/react";
export default function Home() {
  const { status: session } = useSession();

  console.log("session", session);

  if (!session) {
    // Handle cases where session is null or undefined (loading or unauthenticated)
    return (
      <div>
        <Login />
      </div>
    );
  }

  if (session === "authenticated") {
    return (
      <main className="md:text-2xl mx-auto">
        <MainComponent />
        {/* <Login /> */}
      </main>
    );
  }

 

  if (session === "unauthenticated") {
    return (
      <div>
        <Login />
      </div>
    );
  }
}
