"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Shield } from "lucide-react";

// Images
import contactHero from "../assets/Images/Contactus/contacthero.jpg";
import office1 from "../assets/Images/Contactus/o1.jpg";
import office2 from "../assets/Images/Contactus/o2.jpg";
import office3 from "../assets/Images/Contactus/o3.jpg";

// i18next
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const offices = [
    {
      city: t("contact.offices.dubai.city", "Dubai Office"),
      address: t("contact.offices.dubai.address", "Dubai Industrial Park, Plot 123, Street 45, Dubai, UAE"),
      phone: "+971 4 123 4567",
      email: "dubai@constructpro.ae",
      hours: t("contact.offices.dubai.hours", "Sun - Thu: 8:00 AM - 6:00 PM"),
      image: office1,
    },
    {
      city: t("contact.offices.abudhabi.city", "Abu Dhabi Office"),
      address: t("contact.offices.abudhabi.address", "Mussafah Industrial Area, Sector 10, Abu Dhabi, UAE"),
      phone: "+971 2 234 5678",
      email: "abudhabi@constructpro.ae",
      hours: t("contact.offices.abudhabi.hours", "Sun - Thu: 8:00 AM - 6:00 PM"),
      image: office2,
    },
    {
      city: t("contact.offices.sharjah.city", "Sharjah Office"),
      address: t("contact.offices.sharjah.address", "Industrial Area 12, Sharjah, UAE"),
      phone: "+971 6 345 6789",
      email: "sharjah@constructpro.ae",
      hours: t("contact.offices.sharjah.hours", "Sun - Thu: 8:00 AM - 6:00 PM"),
      image: office3,
    },
  ];
 
  const services = [
    { value: "civil-construction", label: t("services.service1.title", "Civil Construction") },
    { value: "welding", label: t("services.service2.title", "Welding Services") },
    { value: "firefighting", label: t("services.service3.title", "Firefighting Systems") },
    { value: "security-electrical", label: t("services.service4.title", "Security & Electrical") },
    { value: "sandblasting-coating", label: t("services.service5.title", "Sandblasting & Coating") },
    { value: "manpower-rental", label: t("services.service6.title", "Manpower Solutions") },
  ];

  const contactCards = [
    {
      icon: Phone,
      title: t("contact.phone.title", "Phone"),
      mainText: t("contact.phone.text", "+971 4 123 4567"),
      subtitle: t("contact.hours.text", "Sun - Thu: 8:00 AM - 6:00 PM"),
    },
    {
      icon: Mail,
      title: t("contact.email.title", "Email"),
      mainText: t("contact.email.text", "info@constructpro.ae"),
      subtitle: t("contact.support", "24/7 Support Available"),
    },
    {
      icon: MapPin,
      title: t("contact.address.title", "Address"),
      mainText: t("contact.address.text", "Dubai Industrial Park"),
      subtitle: t("contact.hours.text", "Sun - Thu: 8:00 AM - 6:00 PM"),
    },
  ];

  const ctaFeatures = t("cta.features", {
    returnObjects: true,
    defaultValue: [
      "24/7 Support Available",
      "Free Consultation", 
      "Quick Response Time",
      "Expert Advice"
    ]
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 10 } },
  };

  return (
    <div className="min-h-screen bg-gray-50" dir={isArabic ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="relative overflow-hidden mt-24">
        <div className="absolute inset-0">
          <img 
            src={contactHero} 
            alt={t("contact.title", "Contact Us")} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            {t("contact.title", "Contact Us")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 mb-12"
          >
            {t("contact.description", "Get in touch with our expert team to discuss your industrial construction needs")}
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {contactCards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <card.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-1">{card.mainText}</p>
                <p className="text-gray-600">{card.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Offices */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: isArabic ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {t("contact.formTitle", "Get In Touch")}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contact.form.name", "Full Name")}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t("contact.form.placeholderName", "Enter your full name")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contact.form.company", "Company Name")}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder={t("contact.form.placeholderCompany", "Enter your company name")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contact.form.email", "Email Address")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t("contact.form.placeholderEmail", "Enter your email address")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contact.form.phone", "Phone Number")}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={t("contact.form.placeholderPhone", "Enter your phone number")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.service", "Service Interested In")}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">{t("contact.form.selectService", "Select a service")}</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.message", "Message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t("contact.form.placeholderMessage", "Tell us about your project requirements...")}
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="h-5 w-5 mr-2" />
                        {t("contact.form.success", "Message Sent!")}
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        {t("contact.form.submit", "Send Message")}
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Offices Section */}
            <motion.div
              initial={{ opacity: 0, x: isArabic ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t("contact.officesTitle", "Our Offices")}
              </h2>
              <div className="space-y-6">
                {offices.map((office, idx) => (
                  <motion.div 
                    key={idx} 
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300" 
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-24 h-24 flex-shrink-0">
                        <img 
                          src={office.image} 
                          alt={office.city} 
                          className="w-full h-full object-cover rounded-lg" 
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{office.city}</h3>
                        <div className="space-y-2">
                          <div className="flex items-start">
                            <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{office.address}</span>
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{office.phone}</span>
                          </div>
                          <div className="flex items-center">
                            <Mail className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{office.email}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{office.hours}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("cta.title", "Ready to Start Your Project?")}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              {t("cta.subtitle", "Contact us today for a free consultation and quote")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center shadow-lg" 
                whileHover={{ scale: 1.05 }} 
                 whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5 mr-2" /> 
                {t("cta.callNow", "Call Now")}
              </motion.button>
              <motion.button 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center" 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-5 w-5 mr-2" /> 
                {t("cta.emailUs", "Email Us")}
              </motion.button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              {ctaFeatures.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex items-center text-white/90" 
                  initial={{ opacity: 0 }} 
                  whileInView={{ opacity: 1 }} 
                  transition={{ delay: 0.5 + idx * 0.1 }} 
                  viewport={{ once: true }}
                >
                  <Shield className="h-5 w-5 mr-2" /> 
                  {feature}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  ); 
};

export default ContactPage;