"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Mail, Phone, Search } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <header className="w-full shadow-sm fixed top-0 left-0 bg-white z-50">


      {/* ---------------- TOP INFO BAR ---------------- */}
      <div className="bg-[#F5F7FC] border-b py-2 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center ">

          {/* LEFT CONTACT */}
          <div className="flex items-center gap-6 text-[#0A4CA3] font-medium">
            <span className="flex items-center gap-1">
              <Mail size={16} /> contact@infranovait.in
            </span>
            <span className="flex items-center gap-1">
              <Phone size={16} /> +91 7668775454
            </span>
          </div>

          {/* RIGHT SOCIAL + BUTTON */}
          <div className="flex items-center gap-4">

            <div className="flex items-center gap-2">

              <Link
                href="https://x.com/Infranovait"
                className="w-8 h-8 rounded-full bg-[#1DA1F2] flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all"
              >
                <FaTwitter size={15} color="white" />
              </Link>

              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all"
              >
                <FaFacebookF size={15} color="white" />
              </Link>

              <Link
                href="https://www.instagram.com/infranovait/"
                className="w-8 h-8 rounded-full bg-[#0A66C2] flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all"
              >
                <FaLinkedinIn size={15} color="white" />
              </Link>

              <Link
                href="#"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br 
                from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:scale-110 hover:shadow-lg transition-all"
              >
                <FaInstagram size={15} color="white" />
              </Link>

            </div>

            <button className="bg-[#28C7A6] hover:bg-[#1FA68B] text-white px-4 py-1.5 rounded-md font-semibold shadow-sm transition">
              BOOK A MEETING
            </button>

          </div>
        </div>
      </div>

      {/* ---------------- MAIN NAVBAR ---------------- */}
      <nav className=" bg-[#F2F5FA] bg-gradient-to-r from-[#F2F5FA] to-[#FFFFFF] shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 relative">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <img
              src="/Logo.jpeg"
              alt="Infranova IT"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* NAV LINKS */}
          <ul className="flex items-center gap-8 font-medium text-gray-700">

            <Link href="/" className="hover:text-[#0B6BD6] relative group">
              Home
              <span className="absolute left-0 -bottom-1 h-[2px] bg-[#0B6BD6] w-0 group-hover:w-full transition-all"></span>
            </Link>

            {/* -------- COMPANY -------- */}
            <li className="relative">
              <button
                onClick={() => toggleMenu("company")}
                className="flex items-center gap-1 hover:text-[#0B6BD6]"
              >
                Company <ChevronDown size={14} />
              </button>

              {openMenu === "company" && (
                <div className="absolute bg-white border shadow-xl rounded-xl w-52 py-3 mt-2 z-50">
                  <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">About Us</Link>
                  <Link href="/gallery" className="block px-4 py-2 hover:bg-gray-100">Our Gallery</Link>
                </div>
              )}
            </li>

            {/* -------- SERVICES -------- */}
            <li className="relative">
              <button
                onClick={() => toggleMenu("services")}
                className="flex items-center gap-1 hover:text-[#0B6BD6]"
              >
                Services <ChevronDown size={14} />
              </button>

              {openMenu === "services" && (
                <div className="absolute bg-white border shadow-xl rounded-xl w-[500px] flex gap-6 p-5 mt-2 z-50">

                  <div className="flex-1">
                    <h4 className="text-[#0B6BD6] font-semibold mb-2">Digital Marketing</h4>
                    <ul className="space-y-2 text-sm">
                      <li><Link href="/ppc" className="hover:text-[#0B6BD6]">Pay Per Click</Link></li>
                      <li><Link href="/lead-gen" className="hover:text-[#0B6BD6]">Lead Generation</Link></li>
                      <li><Link href="/smm" className="hover:text-[#0B6BD6]">Social Media Marketing</Link></li>
                      <li><Link href="/seo" className="hover:text-[#0B6BD6]">SEO Services</Link></li>
                    </ul>
                  </div>

                  <div className="flex-1">
                    <h4 className="text-[#0B6BD6] font-semibold mb-2">Website Design</h4>
                    <ul className="space-y-2 text-sm">
                      <li><Link href="/webdesign" className="hover:text-[#0B6BD6]">Website Design</Link></li>
                      <li><Link href="/graphics" className="hover:text-[#0B6BD6]">Graphic Designing</Link></li>
                      <li><Link href="/ecommerce" className="hover:text-[#0B6BD6]">E-Commerce Web Design</Link></li>
                    </ul>
                  </div>

                </div>
              )}
            </li>

            {/* -------- PACKAGES -------- */}
            <li className="relative">
              <button
                onClick={() => toggleMenu("packages")}
                className="flex items-center gap-1 hover:text-[#0B6BD6]"
              >
                Packages <ChevronDown size={14} />
              </button>

              {openMenu === "packages" && (
                <div className="absolute bg-white border shadow-xl rounded-xl w-48 py-3 mt-2 z-50">
                  <Link href="/packages/basic" className="block px-4 py-2 hover:bg-gray-100">Basic Plan</Link>
                  <Link href="/packages/standard" className="block px-4 py-2 hover:bg-gray-100">Standard Plan</Link>
                  <Link href="/packages/premium" className="block px-4 py-2 hover:bg-gray-100">Premium Plan</Link>
                </div>
              )}
            </li>

            <Link href="/career" className="hover:text-[#0B6BD6]">Career</Link>
            <Link href="/blog" className="hover:text-[#0B6BD6]">Blog</Link>

            <Link href="/contact" className="hover:text-[#0B6BD6] relative group">
              Contact Us
              <span className="absolute left-0 -bottom-1 h-[2px] bg-[#0B6BD6] w-0 group-hover:w-full transition-all"></span>
            </Link>

            <Search size={20} className="cursor-pointer hover:text-[#0B6BD6]" />

          </ul>
        </div>
      </nav>

    </header>
  );
}
