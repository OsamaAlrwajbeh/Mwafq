import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@images/Footer/logo_white.png";
const Footer = () => {
  const links = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Services", href: "#" },
  ];

  const services = [
    { name: "Iqama Examination", href: "#" },
    { name: "Baladiya Examination", href: "#" },
    { name: "Pre-Employment Test", href: "#" },
    { name: "Driving License Examination", href: "#" },
    { name: "Delivery Examination", href: "#" },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", name: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", name: "Youtube" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
  ];

  return (
    <footer className="bg-[#1E2364]  text-white">
      <div className="container_main ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Link</h3>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Logo */}
            <div className="mt-8">
              <div className="">
                <Link className="flex flex-col items-start -ml-10" href="/">
                  <Image
                    src={logo}
                    alt="Mwafq Logo"
                    width={130}
                    height={50}
                    className="object-contain"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              {/* Office Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-300 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-sm mb-1">Office Address:</p>
                  <p className="text-gray-300 text-sm">Riyadh, Saudi Arabia</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-300 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-sm mb-1">Phone:</p>
                  <p className="text-gray-300 text-sm">+966-XXX-XXXX</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-300 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-sm mb-1">Email:</p>
                  <p className="text-gray-300 text-sm">info@mwafq.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Column */}
          <div>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-500 transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            Copyright © 2025 Mwafq. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
