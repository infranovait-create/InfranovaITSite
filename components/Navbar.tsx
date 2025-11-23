'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#0B6BD6]">
          Infranova
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-[#0B6BD6]">Home</Link>
          <Link href="/about" className="hover:text-[#0B6BD6]">About</Link>
          <Link href="/services" className="hover:text-[#0B6BD6]">Services</Link>
          <Link href="/projects" className="hover:text-[#0B6BD6]">Projects</Link>
          <Link href="/contact" className="hover:text-[#0B6BD6]">Contact</Link>
        </div>

        {/* Call to action */}
        <a
          href="tel:7668775454"
          className="hidden md:block bg-[#0B6BD6] text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Call Now
        </a>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 py-4 flex flex-col gap-4 shadow-lg">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>

          <a
            href="tel:7668775454"
            className="bg-[#0B6BD6] text-white text-center py-2 rounded-md"
          >
            Call Now: 7668775454
          </a>
        </div>
      )}
    </nav>
  );
}
