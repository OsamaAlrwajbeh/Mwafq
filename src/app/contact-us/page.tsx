import React from "react";
import ContactUs from "./_components/ContactUs";
import MapLocation from "./_components/MapLocation";
import Contact from "@/components/common/Contact";

function page() {
  return (
    <div>
      <ContactUs />
      <MapLocation />
      <Contact />
    </div>
  );
}

export default page;
