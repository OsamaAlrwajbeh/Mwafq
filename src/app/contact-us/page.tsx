import React from "react";
import ContactUs from "./components/ContactUs";
import MapLocation from "./components/MapLocation";
import Contact from "@/components/common/Contact";

function page() {
  return (
    <div className="bg-white">
      <ContactUs />
      <MapLocation />
      <Contact />
    </div>
  );
}

export default page;
