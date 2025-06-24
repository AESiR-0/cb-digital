"use client"
import React from "react";
import SectionHeader from "../SectionHeader";
import Carousel from "../Carousel";
import { testimonialsData } from "@/app/data/testimonials";

// Cache the testimonials data
const cachedTestimonials = testimonialsData;

export default function Testimonials() {
  return (
    <div className="w-full bg-[#171717] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader subtitle="TESTIMONIALS" title="What Our Clients Say" />
        
        {/* Carousel Section */}
        <div className="pb-20  px-10">
          <Carousel content={cachedTestimonials} section="testimonials" />
        </div>
      </div>
    </div>
  );
}
