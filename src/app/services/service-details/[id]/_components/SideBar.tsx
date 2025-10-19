"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";

interface Service {
  id: string;
  name: string;
  slug: string;
}

const SERVICES: Service[] = [
  {
    id: "1",
    name: "Driving License Examination",
    slug: "driving-license-examination",
  },
  {
    id: "2",
    name: "Delivery Examination",
    slug: "delivery-examination",
  },
  {
    id: "3",
    name: "Employment Medical Exam",
    slug: "employment-medical-exam",
  },
  {
    id: "4",
    name: "Drug Test",
    slug: "drug-test",
  },
  {
    id: "5",
    name: "Health Certificate",
    slug: "health-certificate",
  },
  {
    id: "6",
    name: "Food Handler Examination",
    slug: "food-handler-examination",
  },
  {
    id: "7",
    name: "Periodic Medical Checkup",
    slug: "periodic-medical-checkup",
  },
  {
    id: "8",
    name: "Vaccination Services",
    slug: "vaccination-services",
  },
  {
    id: "9",
    name: "Laboratory Tests",
    slug: "laboratory-tests",
  },
  {
    id: "10",
    name: "X-Ray Services",
    slug: "x-ray-services",
  },
  {
    id: "11",
    name: "Occupational Health Assessment",
    slug: "occupational-health-assessment",
  },
];

function SideBar() {
  const [activeService, setActiveService] = useState<string>(SERVICES[0].id);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter services based on search query
  const filteredServices = SERVICES.filter((service) =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleServiceClick = (serviceId: string) => {
    setActiveService(serviceId);
    // You can add navigation or other actions here
  };

  return (
    <div className="lg:col-span-3">
      <div className="bg-[#dbf2f8] rounded-3xl p-6 h-[700px] overflow-auto">
        {/* Search Bar */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200 w-full text-black transition-all"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>

        {/* Services List */}
        <div>
          <h3 className="text-gray-800 font-bold mb-6 text-lg">
            Services List
          </h3>

          {filteredServices.length === 0 ? (
            <p className="text-gray-500 text-center py-8 text-sm">
              No services found matching &quot;{searchQuery}&quot;
            </p>
          ) : (
            <ul className="space-y-2">
              {filteredServices.map((service) => (
                <li
                  key={service.id}
                  className={`px-1 py-2 cursor-pointer ${
                    activeService === service.id
                      ? "bg-white/50 text-gray-800 font-medium "
                      : "text-gray-600 hover:bg-white/50"
                  }`}
                >
                  <button
                    onClick={() => handleServiceClick(service.id)}
                    className={`w-full text-left px-4 py-2 cursor-pointer transition-all duration-200 text-sm ${
                      activeService === service.id
                        ? " text-gray-800 font-medium border-l-2 border-primary-blue"
                        : "text-gray-600 hover:bg-white/50"
                    }`}
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
