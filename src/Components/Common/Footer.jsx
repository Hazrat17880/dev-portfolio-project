"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Wrench,
  Shield,
  Users
} from "lucide-react";

import companyLogo from "../../assets/Images/logo.PNG";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();

  const isRTL = i18n.language === "ar";

  const quickLinks = [
    { name: t("footer.home"), href: "#" },
    { name: t("footer.aboutUs"), href: "#" },
    { name: t("footer.services"), href: "#" },
    { name: t("footer.projects"), href: "#" },
    { name: t("footer.contact"), href: "#" },
  ];

  const services = [
    { name: t("footer.service1"), href: "#" },
    { name: t("footer.service2"), href: "#" },
    { name: t("footer.service3"), href: "#" },
    { name: t("footer.service4"), href: "#" },
    { name: t("footer.service5"), href: "#" },
    { name: t("footer.service6"), href: "#" },
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", name: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", name: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", name: "LinkedIn" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", name: "Instagram" },
  ];

  const mapEmbedUrl =
    "https://www.google.com/maps?q=KHAN+TOWER+MARDAN,+Pakistan&hl=en&z=16&output=embed";

  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=KHAN+TOWER+MARDAN,+Pakistan";

  return (
    <footer className={`bg-gray-900 text-white ${isRTL ? "rtl" : "ltr"}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column */}
    {/* Left Column */}
<div className="space-y-6">
  <div
    className="flex items-center cursor-pointer group text-center px-1 space-x-3"
    onClick={() => handleNavClick("home")}
  >
    {/* Logo on the left */}
    <div className="relative h-12 w-12 sm:h-12 sm:w-12 rounded-md overflow-hidden transition-all duration-300 group-hover:-translate-y-0.5">
      <img
        src={companyLogo}
        alt={t("footer.companyName")}
        className="w-full h-full object-contain"
      />
    </div>

    {/* Text next to the logo */}
    <div className="flex flex-col leading-none">
      <h1 className="text-[12px] sm:text-sm font-semibold text-white tracking-tight m-0 p-0">
        شركة وحيد لبنان
      </h1>
      <h2 className="text-[11px] sm:text-sm font-semibold text-blue-900 tracking-tight m-0 p-0">
        <span className="text-red-600">A</span> 1 CONTRACT
      </h2>
    </div>
  </div>

  {/* Company description */}
  <p className="text-gray-300 leading-relaxed max-w-md">
    {t("footer.description")}
  </p>

  {/* Contact Info */}
  <div className="space-y-3">
    <div className="flex items-center space-x-3 text-gray-300">
      <Phone className="h-5 w-5 text-blue-400" />
      <span>{t("footer.phone")}</span>
    </div>
    <div className="flex items-center space-x-3 text-gray-300">
      <Mail className="h-5 w-5 text-blue-400" />
      <span>{t("footer.email")}</span>
    </div>
    <div className="flex items-start space-x-3 text-gray-300">
      <MapPin className="h-5 w-5 text-blue-400 mt-1" />
      <span>{t("footer.address")}</span>
    </div>
    <div className="flex items-center space-x-3 text-gray-300">
      <Clock className="h-5 w-5 text-blue-400" />
      <span>{t("footer.hours")}</span>
    </div>
  </div>

  {/* Social Links */}
  <div className="flex space-x-4 pt-4">
    {socialLinks.map((social, index) => (
      <motion.a
        key={index}
        href={social.href}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        aria-label={social.name}
      >
        {social.icon}
      </motion.a>
    ))}
  </div>
</div>


          {/* Right Column */}
          <div className="bg-gray-800 rounded-xl overflow-hidden h-80 lg:h-full relative">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title={t("footer.mapTitle")}
            />
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-all duration-300"
            >
              {t("footer.getDirections")}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-gray-700">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <ArrowRight className="h-5 w-5 mr-2 text-blue-400" />
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Wrench className="h-5 w-5 mr-2 text-blue-400" />
              {t("footer.ourServices")}
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Certifications */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-blue-400" />
              {t("footer.stayUpdated")}
            </h4>

            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-3">
                {t("footer.newsletter")}
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder={t("footer.emailPlaceholder")}
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition-colors duration-300"
                >
                  {t("footer.subscribe")}
                </motion.button>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-4 border-t border-gray-700">
              <div className="bg-gray-800 p-2 rounded-lg">
                <Users className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <p className="text-sm font-medium">{t("footer.isoTitle")}</p>
                <p className="text-xs text-gray-400">{t("footer.isoDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} {t("footer.companyName")}. {t("footer.rights")}
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                {t("footer.privacy")}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                {t("footer.terms")}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                {t("footer.sitemap")}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <motion.a
        href="/contact-us"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-50 flex items-center space-x-2 transition-colors duration-300"
      >
        <Phone className="h-5 w-5" />
        <span className="font-medium">{t("footer.contactUs")}</span>
      </motion.a>
    </footer>
  );
};

export default Footer;
