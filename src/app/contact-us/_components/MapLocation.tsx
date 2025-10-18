"use client";
import React from "react";
import { MapPin } from "lucide-react";

const MapLocation = () => {
  return (
    <section className="container_main">
      {/* Header */}
      <div className="mb-8">
        <p className="text-custom-lightBlue text-base mb-4">
          Find Us on the map
        </p>
        <h2 className="text-5xl font-bold text-custom-darkBlue mb-1 leading-tight">
          Easily locate our office and
          <br />
          connect with us in person.
        </h2>
      </div>

      {/* Map Container */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        {/* Google Map Embed */}
        <div className="w-full h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462565.70878469187!2d46.345401949999995!3d24.774265400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sjo!4v1729267890123!5m2!1sen!2sjo"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapLocation;
