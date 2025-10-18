import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@images/Header/logo.png";
function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#dbf2f8] border-b border-[#000000] shadow-md">
      <nav className="container mx-auto px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link className="flex flex-col items-start w-[300px]" href="/">
          <Image
            src={logo}
            alt="Mwafq Logo"
            width={130}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-10 ">
          <li>
            <Link
              href="#"
              className="text-gray-800 hover:text-[#00A8F1] font-medium text-base"
            >
              Home
            </Link>
          </li>
          <li className="relative">
            <Link
              href="#"
              className="text-gray-800 hover:text-[#00A8F1] font-medium text-base flex items-center gap-1"
            >
              Services
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-gray-800 hover:text-[#00A8F1] font-medium text-base"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-gray-800 hover:text-[#00A8F1] font-medium text-base"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-gray-800 hover:text-[#00A8F1] font-medium text-base"
            >
              FAQ
            </Link>
          </li>
        </ul>

        {/* Right Side - Search and Language */}
        <div className="flex items-center gap-4 w-[300px]">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-cyan-400 w-52 text-black"
            />
            <svg
              className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <button className="bg-[#00A8F1] flex justify-center items-center px-6 py-2 rounded-lg cursor-pointer text-sm w-full h-full">
            EN
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
