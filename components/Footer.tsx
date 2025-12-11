"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A4CA3] text-white pt-16 pb-10">
      
      {/* ---- Main Footer Wrapper ---- */}
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10">

        {/* -------- LOGO + ABOUT -------- */}
        <div>
          <img src="/logo.jpeg" alt="Infranova IT" className="h-14 mb-4" />

          <p className="text-sm leading-relaxed text-gray-200 pr-4">
            Infranova IT is a leading technology & digital marketing company helping
            businesses grow with modern IT solutions, websites, and performance marketing.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-4">

            <Link
              href="#"
              className="w-9 h-9 rounded-full bg-[#1DA1F2] flex items-center justify-center
                         hover:scale-110 hover:shadow-lg transition"
            >
              <FaTwitter size={16} color="white" />
            </Link>

            <Link
              href="#"
              className="w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center
                         hover:scale-110 hover:shadow-lg transition"
            >
              <FaFacebookF size={16} color="white" />
            </Link>

            <Link
              href="#"
              className="w-9 h-9 rounded-full bg-[#0A66C2] flex items-center justify-center
                         hover:scale-110 hover:shadow-lg transition"
            >
              <FaLinkedinIn size={16} color="white" />
            </Link>

            <Link
              href="#"
              className="w-9 h-9 rounded-full flex items-center justify-center
                        bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]
                        hover:scale-110 hover:shadow-lg transition"
            >
              <FaInstagram size={16} color="white" />
            </Link>

          </div>
        </div>

        {/* -------- QUICK LINKS -------- */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200 text-sm">

            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>

          </ul>
        </div>

        {/* -------- SERVICES -------- */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-200 text-sm">

            <li><Link href="/seo" className="hover:text-white">SEO Services</Link></li>
            <li><Link href="/smm" className="hover:text-white">Social Media Marketing</Link></li>
            <li><Link href="/ppc" className="hover:text-white">Google PPC Ads</Link></li>
            <li><Link href="/webdesign" className="hover:text-white">Website Development</Link></li>
            <li><Link href="/ecommerce" className="hover:text-white">E-Commerce Websites</Link></li>

          </ul>
        </div>

        {/* -------- CONTACT INFO -------- */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>

          <ul className="space-y-3 text-gray-200 text-sm">

            <li className="flex items-start gap-2">
              <MapPin size={16} />
              <span>Sector 44, Gurgaon, Haryana, India</span>
            </li>

            <li className="flex items-center gap-2">
              <Phone size={16} />
              +91 7668775454
            </li>

            <li className="flex items-center gap-2">
              <Mail size={16} />
              contact@infranovait.in
            </li>

          </ul>
        </div>

      </div>

      {/* ---- Copyright ---- */}
      <div className="border-t border-white/20 mt-10 pt-5 text-center text-gray-200 text-sm">
        © {new Date().getFullYear()} Infranova IT Solutions — All Rights Reserved.
      </div>

    </footer>
  );
}
