export default function Footer() {
  return (
    <footer className="bg-[#0B6BD6] text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Infranova IT Solutions</h2>
          <p className="text-sm opacity-80">
            We provide IT services, software development, digital marketing,
            branding, and end-to-end technical solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 opacity-90">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="opacity-90">📞 7668775454</p>
          <p className="opacity-90">📧 connect@infranovait.com</p>
        </div>

      </div>

      <div className="text-center mt-10 opacity-60 text-sm">
        © {new Date().getFullYear()} Infranova IT Solutions. All Rights Reserved.
      </div>
    </footer>
  );
}
