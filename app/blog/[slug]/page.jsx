"use client";

import { motion } from "framer-motion";

const blogData = {
  "branding-business-growth": {
    title: "How Branding Helps Your Business Grow",
    date: "22 January 2025",
    category: "Branding",
    img: "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80",
    content: `
Branding builds trust, recognition, and long-term customer loyalty.  
It is more than a logo — it's your company's identity.

### Why Branding Matters
- Creates trust  
- Increases recognition  
- Helps differentiate from competitors  
- Builds emotional connection  

### Conclusion
Consistent branding helps businesses grow faster and build strong customer loyalty.
    `,
  },
};

export default function SingleBlog({ params }) {
  const blog = blogData[params.slug];

  if (!blog) {
    return (
      <h1 className="text-center text-3xl font-semibold mt-40">
        Blog Not Found
      </h1>
    );
  }

  return (
    <section className="pt-28 pb-20 max-w-4xl mx-auto px-6 text-black">

      {/* IMAGE */}
      <img
        src={blog.img}
        className="rounded-2xl w-full mb-8 shadow-lg"
      />

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold text-blue-700"
      >
        {blog.title}
      </motion.h1>

      <p className="text-gray-600 mt-2">
        {blog.category} • {blog.date}
      </p>

      {/* CONTENT */}
      <div className="mt-6 text-gray-700 leading-relaxed whitespace-pre-line">
        {blog.content}
      </div>

    </section>
  );
}
