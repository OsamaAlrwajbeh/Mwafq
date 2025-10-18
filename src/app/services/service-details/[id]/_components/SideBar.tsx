"use client"
import React, { useState } from 'react'

function SideBar() {
 const [activeService, setActiveService] = useState('Driving License Examination');
      const services = [
    'Driving License Examination',
    'Delivery Examination',
    'Employment Medical Exam',
    'Drug Test',
    'Drug Test',
    'Drug Test',
    'Drug Test',
    'Drug Test',
    'Drug Test'
  ];

  return (
   <div className="lg:col-span-3 ">
            <div className="bg-[#dbf2f8] rounded-3xl p-6 h-[80%]">
             
              <div className="relative mb-8">
                 
            <input
              type="text"
              placeholder="Search"
              className="bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-cyan-400 w-full text-black"
            />
            <svg
              className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          

              {/* Services List */}
              <h3 className="text-gray-800 font-bold mb-6 text-lg">Services List</h3>
              
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className={`px-2 py-1 ${activeService === service ? 'bg-[#F9F9F9] text-gray-800' : ''}`}>
                    <button
                     onClick={() => setActiveService(service)}
                      className={`w-full text-left px-2 transition-all duration-200 text-sm ${
                        activeService === service
                          ? ' font-medium border-l-2 border-blue-500  '
                          : 'text-gray-600 hover:bg-white hover:bg-opacity-50 '
                      }`}
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
  )
}

export default SideBar