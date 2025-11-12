"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Flame, Zap, Shield, Hammer, Droplets, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

// Images
import service1 from "../../assets/Images/services1.jpeg";
import service4 from "../../assets/Images/services4.jpg";
import service11 from "../../assets/Images/service11.jpg";
import service9 from "../../assets/Images/services9.jpg";
import service5 from "../../assets/Images/services5.jpg";
import service6 from "../../assets/Images/services6.jpg";

const ServicesSection = () => {
  const { t, i18n } = useTranslation(); // i18n hook

  const services = [
    {
      key: "service1",
      image: service1,
      link: "/services/civil-construction",
      icon: Hammer,
      color: "#f59e0b",
    },
    {
      key: "service2",
      image: service4,
      link: "/services/welding",
      icon: Zap,
      color: "#ef4444",
    },
    {
      key: "service3",
      image: service11,
      link: "/services/firefighting",
      icon: Flame,
      color: "#dc2626",
    },
    {
      key: "service4",
      image: service9,
      link: "/services/security-electrical",
      icon: Shield,
      color: "#3b82f6",
    },
    {
      key: "service5",
      image: service5,
      link: "/services/sandblasting-coating",
      icon: Droplets,
      color: "#8b5cf6",
    },
    {
      key: "service6",
      image: service6,
      link: "/services/manpower-rental",
      icon: Users,
      color: "#10b981",
    },
  ];

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
    hover: { scale: 1.02, y: -5, transition: { type: "spring", stiffness: 400, damping: 14 } },
  };

  const imageVariants = { hover: { scale: 1.05, transition: { duration: 0.4, ease: "easeOut" } } };

  const characterVariants = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } };

  const arabicVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const ServiceCard = ({ service, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const Icon = service.icon;
    const title = t(`services.${service.key}.title`);
    const isRTL = i18n.language === "ar"; // Use i18n language instead of text detection

    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true, margin: "-50px" }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <Link to={service.link} className="group block h-full">
          <div className="relative h-full overflow-hidden border border-gray-200 bg-white hover:rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300">
            <motion.div className="relative h-80 overflow-hidden" variants={imageVariants}>
              <img
                src={service.image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Title Overlay */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className={`text-xl md:text-2xl font-bold text-white overflow-hidden ${isRTL ? "text-right" : "text-left"}`}>
                  {isHovered &&
                    (i18n.language !== "ar" ? ( // Use i18n language for condition
                      // English: per-character animation
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } } }}
                      >
                        {title.split("").map((char, i) => (
                          <motion.span key={i} variants={characterVariants} className="inline-block">
                            {char === " " ? "\u00A0" : char}
                          </motion.span>
                        ))}
                      </motion.div>
                    ) : (
                      // Arabic: animate whole line
                      <motion.span variants={arabicVariants} initial="hidden" animate="visible" className="inline-block">
                        {title}
                      </motion.span>
                    ))}
                </h3>
              </motion.div>

              {/* Icon */}
              <motion.div
                className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
              >
                <Icon className="h-5 w-5" style={{ color: service.color }} />
              </motion.div>
            </motion.div>
          </div>
        </Link>
      </motion.div>
    );
  };

  return (
    <section id="services" className="relative py-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.key} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;