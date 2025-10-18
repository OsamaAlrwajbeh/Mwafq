import React from "react";
import AboutUs from "./components/AboutUs";
import Partnership from "./components/Partnership";
import Benefits from "./components/Benefits";
import Features from "./components/Features";

function page() {
  return (
    <div className="min-h-screen bg-white">
      <AboutUs />
      <Partnership />
      <Benefits />
      <Features />
    </div>
  );
}

export default page;
