"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroImage from "../../assets/Images/hero.jpg";

const HeroSection = () => {
  const { t } = useTranslation(); // i18n hook

  return (
    <section className="relative h-screen flex mt-[5rem] items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-blue-900/80 to-cyan-900/90 z-10"></div>

      {/* Content */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 text-center text-white max-w-6xl mx-auto">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <h1 className="text-3xl sm:text-4xl pt-16 md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            {t("hero.buildingTheFuture")}{" "}
            <motion.span
              className="text-blue-400"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {t("hero.strength")}
            </motion.span>{" "}
            &{" "}
            <motion.span
              className="text-cyan-400"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {t("hero.innovation")}
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed"
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <span>{t("hero.getQuote")}</span>
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </motion.a>

          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center justify-center gap-2 px-6 py-3 border border-white/50 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            <Play className="h-4 w-4" />
            <span>{t("hero.ourServices")}</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
