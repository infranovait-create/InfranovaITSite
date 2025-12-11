"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PortfolioSlider() {
  const slides = [
    {
      title: "Digital Growth Campaign",
      img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80",
      tag: "Brand Strategy",
    },
    {
      title: "Creative Product Branding",
      img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=80",
      tag: "Brand Identity",
    },
    {
      title: "Event Experience Design",
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80",
      tag: "Campaign Creative",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((current - 1 + slides.length) % slides.length);

  const next = () =>
    setCurrent((current + 1) % slides.length);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <h2 className="text-4xl font-bold text-[#0D1B3E]">
          Crafting <span className="text-[#0C6DFD]">Solutions</span> That{" "}
          <span className="text-[#04C678]">Inspire</span>
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl">
          Explore our collection of modern branding, creative campaigns, and
          innovative digital experiences that helped brands make a powerful impact.
        </p>

        {/* SLIDER */}
        <div className="relative mt-16 flex items-center justify-center">

          {/* LEFT BUTTON */}
          <button
            onClick={prev}
            className="absolute left-0 bg-white p-3 rounded-full shadow-md hover:bg-gray-100"
          >
            <ChevronLeft size={26} />
          </button>

          {/* SLIDER IMAGES */}
          <div className="flex gap-6 items-center">
            {slides.map((item, index) => {
              const isActive = index === current;

              return (
                <motion.div
                  key={index}
                  animate={{
                    scale: isActive ? 1 : 0.75,
                    opacity: isActive ? 1 : 0.3,
                    zIndex: isActive ? 10 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="transition-all"
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-4 w-[380px] h-[270px]">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>

                  {/* TITLE + TAG */}
                  {isActive && (
                    <div className="text-center mt-4">
                      <p className="text-lg font-semibold text-[#0D1B3E]">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.tag}</p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={next}
            className="absolute right-0 bg-white p-3 rounded-full shadow-md hover:bg-gray-100"
          >
            <ChevronRight size={26} />
          </button>

        </div>
      </div>
    </section>
  );
}
