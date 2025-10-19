"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import logo from "@images/Header/logo.png";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#dbf2f8] border-b">
      <nav className="container_main !px-8 !py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          className="flex flex-col items-start w-[150px] md:w-[300px]"
          href="/"
        >
          <Image
            src={logo}
            alt="Mwafq Logo"
            width={130}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-10">
          <li>
            <Link
              href="/"
              className="text-gray-800 hover:text-[#00A8F1] font-medium text-base"
            >
              Home
            </Link>
          </li>
          <li className="relative">
            <Link
              href="/services"
              className="text-gray-800 hover:text-[#00A8F1] font-medium text-base flex items-center gap-1"
            >
              Services
              <ChevronDown className="w-4 h-4" />
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className="text-gray-800 hover:text-[#00A8F1] font-medium text-base"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-gray-800 hover:text-[#00A8F1] font-medium text-base"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/faq"
              className="text-gray-800 hover:text-[#00A8F1] font-medium text-base"
            >
              FAQ
            </Link>
          </li>
        </ul>

        {/* Desktop Right Side - Search and Language */}
        <div className="hidden md:flex items-center gap-4 w-[300px]">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-cyan-400 w-52 text-black"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
          <button className="bg-[#00A8F1] flex justify-center items-center px-6 py-2 rounded-lg cursor-pointer text-sm w-full h-full text-white font-medium">
            EN
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-gray-800 hover:text-[#00A8F1] transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#dbf2f8] border-t border-gray-200 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container_main !px-8 !py-6 space-y-4">
          {/* Mobile Search */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search"
              className="bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-cyan-400 w-full text-black"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          {/* Mobile Navigation Links */}
          <ul className="space-y-3">
            <li>
              <Link
                href="/"
                className="block text-gray-800 hover:text-[#00A8F1] font-medium text-base py-2 px-4 rounded-lg hover:bg-white/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="flex text-gray-800 hover:text-[#00A8F1] font-medium text-base py-2 px-4 rounded-lg hover:bg-white/50 transition-colors items-center justify-between"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="block text-gray-800 hover:text-[#00A8F1] font-medium text-base py-2 px-4 rounded-lg hover:bg-white/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block text-gray-800 hover:text-[#00A8F1] font-medium text-base py-2 px-4 rounded-lg hover:bg-white/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="block text-gray-800 hover:text-[#00A8F1] font-medium text-base py-2 px-4 rounded-lg hover:bg-white/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
            </li>
          </ul>

          {/* Mobile Language Button */}
          <button className="bg-[#00A8F1] w-full flex justify-center items-center px-6 py-3 rounded-lg cursor-pointer text-sm font-medium text-white mt-4">
            EN
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
