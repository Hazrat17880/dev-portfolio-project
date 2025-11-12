"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Quote, Star, Building2, Factory, Warehouse, Cog, Shield, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import avatar1 from "../../assets/Images/testimonial/c1.jpg";
import avatar2 from "../../assets/Images/testimonial/c2.jpg";
import avatar3 from "../../assets/Images/testimonial/c4.jpg";

const TestimonialSection = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const testimonials = [
    { id: 1, name: t("testimonials.anjali.name"), role: t("testimonials.anjali.role"), company: t("testimonials.anjali.company"), avatar: avatar1, content: t("testimonials.anjali.content"), rating: 5 },
    { id: 2, name: t("testimonials.david.name"), role: t("testimonials.david.role"), company: t("testimonials.david.company"), avatar: avatar2, content: t("testimonials.david.content"), rating: 5 },
    { id: 3, name: t("testimonials.fatima.name"), role: t("testimonials.fatima.role"), company: t("testimonials.fatima.company"), avatar: avatar3, content: t("testimonials.fatima.content"), rating: 5 },
    { id: 4, name: t("testimonials.rajesh.name"), role: t("testimonials.rajesh.role"), company: t("testimonials.rajesh.company"), avatar: avatar1, content: t("testimonials.rajesh.content"), rating: 5 },
    { id: 5, name: t("testimonials.sarah.name"), role: t("testimonials.sarah.role"), company: t("testimonials.sarah.company"), avatar: avatar2, content: t("testimonials.sarah.content"), rating: 5 },
    { id: 6, name: t("testimonials.michael.name"), role: t("testimonials.michael.role"), company: t("testimonials.michael.company"), avatar: avatar3, content: t("testimonials.michael.content"), rating: 5 },
  ];

  const companyLogos = {
    [t("testimonials.anjali.company")]: { icon: <Building2 className="w-6 h-6 text-blue-600" />, bgColor: "bg-blue-50", borderColor: "border-blue-200", textColor: "text-blue-700" },
    [t("testimonials.david.company")]: { icon: <Factory className="w-6 h-6 text-green-600" />, bgColor: "bg-green-50", borderColor: "border-green-200", textColor: "text-green-700" },
    [t("testimonials.fatima.company")]: { icon: <Cog className="w-6 h-6 text-orange-600" />, bgColor: "bg-orange-50", borderColor: "border-orange-200", textColor: "text-orange-700" },
    [t("testimonials.rajesh.company")]: { icon: <Warehouse className="w-6 h-6 text-red-600" />, bgColor: "bg-red-50", borderColor: "border-red-200", textColor: "text-red-700" },
    [t("testimonials.sarah.company")]: { icon: <Shield className="w-6 h-6 text-purple-600" />, bgColor: "bg-purple-50", borderColor: "border-purple-200", textColor: "text-purple-700" },
    [t("testimonials.michael.company")]: { icon: <Zap className="w-6 h-6 text-yellow-600" />, bgColor: "bg-yellow-50", borderColor: "border-yellow-200", textColor: "text-yellow-700" },
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => prev >= testimonials.length - itemsPerPage ? 0 : prev + 1);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length, itemsPerPage]);

  const cardVariants = { hidden: { opacity: 0, y: 20, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 15, duration: 0.6 } }, hover: { y: -4, scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)", transition: { type: "spring", stiffness: 400, damping: 25 } } };

  const StarRating = ({ rating }) => (
    <div className="flex space-x-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className={`${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"} transition-colors duration-200`} />
      ))}
    </div>
  );

  const CompanyLogo = ({ company }) => {
    const logoConfig = companyLogos[company] || companyLogos[t("testimonials.anjali.company")];
    return <div className={`w-12 h-12 rounded-lg border-2 ${logoConfig.borderColor} ${logoConfig.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}><div className={logoConfig.textColor}>{logoConfig.icon}</div></div>;
  };

  const TestimonialCard = ({ testimonial }) => (
    <motion.div variants={cardVariants} whileHover="hover" className={`relative h-full p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group ${isArabic ? "rtl" : "ltr"}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-4 right-4 text-blue-50 group-hover:text-blue-100 transition-colors duration-300"><Quote size={40} strokeWidth={1.5} /></div>
      <div className="relative z-10">
        <div className="mb-3"><StarRating rating={testimonial.rating} /></div>
        <blockquote className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">{testimonial.content}</blockquote>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center">
            <div className="relative">
              <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <div className="ml-3">
              <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
              <p className="text-xs text-gray-500">{testimonial.role}</p>
              <p className="text-xs text-blue-600 font-medium">{testimonial.company}</p>
            </div>
          </div>
          <CompanyLogo company={testimonial.company} />
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="testimonials"
      className="relative py-12 bg-gradient-to-br from-gray-25 to-gray-50 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`, backgroundSize: "40px 40px" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Logos Carousel */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-16">
          <div className="overflow-hidden relative w-full">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
            <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          {/* <motion.div
            variants={titleVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
          </motion.div> */}

        <motion.h2
  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
>
  {t("testimonials.sectionTitle", "Trusted by Industry")}{" "}
  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
    {t("testimonials.sectionHighlight", "Clients")}
  </span>
</motion.h2>
          
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Discover why leading companies choose us for their industrial construction needs. 
            Quality, reliability, and excellence in every project.
          </motion.p> */}
        </motion.div>

        

            <motion.div className="flex gap-8" animate={{ x: [0, -((136 * testimonials.length) + (32 * (testimonials.length - 1)))] }} transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}>
              {[...Array(2)].map((_, dupIndex) =>
                testimonials.map((testimonial) => {
                  const logoConfig = companyLogos[testimonial.company];
                  return (
                    <motion.div key={`${dupIndex}-${testimonial.id}`} whileHover={{ scale: 1.1, y: -2 }} className={`flex flex-col items-center justify-center p-4 bg-white rounded-lg border-2 ${logoConfig.borderColor} ${logoConfig.bgColor} shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex-shrink-0`} style={{ width: '136px', height: '96px' }}>
                      <div className={logoConfig.textColor}>{logoConfig.icon}</div>
                      <p className="text-xs font-medium mt-2 text-center text-gray-700">{testimonial.company.split(" ")[0]}</p>
                    </motion.div>
                  );
                })
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.5 }} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {[{ number: "200+", label: t("testimonials.stats.projectsCompleted") }, { number: "98%", label: t("testimonials.stats.clientSatisfaction") }, { number: "15+", label: t("testimonials.stats.yearsExperience") }, { number: "50+", label: t("testimonials.stats.industryPartners") }].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
