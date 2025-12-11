export default function ServicesSection() {
  const services = [
    {
      title: "Web Development",
      desc: "High-performance websites built for business growth.",
      img: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Digital Marketing",
      desc: "Full-service marketing that delivers real results.",
      img: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Consulting Services",
      desc: "Stunning landing pages designed for conversions.",
      img: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "InfraNova Training",
      desc: "High-performance websites built for business growth.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Branding & Identity",
      desc: "Crafting memorable brand identities.",
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Video & Photo Editing",
      desc: "Crafting memorable brand identities.",
      img: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#0D1224] text-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold">
            This is What We <br />
            <span className="text-[#04C678]">Bring to The Table</span>
          </h2>

          <button className="px-6 py-2 border border-white/40 rounded-xl transition hover:bg-white/10 hover:scale-105">
            View All Services
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <div
              key={i}
              className="
                group bg-[#131C3E] p-10 rounded-3xl shadow-xl 
                hover:-translate-y-3 hover:shadow-2xl 
                transition-all duration-500 ease-out
                hover:rotate-[1deg]
              "
            >
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-gray-300">{s.desc}</p>

              <div className="mt-6 overflow-hidden rounded-xl">
                <img
                  src={s.img}
                  className="
                    h-48 w-full object-cover 
                    rounded-xl 
                    transition-all duration-500 
                    group-hover:scale-110 group-hover:rotate-1
                  "
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
