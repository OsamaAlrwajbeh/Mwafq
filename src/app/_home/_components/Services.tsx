"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./services.css";
import Image from "next/image";
import ServiceCard from '@/components/ui/Card';
import health1 from "@images/Home/health1.png";
import health2 from "@images/Home/health2.png";
import health3 from "@images/Home/health3.png";

const Services = () => {
  const services = [
    {
      src: health1,
      title: "Iqama Examination",
      description:
        "Streamlined and hassle-free Iqama medical examinations for your employees",
    },
    {
      src: health2,
      title: "Baladiya Examination",
      description:
        "Quick, reliable, and fully compliant Baladiya examinations for your employees",
    },
    {
      src: health3,
      title: "Pre-Employment Test",
      description:
        "Fast and accurate pre-employment medical tests to ensure your candidates are ready for work",
    },
    {
      src: health3,
      title: "Pre-Employment Test",
      description:
        "Fast and accurate pre-employment medical tests to ensure your candidates are ready for work",
    },
    {
      src: health3,
      title: "Pre-Employment Test",
      description:
        "Fast and accurate pre-employment medical tests to ensure your candidates are ready for work",
    },
  ];

  return (
    <section className="container_main">
      {/* Header */}
      <div className="mb-12">
        <p className="text-cyan-500 text-base font-medium mb-2">Our Services</p>
        <h1 className="text-4xl md:text-5xl font-bold  text-custom-darkBlue">
          Our Medical Services.
        </h1>
      </div>

      {/* Swiper Container */}
      <div className="relative px-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="!pb-12"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.src}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-all flex items-center justify-center group hover:scale-105 cursor-pointer"
          aria-label="Previous service"
        >
          <svg
            className="w-6 h-6 text-gray-600 group-hover:text-cyan-500 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-all flex items-center justify-center group hover:scale-105 cursor-pointer"
          aria-label="Next service"
        >
          <svg
            className="w-6 h-6 text-gray-600 group-hover:text-cyan-500 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Services;
