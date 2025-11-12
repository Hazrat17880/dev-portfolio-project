"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  ArrowLeft,
  Clock,
  Users,
  Shield,
  CheckCircle,
  Phone,
  Mail,
  Hammer,
  Zap,
  Flame,
  Shield as SecurityShield,
  Droplets,
  Users as ManpowerUsers,
  ChevronRight,
  Quote,
  ArrowUp,
  Home,
  Info,
  Star,
  Calendar,
  Award,
  TrendingUp,
  Grid3X3,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";

// Import service images
import service1 from "../assets/Images/services1.jpg";
import service4 from "../assets/Images/services4.jpg";
import service11 from "../assets/Images/service11.jpg";
import service9 from "../assets/Images/services9.jpg";
import service5 from "../assets/Images/services5.jpg";
import service6 from "../assets/Images/services6.jpg";

// Import additional gallery images
import gallery1 from "../assets/Images/gallery1.jpg";
import gallery2 from "../assets/Images/gallery2.jpg";
import gallery3 from "../assets/Images/gallery3.jpg";
import gallery4 from "../assets/Images/gallery4.jpeg";

// fire fighting
import F1 from "../assets/Images/fire/f1.jpg";
import F2 from "../assets/Images/fire/f2.jpg";
import F3 from "../assets/Images/fire/f3.jpg";
import F4 from "../assets/Images/fire/f4.jpg";

// manpower
import M1 from "../assets/Images/manpower/m1.jpg";
import M2 from "../assets/Images/manpower/m2.jpg";
import M3 from "../assets/Images/manpower/m3.jpg";
import M4 from "../assets/Images/manpower/m4.jpg";

// sandblasting
import s1 from "../assets/Images/sandblasting/s1.jpg";
import s2 from "../assets/Images/sandblasting/s2.jpg";
import s3 from "../assets/Images/sandblasting/s3.jpg";
import s4 from "../assets/Images/sandblasting/s4.jpg";

// welding images
import w1 from "../assets/Images/Wellding/w1.jpg";
import w2 from "../assets/Images/Wellding/w2.jpg";
import w3 from "../assets/Images/Wellding/w3.jpg";
import w4 from "../assets/Images/Wellding/w4.jpg";

// electricity
import e1 from "../assets/Images/electricity/e1.jpg";
import e2 from "../assets/Images/electricity/e2.jpg";
import e3 from "../assets/Images/electricity/e3.jpg";
import e4 from "../assets/Images/electricity/e4.jpg";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const [scrollY, setScrollY] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Use i18next translation hook - same as contact page
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Service data structure using i18next
  const servicesData = {
    "civil-construction": {
      title: t(
        "servicesDetails.civil-construction.title",
        "Civil Construction"
      ),
      description: t(
        "servicesDetails.civil-construction.description",
        "High-quality construction services for factories, warehouses, and large-scale facilities with precise engineering and project management."
      ),
      fullDescription: t(
        "servicesDetails.civil-construction.fullDescription",
        "We specialize in comprehensive civil construction services for industrial facilities, commercial buildings, and large-scale infrastructure projects. Our team of experienced engineers and construction professionals ensures every project meets the highest standards of quality, safety, and efficiency."
      ),
      features: t("servicesDetails.civil-construction.features", {
        returnObjects: true,
        defaultValue: [
          "Structural Design & Engineering",
          "Project Management & Planning",
          "Quality Control & Assurance",
          "Safety Compliance & Protocols",
          "Material Procurement & Management",
          "Timely Project Delivery",
        ],
      }),
      process: t("servicesDetails.civil-construction.process", {
        returnObjects: true,
        defaultValue: [
          {
            step: 1,
            title: "Consultation & Planning",
            description: "Initial assessment and project planning",
          },
          {
            step: 2,
            title: "Design & Engineering",
            description: "Detailed structural design and engineering",
          },
          {
            step: 3,
            title: "Material Procurement",
            description: "Sourcing high-quality construction materials",
          },
          {
            step: 4,
            title: "Construction Execution",
            description: "On-site construction with quality control",
          },
          {
            step: 5,
            title: "Quality Inspection",
            description: "Comprehensive quality checks and testing",
          },
          {
            step: 6,
            title: "Project Handover",
            description: "Final delivery and client handover",
          },
        ],
      }),
      stats: t("servicesDetails.civil-construction.stats", {
        returnObjects: true,
        defaultValue: [
          { value: "200+", label: "Projects Completed" },
          { value: "50+", label: "Expert Engineers" },
          { value: "100%", label: "Safety Record" },
        ],
      }),
      testimonials: t("servicesDetails.civil-construction.testimonials", {
        returnObjects: true,
        defaultValue: [
          {
            name: "John Smith",
            position: "CEO, Industrial Corp",
            content:
              "Their construction team delivered our new facility ahead of schedule with exceptional quality. Highly professional and reliable.",
            rating: 5,
          },
          {
            name: "Sarah Johnson",
            position: "Project Manager, BuildTech",
            content:
              "The attention to detail and commitment to safety standards is impressive. They exceeded our expectations at every stage.",
            rating: 5,
          },
        ],
      }),
      faq: t("servicesDetails.civil-construction.faq", {
        returnObjects: true,
        defaultValue: [
          {
            question: "How long does a typical construction project take?",
            answer:
              "Project timelines vary based on scope and complexity. Small projects may take 3-6 months, while large-scale facilities can take 12-24 months.",
          },
          {
            question: "Do you provide post-construction maintenance?",
            answer:
              "Yes, we offer comprehensive maintenance packages to ensure your facility remains in optimal condition after completion.",
          },
        ],
      }),
      image: service1,
      gallery: [gallery1, gallery2, gallery3, gallery4],
      icon: Hammer,
      color: "#d97706",
    },
    welding: {
      title: t("services.service2.title", "Welding Services"),
      description: t(
        "services.service2.description",
        "Professional welding solutions with certified welders ensuring safe and reliable joints."
      ),
      fullDescription: t(
        "servicesDetails.welding.fullDescription",
        "Our certified welding services utilize state-of-the-art equipment and techniques including TIG, MIG, and arc welding. We serve various industries with precision welding for structural steel, pipelines, machinery, and custom fabrication projects."
      ),
      features: t("servicesDetails.welding.features", {
        returnObjects: true,
        defaultValue: [
          "TIG/MIG/Arc Welding",
          "Stainless Steel & Aluminum",
          "Structural Steel Welding",
          "Pipeline Welding",
          "Quality Testing & Inspection",
          "Certified Welders",
        ],
      }),
      process: t("servicesDetails.welding.process", {
        returnObjects: true,
        defaultValue: [
          {
            step: 1,
            title: "Material Assessment",
            description: "Evaluate materials and welding requirements",
          },
          {
            step: 2,
            title: "Technique Selection",
            description: "Choose appropriate welding method",
          },
          {
            step: 3,
            title: "Surface Preparation",
            description: "Clean and prepare surfaces for welding",
          },
          {
            step: 4,
            title: "Precision Welding",
            description: "Execute welding with precision",
          },
          {
            step: 5,
            title: "Quality Testing",
            description: "Non-destructive testing and inspection",
          },
          {
            step: 6,
            title: "Finishing & Protection",
            description: "Surface finishing and corrosion protection",
          },
        ],
      }),
      stats: t("servicesDetails.welding.stats", {
        returnObjects: true,
        defaultValue: [
          { value: "5000+", label: "Welding Projects" },
          { value: "30+", label: "Certified Welders" },
          { value: "ASME", label: "Certified" },
        ],
      }),
      image: service4,
      gallery: [w1, w2, w3, w4],
      icon: Zap,
      color: "#475569",
    },
    firefighting: {
      title: t("services.service3.title", "Firefighting Systems"),
      description: t(
        "services.service3.description",
        "Comprehensive fire protection systems design, installation, and maintenance."
      ),
      fullDescription: t(
        "servicesDetails.firefighting.fullDescription",
        "We design, install, and maintain complete fire protection systems for industrial facilities, commercial buildings, and residential complexes. Our solutions include fire detection, alarm systems, suppression systems, and emergency response planning."
      ),
      features: t("servicesDetails.firefighting.features", {
        returnObjects: true,
        defaultValue: [
          "Fire Detection Systems",
          "Alarm & Notification Systems",
          "Fire Suppression Systems",
          "Emergency Lighting",
          "Regular Maintenance",
          "Safety Compliance",
        ],
      }),
      image: service11,
      gallery: [F1, F2, F3, F4],
      icon: Flame,
      color: "#1e40af",
    },
    "security-electrical": {
      title: t("services.service4.title", "Security & Electrical"),
      description: t(
        "services.service4.description",
        "Integrated security and electrical systems providing smart facility management."
      ),
      fullDescription: t(
        "servicesDetails.security-electrical.fullDescription",
        "We provide integrated security and electrical solutions including CCTV surveillance, access control systems, electrical wiring, power distribution, and smart building automation for enhanced safety and efficiency."
      ),
      features: t("servicesDetails.security-electrical.features", {
        returnObjects: true,
        defaultValue: [
          "CCTV Surveillance Systems",
          "Access Control Solutions",
          "Electrical Wiring & Panels",
          "Power Distribution",
          "Smart Automation",
          "24/7 Monitoring",
        ],
      }),
      image: service9,
      gallery: [e1, e2, e3, e4],
      icon: SecurityShield,
      color: "#2563eb",
    },
    "sandblasting-coating": {
      title: t("services.service5.title", "Sandblasting & Coating"),
      description: t(
        "services.service5.description",
        "Surface preparation and protective coating services for harsh environments."
      ),
      fullDescription: t(
        "servicesDetails.sandblasting-coating.fullDescription",
        "Our sandblasting and coating services protect industrial equipment, structures, and machinery from corrosion, wear, and environmental damage. We use advanced techniques and high-quality materials for long-lasting protection."
      ),
      features: t("servicesDetails.sandblasting-coating.features", {
        returnObjects: true,
        defaultValue: [
          "Surface Preparation",
          "Abrasive Blasting",
          "Protective Coatings",
          "Corrosion Prevention",
          "Quality Inspection",
          "Custom Solutions",
        ],
      }),
      image: service5,
      gallery: [s1, s2, s3, s4],
      icon: Droplets,
      color: "#64748b",
    },
    "manpower-rental": {
      title: t("services.service6.title", "Manpower Solutions"),
      description: t(
        "services.service6.description",
        "Reliable manpower solutions providing skilled professionals for industrial operations."
      ),
      fullDescription: t(
        "servicesDetails.manpower-rental.fullDescription",
        "We provide skilled manpower solutions for various industrial sectors including construction, manufacturing, maintenance, and operations. Our workforce includes certified professionals, technicians, and skilled laborers ready to meet your project needs."
      ),
      features: t("servicesDetails.manpower-rental.features", {
        returnObjects: true,
        defaultValue: [
          "Skilled Professionals",
          "Certified Technicians",
          "Flexible Staffing",
          "Quality Assurance",
          "Timely Deployment",
          "Continuous Support",
        ],
      }),
      image: service6,
      gallery: [M1, M2, M3, M4],
      icon: ManpowerUsers,
      color: "#059669",
    },
  };

  const service = servicesData[serviceId];

  // Define services array for dropdown
  const services = Object.keys(servicesData).map((key) => ({
    id: key,
    title: servicesData[key].title,
  }));

  if (!service) {
    return (
      <div
        className="min-h-screen flex items-center justify-center bg-gray-50"
        dir={isArabic ? "rtl" : "ltr"}
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t("common.text.serviceNotFound", "Service Not Found")}
          </h2>
          <Link to="/services" className="text-blue-600 hover:text-blue-800">
            {t("common.buttons.backToServices", "Back to Services")}
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Image Gallery Functions
  const openImageGallery = (index = 0) => {
    setSelectedImage(service.gallery[index]);
    setGalleryIndex(index);
  };

  const closeImageGallery = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (galleryIndex + 1) % service.gallery.length;
    setGalleryIndex(nextIndex);
    setSelectedImage(service.gallery[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      (galleryIndex - 1 + service.gallery.length) % service.gallery.length;
    setGalleryIndex(prevIndex);
    setSelectedImage(service.gallery[prevIndex]);
  };

  // RTL layout helper functions
  const getMarginClass = (defaultClass, rtlClass) =>
    isArabic ? rtlClass : defaultClass;
  const getPositionClass = (defaultClass, rtlClass) =>
    isArabic ? rtlClass : defaultClass;
  const getFlexDirection = () => (isArabic ? "flex-row-reverse" : "flex-row");
  const getTextAlign = () => (isArabic ? "text-right" : "text-left");

  return (
    <div
      className={`min-h-screen bg-gray-50 ${
        isArabic ? "rtl" : "ltr"
      } ${getTextAlign()}`}
    >
      {/* Background Pattern */}
      <div
        className="fixed inset-0 z-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${service.color}20 0%, transparent 100%)`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
          >
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: isArabic ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={`flex items-center mb-6 ${getFlexDirection()}`}>
                <motion.div
                  className={`p-3 rounded-lg ${getMarginClass(
                    "mr-4",
                    "ml-4"
                  )} shadow-lg`}
                  style={{ backgroundColor: service.color }}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <Icon className="h-8 w-8 text-white" />
                </motion.div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  {service.title}
                </h1>
              </div>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {service.fullDescription || service.description}
              </p>

              {/* Stats with Animation */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {service.stats?.map((stat, index) => {
                  const StatIcon = [Clock, Users, Shield][index] || Clock;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="text-center"
                      whileHover={{ y: -5 }}
                    >
                      <motion.div
                        className="mx-auto mb-2 p-2 rounded-full inline-flex"
                        style={{ backgroundColor: `${service.color}20` }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <StatIcon
                          className="h-6 w-6"
                          style={{ color: service.color }}
                        />
                      </motion.div>
                      <motion.div
                        className="text-2xl font-bold text-gray-900"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>

              <div className={`flex flex-col sm:${getFlexDirection()} gap-4`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: service.color }}
                >
                  <Phone
                    className={`h-5 w-5 ${getMarginClass("mr-2", "ml-2")}`}
                  />
                  {t("common.buttons.getQuote", "Get Free Quote")}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors flex items-center justify-center"
                >
                  <Info
                    className={`h-5 w-5 ${getMarginClass("mr-2", "ml-2")}`}
                  />
                  {t("common.buttons.downloadBrochure", "Download Brochure")}
                </motion.button>
              </div>
            </motion.div>

            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: isArabic ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-96"
            >
              {/* Main Featured Image */}
              <motion.div
                className={`absolute ${getPositionClass(
                  "right-0",
                  "left-0"
                )} top-0 w-2/3 h-2/3 rounded-2xl shadow-2xl overflow-hidden z-20 cursor-pointer`}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => openImageGallery(0)}
              >
                <img
                  src={service.gallery[0]}
                  alt={`${service.title} Main Project`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-semibold">
                      {t("common.text.featuredProject", "Featured Project")}
                    </h3>
                    <p className="text-sm opacity-90">
                      {t("common.text.clickToExplore", "Click to explore")}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Secondary Images Grid */}
              <div
                className={`absolute ${getPositionClass(
                  "left-0",
                  "right-0"
                )} bottom-0 w-2/3 h-1/3 grid grid-cols-2 gap-2`}
              >
                {service.gallery.slice(1, 3).map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative rounded-xl shadow-lg overflow-hidden cursor-pointer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    onClick={() => openImageGallery(index + 1)}
                  >
                    <img
                      src={image}
                      alt={`${service.title} Project ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Maximize2 className="h-6 w-6 text-white" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Gallery Badge */}
              <motion.div
                className={`absolute top-2 ${getPositionClass(
                  "right-2",
                  "left-2"
                )} bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold shadow-lg z-40`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                {t(`${service.gallery.length}`, {
                  count: service.gallery.length,
                })}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-16 z-40 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between ${getFlexDirection()}`}
          >
            <div className="flex overflow-x-auto">
              {["overview", "features", "process", "testimonials", "faq"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                      activeTab === tab
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                    style={{
                      borderBottomColor:
                        activeTab === tab ? service.color : "transparent",
                      color: activeTab === tab ? service.color : "",
                    }}
                  >
                    {t(
                      `common.tabs.${tab}`,
                      tab.charAt(0).toUpperCase() + tab.slice(1)
                    )}
                  </button>
                )
              )}
            </div>

            {/* More Services Dropdown */}
            <div className="relative">
              <button
                onClick={() =>
                  setIsServicesDropdownOpen(!isServicesDropdownOpen)
                }
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors flex items-center"
              >
                {t("common.buttons.moreServices", "More Services")}
                <ChevronDown
                  className={`${getMarginClass(
                    "ml-2",
                    "mr-2"
                  )} h-4 w-4 transition-transform ${
                    isServicesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div
                  className={`absolute ${getPositionClass(
                    "right-0",
                    "left-0"
                  )} mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50`}
                >
                  {services.map((serviceItem) => (
                    <button
                      key={serviceItem.id}
                      onClick={() => {
                        navigate(`/services/${serviceItem.id}`);
                        setIsServicesDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                    >
                      {serviceItem.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatePresence mode="wait">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {t(
                      "common.headings.aboutService",
                      "About Our Service",
                      // { service: service.title }
                    )} 
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.fullDescription || service.description}
                  </p>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {isArabic
                      ? "فريقنا من المحترفين ذوي الخبرة ملتزم بتقديم نتائج استثنائية تلبي متطلباتك المحددة. نستخدم أحدث التقنيات وأفضل الممارسات في الصناعة لضمان الجودة والكفاءة والسلامة في كل مشروع نقوم به."
                      : "Our team of experienced professionals is committed to delivering exceptional results that meet your specific requirements. We use latest technologies and industry best practices to ensure quality, efficiency, and safety in every project we undertake."}
                  </p>

                  <div className="space-y-4">
                    <div className={`flex items-start ${getFlexDirection()}`}>
                      <CheckCircle
                        className={`h-6 w-6 ${getMarginClass(
                          "mr-3",
                          "ml-3"
                        )} flex-shrink-0`}
                        style={{ color: service.color }}
                      />
                      <p className="text-gray-700">
                        {t(
                          "common.features.industryExpertise",
                          "Industry-leading expertise with years of experience"
                        )}
                      </p>
                    </div>
                    <div className={`flex items-start ${getFlexDirection()}`}>
                      <CheckCircle
                        className={`h-6 w-6 ${getMarginClass(
                          "mr-3",
                          "ml-3"
                        )} flex-shrink-0`}
                        style={{ color: service.color }}
                      />
                      <p className="text-gray-700">
                        {t(
                          "common.features.customizedSolutions",
                          "Customized solutions tailored to your specific needs"
                        )}
                      </p>
                    </div>
                    <div className={`flex items-start ${getFlexDirection()}`}>
                      <CheckCircle
                        className={`h-6 w-6 ${getMarginClass(
                          "mr-3",
                          "ml-3"
                        )} flex-shrink-0`}
                        style={{ color: service.color }}
                      />
                      <p className="text-gray-700">
                        {t(
                          "common.features.qualityCommitment",
                          "Commitment to quality, safety, and timely delivery"
                        )}
                      </p>
                    </div>
                    <div className={`flex items-start ${getFlexDirection()}`}>
                      <CheckCircle
                        className={`h-6 w-6 ${getMarginClass(
                          "mr-3",
                          "ml-3"
                        )} flex-shrink-0`}
                        style={{ color: service.color }}
                      />
                      <p className="text-gray-700">
                        {t(
                          "common.features.competitivePricing",
                          "Competitive pricing with transparent cost structures"
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      {t("common.headings.whyChooseUs", "Why Choose Us")}
                    </h3>
                    <div className="space-y-6">
                      <div className={`flex items-start ${getFlexDirection()}`}>
                        <div
                          className={`p-3 rounded-lg ${getMarginClass(
                            "mr-4",
                            "ml-4"
                          )}`}
                          style={{ backgroundColor: `${service.color}20` }}
                        >
                          <Award
                            className="h-6 w-6"
                            style={{ color: service.color }}
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {t(
                              "common.features.certifiedProfessionals",
                              "Certified Professionals"
                            )}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {isArabic
                              ? "يتكون فريقنا من محترفين معتمدين يتمتعون بخبرة واسعة في الصناعة."
                              : "Our team consists of certified professionals with extensive experience in the industry."}
                          </p>
                        </div>
                      </div>
                      <div className={`flex items-start ${getFlexDirection()}`}>
                        <div
                          className={`p-3 rounded-lg ${getMarginClass(
                            "mr-4",
                            "ml-4"
                          )}`}
                          style={{ backgroundColor: `${service.color}20` }}
                        >
                          <TrendingUp
                            className="h-6 w-6"
                            style={{ color: service.color }}
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {t(
                              "common.features.provenTrackRecord",
                              "Proven Track Record"
                            )}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {isArabic
                              ? "لدينا سجل حافل مثبت في إكمال المشاريع بنجاح للعملاء عبر مختلف الصناعات."
                              : "We have a proven track record of successfully completing projects for clients across various industries."}
                          </p>
                        </div>
                      </div>
                      <div className={`flex items-start ${getFlexDirection()}`}>
                        <div
                          className={`p-3 rounded-lg ${getMarginClass(
                            "mr-4",
                            "ml-4"
                          )}`}
                          style={{ backgroundColor: `${service.color}20` }}
                        >
                          <Shield
                            className="h-6 w-6"
                            style={{ color: service.color }}
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {t(
                              "common.features.qualityAssurance",
                              "Quality Assurance"
                            )}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {isArabic
                              ? "نلتزم بمعايير الجودة الصارمة ونتأكد من أن جميع خدماتنا تلبي أو تتجاوز متطلبات الصناعة."
                              : "We adhere to strict quality standards and ensure that all our services meet or exceed industry requirements."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Features Tab */}
          {activeTab === "features" && (
            <motion.div
              key="features"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {t("common.headings.ourCapabilities", "Our Capabilities")}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {t(
                    "common.text.comprehensiveSolutions",
                    "Comprehensive solutions tailored to meet your specific requirements"
                  )}
                </p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {service.features?.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <motion.div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${service.color}20` }}
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      }}
                    >
                      <CheckCircle
                        className="h-6 w-6"
                        style={{ color: service.color }}
                      />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {isArabic
                        ? "تنفيذ احترافي مع ضمان الجودة والتسليم في الوقت المحدد."
                        : "Professional implementation with quality assurance and timely delivery."}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Process Tab */}
          {activeTab === "process" && (
            <motion.div
              key="process"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {t("common.headings.ourProcess", "Our Process")}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {t(
                    "common.text.stepByStepApproach",
                    "Step-by-step approach ensuring quality and efficiency"
                  )}
                </p>
              </motion.div>

              <div className="relative">
                {/* Process Line */}
                <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 z-0" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {service.process?.map((step, index) => (
                    <motion.div
                      key={step.step || index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      <motion.div
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full"
                        whileHover={{ y: -5 }}
                      >
                        <div
                          className={`flex items-center mb-4 ${getFlexDirection()}`}
                        >
                          <motion.div
                            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg z-10"
                            style={{ backgroundColor: service.color }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 10,
                            }}
                          >
                            {step.step}
                          </motion.div>
                          <div className="hidden lg:block flex-1 h-1 bg-gray-200" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Testimonials Tab */}
          {activeTab === "testimonials" && (
            <motion.div
              key="testimonials"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {t(
                    "common.headings.clientTestimonials",
                    "Client Testimonials"
                  )}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {t(
                    "common.text.whatClientsSay",
                    "What our clients say about our {service} service",
                    { service: service.title }
                  )}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.testimonials?.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div
                      className={`flex items-center mb-4 ${getFlexDirection()}`}
                    >
                      <Quote
                        className={`h-8 w-8 ${getMarginClass("mr-2", "ml-2")}`}
                        style={{ color: service.color, opacity: 0.5 }}
                      />
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={
                              i < (testimonial.rating || 5)
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-gray-200 text-gray-200"
                            }
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.position}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* FAQ Tab */}
          {activeTab === "faq" && (
            <motion.div
              key="faq"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {t("common.headings.faq", "Frequently Asked Questions")}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {t(
                    "common.text.commonQuestions",
                    "Common questions about our {service} service",
                    { service: service.title }
                  )}
                </p>
              </motion.div>

              <div className="max-w-3xl mx-auto">
                {service.faq?.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-6"
                  >
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                      <h3
                        className={`text-lg font-semibold text-gray-900 mb-3 flex items-center ${getFlexDirection()}`}
                      >
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                          style={{ backgroundColor: service.color }}
                        >
                          Q
                        </div>
                        <span className={getMarginClass("ml-3", "mr-3")}>
                          {item.question}
                        </span>
                      </h3>
                      <div className={isArabic ? "pr-11" : "pl-11"}>
                        <p className="text-gray-600">{item.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Enhanced CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("common.headings.readyToStart", "Ready to Get Started?")}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              {t(
                "common.text.freeConsultation",
                "Contact us today for a free consultation and let's discuss how we can help with your {service} needs.",
                { service: service.title }
              )}
            </p>
            <div
              className={`flex flex-col sm:${getFlexDirection()} gap-4 justify-center`}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center shadow-lg"
              >
                <Phone
                  className={`h-5 w-5 ${getMarginClass("mr-2", "ml-2")}`}
                />
                {t("common.buttons.callNow", "Call Now")}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center"
              >
                <Mail className={`h-5 w-5 ${getMarginClass("mr-2", "ml-2")}`} />
                {t("common.buttons.sendEmail", "Send Email")}
              </motion.button>
            </div>

            <div
              className={`mt-8 flex items-center justify-center space-x-8 text-sm ${getFlexDirection()}`}
            >
              <div className="flex items-center">
                <Calendar
                  className={`h-5 w-5 ${getMarginClass("mr-2", "ml-2")}`}
                />
                <span>{t("common.text.available247", "Available 24/7")}</span>
              </div>
              <div className="flex items-center">
                <Shield
                  className={`h-5 w-5 ${getMarginClass("mr-2", "ml-2")}`}
                />
                <span>
                  {t("common.text.satisfaction", "100% Satisfaction")}
                </span>
              </div>
              <div className="flex items-center">
                <Award
                  className={`h-5 w-5 ${getMarginClass("mr-2", "ml-2")}`}
                />
                <span>
                  {t(
                    "common.text.certifiedProfessionals",
                    "Certified Professionals"
                  )}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeImageGallery}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-auto max-w-6xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="w-[600px] h-[400px] object-cover rounded-lg shadow-2xl"
              />

              {/* Navigation Buttons */}
              {service.gallery.length > 1 && (
                <>
                  <motion.button
                    // whileHover={{ scale: 1.1 }}
                    // whileTap={{ scale: 0.9 }}
                    onClick={prevImage}
                    className={`absolute ${getPositionClass(
                      "left-4",
                      "right-4"
                    )} top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg`}
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-700" />
                  </motion.button>
                  <motion.button
                    // whileHover={{ scale: 1.1 }}
                    // whileTap={{ scale: 0.9 }}
                    onClick={nextImage}
                    className={`absolute ${getPositionClass(
                      "right-4",
                      "left-4"
                    )} top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg`}
                  >
                    <ChevronRight className="h-6 w-6 text-gray-700" />
                  </motion.button>
                </>
              )}

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeImageGallery}
                className={`absolute top-4 ${getPositionClass(
                  "right-4",
                  "left-4"
                )} p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg`}
              >
                <X className="h-6 w-6 text-gray-700" />
              </motion.button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                {galleryIndex + 1} / {service.gallery.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`fixed ${getPositionClass(
            "right-8",
            "left-8"
          )} bottom-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}
    </div>
  );
};

export default ServiceDetail;
