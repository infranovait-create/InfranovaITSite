"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "Web & App Development",
      desc: "We create powerful, scalable and high-performance web & mobile applications using the latest modern technologies.",
      img: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=2000",
      points: [
        "Responsive Websites & Dashboards",
        "Custom Web Applications",
        "Mobile App Development (Android / iOS)",
        "SaaS Development & Multi-Tenant Platforms",
      ],
    },
    {
      title: "Software Development",
      desc: "Custom-built enterprise software crafted for automation, security and business-level scalability.",
      img: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=2000",
      points: [
        "ERP / CRM Solutions",
        "Custom Business Tools",
        "Automation Systems",
        "API Development & Integration",
      ],
    },
    {
      title: "Digital Marketing",
      desc: "Grow your business with a highly optimized digital presence, lead generation funnels and brand visibility.",
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2000",
      points: [
        "SEO & Keyword Optimization",
        "Google Ads & Meta Ads",
        "Social Media Marketing",
        "Brand Visibility & Lead Growth",
      ],
    },
    {
      title: "Cloud & DevOps",
      desc: "Deploy, scale and manage applications using secure & automated cloud infrastructure.",
      img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2000",
      points: [
        "AWS / Azure / GCP Deployment",
        "Containerization with Docker",
        "CI/CD Automation",
        "Cloud Architecture Consultation",
      ],
    },
    {
      title: "Branding Solutions",
      desc: "Build a premium brand identity with stunning visuals, designs and a cohesive brand strategy.",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000",
      points: [
        "Logo & Identity Design",
        "Company Profile Design",
        "Social Media Creatives",
        "Packaging & Brand Guidelines",
      ],
    },
    {
      title: "E-Commerce Solutions",
      desc: "Complete e-commerce development with product management, secure checkout and admin dashboards.",
      img: "https://images.unsplash.com/photo-1556742400-b5c4ae873a2b?q=80&w=2000",
      points: [
        "Custom Online Stores",
        "Payment Integration",
        "Inventory Management",
        "Order Management System",
      ],
    },
  ];

  return (
    <main className="pt-10 pb-20 px-6">

      {/* PAGE HEADER */}
      <section className="text-center max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-[#0B6BD6] drop-shadow-sm"
        >
          Professional Digital & IT Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-600 text-lg mt-3"
        >
          High-quality, modern & scalable solutions crafted for businesses that
          want to grow and dominate their industry.
        </motion.p>
      </section>


      {/* SERVICES GRID */}
      <section className="mt-16 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all"
          >
            {/* Image */}
            <div className="relative h-48 w-full">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-[#003B88]">
                {service.title}
              </h3>

              <p className="text-gray-600 mt-3">{service.desc}</p>

              <ul className="mt-4 space-y-2 text-gray-700">
                {service.points.map((point, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-[#0B6BD6] mt-1">✔</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>


      {/* CTA SECTION */}
      <section className="mt-28 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-[#0B6BD6]"
        >
          Ready to Start Your Project?
        </motion.h2>

        <p className="text-gray-600 mt-4 max-w-xl mx-auto text-lg">
          Whether you need a website, app, branding, or marketing – Infranova
          delivers end-to-end digital excellence for your business.
        </p>

        <a
          href="/contact"
          className="inline-block mt-8 bg-[#0B6BD6] text-white px-10 py-3 rounded-xl text-lg shadow-md hover:bg-[#054fa8] transition"
        >
          Contact Us Today
        </a>
      </section>

    </main>
  );
}
