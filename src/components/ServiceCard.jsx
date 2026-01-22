import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
  buttonText = "Explore More",
  buttonLink = "#",
  image,
  gradient = "from-orange-500 to-yellow-500",
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative h-[450px] rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
      </div>

      {/* Floating Icon */}
      <div className="absolute top-6 right-6 z-20">
        <motion.div
          initial={{ scale: 0.8 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-xl border-2 border-white/20 backdrop-blur-sm`}
        >
          <Icon className="text-white text-3xl" />
        </motion.div>
      </div>

      {/* Content Section - Glassmorphism */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl group-hover:bg-white/20 transition-all duration-300 group-hover:transform group-hover:-translate-y-2">
          <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-orange-400 transition-colors">
            {title}
          </h3>

          <p className="text-gray-200 text-sm mb-4 line-clamp-2 font-medium opacity-90 group-hover:line-clamp-none transition-all duration-500">
            {description}
          </p>

          {/* Features - Subtle List */}
          {features && (
            <div className="space-y-2 mb-4 hidden group-hover:block transition-all duration-500 overflow-hidden">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-center text-xs text-white/90 font-semibold">
                  <FaCheckCircle className="text-orange-400 mr-2 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <Link
            to={buttonLink}
            className="inline-flex items-center text-sm font-bold text-white bg-orange-600 hover:bg-orange-500 px-6 py-2.5 rounded-xl transition-all shadow-lg group/btn"
          >
            {buttonText}
            <FaArrowRight className="ml-2 text-xs group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Border Glow on Hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500/50 rounded-3xl transition-all duration-500 pointer-events-none"></div>
    </motion.div>
  );
};

export default ServiceCard;
