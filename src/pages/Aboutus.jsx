"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Target,
  Shield,
  CheckCircle,
  Building,
  TrendingUp,
  Handshake,
  Lightbulb,
  Calendar,
  Mail,
  Phone,
} from "lucide-react";
import facilityImage from "../assets/images/aboutus/faculty.jpg";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar"; // Detect current language

  // Language switch handler
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 12 } },
  };

  const companyStats = [
    { icon: Calendar, value: "15+", label: t("stats.yearsExperience") },
    { icon: Users, value: "500+", label: t("stats.professionals") },
    { icon: Building, value: "1000+", label: t("stats.projects") },
    { icon: Award, value: "50+", label: t("stats.awards") },
  ];

  const coreValues = [
    { icon: Shield, title: t("values.safety"), description: t("values.safetyDesc"), color: "#1e40af" },
    { icon: Target, title: t("values.quality"), description: t("values.qualityDesc"), color: "#d97706" },
    { icon: Handshake, title: t("values.integrity"), description: t("values.integrityDesc"), color: "#059669" },
    { icon: Lightbulb, title: t("values.innovation"), description: t("values.innovationDesc"), color: "#7c3aed" },
  ];

  const teamMembers = ["john", "sarah", "michael", "emily"];

  return (
    <div className="min-h-screen bg-white" dir={isArabic ? "rtl" : "ltr"}>
      {/* Language Switch Buttons */}
      <div className="flex justify-end space-x-2 p-4">
        <button
          onClick={() => handleLanguageChange("en")}
          className={`px-4 py-2 rounded ${!isArabic ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
        >
          EN
        </button>
        <button
          onClick={() => handleLanguageChange("ar")}
          className={`px-4 py-2 rounded ${isArabic ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
        >
          AR
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 to-blue-50 text-center">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {t("hero.mainTitle")}
        </motion.h1>
        <motion.p
          className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {companyStats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t("story.title")}</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">{t("story.p1")}</p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">{t("story.p2")}</p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-slate-700 font-medium">{t("story.quality")}</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-slate-700 font-medium">{t("story.growth")}</span>
                </div>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <img src={facilityImage} alt="Our Facility" className="rounded-xl shadow-lg" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t("values.title")}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t("values.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${value.color}10` }}>
                  <value.icon className="h-6 w-6" style={{ color: value.color }} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t("team.title")}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t("team.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((key) => (
              <motion.div
                key={key}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-slate-100 rounded-xl p-8 mb-4">
                  <Users className="h-12 w-12 text-slate-400 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{t(`team.members.${key}.position`)}</h3>
                <p className="text-sm text-slate-600">{t(`team.members.${key}.experience`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t("cta.title")}</h2>
          <p className="text-gray-600 mb-6">{t("cta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              <Phone className="h-4 w-4 mr-2 inline" />
              {t("cta.contact")}
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:border-gray-400 transition-colors">
              <Mail className="h-4 w-4 mr-2 inline" />
              {t("cta.quote")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
