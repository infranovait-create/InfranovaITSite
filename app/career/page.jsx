"use client";

import { motion } from "framer-motion";

export default function CareerPage() {
  const jobs = [
    {
      title: "Frontend Developer (React.js)",
      type: "Full-Time",
      experience: "1-2 Years",
      location: "Gurgaon, Haryana",
      desc: "We are looking for a skilled React.js developer to build responsive UI and modern web apps.",
    },
    {
      title: "Backend Developer (Node.js)",
      type: "Full-Time",
      experience: "1-3 Years",
      location: "Gurgaon, Haryana",
      desc: "Seeking a Node.js expert to work on REST APIs, database logic, and scalable backend systems.",
    },
    {
      title: "UI/UX Designer",
      type: "Hybrid",
      experience: "0.6-2 Years",
      location: "Delhi NCR",
      desc: "Creative designer needed to craft user-friendly and visually appealing UI/UX components.",
    },
    {
      title: "Digital Marketing Executive",
      type: "Full-Time",
      experience: "1+ Years",
      location: "Gurgaon, Haryana",
      desc: "We are looking for someone who understands SEO, content marketing, and lead generation.",
    },
  ];

  const benefits = [
    {
      title: "Friendly Work Culture",
      desc: "A positive workplace where learning, respect, and teamwork are priority.",
      icon: "🤝",
    },
    {
      title: "Career Growth",
      desc: "We help you grow through real projects, mentorship, and skill development.",
      icon: "🚀",
    },
    {
      title: "Flexible Environment",
      desc: "Hybrid options, comfortable workspace, and supportive management.",
      icon: "🏢",
    },
    {
      title: "Exciting Projects",
      desc: "Work with modern technologies & solve real-world business problems.",
      icon: "💡",
    },
  ];

  return (
    <section className="pt-32 pb-28 mt-10 bg-white text-black px-6  mx-auto">

      {/* HERO */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-blue-700"
        >
          Build Your Career With Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto"
        >
          Be part of a fast-growing creative & technology-driven company.  
          Explore the latest job openings below.
        </motion.p>
      </div>

      {/* WHY JOIN US */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">
          Why Join Us?
        </h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white border border-blue-200 rounded-2xl shadow-sm hover:shadow-lg transition text-center"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* JOB LISTINGS */}
      <div className="grid md:grid-cols-2 gap-10">
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 border border-blue-200 rounded-2xl shadow-sm hover:shadow-xl transition bg-white"
          >
            <h2 className="text-2xl font-semibold text-blue-700">{job.title}</h2>

            <div className="mt-3 text-gray-700 space-y-1">
              <p><strong className="text-blue-600">Type:</strong> {job.type}</p>
              <p><strong className="text-blue-600">Experience:</strong> {job.experience}</p>
              <p><strong className="text-blue-600">Location:</strong> {job.location}</p>
            </div>

            <p className="text-gray-500 mt-3">{job.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* FOOTER NOTE */}
      <div className="text-center mt-20 text-gray-600">
        Didn’t find a suitable position?  
        <span className="text-blue-700 font-medium"> Send your resume at hr@infranovait.com</span>
      </div>
    </section>
  );
}
